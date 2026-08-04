import { useAppState } from '../../state/AppStateContext'
import { decoupeDefs } from '../../lib/decoupe'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import styles from './DecoupeScreen.module.css'

export function DecoupeScreen() {
  const { actions } = useAppState()
  const methods = decoupeDefs()

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.closeDecoupe}>
        <OverlayTitle>Découpe</OverlayTitle>
        <OverlayEyebrow>Bien couper chaque fromage</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        {methods.map((m) => (
          <div key={m.shape} className={styles.card}>
            <div className={styles.diagramBox}>
              <m.Diagram />
            </div>
            <div className={styles.body}>
              <div className={styles.shape}>{m.shape}</div>
              <div className={styles.rule}>{m.rule}</div>
              <div className={styles.examples}>
                {m.examples.map((ex) => (
                  <span key={ex} className={styles.example}>
                    {ex}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </OverlayScreen>
  )
}
