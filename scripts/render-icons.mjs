#!/usr/bin/env node
/**
 * Rasterise public/pwa-icon.svg (et sa variante maskable) en PNG, pour les
 * plateformes qui n'acceptent pas d'icône SVG — iOS (apple-touch-icon) et
 * certains lanceurs Android.
 *
 * Playwright n'est pas une dépendance du projet (c'est un outil ponctuel) :
 *   npx playwright@1.62.1 install chromium   # une seule fois
 *   npx -p playwright@1.62.1 node scripts/render-icons.mjs
 */
import { chromium } from 'playwright'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const OUTPUTS = [
  { svg: 'pwa-icon.svg', out: 'apple-touch-icon.png', size: 180 },
  { svg: 'pwa-icon.svg', out: 'pwa-icon-192.png', size: 192 },
  { svg: 'pwa-icon.svg', out: 'pwa-icon-512.png', size: 512 },
  { svg: 'pwa-icon-maskable.svg', out: 'pwa-icon-maskable-512.png', size: 512 },
]

const browser = await chromium.launch()
for (const { svg, out, size } of OUTPUTS) {
  const markup = readFileSync(join(root, 'public', svg), 'utf8')
  const page = await browser.newPage({ viewport: { width: size, height: size }, deviceScaleFactor: 1 })
  // Fond transparent : les icônes portent déjà leur propre fond opaque.
  await page.setContent(
    `<body style="margin:0">${markup.replace('<svg', `<svg width="${size}" height="${size}"`)}</body>`,
  )
  writeFileSync(join(root, 'public', out), await page.screenshot({ omitBackground: true }))
  await page.close()
  console.log(`public/${out}  ${size}×${size}`)
}
await browser.close()
