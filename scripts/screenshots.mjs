#!/usr/bin/env node
/**
 * Capture les écrans de l'application pour le README (docs/screenshots/).
 *
 * L'app n'a pas de routeur : la navigation est un état interne, on la pilote
 * donc en cliquant comme un utilisateur (onglets du bas + menu latéral).
 *
 * Playwright n'est pas une dépendance du projet (outil ponctuel) :
 *   npx playwright@1.62.1 install chromium   # une seule fois
 *   npm run preview                          # dans un autre terminal
 *   npx -p playwright@1.62.1 node scripts/screenshots.mjs http://localhost:4173
 */
import { chromium } from 'playwright'
import { mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const BASE = process.argv[2] ?? 'http://localhost:4173'
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'docs', 'screenshots')
mkdirSync(OUT, { recursive: true })

const browser = await chromium.launch()
const context = await browser.newContext({
  viewport: { width: 460, height: 932 },
  deviceScaleFactor: 2,
  locale: 'fr-FR',
  colorScheme: 'light',
})

const page = await context.newPage()
const frame = page.locator('div[class*="frame"]').first()

/** Ouvre une entrée du menu latéral (hamburger en haut à gauche). */
async function fromDrawer(label) {
  await page.getByRole('button', { name: 'Ouvrir le menu' }).click()
  await page.getByRole('button', { name: label, exact: false }).last().click()
}

async function shot(name) {
  // Laisse les photos Wikimedia et les transitions se poser.
  await page.waitForLoadState('networkidle')
  await page.waitForTimeout(400)
  await frame.screenshot({ path: join(OUT, `${name}.png`) })
  console.log(`docs/screenshots/${name}.png`)
}

async function reset() {
  await page.goto(BASE, { waitUntil: 'domcontentloaded' })
  await page.waitForLoadState('networkidle')
}

await reset()
await shot('accueil')

// Fiche détaillée : la carte « À la une » de l'accueil.
await page.getByRole('button', { name: /Découvrir la fiche/ }).first().click()
await shot('fiche')

await reset()
await page.getByRole('button', { name: 'Carte' }).first().click()
await shot('carte')

await reset()
await page.getByRole('button', { name: 'Recherche' }).first().click()
await page.getByRole('textbox').first().fill('bleu')
await shot('recherche')

await reset()
await page.getByRole('button', { name: 'Favoris' }).first().click()
await shot('favoris')

await reset()
await page.getByRole('button', { name: 'Ouvrir le menu' }).click()
await shot('menu')

for (const [label, name] of [
  ['Accords mets', 'accords'],
  ['Découpe', 'decoupe'],
  ['Calendrier des saisons', 'calendrier'],
  ['Appellations', 'appellations'],
  ['Encyclopédie', 'encyclopedie'],
  ['Import / Export', 'import-export'],
]) {
  await reset()
  await fromDrawer(label)
  await shot(name)
}

await browser.close()
