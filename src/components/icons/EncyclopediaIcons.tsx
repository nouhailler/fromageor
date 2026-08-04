// Icon set for the Encyclopédie screen, ported path-for-path from
// encycloDefs() in the design handoff prototype.
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function makeIcon(paths: string[]) {
  return function EncyclopediaIconComponent({ size = 22, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.4}
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

export const BookIcon = makeIcon(['M3 5c2-1 6-1 9 0v15c-3-1-7-1-9 0z', 'M12 5c3-1 7-1 9 0v15c-2-1-6-1-9 0'])
export const DropIcon = makeIcon(['M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z'])
export const HourglassIcon = makeIcon(['M6 3h12v3l-4 6 4 6v3H6v-3l4-6-4-6z'])
export const ArchIcon = makeIcon(['M3 20h18', 'M5 20V11a7 7 0 0 1 14 0v9'])
export const LeafIcon = makeIcon(['M12 21c0-7 0-9-4-12', 'M12 21c0-7 0-9 4-12', 'M12 21V9'])

export function DotsIcon({ size = 22, ...props }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <circle cx={8} cy={10} r={3} />
      <circle cx={16} cy={9} r={2.4} />
      <circle cx={12} cy={16} r={2} />
    </svg>
  )
}
