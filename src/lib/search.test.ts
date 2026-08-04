import { describe, expect, it } from 'vitest'
import { searchCheeses } from './search'
import { CHEESES } from '../data/cheeses'

describe('searchCheeses', () => {
  it('matches by name, case-insensitively', () => {
    const results = searchCheeses(CHEESES, 'reblochon', 'Tous')
    expect(results.map((c) => c.id)).toEqual(['reblochon'])
  })

  it('matches by department', () => {
    const results = searchCheeses(CHEESES, 'cantal', 'Tous')
    expect(results.some((c) => c.id === 'cantal')).toBe(true)
  })

  it('matches by region name', () => {
    const results = searchCheeses(CHEESES, 'auvergne-rhône-alpes', 'Tous')
    expect(results.length).toBe(CHEESES.length)
  })

  it('filters by lait base regardless of query', () => {
    const results = searchCheeses(CHEESES, '', 'Chèvre')
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((c) => c.lait.includes('Chèvre'))).toBe(true)
  })

  it('combines a lait filter with a text query', () => {
    const results = searchCheeses(CHEESES, 'savoie', 'Vache')
    expect(results.length).toBeGreaterThan(0)
    expect(results.every((c) => !c.lait.includes('Chèvre') && !c.lait.includes('Brebis'))).toBe(true)
  })

  it('returns everything when the query is blank and lait is "Tous"', () => {
    expect(searchCheeses(CHEESES, '   ', 'Tous')).toHaveLength(CHEESES.length)
  })
})
