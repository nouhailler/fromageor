// Ported from decoupeDefs() in the design handoff prototype. The six methods
// and their wording are the prototype's; the cheeses shown under each one are
// not — the handoff listed three names per method by hand, and three of them
// contradicted the fiches. They are computed from the base now, see
// decoupeGroups().
import type { ComponentType } from 'react'
import type { Cheese } from '../data/cheese.types'
import {
  RoundDiagram,
  MeuleDiagram,
  BlueDiagram,
  BrieDiagram,
  BucheDiagram,
  HeartDiagram,
} from '../components/icons/DecoupeDiagrams'

export type DecoupeMethodId = 'ronds' | 'meules' | 'persillees' | 'brie' | 'buches' | 'coeurs'

export interface DecoupeMethod {
  id: DecoupeMethodId
  shape: string
  rule: string
  Diagram: ComponentType
}

export function decoupeDefs(): DecoupeMethod[] {
  return [
    {
      id: 'ronds',
      shape: 'Camembert & petits ronds fleuris',
      rule: 'En parts triangulaires égales depuis le centre, comme un gâteau : chacun reçoit autant de cœur crémeux que de croûte.',
      Diagram: RoundDiagram,
    },
    {
      id: 'meules',
      shape: 'Comté & grandes meules (la pointe)',
      rule: 'On ne mange jamais que la pointe : coupez la part dans la longueur, puis divisez le talon (côté croûte) en petits bâtonnets pour partager cœur et croûte.',
      Diagram: MeuleDiagram,
    },
    {
      id: 'persillees',
      shape: 'Roquefort & pâtes persillées',
      rule: 'En rayons fins depuis le cœur vers la croûte, au fil (guillotine), pour répartir équitablement le persillé plus concentré au centre.',
      Diagram: BlueDiagram,
    },
    {
      id: 'brie',
      shape: 'Brie & grandes pointes molles',
      rule: 'Jamais « le nez » (la pointe fine) ! Tranchez en biseau le long des rayons pour que chaque part garde une portion de croûte extérieure.',
      Diagram: BrieDiagram,
    },
    {
      id: 'buches',
      shape: 'Bûches & pyramides de chèvre',
      rule: 'Les bûches se coupent en rondelles régulières ; les pyramides et troncs, en tranches depuis la pointe. Un fil ou un couteau fin évite d’écraser la pâte.',
      Diagram: BucheDiagram,
    },
    {
      id: 'coeurs',
      shape: 'Cœurs coulants & carrés',
      rule: 'Les petits fromages crémeux se servent à la cuillère, croûte ouverte en calotte. Les carrés et pavés se tranchent en bandes parallèles ou en croix.',
      Diagram: HeartDiagram,
    },
  ]
}

// ---------------------------------------------------------------------------
// Matching a cheese to one of the six methods.
//
// The dataset has no "cutting method" field and never will: `forme` is free
// text written per fiche ("Disque", "Meule à talon convexe", "Palet plié dans
// six à douze feuilles"...). So the method is *deduced* from the fields that
// describe the object — shape, family, weight — and the fiche says so rather
// than passing the deduction off as a fact, like the Label Rouge / Bio badges.

/** Families that are spooned, spread or ladled out of a pot: fresh cheeses,
 *  whey cheeses, fromages forts, cancoillotte, caillebotte. None of the six
 *  methods is about them, and inventing one would be worse than saying
 *  nothing — these fiches simply get no cutting block. */
const UNCUT_FAMILLES = [
  'fromage frais',
  'fromage fort',
  'fromage de lactosérum',
  'caillé',
  'pâte fondue',
  'pâte fraîche',
]

/** Same idea, from the other side: a shape that names its container. */
const UNCUT_FORMES = ['pot', 'bocal', 'jarre', 'bol', 'mousseline', 'égouttoir', 'portion']

const CARRE_FORMES = [
  'carré',
  'pavé',
  'brique',
  'briquette',
  'cœur',
  'rectangulaire',
  'losange',
  'barre',
  'plaque',
  'lanière',
  'toit',
  'triangle',
  'chapeau',
]

const BUCHE_FORMES = ['bûche', 'pyramide', 'tronc', 'cône', 'bonde', 'tonnelet', 'fuseau']

/** Shapes that mean a wheel when the weight doesn't say. */
const MEULE_FORMES = ['meule', 'fourme', 'roue', 'tomme cylindrique']

/** Above this, a wheel is bought as a wedge and served "à la pointe"; below,
 *  it is a small round cut like a cake. 1,5 kg puts the reblochon (450 g) and
 *  the tomme d'Annot (600 g) on one side, the saint-nectaire (1,7 kg) and the
 *  tomme de Savoie on the other. */
