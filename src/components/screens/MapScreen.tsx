import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { StickyHeader } from '../layout/StickyHeader'
import { ChipRow } from '../ui/ChipRow'
import { FranceMap } from '../map/FranceMap'
import type { MapFilter } from '../../state/types'
import styles from './MapScreen.module.css'

const MAP_FILTER_OPTIONS: MapFilter[] = ['Tous', 'AOP', 'Chèvre', 'Brebis', 'Pâte molle']

const LEGEND = [
  { label: 'Vache', color: '#c67139' },
  { label: 'Chèvre', color: '#7a8a5e' },
  { label: 'Brebis', color: '#8c491a' },
  { label: 'Mélange', color: '#b2622d' },
]

export function MapScreen() {
  const { state, actions } = useAppState()
  const { mapDots } = useCollections()

  return (
    <div>
      <StickyHeader>
        <h1 className={styles.title}>Carte de France</h1>
        <ChipRow options={MAP_FILTER_OPTIONS} value={state.mapFilter} onChange={actions.setMapFilter} />
      </StickyHeader>

      <div className={styles.content}>
        <div className={styles.mapCard}>
          <FranceMap
            className={styles.mapSvg}
            dotRadius={2.6}
            dotStrokeWidth={0.7}
            outlineStrokeWidth={0.7}
            dots={mapDots.map((c) => ({
              id: c.id,
              x: c.x,
              y: c.y,
              fill: c.fill,
              onClick: () => actions.openCheese(c.id),
              label: c.nom,
            }))}
          />
        </div>

        <div className={styles.legend}>
          {LEGEND.map((l) => (
            <div key={l.label} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: l.color }} />
              {l.label}
            </div>
          ))}
        </div>

        <div className={styles.list}>
          {mapDots.map((c) => (
            <button key={c.id} type="button" className={styles.listRow} onClick={() => actions.openCheese(c.id)}>
              <span className={styles.listDot} style={{ background: c.fill }} />
              <span className={styles.listName}>{c.nom}</span>
              <span className={styles.listDept}>{c.dept}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
