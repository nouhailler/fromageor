// Ported from Component.renderVals() in the design handoff prototype: all
// the derived/computed collections that feed the screens (deco, seasonal,
// mapDots, searchResults, favoris, listsOverview, sheetLists, calMonths,
// appList, accordsCats), plus decoupeMethods, qui n'existait pas dans le
// prototype : ses exemples y étaient écrits à la main.
import { useMemo } from 'react'
import { FR_XY } from '../data/fr-map'
import type { Cheese } from '../data/cheese.types'
import type { FavoriteList } from '../lib/favorites-storage'
import type { AppState } from './types'
import type { Lang } from '../lib/i18n/lang'
import { laitBase, dotFill, intensityLabel, laitLabel, type LaitBase } from '../lib/lait'
import { currentSeasonName, seasonMonths, monthNames, seasonLabel } from '../lib/season'
import { searchCheeses } from '../lib/search'
import { appellationsOf, appBadge, type AppellationBadge } from '../lib/appellations'
import { accordsDefs, type AccordCategory } from '../lib/accords'
import { decoupeGroups, type DecoupeGroup } from '../lib/decoupe'

export interface DecoratedCheese extends Cheese {
  initial: string
  laitBase: LaitBase
  laitLabel: string
  fill: string
  x: number
  y: number
  notesStr: string
  intensityLabel: string
  fav: boolean
}

export interface ListOverviewItem {
  id: string
  name: string
  count: number
  sub: string
  tint: string
  ink: string
}

export interface SheetListItem {
  id: string
  name: string
  sub: string
  tint: string
  ink: string
  inList: boolean
  rowBg: string
  checkBg: string
  checkBd: string
}

export interface CalendarMonth {
  name: string
  isNow: boolean
  items: DecoratedCheese[]
  count: number
  cardBg: string
  cardBd: string
}

export interface AppListItem extends DecoratedCheese {
  labels: AppellationBadge[]
}

export interface AccordCategoryWithItems extends AccordCategory {
  items: DecoratedCheese[]
}

const LIST_TINTS: [string, string][] = [
  ['var(--color-accent-200)', 'var(--color-accent-700)'],
  ['var(--color-accent-2-200)', 'var(--color-accent-2-900)'],
  ['var(--color-neutral-200)', 'var(--color-neutral-700)'],
]

function pluralFromage(n: number, lang: Lang): string {
  if (lang === 'en') return `${n} ${n === 1 ? 'cheese' : 'cheeses'}`
  return n + (n === 1 ? ' fromage' : ' fromages')
}

