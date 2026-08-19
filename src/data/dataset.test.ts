import { describe, expect, it } from 'vitest'
import { ALL_CHEESES } from './dataset'
import { CHEESES } from './cheeses'
import { EXTRA_CHEESES } from './cheeses-extra'
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
    const collisions = EXTRA_CHEESES.flatMap((c) => [c.nom, ...c.alt])
      .map(norm)
      .filter((n) => generes.has(n))
    expect(collisions).toEqual([])
  })

  it('rattache chaque ajout à une région connue', () => {
    const connues = new Set(REGIONS.map((r) => r.id))
    for (const cheese of EXTRA_CHEESES) {
      expect(connues.has(cheese.regionId)).toBe(true)
    }
  })

  it('place chaque ajout sur la carte, dans les bornes de la silhouette', () => {
    for (const cheese of EXTRA_CHEESES) {
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
  ])('trouve « %s » dans la base', (nom) => {
    expect(searchCheeses(ALL_CHEESES, nom, 'Tous').length).toBeGreaterThan(0)
  })
})
