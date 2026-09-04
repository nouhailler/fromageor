import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { useLanguage } from '../../state/LanguageContext'
import { laitLabel, type LaitBase } from '../../lib/lait'
import { pick } from '../../lib/i18n/lang'
import { StickyHeader } from '../layout/StickyHeader'
import { ChipRow } from '../ui/ChipRow'
import { FranceMap } from '../map/FranceMap'
import type { MapFilter } from '../../state/types'
import styles from './MapScreen.module.css'

const MAP_FILTER_OPTIONS: MapFilter[] = ['Tous', 'AOP', 'Chèvre', 'Brebis', 'Pâte molle']

const LEGEND: { key: LaitBase; color: string }[] = [
  { key: 'Vache', color: '#c67139' },
  { key: 'Chèvre', color: '#7a8a5e' },
  { key: 'Brebis', color: '#8c491a' },
  { key: 'Mélange', color: '#b2622d' },
]

export function MapScreen() {
  const { state, actions } = useAppState()
  const { mapDots } = useCollections()
  const { t, lang } = useLanguage()

  function mapFilterLabel(opt: MapFilter): string {
    if (opt === 'Tous') return pick(lang, 'Tous', 'All')
    if (opt === 'AOP') return 'AOP'
    if (opt === 'Pâte molle') return pick(lang, 'Pâte molle', 'Soft cheese')
    return laitLabel(opt, lang)
  }

  return (
    <div>
      <StickyHeader>
        <h1 className={styles.title}>{t('map.title')}</h1>
        <ChipRow options={MAP_FILTER_OPTIONS} value={state.mapFilter} onChange={actions.setMapFilter} labelFor={mapFilterLabel} />
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
            <div key={l.key} className={styles.legendItem}>
              <span className={styles.legendDot} style={{ background: l.color }} />
              {laitLabel(l.key, lang)}
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
