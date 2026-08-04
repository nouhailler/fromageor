import { beforeEach, describe, expect, it } from 'vitest'
import {
  loadInitialLists,
  saveLists,
  toggleInList,
  createList,
  deleteList,
  LISTS_KEY,
  LEGACY_FAVORITES_KEY,
} from './favorites-storage'

beforeEach(() => {
  localStorage.clear()
})

describe('loadInitialLists', () => {
  it('seeds 3 default lists when nothing is stored', () => {
    const lists = loadInitialLists()
    expect(lists.map((l) => l.id)).toEqual(['l-chevres', 'l-gouter', 'l-noel'])
    expect(lists.every((l) => l.ids.length === 0)).toBe(true)
  })

  it('migrates the legacy fromages-favoris array into the first seeded list', () => {
    localStorage.setItem(LEGACY_FAVORITES_KEY, JSON.stringify(['reblochon', 'comte']))
    const lists = loadInitialLists()
    expect(lists[0].id).toBe('l-chevres')
    expect(lists[0].ids).toEqual(['reblochon', 'comte'])
    expect(lists[1].ids).toEqual([])
  })

  it('returns the stored lists as-is when fromages-listes already exists', () => {
    const stored = [{ id: 'l-custom', name: 'Ma liste', ids: ['beaufort'] }]
    localStorage.setItem(LISTS_KEY, JSON.stringify(stored))
    expect(loadInitialLists()).toEqual(stored)
  })

  it('ignores malformed legacy data and still seeds the default lists', () => {
    localStorage.setItem(LEGACY_FAVORITES_KEY, 'not json')
    const lists = loadInitialLists()
    expect(lists.map((l) => l.id)).toEqual(['l-chevres', 'l-gouter', 'l-noel'])
  })
})

describe('toggleInList / createList / deleteList', () => {
  it('toggles a cheese in and out of a list, persisting each time', () => {
    const initial = [{ id: 'l-a', name: 'A', ids: [] as string[] }]
    const afterAdd = toggleInList(initial, 'l-a', 'reblochon')
    expect(afterAdd[0].ids).toEqual(['reblochon'])
    expect(JSON.parse(localStorage.getItem(LISTS_KEY)!)[0].ids).toEqual(['reblochon'])

    const afterRemove = toggleInList(afterAdd, 'l-a', 'reblochon')
    expect(afterRemove[0].ids).toEqual([])
  })

  it('creates a new list, optionally seeded with one cheese', () => {
    const lists = createList([], 'Plateau apéro', 'comte')
    expect(lists).toHaveLength(1)
    expect(lists[0].name).toBe('Plateau apéro')
    expect(lists[0].ids).toEqual(['comte'])
  })

  it('does not create a list from a blank name', () => {
    expect(createList([], '   ')).toEqual([])
  })

  it('deletes a list', () => {
    const lists = [
      { id: 'l-a', name: 'A', ids: [] },
      { id: 'l-b', name: 'B', ids: [] },
    ]
    expect(deleteList(lists, 'l-a').map((l) => l.id)).toEqual(['l-b'])
  })
})

describe('saveLists', () => {
  it('persists to localStorage under fromages-listes', () => {
    const lists = [{ id: 'l-a', name: 'A', ids: ['x'] }]
    saveLists(lists)
    expect(JSON.parse(localStorage.getItem(LISTS_KEY)!)).toEqual(lists)
  })
})
