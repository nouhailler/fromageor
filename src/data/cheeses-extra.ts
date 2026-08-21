// Fromages d'Auvergne-Rhône-Alpes ajoutés à la main, en complément du jeu
// généré depuis le handoff de design (cheeses.ts, qui est écrasé à chaque
// `npm run import-cheeses` — d'où ce fichier séparé).
//
// Les deux listes sont assemblées dans dataset.ts ; dataset.test.ts garantit
// qu'aucun identifiant ni aucun nom n'y apparaît deux fois.
//
// Coordonnées `map` : exprimées dans l'espace de FR_XY (projection réelle sur
// la silhouette 0-100), puisque ces fromages n'ont pas d'entrée dans fr-map.ts
// et retombent donc sur ce champ.
import type { Cheese } from './cheese.types'

export const EXTRA_CHEESES: Cheese[] = [
  {
    id: 'tome-bauges',
    nom: 'Tome des Bauges',
    alt: ['Tome des Bauges fermière'],
    dept: 'Savoie / Haute-Savoie (73/74)',
    commune: 'Massif des Bauges',
    lait: 'Vache',
    race: 'Abondance, Tarine, Montbéliarde',
    famille: 'Pâte pressée non cuite',
    croute: 'Naturelle, grise et tourmentée',
    texture: 'Souple, légèrement élastique',
    forme: 'Cylindre plat',
    poids: '1,1–1,4 kg',
    dim: 'Ø 18–20 cm · 3–5 cm',
    affinage: '5 semaines minimum',
    mg: '≥ 45 %',
    saison: 'Printemps → Automne',
    intensite: 3,
    aop: true,
    prix: '≈ 24 €/kg',
    dispo: 'Régionale',
    color: 'Ivoire à jaune clair',
    notes: ['Noisette', 'Champignon', 'Foin', 'Beurre frais'],
    accords: {
      vin: 'Roussette de Savoie, Mondeuse légère',
      biere: 'Ambrée de montagne',
      cidre: 'Cidre fermier demi-sec',
      whisky: 'Single malt doux non tourbé',
      pain: 'Pain de campagne au levain',
    },
    histoire:
      "Fabriquée depuis des siècles dans les fermes du massif des Bauges, entre Chambéry, Annecy et Albertville, elle a obtenu l'AOC en 2002 puis l'AOP en 2007 — la seule « tome » à être ainsi protégée. Sa production reste modeste et largement fermière, à partir du lait cru et entier de troupeaux nourris à l'herbe et au foin du massif.",
    anecdote:
      "Elle s'écrit « Tome » avec un seul M : l'orthographe savoyarde retenue par le cahier des charges, qui la distingue des innombrables « tommes » sans appellation.",
    fabrication:
      "Lait cru et entier emprésuré, caillé découpé puis brassé, moulé et pressé légèrement. Affinage minimum de 5 semaines sur planche d'épicéa, avec retournements et brossages réguliers : la croûte se couvre alors de moisissures grises caractéristiques.",
    conservation: "Dans le bac à légumes, emballée dans son papier d'origine, 2 à 3 semaines.",
    service: "Sortie 1 h avant dégustation, en fin de repas ou fondue sur des pommes de terre.",
    nutrition: {
      energie: '320 kcal',
      proteines: '22 g',
      lipides: '25 g',
      calcium: '600 mg',
    },
    galerie: ['Vue entière', 'Coupe', 'Croûte grise', 'Plateau', "Cave d'affinage"],
    map: [72.1, 55.8],
    regionId: 'auvergne-rhone-alpes',
  },
  {
    id: 'emmental-savoie',
    nom: 'Emmental de Savoie',
    alt: ['Emmental de Savoie IGP'],
    dept: 'Savoie / Haute-Savoie (73/74)',
    commune: 'Albanais, Combe de Savoie',
    lait: 'Vache',
    race: 'Abondance, Tarine, Montbéliarde',
    famille: 'Pâte pressée cuite',
    croute: 'Naturelle, dure, jaune doré',
    texture: 'Ferme et souple, ouvertures régulières',
    forme: 'Meule bombée',
    poids: '60–100 kg',
    dim: 'Ø 72–80 cm · 15–25 cm',
    affinage: '75 jours minimum',
    mg: '45 % sur extrait sec',
    saison: "Toute l'année",
    intensite: 2,
    aop: false,
    prix: '≈ 16 €/kg',
    dispo: 'Courante',
    color: 'Jaune ivoire à doré',
    notes: ['Noisette', 'Lait cuit', 'Beurre', 'Fruité'],
    accords: {
      vin: 'Chignin, Jacquère de Savoie',
      biere: 'Blonde de soif',
      cidre: 'Cidre doux',
      whisky: 'Single malt léger des Lowlands',
      pain: 'Pain de campagne, pain aux céréales',
    },
    histoire:
      "Introduit en Savoie au XIXᵉ siècle par des fromagers venus de Suisse alémanique, l'emmental y a trouvé un terrain favorable : des coopératives villageoises — les « fruitières » — assez nombreuses pour rassembler le lait nécessaire à des meules de cette taille. L'IGP le protège depuis 1996 et impose le lait cru.",
    anecdote:
      "Les « trous » — les ouvertures — viennent du gaz carbonique dégagé par les bactéries propioniques en cave chaude : le cahier des charges les veut de la taille d'une cerise.",
    fabrication:
      "Lait cru chauffé à 53–55 °C après emprésurage (d'où « pâte cuite »), soutiré en toile puis pressé en meule. Affinage en cave froide, puis 3 à 6 semaines en cave chaude où la pâte gonfle et se creuse d'ouvertures, avant retour au froid.",
    conservation: "Emballé serré au réfrigérateur, 3 semaines ; sortir la tranche 30 min avant.",
    service: "En plateau, râpé sur les gratins, ou en cubes à l'apéritif.",
    nutrition: {
      energie: '380 kcal',
      proteines: '28 g',
      lipides: '29 g',
      calcium: '1 000 mg',
    },
    galerie: ['Meule entière', 'Coupe', 'Ouvertures', 'Plateau', 'Cave chaude'],
    map: [71.1, 54.3],
    regionId: 'auvergne-rhone-alpes',
  },
  {
    id: 'emmental-est-central',
    nom: 'Emmental français est-central',
    alt: ['Emmental grand cru est-central', 'Emmental grand cru'],
    dept: 'Ain / Jura / Doubs / Savoie (01/39/25/73)',
    commune: 'Zone est-centrale',
    lait: 'Vache',
    race: 'Montbéliarde, Abondance, Simmental française',
    famille: 'Pâte pressée cuite',
    croute: 'Naturelle, dure, jaune à brun clair',
    texture: 'Ferme, fondante en bouche',
    forme: 'Meule bombée',
    poids: '70 kg environ',
    dim: 'Ø 75 cm · 20 cm',
    affinage: '12 semaines minimum',
    mg: '45 % sur extrait sec',
    saison: "Toute l'année",
    intensite: 3,
    aop: false,
    prix: '≈ 19 €/kg',
    dispo: 'Courante',
    color: 'Jaune paille soutenu',
    notes: ['Fruité', 'Noisette grillée', 'Bouillon', 'Beurre noisette'],
    accords: {
      vin: 'Vin jaune du Jura, Chardonnay du Bugey',
      biere: 'Ambrée maltée',
      cidre: 'Cidre brut',
      whisky: 'Single malt de Speyside',
      pain: 'Pain de campagne, pain aux noix',
    },
    histoire:
      "L'IGP « Emmental français est-central », reconnue en 1996, couvre le grand quart est du pays — Ain et Savoie compris. Elle impose le lait cru et un affinage nettement plus long que l'emmental industriel, d'où le nom commercial de « grand cru » sous lequel il est le plus souvent vendu.",
    anecdote:
      "C'est la meule qui a fait la réputation du « gruyère » des cantines françaises — un abus de langage tenace : le vrai gruyère, lui, vient de Suisse ou de Franche-Comté.",
    fabrication:
      "Lait cru collecté dans un rayon court, chauffé en cuve de cuivre, pressé puis salé en saumure. Trois semaines minimum en cave chaude pour l'ouverture, puis reprise au froid jusqu'à 12 semaines au total.",
    conservation: "Au réfrigérateur dans un linge légèrement humide, 3 à 4 semaines.",
    service: "En lamelles fines au couteau, en plateau ou dans une fondue à trois fromages.",
    nutrition: {
      energie: '385 kcal',
      proteines: '29 g',
      lipides: '30 g',
      calcium: '1 050 mg',
    },
    galerie: ['Meule entière', 'Coupe', 'Ouvertures', 'Plateau', 'Cave chaude'],
    map: [64.8, 51.3],
    regionId: 'auvergne-rhone-alpes',
  },
  {
    id: 'ramequin',
    nom: 'Ramequin',
    alt: ['Ramequin du Bugey', 'Ramequin de Lagnieu'],
    dept: 'Ain (01)',
    commune: 'Bugey, Lagnieu',
    lait: 'Chèvre',
    race: 'Alpine, Saanen',
    famille: 'Pâte molle à croûte naturelle',
    croute: 'Naturelle, fleurie puis bleutée en séchant',
    texture: 'Fondante jeune, cassante une fois sèche',
    forme: 'Petit palet',
    poids: '40–60 g',
    dim: 'Ø 5 cm · 2 cm',
    affinage: '2 à 4 semaines',
    mg: '45 %',
    saison: 'Printemps → Automne',
    intensite: 3,
    aop: false,
    prix: '≈ 34 €/kg',
    dispo: 'Fermière',
    color: 'Blanc crayeux à ivoire',
    notes: ['Chèvre frais', 'Noisette', 'Piquant', 'Cave'],
    accords: {
      vin: 'Roussette du Bugey, Chardonnay du Bugey',
      biere: 'Blanche',
      cidre: 'Cidre brut fermier',
      whisky: 'Single malt floral',
      pain: 'Pain de seigle, pain grillé',
    },
    histoire:
      "Petit fromage de chèvre du Bugey, dans l'Ain, longtemps fabriqué dans les fermes pour la consommation domestique. On le mangeait frais en été, puis séché tout l'hiver, quand les chèvres ne donnaient plus de lait — un fromage de conservation avant d'être un fromage de plateau.",
    anecdote:
      "Le mot désigne aussi le plat : le « ramequin » bugiste, où l'on fait fondre les palets secs avec du vin blanc et de l'ail, cousin local de la fondue.",
    fabrication:
      "Caillé lactique égoutté lentement, moulé à la louche en petits palets, salé à sec. L'affinage se poursuit à volonté : quelques jours pour un fromage frais, plusieurs semaines pour un palet dur et piquant.",
    conservation: "Dans une boîte aérée au réfrigérateur ; sec, il se garde plusieurs mois.",
    service: "Frais à l'apéritif, ou sec fondu au vin blanc sur du pain de campagne.",
    nutrition: {
      energie: '300 kcal',
      proteines: '19 g',
      lipides: '24 g',
      calcium: '140 mg',
    },
    galerie: ['Vue entière', 'Coupe', 'Palets secs', 'Plateau'],
    map: [65.8, 54.4],
    regionId: 'auvergne-rhone-alpes',
  },
  {
    id: 'cervelle-canut',
    nom: 'Cervelle de canut',
    alt: ['Claqueret lyonnais', 'Tomme daubée'],
    dept: 'Rhône (69)',
    commune: 'Lyon, la Croix-Rousse',
    lait: 'Vache',
    race: 'Montbéliarde, Prim’Holstein',
    famille: 'Fromage frais assaisonné',
    croute: 'Sans croûte',
    texture: 'Crémeuse, battue',
    forme: 'Préparation servie en bol',
    poids: 'Portion de 100–150 g',
    dim: '—',
    affinage: 'Aucun',
    mg: '0 à 40 % selon le fromage blanc',
    saison: "Toute l'année",
    intensite: 2,
    aop: false,
    prix: '≈ 12 €/kg',
    dispo: 'Courante (bouchons lyonnais)',
    color: "Blanc moucheté d'herbes",
    notes: ['Ciboulette', 'Échalote', 'Ail', 'Vinaigre'],
    accords: {
      vin: 'Beaujolais-Villages servi frais, Saint-Joseph blanc',
      biere: 'Blanche aux herbes',
      cidre: 'Cidre brut',
      pain: 'Pain de campagne grillé',
    },
    histoire:
      "Spécialité des bouchons lyonnais plutôt que fromage à proprement parler : du fromage blanc battu — d'où son autre nom, le « claqueret » — assaisonné d'herbes, d'ail et d'échalote. Les canuts, ouvriers de la soie de la Croix-Rousse au XIXᵉ siècle, en faisaient un ordinaire bon marché.",
    anecdote:
      "Le nom est une pique de la bourgeoisie lyonnaise : la « cervelle de canut » aurait été la seule cervelle que les ouvriers de la soie pouvaient s'offrir.",
    fabrication:
      "Fromage blanc bien égoutté, battu au fouet avec ail, échalote, ciboulette, persil et cerfeuil hachés, sel, poivre, un filet d'huile, de vinaigre et parfois un trait de vin blanc. Se prépare quelques heures à l'avance pour que les herbes infusent.",
    conservation: 'Au réfrigérateur, 48 h au maximum : les herbes noircissent vite.',
    service: "Bien frais, sur du pain grillé, à l'apéritif ou en fin de repas.",
    nutrition: {
      energie: '110 kcal',
      proteines: '8 g',
      lipides: '7 g',
      calcium: '110 mg',
    },
    galerie: ['En bol', 'Herbes fraîches', 'Sur pain grillé', 'Table de bouchon'],
    map: [63.4, 56.0],
    regionId: 'auvergne-rhone-alpes',
  },
  {
    id: 'tomme-bourbonnais',
    nom: 'Tomme du Bourbonnais',
    alt: ['Tomme de chèvre du Bourbonnais'],
    dept: 'Allier (03)',
    commune: 'Bourbonnais',
    lait: 'Chèvre',
    race: 'Alpine, Saanen',
    famille: 'Pâte molle à croûte naturelle',
    croute: 'Naturelle, bleutée, parfois cendrée',
    texture: 'Fondante sous la croûte, cœur ferme',
    forme: 'Petit cylindre',
    poids: '200–300 g',
    dim: 'Ø 9 cm · 4 cm',
    affinage: '3 à 5 semaines',
    mg: '45 %',
    saison: 'Printemps → Automne',
    intensite: 3,
    aop: false,
    prix: '≈ 30 €/kg',
    dispo: 'Fermière',
    color: 'Blanc à ivoire',
    notes: ['Chèvre', 'Noisette', 'Champignon', 'Foin'],
    accords: {
      vin: 'Saint-Pourçain blanc, Sauvignon de Saint-Pourçain',
      biere: 'Blonde fermière',
      cidre: 'Cidre demi-sec',
      whisky: 'Single malt floral',
      pain: 'Pain de campagne, pain aux céréales',
    },
    histoire:
      "L'Allier, porte nord de l'Auvergne, a conservé un élevage caprin fermier dispersé, hérité des petites exploitations du Bourbonnais. Les tommes y sont affinées à la ferme et vendues sur les marchés de Moulins, Montluçon et Saint-Pourçain, sans appellation ni cahier des charges.",
    anecdote:
      "Le Bourbonnais reste le seul département auvergnat sans fromage AOP : sa production caprine, entièrement fermière, se joue à l'échelle des marchés locaux.",
    fabrication:
      "Caillé lactique égoutté sur toile, moulé à la louche, salé à sec puis affiné en hâloir. La croûte se couvre de moisissures bleutées ; certains producteurs la cendrent au charbon de bois.",
    conservation: "Dans le bac à légumes, sous cloche ou papier fromager, 2 semaines.",
    service: 'À température ambiante, avec un Saint-Pourçain blanc bien frais.',
    nutrition: {
      energie: '290 kcal',
      proteines: '20 g',
      lipides: '22 g',
      calcium: '160 mg',
    },
    galerie: ['Vue entière', 'Coupe', 'Croûte bleutée', 'Plateau'],
    map: [52.8, 49.8],
    regionId: 'auvergne-rhone-alpes',
  },
]

