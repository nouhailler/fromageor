import { createContext, useContext, type ReactNode } from 'react'
import { useAppState } from './AppStateContext'
import { useCheeseCollections } from './useCheeseCollections'
import { useCheeseDatabase } from './useCheeseDatabase'

type Collections = ReturnType<typeof useCheeseCollections> & ReturnType<typeof useCheeseDatabase>

const CheeseCollectionsContext = createContext<Collections | null>(null)

/** Computes all derived cheese collections once (see useCheeseCollections),
 *  on top of the active database (built-in + any locally imported cheeses,
 *  see useCheeseDatabase), and shares them with every mounted screen instead
 *  of each screen recomputing its own copy. */
export function CheeseCollectionsProvider({ children }: { children: ReactNode }) {
  const { state, lists } = useAppState()
  const database = useCheeseDatabase()
  const collections = useCheeseCollections(state, lists, database.cheeses)
  const value: Collections = { ...collections, ...database }
  return <CheeseCollectionsContext.Provider value={value}>{children}</CheeseCollectionsContext.Provider>
}

export function useCollections(): Collections {
  const ctx = useContext(CheeseCollectionsContext)
  if (!ctx) throw new Error('useCollections must be used within a CheeseCollectionsProvider')
  return ctx
}
