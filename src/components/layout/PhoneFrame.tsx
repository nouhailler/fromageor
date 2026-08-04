import type { ReactNode } from 'react'
import styles from './PhoneFrame.module.css'

/** The single 428px-wide, rounded, phone-shaped app container that
 *  everything else renders inside of (see README "Écrans / Vues"). */
export function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className={styles.background}>
      <div className={styles.frame}>{children}</div>
    </div>
  )
}