/** Noms alternatifs ajoutés à des fromages du jeu généré, pour les produits
 *  demandés qui ne sont pas des fromages distincts mais d'autres façons de
 *  nommer une entrée existante. Appliqués dans dataset.ts, ce qui évite d'y
 *  créer un doublon tout en les rendant trouvables par la recherche. */
export const EXTRA_ALT_NAMES: Record<string, string[]> = {
  // Le Picodon AOP couvre Dieulefit ; « affiné méthode Dieulefit » est une
  // mention d'affinage du cahier des charges, pas une appellation séparée.
  picodon: ['Picodon de Dieulefit'],
  // L'IGP Tomme de Savoie couvre la Savoie et la Haute-Savoie : une « tomme
  // de Haute-Savoie » est commercialisée sous ce même nom.
  'tomme-savoie': ['Tomme de Haute-Savoie'],
  // Nom complet de l'appellation, tel qu'il figure au cahier des charges.
  'bleu-gex': ['Bleu de Gex Haut-Jura'],
}

/** Rattachements corrigés sur des entrées du jeu généré. Le handoff ne couvrait
 *  qu'Auvergne-Rhône-Alpes et y avait classé des fromages qui n'en sont pas —
 *  leurs `dept` portaient la mention « limitrophe ». Appliqués dans dataset.ts,
 *  pour ne pas éditer un fichier que `npm run import-cheeses` réécrit. */
