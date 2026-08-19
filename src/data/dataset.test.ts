import { describe, expect, it } from 'vitest'
import { ALL_CHEESES } from './dataset'
import { CHEESES } from './cheeses'
import { EXTRA_CHEESES, EXTRA_REGION_OVERRIDES } from './cheeses-extra'
import { BFC_CHEESES } from './cheeses-bourgogne-franche-comte'
import { BRETAGNE_CHEESES } from './cheeses-bretagne'
import { CVL_CHEESES } from './cheeses-centre-val-de-loire'
import { NORMANDIE_CHEESES } from './cheeses-normandie'
import { HDF_CHEESES } from './cheeses-hauts-de-france'
import { CORSE_CHEESES } from './cheeses-corse'
import { REGIONS } from './regions'
import { searchCheeses } from '../lib/search'

/** Comparaison « à la française » : insensible à la casse, aux accents et à la
 *  ponctuation, pour que « Tome des Bauges » et « tome-des-bauges » collent. */
function norm(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim()
}

const AJOUTS = [
  ...EXTRA_CHEESES,
  ...BFC_CHEESES,
  ...BRETAGNE_CHEESES,
  ...CVL_CHEESES,
  ...NORMANDIE_CHEESES,
  ...HDF_CHEESES,
  ...CORSE_CHEESES,
]

