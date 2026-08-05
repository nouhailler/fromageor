#!/usr/bin/env node
// Populates src/data/cheese-images.ts with one representative photo per
// cheese, sourced from Wikipedia's page-summary API (which points at a
// Wikimedia Commons file) plus that file's Commons attribution metadata.
//
// Requires outbound network access to fr.wikipedia.org and
// commons.wikimedia.org — this repo's sandboxed dev environment blocks
// those domains by default, so run this from an environment/session with
// full network access (see README's "Images" section).
//
// Usage: node scripts/fetch-cheese-images.mjs [--only id1,id2] [--limit N] [--delay ms] [--dry]

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const cheesesPath = path.join(repoRoot, 'src/data/cheeses.ts')
const outPath = path.join(repoRoot, 'src/data/cheese-images.ts')

const USER_AGENT =
  'FromageorApp/1.0 (https://fromageor.netlify.app; cheese photo enrichment script; contact: repo issues)'

function parseArgs(argv) {
  const args = { only: null, limit: null, delay: 300, dry: false }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--only') args.only = new Set(argv[++i].split(',').map((s) => s.trim()))
    else if (argv[i] === '--limit') args.limit = Number(argv[++i])
    else if (argv[i] === '--delay') args.delay = Number(argv[++i])
    else if (argv[i] === '--dry') args.dry = true
  }
  return args
}

/** Extracts { id, nom, alt }[] from the generated cheeses.ts without
 *  compiling TypeScript — id/nom/alt each appear exactly once per cheese,
 *  in file order, so zipping the three match lists by index is safe. */
function parseCheeseList(source) {
  const ids = [...source.matchAll(/"id":\s*"([^"]+)"/g)].map((m) => m[1])
  const noms = [...source.matchAll(/"nom":\s*"([^"]+)"/g)].map((m) => m[1])
  const alts = [...source.matchAll(/"alt":\s*\[([\s\S]*?)\]/g)].map((m) =>
    [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]),
  )
  if (ids.length !== noms.length || ids.length !== alts.length) {
    throw new Error(
      `Field count mismatch while parsing cheeses.ts (id=${ids.length}, nom=${noms.length}, alt=${alts.length}) — the generated file's shape may have changed.`,
    )
  }
  return ids.map((id, i) => ({ id, nom: noms[i], alt: alts[i] }))
}

function loadExistingImages() {
  if (!fs.existsSync(outPath)) return {}
  const text = fs.readFileSync(outPath, 'utf8')
  const start = text.indexOf('CHEESE_IMAGES: Record<string, CheeseImage> = ')
  if (start === -1) return {}
  const braceStart = text.indexOf('{', start)
  const braceEnd = text.lastIndexOf('}')
  if (braceStart === -1 || braceEnd === -1) return {}
  try {
    return JSON.parse(text.slice(braceStart, braceEnd + 1))
  } catch {
    return {}
  }
}

async function fetchJson(requestUrl) {
  const res = await fetch(requestUrl, { headers: { 'User-Agent': USER_AGENT, Accept: 'application/json' } })
  if (res.status === 404) return null
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${requestUrl}`)
  return res.json()
}

async function fetchWikipediaSummary(title) {
  const slug = encodeURIComponent(title.replace(/ /g, '_'))
  return fetchJson(`https://fr.wikipedia.org/api/rest_v1/page/summary/${slug}`)
}

/** Commons file URLs look like either
 *  .../commons/thumb/<a>/<ab>/Filename.jpg/220px-Filename.jpg  (thumbnail)
 *  .../commons/<a>/<ab>/Filename.jpg                            (original)
 *  In both cases the real file name is the segment right after the two
 *  one/two-char hash directories. */
function extractCommonsFileName(imageUrl) {
  const parts = new URL(imageUrl).pathname.split('/').filter(Boolean)
  const i = parts.indexOf('commons')
  if (i === -1) return null
  const afterHashDirs = parts[i + 1] === 'thumb' ? parts[i + 4] : parts[i + 3]
  return afterHashDirs ? decodeURIComponent(afterHashDirs) : null
}

