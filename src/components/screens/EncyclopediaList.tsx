import { ChevronRight } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useLanguage } from '../../state/LanguageContext'
import { encycloDefs } from '../../lib/encyclopedia'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import styles from './EncyclopediaList.module.css'

export function EncyclopediaList() {
  const { actions } = useAppState()
  const { t, lang } = useLanguage()
  const articles = encycloDefs(lang)

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.closeEncyclopedia}>
        <OverlayTitle>{t('drawer.encyclopedia')}</OverlayTitle>
        <OverlayEyebrow>{t('encyclopedia.eyebrow')}</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        {articles.map((a) => (
          <button key={a.id} type="button" className={styles.row} onClick={() => actions.openArticle(a.id)}>
            <div className={styles.icon} style={{ background: a.tint, color: a.ink }}>
              <a.Icon />
            </div>
            <div className={styles.body}>
              <div className={styles.titre}>{a.titre}</div>
              <div className={styles.sous}>{a.sous}</div>
            </div>
            <ChevronRight size={20} strokeWidth={2.75} color="var(--color-neutral-500)" />
          </button>
        ))}
      </div>
    </OverlayScreen>
  )
}
