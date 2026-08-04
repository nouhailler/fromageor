import { describe, expect, it } from 'vitest'
import { seasonMonths } from './season'

describe('seasonMonths', () => {
  it('returns all 12 months for "Toute l\'année"', () => {
    expect(seasonMonths("Toute l'année")).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
  })

  it('returns a single season\'s months, ignoring trailing parenthetical detail', () => {
    expect(seasonMonths('Été (avr.–nov., pleine herbe)')).toEqual([5, 6, 7])
  })

  it('walks cyclically through a simple two-season range (Été → Hiver)', () => {
    expect(seasonMonths('Été → Hiver')).toEqual([5, 6, 7, 8, 9, 10, 11, 0, 1])
  })

  it('walks cyclically through a range with trailing parenthetical detail', () => {
    expect(seasonMonths('Automne → Hiver (15 août – 15 mars)')).toEqual([8, 9, 10, 11, 0, 1])
  })

  it('wraps around the year boundary (Hiver alone)', () => {
    expect(seasonMonths('Hiver')).toEqual([11, 0, 1])
  })

  it('returns an empty array for missing or unrecognized input', () => {
    expect(seasonMonths(undefined)).toEqual([])
    expect(seasonMonths('')).toEqual([])
    expect(seasonMonths('Récolte tardive')).toEqual([])
  })
})
