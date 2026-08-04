import { Check } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import styles from './CalendarScreen.module.css'

export function CalendarScreen() {
  const { actions } = useAppState()
  const { calMonths } = useCollections()

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.closeCalendrier}>
        <OverlayTitle>Calendrier des saisons</OverlayTitle>
        <OverlayEyebrow>Mois par mois</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        {calMonths.map((mo) => (
          <div key={mo.name} className={styles.card} style={{ background: mo.cardBg, borderColor: mo.cardBd }}>
            <div className={styles.header}>
              <div className={styles.name}>{mo.name}</div>
              {mo.isNow && <span className={styles.nowBadge}>Ce mois-ci</span>}
              <span className={styles.count}>{mo.count} fromages</span>
            </div>
            <div className={styles.items}>
              {mo.items.map((c) => (
                <button key={c.id} type="button" className={styles.item} onClick={() => actions.openCheese(c.id)}>
                  <Check size={14} strokeWidth={3} color="var(--color-accent-700)" />
                  {c.nom}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </OverlayScreen>
  )
}
