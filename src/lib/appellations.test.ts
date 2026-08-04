import { describe, expect, it } from 'vitest'
import { appellationsOf } from './appellations'
import { CHEESES } from '../data/cheeses'

function findCheese(id: string) {
  const c = CHEESES.find((x) => x.id === id)
  if (!c) throw new Error(`fixture cheese "${id}" not found`)
  return c
}

describe('appellationsOf', () => {
  it('flags a real AOP cheese as AOP only (Reblochon)', () => {
    expect(appellationsOf(findCheese('reblochon'))).toEqual(['AOP'])
  })

  it('flags "Tomme de Savoie" as IGP (by name) and Bio (indicative, name contains "tomme")', () => {
    expect(appellationsOf(findCheese('tomme-savoie'))).toEqual(['IGP', 'Bio'])
  })

  it('flags "Raclette de Savoie" as IGP (by name) and Bio (indicative, pressed non-cuite + low intensity)', () => {
    expect(appellationsOf(findCheese('raclette-savoie'))).toEqual(['IGP', 'Bio'])
  })

  it('does not flag a non-AOP, non-Savoie cheese with no matching indicative rule', () => {
    // Saint-Marcellin: aop false, "pâte molle à croûte fleurie" (no "press"), name has no tomme/tommette.
    expect(appellationsOf(findCheese('saint-marcellin'))).toEqual([])
  })
})
