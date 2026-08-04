// Ported from the Component class in the design handoff prototype: the
// constructor's list migration, saveLists(), toggleInList(), createList(),
// deleteList(). Persists to localStorage under 'fromages-listes' as
// [{id,name,ids[]}]; migrates the older single-list 'fromages-favoris'
// (a plain array of cheese ids) into the first seeded list.

export interface FavoriteList {
  id: string
  name: string
  ids: string[]
}

export const LISTS_KEY = 'fromages-listes'
export const LEGACY_FAVORITES_KEY = 'fromages-favoris'

function seedLists(): FavoriteList[] {
  let oldFav: string[] = []
  try {
    oldFav = JSON.parse(localStorage.getItem(LEGACY_FAVORITES_KEY) || '[]')
  } catch {
    // ignore malformed legacy data
  }
  const lists: FavoriteList[] = [
    { id: 'l-chevres', name: 'Mes chèvres préférés', ids: [] },
    { id: 'l-gouter', name: 'À goûter', ids: [] },
    { id: 'l-noel', name: 'Plateau Noël', ids: [] },
  ]
  if (oldFav.length) lists[0].ids = oldFav
  return lists
}

export function loadInitialLists(): FavoriteList[] {
  let lists: unknown = null
  try {
    lists = JSON.parse(localStorage.getItem(LISTS_KEY) || 'null')
  } catch {
    // ignore malformed data, fall through to seeding
  }
  if (!Array.isArray(lists)) {
    return seedLists()
  }
  return lists as FavoriteList[]
}

export function saveLists(lists: FavoriteList[]): void {
  try {
    localStorage.setItem(LISTS_KEY, JSON.stringify(lists))
  } catch {
    // storage unavailable (private browsing, quota) — state stays in memory
  }
}

/** Toggles a cheese in/out of a list and persists the result. */
export function toggleInList(lists: FavoriteList[], listId: string, cheeseId: string | null): FavoriteList[] {
  if (cheeseId == null) return lists
  const next = lists.map((l) => {
    if (l.id !== listId) return l
    const has = l.ids.includes(cheeseId)
    return { ...l, ids: has ? l.ids.filter((x) => x !== cheeseId) : [...l.ids, cheeseId] }
  })
  saveLists(next)
  return next
}

/** Creates a new list (optionally seeded with one cheese) and persists it. */
export function createList(lists: FavoriteList[], name: string, seedId?: string | null): FavoriteList[] {
  const nm = (name || '').trim()
  if (!nm) return lists
  const id = 'l-' + Date.now()
  const ids = seedId != null ? [seedId] : []
  const next = [...lists, { id, name: nm, ids }]
  saveLists(next)
  return next
}

/** Deletes a list and persists the result. */
export function deleteList(lists: FavoriteList[], listId: string): FavoriteList[] {
  const next = lists.filter((l) => l.id !== listId)
  saveLists(next)
  return next
}
