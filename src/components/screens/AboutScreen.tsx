import { Bug, Code2, Mail, Scale, BookOpen } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useLanguage } from '../../state/LanguageContext'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import { VersionCard } from '../ui/VersionCard'
import { legalPublisher } from '../../lib/legal-notice'
import { aboutAuthor, repoUrl, issuesUrl, credits } from '../../lib/about-info'
import { BUILD_COMMIT, buildVersionLabel, formatBuildDate } from '../../lib/app-version'
import type { Lang } from '../../lib/i18n/lang'
import type { StringKey } from '../../lib/i18n/strings'
import styles from './AboutScreen.module.css'

/** Sujet + corps d'un e-mail de support pré-rempli avec les informations de
 *  diagnostic. Rien n'est envoyé automatiquement : l'utilisateur relit et
 *  envoie lui-même (voir la commande /apropos — pas de collecte silencieuse). */
function supportMailto(t: (key: StringKey, vars?: Record<string, string | number>) => string, lang: Lang): string {
  const body = [
    t('about.mailDescribe'),
    '',
    '',
    t('about.mailDiagnosticHeader'),
    `${t('about.mailVersion')} ${buildVersionLabel(undefined, lang)} (${BUILD_COMMIT})`,
    `${t('about.mailBuild')} ${formatBuildDate(undefined, undefined, lang)}`,
    `${t('about.mailBrowser')} ${navigator.userAgent}`,
  ].join('\n')
  return `mailto:${legalPublisher.email}?subject=${encodeURIComponent(t('about.mailSubject'))}&body=${encodeURIComponent(body)}`
}

export function AboutScreen() {
  const { actions } = useAppState()
  const { t, lang } = useLanguage()

  function openLegalFromAbout() {
    actions.closeAbout()
    actions.openLegal()
  }

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.closeAbout}>
        <OverlayTitle>{t('drawer.about')}</OverlayTitle>
        <OverlayEyebrow>{t('about.appName')}</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        <div className={`${styles.card} ${styles.identity}`}>
          <img src="/swinux-logo.png" alt="" width={64} height={64} className={styles.logo} />
          <div>
            <div className={styles.appName}>{t('about.appName')}</div>
            <div className={styles.appTagline}>{t('about.tagline')}</div>
          </div>
        </div>

        <VersionCard />
        <a className={styles.linkRow} href="/docs/versions/" target="_blank" rel="noreferrer">
          {t('about.notesVersion')}
        </a>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>{t('about.authorTitle')}</h2>
          <div className={styles.hint}>{aboutAuthor.name}</div>
          <div className={styles.linkList}>
            <a href={aboutAuthor.website} target="_blank" rel="noreferrer">
              swinux.ch
            </a>
            <a href={aboutAuthor.portfolio} target="_blank" rel="noreferrer">
              {t('about.portfolio')}
            </a>
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noreferrer">
                <Code2 size={14} strokeWidth={2.5} />
                {t('about.repo')}
              </a>
            )}
            {issuesUrl && (
              <a href={issuesUrl} target="_blank" rel="noreferrer">
                <Bug size={14} strokeWidth={2.5} />
                {t('about.reportBug')}
              </a>
            )}
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>{t('about.supportTitle')}</h2>
          <div className={styles.hint}>{legalPublisher.email}</div>
          <a className={`${styles.button}`} href={supportMailto(t, lang)}>
            <Mail size={16} strokeWidth={2.75} />
            {t('about.contactSupport')}
          </a>
          <div className={styles.hint}>{t('about.supportHint')}</div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>{t('about.legalTitle')}</h2>
          <div className={styles.linkList}>
            <button type="button" onClick={openLegalFromAbout}>
              <Scale size={14} strokeWidth={2.5} />
              {t('drawer.legal')}
            </button>
            <button type="button" onClick={openLegalFromAbout}>
              {t('about.terms')}
            </button>
            <button type="button" onClick={openLegalFromAbout}>
              {t('about.privacy')}
            </button>
          </div>
          <div className={styles.hint}>{t('about.legalHint')}</div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>{t('about.creditsTitle')}</h2>
          <ul className={styles.credits}>
            {credits.map((c) => (
              <li key={c.name}>
                <a href={c.url} target="_blank" rel="noreferrer">
                  {c.name}
                </a>
                <span className={styles.license}>{c.license}</span>
              </li>
            ))}
          </ul>
          <div className={styles.copyright}>© {new Date().getFullYear()} {aboutAuthor.name} / {legalPublisher.name}</div>
        </div>

        <a className={styles.linkRow} href="/docs/" target="_blank" rel="noreferrer">
          <BookOpen size={16} strokeWidth={2.75} />
          {t('drawer.documentation')}
        </a>
      </div>
    </OverlayScreen>
  )
}
