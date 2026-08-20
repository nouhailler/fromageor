import { useState } from 'react'
import { RefreshCw, CircleCheck, CircleAlert } from 'lucide-react'
import { checkForUpdate, readLastCheckAt } from '../../pwa'
import type { UpdateCheckResult } from '../../lib/app-update'
import { BUILD_COMMIT, buildTimeMs, buildVersionLabel, formatBuildDate, formatRelative } from '../../lib/app-version'
import styles from './VersionCard.module.css'

type Status = 'idle' | 'checking' | UpdateCheckResult

/** Ce que l'utilisateur lit après avoir appuyé sur le bouton. `tone` pilote
 *  la couleur : rien d'alarmant à être déjà à jour. */
const MESSAGES: Record<Exclude<Status, 'idle'>, { text: string; tone: 'ok' | 'warn' | 'busy' }> = {
  checking: { text: 'Recherche en cours…', tone: 'busy' },
  'up-to-date': { text: 'Vous avez déjà la dernière version.', tone: 'ok' },
  'update-found': { text: "Nouvelle version trouvée — l'application va redémarrer.", tone: 'ok' },
  offline: { text: 'Pas de connexion : impossible de vérifier.', tone: 'warn' },
  unsupported: {
    text: "Les mises à jour automatiques ne sont pas actives ici (mode développement ou navigation privée).",
    tone: 'warn',
  },
  error: { text: 'La vérification a échoué. Réessayez plus tard.', tone: 'warn' },
}

/** Version installée, date du build, dernière vérification, et un bouton
 *  pour aller chercher une mise à jour tout de suite — l'app le fait déjà
 *  toute seule (voir lib/app-update.ts), mais rien ne le montrait. */
export function VersionCard() {
  const [status, setStatus] = useState<Status>('idle')
  // Relu à chaque vérification : `readLastCheckAt` lit le stockage, pas un état.
  const [lastCheckAt, setLastCheckAt] = useState<number | null>(() => readLastCheckAt())

  async function handleCheck() {
    setStatus('checking')
    const result = await checkForUpdate()
    setStatus(result)
    setLastCheckAt(readLastCheckAt())
  }

  const message = status === 'idle' ? null : MESSAGES[status]

  return (
    <div className={styles.card}>
      <h2 className={styles.sectionTitle}>Version de l&rsquo;application</h2>

      <dl className={styles.rows}>
        <div className={styles.row}>
          <dt className={styles.key}>Version</dt>
          <dd className={styles.value}>
            {buildVersionLabel()}
            <span className={styles.commit}>{BUILD_COMMIT}</span>
          </dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.key}>Mise à jour</dt>
          <dd className={styles.value}>
            {formatBuildDate()}
            <span className={styles.since}>{formatRelative(buildTimeMs())}</span>
          </dd>
        </div>
        <div className={styles.row}>
          <dt className={styles.key}>Vérification</dt>
          <dd className={styles.value}>
            {lastCheckAt === null ? 'jamais depuis cet appareil' : formatRelative(lastCheckAt)}
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
          Rechercher une mise à jour
        </button>
      </div>

      {message && (
        <div className={`${styles.message} ${styles[message.tone]}`} role="status" aria-live="polite">
          {message.tone === 'busy' && <RefreshCw size={16} strokeWidth={2.75} className={styles.spin} />}
          {message.tone === 'warn' && <CircleAlert size={16} strokeWidth={2.75} />}
          {message.tone === 'ok' && <CircleCheck size={16} strokeWidth={2.75} />}
          {message.text}
        </div>
      )}

      <div className={styles.hint}>
        L&rsquo;application cherche d&rsquo;elle-même une nouvelle version toutes les 30 minutes, à chaque retour au
        premier plan et à chaque reconnexion, puis redémarre pour l&rsquo;appliquer.
      </div>
    </div>
  )
}
