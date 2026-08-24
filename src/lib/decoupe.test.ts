import { describe, expect, it } from 'vitest'
import { decoupeDefs, decoupeGroups, decoupeMatchFor, decoupeMethodIdFor, poidsKg } from './decoupe'
import { DECOUPE_GUIDE } from './decoupe-guide'
import { ALL_CHEESES } from '../data/dataset'

function cheese(id: string) {
  const c = ALL_CHEESES.find((x) => x.id === id)
  if (!c) throw new Error(`fixture cheese "${id}" not found`)
  return c
}

function idOf(cheeseId: string) {
  return decoupeMethodIdFor(cheese(cheeseId))
}

describe('poidsKg', () => {
  it('reads the smallest weight of a range, in kilograms', () => {
    expect(poidsKg('450–550 g')).toBeCloseTo(0.45)
    expect(poidsKg('20–70 kg')).toBe(20)
    expect(poidsKg('≈ 4,5 kg')).toBe(4.5)
  })

  it('keeps the unit that follows the first number, not the last one', () => {
    expect(poidsKg('800 g–1,2 kg')).toBeCloseTo(0.8)
    expect(poidsKg('300 g (format à la noix), 1,8 kg pour le format d’origine')).toBeCloseTo(0.3)
    expect(poidsKg('2 à 3 kg en petit format, 4 à 7 kg en grand format')).toBe(2)
  })

  it('returns undefined when no weight is stated', () => {
    expect(poidsKg(undefined)).toBeUndefined()
    expect(poidsKg('Non précisé')).toBeUndefined()
    expect(poidsKg('Au bol')).toBeUndefined()
  })
})

describe('decoupeMethodIdFor', () => {
  it('sends the big pressed wheels to the "pointe" method', () => {
    expect(idOf('comte')).toBe('meules')
    expect(idOf('beaufort')).toBe('meules')
    expect(idOf('cantal')).toBe('meules')
    expect(idOf('saint-nectaire')).toBe('meules')
  })

  it('sends the small rounds to the cake-slice method, whatever the paste', () => {
    expect(idOf('camembert-normandie')).toBe('ronds')
    expect(idOf('reblochon')).toBe('ronds')
    expect(idOf('munster')).toBe('ronds')
    expect(idOf('rocamadour')).toBe('ronds')
  })

  // Le seuil sépare deux fiches très proches : la tomme d'Annot (0,6 kg) se
  // coupe comme un petit rond, la tomme de Savoie (1,5 kg) s'achète à la
  // coupe. C'est le poids qui tranche, pas le mot « meule » de la forme.
  it('splits wheels by weight rather than by the word "meule"', () => {
    expect(idOf('tomme-annot')).toBe('ronds')
    expect(idOf('tomme-savoie')).toBe('meules')
  })

  it('recognizes the blues by their family, not their shape', () => {
    expect(idOf('roquefort')).toBe('persillees')
    expect(idOf('fourme-ambert')).toBe('persillees')
    expect(idOf('bleu-gex')).toBe('persillees')
  })

  it('keeps the large soft wheels apart from the pressed ones', () => {
    expect(idOf('brie-meaux')).toBe('brie')
    expect(idOf('brie-melun')).toBe('brie')
  })

  it('groups logs, pyramids and truncated cones', () => {
    expect(idOf('sainte-maure-touraine')).toBe('buches')
    expect(idOf('valencay')).toBe('buches')
    expect(idOf('pouligny-saint-pierre')).toBe('buches')
    expect(idOf('selles-sur-cher')).toBe('buches')
  })

  it('groups squares, hearts and bricks', () => {
    expect(idOf('maroilles')).toBe('coeurs')
    expect(idOf('pont-leveque')).toBe('coeurs')
    expect(idOf('neufchatel')).toBe('coeurs')
  })

  // Le texte « Comment le servir » est écrit à la main depuis une source :
  // quand il dit la cuillère, il l'emporte sur la forme. L'époisses est un
  // « Disque », mais personne ne le coupe en parts.
  it('lets a spooned cheese override its shape', () => {
    expect(cheese('epoisses').service).toContain('À la cuillère')
    expect(idOf('epoisses')).toBe('coeurs')
    expect(idOf('mont-dor')).toBe('coeurs')
    expect(idOf('saint-felicien')).toBe('coeurs')
  })

  // Une méthode inventée serait pire que pas de méthode du tout : ces fiches
  // se mangent à la cuillère, se tartinent ou sortent d'un pot, et la fiche
  // n'affiche alors aucun bloc Découpe. La liste est figée pour qu'elle ne
  // s'allonge pas en silence.
  it('leaves the cheeses that are never cut without a method, and no others', () => {
    const sansMethode = ALL_CHEESES.filter((c) => !decoupeMethodIdFor(c)).map((c) => c.id)
    expect(sansMethode.sort()).toEqual([
      'bibeleskaes',
      'bosson-macere',
      'brocciu',
      'brous',
      'brousse-rove',
      'cachaille',
      'cachat',
      'caillebotte',
      'cancoillotte',
      'cervelle-canut',
      'coussignous',
      'fontainebleau',
      'fort-bethune',
      'frais-maquis',
      'halbran',
      'jonchee',
      'kiri',
      'petit-suisse',
      'serac',
      'tome-aubrac',
    ])
  })

  it('only ever returns one of the six methods of the Découpe screen', () => {
    const connus = new Set(decoupeDefs().map((m) => m.id))
    const inconnus = ALL_CHEESES.map((c) => decoupeMethodIdFor(c)).filter((id) => id && !connus.has(id))
    expect(inconnus).toEqual([])
  })
})

