// Icon set for the Accords screen, ported path-for-path from accordsDefs()
// in the design handoff prototype (Fromages de France.dc.html).
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function makeIcon(paths: string[]) {
  return function AccordIconComponent({ size = 21, ...props }: IconProps) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
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

export const WineIcon = makeIcon(['M8 2h8', 'M7 2c0 6 2 8 5 8s5-2 5-8', 'M12 10v8', 'M8 22h8'])
export const GlassIcon = makeIcon(['M6 2h12l-1 9a5 5 0 0 1-10 0z', 'M12 16v4', 'M8 22h8'])
export const BottleIcon = makeIcon(['M10 2h4v3l1 2v13a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2V7l1-2z', 'M9 12h6'])
export const MugIcon = makeIcon(['M5 5h11v10a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z', 'M16 7h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-2'])
export const AppleIcon = makeIcon([
  'M12 7c1-3 4-4 6-3 0 3-2 4-4 4',
  'M12 7c-2-2-5-2-7 0-2 3 0 9 3 12 1 1 3 1 4 0 3-3 5-9 3-12-1-1-2-1-3 0z',
])
export const PearIcon = makeIcon(['M12 4c1-2 3-2 4-1', 'M12 8c-3 0-5 3-5 7a5 5 0 0 0 10 0c0-2-1-4-2-5'])
export const BreadIcon = makeIcon(['M4 9a4 4 0 0 1 4-4h8a4 4 0 0 1 0 8v5a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2v-5a4 4 0 0 1-2-4z'])
export const JarIcon = makeIcon(['M7 8h10v11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z', 'M8 8V5h8v3', 'M9 3h6'])
export const HoneyIcon = makeIcon(['M12 3l7 4v6l-7 4-7-4V7z', 'M12 3v18', 'M5 7l7 4 7-4'])
