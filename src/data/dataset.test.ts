import { describe, expect, it } from 'vitest'
import { ALL_CHEESES } from './dataset'
import { CHEESES } from './cheeses'
import {
  EXTRA_CHEESES,
  EXTRA_REGION_OVERRIDES,
  EXTRA_FIELD_FIXES,
  EXTRA_EDITORIAL,
} from './cheeses-extra'
import { BFC_CHEESES } from './cheeses-bourgogne-franche-comte'
import { BRETAGNE_CHEESES } from './cheeses-bretagne'
import { CVL_CHEESES } from './cheeses-centre-val-de-loire'
import { NORMANDIE_CHEESES } from './cheeses-normandie'
import { HDF_CHEESES } from './cheeses-hauts-de-france'
import { CORSE_CHEESES } from './cheeses-corse'
import { GRAND_EST_CHEESES } from './cheeses-grand-est'
import { IDF_CHEESES } from './cheeses-ile-de-france'
import { OCCITANIE_CHEESES } from './cheeses-occitanie'
import { NA_CHEESES } from './cheeses-nouvelle-aquitaine'
import { PACA_CHEESES } from './cheeses-provence-alpes-cote-azur'
import { REGIONS } from './regions'
import { searchCheeses } from '../lib/search'
import { appellationsOf } from '../lib/appellations'

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
  ...GRAND_EST_CHEESES,
  ...IDF_CHEESES,
  ...OCCITANIE_CHEESES,
  ...NA_CHEESES,
  ...PACA_CHEESES,
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

  it.each([
    'Munster',
    'Munster-Géromé',
    'Bargkass',
    'Cœur de Massif',
    'Brouère',
    'Tomme d’Alsace',
    'Bibeleskaes',
    'Carré de l’Est',
    'Coussaie',
    'Chèvre de la Woëvre',
    'Arrigny',
    'Chaource',
    'Langres',
  ])('trouve « %s » dans la base (Grand Est)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it('rattache les fromages du Grand Est à leur région, dont trois AOP', () => {
    // 12 depuis que les deux bries sont passés en Île-de-France.
    expect(GRAND_EST_CHEESES).toHaveLength(12)
    for (const cheese of GRAND_EST_CHEESES) {
      expect(cheese.regionId).toBe('grand-est')
    }
    expect(GRAND_EST_CHEESES.filter((c) => c.aop).map((c) => c.nom).sort()).toEqual([
      'Chaource',
      'Langres',
      'Munster',
    ])
  })

  it.each([
    'Brie de Meaux',
    'Brie de Melun',
    'Fromage de Meaux',
    'Coulommiers',
    'Brie de Montereau',
    'Ville-Saint-Jacques',
    'Brie de Nangis',
    'Brie noir',
    'Fougerus',
    'Fontainebleau',
    'Chevrotin de la Houssaye',
    'Toit de Paris',
    'Chèvre d’Île-de-France',
  ])('trouve « %s » dans la base (Île-de-France)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it('rattache les fromages franciliens à leur région, dont les deux bries AOP', () => {
    expect(IDF_CHEESES).toHaveLength(11)
    for (const cheese of IDF_CHEESES) {
      expect(cheese.regionId).toBe('ile-de-france')
    }
    expect(IDF_CHEESES.filter((c) => c.aop).map((c) => c.nom).sort()).toEqual([
      'Brie de Meaux',
      'Brie de Melun',
    ])
  })

  it.each([
    'Roquefort',
    'Bleu de Roquefort',
    'Pélardon',
    'Rocamadour',
    'Cabécou de Rocamadour',
    'Tomme des Pyrénées',
    'Bethmale',
    'Moulis',
    'Pérail',
    'Pavé du Larzac',
    'Tome fraîche de l’Aubrac',
    'Tome d’Aligot',
    'Trappe de Bonneval',
    'Cathare',
    'Passe-l’An',
    'Bleu des Causses',
    'Laguiole',
  ])('trouve « %s » dans la base (Occitanie)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it('rattache les fromages occitans à leur région, dont les trois AOP écrites à la main', () => {
    expect(OCCITANIE_CHEESES).toHaveLength(12)
    for (const cheese of OCCITANIE_CHEESES) {
      expect(cheese.regionId).toBe('occitanie')
    }
    expect(OCCITANIE_CHEESES.filter((c) => c.aop).map((c) => c.nom).sort()).toEqual([
      'Pélardon',
      'Rocamadour',
      'Roquefort',
    ])
  })

  it('compte cinq AOP occitanes une fois les deux aveyronnaises rapatriées', () => {
    const aop = ALL_CHEESES.filter((c) => c.regionId === 'occitanie' && c.aop)
    expect(aop.map((c) => c.nom).sort()).toEqual([
      'Bleu des Causses',
      'Laguiole',
      'Pélardon',
      'Rocamadour',
      'Roquefort',
    ])
  })

  it.each(['tomme-pyrenees', 'perail'])('donne son IGP à %s', (id) => {
    const cheese = ALL_CHEESES.find((c) => c.id === id)
    expect(cheese).toBeDefined()
    expect(appellationsOf(cheese!)).toContain('IGP')
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

  it.each([
    'Ossau-Iraty',
    'Laruns',
    'Anneau du Vic-Bilh',
    'Pur Brebis de l’Abbaye de Belloc',
    'Amou',
    'Trappe d’Échourgnac',
    'Chabichou du Poitou',
    'Mothais sur feuille',
    'Bonde de Gâtine',
    'Taupinette',
    'Jonchée',
    'Tricorne de Marans',
    'La Feuille du Limousin',
    'Chabis',
    'Carré du Poitou',
    'Tomme de Rilhac',
    'Caillebotte',
    'Pigouille',
    'Couhé-Vérac',
  ])('trouve « %s » dans la base (Nouvelle-Aquitaine)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it('rattache les fromages néo-aquitains à leur région, dont les deux AOP', () => {
    expect(NA_CHEESES).toHaveLength(19)
    for (const cheese of NA_CHEESES) {
      expect(cheese.regionId).toBe('nouvelle-aquitaine')
    }
    expect(NA_CHEESES.filter((c) => c.aop).map((c) => c.nom).sort()).toEqual([
      'Chabichou du Poitou',
      'Mothais sur feuille',
      'Ossau-Iraty',
    ])
  })

  // L'aire de l'ossau-iraty ne mord sur les Hautes-Pyrénées que par trois
  // communes : il est néo-aquitain, pas occitan — c'était la question ouverte
  // laissée par la revue de la liste occitane.
  it('range l’ossau-iraty en Nouvelle-Aquitaine et non en Occitanie', () => {
    const cheese = ALL_CHEESES.find((c) => c.id === 'ossau-iraty')
    expect(cheese?.regionId).toBe('nouvelle-aquitaine')
    expect(cheese?.dept).toContain('64')
  })

  it.each([
    'Banon',
    'Brousse du Rove',
    'Tomme de Provence',
    'Tomme d’Annot',
    'Tomme de l’Ubaye',
    'Bleu du Queyras',
    'Bleu du Dévoluy',
    'Persillé du col Bayard',
    'Petit Bayard',
    'Aiguille d’Orcières',
    'Saint-Laurent',
    'Chèvre du Mont-Ventoux',
    'Poivre d’âne',
    'Pèbre d’aï',
    'Chèvre des Alpilles',
    'Tomme d’Arles',
    'Cachaille',
    'Cachat',
    'Fort du Ventoux',
    'Brous',
    'Coussignous',
    'Bosson macéré',
  ])('trouve « %s » dans la base (Provence-Alpes-Côte d’Azur)', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })

  it('rattache les fromages provençaux à leur région, dont les deux AOP', () => {
    expect(PACA_CHEESES).toHaveLength(19)
    for (const cheese of PACA_CHEESES) {
      expect(cheese.regionId).toBe('provence-alpes-cote-azur')
    }
    expect(PACA_CHEESES.filter((c) => c.aop).map((c) => c.nom).sort()).toEqual([
      'Banon',
      'Brousse du Rove',
    ])
  })

  // Cinq des dix-neuf fiches provençales sont des fromages forts : c'est la
  // région qui en compte le plus, et ils n'ont ni croûte ni affinage au sens
  // habituel.
  it('range les cinq fromages forts provençaux dans leur propre famille', () => {
    const forts = PACA_CHEESES.filter((c) => c.famille === 'Fromage fort fermenté')
    expect(forts.map((c) => c.nom).sort()).toEqual([
      'Bosson macéré',
      'Brous',
      'Cachaille',
      'Cachat',
      'Coussignous',
    ])
    for (const cheese of forts) {
      expect(cheese.croute).toBe('Sans croûte')
      expect(cheese.intensite).toBe(5)
    }
  })

  // La tomme du Champsaur vient du jeu généré, qui la rangeait en
  // Auvergne-Rhône-Alpes alors que le Champsaur est dans les Hautes-Alpes.
  it('range la tomme du Champsaur en Provence-Alpes-Côte d’Azur', () => {
    const cheese = ALL_CHEESES.find((c) => c.id === 'tomme-champsaur')
    expect(cheese?.regionId).toBe('provence-alpes-cote-azur')
    expect(cheese?.dept).toContain('05')
  })

  describe('EXTRA_FIELD_FIXES', () => {
    it('ne vise que des fromages du jeu généré', () => {
      const generes = new Set(CHEESES.map((c) => c.id))
      expect(Object.keys(EXTRA_FIELD_FIXES).filter((id) => !generes.has(id))).toEqual([])
    })

    it('applique bien chaque correction au jeu final', () => {
      for (const [id, fixes] of Object.entries(EXTRA_FIELD_FIXES)) {
        const cheese = ALL_CHEESES.find((c) => c.id === id)
        expect(cheese, `fromage ${id} introuvable`).toBeDefined()
        for (const [champ, valeur] of Object.entries(fixes)) {
          // `dept` est le seul champ que le rattachement régional peut
          // reprendre après coup — il fait alors autorité.
          if (champ === 'dept' && EXTRA_REGION_OVERRIDES[id]?.dept) continue
          expect(cheese?.[champ as keyof typeof cheese]).toEqual(valeur)
        }
      }
    })

    // Le pavin arrivait du handoff en « pâte pressée non cuite » alors que sa
    // source le donne en pâte molle à croûte lavée — ce que sa propre croûte
    // lavée et sa texture crémeuse disaient déjà.
    it('corrige la famille du pavin', () => {
      const pavin = ALL_CHEESES.find((c) => c.id === 'pavin')
      expect(pavin?.famille).toBe('Pâte molle à croûte lavée')
    })

    // Quatre entrées générées portent un nom de marque et non d'appellation.
    // Sans le champ `marque`, la fiche les présente comme des fromages de
    // terroir ; le repère « Marque » de l'écran Fiche en dépend.
    it('signale les quatre marques commerciales du jeu généré', () => {
      const marques = ALL_CHEESES.filter(
        (c) => CHEESES.some((g) => g.id === c.id) && c.marque,
      )
      expect(marques.map((c) => c.nom).sort()).toEqual([
        'Bouton de Culotte',
        "Carré d'Aurillac",
        "Pavé d'Affinois",
        'Rochebaron',
      ])
      // Une marque n'est pas une appellation : aucune ne doit être en AOP.
      for (const cheese of marques) expect(cheese.aop).toBe(false)
    })

    it('corrige la commune que la marque évoquait à tort', () => {
      const carre = ALL_CHEESES.find((c) => c.id === 'carre-aurillac')
      // Il n'a jamais été fabriqué à Aurillac, mais à Saint-Flour.
      expect(carre?.commune).toBe('Saint-Flour')
      const pave = ALL_CHEESES.find((c) => c.id === 'pave-affinois')
      // Pélussin est dans la Loire, pas en Isère.
      expect(pave?.dept).toBe('Loire / Ain (42/01)')
    })
  })

  // La tomme d'Abondance portait le résumé et la photo de la tomme de Savoie,
  // appariés avant que le filtre de titre n'existe. L'enrichissement les a
  // retirés faute d'article propre : elle ne doit pas les récupérer.
  it('ne prête à la tomme d’Abondance ni résumé ni photo d’un autre fromage', () => {
    const tomme = ALL_CHEESES.find((c) => c.id === 'tomme-abondance')
    expect(tomme).toBeDefined()
    expect(tomme?.wikipedia).toBeUndefined()
    expect(tomme?.image).toBeUndefined()
    expect(tomme?.galleryImages).toBeUndefined()
  })

  // Passe éditoriale sur le jeu généré : le handoff n'avait rempli anecdote /
  // fabrication / conservation / service que sur douze de ses cinquante
  // fiches. EXTRA_EDITORIAL comble le reste, sans jamais écraser un texte
  // existant.
  describe('EXTRA_EDITORIAL', () => {
    const CHAMPS = ['anecdote', 'fabrication', 'conservation', 'service'] as const

    it('ne vise que des fromages du jeu généré', () => {
      const generes = new Set(CHEESES.map((c) => c.id))
      const orphelins = Object.keys(EXTRA_EDITORIAL).filter((id) => !generes.has(id))
      expect(orphelins).toEqual([])
    })

    it('n’écrase aucun texte déjà écrit par le handoff', () => {
      const collisions: string[] = []
      for (const [id, textes] of Object.entries(EXTRA_EDITORIAL)) {
        const source = CHEESES.find((c) => c.id === id)
        for (const champ of Object.keys(textes)) {
          if (source?.[champ as (typeof CHAMPS)[number]]) collisions.push(`${id}.${champ}`)
        }
      }
      expect(collisions).toEqual([])
    })

    it('donne à chaque entrée générée fabrication, conservation et service', () => {
      const manquants = ALL_CHEESES.filter(
        (c) => CHEESES.some((g) => g.id === c.id) && (!c.fabrication || !c.conservation || !c.service),
      ).map((c) => c.id)
      expect(manquants).toEqual([])
    })

    // L'anecdote est le seul champ qu'on laisse vide : c'est un fait, et
    // treize entrées générées n'ont pas de source où le prendre — douze sans
    // article Wikipédia propre (dont la tomme d'Abondance, à qui l'on a retiré
    // celui de la tomme de Savoie), et le pavin dont l'article tient en une
    // phrase déjà reprise dans son histoire.
    it('laisse sans anecdote les seules fiches sans source, et pas d’autres', () => {
      const sansAnecdote = ALL_CHEESES.filter(
        (c) => CHEESES.some((g) => g.id === c.id) && !c.anecdote,
      ).map((c) => c.id)
      expect(sansAnecdote.sort()).toEqual([
        'claousou',
        'comtomme',
        'couronne-lozerienne',
        'galet-loire',
        'margot',
        'pavin',
        'tomme-abondance',
        'tomme-belledonne',
        'tomme-champsaur2',
        'tomme-chevre-vercors',
        'tomme-tarentaise',
        'tomme-trieves',
        'tommette-chevre-lyonnais',
      ])
    })

    it('recolle bien les textes sur le jeu final', () => {
      const salers = ALL_CHEESES.find((c) => c.id === 'salers')
      expect(salers?.fabrication).toContain('gerle')
      // Le reblochon vient complet du handoff : son texte doit être intact.
      const reblochon = ALL_CHEESES.find((c) => c.id === 'reblochon')
      expect(reblochon?.anecdote).toContain('re-blocher')
    })
  })

  it('rattache les fromages bourguignons et comtois à leur région', () => {
    // 13 depuis que le Chaource et le Langres sont passés au Grand Est.
    expect(BFC_CHEESES).toHaveLength(13)
    for (const cheese of BFC_CHEESES) {
      expect(cheese.regionId).toBe('bourgogne-franche-comte')
    }
  })
})
