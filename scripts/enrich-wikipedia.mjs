#!/usr/bin/env node
// Enriches src/data/cheeses.ts with a hero photo + short summary sourced
// live from the French Wikipedia (article summary/extract, page image) and
// Wikimedia Commons (image credit/license), matched by cheese name.
//
// Usage: node scripts/enrich-wikipedia.mjs [--force] [--id <cheese-id>]
//   --force     re-fetch and overwrite cheeses that already have image+wikipedia
//   --id <id>   only process one cheese (for debugging a single match)
//
// Re-run this after scripts/import-cheeses.mjs (which regenerates cheeses.ts
// from a design handoff and would otherwise wipe this enrichment out).

import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const repoRoot = path.resolve(__dirname, '..')
const cheesesPath = path.join(repoRoot, 'src/data/cheeses.ts')

const UA = 'FromageorBot/1.0 (https://fromageor.netlify.app; PWA de decouverte des fromages francais; contact via GitHub repo)'

function parseArgs(argv) {
  const args = { force: false, id: null }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--force') args.force = true
    else if (argv[i] === '--id') args.id = argv[++i]
  }
  return args
}

function readCheeses() {
  const text = fs.readFileSync(cheesesPath, 'utf8')
  const m = text.match(/export const CHEESES: Cheese\[\] = (\[[\s\S]*\])\n$/)
  if (!m) throw new Error('Could not locate CHEESES array literal in cheeses.ts')
  const header = text.slice(0, m.index)
  const cheeses = JSON.parse(m[1])
  return { header, cheeses }
}

