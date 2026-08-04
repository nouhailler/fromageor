import { Home, MapPin, Search, Heart } from 'lucide-react'
import type { ComponentType } from 'react'
import type { Tab } from '../../state/types'
import styles from './TabBar.module.css'

const TABS: { key: Tab; label: string; Icon: ComponentType<{ size?: number; strokeWidth?: number }> }[] = [
  { key: 'home', label: 'Accueil', Icon: Home },
  { key: 'carte', label: 'Carte', Icon: MapPin },
  { key: 'recherche', label: 'Recherche', Icon: Search },
  { key: 'favoris', label: 'Favoris', Icon: Heart },
]

export function TabBar({ active, onSelect }: { active: Tab; onSelect: (tab: Tab) => void }) {
  return (
    <div className={styles.bar}>
      {TABS.map(({ key, label, Icon }) => {
        const isActive = active === key
        return (
          <button
            key={key}
            type="button"
            className={styles.tab}
            style={{ color: isActive ? 'var(--color-accent)' : 'var(--color-neutral-600)' }}
            onClick={() => onSelect(key)}
            aria-current={isActive ? 'page' : undefined}
          >
            <Icon size={23} strokeWidth={2.75} />
            <span className={styles.label}>{label}</span>
          </button>
        )
      })}
    </div>
  )
}
