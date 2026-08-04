import { Menu } from 'lucide-react'
import styles from './HamburgerButton.module.css'

export function HamburgerButton({ onClick }: { onClick: () => void }) {
  return (
    <button type="button" className={styles.button} onClick={onClick} aria-label="Ouvrir le menu">
      <Menu size={22} strokeWidth={2.75} />
    </button>
  )
}
