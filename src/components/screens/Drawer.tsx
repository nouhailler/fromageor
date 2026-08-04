import { X, Home, MapPin, Search, Heart, Database } from 'lucide-react'
import type { ComponentType } from 'react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import type { Tab } from '../../state/types'
import { GobletIcon, ShearsIcon, CalendarIcon, StarBadgeIcon, OpenBookIcon } from '../icons/MiscIcons'
import styles from './Drawer.module.css'

const TAB_ITEMS: { key: Tab; label: string; Icon: ComponentType<{ size?: number; strokeWidth?: number }> }[] = [
  { key: 'home', label: 'Accueil', Icon: Home },
  { key: 'carte', label: 'Carte', Icon: MapPin },
  { key: 'recherche', label: 'Recherche', Icon: Search },
  { key: 'favoris', label: 'Favoris', Icon: Heart },
]

export function Drawer() {
  const { actions } = useAppState()
  const { deco, regions } = useCollections()

  return (
    <div className={styles.root}>
      <div className={styles.backdrop} onClick={actions.closeMenu} />
      <div className={styles.panel}>
        <div className={styles.header}>
          <div>
            <div className={styles.brand}>
              Fromages
              <br />
              de France
            </div>
            <div className={styles.brandSub}>{deco.length} fiches référencées</div>
          </div>
          <button type="button" className={styles.closeButton} onClick={actions.closeMenu} aria-label="Fermer le menu">
            <X size={20} strokeWidth={2.75} />
          </button>
        </div>

        <div className={`mainscroll ${styles.nav}`}>
          <div className={styles.navGroup}>
            {TAB_ITEMS.map((item) => {
              // The drawer's tab entries mirror the bottom tab bar's active
              // state: only the current tab (with no fiche open) is highlighted.
              return (
                <DrawerTabItem key={item.key} tab={item.key} label={item.label} Icon={item.Icon} />
              )
            })}
          </div>

          <button
            type="button"
            className={`${styles.navItem} ${styles.overlayItem}`}
            style={{ background: 'transparent', color: 'var(--color-text)' }}
            onClick={actions.openAccords}
          >
            <span className={styles.navItemIcon}>
              <GobletIcon size={22} />
            </span>
            Accords mets &amp; boissons
          </button>
          <button
            type="button"
            className={styles.navItem}
            style={{ background: 'transparent', color: 'var(--color-text)' }}
            onClick={actions.openDecoupe}
          >
            <span className={styles.navItemIcon}>
              <ShearsIcon size={22} />
            </span>
            Découpe
          </button>
          <button
            type="button"
            className={styles.navItem}
            style={{ background: 'transparent', color: 'var(--color-text)' }}
            onClick={actions.openCalendrier}
          >
            <span className={styles.navItemIcon}>
              <CalendarIcon size={22} />
            </span>
            Calendrier des saisons
          </button>
          <button
            type="button"
            className={styles.navItem}
            style={{ background: 'transparent', color: 'var(--color-text)' }}
            onClick={actions.openAppellations}
          >
            <span className={styles.navItemIcon}>
              <StarBadgeIcon size={22} />
            </span>
            Appellations
          </button>
          <button
            type="button"
            className={styles.navItem}
            style={{ background: 'transparent', color: 'var(--color-text)' }}
            onClick={actions.openEncyclopedia}
          >
            <span className={styles.navItemIcon}>
              <OpenBookIcon size={22} />
            </span>
            Encyclopédie
          </button>
          <button
            type="button"
            className={styles.navItem}
            style={{ background: 'transparent', color: 'var(--color-text)' }}
            onClick={actions.openImportExport}
          >
            <span className={styles.navItemIcon}>
              <Database size={22} strokeWidth={2.75} />
            </span>
            Import / Export
          </button>

          <div className={styles.divider} />
          <div className={styles.regionsSection}>
            <div className={styles.regionsLabel}>Régions</div>
            {regions.map((region) => (
              <div key={region.id} className={styles.regionRow}>
                <span className={styles.regionDot} />
                <span className={styles.regionName}>{region.name}</span>
                <span className={styles.regionCount}>{deco.filter((c) => c.regionId === region.id).length}</span>
              </div>
            ))}
            {regions.length <= 1 && <div className={styles.regionsHint}>Autres régions à venir…</div>}
          </div>
          <div className={styles.divider} />
          <div className={styles.footer}>
            Encyclopédie du terroir fromager français. Données de démonstration — lot&nbsp;1.
          </div>
        </div>
      </div>
    </div>
  )
}

function DrawerTabItem({
  tab,
  label,
  Icon,
}: {
  tab: Tab
  label: string
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>
}) {
  const { state, actions } = useAppState()
  const active = !state.selected && state.tab === tab
  return (
    <button
      type="button"
      className={styles.navItem}
      style={{
        background: active ? 'var(--color-accent-200)' : 'transparent',
        color: active ? 'var(--color-accent-700)' : 'var(--color-text)',
      }}
      onClick={() => actions.selectTabFromDrawer(tab)}
    >
      <span className={styles.navItemIcon}>
        <Icon size={22} strokeWidth={2.75} />
      </span>
      {label}
    </button>
  )
}
