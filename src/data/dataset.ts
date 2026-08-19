import type { Cheese } from './cheese.types'
import { CHEESES } from './cheeses'
import { EXTRA_CHEESES, EXTRA_ALT_NAMES, EXTRA_REGION_OVERRIDES } from './cheeses-extra'
import { BFC_CHEESES } from './cheeses-bourgogne-franche-comte'
import { BRETAGNE_CHEESES } from './cheeses-bretagne'
import { CVL_CHEESES } from './cheeses-centre-val-de-loire'
import { NORMANDIE_CHEESES } from './cheeses-normandie'
import { HDF_CHEESES } from './cheeses-hauts-de-france'
import { CORSE_CHEESES } from './cheeses-corse'
import { EXTRA_MEDIA } from './cheeses-extra-media'

/** Le jeu de données intégré = les fromages générés depuis le handoff
 *  (cheeses.ts) complétés à la main, avec trois recollages sur les entrées
 *  générées : noms alternatifs supplémentaires, rattachements régionaux
 *  corrigés, et photos/résumés Wikipédia sur les ajouts. Aucun des deux n'est écrit dans le
 *  fichier source concerné, qui est régénéré par son propre script.
 *
 *  Les imports locaux de l'utilisateur viennent par-dessus, voir
 *  useCheeseDatabase. */
export const ALL_CHEESES: Cheese[] = [
  ...CHEESES.map((c) => {
    const extra = EXTRA_ALT_NAMES[c.id]
    const region = EXTRA_REGION_OVERRIDES[c.id]
    if (!extra && !region) return c
    return {
      ...c,
      ...(extra ? { alt: [...c.alt, ...extra.filter((n) => !c.alt.includes(n))] } : null),
      ...region,
    }
  }),
  ...[...EXTRA_CHEESES, ...BFC_CHEESES, ...BRETAGNE_CHEESES, ...CVL_CHEESES, ...NORMANDIE_CHEESES, ...HDF_CHEESES, ...CORSE_CHEESES].map((c) => {
    const media = EXTRA_MEDIA[c.id]
    return media ? { ...c, ...media } : c
  }),
]
