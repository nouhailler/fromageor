import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import { CheeseAvatar } from '../ui/CheeseAvatar'
import styles from './AccordsScreen.module.css'

export function AccordsScreen() {
  const { actions } = useAppState()
  const { accordsCats } = useCollections()

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.closeAccords}>
        <OverlayTitle>Accords mets &amp; boissons</OverlayTitle>
        <OverlayEyebrow>Suggestions automatiques</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        {accordsCats.map((cat) => (
          <div key={cat.key}>
            <div className={styles.catHeader}>
              <div className={styles.catIcon} style={{ background: cat.tint, color: cat.ink }}>
                <cat.Icon size={21} />
              </div>
              <div className={styles.catBody}>
                <div className={styles.catLabel}>{cat.label}</div>
                <div className={styles.catDesc}>{cat.desc}</div>
              </div>
            </div>
            <div className={`scrollx ${styles.carousel}`}>
              {cat.items.map((c) => (
                <button key={c.id} type="button" className={styles.card} onClick={() => actions.openCheese(c.id)}>
                  <CheeseAvatar initial={c.initial} size={44} fontSize={20} />
                  <div>
                    <div className={styles.cardName}>{c.nom}</div>
                    <div className={styles.cardMeta}>
                      {c.laitLabel} · {c.intensityLabel}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </OverlayScreen>
  )
}
