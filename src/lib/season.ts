// Ported from the Component class in the design handoff prototype:
// seasonMonths() parses strings like "Été → Hiver", "Toute l'année",
// "Automne → Hiver (15 août – 15 mars)" into month indices (0-11).
import { pick, type Lang } from './i18n/lang'

export const MONTH_NAMES = [
  'Janvier',
  'Février',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Août',
  'Septembre',
  'Octobre',
  'Novembre',
  'Décembre',
]

const MONTH_NAMES_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

/** Month names for display only — always index-aligned with MONTH_NAMES,
 *  never used to parse a cheese's `saison` field (seasonMonths() below
 *  always matches the French season words, regardless of display language). */
export function monthNames(lang: Lang = 'fr'): string[] {
  return pick(lang, MONTH_NAMES, MONTH_NAMES_EN)
}

const SEASON_LABEL_EN: Record<string, string> = {
  Printemps: 'Spring',
  Été: 'Summer',
  Automne: 'Autumn',
  Hiver: 'Winter',
  "Toute l'année": 'All year round',
}

/** Translates a season name for display (e.g. the "De saison" carousel
 *  heading). Never feed the result back into seasonMonths() or an `.includes`
 *  match against `cheese.saison` — those must stay on the French original. */
export function seasonLabel(name: string, lang: Lang = 'fr'): string {
  return lang === 'en' ? SEASON_LABEL_EN[name] || name : name
}

/** Season assigned to each calendar month (0=Janvier..11=Décembre), used by
 *  the home screen's "De saison" carousel (simple substring match against
 *  cheese.saison — distinct from the cyclic seasonMonths() parser below,
 *  which is used by the Calendrier screen). */
const SEASON_BY_MONTH = [
  'Hiver',
  'Hiver',
  'Printemps',
  'Printemps',
  'Printemps',
  'Été',
  'Été',
  'Été',
  'Automne',
  'Automne',
  'Automne',
  'Hiver',
]

export function currentSeasonName(date: Date = new Date()): string {
  return SEASON_BY_MONTH[date.getMonth()]
}

type SeasonKey = 'printemps' | 'été' | 'automne' | 'hiver'

const SEASON_ORDER: [SeasonKey, number[]][] = [
  ['printemps', [2, 3, 4]],
  ['été', [5, 6, 7]],
  ['automne', [8, 9, 10]],
  ['hiver', [11, 0, 1]],
]

/**
 * Parses a cheese's freeform `saison` string into a list of month indices.
 * Handles single seasons, cyclic ranges ("Été → Hiver" wraps through
 * automne), "Toute l'année", and strings with trailing parenthetical detail
 * ("Été (avr.–nov., pleine herbe)") since the season name is matched by
 * substring search, not by parsing the whole string.
 */
export function seasonMonths(saison: string | undefined): number[] {
  if (!saison) return []
  const s = saison.toLowerCase()
  if (s.includes('année') || s.includes('annee')) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  }

  const hits = SEASON_ORDER.map(([name, months], idx) => ({
    name,
    months,
    idx,
    pos: s.indexOf(name),
  })).filter((h) => h.pos >= 0)

  if (!hits.length) return []
  if (hits.length === 1) return hits[0].months

  hits.sort((a, b) => a.pos - b.pos)
  const names = SEASON_ORDER.map(([name]) => name)
  const monthsByName: Record<string, number[]> = {}
  SEASON_ORDER.forEach(([name, months]) => {
    monthsByName[name] = months
  })

  const seq: string[] = []
  let i = hits[0].idx
  const end = hits[hits.length - 1].idx
  while (true) {
    seq.push(names[i])
    if (i === end) break
    i = (i + 1) % 4
  }

  const set = new Set<number>()
  seq.forEach((n) => monthsByName[n].forEach((m) => set.add(m)))
  return [...set]
}
