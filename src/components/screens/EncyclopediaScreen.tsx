import { useAppState } from '../../state/AppStateContext'
import { EncyclopediaList } from './EncyclopediaList'
import { EncyclopediaArticle } from './EncyclopediaArticle'

export function EncyclopediaScreen() {
  const { state } = useAppState()
  return state.article ? <EncyclopediaArticle /> : <EncyclopediaList />
}
