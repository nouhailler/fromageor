import { Heart, ChevronRight } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { StickyHeader } from '../layout/StickyHeader'
import { CreateListForm } from '../ui/CreateListForm'
import styles from './FavoritesOverview.module.css'

export function FavoritesOverview() {
  const { state, actions } = useAppState()
  const { listsOverview } = useCollections()

  return (
    <div>
      <StickyHeader>
        <h1 className={styles.title}>Mes listes</h1>
      </StickyHeader>

      <div className={styles.content}>
        {listsOverview.map((l) => (
          <button key={l.id} type="button" className={styles.row} onClick={() => actions.openListDetail(l.id)}>
            <div className={styles.icon} style={{ background: l.tint, color: l.ink }}>
              <Heart size={22} fill={l.ink} stroke={l.ink} strokeWidth={2} />
            </div>
            <div className={styles.body}>
              <div className={styles.name}>{l.name}</div>
              <div className={styles.sub}>{l.sub}</div>
            </div>
            <ChevronRight size={20} strokeWidth={2.75} color="var(--color-neutral-500)" />
          </button>
        ))}

        <CreateListForm
          creating={state.creating}
          value={state.newListName}
          onChange={actions.setNewListName}
          onStart={actions.startCreate}
          onCancel={actions.cancelCreate}
          onConfirm={actions.confirmCreate}
          confirmLabel="Créer"
          dashedLabel="Créer une liste"
        />
      </div>
    </div>
  )
}
