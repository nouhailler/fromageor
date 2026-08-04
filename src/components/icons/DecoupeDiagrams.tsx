// Cutting-method diagrams for the Découpe screen, ported path-for-path from
// decoupeDefs() in the design handoff prototype.
import type { SVGProps } from 'react'

const ACC = 'var(--color-accent-700)'
const FILL = 'var(--color-accent-100)'
const CUT = 'var(--color-accent-700)'
const VEIN = 'var(--color-accent-2-700)'

const DASH = {
  stroke: CUT,
  strokeWidth: 1.5,
  strokeDasharray: '3 2.5',
  strokeLinecap: 'round' as const,
}

function Spokes({ n }: { n: number }) {
  return (
    <>
      {Array.from({ length: n }, (_, i) => {
        const a = (Math.PI * 2 * i) / n - Math.PI / 2
        const x2 = 32 + 25 * Math.cos(a)
        const y2 = 32 + 25 * Math.sin(a)
        return <line key={i} x1={32} y1={32} x2={x2} y2={y2} {...DASH} />
      })}
    </>
  )
}

function Diagram({ children, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg width={68} height={68} viewBox="0 0 64 64" fill="none" {...props}>
      {children}
    </svg>
  )
}

export function RoundDiagram() {
  return (
    <Diagram>
      <circle cx={32} cy={32} r={25} fill={FILL} stroke={ACC} strokeWidth={2} />
      <Spokes n={6} />
    </Diagram>
  )
}

const VEIN_DOTS: [number, number][] = [
  [24, 26],
  [40, 24],
  [22, 40],
  [42, 42],
  [32, 20],
  [20, 32],
  [44, 34],
  [32, 44],
]

export function BlueDiagram() {
  return (
    <Diagram>
      <circle cx={32} cy={32} r={25} fill={FILL} stroke={ACC} strokeWidth={2} />
      {VEIN_DOTS.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={1.8} fill={VEIN} />
      ))}
      <Spokes n={8} />
    </Diagram>
  )
}

export function MeuleDiagram() {
  return (
    <Diagram>
      <path d="M32 7 L55 53 A25 25 0 0 1 9 53 Z" fill={FILL} stroke={ACC} strokeWidth={2} strokeLinejoin="round" />
      <line x1={12} y1={44} x2={52} y2={44} {...DASH} />
      <line x1={27} y1={44} x2={24} y2={53} {...DASH} />
      <line x1={37} y1={44} x2={40} y2={53} {...DASH} />
    </Diagram>
  )
}

export function BrieDiagram() {
  return (
    <Diagram>
      <path d="M10 54 L54 54 A44 44 0 0 0 10 10 Z" fill={FILL} stroke={ACC} strokeWidth={2} strokeLinejoin="round" />
      <circle cx={11} cy={53} r={2.4} fill={ACC} />
      <line x1={20} y1={54} x2={32} y2={30} {...DASH} />
      <line x1={34} y1={54} x2={44} y2={34} {...DASH} />
    </Diagram>
  )
}

export function BucheDiagram() {
  return (
    <Diagram>
      <rect x={8} y={22} width={48} height={20} rx={10} fill={FILL} stroke={ACC} strokeWidth={2} />
      {[20, 28, 36, 44].map((x) => (
        <line key={x} x1={x} y1={20} x2={x} y2={44} {...DASH} />
      ))}
    </Diagram>
  )
}

export function HeartDiagram() {
  return (
    <Diagram>
      <circle cx={32} cy={34} r={22} fill={FILL} stroke={ACC} strokeWidth={2} />
      <path
        d="M32 12 C26 12 26 22 32 24 C38 22 38 12 32 12 Z M32 24 L32 44"
        stroke={ACC}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </Diagram>
  )
}
