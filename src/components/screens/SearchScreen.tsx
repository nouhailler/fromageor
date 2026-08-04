import { Search } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { StickyHeader } from '../layout/StickyHeader'
import { ChipRow } from '../ui/ChipRow'
import { CheeseCard } from '../ui/CheeseCard'
import styles from './SearchScreen.module.css'

const LAIT_OPTIONS = ['Tous', 'Vache', 'Chèvre', 'Brebis', 'Mélange'] as const

export function SearchScreen() {
  const { state, actions } = useAppState()
  const { searchResults } = useCollections()

  return (
    <div>
      <StickyHeader>
        <h1 className={styles.title}>Recherche</h1>
        <div className={styles.searchField}>
          <Search size={18} strokeWidth={2.75} color="var(--color-neutral-600)" />
          <input
            value={state.query}
            onChange={(e) => actions.setQuery(e.target.value)}
            placeholder="Nom, région, département…"
          />
        </div>
        <div className={styles.chips}>
          <ChipRow options={LAIT_OPTIONS} value={state.lait} onChange={actions.setLait} />
        </div>
      </StickyHeader>

      <div className={styles.content}>
        <div className={styles.resultCount}>{searchResults.length} résultat(s)</div>
        <div className={styles.list}>
          {searchResults.map((c) => (
            <CheeseCard
              key={c.id}
              initial={c.initial}
              nom={c.nom}
              aop={c.aop}
              subtitle={`${c.dept} · ${c.laitLabel} · ${c.intensityLabel}`}
              onClick={() => actions.openCheese(c.id)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
