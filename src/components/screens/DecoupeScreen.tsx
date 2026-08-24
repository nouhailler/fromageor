import { useAppState } from '../../state/AppStateContext'
import { DecoupeList } from './DecoupeList'
import { DecoupeMethodScreen } from './DecoupeMethodScreen'

export function DecoupeScreen() {
  const { state } = useAppState()
  return state.decoupeMethod ? <DecoupeMethodScreen /> : <DecoupeList />
}
