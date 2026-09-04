import { Plus } from 'lucide-react'
import { useLanguage } from '../../state/LanguageContext'
import styles from './CreateListForm.module.css'

export interface CreateListFormProps {
  creating: boolean
  value: string
  onChange: (value: string) => void
  onStart: () => void
  onCancel: () => void
  onConfirm: () => void
  confirmLabel: string
  dashedLabel: string
  inputBackground?: string
}

/** The "Créer une liste" flow shared by the favorites overview and the
 *  "add to list" bottom sheet: a dashed button that reveals a name field. */
export function CreateListForm({
  creating,
  value,
  onChange,
  onStart,
  onCancel,
  onConfirm,
  confirmLabel,
  dashedLabel,
  inputBackground,
}: CreateListFormProps) {
  const { t } = useLanguage()
  if (!creating) {
    return (
      <button type="button" className={styles.dashedButton} onClick={onStart}>
        <Plus size={20} strokeWidth={2.75} />
        {dashedLabel}
      </button>
    )
  }
  return (
    <div className={styles.form}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={t('favorites.newListPlaceholder')}
        autoFocus
        className={styles.input}
        style={inputBackground ? { background: inputBackground } : undefined}
      />
      <div className={styles.actions}>
        <button type="button" className={styles.cancel} onClick={onCancel}>
          {t('common.cancel')}
        </button>
        <button type="button" className={styles.confirm} onClick={onConfirm}>
          {confirmLabel}
        </button>
      </div>
    </div>
  )
}
