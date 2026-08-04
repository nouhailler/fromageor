import type { ReactNode } from 'react'
import styles from './StickyHeader.module.css'

/** Sticky top header used by the four tab screens (Home, Carte, Recherche,
 *  Favoris) — each screen supplies its own title markup as children. */
export function StickyHeader({ children }: { children: ReactNode }) {
  return <div className={styles.header}>{children}</div>
}
