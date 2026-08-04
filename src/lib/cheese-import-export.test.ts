import { describe, expect, it } from 'vitest'
import {
  parseImportPayload,
  validateCheeseRecord,
  validateImportPayload,
  mergeCheeses,
  mergeRegions,
} from './cheese-import-export'
import { EXAMPLE_CHEESE } from './cheese-schema'
import type { Cheese } from '../data/cheese.types'

describe('parseImportPayload', () => {
  it('accepts a bare array of cheeses', () => {
    const payload = parseImportPayload(JSON.stringify([EXAMPLE_CHEESE]))
    expect(payload.region).toBeUndefined()
    expect(payload.records).toHaveLength(1)
  })

  it('accepts a wrapped object with a region', () => {
    const payload = parseImportPayload(
      JSON.stringify({ region: { id: 'r1', name: 'Région 1' }, cheeses: [EXAMPLE_CHEESE] }),
    )
    expect(payload.region).toEqual({ id: 'r1', name: 'Région 1' })
    expect(payload.records).toHaveLength(1)
  })

  it('throws a descriptive error on invalid JSON', () => {
    expect(() => parseImportPayload('{not json')).toThrow(/JSON invalide/)
  })

  it('throws on an unrecognized top-level shape', () => {
    expect(() => parseImportPayload(JSON.stringify({ foo: 'bar' }))).toThrow(/Format non reconnu/)
  })
})

describe('validateCheeseRecord', () => {
  it('accepts a fully valid record', () => {
    const result = validateCheeseRecord(EXAMPLE_CHEESE, 0)
    expect(result.ok).toBe(true)
    if (result.ok) expect(result.cheese.id).toBe(EXAMPLE_CHEESE.id)
  })

  it('reports every missing required field', () => {
    const result = validateCheeseRecord({ id: 'x' }, 0)
    expect(result.ok).toBe(false)
    if (!result.ok) {
      expect(result.error.errors.length).toBeGreaterThan(5)
      expect(result.error.errors.some((e) => e.includes('"nom"'))).toBe(true)
    }
  })

  it('rejects an out-of-range intensite', () => {
    const bad = { ...EXAMPLE_CHEESE, intensite: 7 }
    const result = validateCheeseRecord(bad, 0)
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.error.errors.some((e) => e.includes('intensite'))).toBe(true)
  })

  it('fills regionId from defaultRegionId when omitted', () => {
    const { regionId: _omit, ...withoutRegion } = EXAMPLE_CHEESE
    const result = validateCheeseRecord(withoutRegion, 0, 'inherited-region')
    expect(result.ok).toBe(true)
    if (result.ok) expect(result.cheese.regionId).toBe('inherited-region')
  })

  it('fails when regionId is omitted and no default is provided', () => {
    const { regionId: _omit, ...withoutRegion } = EXAMPLE_CHEESE
    const result = validateCheeseRecord(withoutRegion, 0)
    expect(result.ok).toBe(false)
    if (!result.ok) expect(result.error.errors.some((e) => e.includes('regionId'))).toBe(true)
  })
})

describe('validateImportPayload', () => {
  it('splits valid and invalid records', () => {
    const result = validateImportPayload({ records: [EXAMPLE_CHEESE, { id: 'broken' }] })
    expect(result.valid).toHaveLength(1)
    expect(result.invalid).toHaveLength(1)
    expect(result.invalid[0].id).toBe('broken')
  })
})

describe('mergeCheeses / mergeRegions', () => {
  it('upserts imported cheeses by id, appending new ones and replacing existing ones', () => {
    const base: Cheese[] = [EXAMPLE_CHEESE]
    const overridden = { ...EXAMPLE_CHEESE, nom: 'Nom modifié' }
    const added = { ...EXAMPLE_CHEESE, id: 'autre-fromage', nom: 'Autre fromage' }
    const merged = mergeCheeses(base, [overridden, added])
    expect(merged).toHaveLength(2)
    expect(merged.find((c) => c.id === EXAMPLE_CHEESE.id)?.nom).toBe('Nom modifié')
    expect(merged.find((c) => c.id === 'autre-fromage')).toBeTruthy()
  })

  it('upserts regions by id', () => {
    const base = [{ id: 'r1', name: 'R1' }]
    const merged = mergeRegions(base, [{ id: 'r1', name: 'R1 renommée' }, { id: 'r2', name: 'R2' }])
    expect(merged).toHaveLength(2)
    expect(merged.find((r) => r.id === 'r1')?.name).toBe('R1 renommée')
  })
})
