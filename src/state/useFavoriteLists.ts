import { useState } from 'react'
import { loadInitialLists, type FavoriteList } from '../lib/favorites-storage'

/** Owns the favorite lists array, lazily seeded/migrated from localStorage
 *  on first mount (see lib/favorites-storage.ts). */
export function useFavoriteLists() {
  return useState<FavoriteList[]>(() => loadInitialLists())
}
