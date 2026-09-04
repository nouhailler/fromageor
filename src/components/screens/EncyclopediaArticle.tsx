import { useAppState } from '../../state/AppStateContext'
import { useLanguage } from '../../state/LanguageContext'
import { encycloDefs } from '../../lib/encyclopedia'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayEyebrow } from '../layout/OverlayHeader'
import styles from './EncyclopediaArticle.module.css'

export function EncyclopediaArticle() {
  const { state, actions } = useAppState()
  const { t, lang } = useLanguage()
  const article = state.article ? encycloDefs(lang).find((a) => a.id === state.article) : undefined

  if (!article) return null

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.backToArticles}>
        <OverlayEyebrow>{t('drawer.encyclopedia')}</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        <div className={styles.banner} style={{ background: article.tint, color: article.ink }}>
          <h1 className={styles.bannerTitle}>{article.titre}</h1>
          <div className={styles.bannerSous}>{article.sous}</div>
        </div>

        <div className={styles.sections}>
          {article.sections.map((s) => (
            <div key={s.h}>
              <h2 className={styles.sectionTitle}>{s.h}</h2>
              <p className={styles.sectionText}>{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </OverlayScreen>
  )
}
