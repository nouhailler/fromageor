// Ported from Component.renderVals()'s searchResults computation: matches
// on nom, alt, dept, commune, famille, texture and region name.
import type { Cheese } from '../data/cheese.types'
import { regionName } from './region-lookup'
import { laitBase, type LaitBase } from './lait'

export function searchCheeses<T extends Cheese>(cheeses: T[], query: string, lait: LaitBase | 'Tous'): T[] {
  const q = query.trim().toLowerCase()
  return cheeses.filter((c) => {
    const matchLait = lait === 'Tous' || laitBase(c.lait) === lait
    if (!matchLait) return false
    if (!q) return true
    const hay = [c.nom, (c.alt || []).join(' '), c.dept, c.commune, c.famille, c.texture, regionName(c.regionId)]
      .join(' ')
      .toLowerCase()
    return hay.includes(q)
  })
}
