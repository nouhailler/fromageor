import type { ReactNode } from 'react'

const SIZES = {
  xs: { fontSize: 9, padding: '2px 6px', letterSpacing: '0.06em' },
  sm: { fontSize: 10, padding: '2px 8px', letterSpacing: '0.05em' },
  md: { fontSize: 11, padding: '3px 9px', letterSpacing: '0.06em' },
} as const

export interface LabelBadgeProps {
  children: ReactNode
  bg: string
  fg: string
  size?: keyof typeof SIZES
}

/** Small pill badge for AOP/IGP/Label Rouge/Bio and region tags — three
 *  size variants matching the handoff's fiche title (md), appellations list
 *  (sm) and home/search list rows (xs). */
export function LabelBadge({ children, bg, fg, size = 'xs' }: LabelBadgeProps) {
  const s = SIZES[size]
  return (
    <span
      style={{
        fontSize: s.fontSize,
        fontWeight: 800,
        letterSpacing: s.letterSpacing,
        background: bg,
        color: fg,
        padding: s.padding,
        borderRadius: 999,
        display: 'inline-flex',
        alignItems: 'center',
      }}
    >
      {children}
    </span>
  )
}
