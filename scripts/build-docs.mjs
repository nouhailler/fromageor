#!/usr/bin/env node
/**
 * Génère le site de documentation statique (docs-site/) dans dist/docs/.
 *
 * Compile docs-site/ssr-entry.tsx en bundle Node via l'API de Vite (mode SSR
 * — réutilise @vitejs/plugin-react, déjà une dépendance, plutôt que d'ajouter
 * un outil de build dédié), l'importe, puis appelle renderToStaticMarkup pour
 * chaque page. Zéro framework expédié au visiteur : les pages sont du HTML
 * statique, seule la recherche a un peu de JS (search-client.js, vanilla).
 *
 * S'exécute après `vite build` (voir "build" dans package.json) : le service
 * worker de l'app précache dist/ *avant* que ce script écrive dist/docs/, et
 * `globIgnores: ['docs/**']` (vite.config.ts) l'exclut explicitement en plus,
 * au cas où l'ordre changerait un jour — le site de doc ne doit jamais faire
 * partie du bundle PWA.
 */
import { build } from 'vite'
import react from '@vitejs/plugin-react'
import { mkdir, writeFile, readFile, copyFile, rm } from 'node:fs/promises'
import { existsSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')
const SSR_OUT = join(ROOT, '.docs-ssr')
const DIST_DOCS = join(ROOT, 'dist', 'docs')

async function buildSsrBundle() {
  await build({
    configFile: false,
    root: ROOT,
    logLevel: 'warn',
    plugins: [react()],
    build: {
      ssr: join(ROOT, 'docs-site', 'ssr-entry.tsx'),
      outDir: SSR_OUT,
      emptyOutDir: true,
      minify: false,
      rollupOptions: {
        output: { format: 'es', entryFileNames: 'ssr-entry.mjs' },
      },
    },
  })
}

async function writePages() {
  const mod = await import(pathToFileURL(join(SSR_OUT, 'ssr-entry.mjs')).href)
  const pages = mod.buildSite()
  const searchIndex = mod.buildSearchIndex()

  for (const { url, html } of pages) {
    const dir = join(DIST_DOCS, url.replace(/^\/docs\//, '').replace(/\/$/, ''))
    await mkdir(dir, { recursive: true })
    await writeFile(join(dir, 'index.html'), html, 'utf8')
  }

  const assetsDir = join(DIST_DOCS, 'assets')
  await mkdir(assetsDir, { recursive: true })
  await writeFile(join(assetsDir, 'search-index.json'), JSON.stringify(searchIndex), 'utf8')

  console.log(`docs-site: ${pages.length} pages écrites dans dist/docs/`)
}

async function writeAssets() {
  const assetsDir = join(DIST_DOCS, 'assets')
  const fontsDir = join(assetsDir, 'fonts')
  await mkdir(fontsDir, { recursive: true })

  const tokens = await readFile(join(ROOT, 'src', 'styles', 'tokens.css'), 'utf8')
  const docsCss = await readFile(join(ROOT, 'docs-site', 'styles', 'docs.css'), 'utf8')
  await writeFile(join(assetsDir, 'docs.css'), `${tokens}\n\n${docsCss}`, 'utf8')

  await copyFile(join(ROOT, 'docs-site', 'search-client.js'), join(assetsDir, 'search-client.js'))

  const fonts = [
    ['node_modules/@fontsource/figtree/files/figtree-latin-400-normal.woff2', 'figtree-400.woff2'],
    ['node_modules/@fontsource/figtree/files/figtree-latin-600-normal.woff2', 'figtree-600.woff2'],
    ['node_modules/@fontsource/caprasimo/files/caprasimo-latin-400-normal.woff2', 'caprasimo-400.woff2'],
  ]
  for (const [src, name] of fonts) {
    await copyFile(join(ROOT, src), join(fontsDir, name))
  }
}

async function main() {
  if (existsSync(DIST_DOCS)) await rm(DIST_DOCS, { recursive: true, force: true })
  await buildSsrBundle()
  await writePages()
  await writeAssets()
  await rm(SSR_OUT, { recursive: true, force: true })
}

main().catch((err) => {
  console.error(err)
  process.exitCode = 1
})
