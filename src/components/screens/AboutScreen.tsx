import { Bug, Code2, Mail, Scale, BookOpen } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import { VersionCard } from '../ui/VersionCard'
import { legalPublisher } from '../../lib/legal-notice'
import { aboutAuthor, repoUrl, issuesUrl, credits } from '../../lib/about-info'
import { BUILD_COMMIT, buildVersionLabel, formatBuildDate } from '../../lib/app-version'
import styles from './AboutScreen.module.css'

/** Sujet + corps d'un e-mail de support pré-rempli avec les informations de
 *  diagnostic. Rien n'est envoyé automatiquement : l'utilisateur relit et
 *  envoie lui-même (voir la commande /apropos — pas de collecte silencieuse). */
function supportMailto(): string {
  const subject = 'Fromages de France — support'
  const body = [
    'Décrivez votre problème ici :',
    '',
    '',
    '--- Informations de diagnostic ---',
    `Version : ${buildVersionLabel()} (${BUILD_COMMIT})`,
    `Build : ${formatBuildDate()}`,
    `Navigateur : ${navigator.userAgent}`,
  ].join('\n')
  return `mailto:${legalPublisher.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

export function AboutScreen() {
  const { actions } = useAppState()

  function openLegalFromAbout() {
    actions.closeAbout()
    actions.openLegal()
  }

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.closeAbout}>
        <OverlayTitle>À propos</OverlayTitle>
        <OverlayEyebrow>Fromages de France</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        <div className={`${styles.card} ${styles.identity}`}>
          <img src="/swinux-logo.png" alt="" width={64} height={64} className={styles.logo} />
          <div>
            <div className={styles.appName}>Fromages de France</div>
            <div className={styles.appTagline}>Encyclopédie du terroir fromager français</div>
          </div>
        </div>

        <VersionCard />
        <a className={styles.linkRow} href="/docs/versions/" target="_blank" rel="noreferrer">
          Notes de version
        </a>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Auteur</h2>
          <div className={styles.hint}>{aboutAuthor.name}</div>
          <div className={styles.linkList}>
            <a href={aboutAuthor.website} target="_blank" rel="noreferrer">
              swinux.ch
            </a>
            <a href={aboutAuthor.portfolio} target="_blank" rel="noreferrer">
              Portfolio
            </a>
            {repoUrl && (
              <a href={repoUrl} target="_blank" rel="noreferrer">
                <Code2 size={14} strokeWidth={2.5} />
                Dépôt GitHub (README)
              </a>
            )}
            {issuesUrl && (
              <a href={issuesUrl} target="_blank" rel="noreferrer">
                <Bug size={14} strokeWidth={2.5} />
                Signaler un bug
              </a>
            )}
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Support</h2>
          <div className={styles.hint}>{legalPublisher.email}</div>
          <a className={`${styles.button}`} href={supportMailto()}>
            <Mail size={16} strokeWidth={2.75} />
            Contacter le support
          </a>
          <div className={styles.hint}>
            Ouvre un e-mail pré-rempli avec la version, le build et le navigateur — vous le relisez et l'envoyez
            vous-même, rien n'est transmis automatiquement.
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Informations légales</h2>
          <div className={styles.linkList}>
            <button type="button" onClick={openLegalFromAbout}>
              <Scale size={14} strokeWidth={2.5} />
              Mentions légales
            </button>
            <button type="button" onClick={openLegalFromAbout}>
              Conditions d'utilisation
            </button>
            <button type="button" onClick={openLegalFromAbout}>
              Politique de confidentialité
            </button>
          </div>
          <div className={styles.hint}>
            Les trois pointent aujourd'hui vers le même écran : l'application n'a qu'un seul document légal, qui
            couvre ces trois sujets — voir la note de fin de commande <code>/apropos</code>.
          </div>
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Crédits</h2>
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
          Documentation
        </a>
      </div>
    </OverlayScreen>
  )
}
