import type { LaitBase } from '../lib/lait'
import type { AppellationLabel } from '../lib/appellations'

export type Tab = 'home' | 'carte' | 'recherche' | 'favoris'
export type MapFilter = 'Tous' | 'AOP' | LaitBase | 'Pâte molle'
export type LaitFilter = 'Tous' | LaitBase
export type AppFilterValue = 'Tous' | AppellationLabel

/** Mirrors the state object of the Component class in the design handoff
 *  prototype (constructor's this.state), minus `lists` which is owned by
 *  useFavoriteLists (see AppStateContext). `importExport` is an addition
 *  beyond the handoff (see ImportExportScreen), following the exact same
 *  open/close pattern as the other secondary overlays (accords, decoupe…). */
export interface AppState {
  tab: Tab
  selected: string | null
  query: string
  lait: LaitFilter
  mapFilter: MapFilter
  openList: string | null
  sheetFor: string | null
  creating: boolean
  newListName: string
  menuOpen: boolean
  accords: boolean
  decoupe: boolean
  calendrier: boolean
  appel: boolean
  appFilter: AppFilterValue
  encyclo: boolean
  article: string | null
  importExport: boolean
}

export const INITIAL_APP_STATE: AppState = {
  tab: 'home',
  selected: null,
  query: '',
  lait: 'Tous',
  mapFilter: 'Tous',
  openList: null,
  sheetFor: null,
  creating: false,
  newListName: '',
  menuOpen: false,
  accords: false,
  decoupe: false,
  calendrier: false,
  appel: false,
  appFilter: 'Tous',
  encyclo: false,
  article: null,
  importExport: false,
}
