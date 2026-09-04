// Ported from the Component class in the design handoff prototype
// (Fromages de France.dc.html): laitBase(), dotFill(), intensityLabel().
import { pick, type Lang } from './i18n/lang'

export type LaitBase = 'Vache' | 'Chèvre' | 'Brebis' | 'Mélange' | 'Bufflonne'

export function laitBase(lait: string | undefined): LaitBase {
  if (!lait) return 'Vache'
  if (lait.includes('Chèvre')) return 'Chèvre'
  if (lait.includes('Brebis')) return 'Brebis'
  if (lait.includes('Mélange')) return 'Mélange'
  if (lait.includes('Bufflonne')) return 'Bufflonne'
  return 'Vache'
}

const LAIT_LABEL_EN: Record<LaitBase, string> = {
  Vache: 'Cow',
  Chèvre: 'Goat',
  Brebis: 'Sheep',
  Mélange: 'Mixed',
  Bufflonne: 'Buffalo',
}

/** Display label for a lait-base category. `base` itself (the French word)
 *  stays the internal matching key everywhere (accords.ts, MapScreen filter
 *  state…) — never translate that, only what's shown on screen. */
export function laitLabel(base: LaitBase, lang: Lang = 'fr'): string {
  return pick(lang, base, LAIT_LABEL_EN[base] || base)
}

const DOT_FILL: Record<LaitBase, string> = {
  Vache: '#c67139',
  Chèvre: '#7a8a5e',
  Brebis: '#8c491a',
  Mélange: '#b2622d',
  Bufflonne: '#645c50',
}

export function dotFill(base: LaitBase): string {
  return DOT_FILL[base] || '#c67139'
}

const INTENSITY_LABEL: Record<number, string> = {
  1: 'Doux',
  2: 'Doux',
  3: 'Moyen',
  4: 'Corsé',
  5: 'Intense',
}

const INTENSITY_LABEL_EN: Record<number, string> = {
  1: 'Mild',
  2: 'Mild',
  3: 'Medium',
  4: 'Strong',
  5: 'Intense',
}

export function intensityLabel(n: number, lang: Lang = 'fr'): string {
  return lang === 'en' ? INTENSITY_LABEL_EN[n] || 'Medium' : INTENSITY_LABEL[n] || 'Moyen'
}

/** Label for a lait filter chip, including the "Tous" ("All") option that
 *  `laitLabel` doesn't cover (it's not a LaitBase, just a filter value). */
export function laitFilterLabel(opt: 'Tous' | LaitBase, lang: Lang = 'fr'): string {
  if (opt === 'Tous') return pick(lang, 'Tous', 'All')
  return laitLabel(opt, lang)
}
