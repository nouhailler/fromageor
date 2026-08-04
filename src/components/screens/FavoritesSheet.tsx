import { Check, Heart } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { BottomSheet } from '../ui/BottomSheet'
import { CreateListForm } from '../ui/CreateListForm'
import styles from './FavoritesSheet.module.css'

export function FavoritesSheet() {
  const { state, actions } = useAppState()
  const { sheetCheese, sheetLists } = useCollections()

  return (
    <BottomSheet open={!!sheetCheese} onClose={actions.closeSheet}>
      <div className={styles.header}>
        <div className={styles.kicker}>Ajouter aux favoris</div>
        <div className={styles.title}>{sheetCheese?.nom}</div>
      </div>

      <div className={styles.list}>
        {sheetLists.map((l) => (
          <button
            key={l.id}
            type="button"
            className={styles.row}
            style={{ background: l.rowBg }}
            onClick={() => actions.toggleInList(l.id, state.sheetFor)}
          >
            <div className={styles.icon} style={{ background: l.tint, color: l.ink }}>
              <Heart size={19} fill={l.ink} stroke={l.ink} strokeWidth={2} />
            </div>
            <div className={styles.body}>
              <div className={styles.name}>{l.name}</div>
              <div className={styles.sub}>{l.sub}</div>
            </div>
            <div className={styles.checkbox} style={{ borderColor: l.checkBd, background: l.checkBg }}>
              {l.inList && <Check size={15} strokeWidth={3.2} color="#fff" />}
            </div>
          </button>
        ))}

        <CreateListForm
          creating={state.creating}
          value={state.newListName}
          onChange={actions.setNewListName}
          onStart={actions.startCreate}
          onCancel={actions.cancelCreate}
          onConfirm={actions.confirmCreateAdd}
          confirmLabel="Créer et ajouter"
          dashedLabel="Créer une nouvelle liste"
          inputBackground="var(--color-surface)"
        />
      </div>

      <div className={styles.footer}>
        <button type="button" className={styles.doneButton} onClick={actions.closeSheet}>
          Terminé
        </button>
      </div>
    </BottomSheet>
  )
}
