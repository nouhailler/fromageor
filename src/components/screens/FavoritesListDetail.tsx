import { ChevronLeft, Heart, Trash2 } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { useLanguage } from '../../state/LanguageContext'
import { CheeseCard } from '../ui/CheeseCard'
import styles from './FavoritesListDetail.module.css'

export function FavoritesListDetail() {
  const { actions } = useAppState()
  const { curList, curListItems } = useCollections()
  const { t } = useLanguage()

  if (!curList) return null

  return (
    <div>
      <div className={styles.header}>
        <button type="button" className={styles.circleButton} onClick={actions.backToLists} aria-label={t('common.back')}>
          <ChevronLeft size={20} strokeWidth={2.75} />
        </button>
        <h1 className={styles.title}>{curList.name}</h1>
        <button
          type="button"
          className={`${styles.circleButton} ${styles.deleteButton}`}
          onClick={actions.deleteCurrentList}
          aria-label={t('favorites.deleteList')}
        >
          <Trash2 size={19} strokeWidth={2.75} color="var(--color-accent-700)" />
        </button>
      </div>

      <div className={styles.content}>
        {curListItems.length > 0 ? (
          <div className={styles.list}>
            {curListItems.map((c) => (
              <CheeseCard
                key={c.id}
                initial={c.initial}
                nom={c.nom}
                subtitle={`${c.dept} · ${c.laitLabel}`}
                onClick={() => actions.openCheese(c.id)}
              />
            ))}
          </div>
        ) : (
          <div className={styles.empty}>
            <div className={styles.emptyIcon}>
              <Heart size={32} strokeWidth={2.75} color="var(--color-neutral-500)" />
            </div>
            <div className={styles.emptyTitle}>{t('favorites.emptyTitle')}</div>
            <div className={styles.emptyHint}>{t('favorites.emptyHint')}</div>
          </div>
        )}
      </div>
    </div>
  )
}
