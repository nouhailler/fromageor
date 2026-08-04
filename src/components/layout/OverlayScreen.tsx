import type { ReactNode } from 'react'
import styles from './OverlayScreen.module.css'

/** Full-screen overlay (z-18) shared by Accords, Découpe, Calendrier,
 *  Appellations and Encyclopédie — a fiche opened from within one of these
 *  stacks on top (z-20) and closing it reveals this overlay again. */
export function OverlayScreen({ children }: { children: ReactNode }) {
  return (
    <div className={`mainscroll ${styles.screen}`}>{children}</div>
  )
}
