import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import { ChipRow } from '../ui/ChipRow'
import { CheeseCard } from '../ui/CheeseCard'
import type { AppFilterValue } from '../../state/types'
import styles from './AppellationsScreen.module.css'

const APP_FILTER_OPTIONS: AppFilterValue[] = ['Tous', 'AOP', 'IGP', 'Label Rouge', 'Bio']

export function AppellationsScreen() {
  const { state, actions } = useAppState()
  const { appList } = useCollections()

  return (
    <OverlayScreen>
      <OverlayHeader
        onBack={actions.closeAppellations}
        extra={<ChipRow options={APP_FILTER_OPTIONS} value={state.appFilter} onChange={actions.setAppFilter} />}
      >
        <OverlayTitle>Appellations</OverlayTitle>
        <OverlayEyebrow>Signes de qualité</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        <div className={styles.count}>{appList.length} fromage(s)</div>
        <div className={styles.list}>
          {appList.map((c) => (
            <CheeseCard
              key={c.id}
              initial={c.initial}
              nom={c.nom}
              subtitle={`${c.dept} · ${c.laitLabel}`}
              badges={c.labels}
              onClick={() => actions.openCheese(c.id)}
            />
          ))}
        </div>
        <div className={styles.note}>
          AOP et IGP correspondent aux signes officiels du fromage. Label Rouge et Bio sont déduits de sa famille et
          de son intensité, à titre indicatif : ils ne reflètent pas les certifications réellement détenues.
        </div>
      </div>
    </OverlayScreen>
  )
}