export const EXTRA_REGION_OVERRIDES: Record<string, { regionId: string; dept?: string }> = {
  // Le Charolais AOP est produit en Saône-et-Loire, Loire, Rhône et Allier ;
  // son cœur historique et sa commune de référence sont bourguignons.
  charolais: { regionId: 'bourgogne-franche-comte', dept: 'Saône-et-Loire / Rhône (71/69)' },
  // Fromage du Mâconnais et du Charolais, donc de Saône-et-Loire.
  'bouton-culotte': { regionId: 'bourgogne-franche-comte', dept: 'Saône-et-Loire (71)' },
  // L'AOP Mont d'Or est strictement doubiste ; la mention Haute-Savoie du
  // handoff renvoie au vacherin savoyard, qui n'est pas la même appellation.
  'mont-dor': { regionId: 'bourgogne-franche-comte' },
  // Le bleu des Causses et le laguiole sont aveyronnais, donc occitans : le
  // handoff les rangeait en Auvergne-Rhône-Alpes faute d'y avoir la région.
  'bleu-causses': { regionId: 'occitanie' },
  laguiole: { regionId: 'occitanie' },
  // L'aire de l'AOP Bleu de Gex Haut-Jura est à cheval sur deux régions : le
  // pays de Gex et le Haut-Bugey sont dans l'Ain (Auvergne-Rhône-Alpes), le
  // reste dans le Jura. On tranche pour la Bourgogne-Franche-Comté, où se
  // trouvent la quasi-totalité des fruitières encore en activité et les deux
  // noms d'usage du fromage — Haut-Jura et Septmoncel (39).
  'bleu-gex': { regionId: 'bourgogne-franche-comte' },
}
