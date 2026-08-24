import { createContext, useContext, useMemo, useReducer, type ReactNode } from 'react'
import { INITIAL_APP_STATE, type AppState, type Tab, type LaitFilter, type MapFilter, type AppFilterValue } from './types'
import { useFavoriteLists } from './useFavoriteLists'
import * as favoritesLib from '../lib/favorites-storage'
import type { FavoriteList } from '../lib/favorites-storage'
import type { DecoupeMethodId } from '../lib/decoupe'

// Every action in the reference Component is really just `this.setState(partial)`
// — a shallow merge. We reproduce that exact mechanism instead of a switch
// statement per action, since it is the real source of truth for behavior.
function reducer(state: AppState, patch: Partial<AppState>): AppState {
  return { ...state, ...patch }
}

export interface AppActions {
  goHome: () => void
  goCarte: () => void
  goRecherche: () => void
  goFavoris: () => void
  selectTabFromDrawer: (tab: Tab) => void
  openCheese: (id: string) => void
  closeCheese: () => void
  setQuery: (value: string) => void
  setLait: (value: LaitFilter) => void
  setMapFilter: (value: MapFilter) => void
  setAppFilter: (value: AppFilterValue) => void
  openMenu: () => void
  closeMenu: () => void
  openAccords: () => void
  closeAccords: () => void
  openDecoupe: () => void
  closeDecoupe: () => void
  openDecoupeMethod: (id: DecoupeMethodId) => void
  openDecoupeMethodFromCheese: (id: DecoupeMethodId, cheeseId: string) => void
  closeDecoupeMethod: () => void
  openCalendrier: () => void
  closeCalendrier: () => void
  openAppellations: () => void
  closeAppellations: () => void
  openEncyclopedia: () => void
  closeEncyclopedia: () => void
  openArticle: (id: string) => void
  backToArticles: () => void
  openImportExport: () => void
  closeImportExport: () => void
  openLegal: () => void
  closeLegal: () => void
  openListDetail: (id: string) => void
  backToLists: () => void
  deleteCurrentList: () => void
  openSheet: (cheeseId: string) => void
  closeSheet: () => void
  startCreate: () => void
  cancelCreate: () => void
  setNewListName: (value: string) => void
  confirmCreate: () => void
  confirmCreateAdd: () => void
  toggleInList: (listId: string, cheeseId: string | null) => void
}

interface AppContextValue {
  state: AppState
  lists: FavoriteList[]
  actions: AppActions
}

const AppContext = createContext<AppContextValue | null>(null)

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, INITIAL_APP_STATE)
  const [lists, setLists] = useFavoriteLists()

  const actions = useMemo<AppActions>(() => {
    return {
      goHome: () => dispatch({ tab: 'home', selected: null }),
      goCarte: () => dispatch({ tab: 'carte', selected: null }),
      goRecherche: () => dispatch({ tab: 'recherche', selected: null }),
      goFavoris: () => dispatch({ tab: 'favoris', selected: null }),
      selectTabFromDrawer: (tab) => dispatch({ tab, selected: null, menuOpen: false }),

      openCheese: (id) => dispatch({ selected: id }),
      closeCheese: () => dispatch({ selected: null }),

      setQuery: (value) => dispatch({ query: value }),
      setLait: (value) => dispatch({ lait: value }),
      setMapFilter: (value) => dispatch({ mapFilter: value }),
      setAppFilter: (value) => dispatch({ appFilter: value }),

      openMenu: () => dispatch({ menuOpen: true }),
      closeMenu: () => dispatch({ menuOpen: false }),

      openAccords: () => dispatch({ accords: true, menuOpen: false, selected: null }),
      closeAccords: () => dispatch({ accords: false }),
      openDecoupe: () =>
        dispatch({ decoupe: true, decoupeMethod: null, decoupeFrom: null, menuOpen: false, selected: null }),
      closeDecoupe: () => dispatch({ decoupe: false, decoupeMethod: null, decoupeFrom: null }),
      openDecoupeMethod: (id) => dispatch({ decoupeMethod: id }),
      // Depuis une fiche : l'écran Découpe est sous la fiche dans la pile, il
      // faut donc fermer celle-ci — d'où le chemin de retour mémorisé.
      openDecoupeMethodFromCheese: (id, cheeseId) =>
        dispatch({ decoupe: true, decoupeMethod: id, decoupeFrom: cheeseId, menuOpen: false, selected: null }),
      closeDecoupeMethod: () =>
        dispatch(
          state.decoupeFrom
            ? { decoupe: false, decoupeMethod: null, decoupeFrom: null, selected: state.decoupeFrom }
            : { decoupeMethod: null },
        ),
      openCalendrier: () => dispatch({ calendrier: true, menuOpen: false, selected: null }),
      closeCalendrier: () => dispatch({ calendrier: false }),
      openAppellations: () => dispatch({ appel: true, menuOpen: false, selected: null }),
      closeAppellations: () => dispatch({ appel: false }),
      openEncyclopedia: () => dispatch({ encyclo: true, article: null, menuOpen: false, selected: null }),
      closeEncyclopedia: () => dispatch({ encyclo: false, article: null }),
      openArticle: (id) => dispatch({ article: id }),
      backToArticles: () => dispatch({ article: null }),

      openImportExport: () => dispatch({ importExport: true, menuOpen: false, selected: null }),
      closeImportExport: () => dispatch({ importExport: false }),

      openLegal: () => dispatch({ legal: true, menuOpen: false, selected: null }),
      closeLegal: () => dispatch({ legal: false }),

      openListDetail: (id) => dispatch({ openList: id }),
      backToLists: () => dispatch({ openList: null }),
      deleteCurrentList: () => {
        setLists((prev) => (state.openList ? favoritesLib.deleteList(prev, state.openList) : prev))
        dispatch({ openList: null })
      },

      openSheet: (cheeseId) => dispatch({ sheetFor: cheeseId, creating: false, newListName: '' }),
      closeSheet: () => dispatch({ sheetFor: null, creating: false, newListName: '' }),

      startCreate: () => dispatch({ creating: true, newListName: '' }),
      cancelCreate: () => dispatch({ creating: false, newListName: '' }),
      setNewListName: (value) => dispatch({ newListName: value }),

      confirmCreate: () => {
        setLists((prev) => favoritesLib.createList(prev, state.newListName))
        dispatch({ creating: false, newListName: '' })
      },
      confirmCreateAdd: () => {
        setLists((prev) => favoritesLib.createList(prev, state.newListName, state.sheetFor))
        dispatch({ creating: false, newListName: '' })
      },
      toggleInList: (listId, cheeseId) => {
        setLists((prev) => favoritesLib.toggleInList(prev, listId, cheeseId))
      },
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.openList, state.newListName, state.sheetFor, state.decoupeFrom, setLists])

  const value = useMemo<AppContextValue>(() => ({ state, lists, actions }), [state, lists, actions])

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useAppState(): AppContextValue {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useAppState must be used within an AppStateProvider')
  return ctx
}
