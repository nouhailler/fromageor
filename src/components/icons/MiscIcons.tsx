// One-off icons ported path-for-path from the design handoff prototype's
// inline SVGs (Accords CTA / drawer menu items) — distinct from the
// accordsDefs()/encycloDefs() icon sets, which use different glyphs.
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function makeIcon(paths: string[]) {
  return function MiscIconComponent({ size = 22, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.75}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        {paths.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </svg>
    )
  }
}

/** Stemmed-glass icon for the Accords CTA (home) and drawer menu item. */
export const GobletIcon = makeIcon(['M8 2v7a4 4 0 0 0 8 0V2', 'M12 13v9', 'M6 22h12'])

/** Lightbulb icon for the fiche's "Le saviez-vous" anecdote callout. */
export const LightbulbIcon = makeIcon([
  'M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.4 1 2.2V17h6v-1.3c0-.8.4-1.6 1-2.2A6 6 0 0 0 12 3z',
  'M9 21h6',
])

/** Crossed-shears icon for the Découpe drawer menu item. */
export const ShearsIcon = makeIcon(['M8 3v10.5a2.5 2.5 0 1 1-2-2.45', 'M8 3l11 11', 'M16 3v10.5a2.5 2.5 0 1 0 2-2.45', 'M16 3L5 14'])

/** Star badge icon for the Appellations drawer menu item. */
export const StarBadgeIcon = makeIcon(['M12 2l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4L4.2 7.7l5.4-.8z'])

/** Open-book icon for the Encyclopédie drawer menu item. */
export const OpenBookIcon = makeIcon(['M4 5c2.5-1.2 6-1.2 8 0v15c-2-1.2-5.5-1.2-8 0z', 'M20 5c-2.5-1.2-6-1.2-8 0v15c2-1.2 5.5-1.2 8 0z'])

/** Calendar icon for the Calendrier drawer menu item. */
export function CalendarIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.75}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x={3} y={4.5} width={18} height={16} rx={3} />
      <path d="M3 9h18M8 2.5v4M16 2.5v4" />
    </svg>
  )
}