describe('ALL_CHEESES', () => {
  it('ne contient aucun identifiant en double', () => {
    const ids = ALL_CHEESES.map((c) => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('ne contient aucun nom en double, accents et casse ignorés', () => {
    const noms = ALL_CHEESES.map((c) => norm(c.nom))
    expect(new Set(noms).size).toBe(noms.length)
  })

  it("ne réutilise aucun nom du jeu généré comme nom alternatif d'un ajout", () => {
    const generes = new Set(CHEESES.map((c) => norm(c.nom)))
    const collisions = AJOUTS.flatMap((c) => [c.nom, ...c.alt])
      .map(norm)
      .filter((n) => generes.has(n))
    expect(collisions).toEqual([])
  })

  it('rattache chaque ajout à une région connue', () => {
    const connues = new Set(REGIONS.map((r) => r.id))
    for (const cheese of AJOUTS) {
      expect(connues.has(cheese.regionId)).toBe(true)
    }
  })

  it('place chaque ajout sur la carte, dans les bornes de la silhouette', () => {
    for (const cheese of AJOUTS) {
      const [x, y] = cheese.map
      expect(x).toBeGreaterThan(0)
      expect(x).toBeLessThan(100)
      expect(y).toBeGreaterThan(0)
      expect(y).toBeLessThan(100)
    }
  })

  // Les fromages d'Auvergne-Rhône-Alpes demandés doivent tous être atteignables
  // depuis la recherche, qu'ils viennent du jeu généré, des ajouts, ou d'un nom
  // alternatif greffé sur une entrée existante (voir EXTRA_ALT_NAMES).
  it.each([
    'Abondance',
    'Beaufort',
    "Bleu d'Auvergne",
    'Bleu de Gex Haut-Jura',
    'Bleu du Vercors-Sassenage',
    'Cantal',
    'Chevrotin',
    "Fourme d'Ambert",
    'Fourme de Montbrison',
    'Picodon',
    'Picodon de Dieulefit',
    'Reblochon',
    'Rigotte de Condrieu',
    'Saint-Nectaire',
    'Tome des Bauges',
    'Emmental de Savoie',
    'Emmental français est-central',
    'Tomme de Savoie',
    'Tomme de Haute-Savoie',
    'Saint-Marcellin',
    'Saint-Félicien',
    'Gaperon',
    'Bleu de Laqueuille',
    "Carré d'Aurillac",
    'Ramequin',
    'Cervelle de canut',
    'Tomme du Bourbonnais',
  ])('trouve « %s » dans la base (Auvergne-Rhône-Alpes)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it.each([
    'Comté',
    'Époisses',
    "Mont d'Or",
    'Vacherin du Haut-Doubs',
    'Morbier',
    'Bleu de Gex Haut-Jura',
    'Chaource',
    'Charolais',
    'Mâconnais',
    'Langres',
    'Cancoillotte',
    'Soumaintrain',
    'Brillat-Savarin',
    'Saint-Florentin',
    'Aisy cendré',
    'Trou du Cru',
    'Affidélice',
    'Ami du Chambertin',
    'Raclette de Savoie',
    'P’tit Gaugry',
    'Bouton de Culotte',
    'Pierre-Qui-Vire',
  ])('trouve « %s » dans la base (Bourgogne-Franche-Comté)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it.each([
    'Tome des Rhuys',
    'Curé Nantais',
    'Abbaye de La Joie-Notre-Dame',
    'Abbaye de Timadeuc',
    'Tomme de Bretagne',
    'Menez-Hom',
    'Ti Pavez',
    'Petit Prince d’Armorique',
    'Tome du Pays de Rohan',
    'Chèvre du Trieux',
    'Brebis d’Arrée',
    'P’tit Bleu de Bretagne',
  ])('trouve « %s » dans la base (Bretagne)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it.each([
    'Selles-sur-Cher',
    'Sainte-Maure de Touraine',
    'Valençay',
    'Pouligny-Saint-Pierre',
    'Crottin de Chavignol',
    'Olivet cendré',
    'Olivet au foin',
    'Couronne lochoise',
    'Bûchette de Sainte-Maure',
    'Trèfle du Perche',
    'Frinault',
    'Cendré de la Tour',
    'Pithiviers au foin',
  ])('trouve « %s » dans la base (Centre-Val de Loire)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it('rattache les fromages ligériens à leur région, dont les cinq AOP caprines', () => {
    expect(CVL_CHEESES).toHaveLength(13)
    for (const cheese of CVL_CHEESES) {
      expect(cheese.regionId).toBe('centre-val-de-loire')
    }
    const aop = CVL_CHEESES.filter((c) => c.aop)
    expect(aop.map((c) => c.nom).sort()).toEqual([
      'Crottin de Chavignol',
      'Pouligny-Saint-Pierre',
      'Sainte-Maure de Touraine',
      'Selles-sur-Cher',
      'Valençay',
    ])
    // Les cinq AOP ligériennes sont toutes des fromages de chèvre.
    for (const cheese of aop) expect(cheese.lait).toBe('Chèvre')
  })

  it.each([
    'Camembert de Normandie',
    'Livarot',
    'Pont-l’Évêque',
    'Neufchâtel',
    'Pavé d’Auge',
    'Petit-Suisse',
    'Trappe de Bricquebec',
    'Fromage de Monsieur',
    'La Bouille',
    'Carré de Bray',
    'Brique du Cotentin',
    'Excelsior',
    'Coutances',
  ])('trouve « %s » dans la base (Normandie)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it('rattache les fromages normands à leur région, dont les quatre AOP', () => {
    expect(NORMANDIE_CHEESES).toHaveLength(13)
    for (const cheese of NORMANDIE_CHEESES) {
      expect(cheese.regionId).toBe('normandie')
    }
    const aop = NORMANDIE_CHEESES.filter((c) => c.aop)
    expect(aop.map((c) => c.nom).sort()).toEqual([
      'Camembert de Normandie',
      'Livarot',
      'Neufchâtel',
      'Pont-l’Évêque',
    ])
    // Les quatre AOP normandes sont toutes des pâtes molles au lait de vache.
    for (const cheese of aop) {
      expect(cheese.lait).toBe('Vache')
      expect(cheese.famille).toMatch(/^Pâte molle/)
    }
  })

  it.each([
    'Maroilles',
    'Mimolette',
    'Boule de Lille',
    'Vieux-Lille',
    'Rollot',
    'Boulette d’Avesnes',
    'Dauphin',
    'Bergues',
    'Mont des Cats',
    'Sire de Créquy',
    'Baguette de Thiérache',
    'Vieux Boulogne',
    'Crayeux de Roncq',
    'Cœur d’Arras',
    'Fleur d’Audresselles',
    'Sablé de Wissant',
    'Tome des Trois Monts',
    'Fort de Béthune',
    'Manicamp',
    'Tricorne de Picardie',
    'Mimolette extra-vieille',
    'Gris de Lille',
  ])('trouve « %s » dans la base (Hauts-de-France)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it('rattache les fromages du Nord à leur région, le Maroilles étant la seule AOP', () => {
    expect(HDF_CHEESES).toHaveLength(18)
    for (const cheese of HDF_CHEESES) {
      expect(cheese.regionId).toBe('hauts-de-france')
    }
    expect(HDF_CHEESES.filter((c) => c.aop).map((c) => c.nom)).toEqual(['Maroilles'])
  })

  it.each([
    'Brocciu',
    'Brocciu Passu',
    'Niolo',
    'Bastelicacciu',
    'Calinzana',
    'Sartinesi',
    'Venaco',
    'Brin d’Amour',
    'Fleur du Maquis',
    'Tomme corse',
    'Au lait de maquis',
    'Casgiu Merzu',
  ])('trouve « %s » dans la base (Corse)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it('rattache les fromages corses à leur région, le Brocciu étant la seule AOP', () => {
    expect(CORSE_CHEESES).toHaveLength(10)
    for (const cheese of CORSE_CHEESES) {
      expect(cheese.regionId).toBe('corse')
      // L'île est un terroir ovin : aucune de ces fiches n'est au lait de vache.
      expect(cheese.lait).toBe('Brebis')
    }
    expect(CORSE_CHEESES.filter((c) => c.aop).map((c) => c.nom)).toEqual(['Brocciu'])
  })

  it('applique les rattachements régionaux corrigés aux entrées générées', () => {
    const connues = new Set(REGIONS.map((r) => r.id))
    for (const [id, override] of Object.entries(EXTRA_REGION_OVERRIDES)) {
      const cheese = ALL_CHEESES.find((c) => c.id === id)
      expect(cheese, `fromage ${id} introuvable`).toBeDefined()
      expect(connues.has(override.regionId)).toBe(true)
      expect(cheese?.regionId).toBe(override.regionId)
      if (override.dept) expect(cheese?.dept).toBe(override.dept)
      // Une entrée corrigée ne doit plus se dire « limitrophe » de sa région.
      expect(cheese?.dept).not.toMatch(/limitrophe/i)
    }
  })

  it('rattache les 12 fromages bretons à leur région, aucun sous AOP', () => {
    expect(BRETAGNE_CHEESES).toHaveLength(12)
    for (const cheese of BRETAGNE_CHEESES) {
      expect(cheese.regionId).toBe('bretagne')
      // La Bretagne ne compte aucun fromage AOP.
      expect(cheese.aop).toBe(false)
    }
  })

  it('rattache les 15 fromages bourguignons et comtois à leur région', () => {
    expect(BFC_CHEESES).toHaveLength(15)
    for (const cheese of BFC_CHEESES) {
      expect(cheese.regionId).toBe('bourgogne-franche-comte')
    }
  })
})
