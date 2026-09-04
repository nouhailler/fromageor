import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { useLanguage } from '../../state/LanguageContext'
import { appellationLabel, type AppellationLabel } from '../../lib/appellations'
import { pick } from '../../lib/i18n/lang'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import { ChipRow } from '../ui/ChipRow'
import { CheeseCard } from '../ui/CheeseCard'
import type { AppFilterValue } from '../../state/types'
import styles from './AppellationsScreen.module.css'

const APP_FILTER_OPTIONS: AppFilterValue[] = ['Tous', 'AOP', 'IGP', 'Label Rouge', 'Bio']

export function AppellationsScreen() {
  const { state, actions } = useAppState()
  const { appList } = useCollections()
  const { t, lang } = useLanguage()

  function filterLabel(opt: AppFilterValue): string {
    if (opt === 'Tous') return pick(lang, 'Tous', 'All')
    return appellationLabel(opt as AppellationLabel, lang)
  }

  return (
    <OverlayScreen>
      <OverlayHeader
        onBack={actions.closeAppellations}
        extra={
          <ChipRow options={APP_FILTER_OPTIONS} value={state.appFilter} onChange={actions.setAppFilter} labelFor={filterLabel} />
        }
      >
        <OverlayTitle>{t('drawer.appellations')}</OverlayTitle>
        <OverlayEyebrow>{t('appellations.eyebrow')}</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        <div className={styles.count}>{t('appellations.count', { n: appList.length })}</div>
        <div className={styles.list}>
          {appList.map((c) => (
            <CheeseCard
              key={c.id}
              initial={c.initial}
              nom={c.nom}
              subtitle={`${c.dept} · ${c.laitLabel}`}
              badges={c.labels}
              onClick={() => actions.openCheese(c.id)}
            />
          ))}
        </div>
        <div className={styles.note}>{t('appellations.note')}</div>
      </div>
    </OverlayScreen>
  )
}
