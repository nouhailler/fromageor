import { useAppState } from '../../state/AppStateContext'
import { FavoritesOverview } from './FavoritesOverview'
import { FavoritesListDetail } from './FavoritesListDetail'

export function FavoritesScreen() {
  const { state } = useAppState()
  return state.openList ? <FavoritesListDetail /> : <FavoritesOverview />
}
