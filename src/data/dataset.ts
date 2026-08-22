import type { Cheese } from './cheese.types'
import { CHEESES } from './cheeses'
import {
  EXTRA_CHEESES,
  EXTRA_ALT_NAMES,
  EXTRA_REGION_OVERRIDES,
  EXTRA_FIELD_FIXES,
  EXTRA_EDITORIAL,
} from './cheeses-extra'
import { BFC_CHEESES } from './cheeses-bourgogne-franche-comte'
import { BRETAGNE_CHEESES } from './cheeses-bretagne'
import { CVL_CHEESES } from './cheeses-centre-val-de-loire'
import { NORMANDIE_CHEESES } from './cheeses-normandie'
import { HDF_CHEESES } from './cheeses-hauts-de-france'
import { CORSE_CHEESES } from './cheeses-corse'
import { GRAND_EST_CHEESES } from './cheeses-grand-est'
import { IDF_CHEESES } from './cheeses-ile-de-france'
import { OCCITANIE_CHEESES } from './cheeses-occitanie'
import { NA_CHEESES } from './cheeses-nouvelle-aquitaine'
import { PACA_CHEESES } from './cheeses-provence-alpes-cote-azur'
import { PDL_CHEESES } from './cheeses-pays-de-la-loire'
import { EXTRA_MEDIA } from './cheeses-extra-media'

/** Le jeu de données intégré = les fromages générés depuis le handoff
 *  (cheeses.ts) complétés à la main, avec cinq recollages sur les entrées
 *  générées : noms alternatifs supplémentaires, rattachements régionaux
 *  corrigés, corrections factuelles de champs, textes éditoriaux (anecdote,
 *  fabrication, conservation, service) et photos/résumés Wikipédia sur les
 *  ajouts. Aucun n'est écrit dans le fichier source concerné, qui est
 *  régénéré par son propre script.
 *
 *  Les imports locaux de l'utilisateur viennent par-dessus, voir
 *  useCheeseDatabase. */
export const ALL_CHEESES: Cheese[] = [
  ...CHEESES.map((c) => {
    const extra = EXTRA_ALT_NAMES[c.id]
    const region = EXTRA_REGION_OVERRIDES[c.id]
    const fixes = EXTRA_FIELD_FIXES[c.id]
    const editorial = EXTRA_EDITORIAL[c.id]
    if (!extra && !region && !fixes && !editorial) return c
    return {
      ...c,
      ...(extra ? { alt: [...c.alt, ...extra.filter((n) => !c.alt.includes(n))] } : null),
      ...fixes,
      // Le rattachement passe après les corrections : lui seul fait autorité
      // sur `dept`, dont il porte parfois une version corrigée.
      ...region,
      // Les textes du handoff, quand il y en a, restent prioritaires : le
      // recollage ne comble que ce qui manque.
      ...(editorial
        ? Object.fromEntries(Object.entries(editorial).filter(([k]) => !c[k as keyof typeof c]))
        : null),
    }
  }),
  ...[...EXTRA_CHEESES, ...BFC_CHEESES, ...BRETAGNE_CHEESES, ...CVL_CHEESES, ...NORMANDIE_CHEESES, ...HDF_CHEESES, ...CORSE_CHEESES, ...GRAND_EST_CHEESES, ...IDF_CHEESES, ...OCCITANIE_CHEESES, ...NA_CHEESES, ...PACA_CHEESES, ...PDL_CHEESES].map((c) => {
    const media = EXTRA_MEDIA[c.id]
    return media ? { ...c, ...media } : c
  }),
]
