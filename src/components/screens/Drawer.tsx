import { X, Home, MapPin, Search, Heart, Database, Scale, BookOpen, Info } from 'lucide-react'
import type { ComponentType } from 'react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { useLanguage } from '../../state/LanguageContext'
import type { Tab } from '../../state/types'
import type { StringKey } from '../../lib/i18n/strings'
import { regionName } from '../../lib/region-lookup'
import { GobletIcon, ShearsIcon, CalendarIcon, StarBadgeIcon, OpenBookIcon } from '../icons/MiscIcons'
import styles from './Drawer.module.css'

const TAB_ITEMS: { key: Tab; labelKey: StringKey; Icon: ComponentType<{ size?: number; strokeWidth?: number }> }[] = [
  { key: 'home', labelKey: 'nav.home', Icon: Home },
  { key: 'carte', labelKey: 'nav.map', Icon: MapPin },
  { key: 'recherche', labelKey: 'nav.search', Icon: Search },
  { key: 'favoris', labelKey: 'nav.favorites', Icon: Heart },
]

export function Drawer() {
  const { actions } = useAppState()
  const { deco, regions } = useCollections()
  const { t, lang, setLang } = useLanguage()

  return (
    <div className={styles.root}>
      <div className={styles.backdrop} onClick={actions.closeMenu} />
      <div className={styles.panel}>
        <div className={styles.header}>
          <div>
            <div className={styles.brand}>
              {t('drawer.brandLine1')}
              <br />
              {t('drawer.brandLine2')}
            </div>
            <div className={styles.brandSub}>{t('drawer.fichesReferenced', { n: deco.length })}</div>
          </div>
          <div className={styles.headerActions}>
            <div className={styles.langSwitch} role="group" aria-label="FR / EN">
              <button
                type="button"
                className={styles.langButton}
                data-active={lang === 'fr'}
                onClick={() => setLang('fr')}
                aria-label={t('drawer.switchToFrench')}
                aria-pressed={lang === 'fr'}
              >
                FR
              </button>
              <button
                type="button"
                className={styles.langButton}
                data-active={lang === 'en'}
                onClick={() => setLang('en')}
                aria-label={t('drawer.switchToEnglish')}
                aria-pressed={lang === 'en'}
              >
                EN
              </button>
            </div>
            <button type="button" className={styles.closeButton} onClick={actions.closeMenu} aria-label={t('drawer.closeMenu')}>
              <X size={20} strokeWidth={2.75} />
            </button>
          </div>
        </div>

        <div className={`mainscroll ${styles.nav}`}>
          <div className={styles.navGroup}>
            {TAB_ITEMS.map((item) => {
              // The drawer's tab entries mirror the bottom tab bar's active
              // state: only the current tab (with no fiche open) is highlighted.
              return (
                <DrawerTabItem key={item.key} tab={item.key} label={t(item.labelKey)} Icon={item.Icon} />
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
            {t('drawer.accords')}
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
            {t('drawer.decoupe')}
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
            {t('drawer.calendar')}
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
            {t('drawer.appellations')}
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
            {t('drawer.encyclopedia')}
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
            {t('drawer.importExport')}
          </button>
          <button
            type="button"
            className={styles.navItem}
            style={{ background: 'transparent', color: 'var(--color-text)' }}
            onClick={actions.openLegal}
          >
            <span className={styles.navItemIcon}>
              <Scale size={22} strokeWidth={2.75} />
            </span>
            {t('drawer.legal')}
          </button>

          <div className={styles.divider} />
          <div className={styles.regionsSection}>
            <div className={styles.regionsLabel}>{t('drawer.regionsLabel')}</div>
            {regions.map((region) => (
              <div key={region.id} className={styles.regionRow}>
                <span className={styles.regionDot} />
                <span className={styles.regionName}>{regionName(region.id, lang)}</span>
                <span className={styles.regionCount}>{deco.filter((c) => c.regionId === region.id).length}</span>
              </div>
            ))}
          </div>
          <div className={styles.divider} />
          <div className={styles.footer}>{t('drawer.footer', { n: deco.length, r: regions.length })}</div>
          <div className={styles.divider} />
          <a
            href="/docs/"
            target="_blank"
            rel="noreferrer"
            className={styles.navItem}
            style={{ background: 'transparent', color: 'var(--color-text)' }}
          >
            <span className={styles.navItemIcon}>
              <BookOpen size={22} strokeWidth={2.75} />
            </span>
            {t('drawer.documentation')}
          </a>
          <button
            type="button"
            className={styles.navItem}
            style={{ background: 'transparent', color: 'var(--color-text)' }}
            onClick={actions.openAbout}
          >
            <span className={styles.navItemIcon}>
              <Info size={22} strokeWidth={2.75} />
            </span>
            {t('drawer.about')}
          </button>
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
