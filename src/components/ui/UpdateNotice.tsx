import { useEffect, useState } from 'react'
import { RefreshCw } from 'lucide-react'
import { isUpdatePending, subscribeToUpdateNotice } from '../../pwa'
import styles from './UpdateNotice.module.css'

/** Bandeau affiché le temps que la page se recharge, quand une nouvelle
 *  version du site a pris la main. Le rechargement lui-même est piloté par
 *  src/pwa.ts : ce composant ne fait que l'annoncer. */
export function UpdateNotice() {
  const [pending, setPending] = useState(isUpdatePending)

  useEffect(() => subscribeToUpdateNotice(() => setPending(true)), [])

  if (!pending) return null

  return (
    <div className={styles.notice} role="status" aria-live="polite">
      <span className={styles.icon}>
        <RefreshCw size={17} strokeWidth={2.75} className={styles.spin} />
      </span>
      <span className={styles.text}>
        <span className={styles.title}>Nouvelle version installée</span>
        <span className={styles.subtitle}>L&rsquo;application redémarre…</span>
      </span>
    </div>
  )
}