describe('decoupeMatchFor', () => {
  it('returns the method itself, diagram included', () => {
    const m = decoupeMatchFor(cheese('comte'))
    expect(m?.method.id).toBe('meules')
    expect(m?.method.Diagram).toBeTypeOf('function')
  })

  // La fiche annonce d'où vient la méthode : elle doit nommer le bon champ.
  it('names the field that decided', () => {
    expect(decoupeMatchFor(cheese('comte'))?.basis).toBe('forme')
    expect(decoupeMatchFor(cheese('roquefort'))?.basis).toBe('famille')
    expect(decoupeMatchFor(cheese('epoisses'))?.basis).toBe('service')
  })

  it('returns undefined for a cheese that is not cut', () => {
    expect(decoupeMatchFor(cheese('cancoillotte'))).toBeUndefined()
  })
})

describe('decoupeGroups', () => {
  const groups = decoupeGroups(ALL_CHEESES)

  it('keeps the order and the identity of the six methods', () => {
    expect(groups.map((g) => g.method.id)).toEqual(decoupeDefs().map((m) => m.id))
  })

  it('ranges every cheese that has a method, and only those', () => {
    const ranges = groups.flatMap((g) => g.items.map((c) => c.id)).sort()
    const attendus = ALL_CHEESES.filter((c) => decoupeMethodIdFor(c)).map((c) => c.id).sort()
    expect(ranges).toEqual(attendus)
    expect(new Set(ranges).size).toBe(ranges.length)
  })

  // C'est tout l'intérêt du calcul : les noms affichés sous une méthode sont
  // ceux dont la fiche annonce cette méthode. Le handoff en citait trois qui
  // disaient le contraire (saint-marcellin, saint-félicien, brillat-savarin).
  it('never shows a cheese under a method its own fiche contradicts', () => {
    for (const g of groups) {
      for (const c of g.examples) {
        expect([c.nom, decoupeMethodIdFor(c)]).toEqual([c.nom, g.method.id])
        expect(g.items).toContain(c)
      }
    }
  })

  it('shows the best-known first — AOP, then alphabetical — and at most three', () => {
    const meules = groups.find((g) => g.method.id === 'meules')!
    expect(meules.examples.map((c) => c.nom)).toEqual(['Abondance', 'Beaufort', 'Cantal'])
    expect(meules.examples.every((c) => c.aop)).toBe(true)
    for (const g of groups) expect(g.examples.length).toBeLessThanOrEqual(3)
  })

  it('sorts the full lists alphabetically', () => {
    const noms = groups.find((g) => g.method.id === 'brie')!.items.map((c) => c.nom)
    expect(noms).toEqual([...noms].sort((a, b) => a.localeCompare(b, 'fr')))
  })

  it('honours maxExamples', () => {
    expect(decoupeGroups(ALL_CHEESES, 1).every((g) => g.examples.length === 1)).toBe(true)
  })
})

// Le guide est du texte écrit à la main : le test ne juge pas le fond, il
// vérifie qu'aucune méthode n'ouvre un écran à trous.
describe('DECOUPE_GUIDE', () => {
  it('couvre les six méthodes, et seulement elles', () => {
    expect(Object.keys(DECOUPE_GUIDE).sort()).toEqual(decoupeDefs().map((m) => m.id).sort())
  })

  it('donne à chacune quatre étapes numérotables et distinctes', () => {
    for (const [id, guide] of Object.entries(DECOUPE_GUIDE)) {
      expect([id, guide.etapes.length]).toEqual([id, 4])
      const titres = guide.etapes.map((e) => e.titre)
      expect([id, new Set(titres).size]).toEqual([id, 4])
    }
  })

  it('ne laisse aucun texte vide', () => {
    for (const [id, guide] of Object.entries(DECOUPE_GUIDE)) {
      const textes = [
        guide.principe,
        guide.pourquoi,
        guide.particularite.titre,
        guide.particularite.texte,
        ...guide.etapes.flatMap((e) => [e.titre, e.texte]),
        ...guide.eviter,
      ]
      expect([id, textes.filter((t) => !t.trim()).length]).toEqual([id, 0])
      expect([id, guide.eviter.length > 0]).toEqual([id, true])
    }
  })
})
