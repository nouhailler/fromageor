import { REGIONS } from '../data/regions'
import { type Lang } from './i18n/lang'

const byId = new Map(REGIONS.map((r) => [r.id, r.name]))

// Only the region names with an established English exonym are translated
// (Brittany, Normandy, Corsica — used routinely in English text). The rest
// (Provence-Alpes-Côte d'Azur, Île-de-France, Occitanie…) have no common
// English form and stay as their official French name, as English text
// normally keeps them.
const EN_EXONYMS: Record<string, string> = {
  bretagne: 'Brittany',
  normandie: 'Normandy',
  corse: 'Corsica',
}

export function regionName(regionId: string, lang: Lang = 'fr'): string {
  const fr = byId.get(regionId) ?? ''
  if (lang !== 'en') return fr
  return EN_EXONYMS[regionId] ?? fr
}
