import { ChevronRight } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import styles from './DecoupeList.module.css'

export function DecoupeList() {
  const { actions } = useAppState()
  // Les fromages cités sous chaque méthode viennent de la base, et non d'une
  // liste écrite à la main : ce sont exactement ceux dont la fiche annonce
  // cette méthode. La carte entière ouvre le détail de la méthode, où ils
  // sont tous listés et cliquables.
  const { decoupeMethods } = useCollections()

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.closeDecoupe}>
        <OverlayTitle>Découpe</OverlayTitle>
        <OverlayEyebrow>Bien couper chaque fromage</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        {decoupeMethods.map(({ method, items, examples }) => (
          <button
            type="button"
            key={method.id}
            className={styles.card}
            onClick={() => actions.openDecoupeMethod(method.id)}
          >
            <div className={styles.diagramBox}>
              <method.Diagram />
            </div>
            <div className={styles.body}>
              <div className={styles.shape}>{method.shape}</div>
              <div className={styles.rule}>{method.rule}</div>
              <div className={styles.examples}>
                {examples.map((c) => (
                  <span key={c.id} className={styles.example}>
                    {c.nom}
                  </span>
                ))}
                {items.length > examples.length && (
                  <span className={styles.exampleMore}>
                    + {items.length - examples.length}
                    {items.length - examples.length > 1 ? ' autres' : ' autre'}
                  </span>
                )}
              </div>
              <div className={styles.open}>
                Le geste, pas à pas
                <ChevronRight size={15} strokeWidth={2.75} />
              </div>
            </div>
          </button>
        ))}
      </div>
    </OverlayScreen>
  )
}
