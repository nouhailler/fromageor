import type { Cheese } from './cheese.types'
import { CHEESES } from './cheeses'
import { EXTRA_CHEESES, EXTRA_ALT_NAMES } from './cheeses-extra'
import { EXTRA_MEDIA } from './cheeses-extra-media'

/** Le jeu de données intégré = les fromages générés depuis le handoff
 *  (cheeses.ts) complétés à la main (cheeses-extra.ts), avec deux recollages :
 *  les noms alternatifs supplémentaires sur les entrées générées, et les
 *  photos/résumés Wikipédia sur les ajouts. Aucun des deux n'est écrit dans le
 *  fichier source concerné, qui est régénéré par son propre script.
 *
 *  Les imports locaux de l'utilisateur viennent par-dessus, voir
 *  useCheeseDatabase. */
export const ALL_CHEESES: Cheese[] = [
  ...CHEESES.map((c) => {
    const extra = EXTRA_ALT_NAMES[c.id]
    if (!extra) return c
    return { ...c, alt: [...c.alt, ...extra.filter((n) => !c.alt.includes(n))] }
  }),
  ...EXTRA_CHEESES.map((c) => {
    const media = EXTRA_MEDIA[c.id]
    return media ? { ...c, ...media } : c
  }),
]
