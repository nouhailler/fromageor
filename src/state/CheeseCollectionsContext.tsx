import { createContext, useContext, type ReactNode } from 'react'
import { useAppState } from './AppStateContext'
import { useCheeseCollections } from './useCheeseCollections'

type Collections = ReturnType<typeof useCheeseCollections>

const CheeseCollectionsContext = createContext<Collections | null>(null)

/** Computes all derived cheese collections once (see useCheeseCollections)
 *  and shares them with every mounted screen, instead of each screen
 *  recomputing its own copy. */
export function CheeseCollectionsProvider({ children }: { children: ReactNode }) {
  const { state, lists } = useAppState()
  const collections = useCheeseCollections(state, lists)
  return <CheeseCollectionsContext.Provider value={collections}>{children}</CheeseCollectionsContext.Provider>
}

export function useCollections(): Collections {
  const ctx = useContext(CheeseCollectionsContext)
  if (!ctx) throw new Error('useCollections must be used within a CheeseCollectionsProvider')
  return ctx
}
