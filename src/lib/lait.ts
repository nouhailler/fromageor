// Ported from the Component class in the design handoff prototype
// (Fromages de France.dc.html): laitBase(), dotFill(), intensityLabel().

export type LaitBase = 'Vache' | 'Chèvre' | 'Brebis' | 'Mélange' | 'Bufflonne'

export function laitBase(lait: string | undefined): LaitBase {
  if (!lait) return 'Vache'
  if (lait.includes('Chèvre')) return 'Chèvre'
  if (lait.includes('Brebis')) return 'Brebis'
  if (lait.includes('Mélange')) return 'Mélange'
  if (lait.includes('Bufflonne')) return 'Bufflonne'
  return 'Vache'
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

export function intensityLabel(n: number): string {
  return INTENSITY_LABEL[n] || 'Moyen'
}
