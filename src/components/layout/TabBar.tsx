import { Home, MapPin, Search, Heart } from 'lucide-react'
import type { ComponentType } from 'react'
import type { Tab } from '../../state/types'
import { useLanguage } from '../../state/LanguageContext'
import type { StringKey } from '../../lib/i18n/strings'
import styles from './TabBar.module.css'

const TABS: { key: Tab; labelKey: StringKey; Icon: ComponentType<{ size?: number; strokeWidth?: number }> }[] = [
  { key: 'home', labelKey: 'nav.home', Icon: Home },
  { key: 'carte', labelKey: 'nav.map', Icon: MapPin },
  { key: 'recherche', labelKey: 'nav.search', Icon: Search },
  { key: 'favoris', labelKey: 'nav.favorites', Icon: Heart },
]

export function TabBar({ active, onSelect }: { active: Tab; onSelect: (tab: Tab) => void }) {
  const { t } = useLanguage()
  return (
    <div className={styles.bar}>
      {TABS.map(({ key, labelKey, Icon }) => {
        const label = t(labelKey)
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
