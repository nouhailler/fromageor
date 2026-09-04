import { Menu } from 'lucide-react'
import { useLanguage } from '../../state/LanguageContext'
import styles from './HamburgerButton.module.css'

export function HamburgerButton({ onClick }: { onClick: () => void }) {
  const { t } = useLanguage()
  return (
    <button type="button" className={styles.button} onClick={onClick} aria-label={t('drawer.openMenu')}>
      <Menu size={22} strokeWidth={2.75} />
    </button>
  )
}
