import type { ReactNode } from 'react'
import { ChevronLeft } from 'lucide-react'
import styles from './OverlayHeader.module.css'

/** Back-button + title/subtitle header shared by the secondary overlays
 *  (Accords, Découpe, Calendrier, Appellations, Encyclopédie). `extra`
 *  renders below the title row (Appellations' filter chips). */
export function OverlayHeader({
  onBack,
  backLabel = 'Retour',
  children,
  extra,
}: {
  onBack: () => void
  backLabel?: string
  children: ReactNode
  extra?: ReactNode
}) {
  return (
    <div className={styles.header}>
      <div className={extra ? `${styles.row} ${styles.rowWithExtra}` : styles.row}>
        <button type="button" className={styles.backButton} onClick={onBack} aria-label={backLabel}>
          <ChevronLeft size={21} strokeWidth={2.75} />
        </button>
        <div className={styles.textBlock}>{children}</div>
      </div>
      {extra}
    </div>
  )
}

export function OverlayTitle({ children }: { children: ReactNode }) {
  return <h1 className={styles.title}>{children}</h1>
}

export function OverlayEyebrow({ children }: { children: ReactNode }) {
  return <div className={styles.eyebrow}>{children}</div>
}
