import { legalPublisher, legalSections } from '../../lib/legal-notice'
import { useLanguage } from '../../state/LanguageContext'
import styles from './LiabilityNotice.module.css'

/** Corps des mentions légales — les mêmes sections sont affichées par la
 *  modale « Voir les détails » et par l'écran Mentions légales du menu.
 *  Aucun texte n'est écrit ici : tout vient de lib/legal-notice.ts. */
export function LiabilityNotice({ usesGeolocation }: { usesGeolocation?: boolean }) {
  const { t, lang } = useLanguage()
  const sections = legalSections(usesGeolocation, lang)

  return (
    <div className={styles.sections}>
      {sections.map((section) => (
        <section key={section.id} aria-labelledby={`legal-${section.id}`}>
          <h2 className={styles.sectionTitle} id={`legal-${section.id}`}>
            {section.title}
          </h2>
          {section.paragraphs.map((paragraph, index) => (
            <p className={styles.paragraph} key={index}>
              {paragraph}
            </p>
          ))}
        </section>
      ))}

      <section aria-labelledby="legal-editeur">
        <h2 className={styles.sectionTitle} id="legal-editeur">
          {t('legal.publisher')}
        </h2>
        <dl className={styles.meta}>
          <div className={styles.metaRow}>
            <dt className={styles.metaKey}>{t('legal.publisher')}</dt>
            <dd className={styles.metaValue}>{legalPublisher.name}</dd>
          </div>
          <div className={styles.metaRow}>
            <dt className={styles.metaKey}>{t('legal.contact')}</dt>
            <dd className={styles.metaValue}>
              <a href={`mailto:${legalPublisher.email}`}>{legalPublisher.email}</a>
            </dd>
          </div>
          <div className={styles.metaRow}>
            <dt className={styles.metaKey}>{t('legal.address')}</dt>
            <dd className={styles.metaValue}>{legalPublisher.address}</dd>
          </div>
          <div className={styles.metaRow}>
            <dt className={styles.metaKey}>{t('legal.hosting')}</dt>
            <dd className={styles.metaValue}>{legalPublisher.host}</dd>
          </div>
          <div className={styles.metaRow}>
            <dt className={styles.metaKey}>{t('legal.lastUpdate')}</dt>
            <dd className={styles.metaValue}>{legalPublisher.updatedAt}</dd>
          </div>
        </dl>
      </section>
    </div>
  )
}
