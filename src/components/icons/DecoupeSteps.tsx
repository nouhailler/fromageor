// Le geste en quatre schémas, pour chacune des six méthodes de découpe :
// la forme, la lame en position, le premier coup, les parts obtenues.
//
// Même vocabulaire graphique que DecoupeDiagrams (viewBox 64, pâte claire,
// traits d'accent, coupes en pointillés) avec deux ajouts : la lame, en gris
// neutre pour qu'on ne la confonde pas avec une coupe, et la part servie,
// remplie de la teinte secondaire.
import type { ReactNode } from 'react'
import type { DecoupeMethodId } from '../../lib/decoupe'

const ACC = 'var(--color-accent-700)'
const FILL = 'var(--color-accent-100)'
const CUT = 'var(--color-accent-700)'
const VEIN = 'var(--color-accent-2-700)'
const KNIFE = 'var(--color-neutral-800)'
const PART = 'var(--color-accent-2-200)'

const DASH = {
  stroke: CUT,
  strokeWidth: 1.5,
  strokeDasharray: '3 2.5',
  strokeLinecap: 'round' as const,
}

const DONE = { stroke: CUT, strokeWidth: 1.8, strokeLinecap: 'round' as const }

const SHAPE = { fill: FILL, stroke: ACC, strokeWidth: 2 }

const PART_FILL = { fill: PART, stroke: VEIN, strokeWidth: 1.5, strokeLinejoin: 'round' as const }

/** La lame : un trait épais terminé par le manche, posée là où passera le
 *  premier coup. */
function Knife({ x1, y1, x2, y2 }: { x1: number; y1: number; x2: number; y2: number }) {
  return (
    <>
      <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={KNIFE} strokeWidth={2.4} strokeLinecap="round" />
      <circle cx={x1} cy={y1} r={3} fill={KNIFE} />
    </>
  )
}

function Spokes({ n, cx, cy, r }: { n: number; cx: number; cy: number; r: number }) {
  return (
    <>
      {Array.from({ length: n }, (_, i) => {
        const a = (Math.PI * 2 * i) / n - Math.PI / 2
        return <line key={i} x1={cx} y1={cy} x2={cx + r * Math.cos(a)} y2={cy + r * Math.sin(a)} {...DASH} />
      })}
    </>
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

const ROND = <circle cx={32} cy={32} r={25} {...SHAPE} />

const MEULE = (
  <path d="M32 7 L55 53 A25 25 0 0 1 9 53 Z" {...SHAPE} strokeLinejoin="round" />
)

const BLEU = (
  <>
    <circle cx={32} cy={32} r={25} {...SHAPE} />
    {VEIN_DOTS.map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={1.8} fill={VEIN} />
    ))}
  </>
)

const BRIE = (
  <>
    <path d="M10 54 L54 54 A44 44 0 0 0 10 10 Z" {...SHAPE} strokeLinejoin="round" />
    <circle cx={11} cy={53} r={2.4} fill={ACC} />
  </>
)

const BUCHE = <rect x={8} y={22} width={48} height={20} rx={10} {...SHAPE} />

const CROUTE = <circle cx={32} cy={34} r={22} {...SHAPE} />

/** Les quatre temps de chaque méthode. L'ordre est celui des `etapes` du
 *  guide : la forme, la lame, le premier coup, les parts. */
const STEPS: Record<DecoupeMethodId, ReactNode[]> = {
  ronds: [
    ROND,
    <>
      {ROND}
      <Knife x1={32} y1={3} x2={32} y2={28} />
    </>,
    <>
      {ROND}
      <line x1={32} y1={32} x2={32} y2={7} {...DONE} />
    </>,
    <>
      {ROND}
      <path d="M32 32 L32 7 A25 25 0 0 1 53.7 19.5 Z" {...PART_FILL} />
      <Spokes n={6} cx={32} cy={32} r={25} />
    </>,
  ],

  meules: [
    MEULE,
    <>
      {MEULE}
      <Knife x1={61} y1={44} x2={38} y2={44} />
    </>,
    <>
      {MEULE}
      <line x1={13.5} y1={44} x2={50.5} y2={44} {...DONE} />
    </>,
    <>
      {MEULE}
      <path d="M32 7 L50.5 44 L13.5 44 Z" {...PART_FILL} />
      <line x1={13.5} y1={44} x2={50.5} y2={44} {...DONE} />
      <line x1={27} y1={44} x2={24} y2={53} {...DASH} />
      <line x1={37} y1={44} x2={40} y2={53} {...DASH} />
    </>,
  ],

  persillees: [
    BLEU,
    <>
      {BLEU}
      {/* Le fil de la lyre, tendu entre ses deux montants. */}
      <line x1={5} y1={5} x2={59} y2={5} stroke={KNIFE} strokeWidth={1.6} strokeLinecap="round" />
      <circle cx={5} cy={5} r={2.6} fill={KNIFE} />
      <circle cx={59} cy={5} r={2.6} fill={KNIFE} />
    </>,
    <>
      {BLEU}
      <line x1={32} y1={32} x2={32} y2={7} {...DONE} />
    </>,
    <>
      {BLEU}
      <path d="M32 32 L32 7 A25 25 0 0 1 49.7 14.3 Z" {...PART_FILL} />
      <Spokes n={8} cx={32} cy={32} r={25} />
    </>,
  ],

  // Le nez du brie est le coin bas-gauche, marqué d'un point : les biseaux
  // partent du grand côté et rejoignent la croûte sans jamais l'atteindre.
  brie: [
    BRIE,
    <>
      {BRIE}
      <Knife x1={19} y1={60} x2={28} y2={42} />
    </>,
    <>
      {BRIE}
      <line x1={22} y1={54} x2={36.9} y2={19.2} {...DONE} />
    </>,
    <>
      {BRIE}
      <path d="M22 54 L38 54 L47.7 31.3 A44 44 0 0 0 36.9 19.2 Z" {...PART_FILL} />
      <line x1={22} y1={54} x2={36.9} y2={19.2} {...DASH} />
      <line x1={38} y1={54} x2={47.7} y2={31.3} {...DASH} />
    </>,
  ],

  buches: [
    BUCHE,
    <>
      {BUCHE}
      <Knife x1={20} y1={6} x2={20} y2={19} />
    </>,
    <>
      {BUCHE}
      <line x1={20} y1={20} x2={20} y2={44} {...DONE} />
    </>,
    <>
      {BUCHE}
      <rect x={20} y={22} width={8} height={20} {...PART_FILL} />
      {[20, 28, 36, 44].map((x) => (
        <line key={x} x1={x} y1={20} x2={x} y2={44} {...DASH} />
      ))}
    </>,
  ],

  coeurs: [
    CROUTE,
    <>
      {CROUTE}
      <Knife x1={32} y1={4} x2={32} y2={15} />
    </>,
    <>
      {CROUTE}
      <circle cx={32} cy={34} r={16} fill="none" {...DASH} />
    </>,
    <>
      {CROUTE}
      <circle cx={32} cy={34} r={16} {...PART_FILL} />
      {/* La cuillère, comme sur la carte de la méthode. */}
      <path
        d="M32 12 C26 12 26 22 32 24 C38 22 38 12 32 12 Z M32 24 L32 44"
        stroke={ACC}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </>,
  ],
}

export function DecoupeStepDiagram({
  method,
  step,
  size = 64,
}: {
  method: DecoupeMethodId
  step: number
  size?: number
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      {STEPS[method][step]}
    </svg>
  )
}