function stripHtml(value) {
  if (!value) return undefined
  return value
    .replace(/<[^>]+>/g, '')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#0?39;/g, "'")
    .trim() || undefined
}

async function fetchCommonsAttribution(fileName) {
  const data = await fetchJson(
    `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(`File:${fileName}`)}&prop=imageinfo&iiprop=extmetadata&format=json&origin=*`,
  )
  const pages = data?.query?.pages
  const page = pages ? Object.values(pages)[0] : null
  const meta = page?.imageinfo?.[0]?.extmetadata
  if (!meta) return {}
  return {
    filePageUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName).replace(/%20/g, '_')}`,
    author: stripHtml(meta.Artist?.value),
    license: meta.LicenseShortName?.value,
    licenseUrl: meta.LicenseUrl?.value,
  }
}

async function resolveCheeseImage(cheese) {
  const candidates = [cheese.nom, ...cheese.alt]
  for (const title of candidates) {
    const summary = await fetchWikipediaSummary(title)
    if (!summary || summary.type === 'disambiguation') continue
    const image = summary.thumbnail || summary.originalimage
    if (!image?.source) continue

    const result = {
      url: image.source,
      width: image.width,
      height: image.height,
      pageUrl: summary.content_urls?.desktop?.page ?? `https://fr.wikipedia.org/wiki/${encodeURIComponent(title)}`,
    }

    const fileName = extractCommonsFileName(image.source)
    if (fileName) {
      try {
        Object.assign(result, await fetchCommonsAttribution(fileName))
      } catch (err) {
        console.warn(`  ! attribution lookup failed for ${fileName}: ${err.message}`)
      }
    }
    return result
  }
  return null
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

function writeOutput(images, cheeseOrder) {
  const ordered = {}
  for (const { id } of cheeseOrder) {
    if (images[id]) ordered[id] = images[id]
  }
  const body = `// GENERATED by scripts/fetch-cheese-images.mjs from the Wikipedia / Wikimedia
// Commons APIs. Do not hand-edit — rerun the script to refresh.

export interface CheeseImage {
  /** Direct, hotlink-safe URL to a Wikimedia-hosted photo. */
  url: string
  width?: number
  height?: number
  /** Wikipedia article the photo was found on. */
  pageUrl: string
  /** Commons file page, when resolved — the canonical attribution target. */
  filePageUrl?: string
  /** Plain-text author/credit from the file's Commons metadata, if available. */
  author?: string
  license?: string
  licenseUrl?: string
}

/** Keyed by Cheese.id. Cheeses missing here fall back to the placeholder UI. */
export const CHEESE_IMAGES: Record<string, CheeseImage> = ${JSON.stringify(ordered, null, 2)}
`
  fs.writeFileSync(outPath, body)
}

async function main() {
  const { only, limit, delay, dry } = parseArgs(process.argv.slice(2))
  const source = fs.readFileSync(cheesesPath, 'utf8')
  let cheeses = parseCheeseList(source)
  if (only) cheeses = cheeses.filter((c) => only.has(c.id))
  if (limit !== null) cheeses = cheeses.slice(0, limit)

  const images = loadExistingImages()
  let found = 0
  let missing = 0
  let errors = 0

  for (const cheese of cheeses) {
    try {
      const image = await resolveCheeseImage(cheese)
      if (image) {
        images[cheese.id] = image
        found++
        console.log(`✓ ${cheese.nom} -> ${image.url}`)
      } else {
        missing++
        console.log(`- ${cheese.nom}: no usable Wikipedia photo found`)
      }
    } catch (err) {
      errors++
      console.warn(`! ${cheese.nom}: ${err.message}`)
    }
    await sleep(delay)
  }

  console.log(`\n${found} found, ${missing} missing, ${errors} errors (out of ${cheeses.length}).`)

  if (dry) {
    console.log('--dry: not writing', outPath)
    return
  }

  const fullOrder = parseCheeseList(source)
  writeOutput(images, fullOrder)
  console.log(`Wrote ${Object.keys(images).length} image entries to ${path.relative(repoRoot, outPath)}`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