export function useCheeseCollections(state: AppState, lists: FavoriteList[], cheeses: Cheese[], lang: Lang = 'fr') {
  const inAny = useMemo(() => {
    const favIds = new Set<string>()
    lists.forEach((l) => l.ids.forEach((id) => favIds.add(id)))
    return (id: string) => favIds.has(id)
  }, [lists])

  const deco = useMemo<DecoratedCheese[]>(() => {
    return cheeses.map((c) => {
      const base = laitBase(c.lait)
      const xy = FR_XY[c.id] ?? c.map
      const notes = (lang === 'en' ? c.en?.notes : undefined) ?? c.notes
      return {
        ...c,
        initial: (c.nom || '?')[0],
        laitBase: base,
        laitLabel: laitLabel(base, lang),
        fill: dotFill(base),
        x: xy[0],
        y: xy[1],
        notesStr: (notes || []).slice(0, 4).join(' · '),
        intensityLabel: intensityLabel(c.intensite, lang),
        fav: inAny(c.id),
      }
    })
  }, [cheeses, inAny, lang])

  const byId = useMemo(() => {
    const map = new Map<string, DecoratedCheese>()
    deco.forEach((c) => map.set(c.id, c))
    return map
  }, [deco])

  // Toujours en français : c'est le mot cherché tel quel dans le champ
  // `saison` (français) de chaque fromage. Ne jamais remplacer par la
  // version traduite ci-dessous, qui est réservée à l'affichage.
  const seasonNameFr = currentSeasonName()
  const seasonName = seasonLabel(seasonNameFr, lang)

  const seasonal = useMemo(() => {
    const filtered = deco.filter((c) => (c.saison || '').includes(seasonNameFr))
    return filtered.length < 4 ? deco.slice(0, 8) : filtered
  }, [deco, seasonNameFr])

  const mapDots = useMemo(() => {
    const mf = state.mapFilter
    return deco.filter((c) => {
      if (mf === 'Tous') return true
      if (mf === 'AOP') return c.aop
      if (mf === 'Chèvre') return c.laitBase === 'Chèvre'
      if (mf === 'Brebis') return c.laitBase === 'Brebis'
      if (mf === 'Pâte molle') return (c.famille || '').toLowerCase().includes('molle')
      return true
    })
  }, [deco, state.mapFilter])

  const searchResults = useMemo(
    () => searchCheeses(deco, state.query, state.lait),
    [deco, state.query, state.lait],
  )

  const favoris = useMemo(() => deco.filter((c) => c.fav), [deco])

  const listsOverview = useMemo<ListOverviewItem[]>(() => {
    return lists.map((l, i) => {
      const [tint, ink] = LIST_TINTS[i % LIST_TINTS.length]
      return { id: l.id, name: l.name, count: l.ids.length, sub: pluralFromage(l.ids.length, lang), tint, ink }
    })
  }, [lists, lang])

  const curList = state.openList ? lists.find((l) => l.id === state.openList) ?? null : null
  const curListItems = useMemo(() => {
    if (!curList) return []
    return curList.ids.map((id) => byId.get(id)).filter((c): c is DecoratedCheese => !!c)
  }, [curList, byId])

  const sheetCheese = state.sheetFor != null ? byId.get(state.sheetFor) ?? null : null

  const sheetLists = useMemo<SheetListItem[]>(() => {
    return lists.map((l, i) => {
      const [tint, ink] = LIST_TINTS[i % LIST_TINTS.length]
      const inList = state.sheetFor != null && l.ids.includes(state.sheetFor)
      return {
        id: l.id,
        name: l.name,
        sub: pluralFromage(l.ids.length, lang),
        tint,
        ink,
        inList,
        rowBg: inList ? 'var(--color-accent-100)' : 'var(--color-surface)',
        checkBg: inList ? 'var(--color-accent)' : 'transparent',
        checkBd: inList ? 'var(--color-accent)' : 'var(--color-neutral-400)',
      }
    })
  }, [lists, state.sheetFor, lang])

  const calMonths = useMemo<CalendarMonth[]>(() => {
    const now = new Date().getMonth()
    const cache = deco.map((c) => ({ c, months: seasonMonths(c.saison) }))
    return monthNames(lang).map((name, mi) => {
      const items = cache
        .filter((x) => x.months.includes(mi))
        .map((x) => x.c)
        .sort((a, b) => a.nom.localeCompare(b.nom, 'fr'))
      return {
        name,
        isNow: mi === now,
        items,
        count: items.length,
        cardBg: mi === now ? 'var(--color-accent-100)' : 'var(--color-surface)',
        cardBd: mi === now ? 'var(--color-accent)' : 'transparent',
      }
    })
  }, [deco, lang])

  const appList = useMemo<AppListItem[]>(() => {
    const af = state.appFilter
    return deco
      .map((c) => {
        const keys = appellationsOf(c)
        return { ...c, labels: keys.map((k) => appBadge(k, lang)), labelKeys: keys }
      })
      .filter((c) => (af === 'Tous' ? c.labelKeys.length > 0 : c.labelKeys.includes(af)))
  }, [deco, state.appFilter, lang])

  const accordsCats = useMemo<AccordCategoryWithItems[]>(() => {
    return accordsDefs(lang).map((cat) => ({ ...cat, items: deco.filter(cat.match).slice(0, 10) }))
  }, [deco, lang])

  const decoupeMethods = useMemo<DecoupeGroup<DecoratedCheese>[]>(
    () => decoupeGroups(deco, 3, lang),
    [deco, lang],
  )

  return {
    deco,
    byId,
    featured: deco.slice(0, 1),
    popular: deco.slice(1, 7),
    allDots: deco,
    seasonName,
    seasonal,
    mapDots,
    searchResults,
    favoris,
    listsOverview,
    curList,
    curListItems,
    sheetCheese,
    sheetLists,
    calMonths,
    appList,
    accordsCats,
    decoupeMethods,
  }
}