const GRANDE_MEULE_KG = 1.5

const BY_ID = new Map<DecoupeMethodId, DecoupeMethod>(decoupeDefs().map((m) => [m.id, m]))

function has(haystack: string | undefined, needles: string[]): boolean {
  if (!haystack) return false
  const s = haystack.toLowerCase()
  return needles.some((n) => s.includes(n))
}

/** Smallest weight a `poids` string mentions, in kilograms — the format is
 *  free text too ("450–550 g", "2 à 3 kg en petit format, 4 à 7 kg en grand
 *  format", "Non précisé"), so we read the first number and the first unit
 *  that follows it. */
export function poidsKg(poids: string | undefined): number | undefined {
  if (!poids) return undefined
  const num = /\d+(?:[.,]\d+)?/.exec(poids)
  if (!num) return undefined
  const unit = /\b(kg|g)\b/.exec(poids.slice(num.index + num[0].length))
  if (!unit) return undefined
  const value = Number(num[0].replace(',', '.'))
  return unit[1] === 'kg' ? value : value / 1000
}

type CheeseShape = Pick<Cheese, 'famille' | 'forme' | 'poids' | 'service'>

export interface DecoupeMatch {
  method: DecoupeMethod
  /** Le champ qui a décidé, pour que la fiche puisse le dire plutôt que
   *  d'annoncer une méthode sortie de nulle part. */
  basis: 'forme' | 'famille' | 'service'
}

/** Which of the six methods applies to a cheese, or `undefined` when none
 *  does (see UNCUT_FAMILLES) or when its shape isn't recorded. */
export function decoupeMatchFor(c: CheeseShape): DecoupeMatch | undefined {
  const forme = (c.forme || '').trim()
  if (!forme || has(forme, ['non précisé'])) return undefined
  if (has(c.famille, UNCUT_FAMILLES) || has(forme, UNCUT_FORMES)) return undefined

  const match = (id: DecoupeMethodId, basis: DecoupeMatch['basis']): DecoupeMatch => ({
    method: BY_ID.get(id)!,
    basis,
  })

  if (has(c.famille, ['persillé'])) return match('persillees', 'famille')

  // The `service` text is hand-written from a source, so when it says the
  // cheese is eaten with a spoon it outranks the shape: an époisses is a
  // "Disque" but nobody cuts it in wedges.
  if (has(c.service, ['à la cuillère', 'à la petite cuillère'])) return match('coeurs', 'service')

  if (has(forme, CARRE_FORMES)) return match('coeurs', 'forme')
  if (has(forme, BUCHE_FORMES)) return match('buches', 'forme')

  const kg = poidsKg(c.poids)
  const grand = kg !== undefined ? kg >= GRANDE_MEULE_KG : has(forme, MEULE_FORMES)
  if (grand) return match(has(c.famille, ['pâte molle']) ? 'brie' : 'meules', 'forme')

  return match('ronds', 'forme')
}

/** The method alone, when the reason for it doesn't matter. */
export function decoupeMethodIdFor(c: CheeseShape): DecoupeMethodId | undefined {
  return decoupeMatchFor(c)?.method.id
}

/** One method, with the cheeses of the active base it applies to. */
export interface DecoupeGroup<T> {
  method: DecoupeMethod
  /** Tous les fromages que cette méthode concerne, par ordre alphabétique. */
  items: T[]
  /** Ceux qu'on montre : les AOP d'abord, comme les plus connus, puis
   *  l'ordre alphabétique. Un simple sous-ensemble d'`items`. */
  examples: T[]
}

/** Ranges the base under the six methods. Cheeses that are never cut (see
 *  decoupeMatchFor) appear in no group. */
export function decoupeGroups<T extends CheeseShape & Pick<Cheese, 'nom' | 'aop'>>(
  cheeses: T[],
  maxExamples = 3,
): DecoupeGroup<T>[] {
  const byMethod = new Map<DecoupeMethodId, T[]>(decoupeDefs().map((m) => [m.id, []]))
  for (const c of cheeses) {
    const id = decoupeMatchFor(c)?.method.id
    if (id) byMethod.get(id)!.push(c)
  }
  return decoupeDefs().map((method) => {
    const items = (byMethod.get(method.id) ?? []).sort((a, b) => a.nom.localeCompare(b.nom, 'fr'))
    const examples = [...items]
      .sort((a, b) => Number(b.aop) - Number(a.aop) || a.nom.localeCompare(b.nom, 'fr'))
      .slice(0, maxExamples)
    return { method, items, examples }
  })
}
