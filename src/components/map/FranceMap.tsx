import type { CSSProperties } from 'react'
import { FRANCE_OUTLINE_PATH } from './franceOutline'

export interface FranceMapDot {
  id: string
  x: number
  y: number
  fill: string
  onClick?: () => void
  label?: string
}

export interface FranceMapProps {
  dots?: FranceMapDot[]
  dotRadius?: number
  dotStrokeWidth?: number
  outlineStrokeWidth?: number
  /** A single accent marker with a pulse ring — used by the fiche's
   *  Localisation card to point at one cheese. */
  highlight?: { x: number; y: number }
  className?: string
  style?: CSSProperties
}

/** Shared France silhouette + dots, used by the home map preview, the
 *  Carte screen, and the fiche's Localisation mini-map. */
export function FranceMap({
  dots,
  dotRadius = 2,
  dotStrokeWidth = 0.5,
  outlineStrokeWidth = 0.8,
  highlight,
  className,
  style,
}: FranceMapProps) {
  return (
    <svg viewBox="0 0 100 100" className={className} style={style}>
      <path
        d={FRANCE_OUTLINE_PATH}
        fill="var(--color-neutral-200)"
        stroke="var(--color-neutral-400)"
        strokeWidth={outlineStrokeWidth}
      />
      {dots?.map((d) => (
        <circle
          key={d.id}
          cx={d.x}
          cy={d.y}
          r={dotRadius}
          fill={d.fill}
          stroke="#fff"
          strokeWidth={dotStrokeWidth}
          style={d.onClick ? { cursor: 'pointer' } : undefined}
          onClick={d.onClick}
          role={d.onClick ? 'button' : undefined}
          aria-label={d.onClick ? d.label : undefined}
        />
      ))}
      {highlight && (
        <>
          <circle cx={highlight.x} cy={highlight.y} r={4} fill="var(--color-accent)" stroke="#fff" strokeWidth={1} />
          <circle
            cx={highlight.x}
            cy={highlight.y}
            r={8}
            fill="none"
            stroke="var(--color-accent)"
            strokeWidth={1}
            opacity={0.4}
          />
        </>
      )}
    </svg>
  )
}
