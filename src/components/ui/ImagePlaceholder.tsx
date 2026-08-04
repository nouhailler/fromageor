import type { CSSProperties } from 'react'
import { Image as ImageIcon } from 'lucide-react'
import styles from './ImagePlaceholder.module.css'

export interface ImagePlaceholderProps {
  /** Stable id per cheese/gallery slot: `ph-<cheeseId>-<index>`. */
  id: string
  label: string
  src?: string
  className?: string
  style?: CSSProperties
}

/** Replaces the handoff's `<image-slot>` placeholder. Renders a real `<img>`
 *  once a photo is available at `src`; otherwise a labeled placeholder that
 *  keeps the same id so photos can be wired in later without touching the
 *  gallery data or markup. */
export function ImagePlaceholder({ id, label, src, className, style }: ImagePlaceholderProps) {
  if (src) {
    return <img id={id} src={src} alt={label} className={className ? `${styles.image} ${className}` : styles.image} style={style} />
  }
  return (
    <div id={id} role="img" aria-label={label} className={className ? `${styles.placeholder} ${className}` : styles.placeholder} style={style}>
      <ImageIcon size={28} strokeWidth={2} />
      <span className={styles.label}>{label}</span>
    </div>
  )
}