function writeCheeses(header, cheeses) {
  const out = `${header}export const CHEESES: Cheese[] = ${JSON.stringify(cheeses, null, 2)}\n`
  fs.writeFileSync(cheesesPath, out)
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/** Retries once on HTTP 429 (rate limit) with a short backoff — the API
 *  calls needed per cheese (article + credit + gallery lookups) are frequent
 *  enough over a full run that Wikimedia occasionally throttles. */
async function fetchJson(apiUrl, attempt = 0) {
  const res = await fetch(apiUrl, { headers: { 'User-Agent': UA, Accept: 'application/json' } })
  if (res.status === 429 && attempt < 3) {
    await sleep(1500 * (attempt + 1))
    return fetchJson(apiUrl, attempt + 1)
  }
  if (!res.ok) throw new Error(`HTTP ${res.status} for ${apiUrl}`)
  return res.json()
}

function stripHtml(s) {
  return s.replace(/<[^>]+>/g, '').trim()
}

function stripUtm(u) {
  try {
    const parsed = new URL(u)
    parsed.search = ''
    return parsed.toString()
  } catch {
    return u
  }
}

const DISAMBIGUATION_RE = /(peut désigner|peut faire référence|peut se référer|page d.homonymie|est un prénom|est un patronyme|est un toponyme|nom de lieu|un nom de famille)/i
const CHEESE_RE = /\bfromag|\blaitier|\blaitière/i
const STOPWORDS = new Set([
  'de', 'du', 'des', 'la', 'le', 'les', 'un', 'une', 'et', 'd', 'l', 'au', 'aux',
  'fromage', 'fromages', 'tomme', 'tommette', 'tome',
])

function paragraphLines(extract) {
  return (extract || '').split('\n').map((l) => l.trim()).filter(Boolean)
}

/** Rejects extracts that are disambiguation notices or otherwise don't read
 *  as being about a cheese in their opening line — many cheese names double
 *  as commune/person names on French Wikipedia, and their homonymy pages
 *  enumerate every sense as its own short line, several of which can
 *  mention "fromage" without the page being about one in particular (e.g.
 *  "Salers", "Cantal", "Saint-Félicien"). A 2-line extract gets a narrower
 *  exception: a few real single-topic articles split their opening sentence
 *  across a stray "\n" in the source wikitext (e.g. "Tome du Champsaur"),
 *  so both lines are considered together — but only when neither line reads
 *  as introducing a list (ends with ":"). */
function isCheeseArticle(extract) {
  const lines = paragraphLines(extract)
  if (lines.length === 0) return false
  if (!DISAMBIGUATION_RE.test(lines[0]) && CHEESE_RE.test(lines[0])) return true
  if (lines.length === 2) {
    const [l0, l1] = lines
    if (DISAMBIGUATION_RE.test(l0) || DISAMBIGUATION_RE.test(l1)) return false
    if (l0.endsWith(':') || l1.endsWith(':')) return false
    return CHEESE_RE.test(l0) || CHEESE_RE.test(l1)
  }
  return false
}

const COMBINING_DIACRITICS_RE = new RegExp('[\\u0300-\\u036f]', 'g')

function normalize(s) {
  return s.normalize('NFD').replace(COMBINING_DIACRITICS_RE, '').toLowerCase()
}

function significantWords(s) {
  return normalize(s)
    .split(/[^a-z0-9]+/)
    .filter((w) => w.length >= 4 && !STOPWORDS.has(w))
}

/** For search-fallback candidates (as opposed to direct title lookups),
 *  requires the article title to share word(s) with the cheese's own
 *  name/alt names — otherwise a broad category article (e.g. bare "Tomme",
 *  or an index page) would get accepted for any tomme-family cheese just
 *  because it mentions "fromage". When both the cheese name and the article
 *  title carry two or more distinctive words, a single shared word isn't
 *  enough — e.g. "Vacherin d'Abondance" and "Vacherin des Bauges" only share
 *  "vacherin" but are different AOC cheeses. A short, more generic title
 *  (one distinctive word, like "Tomme de Savoie" -> "Tomme du Champsaur"'s
 *  overlap on a single place name) is still accepted on one shared word. */
function titleMatchesCheeseName(title, cheeseName, altNames) {
  const titleWords = new Set(significantWords(title))
  if (titleWords.size === 0) return false
  return [cheeseName, ...altNames].some((name) => {
    const nameWords = significantWords(name)
    if (nameWords.length === 0) return false
    const overlap = nameWords.filter((w) => titleWords.has(w)).length
    const required = nameWords.length >= 2 && titleWords.size >= 2 ? 2 : 1
    return overlap >= required
  })
}

async function fetchArticleByTitle(title) {
  const qs = new URLSearchParams({
    action: 'query',
    format: 'json',
    prop: 'pageimages|extracts|info',
    exintro: '1',
    explaintext: '1',
    piprop: 'name|thumbnail',
    pithumbsize: '800',
    inprop: 'url',
    redirects: '1',
    titles: title,
  })
  const data = await fetchJson(`https://fr.wikipedia.org/w/api.php?${qs}`)
  const pages = data?.query?.pages
  if (!pages) return null
  const page = Object.values(pages)[0]
  if (!page || page.missing !== undefined || !page.extract) return null
  return page
}

async function searchCandidateTitles(query) {
  const qs = new URLSearchParams({ action: 'query', format: 'json', list: 'search', srsearch: query, srlimit: '5' })
  const data = await fetchJson(`https://fr.wikipedia.org/w/api.php?${qs}`)
  return (data?.query?.search || []).map((r) => r.title)
}

/** First couple of lines of the lead extract, joined into one summary
 *  paragraph — two lines because a few articles break their opening
 *  sentence across a stray "\n" (e.g. "Tome du Champsaur"), and a short
 *  second sentence usually still reads fine appended to the first. */
function summaryText(extract) {
  const lines = (extract || '').split('\n').map((l) => l.trim()).filter(Boolean)
  return lines.slice(0, 2).join(' ').slice(0, 500).trim()
}

function toArticle(page) {
  return {
    title: page.title,
    extract: summaryText(page.extract),
    url: page.fullurl,
    imageName: page.pageimage,
    thumbnail: page.thumbnail,
  }
}

/** Looks up a French Wikipedia article for a cheese by name (following
 *  redirects), rejecting matches that aren't actually about a cheese (e.g. a
 *  same-named commune or a disambiguation page). Tries each direct title
 *  first (name, alt names, "<name> (fromage)"), then falls back to a
 *  full-text search for "<name> fromage" and checks the top results.
 *  Returns null if nothing plausible is found. */
async function lookupArticle(cheeseName, altNames) {
  const directCandidates = [cheeseName, `${cheeseName} (fromage)`, ...altNames]
  for (const title of directCandidates) {
    const page = await fetchArticleByTitle(title)
    if (page && isCheeseArticle(page.extract)) return toArticle(page)
  }

  for (const name of [cheeseName, ...altNames]) {
    let searchTitles
    try {
      searchTitles = await searchCandidateTitles(`${name} fromage`)
    } catch {
      continue
    }
    for (const title of searchTitles) {
      if (!titleMatchesCheeseName(title, cheeseName, altNames)) continue
      const page = await fetchArticleByTitle(title)
      if (page && isCheeseArticle(page.extract)) return toArticle(page)
    }
  }

  return null
}

function creditFromExtmetadata(meta) {
  const artist = meta.Artist?.value ? stripHtml(meta.Artist.value) : null
  const license = meta.LicenseShortName?.value || null
  return [artist, license].filter(Boolean).join(', ') || 'Wikimedia Commons'
}

/** Fetches Commons credit (artist + license) and the file's own categories
 *  for a "File:<name>" title — the categories are later used to find
 *  sibling photos of the same cheese (see pickCategoryName/fetchGalleryImages). */
async function lookupImageCredit(fileName) {
  const qs = new URLSearchParams({
    action: 'query',
    format: 'json',
    prop: 'imageinfo',
    iiprop: 'extmetadata',
    titles: `File:${fileName}`,
  })
  const data = await fetchJson(`https://commons.wikimedia.org/w/api.php?${qs}`)
  const pages = data?.query?.pages
  if (!pages) return null
  const page = Object.values(pages)[0]
  const meta = page?.imageinfo?.[0]?.extmetadata
  if (!meta) return null
  const credit = creditFromExtmetadata(meta)
  const creditUrl = `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName)}`
  const categoriesRaw = meta.Categories?.value || null
  return { credit, creditUrl, categoriesRaw }
}

/** Picks the best Commons category (from a file's pipe-separated Categories
 *  extmetadata) for finding more photos of the same cheese: an exact
 *  (accent/case-insensitive) match to the cheese's name/alt names first,
 *  otherwise the first category whose words overlap enough (same rule as
 *  titleMatchesCheeseName). Returns null if none look relevant. */
function pickCategoryName(categoriesRaw, cheeseName, altNames) {
  if (!categoriesRaw) return null
  const cats = categoriesRaw.split('|').map((c) => c.trim()).filter(Boolean)
  const names = [cheeseName, ...altNames]
  const exact = cats.find((cat) => names.some((n) => normalize(n) === normalize(cat)))
  if (exact) return exact
  return cats.find((cat) => titleMatchesCheeseName(cat, cheeseName, altNames)) || null
}

async function fetchCategoryMemberTitles(categoryName, limit) {
  const qs = new URLSearchParams({
    action: 'query',
    format: 'json',
    list: 'categorymembers',
    cmtitle: `Category:${categoryName}`,
    cmtype: 'file',
    cmlimit: String(limit),
  })
  const data = await fetchJson(`https://commons.wikimedia.org/w/api.php?${qs}`)
  return (data?.query?.categorymembers || []).map((m) => m.title.replace(/^File:/, ''))
}

/** Batched imageinfo (url + credit metadata) lookup for several files at
 *  once — MediaWiki accepts up to 50 pipe-separated titles per query. */
async function fetchImageInfoBatch(fileNames) {
  const map = new Map()
  if (fileNames.length === 0) return map
  const qs = new URLSearchParams({
    action: 'query',
    format: 'json',
    prop: 'imageinfo',
    iiprop: 'url|extmetadata',
    iiurlwidth: '800',
    titles: fileNames.map((f) => `File:${f}`).join('|'),
  })
  const data = await fetchJson(`https://commons.wikimedia.org/w/api.php?${qs}`)
  for (const page of Object.values(data?.query?.pages || {})) {
    const info = page?.imageinfo?.[0]
    if (!info) continue
    map.set(page.title.replace(/^File:/, ''), info)
  }
  return map
}

function isPhotoFile(fileName) {
  return /\.(jpe?g|png)$/i.test(fileName)
}

/** Finds up to `limit` extra photos of a cheese via its Commons category,
 *  excluding the file already used as the hero image. Category members are
 *  a mix of clean product shots and loosely-related photos (a dish, a farm,
 *  the packaging) since Commons categorizes anything that depicts or
 *  mentions the subject — so files matching the "<Nom> 01.jpg"-style
 *  numbered series used by the Wikicheese Commons project (the same series
 *  most hero photos come from) are preferred first. */
async function fetchGalleryImages(categoryName, excludeFileName, cheeseName, limit) {
  const titles = await fetchCategoryMemberTitles(categoryName, 20)
  const candidates = titles.filter((t) => t !== excludeFileName && isPhotoFile(t))
  if (candidates.length === 0) return []

  const prefix = normalize(cheeseName)
  candidates.sort((a, b) => {
    const aFirst = normalize(a).startsWith(prefix) ? 0 : 1
    const bFirst = normalize(b).startsWith(prefix) ? 0 : 1
    return aFirst - bFirst
  })

  const picked = candidates.slice(0, limit)
  const infoMap = await fetchImageInfoBatch(picked)
  const images = []
  for (const fileName of picked) {
    const info = infoMap.get(fileName)
    if (!info || !info.thumburl) continue
    images.push({
      url: stripUtm(info.thumburl),
      width: info.thumbwidth,
      height: info.thumbheight,
      credit: creditFromExtmetadata(info.extmetadata || {}),
      creditUrl: `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(fileName)}`,
    })
  }
  return images
}

async function enrichCheese(cheese) {
  let article = null
  try {
    article = await lookupArticle(cheese.nom, cheese.alt || [])
  } catch (err) {
    console.warn(`  [warn] lookup failed for "${cheese.nom}": ${err.message}`)
  }
  if (!article) {
    console.log(`  ✗ ${cheese.nom} — no Wikipedia article found`)
    return cheese
  }

  const next = { ...cheese, wikipedia: { url: article.url, extract: article.extract } }

  if (article.imageName && article.thumbnail) {
    try {
      const creditInfo = await lookupImageCredit(article.imageName)
      next.image = {
        url: stripUtm(article.thumbnail.source),
        width: article.thumbnail.width,
        height: article.thumbnail.height,
        credit: creditInfo?.credit ?? 'Wikimedia Commons',
        creditUrl: creditInfo?.creditUrl ?? `https://commons.wikimedia.org/wiki/File:${encodeURIComponent(article.imageName)}`,
      }

      const categoryName = creditInfo?.categoriesRaw
        ? pickCategoryName(creditInfo.categoriesRaw, cheese.nom, cheese.alt || [])
        : null
      let extraCount = 0
      if (categoryName) {
        try {
          const extras = await fetchGalleryImages(categoryName, article.imageName, cheese.nom, 4)
          if (extras.length > 0) {
            next.galleryImages = extras
            extraCount = extras.length
          }
        } catch (err) {
          console.warn(`  [warn] gallery fetch failed for category "${categoryName}": ${err.message}`)
        }
      }

      console.log(
        `  ✓ ${cheese.nom} — matched "${article.title}", image ${article.thumbnail.width}x${article.thumbnail.height}` +
          (extraCount ? `, +${extraCount} gallery photo(s)` : ''),
      )
    } catch (err) {
      console.warn(`  [warn] image credit lookup failed for "${article.imageName}": ${err.message}`)
      console.log(`  ~ ${cheese.nom} — matched "${article.title}", no image credit (skipped image)`)
    }
  } else {
    console.log(`  ~ ${cheese.nom} — matched "${article.title}", no lead image`)
  }

  return next
}

async function main() {
  const { force, id } = parseArgs(process.argv.slice(2))
  const { header, cheeses } = readCheeses()

  const out = []
  for (const cheese of cheeses) {
    if (id && cheese.id !== id) {
      out.push(cheese)
      continue
    }
    if (!force && cheese.image && cheese.wikipedia) {
      out.push(cheese)
      continue
    }
    out.push(await enrichCheese(cheese))
    await sleep(200)
  }

  writeCheeses(header, out)
  const withImage = out.filter((c) => c.image).length
  const withWiki = out.filter((c) => c.wikipedia).length
  const withGallery = out.filter((c) => c.galleryImages?.length).length
  console.log(
    `\nDone: ${withWiki}/${out.length} with Wikipedia summary, ${withImage}/${out.length} with a photo, ${withGallery}/${out.length} with extra gallery photos.`,
  )
}

main()
