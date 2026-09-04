import { useState } from 'react'
import { RefreshCw, CircleCheck, CircleAlert } from 'lucide-react'
import { checkForUpdate, readLastCheckAt } from '../../pwa'
import type { UpdateCheckResult } from '../../lib/app-update'
import { BUILD_COMMIT, buildTimeMs, buildVersionLabel, formatBuildDate, formatRelative } from '../../lib/app-version'
import { useLanguage } from '../../state/LanguageContext'
import type { StringKey } from '../../lib/i18n/strings'
import styles from './VersionCard.module.css'

type Status = 'idle' | 'checking' | UpdateCheckResult

/** Ce que l'utilisateur lit après avoir appuyé sur le bouton. `tone` pilote
 *  la couleur : rien d'alarmant à être déjà à jour. */
const MESSAGE_KEYS: Record<Exclude<Status, 'idle'>, { key: StringKey; tone: 'ok' | 'warn' | 'busy' }> = {
  checking: { key: 'versionCard.status.checking', tone: 'busy' },
  'up-to-date': { key: 'versionCard.status.upToDate', tone: 'ok' },
  'update-found': { key: 'versionCard.status.updateFound', tone: 'ok' },
  offline: { key: 'versionCard.status.offline', tone: 'warn' },
  unsupported: { key: 'versionCard.status.unsupported', tone: 'warn' },
  error: { key: 'versionCard.status.error', tone: 'warn' },
}

/** Version installée, date du build, dernière vérification, et un bouton
 *  pour aller chercher une mise à jour tout de suite — l'app le fait déjà
 *  toute seule (voir lib/app-update.ts), mais rien ne le montrait. */
export function VersionCard() {
  const [status, setStatus] = useState<Status>('idle')
  // Relu à chaque vérification : `readLastCheckAt` lit le stockage, pas un état.
  const [lastCheckAt, setLastCheckAt] = useState<number | null>(() => readLastCheckAt())
  const { t, lang } = useLanguage()

  async function handleCheck() {
    setStatus('checking')
    const result = await checkForUpdate()
    setStatus(result)
    setLastCheckAt(readLastCheckAt())
  }

  const message = status === 'idle' ? null : MESSAGE_KEYS[status]

  return (
    <div className={styles.card}>
      <h2 className={styles.sectionTitle}>{t('versionCard.title')}</h2>

      <dl className={styles.rows}>
        <div className={styles.row}>
          <dt className={styles.key}>{t('versionCard.version')}</dt>
          <dd className={styles.value}>
            {buildVersionLabel()}
            <span className={styles.commit}>{BUILD_COMMIT}</span>
          </dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.key}>{t('versionCard.update')}</dt>
          <dd className={styles.value}>
            {formatBuildDate(undefined, undefined, lang)}
            <span className={styles.since}>{formatRelative(buildTimeMs(), undefined, lang)}</span>
          </dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.key}>{t('versionCard.check')}</dt>
          <dd className={styles.value}>
            {lastCheckAt === null ? t('versionCard.neverChecked') : formatRelative(lastCheckAt, undefined, lang)}
          </dd>
        </div>
      </dl>

      <div className={styles.buttonRow}>
        <button
          type="button"
          className={styles.button}
          onClick={handleCheck}
          disabled={status === 'checking'}
        >
          <RefreshCw
            size={16}
            strokeWidth={2.75}
            className={status === 'checking' ? styles.spin : undefined}
          />
          {t('versionCard.checkButton')}
        </button>
      </div>

      {message && (
        <div className={`${styles.message} ${styles[message.tone]}`} role="status" aria-live="polite">
          {message.tone === 'busy' && <RefreshCw size={16} strokeWidth={2.75} className={styles.spin} />}
          {message.tone === 'warn' && <CircleAlert size={16} strokeWidth={2.75} />}
          {message.tone === 'ok' && <CircleCheck size={16} strokeWidth={2.75} />}
          {t(message.key)}
        </div>
      )}

      <div className={styles.hint}>{t('versionCard.hint')}</div>
    </div>
  )
}
