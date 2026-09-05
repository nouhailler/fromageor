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
import type { Cheese, CheeseTranslation } from './cheese.types'

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
  // La tomme du Champsaur est haut-alpine (05), donc en
  // Provence-Alpes-Côte d'Azur : le handoff la rangeait en
  // Auvergne-Rhône-Alpes faute d'y avoir la région.
  'tomme-champsaur': { regionId: 'provence-alpes-cote-azur' },
}

/** Corrections factuelles sur des entrées du jeu généré : champs que le
 *  handoff a renseignés de travers, et que la lecture des sources a
 *  démentis. Appliquées dans dataset.ts par-dessus l'entrée générée, pour ne
 *  pas éditer un fichier que `npm run import-cheeses` réécrit.
 *
 *  Le champ `marque` est renseigné ici pour les quatre entrées dont le nom
 *  est une marque commerciale déposée et non une appellation : sans lui, la
 *  fiche les présente exactement comme un fromage de terroir. Leur `commune`
 *  était d'ailleurs souvent celle que la marque évoque, pas celle où le
 *  fromage se fabrique — d'où les corrections qui les accompagnent. */
export const EXTRA_FIELD_FIXES: Record<string, Partial<Cheese>> = {
  // Wikipédia le classe en pâte molle à croûte lavée ; le handoff en avait
  // fait une pâte pressée non cuite, ce que sa propre croûte « lavée,
  // orangée » et sa texture « souple, crémeuse » contredisaient déjà.
  pavin: { famille: 'Pâte molle à croûte lavée' },
  // Marque des Fromageries occitanes. Le fromage n'a jamais été produit à
  // Aurillac : il a été mis au point en laboratoire et il est fabriqué à
  // Saint-Flour, à l'autre bout du Cantal.
  'carre-aurillac': { marque: 'Les Fromageries occitanes', commune: 'Saint-Flour' },
  // Marque déposée de la Fromagerie Guilloteau, dont le siège est à Pélussin
  // — commune de la Loire et non de l'Isère, comme le disait le handoff. Les
  // fromages sont fabriqués dans la Loire et dans l'Ain.
  'pave-affinois': {
    marque: 'Fromagerie Guilloteau',
    dept: 'Loire / Ain (42/01)',
    commune: 'Pélussin',
  },
  // Marque du groupe Savencia. Le château de Rochebaron qui lui donne son nom
  // est à Bas-en-Basset, mais le fromage se fabrique à Beauzac et à
  // Saint-Pal-de-Mons.
  rochebaron: {
    marque: 'Savencia Fromage & Dairy',
    commune: 'Beauzac et Saint-Pal-de-Mons',
  },
  // Marque du groupement d'éleveurs Capriferme. Le fromage est mâconnais ;
  // le rattachement du département est fait par EXTRA_REGION_OVERRIDES.
  'bouton-culotte': { marque: 'Capriferme', commune: 'Mâconnais' },
}

/** Passe éditoriale sur les entrées du jeu généré. Le handoff n'a renseigné
 *  `anecdote` / `fabrication` / `conservation` / `service` que sur douze de
 *  ses cinquante fiches ; les autres arrivaient avec une seule ligne
 *  d'histoire. Ces textes sont écrits ici, et non dans `cheeses.ts`, parce que
 *  `npm run import-cheeses` réécrit ce fichier-là intégralement. Appliqués
 *  dans dataset.ts, par-dessus l'entrée générée.
 *
 *  Règle suivie, la même que pour les fiches écrites à la main : rien qui ne
 *  soit tiré de l'article Wikipédia du fromage ou déductible des champs déjà
 *  présents sur la fiche (famille, croûte, affinage, accords). D'où
 *  l'`anecdote` absente sur les onze entrées sans article : une anecdote est
 *  un fait, et un fait sans source n'a pas sa place ici. */
export const EXTRA_EDITORIAL: Record<
  string,
  Partial<Pick<Cheese, 'anecdote' | 'fabrication' | 'conservation' | 'service'>>
> = {
  'bleu-gex': {
    anecdote:
      "Le mot « Gex » est imprimé en relief sur la croûte, marqué au moule. L'aire de fabrication avait été fixée par un jugement du tribunal de Nantua dès 1935, quarante ans avant l'AOC.",
    fabrication:
      "Lait cru de montbéliarde ou de simmental, ensemencé au Penicillium, caillé ni pressé ni cuit, moulé puis piqué. Quarante-huit producteurs de lait, deux fruitières et deux fromageries artisanales en font environ 558 tonnes par an.",
    conservation:
      "Dans son papier, au bas du réfrigérateur, deux à trois semaines ; protéger la coupe d'un film.",
    service:
      "À température ambiante, avec un vin vieux — un porto lui va bien. Longuement affiné, il change de nom et devient le pérassu.",
  },
  'bleu-vercors': {
    anecdote:
      "L'appellation a sauvé une race de vache : la villarde, menacée d'extinction, figure au cahier des charges à côté de l'abondance et de la montbéliarde. Autre curiosité, l'aire d'appellation n'inclut pas Sassenage, la commune qui lui donne son nom.",
    fabrication:
      "Quarante litres de lait par fromage. Le lait, cru ou pasteurisé, entier ou partiellement écrémé, est porté à 35 °C puis emprésuré avec du Penicillium roqueforti. Le caillé est découpé en cubes et brassé, moulé, démoulé et salé neuf heures après l'emprésurage. Vingt et un jours d'affinage au minimum entre 7 et 10 °C, avec piquage à l'aiguille aux 6ᵉ et 12ᵉ jours pour faire naître les moisissures.",
    conservation:
      "Au bas du réfrigérateur dans son papier, une à deux semaines : c'est un bleu doux, il ne gagne rien à forcir.",
    service:
      "À température ambiante, ou fondu en « vercouline », l'équivalent local de la raclette. Il passe aussi en quiche, en sauce sur une viande, ou en cubes à l'apéritif.",
  },
  'bleu-causses': {
    anecdote:
      "Il partage son histoire avec le roquefort : on affinait autrefois à Roquefort-sur-Soulzon des fromages de vache comme de brebis. La reconnaissance de l'appellation roquefort, en 1925, en a banni le lait de vache. Les producteurs se sont alors regroupés sous la marque « Valmont », puis sous le nom de bleu de l'Aveyron, devenu bleu des Causses par les décrets de 1941 et 1946.",
    fabrication:
      "Lait de vache emprésuré et ensemencé, moulé, piqué, puis affiné trois à six mois dans les caves calcaires des Causses. Ce sont les fleurines, ces failles naturelles qui ventilent la roche et thermorégulent les caves sans intervention, qui font l'essentiel de son arôme.",
    conservation:
      "Dans son papier, au bas du réfrigérateur, deux à trois semaines ; la coupe se protège d'un film.",
    service:
      "À température ambiante, en fin de repas, avec un vin doux — porto ou banyuls — et un pain aux fruits secs.",
  },
  laguiole: {
    anecdote:
      "Il a failli disparaître au milieu du XXᵉ siècle : l'estive des troupeaux d'aubrac et le travail en buron revenaient trop cher, et la main-d'œuvre manquait. Des producteurs locaux l'ont relancé à partir des années 1960 ; il s'en vend aujourd'hui 700 à 750 tonnes par an.",
    fabrication:
      "Lait cru de vache, caillé pressé et non cuit, moulé en fourmes de 20 à 50 kg, affinées quatre mois au minimum. Production du lait, fabrication et affinage doivent tous avoir lieu dans l'aire de l'Aubrac, 73 communes de l'Aveyron, du Cantal et de la Lozère.",
    conservation:
      "Dans un linge ou un papier, au bas du réfrigérateur : c'est un fromage de garde, il tient plusieurs semaines.",
    service:
      "À température ambiante, en fines tranches. Sa tome fraîche, prise avant salage et pressage, est la base de l'aligot.",
  },
  salers: {
    anecdote:
      "Le savoir-faire du salers est inscrit depuis 2016 à l'Inventaire du patrimoine culturel immatériel de la France. Son cahier des charges, l'un des plus stricts des AOP fromagères, n'impose pourtant pas la race salers : il ne reste qu'une soixantaine d'éleveurs à y être restés fidèles, et eux seuls peuvent marquer « Tradition Salers » en relief sur leurs fourmes.",
    fabrication:
      "Exclusivement fermier, et seulement du 15 avril au 15 novembre, quand les vaches sont à l'herbe. Le lait cru et entier est transformé sur place aussitôt après la traite, sans jamais être refroidi ni réchauffé, et il est recueilli dans la gerle — un récipient en bois dont le microbiote ensemence naturellement le lait, et qui compte pour beaucoup dans le goût. Caillé pressé non cuit, en fourmes de 35 à 55 kg.",
    conservation:
      "Dans un linge, au bas du réfrigérateur, plusieurs semaines sans dommage.",
    service:
      "À température ambiante, en tranches épaisses, avec un vin rouge du Sud-Ouest.",
  },
  'raclette-savoie': {
    anecdote:
      "Le mot « raclette » n'est protégé nulle part : le Tribunal fédéral suisse a annulé en 2007 la protection du terme seul, au motif qu'il désigne une préparation culinaire et non un fromage. Seuls « Raclette du Valais » en Suisse et « Raclette de Savoie », IGP depuis le 27 janvier 2017, le sont.",
    fabrication:
      "Pâte pressée non cuite au lait de vaches abondance, montbéliarde ou tarentaise, nourries surtout de fourrages verts. Production du lait, transformation et affinage ont lieu dans l'aire de l'IGP : les deux Savoie et quelques communes limitrophes de l'Ain et de l'Isère. Quatre à cinq mois d'affinage.",
    conservation:
      "Dans son papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "Fondu et raclé sur des pommes de terre en robe des champs, avec charcuterie et cornichons. Sa meilleure période va d'octobre à décembre.",
  },
  'saint-marcellin': {
    anecdote:
      "On le mange de deux façons selon le côté du Rhône : sec et à croûte bleue autour de Saint-Marcellin, où on l'appelle le « séchon » ; moelleux voire coulant à Lyon, servi dans sa coupelle.",
    fabrication:
      "Le lait repose deux heures à 20–22 °C pour faire mûrir ses ferments, puis il est mis à cailler une vingtaine d'heures en pièce chaude avant d'être moulé en faisselles de 8 cm — 0,7 litre de lait par fromage. Deux retournements et deux salages espacés de six heures, une douzaine d'heures de repos en faisselle, puis démoulage sur grilles. Dix jours d'affinage au minimum.",
    conservation:
      "Au bas du réfrigérateur, dans sa coupelle ou son papier. Il continue de s'affiner : quelques jours suffisent à le faire passer de moelleux à coulant.",
    service:
      "À température ambiante, à la cuillère quand il est coulant, ou chaud sur une tranche de pain et une salade.",
  },
  'saint-felicien': {
    anecdote:
      "Deux origines circulent. Un crémier lyonnais aurait mélangé la crème recueillie dans la journée au lait frais restant et baptisé sa trouvaille du nom de la place Saint-Félicien, où il tenait boutique ; la première trace certaine est plus prosaïque, un dépôt de marque au tribunal de commerce de Lyon le 6 novembre 1956. À ne pas confondre avec le saint-félicien ardéchois, un chèvre au caillé doux.",
    fabrication:
      "Fabrication et affinage proches de ceux du saint-marcellin, mais le fromage est plus épais, plus riche et plus crémeux : le lait — cru, thermisé ou pasteurisé — est le plus souvent complété en crème. Pâte molle à caractère lactique, ni malaxée ni pressée, quatre à six semaines d'affinage.",
    conservation:
      "Au bas du réfrigérateur, dans sa coupelle. Une semaine, guère plus : il coule vite.",
    service:
      "À température ambiante, à la cuillère, avec un blanc du Rhône ou de Savoie.",
  },
  'tomme-savoie': {
    anecdote:
      "Une pastille sur la croûte dit qui l'a faite : verte pour une tomme fermière, rouge pour une tomme de fruitière. C'est sans doute le plus ancien des fromages de Savoie.",
    fabrication:
      "Pâte pressée non cuite au lait de vaches tarine, abondance et montbéliarde. Elle était à l'origine faite du lait écrémé qui restait de la fabrication du beurre — d'où sa maigreur et son aspect rustique. Dix semaines d'affinage en cave, avec frottages et retournements pour laisser la croûte fleurir.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux à trois semaines. Sa croûte grise sent la cave : c'est normal, elle ne se mange pas.",
    service:
      "À température ambiante, en tranches. Les tommes d'été, faites du lait des bêtes en pâture, sont les plus parfumées.",
  },
  'tomme-abondance': {
    fabrication:
      "Pâte pressée au lait de vaches de race abondance, moulée en petites meules de 3 à 5 kg, croûte frottée pendant deux à trois mois de cave.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "À température ambiante, en tranches ou fondue, avec un blanc de Savoie.",
  },
  'tomme-tarentaise': {
    fabrication:
      "Tomme d'alpage : le lait des vaches tarines pâturant en altitude est caillé et pressé sans cuisson, moulé en petites meules puis frotté deux mois au moins en cave.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "À température ambiante, en tranches, avec une roussette de Savoie.",
  },
  'tomme-bauges': {
    anecdote:
      "L'orthographe « tome », à un seul m, est celle du patois savoyard et a été conservée à l'appellation. En 1807, un questionnaire préfectoral la décrivait comme le fromage « que consomme le paysan » et dont « on ne saurait se passer à chaque repas ».",
    fabrication:
      "Lait cru entier ou partiellement écrémé, caillé pressé non cuit, salé et moulé en disques de 18 à 20 cm pour 1,1 à 1,4 kg. La croûte grise fleurit en cave. Le lait vient de vaches abondance, montbéliarde ou tarentaise.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "À température ambiante, en tranches, avec un blanc de Savoie. Sa meilleure période va de mai à août.",
  },
  'tomme-belledonne': {
    fabrication:
      "Caillé pressé non cuit, moulé en disque d'environ 1,5 kg, puis six semaines de cave où la croûte grise se développe naturellement.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux semaines.",
    service:
      "À température ambiante, en tranches, avec un vin du Grésivaudan.",
  },
  'tomme-chevre-vercors': {
    fabrication:
      "Lait de chèvre caillé, pressé sans cuisson et moulé en petites meules, puis un à deux mois de cave où la croûte se couvre d'un fleuri gris.",
    conservation:
      "Dans un papier, au bas du réfrigérateur : elle sèche et se corse avec le temps.",
    service:
      "À température ambiante, en tranches fines, avec une clairette de Die.",
  },
  'tomme-champsaur': {
    anecdote:
      "Ce n'est pas un fromage mais une famille : l'appellation, non protégée, recouvre les tomes de Tende, de la Vésubie, des Vigneaux, du Queyras et de l'Ubaye. Les tomes fraîches sortent des coopératives du Queyras et de Barcelonnette, une trentaine de tonnes par an ; les tomes de garde sont l'affaire de deux familles.",
    fabrication:
      "Fromage de lait de vache à pâte molle, moulé en cylindre de 25 à 30 cm pour 6 à 8 cm de haut, à la croûte striée gris-blanc. La tome fraîche, elle, est plus petite — 15 cm pour 4 cm — et se mange sans affinage.",
    conservation:
      "Dans un papier, au bas du réfrigérateur ; la tome fraîche se mange dans les jours qui suivent.",
    service:
      "À température ambiante, en tranches, avec un vin des Hautes-Alpes.",
  },
  'tomme-trieves': {
    fabrication:
      "Caillé pressé non cuit, moulé en disque d'environ 1,4 kg, puis six semaines de cave où la croûte grise se forme d'elle-même.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux semaines.",
    service:
      "À température ambiante, en tranches, sur un pain de seigle.",
  },
  'tomme-champsaur2': {
    fabrication:
      "Lait de brebis lacaune caillé, pressé sans cuisson et moulé en petites tommettes de 500 à 800 g, affinées un à deux mois sous croûte naturelle.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "À température ambiante, en fines lamelles, avec un pain aux noix.",
  },
  'tommette-chevre-lyonnais': {
    fabrication:
      "Lait de chèvre caillé et pressé sans cuisson, moulé en tommettes de 400 à 600 g, affinées un mois sous une croûte qui se couvre d'un fleuri clair.",
    conservation:
      "Dans un papier, au bas du réfrigérateur : elle sèche et se corse en vieillissant.",
    service:
      "À température ambiante, en tranches, avec un blanc des coteaux du Lyonnais.",
  },
  charolais: {
    anecdote:
      "L'élevage caprin s'est installé dans le Charolais dès le XVIᵉ siècle comme complément de l'élevage bovin, en entretenant haies et bocages. L'appellation, reconnue au Journal officiel du 23 janvier 2010, est la 46ᵉ appellation fromagère française protégée.",
    fabrication:
      "Lait cru de chèvre, caillé lactique moulé en haute bonde, égoutté puis affiné sous croûte naturelle. Les troupeaux sont limités à dix chèvres par hectare et pâturent l'herbe fraîche 150 jours par an au minimum, foin et céréales non OGM en complément ; l'ensilage et l'enrubannage sont exclus.",
    conservation:
      "Dans un papier, au bas du réfrigérateur : jeune il est frais et lactique, affiné il sèche et prend du bleu.",
    service:
      "À température ambiante, entier ou en rondelles, avec un blanc de Bourgogne.",
  },
  'persille-aravis': {
    anecdote:
      "Un persillé de chèvre, ce qui est rare : la douceur de sa pâte tient aux herbages d'altitude des Aravis. Il se mange le plus affiné possible.",
    fabrication:
      "Les caillés de deux traites sont mélangés puis réchauffés ensemble à 40 °C, moulés, égouttés et salés en saumure. Le fromage prend une croûte dure et épaisse, gris foncé, tachée de moisissures blanches et parfois orangées.",
    conservation:
      "Dans un papier, au bas du réfrigérateur : sa croûte épaisse le protège plusieurs semaines.",
    service:
      "À température ambiante, en tranches, avec un blanc de Savoie.",
  },
  gaperon: {
    anecdote:
      "On l'affinait suspendu dans un torchon noué à la poutre de la cuisine, près de la cheminée — d'où sa forme de boule aplatie, et le surnom peu galant de « nichon de belle-mère ». On disait autrefois que le nombre de gaperons pendus au plafond donnait la mesure de la dot de la mariée.",
    fabrication:
      "Lait cru de vache additionné de gape — la gapa occitane, c'est-à-dire le babeurre et le petit-lait —, d'ail de la Limagne et de poivre, moulé en boule et affiné trois à quatre semaines. Fait traditionnellement de petit-lait, donc maigre, il titre aujourd'hui 30 % de matière grasse.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux semaines ; certains le laissent des mois dans du foin.",
    service:
      "À température ambiante, en quartiers. Il sent peu mais pique en bouche, et demande un rouge d'Auvergne qui tienne.",
  },
  'carre-aurillac': {
    anecdote:
      "Il porte le nom d'Aurillac mais n'y a jamais été produit : le fromage a été mis au point dans les laboratoires de recherche de la fromagerie, et il est fabriqué à Saint-Flour. Sa production est passée de 120 à 800 tonnes entre 2009 et 2021.",
    fabrication:
      "Fabrication industrielle : lait de vache pasteurisé ensemencé et moulé en carré de 20 cm de côté sur 6 cm, à pâte persillée crémeuse. « Carré d'Aurillac » est une marque commerciale, propriété des Fromageries occitanes, et non une appellation.",
    conservation:
      "Dans son emballage, au bas du réfrigérateur ; protéger la coupe d'un film.",
    service:
      "À température ambiante, en fin de repas, ou fondu sur une viande.",
  },
  'pave-affinois': {
    anecdote:
      "Sa texture doit moins à l'affinage qu'à un procédé : les laits sont ultrafiltrés pour en retirer l'eau, le lactose et les sels minéraux solubles, ce qui retient les protéines du lactosérum dans la pâte et augmente le rendement. « Pavé d'Affinois » est une marque déposée de la Fromagerie Guilloteau, à Pélussin, et non une appellation.",
    fabrication:
      "Fabrication industrielle : laits collectés, mélangés, pasteurisés puis ultrafiltrés, moulés en meules hexagonales de 2 kg prédécoupées en six parts, à pâte molle et croûte fleurie.",
    conservation:
      "Dans son papier, au bas du réfrigérateur, une à deux semaines.",
    service:
      "À température ambiante, en parts, sur un plateau ou en tartine.",
  },
  'fourme-montbrison': {
    anecdote:
      "Ce qui la distingue de sa voisine la fourme d'Ambert tient à un geste : le salage se fait dans la masse, en cours de moulage, et non en surface. Elle est inscrite depuis 2018 à l'inventaire du patrimoine culturel immatériel en France, et son territoire est classé Site remarquable du goût.",
    fabrication:
      "Vingt à vingt-cinq litres de lait par fourme. Le caillé est salé dans la masse pendant le moulage, puis les fourmes sont couchées sur des chéneaux en bois d'épicéa et retournées à la main d'un quart de tour toutes les douze heures pour l'égouttage. Sept jours plus tard elles passent en cave, où elles sont piquées et affinées plusieurs semaines.",
    conservation:
      "Dans son papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "À température ambiante, en tranches épaisses, avec un vin doux ou un verre de côtes-du-forez.",
  },
  comtomme: {
    fabrication:
      "Caillé pressé, moulé en meule de 4 à 5 kg, croûte frottée pendant deux à trois mois de cave — une pâte pressée douce, dans la manière des grandes pâtes cuites jurassiennes mais sans leur cuisson.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "À température ambiante, en tranches ou en cubes à l'apéritif, avec un vin du Bugey.",
  },
  serac: {
    anecdote:
      "C'est le fromage du pauvre : on le tirait du petit-lait qui restait de la fabrication du beaufort, de l'abondance ou du comté, ce que les autres pays donnaient aux cochons. Son nom vient du latin serum, petit-lait, par l'arpitan sera — le même mot qui a donné le sérac des glaciers.",
    fabrication:
      "Le petit-lait est chauffé à 85–95 °C, puis un coagulant — vinaigre blanc coupé d'eau, ou, à l'ancienne, de l'aizy, une recuite d'ancien petit-lait acide — fait floculer les protéines en dix à trente minutes. Les grains sont moulés dans une forme appelée justement sérac.",
    conservation:
      "Au réfrigérateur, quelques jours : c'est un fromage frais, sans croûte pour le protéger.",
    service:
      "Frais et nature, sucré, ou salé aux herbes et aux épices. Il se mange aussi séché, fumé ou grillé — il ne fond pas.",
  },
  'vacherin-abondance': {
    anecdote:
      "Le mot vacherin viendrait, selon une légende tirée des archives de l'abbaye de Montserrat, d'un frère vacher nommé Vacarinus, appelé en 1265 pour soigner le troupeau du monastère : la communauté aurait baptisé sa recette caseus vacarinus en son honneur.",
    fabrication:
      "Pâte molle à croûte lavée, cerclée d'une sangle d'écorce d'épicéa qui la tient et lui donne son goût résineux, affinée trois semaines au moins jusqu'à ce que la pâte coule.",
    conservation:
      "Dans sa boîte, au bas du réfrigérateur, une à deux semaines ; le sortir à plat pour qu'il ne s'échappe pas.",
    service:
      "À température ambiante, à la cuillère par le dessus, ou passé au four dans sa boîte.",
  },
  'vacherin-bauges': {
    anecdote:
      "Il est servi depuis le Moyen Âge : un document de 1314, conservé aux archives d'Évian-les-Bains, mentionne sa production sur le plateau de la Montagne des Mémises, par les chanoines du prieuré de Meillerie.",
    fabrication:
      "Pâte molle voire coulante sous une croûte lavée naturelle blanche ou grisâtre, cerclée d'un anneau d'écorce d'épicéa ou d'érable qui lui donne son goût particulier. Cylindre de 21 cm sur 4 à 4,5 cm, d'aspect légèrement crevassé, affiné une quinzaine de jours.",
    conservation:
      "Dans sa boîte, au bas du réfrigérateur, une semaine ou deux.",
    service:
      "À température ambiante, à la cuillère, avec un rouge léger ou un bergeron de Savoie. C'est un fromage d'hiver, de décembre à février.",
  },
  'bleu-thiezac': {
    anecdote:
      "Il se fabrique comme le bleu d'Auvergne, mais sa production est restée exclusivement artisanale. Il appartient à la petite famille des bleus d'Auvergne fermiers, avec le bleu de Costaros, le bleu de Loudes, le bleu du Velay et la fourme du Mézenc.",
    fabrication:
      "Lait de vache des herbages des monts du Cantal, à pâte persillée, salé à chaud selon la technique de la Maison Roussel.",
    conservation:
      "Dans son papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "À température ambiante. Il est nettement meilleur en été et en automne, quand il est fait du lait de transhumance.",
  },
  'bleu-laqueuille': {
    anecdote:
      "C'est l'ancêtre des bleus d'Auvergne, et il est né d'une observation : Antoine Roussel, du hameau de Villevialle, avait remarqué que la même moisissure prenait sur les tourtes de pain de seigle et sur les fromages rangés dans les mêmes tiroirs. Il ensemença son caillé avec ce champignon du pain, puis piqua le fromage en voyant qu'il se développait mieux à l'air — la technique que tous les bleus de la région ont reprise. Le bleu de Laqueuille naissait officiellement en 1854.",
    fabrication:
      "Lait de vache cru d'un seul troupeau en fermier, mélangé et pasteurisé en industriel, ensemencé et piqué, puis six semaines d'affinage au minimum, le temps que la pâte s'assouplisse et que la croûte sèche. Cylindres de 2,5 kg, 20 cm de diamètre sur 9,5 cm.",
    conservation:
      "Dans son papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "À température ambiante, en fin de repas, sur un pain de seigle — celui-là même qui lui a donné sa moisissure.",
  },
  murol: {
    anecdote:
      "C'est un saint-nectaire percé : Jacques Bérioux, dans les années 1920-30, a eu l'idée d'en extraire le centre à l'emporte-pièce. La rondelle ôtée n'est pas perdue, elle devient le murolait — un tout petit fromage d'une cinquantaine de grammes, enrobé de paraffine rouge.",
    fabrication:
      "Fabrication voisine de celle du saint-nectaire : pâte pressée non cuite au lait de vache, moulée en cylindre de 12 cm sur 3,5 à 4 cm, percée d'un trou central de 3 cm, puis affinée un mois environ.",
    conservation:
      "Dans son papier, au bas du réfrigérateur, deux semaines.",
    service:
      "À température ambiante, en tranches. Sa meilleure période va d'avril à juillet.",
  },
  rochebaron: {
    anecdote:
      "Son nom vient du château de Rochebaron, à Bas-en-Basset, mais le fromage est une marque commerciale du groupe Savencia, fabriqué à Beauzac et à Saint-Pal-de-Mons. Il est disponible toute l'année parce que les troupeaux qui le fournissent sont désaisonnés.",
    fabrication:
      "Fabrication industrielle : lait de vache pasteurisé, pâte persillée moulée en disque de 600 g environ, la croûte recouverte de charbon végétal qui lui donne son aspect cendré.",
    conservation:
      "Dans son emballage, au bas du réfrigérateur ; protéger la coupe d'un film.",
    service:
      "À température ambiante, en fin de repas ; son cendrage se mange.",
  },
  'bouton-culotte': {
    anecdote:
      "Le nom dit la taille : c'est l'un des plus petits fromages de France, à peine un bouton. Sa croûte change de couleur avec l'âge, du blanc au jaune puis au bleu, et « Bouton de Culotte » est en fait une marque, celle du groupement d'éleveurs Capriferme.",
    fabrication:
      "Lait cru de chèvre, méthode comparable à celle du mâconnais : caillé lactique moulé très petit, égoutté puis affiné sous croûte fleurie. Entre 40 et 45 % de matière grasse.",
    conservation:
      "Dans un papier, au bas du réfrigérateur : très sec, il se râpe.",
    service:
      "À température ambiante, entier, en bouchée, avec un vin de Bourgogne. On le trouve de mars à décembre.",
  },
  claousou: {
    fabrication:
      "Lait de brebis caillé et pressé sans cuisson, moulé en petite tomme d'un demi-kilo, affinée un à deux mois sous croûte naturelle.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "À température ambiante, en fines lamelles, avec un pain aux noix.",
  },
  'galet-loire': {
    fabrication:
      "Caillé lactique de chèvre moulé en palet plat, d'où son nom de galet, puis deux à trois semaines d'affinage sous une fine croûte fleurie blanche.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, une semaine : il devient plus crémeux en vieillissant.",
    service:
      "À température ambiante, entier, avec un blanc des côtes du Forez.",
  },
  pavin: {
    fabrication:
      "Lait de vache pasteurisé, moulé en dôme et affiné six semaines en cave humide, avec des lavages réguliers qui donnent à la croûte sa couleur orangée. À noter : la source publiée le classe en pâte molle, là où la fiche le donne en pâte pressée non cuite.",
    conservation:
      "Dans son papier, au bas du réfrigérateur, une à deux semaines.",
    service:
      "À température ambiante, en parts, avec un rouge d'Auvergne.",
  },
  'couronne-lozerienne': {
    fabrication:
      "Caillé pressé non cuit moulé en anneau — la forme qui lui donne son nom —, affiné un à deux mois sous croûte naturelle.",
    conservation:
      "Dans un papier, au bas du réfrigérateur, deux à trois semaines.",
    service:
      "À température ambiante, en tranches prises dans la couronne, avec un marcillac.",
  },
  margot: {
    fabrication:
      "Caillé lactique moulé en petit disque de 200 g, puis deux à trois semaines d'affinage sous une fine croûte fleurie blanche, jusqu'à ce que la pâte devienne crémeuse et coule.",
    conservation:
      "Dans son papier, au bas du réfrigérateur, une semaine.",
    service:
      "À température ambiante, à la cuillère quand il coule, avec un crémant.",
  },
}

/** Traductions anglaises des champs narratifs, région par région, comme la
 *  saisie initiale des données (voir CONTEXT.md). Couvre à la fois les
 *  entrées du jeu généré (fusionnées dans dataset.ts par-dessus EXTRA_EDITORIAL
 *  et le handoff) et les fiches d'EXTRA_CHEESES : un seul mécanisme pour les
 *  deux, plutôt qu'un champ `en` écrit à la main dans EXTRA_CHEESES, pour que
 *  toute traduction future suive le même patron.
 *
 *  Même règle que pour le texte français : rien qui ne soit une traduction
 *  fidèle du texte existant, jamais un fait ajouté. `wikipedia.extract` n'est
 *  jamais traduit (citation sourcée, voir cheese.types.ts). */
export const EXTRA_TRANSLATIONS: Record<string, CheeseTranslation> = {
  reblochon: {
    histoire:
      "Born in the 13th century in the alpine pastures of Thônes: farmers practised the « rebloche », a second, hidden milking done after the lord's inspector had passed. This richer milk gave a creamy cheese kept for the family.",
    fabrication:
      "Raw milk renneted, the curd cut then lightly pressed into a mould. Aged on spruce boards, rind washed with salted water.",
    conservation: "In the refrigerator's vegetable drawer, in its original paper, 8–10 days.",
    service: "Bring to room temperature 1 hour before tasting; the heart of tartiflette.",
    anecdote:
      "The name comes from the Savoyard patois « re-blocher »: to pinch the cow's udder again.",
    notes: ['Hazelnut', 'Fresh cream', 'Undergrowth', 'Butter'],
    accords: {
      vin: 'Savoie wine (Apremont, Roussette)',
      biere: 'Light mountain lager',
      cidre: 'Dry farmhouse cider',
      whisky: 'Soft Highlands single malt',
      pain: 'Rye bread, walnut bread',
    },
  },
  beaufort: {
    histoire:
      "A keeping cheese from the Tarentaise alpine pastures, made to last through winter. Its concave heel matches the curved wooden « beaufort » hoop that gave it its name.",
    fabrication:
      "Raw milk heated to 53 °C, curd pressed firmly in linen cloth then in the wooden hoop.",
    conservation: "Refrigerator, 3–4 weeks, wrapped in a slightly damp cloth.",
    service: "Shaved as an aperitif, in fondue, or at the end of a meal with dried fruit.",
    anecdote:
      "« Chalet d'alpage » Beaufort is made above 1500 m, twice a day, with the milk of a single herd.",
    notes: ['Fruity', 'Brown butter', 'Mountain flowers', 'Toasted'],
    accords: {
      vin: 'Roussette de Savoie, Jura Chardonnay',
      biere: 'Tasting amber ale',
      cidre: 'Semi-dry cider',
      whisky: 'Fruity, honeyed Speyside',
      pain: 'Sourdough country bread',
    },
  },
  'bleu-auvergne': {
    histoire:
      "Invented in the mid-19th century by an Auvergne farmer who seeded his curd with rye-bread mould, then pierced the paste to let air in and form the blue veining.",
    fabrication:
      "Curd seeded with Penicillium roqueforti, moulded without pressing, salted then pierced.",
    conservation: "Refrigerator, wrapped in foil, 2–3 weeks.",
    service: "At room temperature, crumbled over a salad or melted into a sauce.",
    anecdote:
      "It's the piercing needles that let air in, allowing the Penicillium to develop into regular veins.",
    notes: ['Mushroom', 'Undergrowth', 'Spices', 'Salted butter'],
    accords: {
      vin: 'Natural sweet wine (Maury, Banyuls)',
      biere: 'Imperial stout',
      cidre: 'Sweet cider',
      whisky: 'Peated Islay',
      pain: 'Fig bread, rye bread',
    },
  },
  'saint-nectaire': {
    histoire:
      "Mentioned at Louis XIV's table by the Maréchal de Senneterre, whose Frenchified name was given to the cheese. Aged on rye straw, which gives it its cellar aromas.",
    fabrication: "Raw milk pressed, salted, aged in a humid cellar on rye straw.",
    conservation: "Refrigerator drawer, original paper, 1–2 weeks.",
    service: "On a cheese board, or melted over potatoes.",
    anecdote:
      "The rind develops white, yellow and red mould « flowers », the signature of straw ageing.",
    notes: ['Undergrowth', 'Fresh mushroom', 'Hazelnut', 'Volcanic terroir'],
    accords: {
      vin: "Côtes d'Auvergne red, Saint-Pourçain",
      biere: 'Aged brown ale',
      cidre: 'Dry cider',
      whisky: 'Round Highlands',
      pain: 'Country bread, rye',
    },
  },
  'fourme-ambert': {
    histoire:
      "One of the oldest blue cheeses in France, its tall cylindrical shape is said to date back to Gallo-Roman times in the mountain huts of the Monts du Forez.",
    fabrication: "Seeded curd, moulded in a tall shape, pierced for the blue veining.",
    conservation: "Refrigerator, foil, 2–3 weeks.",
    service: "Cubed as an aperitif, or in sauce for meats.",
    anecdote: "It's one of the mildest blue cheeses: perfect for discovering veined cheeses.",
    notes: ['Mild', 'Butter', 'Mushroom', 'Dried fruit'],
    accords: {
      vin: 'Sauternes, straw wine',
      biere: 'Abbey blonde',
      cidre: 'Sweet cider',
      whisky: 'Sherry-cask Speyside',
      pain: 'Walnut bread, brioche',
    },
  },
  cantal: {
    histoire:
      "One of the oldest cheeses in Europe, described by Pliny the Elder 2000 years ago. The milk is pressed twice to form the « tome » before moulding.",
    fabrication: "Pressed curd, milled into tome, salted, re-pressed into a wheel then aged.",
    conservation: "Refrigerator, 2–3 weeks.",
    service: "In sticks, grated, or in aligot.",
    anecdote: "The fresh, unaged Cantal tome is used for aligot and truffade.",
    notes: ['Lactic', 'Hazelnut', 'Butter', 'Sharp (aged)'],
    accords: {
      vin: "Marcillac, Côtes d'Auvergne",
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Highlands',
      pain: 'Rye bread',
    },
  },
  picodon: {
    histoire:
      "A keeping cheese of Dauphiné and Vivarais farmers. Its name comes from the Occitan « picaou »: sharp, referring to the tangy aged version.",
    fabrication: "Lactic curd ladled into moulds, drained, salted, dried and aged.",
    conservation: "Refrigerator, ventilated box, 1–2 weeks.",
    service: "Fresh over salad, or aged with a drizzle of olive oil.",
    anecdote:
      "The « Dieulefit method » Picodon is washed and aged longer, until dry and crumbly.",
    notes: ['Goaty', 'Hazelnut', 'Spicy (aged)', 'Dried flowers'],
    accords: {
      vin: 'White Côtes du Rhône, Clairette de Die',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Light Lowlands',
      pain: 'Fougasse, herb bread',
    },
  },
  'brillat-savarin': {
    histoire:
      "Created in the 20th century by the Dubuc dairy then popularised by Henri Androuët, named in homage to the gastronome Jean Anthelme Brillat-Savarin.",
    fabrication: "Milk enriched with cream, slow curdling, delicate moulding, short maturation.",
    conservation: "Refrigerator, 1 week.",
    service: "Plain, with red berries, or cheesecake-style.",
    anecdote: "Enriched with cream, it reaches over 72% fat content: a true dessert cheese.",
    notes: ['Butter', 'Fresh cream', 'Button mushroom', 'Almond'],
    accords: {
      vin: 'Champagne, Crémant de Bourgogne',
      biere: 'Fruity wheat beer',
      cidre: 'Brut bottle-fermented cider',
      whisky: 'Delicate Lowlands',
      pain: 'Traditional baguette, brioche',
    },
  },
  'rigotte-condrieu': {
    histoire:
      "A small cheese from the Pilat hillsides, long sold at Condrieu's markets. It naturally pairs with the great white wine grown nearby.",
    fabrication: "Lactic curd moulded, slowly drained, aged in a cool cellar.",
    conservation: "Refrigerator, 1 week.",
    service: "Plain, warm on toast, or with honey.",
    anecdote: "Its rind develops a fine blue-grey down as it ages.",
    notes: ['Mild goaty', 'Hazelnut', 'Flowers', 'Honey'],
    accords: {
      vin: 'Condrieu (Viognier)',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Lowlands',
      pain: 'Multigrain bread',
    },
  },
  chevrotin: {
    histoire:
      "The goat's-milk cousin of Reblochon, farmhouse-made in the Aravis. The only Chevrotin AOP, it carries on an old farming know-how.",
    fabrication: "Raw goat's milk pressed, rind washed with morge.",
    conservation: "Refrigerator, 1–2 weeks.",
    service: "On a goat cheese board, at room temperature.",
    anecdote:
      "Exclusively farmhouse-made: every Chevrotin is made from raw milk by the producer themselves.",
    notes: ['Goaty', 'Hazelnut', 'Undergrowth', 'Cream'],
    accords: {
      vin: 'White Savoie wine',
      biere: 'Light amber ale',
      cidre: 'Dry cider',
      whisky: 'Speyside',
      pain: 'Rye bread',
    },
  },
  abondance: {
    histoire:
      "Made since the 12th century by the monks of Abondance Abbey, with milk from the local breed of the same name.",
    fabrication: "Raw milk heated, pressed into a wheel with a concave heel, aged 3 months.",
    conservation: "Refrigerator 3 weeks.",
    service: "Shaved, or in berthoud (melted with white wine).",
    anecdote: "In 1381, 1.4 tonnes of Abondance were delivered for the papal conclave in Avignon.",
    notes: ['Fruity', 'Toasted hazelnut', 'Butter', 'Alpine pasture'],
    accords: {
      vin: 'Savoie wine, Chignin-Bergeron',
      biere: 'Amber ale',
      cidre: 'Semi-dry cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  'bleu-vercors': {
    histoire:
      "A cheese from the Vercors plateau mentioned as early as the 14th century, one of the mildest blue cheeses in France.",
    fabrication:
      "Forty litres of milk per cheese. The milk, raw or pasteurised, whole or partly skimmed, is warmed to 35 °C then renneted with Penicillium roqueforti. The curd is cut into cubes and stirred, moulded, unmoulded and salted nine hours after renneting. At least twenty-one days of ageing between 7 and 10 °C, needle-pierced on days 6 and 12 to bring on the mould.",
    conservation:
      "In the bottom of the refrigerator in its paper, one to two weeks: it's a mild blue, it gains nothing from getting stronger.",
    service:
      "At room temperature, or melted as « vercouline », the local equivalent of raclette. It also goes into quiche, as a sauce for meat, or cubed as an aperitif.",
    anecdote:
      "The AOP saved a breed of cow: the Villarde, once threatened with extinction, is written into the specification alongside the Abondance and Montbéliarde. Another oddity: the appellation area does not include Sassenage, the town that gave it its name.",
    notes: ['Very mild', 'Butter', 'Hazelnut'],
    accords: {
      vin: 'Clairette de Die',
      biere: 'Blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Lowlands',
      pain: 'Walnut bread',
    },
  },
  salers: {
    histoire:
      "A traditional farmhouse cheese, made only during the grazing season in the wooden « gerle », with milk from Salers cows.",
    fabrication:
      "Exclusively farmhouse-made, and only from 15 April to 15 November, when the cows are out at pasture. The raw, whole milk is processed on the spot right after milking, never cooled nor reheated, and is collected in the gerle — a wooden vessel whose microbiota naturally seeds the milk and contributes greatly to the flavour. Pressed, uncooked curd, in wheels of 35 to 55 kg.",
    conservation: "In a cloth, at the bottom of the refrigerator, several weeks without harm.",
    service: "At room temperature, in thick slices, with a red wine from the South-West.",
    anecdote:
      "Salers know-how has been listed since 2016 on France's Inventory of Intangible Cultural Heritage. Its specification, one of the strictest of the cheese AOPs, does not however require the Salers breed: only around sixty farmers have stayed faithful to it, and only they may stamp « Tradition Salers » in relief on their wheels.",
    notes: ['Powerful', 'Fresh grass', 'Spices', 'Fruity'],
    accords: {
      vin: 'Marcillac, Cahors',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Highlands',
      pain: 'Rye bread',
    },
  },
  'raclette-savoie': {
    histoire:
      "The Alps' quintessential melting cheese, IGP: the melted slice is scraped onto hot potatoes.",
    fabrication:
      "Pressed, uncooked paste made from the milk of Abondance, Montbéliarde or Tarentaise cows, fed mainly on green forage. Milk production, processing and ageing all take place within the IGP area: the two Savoie départements and a few neighbouring communes in Ain and Isère. Four to five months of ageing.",
    conservation: "In its paper, at the bottom of the refrigerator, two to three weeks.",
    service:
      "Melted and scraped onto potatoes cooked in their skins, with cold cuts and gherkins. Best from October to December.",
    anecdote:
      "The word « raclette » is protected nowhere: in 2007 the Swiss Federal Court struck down protection of the term alone, ruling it names a culinary preparation, not a cheese. Only « Raclette du Valais » in Switzerland and « Raclette de Savoie », IGP since 27 January 2017, are protected.",
    notes: ['Mild', 'Melted butter', 'Milk', 'Hazelnut'],
    accords: {
      vin: 'Savoie wine (Apremont)',
      biere: 'Blonde lager',
      cidre: 'Dry cider',
      whisky: 'Speyside',
      pain: 'Country bread, potatoes',
    },
  },
  'saint-marcellin': {
    histoire:
      "Once a goat cheese, now made from cow's milk. Louis XI, lost in the Forest of Lente, is said to have praised it.",
    fabrication:
      "The milk rests for two hours at 20–22 °C to ripen its cultures, then it is set to curdle for about twenty hours in a warm room before being moulded into 8 cm faisselles — 0.7 litre of milk per cheese. Two turnings and two saltings six hours apart, about twelve hours resting in the mould, then unmoulding onto racks. At least ten days of ageing.",
    conservation:
      "At the bottom of the refrigerator, in its dish or its paper. It keeps ageing: a few days are enough to turn it from soft to runny.",
    service:
      "At room temperature, spooned when runny, or warm on a slice of bread with a salad.",
    anecdote:
      "It's eaten two different ways depending on which side of the Rhône you're on: dry with a blue rind around Saint-Marcellin, where it's called the « séchon »; soft or even runny in Lyon, served in its little dish.",
    notes: ['Lactic', 'Cream', 'Mushroom', 'Hazelnut'],
    accords: {
      vin: 'Bugey wine, Côtes du Rhône',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Lowlands',
      pain: 'Country bread',
    },
  },
  'saint-felicien': {
    histoire:
      "The larger, creamier cousin of Saint-Marcellin, enriched with cream and sold in its faisselle dish.",
    fabrication:
      "Made and aged much like Saint-Marcellin, but the cheese is thicker, richer and creamier: the milk — raw, thermised or pasteurised — is most often enriched with cream. A soft, lactic-style paste, neither kneaded nor pressed, aged four to six weeks.",
    conservation: "At the bottom of the refrigerator, in its dish. A week, hardly more: it runs quickly.",
    service: "At room temperature, spooned, with a white wine from the Rhône or Savoie.",
    anecdote:
      "Two origin stories circulate. A Lyon dairyman is said to have mixed the day's collected cream into the leftover fresh milk and named his find after Place Saint-Félicien, where he had his shop; the first certain trace is more mundane — a trademark filed at the Lyon commercial court on 6 November 1956. Not to be confused with the Ardèche Saint-Félicien, a soft-curd goat cheese.",
    notes: ['Cream', 'Butter', 'Mushroom', 'Mild'],
    accords: {
      vin: 'White Saint-Joseph',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      whisky: 'Lowlands',
      pain: 'Baguette',
    },
  },
  'tomme-savoie': {
    histoire:
      "A historically « lean » cheese made from the skimmed milk left over after buttermaking, with a grey rind covered in moulds.",
    fabrication:
      "Pressed, uncooked paste made from the milk of Tarine, Abondance and Montbéliarde cows. It was originally made from the skimmed milk left over from buttermaking — hence its leanness and rustic look. Ten weeks of cellar ageing, with rubbing and turning to let the rind bloom.",
    conservation:
      "In paper, at the bottom of the refrigerator, two to three weeks. Its grey rind smells of the cellar: that's normal, it isn't eaten.",
    service:
      "At room temperature, in slices. Summer tommes, made from the milk of grazing animals, are the most flavourful.",
    anecdote:
      "A coloured dot on the rind shows who made it: green for a farmhouse tomme, red for a dairy-cooperative one. It is probably the oldest of the Savoie cheeses.",
    notes: ['Cellar', 'Mushroom', 'Hazelnut', 'Earthy'],
    accords: {
      vin: 'Red Savoie wine (Mondeuse)',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Highlands',
      pain: 'Rye bread',
    },
  },
  'tomme-abondance': {
    histoire:
      "The little sister of Abondance AOP, made in the same valley with milk from the Abondance breed.",
    fabrication:
      "Pressed paste made from the milk of Abondance-breed cows, moulded into small wheels of 3 to 5 kg, rind rubbed over two to three months in the cellar.",
    conservation: "In paper, at the bottom of the refrigerator, two to three weeks.",
    service: "At room temperature, in slices or melted, with a white Savoie wine.",
    notes: ['Fruity', 'Hazelnut', 'Butter'],
    accords: {
      vin: 'Chignin-Bergeron',
      biere: 'Amber ale',
      cidre: 'Semi-dry cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  'tomme-tarentaise': {
    histoire:
      "An alpine-pasture tomme from upper Tarentaise, made with the milk of Tarine cows grazing high-altitude pastures.",
    fabrication:
      "An alpine-pasture tomme: milk from Tarine cows grazing at altitude is curdled and pressed without cooking, moulded into small wheels then rubbed for at least two months in the cellar.",
    conservation: "In paper, at the bottom of the refrigerator, two to three weeks.",
    service: "At room temperature, in slices, with a Roussette de Savoie.",
    notes: ['Alpine pasture', 'Fruity', 'Grass'],
    accords: {
      vin: 'Roussette de Savoie',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Speyside',
      pain: 'Rye bread',
    },
  },
  'tomme-bauges': {
    histoire:
      "A tomme from the Bauges Regional Nature Park, made in both dairy cooperatives and on farms.",
    fabrication:
      "Whole or partly skimmed raw milk, pressed uncooked curd, salted and moulded into discs 18 to 20 cm across weighing 1.1 to 1.4 kg. The grey rind blooms in the cellar. The milk comes from Abondance, Montbéliarde or Tarentaise cows.",
    conservation: "In paper, at the bottom of the refrigerator, two to three weeks.",
    service:
      "At room temperature, in slices, with a white Savoie wine. Best from May to August.",
    anecdote:
      "The spelling « tome » with a single m is the Savoyard patois spelling, kept for the appellation. In 1807, a prefectural survey described it as the cheese « the peasant consumes » and could not do without « at every meal ».",
    notes: ['Cellar', 'Hazelnut', 'Mild'],
    accords: {
      vin: 'Savoie wine',
      biere: 'Blonde lager',
      cidre: 'Dry cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  'tomme-belledonne': {
    histoire: "A mountain tomme from the Belledonne massif, in the tradition of alpine grey tommes.",
    fabrication:
      "Pressed, uncooked curd, moulded into a disc of about 1.5 kg, then six weeks in the cellar where the grey rind develops naturally.",
    conservation: "In paper, at the bottom of the refrigerator, two weeks.",
    service: "At room temperature, in slices, with a wine from the Grésivaudan.",
    notes: ['Cellar', 'Hazelnut', 'Earthy'],
    accords: {
      vin: 'Grésivaudan wine',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Highlands',
      pain: 'Rye bread',
    },
  },
  'tomme-chevre-vercors': {
    histoire:
      "A goat's-milk tomme from Vercors farms, with a grey, bloomy rind and a frank goaty taste.",
    fabrication:
      "Goat's milk curdled, pressed without cooking and moulded into small wheels, then one to two months in the cellar where the rind develops a grey bloom.",
    conservation:
      "In paper, at the bottom of the refrigerator: it dries out and gets stronger over time.",
    service: "At room temperature, in thin slices, with a Clairette de Die.",
    notes: ['Goaty', 'Hazelnut', 'Flowers', 'Cellar'],
    accords: {
      vin: 'Clairette de Die',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Lowlands',
      pain: 'Multigrain bread',
    },
  },
  'tomme-trieves': {
    histoire: "A tomme from the Trièves plateau, south of the Vercors, farmhouse-made.",
    fabrication:
      "Pressed, uncooked curd, moulded into a disc of about 1.4 kg, then six weeks in the cellar where the grey rind forms on its own.",
    conservation: "In paper, at the bottom of the refrigerator, two weeks.",
    service: "At room temperature, in slices, on rye bread.",
    notes: ['Cellar', 'Hazelnut', 'Mild'],
    accords: {
      vin: 'Savoie wine',
      biere: 'Blonde lager',
      cidre: 'Dry cider',
      whisky: 'Highlands',
      pain: 'Rye bread',
    },
  },
  'tomme-champsaur2': {
    histoire: "A small sheep's-milk tomme made with Lacaune milk from the volcanic Velay plateau.",
    fabrication:
      "Lacaune sheep's milk curdled, pressed without cooking and moulded into small tommettes of 500 to 800 g, aged one to two months under a natural rind.",
    conservation: "In paper, at the bottom of the refrigerator, two to three weeks.",
    service: "At room temperature, in thin slices, with walnut bread.",
    notes: ['Lanolin', 'Hazelnut', 'Mild', 'Sheep'],
    accords: {
      vin: 'Saint-Pourçain',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Speyside',
      pain: 'Walnut bread',
    },
  },
  'tommette-chevre-lyonnais': {
    histoire: "A goat's-milk tommette from the Monts du Lyonnais, a land of small cheesemaking farms.",
    fabrication:
      "Goat's milk curdled and pressed without cooking, moulded into tommettes of 400 to 600 g, aged one month under a rind that develops a light bloom.",
    conservation:
      "In paper, at the bottom of the refrigerator: it dries out and gets stronger with age.",
    service: "At room temperature, in slices, with a white wine from the Coteaux du Lyonnais.",
    notes: ['Goaty', 'Hazelnut', 'Flowers'],
    accords: {
      vin: 'Coteaux du Lyonnais',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Lowlands',
      pain: 'Multigrain bread',
    },
  },
  'persille-aravis': {
    histoire:
      "A rare goat's-milk blue from the Aravis, one of the only goat veined cheeses in France, made by a handful of farms.",
    fabrication:
      "The curds from two milkings are combined and warmed together to 40 °C, moulded, drained and salted in brine. The cheese develops a hard, thick, dark grey rind, spotted with white and sometimes orange moulds.",
    conservation:
      "In paper, at the bottom of the refrigerator: its thick rind protects it for several weeks.",
    service: "At room temperature, in slices, with a white Savoie wine.",
    anecdote:
      "A goat's-milk veined cheese, which is rare: the mildness of its paste owes to the high-altitude pastures of the Aravis. It's best eaten as fully aged as possible.",
    notes: ['Strong goaty', 'Spices', 'Cellar', 'Sharp'],
    accords: {
      vin: 'Sweet Savoie wine',
      biere: 'Amber ale',
      cidre: 'Sweet cider',
      whisky: 'Islay',
      pain: 'Dried-fruit bread',
    },
  },
  gaperon: {
    histoire:
      "A buttermilk cheese (« gape » in patois) flavoured with garlic and pepper, once hung by the fireplace. A farm's wealth was said to be measured by the number of gaperons hanging from its ceiling.",
    fabrication:
      "Raw cow's milk mixed with gape — the Occitan gapa, meaning buttermilk and whey — Limagne garlic and pepper, moulded into a ball and aged three to four weeks. Traditionally made from whey and so lean, it now runs to 30% fat.",
    conservation: "In paper, at the bottom of the refrigerator, two weeks; some leave it for months in hay.",
    service:
      "At room temperature, in wedges. It smells mild but has a sharp bite, and calls for a robust Auvergne red.",
    anecdote:
      "It was aged hanging in a cloth tied to the kitchen beam, near the fireplace — hence its flattened ball shape, and the less-than-gallant nickname « mother-in-law's breast ». It used to be said that the number of gaperons hanging from the ceiling gave the measure of the bride's dowry.",
    notes: ['Garlic', 'Pepper', 'Sharp', 'Rustic'],
    accords: {
      vin: "Red Côtes d'Auvergne",
      biere: 'Brown ale',
      cidre: 'Dry cider',
      whisky: 'Highlands',
      pain: 'Rye bread',
    },
  },
  'carre-aurillac': {
    histoire:
      "A square Auvergne blue, close to Bleu d'Auvergne but moulded into a block, a speciality of the Aurillac basin.",
    fabrication:
      "Industrial production: pasteurised cow's milk, seeded and moulded into a 20 cm square block 6 cm thick, with a creamy veined paste. « Carré d'Aurillac » is a commercial brand, owned by Fromageries occitanes, not an appellation.",
    conservation: "In its packaging, at the bottom of the refrigerator; protect the cut face with film.",
    service: "At room temperature, at the end of a meal, or melted over meat.",
    anecdote:
      "It bears the name of Aurillac but has never been made there: the cheese was developed in the dairy's research laboratories, and it is made in Saint-Flour. Production rose from 120 to 800 tonnes between 2009 and 2021.",
    notes: ['Powerful', 'Butter', 'Mushroom', 'Spices'],
    accords: {
      vin: 'Banyuls',
      biere: 'Stout',
      cidre: 'Sweet cider',
      whisky: 'Islay',
      pain: 'Dried-fruit bread',
    },
  },
  'pave-affinois': {
    histoire:
      "A modern cheese with an ultra-melting paste obtained by ultrafiltering the milk, very popular for its creamy mildness.",
    fabrication:
      "Industrial production: milks collected, blended, pasteurised then ultrafiltered, moulded into 2 kg hexagonal wheels pre-cut into six portions, with a soft, bloomy-rind paste.",
    conservation: "In its paper, at the bottom of the refrigerator, one to two weeks.",
    service: "At room temperature, in portions, on a cheese board or on a tartine.",
    anecdote:
      "Its texture owes less to ageing than to a process: the milks are ultrafiltered to remove water, lactose and soluble mineral salts, which keeps the whey proteins in the paste and boosts the yield. « Pavé d'Affinois » is a registered trademark of Fromagerie Guilloteau, in Pélussin, not an appellation.",
    notes: ['Cream', 'Butter', 'Mild', 'Mushroom'],
    accords: {
      vin: 'Crémant, Chardonnay',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      whisky: 'Lowlands',
      pain: 'Baguette',
    },
  },
  'fourme-montbrison': {
    histoire:
      "Long confused with Fourme d'Ambert, it is distinguished by its orange rind and its draining on spruce-wood gutters.",
    fabrication:
      "Twenty to twenty-five litres of milk per fourme. The curd is salted within the paste during moulding, then the fourmes are laid on spruce-wood gutters and turned a quarter-turn by hand every twelve hours to drain. Seven days later they move to the cellar, where they are pierced and aged for several weeks.",
    conservation: "In its paper, at the bottom of the refrigerator, two to three weeks.",
    service:
      "At room temperature, in thick slices, with a sweet wine or a glass of Côtes du Forez.",
    anecdote:
      "What sets it apart from its neighbour Fourme d'Ambert comes down to one step: salting happens within the paste, during moulding, not on the surface. It has been listed since 2018 on France's inventory of intangible cultural heritage, and its territory is classed a Site remarquable du goût.",
    notes: ['Mild', 'Fruity', 'Butter', 'Cellar'],
    accords: {
      vin: 'Côtes du Forez, sweet wine',
      biere: 'Abbey blonde',
      cidre: 'Sweet cider',
      whisky: 'Speyside',
      pain: 'Walnut bread',
    },
  },
  comtomme: {
    histoire: "A pressed tomme from the Bugey inspired by the great cooked pastes of the Jura, mild and melting.",
    fabrication:
      "Pressed curd, moulded into a wheel of 4 to 5 kg, rind rubbed over two to three months in the cellar — a mild pressed paste, in the style of the great Jura cooked-paste cheeses but without the cooking.",
    conservation: "In paper, at the bottom of the refrigerator, two to three weeks.",
    service: "At room temperature, in slices or cubed as an aperitif, with a Bugey wine.",
    notes: ['Mild', 'Fruity', 'Butter', 'Hazelnut'],
    accords: {
      vin: 'Bugey wine',
      biere: 'Amber ale',
      cidre: 'Semi-dry cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  serac: {
    histoire:
      "A cheese of recovery made from the heated whey left over from making Beaufort or Abondance: nothing goes to waste in the alpine pastures.",
    fabrication:
      "The whey is heated to 85–95 °C, then a coagulant — white vinegar cut with water, or, traditionally, aizy, a reheated batch of old sour whey — flocculates the proteins over ten to thirty minutes. The curds are moulded into a shape called, fittingly, sérac.",
    conservation: "Refrigerator, a few days: it's a fresh cheese, with no rind to protect it.",
    service:
      "Fresh and plain, sweetened, or salted with herbs and spices. It's also eaten dried, smoked or grilled — it doesn't melt.",
    anecdote:
      "It's the cheese of the poor: it was made from the whey left over from making Beaufort, Abondance or Comté, which other countries fed to pigs. Its name comes from the Latin serum, whey, via the Franco-Provençal sera — the same word that gave us glacier séracs.",
    notes: ['Milky', 'Fresh', 'Mild', 'Smoked (variant)'],
    accords: {
      vin: 'White Savoie wine',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      whisky: 'Lowlands',
      pain: 'Country bread',
    },
  },
  'vacherin-abondance': {
    histoire:
      "A farmhouse vacherin from the Abondance valley, banded with spruce bark, the Savoyard cousin of Mont d'Or.",
    fabrication:
      "Soft, washed-rind paste, banded with a strip of spruce bark that holds it and gives it its resinous taste, aged at least three weeks until the paste runs.",
    conservation:
      "In its box, at the bottom of the refrigerator, one to two weeks; take it out lying flat so it doesn't run out.",
    service: "At room temperature, spooned from the top, or baked in its box.",
    anecdote:
      "The word vacherin, according to a legend drawn from the archives of Montserrat Abbey, comes from a cowherd monk named Vacarinus, called in 1265 to tend the monastery's herd: the community is said to have named its recipe caseus vacarinus in his honour.",
    notes: ['Resin', 'Cream', 'Undergrowth'],
    accords: {
      vin: 'Savoie wine, vin jaune',
      biere: 'Winter blonde lager',
      cidre: 'Semi-dry cider',
      whisky: 'Woody Highlands',
      pain: 'Country bread',
    },
  },
  'vacherin-bauges': {
    histoire:
      "A farmhouse vacherin from the Bauges, banded with spruce bark, to be enjoyed by the spoonful or warm.",
    fabrication:
      "Soft, even runny paste under a natural white or greyish washed rind, banded with a ring of spruce or maple bark that gives it its particular taste. A cylinder 21 cm across and 4 to 4.5 cm thick, with a slightly cracked look, aged about a fortnight.",
    conservation: "In its box, at the bottom of the refrigerator, a week or two.",
    service:
      "At room temperature, by the spoonful, with a light red or a Bergeron de Savoie. A winter cheese, from December to February.",
    anecdote:
      "It has been served since the Middle Ages: a document from 1314, kept in the Évian-les-Bains archives, mentions its production on the Montagne des Mémises plateau, by the canons of Meillerie priory.",
    notes: ['Resin', 'Cream', 'Undergrowth'],
    accords: {
      vin: 'Savoie wine',
      biere: 'Winter blonde lager',
      cidre: 'Semi-dry cider',
      whisky: 'Woody Highlands',
      pain: 'Country bread',
    },
  },
  'bleu-thiezac': {
    histoire:
      "A farmhouse blue from the Cère valley near Thiézac, in the Auvergne blue-cheese tradition.",
    fabrication:
      "Cow's milk from the pastures of the Monts du Cantal, veined paste, hot-salted using the Maison Roussel technique.",
    conservation: "In its paper, at the bottom of the refrigerator, two to three weeks.",
    service:
      "At room temperature. It is noticeably better in summer and autumn, when made from transhumance milk.",
    anecdote:
      "It's made like Bleu d'Auvergne, but its production has stayed strictly artisanal. It belongs to the small family of farmhouse Auvergne blues, alongside Bleu de Costaros, Bleu de Loudes, Bleu du Velay and Fourme du Mézenc.",
    notes: ['Powerful', 'Mushroom', 'Spices'],
    accords: {
      vin: 'Banyuls',
      biere: 'Stout',
      cidre: 'Sweet cider',
      whisky: 'Islay',
      pain: 'Dried-fruit bread',
    },
  },
  'bleu-laqueuille': {
    histoire:
      "The birthplace of bread-mould blue cheese: it was at Laqueuille that Antoine Roussel invented the seeding technique around 1850.",
    fabrication:
      "Raw cow's milk from a single herd when farmhouse-made, blended and pasteurised industrially, seeded and pierced, then aged at least six weeks, the time for the paste to soften and the rind to dry. Cylinders of 2.5 kg, 20 cm across and 9.5 cm thick.",
    conservation: "In its paper, at the bottom of the refrigerator, two to three weeks.",
    service:
      "At room temperature, at the end of a meal, on rye bread — the very bread that gave it its mould.",
    anecdote:
      "It's the ancestor of the Auvergne blues, and it was born of an observation: Antoine Roussel, from the hamlet of Villevialle, had noticed that the same mould grew on rye bread loaves and on cheeses stored in the same drawers. He seeded his curd with this bread fungus, then pierced the cheese on seeing it developed better in air — the technique every blue cheese in the region has since adopted. Bleu de Laqueuille was officially born in 1854.",
    notes: ['Mild', 'Mushroom', 'Butter'],
    accords: {
      vin: 'Maury',
      biere: 'Brown ale',
      cidre: 'Sweet cider',
      whisky: 'Speyside',
      pain: 'Fig bread',
    },
  },
  murol: {
    histoire:
      "Created in the early 20th century from Saint-Nectaire, recognisable by its central hole: the removed core was sold as « Trou de Murol ».",
    fabrication:
      "Made much like Saint-Nectaire: pressed, uncooked cow's-milk paste, moulded into a cylinder 12 cm across and 3.5 to 4 cm thick, punched with a 3 cm central hole, then aged about a month.",
    conservation: "In its paper, at the bottom of the refrigerator, two weeks.",
    service: "At room temperature, in slices. Best from April to July.",
    anecdote:
      "It's a Saint-Nectaire with a hole: in the 1920s-30s, Jacques Bérioux had the idea of punching out its centre. The removed disc isn't wasted — it becomes the murolait, a tiny fifty-gram cheese coated in red wax.",
    notes: ['Mild', 'Butter', 'Hazelnut'],
    accords: {
      vin: "Côtes d'Auvergne",
      biere: 'Blonde lager',
      cidre: 'Dry cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  rochebaron: {
    histoire:
      "A creamy blue from the Velay recognisable by its downy ash-grey rind, named after Rochebaron castle.",
    fabrication:
      "Industrial production: pasteurised cow's milk, veined paste moulded into a disc of about 600 g, the rind coated in vegetable charcoal that gives it its ashy look.",
    conservation: "In its packaging, at the bottom of the refrigerator; protect the cut face with film.",
    service: "At room temperature, at the end of a meal; its ash coating is edible.",
    anecdote:
      "Its name comes from Rochebaron castle, in Bas-en-Basset, but the cheese is a commercial brand of the Savencia group, made in Beauzac and Saint-Pal-de-Mons. It's available year-round because the herds that supply it are bred out of season.",
    notes: ['Mild', 'Cream', 'Mushroom', 'Cellar'],
    accords: {
      vin: 'Sauternes',
      biere: 'Abbey blonde',
      cidre: 'Sweet cider',
      whisky: 'Speyside',
      pain: 'Walnut bread',
    },
  },
  claousou: {
    histoire: "A small sheep's-milk tomme from the fringes of the Massif Central, a low-volume farmhouse product.",
    fabrication:
      "Sheep's milk curdled and pressed without cooking, moulded into a small half-kilo tomme, aged one to two months under a natural rind.",
    conservation: "In paper, at the bottom of the refrigerator, two to three weeks.",
    service: "At room temperature, in thin slices, with walnut bread.",
    notes: ['Sheep', 'Hazelnut', 'Lanolin', 'Mild'],
    accords: {
      vin: 'White Auvergne wine',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Speyside',
      pain: 'Walnut bread',
    },
  },
  'galet-loire': {
    histoire: "A small goat cheese shaped like a river pebble, from the Forez plain along the Loire.",
    fabrication:
      "Lactic goat's-milk curd moulded into a flat puck — hence its name galet, pebble — then two to three weeks of ageing under a fine white bloomy rind.",
    conservation: "In paper, at the bottom of the refrigerator, a week: it grows creamier with age.",
    service: "At room temperature, whole, with a white wine from the Côtes du Forez.",
    notes: ['Mild goaty', 'Cream', 'Hazelnut', 'Flowers'],
    accords: {
      vin: 'White Côtes du Forez',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Lowlands',
      pain: 'Multigrain bread',
    },
  },
  pavin: {
    histoire: "A washed-rind, dome-shaped cheese named after Lac Pavin, a modern Auvergne cheese.",
    fabrication:
      "Pasteurised cow's milk, moulded into a dome and aged six weeks in a humid cellar, with regular washings that give the rind its orange colour. Note: the published source classes it as a soft paste, whereas this fiche gives it as pressed and uncooked.",
    conservation: "In its paper, at the bottom of the refrigerator, one to two weeks.",
    service: "At room temperature, in portions, with a red Auvergne wine.",
    notes: ['Mild', 'Butter', 'Undergrowth'],
    accords: {
      vin: "Côtes d'Auvergne",
      biere: 'Brown ale',
      cidre: 'Dry cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  'couronne-lozerienne': {
    histoire: "A ring-shaped tomme from the fringes of the Aubrac and the Margeride, a rare farmhouse product.",
    fabrication:
      "Pressed, uncooked curd moulded into a ring — the shape that gives it its name — aged one to two months under a natural rind.",
    conservation: "In paper, at the bottom of the refrigerator, two to three weeks.",
    service: "At room temperature, in slices cut from the ring, with a Marcillac.",
    notes: ['Mild', 'Grass', 'Hazelnut'],
    accords: {
      vin: 'Marcillac',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Highlands',
      pain: 'Rye bread',
    },
  },
  margot: {
    histoire: "A creamy cheese from the Forez area, in the mild lineage of bloomy-rind soft cheeses.",
    fabrication:
      "Lactic curd moulded into a small 200 g disc, then two to three weeks of ageing under a fine white bloomy rind, until the paste turns creamy and runs.",
    conservation: "In its paper, at the bottom of the refrigerator, a week.",
    service: "At room temperature, spooned when runny, with a crémant.",
    notes: ['Cream', 'Butter', 'Mushroom', 'Mild'],
    accords: {
      vin: 'Crémant, white Côtes du Forez',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      whisky: 'Lowlands',
      pain: 'Baguette',
    },
  },
  'tome-bauges': {
    histoire:
      "Made for centuries on farms in the Bauges massif, between Chambéry, Annecy and Albertville, it earned AOC status in 2002 then AOP in 2007 — the only « tome » to be protected this way. Its production remains modest and largely farmhouse-based, from the raw, whole milk of herds fed on the massif's grass and hay.",
    fabrication:
      "Raw, whole milk renneted, curd cut then stirred, moulded and lightly pressed. At least 5 weeks of ageing on spruce boards, with regular turning and brushing: the rind then develops its characteristic grey moulds.",
    conservation: "In the vegetable drawer, wrapped in its original paper, 2 to 3 weeks.",
    service: "Out 1 hour before tasting, at the end of a meal or melted over potatoes.",
    anecdote:
      "It's spelled « Tome » with a single M: the Savoyard spelling kept by the specification, distinguishing it from the countless unprotected « tommes ».",
    notes: ['Hazelnut', 'Mushroom', 'Hay', 'Fresh butter'],
    accords: {
      vin: 'Roussette de Savoie, light Mondeuse',
      biere: 'Mountain amber ale',
      cidre: 'Farmhouse semi-dry cider',
      whisky: 'Mild, unpeated single malt',
      pain: 'Sourdough country bread',
    },
  },
  'emmental-savoie': {
    histoire:
      "Introduced to Savoie in the 19th century by cheesemakers from German-speaking Switzerland, Emmental found favourable ground there: village cooperatives — the « fruitières » — numerous enough to gather the milk needed for wheels of this size. The IGP has protected it since 1996 and requires raw milk.",
    fabrication:
      "Raw milk heated to 53–55 °C after renneting (hence « cooked paste »), drawn off in cloth then pressed into a wheel. Aged in a cold cellar, then 3 to 6 weeks in a warm cellar where the paste swells and develops holes, before returning to the cold.",
    conservation: "Wrapped tight in the refrigerator, 3 weeks; take the slice out 30 minutes beforehand.",
    service: "On a cheese board, grated over gratins, or cubed as an aperitif.",
    anecdote:
      "The « holes » come from the carbon dioxide released by propionic bacteria in the warm cellar: the specification wants them the size of a cherry.",
    notes: ['Hazelnut', 'Cooked milk', 'Butter', 'Fruity'],
    accords: {
      vin: 'Chignin, Jacquère de Savoie',
      biere: 'Easy-drinking blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light Lowlands single malt',
      pain: 'Country bread, multigrain bread',
    },
  },
  'emmental-est-central': {
    histoire:
      "The « Emmental français est-central » IGP, recognised in 1996, covers the whole eastern quarter of the country — Ain and Savoie included. It requires raw milk and a noticeably longer ageing than industrial Emmental, hence the commercial name « grand cru » under which it is most often sold.",
    fabrication:
      "Raw milk collected within a short radius, heated in a copper vat, pressed then brine-salted. At least three weeks in a warm cellar for hole formation, then back to the cold for up to 12 weeks total.",
    conservation: "In the refrigerator in a slightly damp cloth, 3 to 4 weeks.",
    service: "In thin knife-cut slivers, on a cheese board or in a three-cheese fondue.",
    anecdote:
      "This is the wheel behind the reputation of the « gruyère » served in French school canteens — a stubborn misnomer: real Gruyère comes from Switzerland or Franche-Comté.",
    notes: ['Fruity', 'Toasted hazelnut', 'Broth', 'Brown butter'],
    accords: {
      vin: 'Vin jaune du Jura, Bugey Chardonnay',
      biere: 'Malty amber ale',
      cidre: 'Dry cider',
      whisky: 'Speyside single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  ramequin: {
    histoire:
      "A small goat cheese from the Bugey, in Ain, long made on farms for household use. It was eaten fresh in summer, then dried through the winter, once the goats stopped giving milk — a keeping cheese before it was a cheese-board cheese.",
    fabrication:
      "Lactic curd slowly drained, ladled into small pucks, dry-salted. Ageing continues as long as wanted: a few days for a fresh cheese, several weeks for a hard, sharp puck.",
    conservation: "In a ventilated box in the refrigerator; dried, it keeps for several months.",
    service: "Fresh as an aperitif, or dried and melted with white wine on country bread.",
    anecdote:
      "The word also names the dish: the Bugey « ramequin », in which dried pucks are melted with white wine and garlic, a local cousin of fondue.",
    notes: ['Fresh goaty', 'Hazelnut', 'Sharp', 'Cellar'],
    accords: {
      vin: 'Roussette du Bugey, Bugey Chardonnay',
      biere: 'Wheat beer',
      cidre: 'Farmhouse dry cider',
      whisky: 'Floral single malt',
      pain: 'Rye bread, toasted bread',
    },
  },
  'cervelle-canut': {
    histoire:
      "A speciality of Lyon's bouchon bistros rather than a cheese in the strict sense: whipped fromage blanc — hence its other name, « claqueret » — seasoned with herbs, garlic and shallot. The canuts, Croix-Rousse silk workers of the 19th century, made a cheap everyday dish of it.",
    fabrication:
      "Well-drained fromage blanc, whisked with chopped garlic, shallot, chives, parsley and chervil, salt, pepper, a drizzle of oil, vinegar and sometimes a splash of white wine. Best made a few hours ahead so the herbs can infuse.",
    conservation: "Refrigerator, 48 hours maximum: the herbs darken quickly.",
    service: "Well chilled, on toasted bread, as an aperitif or at the end of a meal.",
    anecdote:
      "The name is a dig from the Lyon bourgeoisie: « cervelle de canut » (silk worker's brain) is said to have been the only « brain » the silk workers could afford.",
    notes: ['Chives', 'Shallot', 'Garlic', 'Vinegar'],
    accords: {
      vin: 'Chilled Beaujolais-Villages, white Saint-Joseph',
      biere: 'Herbed wheat beer',
      cidre: 'Dry cider',
      pain: 'Toasted country bread',
    },
  },
  'tomme-bourbonnais': {
    histoire:
      "The Allier, Auvergne's northern gateway, has kept a scattered farmhouse goat-cheese tradition, inherited from the small holdings of the Bourbonnais. The tommes are aged on the farm and sold at the markets of Moulins, Montluçon and Saint-Pourçain, with no appellation or specification.",
    fabrication:
      "Lactic curd drained on cloth, ladled into moulds, dry-salted then aged in a drying room. The rind develops bluish moulds; some producers ash it with charcoal.",
    conservation: "In the vegetable drawer, under a cloche or cheese paper, 2 weeks.",
    service: "At room temperature, with a well-chilled white Saint-Pourçain.",
    anecdote:
      "The Bourbonnais remains the only Auvergne département without an AOP cheese: its entirely farmhouse goat production plays out at the scale of local markets.",
    notes: ['Goat', 'Hazelnut', 'Mushroom', 'Hay'],
    accords: {
      vin: 'White Saint-Pourçain, Saint-Pourçain Sauvignon',
      biere: 'Farmhouse blonde lager',
      cidre: 'Semi-dry cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, multigrain bread',
    },
  },

  // Bourgogne-Franche-Comté (17 fiches : 13 de cheeses-bourgogne-franche-comte.ts
  // + 4 rattachées depuis le jeu généré via EXTRA_REGION_OVERRIDES — mont-dor,
  // bleu-gex, charolais, bouton-culotte).
  'mont-dor': {
    histoire:
      "A winter cheese banded with spruce bark that perfumes and holds it. Traditionally enjoyed hot, as the « boîte chaude », baked in the oven.",
    fabrication: "Raw milk moulded, banded with spruce bark, rind washed regularly.",
    conservation:
      "Refrigerator, in its box, until the best-before date; consume quickly once opened.",
    service: "By the spoon, or baked hot in its box, « boîte chaude », with garlic and white wine.",
    anecdote:
      "Its season is strictly bounded: from mid-August to mid-March, when the cows are back in the barn.",
    notes: ['Spruce resin', 'Cream', 'Undergrowth', 'Wood'],
    accords: {
      vin: 'Vin jaune du Jura, Savagnin',
      biere: 'Winter blonde lager',
      cidre: 'Semi-dry cider',
      whisky: 'Woody Highlands',
      pain: 'Country bread, potatoes',
    },
  },
  'bleu-gex': {
    histoire:
      "Introduced in the 14th century by monks from the Dauphiné into the Haut-Jura, marked with the word « Gex » on the rind.",
    fabrication:
      "Raw milk from Montbéliarde or Simmental cows, seeded with Penicillium, curd neither pressed nor cooked, moulded then pierced. Forty-eight milk producers, two dairy cooperatives and two artisan cheesemakers make about 558 tonnes a year.",
    conservation:
      "In its paper, at the bottom of the refrigerator, two to three weeks; protect the cut face with film.",
    service:
      "At room temperature, with an old wine — a port suits it well. Aged long enough, it changes name and becomes pérassu.",
    anecdote:
      "The word « Gex » is printed in relief on the rind, stamped by the mould. The production area had already been set by a ruling of the Nantua court in 1935, forty years before the AOC.",
    notes: ['Mild', 'Hazelnut', 'Mushroom'],
    accords: {
      vin: 'Vin jaune du Jura',
      biere: 'Blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Speyside',
      pain: 'Rye bread',
    },
  },
  charolais: {
    histoire:
      "A small barrel-shaped goat cheese from the Charolais country, historically made by the wives of cattle farmers.",
    fabrication:
      "Raw goat's milk, lactic curd moulded into a tall bung shape, drained then aged under a natural rind. Herds are limited to ten goats per hectare and graze fresh grass at least 150 days a year, with hay and non-GMO grain as a supplement; silage and haylage are excluded.",
    conservation:
      "In paper, at the bottom of the refrigerator: young it is fresh and lactic, aged it dries out and develops blue mould.",
    service: "At room temperature, whole or in rounds, with a white Burgundy.",
    anecdote:
      "Goat farming settled in the Charolais as early as the 16th century, complementing cattle farming and maintaining hedgerows and pastures. The appellation, recognised in the Journal officiel on 23 January 2010, is the 46th protected French cheese appellation.",
    notes: ['Goaty', 'Hazelnut', 'Cellar', 'Flowers'],
    accords: {
      vin: 'Mâcon-Villages, Pouilly-Fuissé',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Lowlands',
      pain: 'Multigrain bread',
    },
  },
  'bouton-culotte': {
    histoire:
      "The smallest cheese in France: its button size meant it could be held in one hand to sew back on… a trouser button. Dried, it keeps all winter.",
    fabrication:
      "Raw goat's milk, a method comparable to Mâconnais: lactic curd moulded very small, drained then aged under a bloomy rind. Between 40 and 45% fat.",
    conservation: "In paper, at the bottom of the refrigerator: very dry, it can be grated.",
    service:
      "At room temperature, whole, in a mouthful, with a Burgundy wine. Found from March to December.",
    anecdote:
      "The name says it all: it's one of the smallest cheeses in France, barely bigger than a button. Its rind changes colour with age, from white to yellow then blue, and « Bouton de Culotte » is in fact a brand, that of the Capriferme farmers' group.",
    notes: ['Goaty', 'Hazelnut', 'Sharp (dry)', 'Cellar'],
    accords: {
      vin: 'Mâcon-Villages, white Beaujolais',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Lowlands',
      pain: 'Multigrain bread',
    },
  },
  comte: {
    histoire:
      "The most-produced French AOP cheese, and one of the oldest: as early as the 13th century, Jura farmers pooled their milk in « fruitières » — nearly 400 litres of milk go into a single wheel, far more than one farm produces in a single milking. The AOC dates from 1958.",
    fabrication:
      "Raw milk collected within a 25 km radius, heated to 53 °C in a copper vat, drawn off in cloth then pressed. Brine-salted, then aged in a cellar on spruce boards, with regular rubbing and turning over months.",
    conservation: "In the refrigerator in a slightly damp cloth, 3 to 4 weeks.",
    service: "Shaved or cubed, out 1 hour beforehand; the base of Jura fondue.",
    anecdote:
      "Each wheel gets a green or brown band depending on its tasting score: below 12/20, it loses the right to the name Comté and goes out unmarked.",
    notes: ['Fruity', 'Hazelnut', 'Butter', 'Roasted'],
    accords: {
      vin: 'Vin jaune du Jura, Savagnin, Chardonnay',
      biere: 'Malty amber ale',
      cidre: 'Dry cider',
      whisky: 'Speyside single malt',
      pain: 'Sourdough country bread',
    },
  },
  epoisses: {
    histoire:
      "Developed in the 16th century by Cistercian monks settled at Époisses, it nearly disappeared after the war: two families, the Berthauts, revived it in 1956 from the memories of the village elders. AOC in 1991.",
    fabrication:
      "Lactic curd very lightly drained, ladled into moulds. During ageing, the rind is washed one to three times a week with salted water then with increasingly concentrated marc de Bourgogne, which gives it its colour and aroma.",
    conservation: "In its wooden box in the refrigerator, 2 weeks; consume quickly once opened.",
    service: "By the spoon, at room temperature, with a glass of marc or a white Burgundy.",
    anecdote:
      "Brillat-Savarin considered it « the king of cheeses ». Its smell regularly gets it banned from public transport — a reputation it wears proudly.",
    notes: ['Marc de Bourgogne', 'Barnyard', 'Salt', 'Smoked'],
    accords: {
      vin: 'White Burgundy, marc de Bourgogne, Sauternes',
      biere: 'Amber triple',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  morbier: {
    histoire:
      "Born on Jura farms as a gesture of thrift: a single milking's milk wasn't enough to fill a Comté mould, so farmers kept the curd under a layer of hearth soot, safe from flies, and topped it up the next day. AOC in 2000.",
    fabrication:
      "Two layers of curd stacked and separated by a line of vegetable charcoal, pressed together then salted. At least 45 days of ageing in a humid cellar, rind rubbed with salted water.",
    conservation: "In the refrigerator in its paper, 2 to 3 weeks.",
    service: "In thick slices at room temperature, or melted over potatoes.",
    anecdote:
      "The black line is now vegetable charcoal, purely decorative: hearth soot has long since been banned.",
    notes: ['Cream', 'Hay', 'Hazelnut', 'Cellar'],
    accords: {
      vin: 'Côtes du Jura, Chardonnay, light Trousseau',
      biere: 'Easy-drinking blonde lager',
      cidre: 'Semi-dry cider',
      whisky: 'Mild single malt',
      pain: 'Rye bread, country bread',
    },
  },
  maconnais: {
    histoire:
      "A cheese of the Mâconnais winegrowers, where every family kept a few goats at the end of the vine rows: the cheese was eaten as a snack in the vineyard, with the house wine. AOP since 2006.",
    fabrication:
      "Lactic curd drained for 24 hours, ladled into truncated-cone moulds, dry-salted, then aged in a drying room where it develops a bluish mould.",
    conservation: "In a ventilated box in the refrigerator, 2 to 3 weeks.",
    service: "At every stage of ageing, from fresh to dry, with a white Mâconnais.",
    anecdote:
      "Its small truncated-cone shape comes from the winegrowers' terracotta mould; as it dries, it hardens enough to be grated over pasta.",
    notes: ['Fresh goaty', 'Hazelnut', 'Hay', 'Mushroom'],
    accords: {
      vin: 'Pouilly-Fuissé, Mâcon-Villages, Saint-Véran',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  cancoillotte: {
    histoire:
      "A lean cheese out of necessity: the cream went to butter, and the remaining skimmed milk gave « metton », a grainy curd melted with a little water and butter. Long the everyday fare of Franche-Comté farms, it earned an IGP in 2022.",
    fabrication:
      "The metton — skimmed-milk curd drained and aged until it becomes pungent — is melted over low heat with water, salt and butter, until smooth and runny. Comes flavoured with garlic or with vin jaune.",
    conservation: "Refrigerator, 3 weeks unopened, one week once opened.",
    service: "Warm or hot, over potatoes, on toasted bread or in a Comtoise fondue.",
    anecdote:
      "Franche-Comté soldiers of the Great War received jars of it at the front: it travelled without spoiling, which few cheeses can withstand.",
    notes: ['Butter', 'Fermented milk', 'Garlic', 'Vin jaune'],
    accords: {
      vin: 'Vin jaune, white Côtes du Jura',
      biere: 'Light blonde lager',
      cidre: 'Sweet cider',
      pain: 'Country bread, jacket potatoes',
    },
  },
  soumaintrain: {
    histoire:
      "A cheese from the village of Soumaintrain, in the Yonne, a milder, younger cousin of Époisses sharing its washed-rind technique. IGP since 2016, after decades of almost entirely farmhouse production.",
    fabrication:
      "Mixed curd, mainly lactic, ladled into moulds, drained without pressing. Rind washed with salted water twice a week for at least three weeks.",
    conservation: "In its box in the refrigerator, 2 weeks.",
    service: "At room temperature, with a well-chilled Chablis or Aligoté.",
    anecdote:
      "Aged further and salted more, the same curd becomes a Saint-Florentin: two neighbouring cheeses born of the same gesture.",
    notes: ['Barnyard', 'Butter', 'Salt', 'Yeast'],
    accords: {
      vin: 'Chablis, Irancy, Bourgogne aligoté',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Mild single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'saint-florentin': {
    histoire:
      "A cheese from the Armançon valley, sold since the 18th century at the Saint-Florentin market, from where it travelled by canal boat to Paris. It's a Soumaintrain taken further: longer ageing, heavier salting, a distinctly stronger taste.",
    fabrication:
      "The same curd as Soumaintrain, but washed longer and more often with salted water, until the rind turns distinctly orange and the paste becomes runny.",
    conservation: "In its box in the refrigerator, 10 days.",
    service: "At room temperature, with a light red from the Yonne.",
    anecdote:
      "It was one of the best-selling Burgundy cheeses in Paris in the 19th century, before the railway reshuffled the market in favour of Brie.",
    notes: ['Barnyard', 'Salt', 'Melted butter', 'Humid cellar'],
    accords: {
      vin: 'Irancy, Chablis premier cru, red Burgundy',
      biere: 'Malty amber ale',
      cidre: 'Dry cider',
      whisky: 'Lightly peated single malt',
      pain: 'Country bread',
    },
  },
  'aisy-cendre': {
    histoire:
      "A young Époisses, washed with marc then buried in wood ash from the hearth: a stopgap way of keeping cheese on Auxois farms, turned into a sought-after speciality. The ash slows drying and lets the paste ripen slowly.",
    fabrication:
      "Fresh cheese washed with marc, then rolled and buried in sifted wood ash where it sits for one to two months in a cool cellar.",
    conservation: "Refrigerator, in its ash, 3 weeks.",
    service: "Out 1 hour beforehand, brushed or not, with a full-bodied red Burgundy.",
    anecdote:
      "The ash is brushed off before tasting, or eaten as is: it brings a light bitterness that cuts through the richness of the paste.",
    notes: ['Ash', 'Marc', 'Barnyard', 'Hazelnut'],
    accords: {
      vin: 'Red Burgundy, marc de Bourgogne',
      biere: 'Brown ale',
      cidre: 'Dry cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, rye bread',
    },
  },
  'trou-du-cru': {
    histoire:
      "Created by the Berthaut dairy at Époisses, the very one that revived Époisses in the 1950s: it's the same marc-washed curd, in a bite-sized format. Its name is a deliberate Burgundian joke.",
    fabrication:
      "Lactic curd moulded into small cylinders, washed with marc de Bourgogne for four weeks — the very high rind-to-paste ratio, for such a small format, makes it a particularly powerful cheese.",
    conservation: "In its box in the refrigerator, 10 days.",
    service: "By the spoon, at room temperature, with a glass of marc.",
    anecdote:
      "Eaten with a teaspoon, the rind serving as a shell: a « hole » scooped out on top and doused with marc turns it into a winegrower's dessert.",
    notes: ['Marc de Bourgogne', 'Barnyard', 'Salt', 'Ammonia'],
    accords: {
      vin: 'Marc de Bourgogne, rich white Burgundy',
      biere: 'Triple',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread',
    },
  },
  affidelice: {
    histoire:
      "Another creation of the Berthaut dairy: the Époisses technique, but a rind washed with Chablis rather than marc. The white wine, less alcoholic than the brandy, gives a rounder, more approachable cheese.",
    fabrication:
      "Lactic curd ladled into moulds, rind washed with Chablis for four weeks in a humid cellar.",
    conservation: "In its box in the refrigerator, 2 weeks.",
    service: "At room temperature, with the Chablis used to wash it.",
    anecdote:
      "It's often the cheese by which the reluctant are won over to the family of Burgundy washed-rind cheeses.",
    notes: ['Chablis', 'Butter', 'Barnyard', 'Hazelnut'],
    accords: {
      vin: 'Chablis, Bourgogne aligoté',
      biere: 'Full-flavoured blonde lager',
      cidre: 'Dry cider',
      whisky: 'Mild single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'ami-chambertin': {
    histoire:
      "Created in 1950 by the Gaugry dairy, set at the foot of the Gevrey-Chambertin vines, to accompany the great reds of the Côte de Nuits. Smaller and taller than Époisses, it's also more powerful.",
    fabrication:
      "Lactic curd moulded without pressing, washed with marc de Bourgogne two to three times a week for six weeks, until the paste turns runny.",
    conservation: "In its box in the refrigerator, 12 days.",
    service: "By the spoon, at room temperature, with a Gevrey-Chambertin.",
    anecdote:
      "Its name is a direct tribute to Chambertin, Napoleon's favourite vintage — the idea being to offer the wine « a friend » (« ami ») equal to it.",
    notes: ['Marc de Bourgogne', 'Barnyard', 'Undergrowth', 'Salt'],
    accords: {
      vin: 'Gevrey-Chambertin, marc de Bourgogne',
      biere: 'Amber triple',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'ptit-gaugry': {
    histoire:
      "The Gaugry dairy's family-sized format: the same washed-rind family as Ami du Chambertin, but a short ageing that makes it a mild cheese, designed for the everyday table rather than the end-of-meal board.",
    fabrication:
      "Lactic curd ladled into moulds, rind washed with salted water for just three weeks — hence its mildness compared with other Burgundy washed-rind cheeses.",
    conservation: "In its box in the refrigerator, 2 weeks.",
    service: "At room temperature, at the end of a meal or on fresh bread.",
    anecdote:
      "The dairy, set on the Route des Grands Crus, can be visited: it's one of the few in Burgundy to open its ageing cellars to the public.",
    notes: ['Butter', 'Cream', 'Faint barnyard', 'Hazelnut'],
    accords: {
      vin: 'Bourgogne aligoté, white Marsannay',
      biere: 'Easy-drinking blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Traditional baguette, country bread',
    },
  },
  'pierre-qui-vire': {
    histoire:
      "Made by the Benedictine monks of the Sainte-Marie de la Pierre-Qui-Vire abbey, deep in the Morvan, from the milk of their own herd raised organically since the 1970s — well before the label became common.",
    fabrication:
      "Organic milk from the abbey, lactic curd ladled into moulds, rind washed with salted water for three to four weeks in the monastery's cellars.",
    conservation: "In the refrigerator in its paper, 2 weeks.",
    service: "At room temperature, with a white Burgundy or an abbey beer.",
    anecdote:
      "The abbey takes its name from a rock balanced so precisely that it can be rocked with one hand, on the edge of the Trinquelin.",
    notes: ['Grass', 'Butter', 'Cellar', 'Hazelnut'],
    accords: {
      vin: 'White Burgundy, Irancy',
      biere: 'Abbey beer',
      cidre: 'Dry cider',
      whisky: 'Mild single malt',
      pain: 'Sourdough country bread',
    },
  },

  // Bretagne (11 fiches, toutes dans cheeses-bretagne.ts).
  'tome-rhuys': {
    histoire:
      "The Rhuys peninsula, between the Gulf of Morbihan and the ocean, was already producing a tome in the Middle Ages, mentioned in the accounts of Saint-Gildas abbey. It disappeared in the 20th century as local dairy farming declined, and was revived by farmers in the 1990s.",
    fabrication:
      "Cow's milk renneted, curd cut and pressed into a mould, salted with Guérande salt. Rind washed weekly with cider or beer over two to three months in the cellar.",
    conservation: "In the vegetable drawer, wrapped in its paper, 3 weeks.",
    service: "At room temperature, with a bowl of dry cider.",
    anecdote:
      "Washed with cider or beer depending on the affineur: the same wheel takes on a different character depending on which drink is brushed onto its rind.",
    notes: ['Cider', 'Hazelnut', 'Butter', 'Cellar'],
    accords: {
      vin: 'Muscadet sur lie, Gros plant',
      biere: 'Breton blonde lager',
      cidre: 'Brut cider from Cornouaille',
      whisky: 'Breton single malt',
      pain: 'Country bread, buckwheat bread',
    },
  },
  'joie-notre-dame': {
    histoire:
      "Made since 1953 by the Cistercian nuns of the Abbaye de La Joie-Notre-Dame, at Campénéac, on the edge of Brocéliande forest. The dairy supports the community and processes milk from neighbouring farms — a monastic economy that has stayed at the scale of its village.",
    fabrication:
      "Pasteurised milk renneted, curd pressed into a mould then brine-salted. Rind washed regularly with salted water over six to eight weeks in the cellar.",
    conservation: "In the refrigerator in its paper, 3 weeks.",
    service: "At room temperature, at the end of a meal or in a sourdough-bread sandwich.",
    anecdote:
      "The nuns sell the cheese at the abbey gatehouse: it's still the main sales point, along with a few Breton dairy shops.",
    notes: ['Cream', 'Butter', 'Hazelnut', 'Hay'],
    accords: {
      vin: 'Muscadet, white Anjou',
      biere: 'Breton abbey beer',
      cidre: 'Sweet cider',
      whisky: 'Mild single malt',
      pain: 'Sourdough country bread',
    },
  },
  timadeuc: {
    histoire:
      "Made since 1937 by the Trappist monks of the Abbaye Notre-Dame de Timadeuc, at Bréhan. In the 2000s the community added a version rubbed with walnut liqueur, the Timanoix, which has become better known than the original cheese.",
    fabrication:
      "Curd pressed into a wheel, brine-salted, then aged six weeks in the cellar with washes of salted water — or rubbed with walnut liqueur for the Timanoix.",
    conservation: "In the refrigerator in its paper, 3 weeks.",
    service: "At room temperature, with walnut bread.",
    anecdote:
      "The walnut liqueur comes from the Abbaye d'Échourgnac, in the Dordogne: two Trappist monasteries that have traded their products for decades.",
    notes: ['Walnut', 'Butter', 'Cellar', 'Hazelnut'],
    accords: {
      vin: 'Muscadet, white Burgundy',
      biere: 'Abbey beer',
      cidre: 'Dry cider',
      whisky: 'Breton single malt',
      pain: 'Walnut bread, country bread',
    },
  },
  'tomme-bretagne': {
    histoire:
      "A generic name for Breton farmhouse tommes, revived from the 1980s by farmers looking to process their own milk rather than deliver it to industrial dairies. No appellation governs it: every farm has its own recipe.",
    fabrication:
      "Pressed, moulded curd, salted, aged two to four months on boards in the cellar. Flavourings are mixed into the curd before moulding.",
    conservation: "In the refrigerator in its paper, 3 to 4 weeks.",
    service: "In slices at room temperature, or melted over a buckwheat galette.",
    anecdote:
      "Flavoured versions — seaweed, mustard seed, wild garlic — have become the Breton signature of the style, where alpine tommes stay plain.",
    notes: ['Hazelnut', 'Hay', 'Butter', 'Seaweed'],
    accords: {
      vin: 'Muscadet, white Anjou',
      biere: 'Breton blonde lager, seaweed wheat beer',
      cidre: 'Farmhouse brut cider',
      whisky: 'Breton single malt',
      pain: 'Buckwheat bread, country bread',
    },
  },
  'menez-hom': {
    histoire:
      "Named after the Menez-Hom, the summit overlooking the Bay of Douarnenez and the Crozon peninsula. A recent farmhouse cheese, born of Finistère's dairy revival, it relies on a natural rind that takes on the grey of the humid seaside cellars.",
    fabrication:
      "Lactic curd ladled into moulds, drained without pressing, dry-salted. Aged in a humid cellar where the rind blooms then greys, three to five weeks.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, with a brut cider from Cornouaille.",
    anecdote:
      "« Menez » means « mount » in Breton: the mountain in question tops out at 330 metres, enough to make it a viewpoint over the whole of Cornouaille.",
    notes: ['Mushroom', 'Butter', 'Hay', 'Undergrowth'],
    accords: {
      vin: 'Muscadet, Gros plant',
      biere: 'Breton blonde lager',
      cidre: 'Brut cider from Cornouaille',
      whisky: 'Breton single malt',
      pain: 'Country bread, buckwheat bread',
    },
  },
  'ti-pavez': {
    histoire:
      "An artisan cheese from the Léon that takes the Breton maritime logic all the way: seaweed mixed into the paste, and a rind washed with seawater rather than brine. A recently created product, without an old tradition behind it.",
    fabrication:
      "Pressed curd mixed with dried Breton seaweed, moulded then washed with filtered seawater over two months of ageing.",
    conservation: "In the refrigerator in its paper, 3 weeks.",
    service: "Cubed as an aperitif with a wheat beer, or melted over a galette.",
    anecdote:
      "« Ti » means « house » in Breton — the name reads like a dairy-shop sign rather than a terroir.",
    notes: ['Seaweed', 'Iodine', 'Salted butter', 'Hazelnut'],
    accords: {
      vin: 'Muscadet sur lie, Chablis',
      biere: 'Seaweed wheat beer',
      cidre: 'Brut cider',
      whisky: 'Peated single malt',
      pain: 'Buckwheat bread, seaweed bread',
    },
  },
  'petit-prince-armorique': {
    histoire:
      "A small raw-milk farmhouse cheese from the Côtes-d'Armor, made in small quantities by a few farms in the Dinan area that reintroduced the Bretonne Pie Noir cow, a local breed that came close to extinction in the 1970s.",
    fabrication:
      "Lactic curd ladled into moulds, seeded with Penicillium candidum, aged three weeks in a drying room.",
    conservation: "In the refrigerator in its box, 10 days.",
    service: "At room temperature, once the centre starts to run.",
    anecdote:
      "The Bretonne Pie Noir gives only a third of a Holstein's milk yield, but a much richer milk: that's what makes this tiny format economically viable.",
    notes: ['Cream', 'Mushroom', 'Butter', 'Hazelnut'],
    accords: {
      vin: 'Muscadet, white Anjou',
      biere: 'Wheat beer',
      cidre: 'Farmhouse sweet cider',
      whisky: 'Mild single malt',
      pain: 'Traditional baguette, multigrain bread',
    },
  },
  'tome-pays-rohan': {
    histoire:
      "A farmhouse tome from the Pays de Rohan, in inland Morbihan, aged in a dry cellar rather than a humid one: four to six months that bring it closer to mountain pressed cheeses, in a region with no such tradition at all.",
    fabrication:
      "Pressed curd, moulded, dry-salted, then aged in a dry cellar where the rind hardens and greys, with regular brushing.",
    conservation: "In the refrigerator in a cloth, 1 month.",
    service: "Shaved, at room temperature, with a keeping cider.",
    anecdote:
      "The Pays de Rohan takes its name from the viscounts who held central Brittany: their motto, « King I cannot be, duke I do not deign, Rohan I am », has had a longer career than their cheese.",
    notes: ['Toasted hazelnut', 'Hay', 'Dry cellar', 'Broth'],
    accords: {
      vin: 'White Anjou, keeping Muscadet',
      biere: 'Breton amber ale',
      cidre: 'Brut keeping cider',
      whisky: 'Peated Breton single malt',
      pain: 'Country bread, buckwheat bread',
    },
  },
  'chevre-trieux': {
    histoire:
      "Goat farming came late to Brittany, a land of cows: farms in the Trieux valley took it up in the 1980s, selling at the Paimpol and Guingamp markets. The cheese is made from raw milk, often organically farmed.",
    fabrication:
      "Lactic curd drained for 24 hours, ladled into moulds, dry-salted then ashed with vegetable charcoal for some batches. Aged in a drying room for two to four weeks.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "Fresh or aged, on toasted bread, with a dry white Loire wine.",
    anecdote:
      "The Trieux is one of the few Breton rivers with a tidal reach as far as Pontrieux: the valley's farms work a few kilometres from a saltwater port.",
    notes: ['Goaty', 'Hazelnut', 'Hay', 'Mushroom'],
    accords: {
      vin: 'Muscadet, Loire Sauvignon',
      biere: 'Wheat beer',
      cidre: 'Farmhouse brut cider',
      whisky: 'Floral single malt',
      pain: 'Buckwheat bread, country bread',
    },
  },
  'brebis-arree': {
    histoire:
      "The Monts d'Arrée, the bare moorland of central Finistère, have seen sheep flocks return with the reintroduction of the Landes de Bretagne, a local breed saved at the last minute. A few farms there turn the milk into small wheels, a rare sheep's-milk production north of the Loire.",
    fabrication:
      "Sheep's milk renneted, curd pressed into a small wheel, salted with Guérande salt, aged two to four months on boards.",
    conservation: "In the refrigerator in its paper, 1 month.",
    service: "At room temperature, with black cherry jam.",
    anecdote:
      "The Landes de Bretagne sheep was down to a handful of individuals in the 1970s; its milk wasn't put back into cheesemaking until decades later.",
    notes: ['Sheep', 'Hazelnut', 'Moorland', 'Butter'],
    accords: {
      vin: 'White Anjou, dry Jurançon',
      biere: 'Breton amber ale',
      cidre: 'Farmhouse brut cider',
      whisky: 'Breton single malt',
      pain: 'Buckwheat bread, country bread',
    },
  },
  'ptit-bleu-bretagne': {
    histoire:
      "The only Breton veined cheese with any real recognition, born in Ille-et-Vilaine in the 2000s: a region with no blue-cheese tradition, where farmers imported the technique to diversify a dairy production overwhelmingly geared toward bulk milk collection.",
    fabrication:
      "Curd seeded with Penicillium roqueforti, moulded without pressing, dry-salted then needle-pierced to let air develop the blue veins. Six to eight weeks in a humid cellar.",
    conservation: "In the refrigerator in food-grade paper, 3 weeks.",
    service: "At room temperature, crumbled over a salad or with a sweet wine.",
    anecdote:
      "It's needle-pierced like a great blue cheese, but in a 400 g format: the veining develops twice as fast there as in a Roquefort wheel.",
    notes: ['Blue', 'Cream', 'Mushroom', 'Salt'],
    accords: {
      vin: 'Coteaux du Layon, keeping Muscadet',
      biere: 'Stout',
      cidre: 'Sweet cider',
      whisky: 'Peated single malt',
      pain: 'Walnut bread, rye bread',
    },
  },

  // Centre-Val de Loire (13 fiches, toutes dans cheeses-centre-val-de-loire.ts).
  'selles-sur-cher': {
    histoire:
      "A cheese from the Sologne farms, long made by farmers' wives and sold at the Cher markets to affineurs who took it on to Paris. In 1975 it was one of the very first goat cheeses to earn an AOC.",
    fabrication:
      "Lactic curd drained for 24 hours, ladled into truncated-cone moulds, salted then ashed with vegetable charcoal. At least ten days in a drying room, up to five weeks for the driest ones.",
    conservation: "In a ventilated box in the refrigerator, 2 to 3 weeks.",
    service: "At room temperature, with a well-chilled Loire Sauvignon.",
    anecdote:
      "The charcoal ashing began as a preservation trick: the ash dried the rind and protected the cheese from flies, before becoming its visual signature.",
    notes: ['Fresh goaty', 'Hazelnut', 'Hay', 'Mushroom'],
    accords: {
      vin: 'White Sancerre, Touraine Sauvignon, Cheverny',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'sainte-maure-touraine': {
    histoire:
      "Touraine has made this log-shaped cheese since the 8th century according to local tradition, which credits its origin to the Saracens settled in the region after Poitiers. AOC in 1990, it remains one of the best-selling French goat cheeses.",
    fabrication:
      "Lactic curd moulded into a log around a straw of rye, salted and ashed with charcoal. At least ten days of ageing, often three weeks for a softer centre.",
    conservation: "In a ventilated box in the refrigerator, 2 to 3 weeks.",
    service: "In rounds at room temperature, or grilled over a salad.",
    anecdote:
      "The rye straw running through it isn't decorative: it supports the log during ageing and carries, engraved on it, the producer's identity — a registration number ahead of its time.",
    notes: ['Goaty', 'Hazelnut', 'Cut hay', 'Mushroom'],
    accords: {
      vin: 'White Chinon, dry Vouvray, Touraine Sauvignon',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, multigrain bread',
    },
  },
  valencay: {
    histoire:
      "A Berry cheese whose truncated pyramid shape feeds a stubborn legend: Talleyrand, owner of the Château de Valençay, is said to have had the tip of the pyramid cut off to spare Napoleon the memory of the Egyptian campaign. AOC in 1998.",
    fabrication:
      "Lactic curd ladled into a pyramid mould, unmoulded after 24 hours, salted and ashed with vegetable charcoal. At least eleven days of ageing in a ventilated drying room.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "At room temperature, with a dry white from the Berry.",
    anecdote:
      "The Talleyrand story is almost certainly apocryphal — the truncated shape existed before him — but it has done more for the cheese's fame than its specification ever could.",
    notes: ['Fresh goaty', 'Hazelnut', 'Hay', 'Almond'],
    accords: {
      vin: 'White Valençay, Reuilly, Quincy',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'pouligny-saint-pierre': {
    histoire:
      "Born in the Brenne, a land of ponds and moorland in northern Indre where goats made use of land too poor for cows. AOC as early as 1972 — the second for a goat cheese, after Pélardon des Cévennes and alongside Crottin.",
    fabrication:
      "Lactic curd ladled into a narrow pyramid mould, slowly drained, dry-salted. Aged in a drying room from ten days to five weeks, without ashing.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "At room temperature, sliced from tip to base.",
    anecdote:
      "Its silhouette earns it the nickname « Eiffel Tower »: it's the most slender of the French goat pyramids, twice as tall as the Valençay.",
    notes: ['Goaty', 'Hazelnut', 'Hay', 'Cellar'],
    accords: {
      vin: 'Reuilly, Quincy, white Sancerre',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, multigrain bread',
    },
  },
  'crottin-chavignol': {
    histoire:
      "The cheese of the Sancerrois, inseparable from its vineyards: winegrowers kept a few goats, and the cheese accompanied the wine on the spot long before making a career in Paris. AOC in 1976.",
    fabrication:
      "Lactic curd drained then moulded into small pucks, dry-salted. Enjoyed at every age: fresh and white at ten days, semi-dry at three weeks, hard and blue-tinged « repassé » after two months.",
    conservation: "In a ventilated box in the refrigerator; dried, it keeps for months.",
    service: "Fresh with a Sancerre, or melted on toast in a warm goat-cheese salad.",
    anecdote:
      "« Crottin » doesn't come from what people assume but from « crot », the Berry term for the waterhole whose clay supplied the first moulds.",
    notes: ['Goaty', 'Hazelnut', 'Sharp', 'Cellar'],
    accords: {
      vin: 'White Sancerre, Pouilly-Fumé, Menetou-Salon',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, toasted bread',
    },
  },
  'olivet-cendre': {
    histoire:
      "A cheese from the Orléanais mentioned as early as the 16th century, aged in vine-cutting ash — a winter-keeping method that let it last until spring, when the cows started giving milk again.",
    fabrication:
      "Curd moulded without pressing, drained then salted, seeded with Penicillium candidum. The cheese is then buried in sifted wood ash for one to three months in the cellar.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, the ash brushed off or not.",
    anecdote:
      "It is said to have been served at Louis XIV's table: the Orléanais supplied the court, a day's cart ride from Versailles.",
    notes: ['Ash', 'Mushroom', 'Cream', 'Hazelnut'],
    accords: {
      vin: 'White Orléans, Cheverny, light Bourgueil',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Mild single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'olivet-foin': {
    histoire:
      "The same paste as Olivet cendré, but aged under a layer of dry hay rather than in ash: the wisps stick to the rind and lend the cheese a dried-grass note that made its reputation.",
    fabrication:
      "Curd moulded without pressing, seeded with Penicillium candidum, then aged for a month resting on a bed of hay whose wisps embed in the rind.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, the hay wisps removed with a knife.",
    anecdote:
      "The hay isn't decoration: it regulates the rind's humidity during ageing, the way dry bedding would.",
    notes: ['Hay', 'Mushroom', 'Cream', 'Butter'],
    accords: {
      vin: 'White Orléans, Cheverny, Touraine',
      biere: 'Blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Country bread, traditional baguette',
    },
  },
  'couronne-lochoise': {
    histoire:
      "An artisan cheese from southern Touraine, created in the 1980s around Loches. Its ring shape is nothing traditional: it dries faster and more evenly than a solid puck, which shortens the ageing time.",
    fabrication:
      "Lactic curd ladled into a ring mould, salted then ashed with charcoal. Three weeks in a drying room.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "At room temperature, with a Touraine Sauvignon.",
    anecdote:
      "The central hole makes it an easy cheese board to share: it's cut into portions like a galette, with no runny centre.",
    notes: ['Fresh goaty', 'Hazelnut', 'Hay', 'Almond'],
    accords: {
      vin: 'Touraine Sauvignon, dry Montlouis',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'buchette-sainte-maure': {
    histoire:
      "A farmhouse, unregulated version of the Touraine cheese: the same paste and the same elongated shape, but without the rye straw or the specification of the Sainte-Maure de Touraine AOP, which not every producer chose or was able to join.",
    fabrication:
      "Lactic curd moulded into a small log, salted, ashed or left with a bloomy rind depending on the farm. Two to three weeks in a drying room.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "In rounds, or grilled on toast in a salad.",
    anecdote:
      "The absence of straw is the tell: a log without its engraved straw has no right to the appellation's full name.",
    notes: ['Fresh goaty', 'Hazelnut', 'Hay', 'Milk'],
    accords: {
      vin: 'Touraine Sauvignon, dry Vouvray',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, multigrain bread',
    },
  },
  'trefle-perche': {
    histoire:
      "A farmhouse cheese from the Perche, a land of hedgerows more geared toward horses and cider than goats. Its four-leaf-clover shape is a recent marketing invention, now its trademark at markets.",
    fabrication:
      "Lactic curd ladled into a clover-shaped mould, dry-salted, seeded with Penicillium candidum. Two to three weeks in a drying room.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "At room temperature, whole on the board for the shape's sake.",
    anecdote:
      "The four-lobed mould isn't just a novelty: it multiplies the rind's surface area, giving a more fully aged cheese for the same weight.",
    notes: ['Fresh goaty', 'Cream', 'Hazelnut', 'Hay'],
    accords: {
      vin: 'White Coteaux du Vendômois, Jasnières',
      biere: 'Wheat beer',
      cidre: 'Perche brut cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, multigrain bread',
    },
  },
  frinault: {
    histoire:
      "An old cheese from the Orléanais, named after the farming family who made it in the 19th century near Orléans. Nearly gone as the Beauce turned to grain farming, it's now made by only a handful of workshops.",
    fabrication:
      "Curd moulded without pressing, drained then salted, seeded for a bloomy rind — or rolled in wood ash for the ashed version. Three to four weeks in the cellar.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, at the end of a meal.",
    anecdote:
      "Its ashed version was long confused with Olivet cendré, a few kilometres and one technique away.",
    notes: ['Mushroom', 'Cream', 'Butter', 'Cellar'],
    accords: {
      vin: 'Red Orléans-Cléry, Cheverny',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Mild single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'cendre-de-la-tour': {
    histoire:
      "A farmhouse cheese from the Berry, ladled into moulds like its AOP neighbours but left outside any appellation. Its production is small-scale, sold at Indre markets and by a few cheesemongers.",
    fabrication:
      "Lactic curd drained for 24 hours, ladled into pucks, salted then ashed with vegetable charcoal. Three weeks in a drying room.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "At room temperature, with a dry white from the Berry.",
    anecdote:
      "Ladling by hand, one scoop at a time and without a pump, is what separates a farmhouse goat cheese from a dairy one: it's slow, and it preserves the curd's structure.",
    notes: ['Goaty', 'Ash', 'Hazelnut', 'Hay'],
    accords: {
      vin: 'Reuilly, Quincy, white Valençay',
      biere: 'Wheat beer',
      cidre: 'Dry cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'pithiviers-foin': {
    histoire:
      "A cheese from the Gâtinais, long called Bondaroy after the neighbouring village, aged buried in the hay of farm lofts. Harvesters took it out to the fields: the hay protected it from the heat and marked it as theirs.",
    fabrication:
      "Curd moulded without pressing, seeded with Penicillium candidum, then buried in dry hay for four to five weeks: the rind blooms through the wisps that stick to it.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, the hay removed at the last moment.",
    anecdote:
      "It's a reverse-season cheese: it was made in summer to be eaten in winter, even though the hay first made it ripen faster.",
    notes: ['Hay', 'Mushroom', 'Cream', 'Undergrowth'],
    accords: {
      vin: 'Cheverny, white Orléans, light red Sancerre',
      biere: 'Amber ale',
      cidre: 'Dry cider',
      whisky: 'Mild single malt',
      pain: 'Country bread, walnut bread',
    },
  },

  // Normandie (13 fiches, toutes dans cheeses-normandie.ts).
  'camembert-normandie': {
    histoire:
      "Tradition credits its creation to Marie Harel, a farmer from Camembert, in 1791. The cheese owes its career mainly to the poplar-wood box, invented around 1890: it let it travel by train without being crushed, reaching Paris and then the trenches of 1914.",
    fabrication:
      "Raw Normande cow's milk ladled into moulds in five successive passes — the gesture that shapes its texture — then turned, salted and seeded. At least twenty-two days of ageing, thirteen of them in a drying room.",
    conservation: "In its box, at the bottom of the refrigerator, 10 days; take out 1 hour beforehand.",
    service: "At room temperature, when the centre gives under a finger.",
    anecdote:
      "Don't confuse « Camembert de Normandie », the raw-milk AOP, with « camembert made in Normandy », a purely geographic mention put on pasteurised cheeses.",
    notes: ['Mushroom', 'Cream', 'Barnyard', 'Hazelnut'],
    accords: {
      vin: 'Light Bourgueil, Beaujolais-Villages',
      biere: 'Norman amber ale',
      cidre: "Brut cider from the Pays d'Auge",
      whisky: 'Mild single malt',
      pain: 'Traditional baguette, country bread',
    },
  },
  livarot: {
    histoire:
      "The strongest of the Norman cheeses, and long the best-selling: in the 19th century it was called « the poor man's meat » in the Pays d'Auge, where it replaced roast meat on workers' tables. AOC in 1975.",
    fabrication:
      "Curd moulded and drained, rind washed with salted water mixed with annatto over three weeks to two months, then banded with three to five strips of sedge or paper.",
    conservation: "In the refrigerator in its box, 2 weeks, away from other food.",
    service: "At room temperature, with a glass of brut cider or calvados.",
    anecdote:
      "The five sedge bands around it, originally there to stop it from sagging, evoke a colonel's stripes — hence its nickname.",
    notes: ['Barnyard', 'Salt', 'Undergrowth', 'Annatto'],
    accords: {
      vin: 'Pommeau de Normandie, full-bodied Bourgueil',
      biere: 'Amber triple',
      cidre: 'Full-bodied brut cider, calvados',
      whisky: 'Peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'pont-leveque': {
    histoire:
      "The oldest Norman cheese still made: it is found mentioned as early as the 12th century under the name « angelot », after a coin, since it was so often used as a means of payment in the Pays d'Auge. AOC in 1976.",
    fabrication:
      "Curd cut, stirred then moulded into a square and turned several times. Rind washed with salted water during ageing, the cheese resting on a mat that leaves its ridges on the rind.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, with a brut cider or a light red.",
    anecdote:
      "Its square shape is nothing aesthetic: it comes from the wooden moulds of the Auge valley, easier to fit together than a circle and more space-efficient on the racks.",
    notes: ['Barnyard', 'Hazelnut', 'Cream', 'Mushroom'],
    accords: {
      vin: 'Pommeau, Saint-Émilion, Bourgueil',
      biere: 'Norman amber ale',
      cidre: "Brut cider from the Pays d'Auge",
      whisky: 'Mild single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  neufchatel: {
    histoire:
      "Normandy's oldest AOC, recognised in 1969, but a cheese attested as early as 1035 in the dues owed to Sigy abbey. The Pays de Bray, a damp gap in the chalk plateaus, kept the grass — and so the cows — going there.",
    fabrication:
      "Lactic curd drained then kneaded with already-aged cheese, which speeds up the bloom, moulded into one of five traditional shapes and dry-salted. At least ten days in a drying room.",
    conservation: "In the refrigerator in its paper, 2 weeks.",
    service: "At room temperature, on fresh bread with a glass of cider.",
    anecdote:
      "The heart shape is said to date from the Hundred Years' War: Bray farm women reportedly gave them to the English soldiers they kept company with — a nice story nothing really documents.",
    notes: ['Mushroom', 'Cream', 'Salt', 'Hazelnut'],
    accords: {
      vin: 'Champagne, white Burgundy, Bourgueil',
      biere: 'Wheat beer',
      cidre: 'Brut cider from the Pays de Bray',
      whisky: 'Mild single malt',
      pain: 'Country bread, traditional baguette',
    },
  },
  'pave-auge': {
    histoire:
      "A thicker, far more aged Pont-l'Évêque: two to three months instead of two weeks, giving it a denser paste and a noticeably stronger taste. Without an appellation, it remains a speciality of Auge-country affineurs.",
    fabrication:
      "The same curd as Pont-l'Évêque, moulded into a thick square, rind washed with salted water every week for two to three months.",
    conservation: "In the refrigerator in its paper, 3 weeks.",
    service: "At room temperature, at the end of a meal with a keeping cider.",
    anecdote:
      "Its thickness is what defines it: it's the « pavé » (paving-stone) format that slows the ageing at the centre and allows for those three months in the cellar.",
    notes: ['Barnyard', 'Butter', 'Hazelnut', 'Humid cellar'],
    accords: {
      vin: 'Pommeau, Bourgueil, Saint-Émilion',
      biere: 'Norman amber ale',
      cidre: 'Brut cider, calvados',
      whisky: 'Lightly peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'petit-suisse': {
    histoire:
      "Born around 1850 on the farm of Mme Hérould, at Villers-sur-Auchy, from the idea of a Swiss cowherd who suggested adding cream to the curd. Charles Gervais, a young clerk who came to buy supplies, bought the recipe and industrialised it at Gournay-en-Bray. Since the Pays de Bray straddles two regions, the cheese was born on the Oise side and made its career on the Norman side — hence the sources that call it Picard.",
    fabrication:
      "Milk enriched with cream, renneted then very finely drained, moulded in a paper band that gives it its shape and is removed before eating. No ageing: it is eaten within the week.",
    conservation: "Refrigerator, one week, in its packaging.",
    service: "Plain, sweetened, with jam or red berries.",
    anecdote:
      "It is neither Swiss nor originally Norman, and not salted either: one of the few French cheeses made without salt, which is why it's eaten sweet.",
    notes: ['Cream', 'Fresh milk', 'Butter', 'Tangy'],
    accords: {
      cidre: 'Sweet cider',
      biere: 'Wheat beer',
      pain: 'Brioche, sandwich bread, red berries',
    },
  },
  'trappe-bricquebec': {
    histoire:
      "Made since the 19th century by the Trappist monks of the Abbaye Notre-Dame de Grâce, at Bricquebec, in the heart of the Cotentin. Long sold under the name « Providence », it belongs to that family of pressed-paste abbey cheeses that monastic communities spread across France.",
    fabrication:
      "Curd pressed into a wheel, brine-salted, then rind washed with salted water for six to eight weeks in the abbey's cellars.",
    conservation: "In the refrigerator in its paper, 3 weeks.",
    service: "At room temperature, at the end of a meal or at breakfast.",
    anecdote:
      "The Trappists spread their technique as far as Quebec and Japan: « trappe » is less a cheese than a method, passed from abbey to abbey.",
    notes: ['Cream', 'Butter', 'Hazelnut', 'Hay'],
    accords: {
      vin: 'Light Bourgueil, white Anjou',
      biere: 'Abbey beer',
      cidre: 'Brut cider from the Cotentin',
      whisky: 'Mild single malt',
      pain: 'Sourdough country bread',
    },
  },
  'fromage-de-monsieur': {
    histoire:
      "Created in the late 19th century near Vimoutiers by a farmer whose actual name was Monsieur Fromage — the product's name is his surname, not a form of address. Thicker and richer than a Camembert, it's a cream-enriched cousin of it.",
    fabrication:
      "Milk enriched with cream, curd ladled into a thick disc, seeded with Penicillium candidum. Five to six weeks of ageing, longer than a Camembert because of its thickness.",
    conservation: "In the refrigerator in its box, 10 days.",
    service: "At room temperature, when the paste is properly runny.",
    anecdote:
      "The double coincidence of the name has made it a classic dairy-shop riddle: asking for « a cheese from Mr. Cheese » isn't a joke.",
    notes: ['Cream', 'Mushroom', 'Butter', 'Hazelnut'],
    accords: {
      vin: 'Champagne, white Burgundy',
      biere: 'Wheat beer',
      cidre: "Brut cider from the Pays d'Auge",
      whisky: 'Mild single malt',
      pain: 'Traditional baguette, walnut bread',
    },
  },
  'la-bouille': {
    histoire:
      "Invented in the late 19th century by Mme Dupuis, in the village of La Bouille, on a bend of the Seine downstream from Rouen. The same double-cream logic as Fromage de Monsieur, its Auge-country contemporary, but a longer ageing and a stronger taste.",
    fabrication:
      "Milk enriched with cream, ladled into moulds, seeded for a bloomy rind, then six weeks of ageing in a humid cellar until the paste runs.",
    conservation: "In the refrigerator in its box, 10 days.",
    service: "By the spoon, at room temperature, with a glass of pommeau.",
    anecdote:
      "Its production has stopped several times for lack of a successor: it's a cheese that has survived through repeated revivals rather than continuity.",
    notes: ['Cream', 'Mushroom', 'Barnyard', 'Hazelnut'],
    accords: {
      vin: 'Champagne, white Burgundy, Pommeau',
      biere: 'Wheat beer',
      cidre: 'Brut cider',
      whisky: 'Mild single malt',
      pain: 'Traditional baguette, walnut bread',
    },
  },
  'carre-de-bray': {
    histoire:
      "The small format of the Pays de Bray, sold very young at the Forges-les-Eaux and Gournay markets. Close to Neufchâtel in its paste, it differs by a much shorter ageing: it's eaten almost fresh.",
    fabrication:
      "Lactic curd drained, moulded into small squares, salted and seeded with Penicillium candidum. One to two weeks in a drying room is enough.",
    conservation: "In the refrigerator in its box, one week.",
    service: "Fresh, at breakfast or at the end of a meal.",
    anecdote:
      "It's the breakfast cheese of the Bray country: barely drained, on buttered bread, it's closer to fresh cheese than to an aged soft one.",
    notes: ['Fresh milk', 'Cream', 'Mushroom', 'Tangy'],
    accords: {
      vin: 'Bourgogne aligoté, Champagne',
      biere: 'Wheat beer',
      cidre: 'Sweet cider from the Pays de Bray',
      whisky: 'Light single malt',
      pain: 'Traditional baguette, country bread',
    },
  },
  'brique-cotentin': {
    histoire:
      "The Cotentin is cow country, and the few goat farms that have settled there since the 1980s stand out as the exception. The brick shape, simple to mould and turn, has become the most common format there.",
    fabrication:
      "Lactic curd drained for 24 hours, moulded into a brick, dry-salted then seeded for a bloomy rind. Two to three weeks in a drying room.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "At room temperature, with a brut cider from the Cotentin.",
    anecdote:
      "It's a seaside goat cheese: the herds graze pastures a few hundred metres from the Channel, in a climate that keeps the grass green all year.",
    notes: ['Fresh goaty', 'Cream', 'Hazelnut', 'Hay'],
    accords: {
      vin: 'Muscadet, white Sancerre',
      biere: 'Wheat beer',
      cidre: 'Brut cider from the Cotentin',
      whisky: 'Floral single malt',
      pain: 'Country bread, multigrain bread',
    },
  },
  excelsior: {
    histoire:
      "Created in 1890 in the Pays de Bray, it's one of the very first French cheeses deliberately enriched with cream. Brillat-Savarin, developed in the 1930s by the affineur Henri Androuët, descends directly from it: the same principle, a different name, and far more success.",
    fabrication:
      "Milk heavily enriched with cream, curd moulded without pressing, seeded with Penicillium candidum, aged three to four weeks in a drying room.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, at the end of a meal or with a Champagne.",
    anecdote:
      "Its other name, « Délice des Godets », comes from the place-name of the original farm: two commercial names for a single cheese, which long blurred its identity.",
    notes: ['Cream', 'Butter', 'Mushroom', 'Hazelnut'],
    accords: {
      vin: 'Champagne, white Burgundy, Sauternes',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      whisky: 'Mild single malt',
      pain: 'Traditional baguette, brioche',
    },
  },
  coutances: {
    histoire:
      "A triple-cream cheese from central Manche, born in the 20th century in the Coutances dairy basin, one of the richest in Normandy. It takes the region's cream-enrichment logic, launched by the Excelsior, all the way: more fat than paste, a texture that owes as much to butter as to cheese.",
    fabrication:
      "Milk heavily enriched with cream, curd moulded without pressing then seeded with Penicillium candidum. Three to four weeks in a drying room are enough: the fat content slows ageing at the centre.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, at the end of a meal or on fresh bread.",
    anecdote:
      "« Triple cream » isn't a figure of speech but a regulatory category: past 75% fat on dry matter, a cheese qualifies for it.",
    notes: ['Cream', 'Butter', 'Mushroom', 'Hazelnut'],
    accords: {
      vin: 'Champagne, white Burgundy',
      biere: 'Wheat beer',
      cidre: 'Sweet cider from the Cotentin',
      whisky: 'Mild single malt',
      pain: 'Traditional baguette, brioche',
    },
  },

  // Hauts-de-France (18 fiches, toutes dans cheeses-hauts-de-france.ts).
  maroilles: {
    histoire:
      "Developed around 960 by the monks of Maroilles abbey, who required Thiérache farmers to deliver them a cheese at Midsummer: the « rule of Maroilles » fixed the cheese long before the AOC did, in 1976.",
    fabrication:
      "Curd moulded into a square, drained then dry-salted. The rind is brushed and washed with salted water twice a week for at least five weeks, until it turns orange-red.",
    conservation: "In the refrigerator in its box, 2 weeks, well away from other food.",
    service: "At room temperature, or melted in a flamiche with an amber ale.",
    anecdote:
      "It's the heart of the flamiche, the hot tart of the Nord, and the common ancestor of most of the region's other cheeses: Dauphin, Boulette d'Avesnes and Vieux-Lille all derive from it.",
    notes: ['Barnyard', 'Salt', 'Yeast', 'Undergrowth'],
    accords: {
      vin: 'Champagne, full-bodied red Burgundy',
      biere: 'Amber ale from the Nord, triple',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  mimolette: {
    histoire:
      "After Colbert banned the import of Dutch cheeses, Flanders started making its own edam — tinted with annatto to tell it apart from the original. Hence its two names: « Boule de Lille » here, « Vieux Hollande » elsewhere.",
    fabrication:
      "Curd heated, pressed into a ball then coloured with annatto. Aged from two months for the young version to over two years for the extra-mature, with regular brushing to keep the cheese mite population in check.",
    conservation: "In the refrigerator in a cloth, 1 month for a wedge.",
    service: "Cubed as an aperitif with a beer from the Nord, or grated over a gratin.",
    anecdote:
      "The craters on its rind are the work of cheese mites, deliberately introduced by the affineur: they burrow into the surface, which aerates the paste and speeds up ageing.",
    notes: ['Hazelnut', 'Caramel', 'Dried fruit', 'Salty'],
    accords: {
      vin: 'Tawny port, red Burgundy',
      biere: 'Amber ale from the Nord',
      cidre: 'Brut cider',
      whisky: 'Speyside single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'vieux-lille': {
    histoire:
      "A Maroilles taken to the extreme: instead of being washed with salted water, it soaks in brine for three months. Lille's miners and textile workers carried it down the mine or to the workshop — a cheese salty enough to offset the sweat.",
    fabrication:
      "A young Maroilles submerged in brine for three months, turned regularly. The salt halts the bloom and leaves the rind grey and damp, while the paste absorbs it.",
    conservation: "In the refrigerator, tightly wrapped, 2 weeks.",
    service: "In thin slices, with a jenever or a bière de garde.",
    anecdote:
      "Its nicknames say it all: « stinker of Lille », « macerated stinker ». It's regularly listed among France's most pungent cheeses, and its fans wear that proudly.",
    notes: ['Salt', 'Ammonia', 'Barnyard', 'Yeast'],
    accords: {
      vin: 'Houlle jenever, Champagne',
      biere: 'Bière de garde, triple',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, rye bread',
    },
  },
  rollot: {
    histoire:
      "A Picard cheese from the village of Rollot, in the Santerre. Legend has it that Louis XIV, having tasted it on a farm in the area, granted its maker an annuity — a story every French village tells about its own cheese.",
    fabrication:
      "Curd moulded into a disc or a heart, drained without pressing, rind washed with salted water mixed with annatto for four to six weeks.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, with a bière de garde.",
    anecdote:
      "The heart-shaped version came later than the round one: a 20th-century sales gimmick, as with the Norman Neufchâtel.",
    notes: ['Barnyard', 'Salt', 'Butter', 'Yeast'],
    accords: {
      vin: 'Champagne, red Burgundy',
      biere: 'Picard bière de garde',
      cidre: 'Brut cider',
      whisky: 'Lightly peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'boulette-avesnes': {
    histoire:
      "Born of recycling: Avesnois farmers kneaded failed Maroilles or trimmings with parsley, tarragon, pepper and cloves, before rolling them in paprika. Nothing went to waste on a Thiérache farm.",
    fabrication:
      "Fresh Maroilles or fromage-blanc paste kneaded with the herbs and spices, hand-moulded into a cone, dried then washed with beer and coated in paprika. Two to three months in the cellar.",
    conservation: "In the refrigerator, wrapped, 3 weeks.",
    service: "In small slices, with a bière de garde or a jenever.",
    anecdote:
      "Its red coat and cone shape earned it the nickname « suprême des ducs » — a gala-worthy name for what remains a leftovers cheese.",
    notes: ['Parsley', 'Tarragon', 'Pepper', 'Paprika'],
    accords: {
      vin: 'Jenever, Champagne',
      biere: 'Bière de garde, triple from the Nord',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, rye bread',
    },
  },
  dauphin: {
    histoire:
      "A Maroilles flavoured with tarragon and pepper, whose shape and name are said to come from a visit by Louis XIV to the Thiérache: the cheesemakers are said to have moulded their cheese into a dolphin in honour of the king's son, and received a tax exemption in return.",
    fabrication:
      "Maroilles curd kneaded with tarragon, parsley and crushed pepper, moulded then washed with salted water for two to four months.",
    conservation: "In the refrigerator in its paper, 2 weeks.",
    service: "At room temperature, in thin slices on country bread.",
    anecdote:
      "The same cheese is also sold as a bar — the baguette de Thiérache or baguette laonnaise — and as a diamond: these are shape names, not different cheeses. Elongated, the bar offers more rind per volume, hence a stronger taste.",
    notes: ['Tarragon', 'Pepper', 'Barnyard', 'Parsley'],
    accords: {
      vin: 'Champagne, red Burgundy',
      biere: 'Bière de garde',
      cidre: 'Brut cider',
      whisky: 'Lightly peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  bergues: {
    histoire:
      "A lean cheese from maritime Flanders, made from the skimmed milk left over after buttermaking — the richness went to butter, the rest became cheese. Its rind is washed with beer, in a region that has always brewed more than it made wine.",
    fabrication:
      "Partly skimmed milk renneted, curd moulded into a flat disc, then aged two to three months in a humid cellar with regular washes of beer and salted water.",
    conservation: "In the refrigerator in its paper, 3 weeks.",
    service: "In slices at room temperature, or melted over potatoes.",
    anecdote:
      "It's one of the few genuinely lean French cheeses: 20% fat, where most soft cheeses run around 45%.",
    notes: ['Beer', 'Skimmed milk', 'Salt', 'Humid cellar'],
    accords: {
      vin: 'Alsace Riesling, Champagne',
      biere: 'Blonde Flanders beer',
      cidre: 'Brut cider',
      whisky: 'Light single malt',
      pain: 'Country bread, rye bread',
    },
  },
  'mont-des-cats': {
    histoire:
      "Made since 1890 by the Trappist monks of the Abbaye du Mont des Cats, on one of the few hills of French Flanders. The community lived off this cheese for a long time, the region's only sizeable monastic production.",
    fabrication:
      "Curd pressed into a wheel, brine-salted, rind washed with salted water for six to eight weeks in the abbey's cellars.",
    conservation: "In the refrigerator in its paper, 3 weeks.",
    service: "At room temperature, on a cheese board or at breakfast.",
    anecdote:
      "During the First World War, the abbey served as a military hospital and the dairy stopped: it only resumed in 1926, after the buildings were fully rebuilt.",
    notes: ['Cream', 'Butter', 'Hazelnut', 'Hay'],
    accords: {
      vin: 'Alsace Pinot Blanc, white Burgundy',
      biere: 'Abbey beer from the Nord',
      cidre: 'Brut cider',
      whisky: 'Mild single malt',
      pain: 'Sourdough country bread',
    },
  },
  'sire-de-crequy': {
    histoire:
      "A farmhouse cheese from the Sept-Vallées, named after the sires of Créquy, medieval Artois lords. Its production, interrupted in the 20th century, was revived in the 1980s by a farm in the village.",
    fabrication:
      "Curd moulded without pressing, drained then salted, rind washed with salted water over five weeks in a humid cellar.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, with a bière de garde.",
    anecdote:
      "It's sometimes sold macerated in beer or jenever, in the manner of a Vieux-Lille: the region happily treats its washed rinds with local spirits.",
    notes: ['Barnyard', 'Butter', 'Salt', 'Yeast'],
    accords: {
      vin: 'Champagne, light red Burgundy',
      biere: 'Pas-de-Calais bière de garde',
      cidre: 'Brut cider',
      whisky: 'Lightly peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'vieux-boulogne': {
    histoire:
      "Created in the 1980s by a farmer from the Boulonnais who washes his rind with beer brewed nearby at Saint-Léonard. A recent cheese with no old tradition, it has nonetheless become emblematic of the Côte d'Opale.",
    fabrication:
      "Curd moulded into a square, drained then salted, rind washed with the local beer for seven to nine weeks, which feeds the bacteria responsible for its aroma.",
    conservation: "In the refrigerator, tightly wrapped, 2 weeks.",
    service: "At room temperature, with the beer used to wash it.",
    anecdote:
      "A British study in 2004, using an electronic nose, ranked it the most pungent cheese in the world, ahead of Époisses — a title its producers happily display.",
    notes: ['Beer', 'Barnyard', 'Yeast', 'Salt'],
    accords: {
      vin: 'Champagne, red Burgundy',
      biere: 'Saint-Léonard beer, bière de garde',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, rye bread',
    },
  },
  'crayeux-de-roncq': {
    histoire:
      "Created at Roncq, on the outskirts of Lille, by a farm looking to make a Maroilles that kept a firm centre. The result has a bit of both: the washed rind and aroma of the Nord, the chalky texture of a younger cheese.",
    fabrication:
      "Curd moulded into a square, slowly drained, rind washed with salted water for six to eight weeks, keeping the cellar cool enough that the centre doesn't fully age.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, with a bière de garde.",
    anecdote:
      "Its name comes from that centre, which stays white and crumbly — the « crayeux », or chalky part — that the ageing must never be allowed to erase.",
    notes: ['Barnyard', 'Butter', 'Salt', 'Hazelnut'],
    accords: {
      vin: 'Champagne, white Burgundy',
      biere: 'Bière de garde from the Nord',
      cidre: 'Brut cider',
      whisky: 'Lightly peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'coeur-arras': {
    histoire:
      "A recently created Artois cheese, washed with beer as regional custom dictates, and moulded into a heart — a format that made the Norman Neufchâtel's success and that the Artois has adopted for its own.",
    fabrication:
      "Curd moulded into a heart, drained without pressing, rind washed with beer and salted water for five to six weeks.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, whole on the board for the shape's sake.",
    anecdote:
      "Arras is a city of beer and belfries: the cheese plays the local card to the full, washed with a bière de garde brewed in the département.",
    notes: ['Beer', 'Barnyard', 'Salt', 'Butter'],
    accords: {
      vin: 'Champagne, light red Burgundy',
      biere: 'Artois bière de garde',
      cidre: 'Brut cider',
      whisky: 'Lightly peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'fleur-audresselles': {
    histoire:
      "A recently created cheese from the fishing village of Audresselles, on the Côte d'Opale, washed with beer brewed in the Boulonnais. It belongs to the small family of coastal washed-rind cheeses the region has developed since the 1980s, alongside Sablé de Wissant and Vieux Boulogne.",
    fabrication:
      "Curd moulded without pressing, drained then salted, rind washed with beer and salted water for five to six weeks in a humid cellar.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, with a blonde beer from the coast.",
    anecdote:
      "The Côte d'Opale has no old cheesemaking tradition: all its cheeses were born of the farming revival of recent decades, and all are washed with beer.",
    notes: ['Beer', 'Barnyard', 'Butter', 'Iodine'],
    accords: {
      vin: 'Champagne, white Burgundy',
      biere: "Blonde beer from the Côte d'Opale",
      cidre: 'Brut cider',
      whisky: 'Lightly peated single malt',
      pain: 'Country bread, rye bread',
    },
  },
  'sable-wissant': {
    histoire:
      "Washed with beer brewed at Wissant, between the two capes of the Côte d'Opale. Its name comes as much from the sand of the nearby dunes as from the colour of its rind: a maritime terroir cheese, in a region that had none.",
    fabrication:
      "Curd moulded into a square, drained without pressing, rind washed with the local cervoise and salted water for six weeks.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, with the cervoise from Wissant.",
    anecdote:
      "It's often served alongside the beer used to wash it — a tautological pairing the local breweries happily encourage.",
    notes: ['Beer', 'Yeast', 'Barnyard', 'Butter'],
    accords: {
      vin: 'Champagne, Alsace Pinot Gris',
      biere: 'Wissant cervoise, bière de garde',
      cidre: 'Brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'tome-trois-monts': {
    histoire:
      "Named after the hills of Flanders — Mont Cassel, Mont des Cats, Mont Noir — the few rises that break up the plain of the Nord. A pressed paste rubbed with bière de garde throughout its ageing, in a region that has always brewed more than it has made wine.",
    fabrication:
      "Curd pressed into a wheel, brine-salted, then aged three to six months in a cellar with regular rubbings of bière de garde, which colours and flavours the rind.",
    conservation: "In the refrigerator in its paper, 1 month.",
    service: "In slices at room temperature, with an amber bière de garde.",
    anecdote:
      "The « three hills » top out at 176 metres: enough, in Flanders, to lend their name to both a landscape and a cheese.",
    notes: ['Bière de garde', 'Hazelnut', 'Malt', 'Hay'],
    accords: {
      vin: 'Alsace Riesling, white Burgundy',
      biere: 'Flanders bière de garde',
      cidre: 'Brut cider',
      whisky: 'Speyside single malt',
      pain: 'Country bread, multigrain bread',
    },
  },
  'fort-bethune': {
    histoire:
      "A cheese of the miners of the Béthune coalfield: leftover cheese was kneaded with butter, leek, pepper and sometimes beer, then left to ferment in a pot for weeks. Nothing was thrown away, and the result had real body.",
    fabrication:
      "Leftover cheeses and fromage blanc kneaded with butter, salt, pepper and herbs, then potted for two to three months of fermentation at cellar temperature, with regular stirring.",
    conservation: "In the refrigerator, jar closed, 2 months; one week once opened.",
    service: "Spread on toasted bread or melted over potatoes, with a bière de garde.",
    anecdote:
      "It's a northern cousin of Lyon's fromage fort and of cancoillotte: wherever cheese was scarce, people invented a way to make the leftovers last.",
    notes: ['Fermented', 'Leek', 'Pepper', 'Salt'],
    accords: {
      vin: 'Jenever, Champagne',
      biere: 'Bière de garde, triple',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Toasted country bread, potatoes',
    },
  },
  manicamp: {
    histoire:
      "A Picard cheese from around Manicamp, in the Aisne's stretch of the Oise valley. Of the same family as Maroilles, it stands apart with a beer wash rather than salted water alone, and a slightly smaller format.",
    fabrication:
      "Curd moulded into a square, drained then salted, rind washed with beer and salted water for two to three months in a humid cellar.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, with a Picard bière de garde.",
    anecdote:
      "Its production nearly died out in the 20th century: it now survives at only a handful of workshops in the Aisne.",
    notes: ['Beer', 'Barnyard', 'Salt', 'Yeast'],
    accords: {
      vin: 'Champagne, light red Burgundy',
      biere: 'Picard bière de garde',
      cidre: 'Brut cider',
      whisky: 'Lightly peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'tricorne-picardie': {
    histoire:
      "A Picard farmhouse cheese moulded into a tricorne, the three-cornered hat of Ancien Régime officers. It's made from goat's milk, sometimes sheep's, in a cattle-farming region where small goat herds remain the exception.",
    fabrication:
      "Lactic curd drained for 24 hours, hand-moulded into a tricorne, dry-salted, then aged two to three weeks in a drying room. Eaten fresh or aged.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "At room temperature, whole on the board for the shape's sake.",
    anecdote:
      "The shape is a pure marketing device: three points that dry faster than the centre, and a cheese recognisable from afar on a stall.",
    notes: ['Fresh goaty', 'Hazelnut', 'Hay', 'Cream'],
    accords: {
      vin: 'Champagne, white Sancerre',
      biere: 'Wheat beer',
      cidre: 'Brut cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, multigrain bread',
    },
  },

  // Corse (10 fiches, toutes dans cheeses-corse.ts).
  brocciu: {
    histoire:
      "The island's signature cheese, and the only one born of a by-product: the whey left over from tomme-making is reheated with whole milk, which makes the proteins flocculate again. « Brocciu » comes from brousse, the same technique as in Provence. AOC in 1983, AOP in 1998.",
    fabrication:
      "The whey is heated to 35 °C, mixed with whole milk and salt, then brought to 90 °C: the proteins rise to the surface and are skimmed off into reed baskets. The brocciu passu is then salted and dried for at least three weeks.",
    conservation: "Fresh, 48 hours in the refrigerator; passu, several weeks.",
    service: "Fresh with honey or in fiadone, the Corsican cake; passu, grated over pasta.",
    anecdote:
      "A Corsican saying goes that « whoever hasn't tasted brocciu doesn't know Corsica ». It only exists from November to June: outside the ewes' lactation period, there's no whey to make it from.",
    notes: ['Fresh milk', 'Cream', 'Almond', 'Sweet'],
    accords: {
      vin: 'White Patrimonio, Corsican Vermentinu',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread, fiadone, brocciu with honey',
    },
  },
  niolo: {
    histoire:
      "A cheese from the Niolu, the high Golo valley ringed by peaks over 2,000 metres. Shepherds moved their flocks between the summer pastures and the Balagne, and the cheese travelled with them: it's one of the oldest and most powerful on the island.",
    fabrication:
      "Curd moulded into a square, drained, salted with sea salt, then washed and rubbed with brine for three to four months in a humid cellar.",
    conservation: "In the refrigerator, wrapped, 3 weeks, away from other food.",
    service: "At room temperature, with a full-bodied Corsican red and fig jam.",
    anecdote:
      "It's reputed to be strong enough to « walk on its own » — a Corsican hyperbole that mostly speaks to the intensity of its brine-washed rind.",
    notes: ['Sheepfold', 'Salt', 'Maquis', 'Sharp'],
    accords: {
      vin: 'Red Patrimonio, Vin de Corse Calvi',
      biere: 'Corsican amber ale',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, fig bread',
    },
  },
  bastelicacciu: {
    histoire:
      "A cheese from Bastelica, a mountain village above Ajaccio, where sheep farming has remained the main activity. Mild and milky when young, it develops the hazelnut aromas that make its reputation as it ages.",
    fabrication:
      "Curd moulded without pressing, drained then salted, the rind forming naturally in the cellar. Three weeks is enough for a mild cheese, three months for a runny, full-flavoured centre.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, with a white Ajaccio.",
    anecdote:
      "It's one of the few Corsican cheeses not washed: the island largely favours brine-washed rinds, better suited to its humid cellars.",
    notes: ['Hazelnut', 'Cream', 'Sheepfold', 'Maquis'],
    accords: {
      vin: 'White Ajaccio, Vermentinu',
      biere: 'Corsican blonde lager',
      cidre: 'Brut cider',
      whisky: 'Mild single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  calinzana: {
    histoire:
      "A cheese from the Balagne, the agricultural plain of the north-west long known as « the garden of Corsica ». Calenzana, at the foot of Monte Grosso, is its reference village: this is where Niolu shepherds brought their flocks down to winter.",
    fabrication:
      "Curd moulded into a square, drained, salted with sea salt then washed regularly with brine for two to three months.",
    conservation: "In the refrigerator, wrapped, 3 weeks.",
    service: "At room temperature, with a Calvi wine and fig jam.",
    anecdote:
      "The cheese is inseparable from transhumance: the Balagne took in for winter the flocks that spent summer in the highlands, and the two regions share nearly identical techniques.",
    notes: ['Salt', 'Sheepfold', 'Maquis', 'Sharp'],
    accords: {
      vin: 'Vin de Corse Calvi, white Patrimonio',
      biere: 'Corsican amber ale',
      cidre: 'Brut cider',
      whisky: 'Lightly peated single malt',
      pain: 'Country bread, fig bread',
    },
  },
  sartinesi: {
    histoire:
      "A pressed cheese from the Sartenais, in the granite south of the island. Some shepherds dry it above the hearth, which gives it a subtle smoky note — a legacy of houses where the living room also served as a drying room.",
    fabrication:
      "Curd pressed into a wheel, dry-salted, then aged three to six months in a cellar or ventilated room, with regular brushing. The smoking, when it happens, is as light and incidental as it is traditional.",
    conservation: "In the refrigerator in a cloth, 1 month.",
    service: "Shaved, with a red from Sartène and Corsican charcuterie.",
    anecdote:
      "Sartène, which Prosper Mérimée called « the most Corsican of Corsican towns », gave its name to the cheese as it did to the vineyard that accompanies it.",
    notes: ['Sheep', 'Hazelnut', 'Smoked', 'Maquis'],
    accords: {
      vin: 'Red Sartène, Figari',
      biere: 'Corsican amber ale',
      cidre: 'Brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, fig bread',
    },
  },
  venaco: {
    histoire:
      "A cheese from the centre of the island, around Venaco and the Tavignano valley. It's the most typical of the Corsican washed-rind family, and the one islanders most readily name when asked for a cheese « with character ».",
    fabrication:
      "Curd moulded into a square, drained then salted with sea salt, rind washed with brine over three months in the cellar, until it turns orange-brown.",
    conservation: "In the refrigerator, wrapped, 3 weeks, away from other food.",
    service: "At room temperature, with a red Patrimonio.",
    anecdote:
      "Its square shape sets it apart at a glance from the round tommes of the south: on the island, shape tells you the micro-region before technique does.",
    notes: ['Sheepfold', 'Salt', 'Sharp', 'Maquis'],
    accords: {
      vin: 'Red Patrimonio, Vin de Corse Coteaux du Cap',
      biere: 'Corsican amber ale',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, fig bread',
    },
  },
  'brin-damour': {
    histoire:
      "Created in the 1950s and become the island's cheese postcard: a square of sheep's cheese rolled in maquis herbs — mainly savory and rosemary — with a few juniper berries and small red chillies pressed on top.",
    fabrication:
      "Sheep's-milk curd moulded into a square, drained and salted, then hand-rolled in a mix of dried maquis herbs. One to three months of ageing, during which the aromas migrate from the rind into the paste.",
    conservation: "In the refrigerator in its paper, 3 weeks.",
    service: "At room temperature, herbs left on, with a Corsican white.",
    anecdote:
      "« Fleur du maquis » and « Brin d'amour » name the same cheese: two commercial names born at the same time, with neither ever really winning out.",
    notes: ['Savory', 'Rosemary', 'Juniper', 'Sheep'],
    accords: {
      vin: 'Corsican Vermentinu, white Patrimonio',
      biere: 'Corsican blonde lager',
      cidre: 'Brut cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, fig bread',
    },
  },
  'tomme-corse': {
    histoire:
      "A generic name for the island's pressed cheeses, made wherever there are sheep. Corsican affineurs have taken to rubbing some wheels with local wine or beer, which colours the rind and flavours the paste — a recent practice that has become a signature.",
    fabrication:
      "Curd pressed into a wheel, salted with sea salt, then aged four months to a year in the cellar, with regular brushing — with wine or beer for the flavoured versions.",
    conservation: "In the refrigerator in a cloth, 1 month.",
    service: "Shaved, with Corsican charcuterie and a glass of Patrimonio.",
    anecdote:
      "Some of the production goes to the mainland labelled simply « tomme de brebis », with no mention of Corsica: the island exports its milk more than its name.",
    notes: ['Sheep', 'Toasted hazelnut', 'Maquis', 'Hay'],
    accords: {
      vin: 'Red Patrimonio, Muscat du Cap Corse',
      biere: 'Corsican amber ale',
      cidre: 'Brut keeping cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, fig bread',
    },
  },
  'frais-maquis': {
    histoire:
      "The fresh version of the herb-cheese tradition: a barely drained curd, rolled in savory, mint and rosemary picked from the maquis, eaten within the week. It's the cheese of summer markets and roadside stalls.",
    fabrication:
      "Lactic curd briefly drained, hand-moulded, lightly salted then rolled in a mix of fresh or dried herbs. No ageing.",
    conservation: "In the refrigerator, one week.",
    service: "Well chilled, as an aperitif or on toasted bread with a drizzle of olive oil.",
    anecdote:
      "The maquis supplies the entire seasoning here: the same herbs flavour the island's charcuterie and game.",
    notes: ['Savory', 'Mint', 'Fresh milk', 'Rosemary'],
    accords: {
      vin: 'Corsican Vermentinu, white Ajaccio',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread, toasted bread',
    },
  },
  'casgiu-merzu': {
    histoire:
      "A tomme deliberately left open to the cheese fly: the larvae digest the paste, which turns creamy and extremely strong. The same practice exists in Sardinia under the name casu marzu. It's a family tradition, never a commercial product.",
    fabrication:
      "A sheep's-milk tomme whose rind is opened to let the fly lay its eggs there. The larvae break down the fat over several months, until the paste turns runny.",
    conservation: "Doesn't keep: eaten within days of opening.",
    service: "Spread on country bread, with a Corsican red — the larvae removed, or not.",
    anecdote:
      "Its sale is banned under European health regulations: it's passed only between shepherds and eaten on the spot, which makes it as much a piece of folklore as a cheese.",
    notes: ['Ammonia', 'Fermented', 'Sharp', 'Sheepfold'],
    accords: {
      vin: 'Full-bodied Corsican red, myrtle eau-de-vie',
      biere: 'Corsican amber ale',
      pain: 'Country bread',
    },
  },

  // Grand Est (12 fiches, toutes dans cheeses-grand-est.ts).
  munster: {
    histoire:
      "Developed by the Benedictine monks of Munster abbey in the 7th century, in the valley that owes it its name — « monastery » in German. The cheese crossed the Vosges ridge with the herds: on the Lorraine side it's called géromé, after Gérardmer, and the AOP covers both slopes under the name munster-géromé.",
    fabrication:
      "Curd moulded without pressing, drained then salted, rind washed with salted water two to three times a week for at least three weeks — this washing is what establishes the red bacteria and the cheese's power.",
    conservation: "In the refrigerator in its box, 2 weeks, well away from other food.",
    service: "At room temperature with cumin seeds, or melted over jacket potatoes.",
    anecdote:
      "It's traditionally served with cumin seeds on the side, never mixed in: everyone doses the spice that tempers its power to their own taste.",
    notes: ['Barnyard', 'Cumin', 'Salt', 'Melted butter'],
    accords: {
      vin: 'Gewurztraminer, Alsace Pinot Gris',
      biere: 'Alsace amber ale',
      cidre: 'Brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, cumin bread',
    },
  },
  bargkass: {
    histoire:
      "« Mountain cheese » in Alsatian: it's the tomme of the marcaires, the shepherd-farmers who took their herds up to the High Vosges pastures in summer. It served as a keeping cheese, when munster was eaten quickly.",
    fabrication:
      "Curd pressed into a wheel, brine-salted, then aged two to six months in a cellar on spruce boards, with regular brushing.",
    conservation: "In the refrigerator in its paper, 1 month.",
    service: "In slices or melted, the traditional base of tarte flambée with cheese.",
    anecdote:
      "It's spelled five or six different ways depending on the valley — bargkass, bergkäs, barikass — a sign it was passed down by ear long before it was written.",
    notes: ['Hazelnut', 'Hay', 'Butter', 'Cellar'],
    accords: {
      vin: 'Alsace Riesling, Sylvaner',
      biere: 'Alsace blonde lager',
      cidre: 'Brut cider',
      whisky: 'Mild single malt',
      pain: 'Country bread, cumin bread',
    },
  },
  'coeur-massif': {
    histoire:
      "A farmhouse pressed cheese from the High Vosges, halfway between bargkass and munster: pressed like the first, but with the washed rind of the second. A recent workshop creation, born of the massif's cheesemaking revival.",
    fabrication:
      "Curd pressed into a wheel, brine-salted, then rind washed with salted water for two to three months in the cellar.",
    conservation: "In the refrigerator in its paper, 3 weeks.",
    service: "At room temperature, or melted over potatoes.",
    anecdote:
      "The Vosges massif long lived off munster alone: its pressed cheeses, easier to keep, are a late diversification of the high-altitude farms.",
    notes: ['Butter', 'Hazelnut', 'Hay', 'Cellar'],
    accords: {
      vin: 'Alsace Pinot Gris, Riesling',
      biere: 'Vosges amber ale',
      cidre: 'Brut cider',
      whisky: 'Mild single malt',
      pain: 'Country bread, cumin bread',
    },
  },
  brouere: {
    histoire:
      "Created in the 1980s by a dairy in Vagney that wanted to give the Vosges a gruyère of their own. The name comes from « brou », the High Vosges heather, and the rind of each wheel is engraved with stag-hunting scenes.",
    fabrication:
      "Milk heated after renneting, curd pressed into a large wheel, brine-salted, then aged at least six months in the cellar, with regular rubbing.",
    conservation: "In the refrigerator in a cloth, 1 month.",
    service: "Shaved as an aperitif, grated, or in a Vosges-style fondue.",
    anecdote:
      "Those engravings aren't decorative by chance: they also serve as an anti-counterfeiting signature, each mould carrying its own motif.",
    notes: ['Fruity', 'Toasted hazelnut', 'Butter', 'Broth'],
    accords: {
      vin: 'Alsace Riesling, white Burgundy',
      biere: 'Malty amber ale',
      cidre: 'Brut cider',
      whisky: 'Speyside single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  'tomme-alsace': {
    histoire:
      "A generic name for the mild pressed cheeses made across the Alsace plain and foothills, without appellation or specification. Every dairy has its own: it's the everyday cheese, everything munster isn't.",
    fabrication:
      "Curd pressed into a flat wheel, brine-salted, aged six weeks to three months in the cellar with regular brushing.",
    conservation: "In the refrigerator in its paper, 3 weeks.",
    service: "In slices at breakfast, or cubed as an aperitif.",
    anecdote:
      "It's often sold flavoured with cumin, herbs or pepper — Alsace seasons its tommes the way Brittany seasons its own.",
    notes: ['Cream', 'Butter', 'Hazelnut', 'Hay'],
    accords: {
      vin: 'Sylvaner, Alsace Pinot Blanc',
      biere: 'Alsace blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Country bread, pretzel',
    },
  },
  bibeleskaes: {
    histoire:
      "Alsace's whipped fromage blanc, seasoned with garlic, shallot and chives, served with jacket potatoes — a farmhouse dish turned winstub classic. The name means « chicks' cheese », after the bibeles fed with the leftover whey.",
    fabrication:
      "Drained fromage blanc whisked with cream, salt, pepper, and chopped garlic, shallot and chives. Made the same day it's served.",
    conservation: "Refrigerator, 48 hours maximum.",
    service: "Well chilled, with hot jacket potatoes.",
    anecdote:
      "Every family has its own garlic ratio: it's a dish of proportion more than recipe, like Lyon's cervelle de canut, of which it's the Rhineland cousin.",
    notes: ['Chives', 'Garlic', 'Shallot', 'Fresh milk'],
    accords: {
      vin: 'Sylvaner, Edelzwicker',
      biere: 'Alsace blonde lager',
      cidre: 'Sweet cider',
      pain: 'Jacket potatoes, country bread',
    },
  },
  'carre-est': {
    histoire:
      "Created in the early 20th century in Lorraine to give the east a bloomy-rind cheese of its own, in a region that made none. Its square shape sets it apart from the round Camemberts and Bries it takes after.",
    fabrication:
      "Curd moulded into a square, drained without pressing, salted then seeded with Penicillium candidum. Three to four weeks in a drying room.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, at the end of a meal.",
    anecdote:
      "It also exists in an ashed version, rolled in charcoal: originally a way to extend its keeping, now simply a stall choice.",
    notes: ['Mushroom', 'Cream', 'Butter', 'Hazelnut'],
    accords: {
      vin: 'Champagne, Alsace Pinot Noir',
      biere: 'Blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Traditional baguette, country bread',
    },
  },
  coussaie: {
    histoire:
      "A small farmhouse soft cheese from the Meuse, made in very limited quantities and sold at local markets. It belongs to the same family as Carré de l'Est, taking its technique but in a round format.",
    fabrication:
      "Curd ladled into moulds, drained without pressing, salted then seeded for a bloomy rind. Three weeks in a drying room.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, at the end of a meal.",
    anecdote:
      "The Meuse, a dairy-cooperative département, counts only a handful of farmhouse cheeses: this is one of them.",
    notes: ['Cream', 'Mushroom', 'Butter', 'Hazelnut'],
    accords: {
      vin: 'White Côtes de Meuse, Champagne',
      biere: 'Lorraine blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Traditional baguette, country bread',
    },
  },
  'chevre-woevre': {
    histoire:
      "The Woëvre, a damp clay plain at the foot of the Côtes de Meuse, opened up to goat farming in the 1980s, when farmers there looked for an alternative to bulk milk collection. The cheese is sold at the Verdun and Commercy markets.",
    fabrication:
      "Lactic curd drained for 24 hours, ladled into moulds, dry-salted then aged two to four weeks in a drying room, until the rind turns bluish.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "Fresh or aged, on toasted bread with a white Côtes de Meuse.",
    anecdote:
      "The plain was known for its ponds and waterfowl long before its goats: cheesemaking here is a recent activity on old land.",
    notes: ['Fresh goaty', 'Hazelnut', 'Hay', 'Mushroom'],
    accords: {
      vin: 'White Côtes de Meuse, Loire Sauvignon',
      biere: 'Wheat beer',
      cidre: 'Brut cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, multigrain bread',
    },
  },
  arrigny: {
    histoire:
      "A cheese from the village of Arrigny, on the edge of Lac du Der, in Champagne's Perthois. It belongs to the family of cream-enriched soft cheeses Champagne developed around Chaource, its appellation neighbour.",
    fabrication:
      "Curd moulded without pressing, drained then salted, seeded with Penicillium candidum. Three to four weeks of ageing in a drying room.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, with a brut Champagne.",
    anecdote:
      "Lac du Der, France's largest artificial lake, submerged three villages in 1974: Arrigny is one of those that stayed on the shore.",
    notes: ['Cream', 'Mushroom', 'Butter', 'Hazelnut'],
    accords: {
      vin: 'Champagne, white Coteaux champenois',
      biere: 'Blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Traditional baguette, walnut bread',
    },
  },
  chaource: {
    histoire:
      "Mentioned as early as the 14th century at the Chaource markets, on the border of Burgundy and Champagne, it was paid as tithe to local lords. AOC in 1970, one of the first for a soft cheese.",
    fabrication:
      "Lactic curd with very slow draining — over 24 hours — ladled into moulds without pressing, which gives it its rich texture. Seeded with Penicillium candidum for the bloomy rind.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, at the end of a meal; pairs very well with a Chablis.",
    anecdote:
      "Its paste is deliberately kept chalky at the centre: a fully runny Chaource is an over-aged Chaource.",
    notes: ['Fresh cream', 'Mushroom', 'Hazelnut', 'Salt'],
    accords: {
      vin: 'Chablis, brut Champagne, Irancy',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      whisky: 'Floral single malt',
      pain: 'Traditional baguette, multigrain bread',
    },
  },
  langres: {
    histoire:
      "A cheese from the Langres plateau, at the hinge of Champagne and Burgundy: its AOP zone spills over into the Côte-d'Or and the Vosges. AOC since 1991, it is never turned during ageing — hence the hollow that forms on top.",
    fabrication:
      "Lactic curd moulded without pressing, rind rubbed with salted water mixed with annatto, which gives it its orange colour. Aged on one face only, which hollows out the characteristic « fontaine ».",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "By the spoon or in slices, at room temperature, with a brut Champagne.",
    anecdote:
      "A splash of Champagne or marc is poured into the « fountain » on top an hour before serving: the paste soaks it up.",
    notes: ['Barnyard', 'Salted butter', 'Annatto', 'Mushroom'],
    accords: {
      vin: 'Champagne, marc de Bourgogne, white Burgundy',
      biere: 'Triple',
      cidre: 'Brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread',
    },
  },

  // Île-de-France (11 fiches, toutes dans cheeses-ile-de-france.ts).
  'brie-meaux': {
    histoire:
      "Nicknamed « the king of cheeses » since the Congress of Vienna in 1815, where it is said to have been proclaimed as such before the representatives of thirty nations. Its birthplace is Meaux, in Seine-et-Marne, though the AOP zone stretches far to the east, into the Aube, the Marne and the Meuse, where a good share of production is now based.",
    fabrication:
      "Raw milk moulded in a single pass with the brie shovel, drained without pressing, dry-salted then seeded. At least four weeks on a rack, turned by hand.",
    conservation: "In the refrigerator in its paper, 10 days; never cut off the tip.",
    service: "At room temperature, in equal wedges cut from the centre to the edge.",
    anecdote:
      "A wheel of Brie de Meaux takes about 25 litres of milk: it's the largest of the French soft cheeses.",
    notes: ['Mushroom', 'Cream', 'Hazelnut', 'Barnyard'],
    accords: {
      vin: 'Champagne, red Burgundy, Pomerol',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      whisky: 'Mild single malt',
      pain: 'Traditional baguette, walnut bread',
    },
  },
  'brie-melun': {
    histoire:
      "Smaller, saltier and far stronger than its neighbour from Meaux, it's also older: its purely lactic curd takes more than eighteen hours to set, where Brie de Meaux is renneted in under two. AOC for both in 1980.",
    fabrication:
      "Lactic curd of more than eighteen hours, ladled into moulds, drained at length, dry-salted. At least four weeks of ageing, ten for the strongest versions.",
    conservation: "In the refrigerator in its paper, 10 days.",
    service: "At room temperature, with a full-bodied red.",
    anecdote:
      "Coulommiers is sometimes presented as a « small Brie de Melun »: it's the same world, but Melun remains the only one to claim a fully lactic curd.",
    notes: ['Barnyard', 'Mushroom', 'Salt', 'Undergrowth'],
    accords: {
      vin: 'Champagne, full-bodied red Burgundy',
      biere: 'Malty amber ale',
      cidre: 'Full-bodied brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  coulommiers: {
    histoire:
      "The « briard », as it's called in Brie country: the same paste as the great bries, but a smaller, taller format that ripens more slowly at the centre. It never obtained an AOP, which gave it an industrial career its neighbours never had.",
    fabrication:
      "Curd ladled into moulds without pressing, drained, salted then seeded with Penicillium candidum. Four weeks in a drying room, turned by hand.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, in wedges cut from the centre to the edge.",
    anecdote:
      "Its size makes it the everyday brie: a wheel of Brie de Meaux weighs six times as much and only makes sense sliced.",
    notes: ['Mushroom', 'Cream', 'Hazelnut', 'Butter'],
    accords: {
      vin: 'Champagne, light red Burgundy',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      whisky: 'Mild single malt',
      pain: 'Traditional baguette, country bread',
    },
  },
  'brie-montereau': {
    histoire:
      "Its real name is « ville-saint-jacques », after the neighbouring village where it was made. Unlike the great bries, its curd is moulded directly without going through the brie shovel, which gives a milder cheese and a much smaller format.",
    fabrication:
      "Curd moulded directly, drained without pressing, then rind washed with salted water for four to six weeks in the cellar.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, at the end of a meal.",
    anecdote:
      "It's a washed-rind brie, a rare case in a family where the bloomy rind is the rule: the ageing brings it as close to Maroilles as to brie.",
    notes: ['Cream', 'Barnyard', 'Hazelnut', 'Butter'],
    accords: {
      vin: 'Champagne, red Burgundy',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      whisky: 'Mild single malt',
      pain: 'Traditional baguette, country bread',
    },
  },
  'brie-nangis': {
    histoire:
      "A small, mild brie from the Nangis area, whose production had died out by the mid-20th century before being revived in the 1990s by a Brie-country dairy. Creamier and far milder than its appellation neighbours.",
    fabrication:
      "Curd ladled into moulds, drained without pressing, salted and seeded with Penicillium candidum. Three to four weeks in a drying room.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, on fresh bread.",
    anecdote:
      "It illustrates the Brie-country logic: a single curd declined into a dozen formats and ageing lengths, each carrying the name of its own town.",
    notes: ['Cream', 'Mushroom', 'Butter', 'Hazelnut'],
    accords: {
      vin: 'Champagne, white Burgundy',
      biere: 'Blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Traditional baguette, multigrain bread',
    },
  },
  'brie-noir': {
    histoire:
      "A brie forgotten in the cellar for six months to a year, until the rind browns and the paste hardens. Brie-country farmhands dipped it in their morning café au lait — the cheese of leftovers, turned sought-after curiosity.",
    fabrication:
      "An ordinary brie pushed well past its normal ageing, turned and brushed for six months to a year in a dry cellar, until it loses most of its moisture.",
    conservation: "In the refrigerator or a dry cellar, several months.",
    service: "In thin slivers, or dipped in a café au lait, Brie-country style.",
    anecdote:
      "Dipping it in café au lait isn't a gourmet eccentricity: it's the traditional way to eat it in the Brie region, and the only one that softens it.",
    notes: ['Roasted', 'Broth', 'Salt', 'Undergrowth'],
    accords: {
      vin: 'Full-bodied red Burgundy, marc',
      biere: 'Brown ale',
      cidre: 'Brut keeping cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, café au lait',
    },
  },
  fougerus: {
    histoire:
      "A cousin of Coulommiers, recognisable by the dried fern leaf laid on its rind. The fern isn't just decoration: it brings its own bacteria and lightly flavours the paste during ageing.",
    fabrication:
      "Curd ladled into a thick disc mould, drained, salted and seeded, then a fern leaf is placed on top for four to six weeks in a drying room.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service: "At room temperature, the fern left in place until serving.",
    anecdote:
      "It's one of the few rind decorations to actually serve a purpose — the sedge on a Livarot, by contrast, is only there to hold the cheese together.",
    notes: ['Mushroom', 'Fern', 'Cream', 'Undergrowth'],
    accords: {
      vin: 'Champagne, light red Burgundy',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      whisky: 'Mild single malt',
      pain: 'Traditional baguette, walnut bread',
    },
  },
  fontainebleau: {
    histoire:
      "A speciality of the town of Fontainebleau: drained fromage blanc whisked with whipped cream, served in a tied muslin cloth. It's less a cheese than a dessert, sold by the town's dairy shops since the 19th century.",
    fabrication:
      "Fresh fromage blanc drained in muslin, whisked and folded into equal volumes of whipped cream. Eaten the same day.",
    conservation: "In the refrigerator, 24 to 48 hours, in its muslin.",
    service: "Well chilled, sweetened, with red berries or a drizzle of honey.",
    anecdote:
      "It doesn't keep: the foam collapses within hours, which long confined it to the dairy shops of Seine-et-Marne before industrial potted versions appeared.",
    notes: ['Whipped cream', 'Fresh milk', 'Sweet', 'Vanilla'],
    accords: {
      vin: 'Demi-sec Champagne, Coteaux du Layon',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Brioche, red berries, sugar',
    },
  },
  'chevrotin-houssaye': {
    histoire:
      "A farmhouse cheese from La Houssaye-en-Brie, one of the few goat farms in a region entirely geared toward cow's milk and large-scale grain farming. It's sold at Brie-country markets and on the farm.",
    fabrication:
      "Lactic curd drained for 24 hours, ladled into moulds, dry-salted then aged two to four weeks in a drying room.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "Fresh or aged, on toasted bread.",
    anecdote:
      "It has nothing to do with the Savoie AOP Chevrotin, despite the name: the word simply means a small goat cheese, in both cases.",
    notes: ['Fresh goaty', 'Hazelnut', 'Hay', 'Cream'],
    accords: {
      vin: 'White Sancerre, Champagne',
      biere: 'Wheat beer',
      cidre: 'Brut cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, multigrain bread',
    },
  },
  'toit-de-paris': {
    histoire:
      "A small, recently created goat cheese, moulded into a mansard-roof shape as a nod to Paris's zinc rooftops. It's more an affineur's creation than a terroir cheese: the region has almost no goat farming left within its borders.",
    fabrication:
      "Lactic curd moulded in a two-sided mould, dry-salted, seeded with Penicillium candidum, then two to three weeks in a drying room.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "At room temperature, whole on the board for the shape's sake.",
    anecdote:
      "Paris long had its own cow byres within the city, until the early 20th century: milk was sold right at the barn door, with no transport needed.",
    notes: ['Fresh goaty', 'Cream', 'Hazelnut', 'Hay'],
    accords: {
      vin: 'White Sancerre, Champagne',
      biere: 'Wheat beer',
      cidre: 'Brut cider',
      whisky: 'Floral single malt',
      pain: 'Traditional baguette, multigrain bread',
    },
  },
  'chevre-idf': {
    histoire:
      "A generic name for the farmhouse goat cheeses of the Paris region's rural fringe — the Vexin, the Hurepoix, the Saclay plateau — where a few farms have settled since the 1990s selling direct, against the grain of a regional agriculture dominated by grain crops.",
    fabrication:
      "Lactic curd drained for 24 hours, ladled into moulds, dry-salted, ashed or not. Sold fresh or aged up to four weeks depending on demand.",
    conservation: "In a ventilated box in the refrigerator, 2 weeks.",
    service: "Fresh over a salad, or aged with a dry white Loire wine.",
    anecdote:
      "Closeness to Paris is the advantage here: these farms live off the markets and box schemes of the metropolitan area, without going through a single dairy.",
    notes: ['Fresh goaty', 'Tangy', 'Hazelnut', 'Hay'],
    accords: {
      vin: 'White Sancerre, Champagne, Chablis',
      biere: 'Wheat beer',
      cidre: 'Brut cider',
      whisky: 'Floral single malt',
      pain: 'Country bread, multigrain bread',
    },
  },

  // Occitanie (14 fiches : 12 dans cheeses-occitanie.ts + 2 rattachées depuis
  // le jeu généré via EXTRA_REGION_OVERRIDES — bleu-causses, laguiole).
  'bleu-causses': {
    histoire:
      "Aged in the « fleurines », natural fissures in the limestone cellars of the Causses that ventilate the cheese.",
    fabrication:
      "Cow's milk renneted and seeded, moulded, pierced, then aged three to six months in the limestone cellars of the Causses. It's the fleurines — these natural fissures that ventilate the rock and thermoregulate the cellars with no intervention — that account for most of its aroma.",
    conservation: "In its paper, at the bottom of the refrigerator, two to three weeks; protect the cut face with film.",
    service: "At room temperature, at the end of a meal, with a sweet wine — port or Banyuls — and dried-fruit bread.",
    anecdote:
      "It shares its history with Roquefort: cheeses of both cow's and ewe's milk were once aged at Roquefort-sur-Soulzon. The recognition of the Roquefort appellation in 1925 banned cow's milk from it. Producers then grouped under the brand « Valmont », then under the name bleu de l'Aveyron, which became bleu des Causses through the decrees of 1941 and 1946.",
    notes: ['Powerful', 'Butter', 'Spices', 'Cellar'],
    accords: {
      vin: 'Port, Banyuls',
      biere: 'Stout',
      cidre: 'Sweet cider',
      whisky: 'Islay',
      pain: 'Dried-fruit bread',
    },
  },
  laguiole: {
    histoire:
      "Made on the high plateaus of the Aubrac since the Middle Ages by monks; the base, with tome fraîche, of aligot.",
    fabrication:
      "Raw cow's milk, curd pressed and uncooked, moulded into wheels of 20 to 50 kg, aged at least four months. Milk production, cheesemaking and ageing must all take place within the Aubrac area, 73 communes across the Aveyron, Cantal and Lozère.",
    conservation: "In a cloth or paper, at the bottom of the refrigerator: it's a keeping cheese, it lasts several weeks.",
    service: "At room temperature, in thin slices. Its tome fraîche, taken before salting and pressing, is the base of aligot.",
    anecdote:
      "It nearly disappeared in the mid-20th century: driving the Aubrac herds to summer pasture and working the buron cost too much, and labour was scarce. Local producers revived it from the 1960s; some 700 to 750 tonnes are now sold each year.",
    notes: ['Powerfully fruity', 'Grass', 'Sharp', 'Butter'],
    accords: {
      vin: 'Marcillac, Madiran',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  roquefort: {
    histoire:
      "The first protected French cheese: a ruling of the Toulouse parliament as early as 1666, then the law of 26 July 1925, which made it the very first French appellation of origin, even before wine. Charles VI had granted the inhabitants of Roquefort-sur-Soulzon, in 1411, the monopoly on ageing in their caves.",
    fabrication:
      "Raw Lacaune sheep's milk, renneted and seeded with Penicillium roqueforti — traditionally cultured on rye bread. Curd cut, moulded without pressing, drained then dry-salted. The wheel is needle-pierced to let in the air of the fleurines, without which the blue veining wouldn't develop.",
    conservation: "In the refrigerator in its original paper, 3 weeks; never under plastic film, which smothers the paste.",
    service:
      "Out an hour beforehand, cut roquefortaise-style into radiating wedges to spread the veining evenly. A sweet or naturally sweet wine rather than a tannic red.",
    anecdote:
      "The Combalou caves are ventilated by fleurines, natural fissures born of the plateau's collapse: on their own they keep the caves at 8–10 °C and 95% humidity year-round. No artificial cave has ever been allowed to carry the name.",
    notes: ['Butter', 'Salt', 'Mushroom', 'Sharp'],
    accords: {
      vin: 'Sauternes, Banyuls, Maury, sweet Gaillac',
      biere: 'Stout, brown ale',
      cidre: 'Ice cider',
      whisky: 'Speyside single malt',
      pain: 'Walnut bread, rye bread, fig bread',
    },
  },
  pelardon: {
    histoire:
      "The cheese of the Cévennes, mentioned by Pliny under the name « péraldou » and unchanged ever since: a palm-sized puck made from the day's milking on mid-mountain farms. AOC in 2000, AOP in 2001.",
    fabrication:
      "Lactic curd from raw whole milk, set very slowly over about 24 hours, ladled into moulds without cutting, drained then salted and aged at least eleven days on racks in a ventilated cellar.",
    conservation: "In the refrigerator in paper, 2 to 3 weeks; it keeps drying out and getting stronger.",
    service:
      "Fresh and lactic in spring, dry and crumbly in autumn — both are legitimate. Warm over salad, or as is with a white Languedoc.",
    anecdote:
      "Its name is thought to come from the Occitan « pèbre », pepper: the Cévennes goats graze on a garrigue of thyme, broom and chestnut that gives the cheese a peppery note on the finish.",
    notes: ['Fresh goaty', 'Hazelnut', 'Garrigue', 'Lactic'],
    accords: {
      vin: 'White Costières de Nîmes, Pic Saint-Loup, Faugères',
      biere: 'Light blonde lager',
      cidre: 'Sweet cider',
      pain: 'Country bread, olive bread, chestnut honey',
    },
  },
  rocamadour: {
    histoire:
      "Attested since the 15th century under the name cabécou — « little goat » in Occitan — it once served as a form of tenant-farming currency in the Quercy. AOC in 1996 under the name of the pilgrimage village overlooking the Alzou, AOP in 1999.",
    fabrication:
      "Lactic curd from raw whole milk, pre-drained then moulded, salted and aged at least six days in a humid cellar. The cheeses are turned by hand, one by one.",
    conservation: "In the refrigerator, one week; it runs and strengthens quickly. Doesn't freeze well.",
    service:
      "At room temperature, whole on its paper. Warm on toast with causse honey, or in a Quercy salad with walnuts.",
    anecdote:
      "Thirty-five grams: it's the smallest of the French AOP cheeses. Six days of ageing is enough to make it run, hence the local habit of eating it with a teaspoon rather than cutting it.",
    notes: ['Cream', 'Hazelnut', 'Butter', 'Mild'],
    accords: {
      vin: 'Young Cahors, Coteaux du Quercy, dry Jurançon',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Walnut bread, country bread, honey',
    },
  },
  'tomme-pyrenees': {
    histoire:
      "The farmhouse tomme of the Pyrenean valleys, made in summer at the high pastures and brought down in autumn. The black rind, which appeared with commercialisation, is just a protective wax: it's the golden, brushed-rind tommes that keep to the old method. IGP since 1996; the protected area spills west into the Béarn and the Basque Country.",
    fabrication:
      "Cow's milk renneted, curd cut into grains the size of a corn kernel, stirred, moulded and pressed without cooking. Brine-salted, then at least three weeks of ageing in the cellar — far longer for farmhouse versions.",
    conservation: "In the refrigerator, wrapped, 3 to 4 weeks; the waxed rind protects it well from drying out.",
    service:
      "Cubed as an aperitif or in slices on rye bread, with black cherry jam from Itxassou, as in the foothills.",
    anecdote:
      "The rind's colour says nothing about quality, only about finishing: under the black wax and under the brushed rind, it's the same specification.",
    notes: ['Mild milk', 'Butter', 'Hazelnut', 'Melting'],
    accords: {
      vin: 'Madiran, Fronton, red Gaillac',
      biere: 'Keeping blonde lager',
      cidre: 'Brut cider',
      pain: 'Country bread, rye bread, black cherry jam',
    },
  },
  bethmale: {
    histoire:
      "The cheese of the Couserans, that western part of Ariège turned toward Spain. The Bethmale valley lived off transhumance to the Bouirex and Arreau summer pastures, and the cheese was made in the mountains during the three months of grass.",
    fabrication:
      "Whole cow's milk, curd cut then stirred, moulded and pressed for a long time without cooking. Dry-salted, then two to three months in a humid cellar where the rind is brushed and rubbed regularly.",
    conservation: "In the refrigerator, wrapped, 3 weeks; take the rind out of its film to let it breathe.",
    service: "In thick slices, at room temperature, with a Southwest red and mountain charcuterie.",
    anecdote:
      "The valley is also known for its clogs with a long, curled-up tip, which young men gave to their sweethearts: the longer the tip, the greater the declared love.",
    notes: ['Grass', 'Butter', 'Hazelnut', 'Rustic'],
    accords: {
      vin: 'Fronton, Madiran, Côtes du Roussillon',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      whisky: 'Light single malt',
      pain: 'Country bread, walnut bread',
    },
  },
  moulis: {
    histoire:
      "A valley neighbour of Bethmale, sharing its technique and pastoral history, Moulis stands apart with a longer ageing that gives it a denser paste and a pronounced cellar taste. Production has concentrated at the village dairy, which still ages it.",
    fabrication:
      "The same pressed, uncooked curd as Bethmale, but left three to six months in the cellar, the rind regularly rubbed until it turns grey then russet.",
    conservation: "In the refrigerator, wrapped, a month; it keeps well.",
    service: "In thin slices, at room temperature, with a full-bodied Southwest red.",
    anecdote:
      "The Couserans once had as many tommes as valleys, each carrying its own valley's name. Bethmale and Moulis are the two that survived the depopulation of the summer pastures.",
    notes: ['Hay', 'Brown butter', 'Cellar', 'Lingering'],
    accords: {
      vin: 'Madiran, Cahors, Côtes de Gascogne',
      biere: 'Keeping amber ale',
      cidre: 'Brut cider',
      pain: 'Country bread, wholemeal bread',
    },
  },
  perail: {
    histoire:
      "The home cheese of the Larzac sheepfolds: farm women set aside the little milk the Roquefort dairy wouldn't take, at the end of lactation, to make a small disc eaten within the week. Long unsold outside the Aveyron, it has become, since the 1980s, the causse's other cheese, and carries an IGP since 2021.",
    fabrication:
      "Whole ewe's milk, mixed curd mainly lactic, ladled into moulds without cutting, turned, salted then aged one to two weeks in a drying room. The rind wrinkles on its own as it dries.",
    conservation: "In the refrigerator in its box, 10 days; it runs and strengthens quickly.",
    service: "At room temperature, opened on top and eaten with a spoon, with toasted bread.",
    anecdote:
      "It's the exact opposite of Roquefort, born of the same milk and the same land: where one calls for three months in the cellar and a veined paste, the other is eaten within ten days, mild and runny.",
    notes: ['Cream', "Sheep's milk", 'Butter', 'Mild'],
    accords: {
      vin: 'Marcillac, white Gaillac, Muscat de Frontignan',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread, fig bread, honey',
    },
  },
  'pave-larzac': {
    histoire:
      "A modern causse cheese, born on Larzac farms that, after the land struggles of the 1970s, sought to make use of their milk in ways other than delivering it to the Roquefort cellars. Its square shape sets it apart on the stall from the round pérails.",
    fabrication:
      "Whole ewe's milk seeded with Penicillium candidum, moulded into a square, drained, salted then aged three to four weeks in a drying room until the white bloom covers the whole block.",
    conservation: "In the refrigerator, wrapped in its paper, 3 weeks.",
    service: "Out an hour beforehand, cut in half through its thickness to reveal the creamy centre.",
    anecdote:
      "The Larzac is one of the few plateaus in Europe where almost only dairy sheep are raised: 700,000 Lacaune ewes on a land of stones and boxwood.",
    notes: ['Mushroom', 'Cream', 'Sheepfold', 'Buttery'],
    accords: {
      vin: 'Marcillac, white Coteaux du Languedoc',
      biere: 'Blonde lager',
      cidre: 'Brut cider',
      pain: 'Country bread, multigrain bread',
    },
  },
  'tome-aubrac': {
    histoire:
      "It's not a finished cheese but a stage: Laguiole's pressed curd, taken before salting and ageing. The buron herders of the Aubrac fed it to pilgrims on the road to Santiago, melted into a mash — aligot was born there, on the plateau's drove road.",
    fabrication:
      "Raw milk renneted, curd cut, pressed and left to mature a few hours in a block — then stopped there. No salting, no final moulding, no cellar: the tome is cut into strips and sold fresh.",
    conservation: "In the refrigerator, 48 hours at most. It freezes well in strips for aligot without harm.",
    service:
      "Melted over low heat into hot mashed potato with cream and garlic, beaten at length until it strings. With Toulouse sausage.",
    anecdote:
      "A successful aligot must « string » at least a metre when the spoon is lifted. Past forty-eight hours, the tome turns acidic and stops stringing: it's the only cheese of this kind that must be bought the same day.",
    notes: ['Fresh milk', 'Butter', 'Neutral', 'Elastic'],
    accords: {
      vin: 'Marcillac, Côtes du Vivarais',
      biere: 'Light blonde lager',
      cidre: 'Sweet cider',
      pain: 'Rye bread — but its place is in the aligot',
    },
  },
  'trappe-bonneval': {
    histoire:
      "The Abbaye Notre-Dame de Bonneval, founded in 1147 in a gorge of the Aubrac, has been home since 1875 to Trappistine nuns who live off their own work. The cheese there long went hand in hand with the chocolate that eventually made the monastery's reputation.",
    fabrication:
      "Cow's milk renneted, curd cut and pressed without cooking, moulded into a flat wheel. The rind is washed with brine for five to eight weeks, which gives it its orange colour and cellar aroma.",
    conservation: "In the refrigerator, wrapped, 3 weeks, away from other cheeses.",
    service: "At room temperature, in slices, with a Marcillac from the other side of the plateau.",
    anecdote:
      "As at Bricquebec, Timadeuc or Mont des Cats, the Rule of Saint Benedict requires the community to live by the work of its hands: the abbey cheese isn't a side product, it's the livelihood.",
    notes: ['Butter', 'Cellar', 'Hazelnut', 'Melting'],
    accords: {
      vin: 'Marcillac, Cahors, Estaing',
      biere: 'Amber abbey beer',
      cidre: 'Brut cider',
      pain: 'Country bread, rye bread',
    },
  },
  cathare: {
    histoire:
      "A recent cheese that claims an old memory: the Occitan cross, known as the cross of Toulouse, is stencilled onto the ash of each puck, echoing the Cathar country of which the Lauragais was one stronghold, from Saint-Félix to Montségur.",
    fabrication:
      "Lactic curd from goat's milk, moulded into a wide puck, drained, salted then ashed with vegetable charcoal. The cross is stencilled on before two to three weeks of ageing in a drying room.",
    conservation: "In the refrigerator in its paper, 2 weeks.",
    service: "Out ahead of time, cut into wedges like a tart, with a white Limoux.",
    anecdote:
      "The cross isn't just decoration: it serves as an ageing marker, the pattern fading as the ash becomes covered in the white down of surface moulds.",
    notes: ['Goaty', 'Ash', 'Hazelnut', 'Fresh'],
    accords: {
      vin: 'White Limoux, white Fronton, Blanquette',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread, walnut bread',
    },
  },
  'passe-lan': {
    histoire:
      "A southern gruyère, born in Roquefort country to make use of cow's milk where everyone else worked with sheep's. Its name states its specification: it must « pass the year », meaning spend over twelve months in the cellar before being sold.",
    fabrication:
      "Cow's milk heated to 55 °C after the curd is cut, pressed firmly into a large wheel, brine-salted then aged twelve to twenty-four months in a cool cellar, the rind brushed and turned regularly.",
    conservation: "In the refrigerator, wrapped in a slightly damp cloth, several months; it's a keeping cheese.",
    service:
      "In thin shavings with a peeler rather than slices, as an aperitif, or grated over soup. Always at room temperature.",
    anecdote:
      "The white crystals that crunch between the teeth aren't salt but tyrosine, an amino acid released by the very long maturation of the proteins. Their presence is the sought-after sign, not a flaw.",
    notes: ['Dried fruit', 'Broth', 'Crystals', 'Long finish'],
    accords: {
      vin: 'Marcillac, Cahors, vin jaune',
      biere: 'Keeping amber ale',
      cidre: 'Keeping brut cider',
      whisky: 'Sherry-cask single malt',
      pain: 'Country bread, walnut bread',
    },
  },

  // Nouvelle-Aquitaine (19 fiches, toutes dans cheeses-nouvelle-aquitaine.ts).
  'ossau-iraty': {
    histoire:
      "The appellation, born as an AOC in 1980 and upgraded to AOP in 1996, owes its double name to two landmarks that bound its territory: the Pic du Midi d'Ossau on the Béarn side, the Iraty forest on the Basque side. Pastoral farming is attested there since the Neolithic — the Ossau valley has yielded shepherds' graves and tools 7,000 years old — and transhumance was already practised there.",
    fabrication:
      "Sheep's milk from the three local breeds, renneted at 28–35 °C within forty hours of milking for farmhouse production. Curd cut and stirred for an hour down to grains under a cubic centimetre, moulded, pressed, turned, then dry-salted or brine-salted. Aged in a cellar between 6 and 15 °C, at over 75% humidity, with turning, brushing and morge washes.",
    conservation:
      "Wrapped in paper, at the bottom of the refrigerator: its long keeping lets it last several weeks without spoiling.",
    service:
      "At room temperature, in thin slivers. In the northern Basque Country it's paired with black cherry jam from Itxassou; in the south, with quince paste.",
    anecdote:
      "The area covers most of the Pyrénées-Atlantiques and only barely reaches into the Hautes-Pyrénées: three communes, Arbéost, Arrens-Marsous and Ferrières. That's what places Ossau-Iraty in Nouvelle-Aquitaine rather than Occitanie, despite its Pyrenean-sounding name.",
    notes: ['Hazelnut', 'Butter', 'Dry grass', "Sheep's milk"],
    accords: {
      vin: 'Red Irouléguy, dry Jurançon, Béarn',
      biere: 'Basque amber ale',
      cidre: 'Sagarno, Basque brut cider',
      whisky: 'Mild unpeated single malt',
      pain: 'Country bread, corn bread',
    },
  },
  laruns: {
    histoire:
      "The cheese carries the name of the town that oversees the upper Ossau valley. Its zone falls within that of Ossau-Iraty, sharing its milk, breeds and technique: Laruns is the name under which the valley's shepherds sell their summer-pasture cheese, appellation or not.",
    fabrication:
      "Sheep's milk renneted, curd stirred, moulded and pressed, salted then aged for several months in a cool cellar with regular turning and brushing. Summer-pasture cheeses are made in the mountain hut, as close to the milking as possible.",
    conservation: "At the bottom of the refrigerator in a cloth or paper, several weeks.",
    service: "In slivers at room temperature, with black cherry jam or quince paste.",
    anecdote:
      "Laruns holds its cheese fair in early October, when the flocks come down from the high pastures: that's where the season's wheels are judged, compared and sold.",
    notes: ['Sheep', 'Hay', 'Hazelnut', 'Melted butter'],
    accords: {
      vin: 'Dry Jurançon, young Madiran',
      biere: 'Mountain amber ale',
      cidre: 'Basque brut cider',
      pain: 'Sourdough country bread',
    },
  },
  'anneau-vic-bilh': {
    histoire:
      "The Vic-Bilh — the « old country » in Gascon — occupies the hillsides of eastern Pyrénées-Atlantiques, on the slopes that carry Pacherenc and Madiran vines. The anneau is a modern goat cheese there, its ring shape its signature.",
    fabrication:
      "Lactic curd from goat's milk, moulded into a ring around a central axis, slowly drained, salted then ashed with vegetable charcoal. At least ten days of ageing in a drying room, the time for the white bloom to break through the ash.",
    conservation: "In the refrigerator in its paper, about ten days.",
    service: "Out an hour beforehand, served whole on the board — the ring is cut into sections.",
    anecdote:
      "It must be organically farmed and carries the AB label: it's one of the few French cheese specifications to write organic farming into its very definition, rather than leave it optional.",
    notes: ['Fresh goaty', 'Ash', 'Hazelnut', 'Lemon'],
    accords: {
      vin: 'Pacherenc du Vic-Bilh, dry Jurançon',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread, walnut bread',
    },
  },
  'pur-brebis-belloc': {
    histoire:
      "The Benedictine abbey of Notre-Dame de Belloc was founded at Urt in 1875. In 1959 the monks decided to process their own sheep's milk and created the Ardigasna dairy — « ardi gasna », sheep's cheese in Basque. Since 1994 the community has refocused on ageing, and since June 2021 the dairy has been run by a team from Habitat et Humanisme, which uses it as a work-integration project.",
    fabrication:
      "Pasteurised sheep's milk, renneted, curd stirred, moulded and pressed, salted. Ageing takes place at the abbey, slowly, with turning and brushing; since 2020 the cheese contains no additives and its rind is edible.",
    conservation: "In paper at the bottom of the refrigerator, several weeks.",
    service: "In slivers at room temperature, with black cherry jam.",
    anecdote:
      "The name is a commercial brand, and the milk is no longer purely Basque: it's bought in the Basque Country, the Béarn, the Aveyron or Spain. What remains of the abbey is the ageing touch — long, gentle, and the bloom left to develop freely on the rind.",
    notes: ['Sheep', 'Toasted hazelnut', 'Butter', 'Dried fruit'],
    accords: {
      vin: 'Irouléguy, dry Jurançon',
      biere: 'Basque amber ale',
      cidre: 'Sagarno',
      whisky: 'Mild single malt',
      pain: 'Country bread, corn bread',
    },
  },
  amou: {
    histoire:
      "The only cheese the Landes claims as truly its own, made in the town of Amou, in the Chalosse, bordering the Béarn sheep country from which it takes its milk and technique. It's more a Gascon cheese than a Landes-forest one: this is corn-and-duck hill country, not pine country.",
    fabrication:
      "Sheep's milk renneted, curd stirred, moulded and pressed to drive out the whey, salted, then aged eight to ten weeks in a cellar — humid for preference, which keeps the paste supple and the rind thin.",
    conservation: "At the bottom of the refrigerator in its paper, 3 to 4 weeks.",
    service: "In thick slices at room temperature, or melted over potatoes.",
    anecdote:
      "Amou owes its culinary reputation to two products that go together on the same table: its sheep's cheese and its ham, salted and dried in the same humid climate.",
    notes: ['Sheep', 'Butter', 'Hazelnut', 'Grass'],
    accords: {
      vin: 'White Tursan, Madiran',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      pain: 'Country bread',
    },
  },
  'trappe-echourgnac': {
    histoire:
      "The cheese was born in 1868 with Échourgnac abbey, founded deep in the Double forest by Trappists from Port-du-Salut, in Mayenne, who bought milk from the surrounding farmers. Production stopped in 1910 when the monks had to leave, and resumed in 1923 with the Cistercian nuns of Notre-Dame de Bonne-Espérance.",
    fabrication:
      "Pasteurised cow's-milk cheese, pressed and uncooked, aged three weeks, two of them at the abbey: the rind is rubbed and washed with walnut liqueur, which tints it brown and flavours the paste through to the centre.",
    conservation: "In the refrigerator in its original paper, 2 to 3 weeks.",
    service: "Out an hour beforehand, at the end of a meal, with walnut halves and a glass of Monbazillac.",
    anecdote:
      "Since 1999, the nuns no longer keep cows or process milk: they buy cheeses from a dairy and age them themselves with walnut liqueur, which is the whole of the cheese's identity. Overwhelmed by demand, they shared the recipe in 2003 with the monks of Timadeuc, in Brittany, who developed the Timanoix from it.",
    notes: ['Walnut', 'Cream', 'Mushroom', 'Caramel'],
    accords: {
      vin: 'Red Bergerac, Monbazillac',
      biere: 'Brown ale',
      cidre: 'Farmhouse brut cider',
      whisky: 'Lightly oaked single malt',
      pain: 'Walnut bread, country bread',
    },
  },
  'chabichou-poitou': {
    histoire:
      "Mentioned as early as 1872 by the historian Charles de Chergé, who traces its origin to the Montbernage suburb of Poitiers, Chabichou became AOC in 1990. Its zone follows the soil: the limestone Haut-Poitou, southern Vienne, Deux-Sèvres and northern Charente. Goat farming took off there with the phylloxera crisis, which pushed winegrowers into livestock.",
    fabrication:
      "Whole goat's milk, raw or pasteurised, slowly curdled then moulded into perforated truncated-cone bungs, by ladle or dispenser. Draining for 18 to 24 hours with two or three turnings, salting, then at least ten days of ageing during which the rind develops a bloom.",
    conservation: "In the refrigerator in its paper, 2 weeks; it hardens and strengthens as it dries.",
    service: "Out an hour beforehand, on a board or sliced over a warm salad.",
    anecdote:
      "« Chabichou » and « cabécou » are the same word on two different paths: both descend from the Latin capra, goat — one via the Poitevin chabre, the other via Occitan. The cheese is recognised by its label with a medallion and straps.",
    notes: ['Goaty', 'Hazelnut', 'Curdled milk', 'Mushroom'],
    accords: {
      vin: 'White Haut-Poitou, Sancerre, Saumur',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread, multigrain bread',
    },
  },
  'mothais-feuille': {
    histoire:
      "It takes its name from La Mothe-Saint-Héray, in the Deux-Sèvres, but is made across the whole of southern Poitou — southern Deux-Sèvres, southern Vienne, northern Charente and Charente-Maritime. It has been found at local markets since 1840. A defence association was formed in 2002 to obtain an appellation of origin, which was granted on 21 November 2024.",
    fabrication:
      "Raw whole goat's milk, curdled very slowly, moulded into a disc, drained and salted. The cheese is then set on its leaf for ageing, turned with it, and sold on it.",
    conservation: "Chilled in the vegetable drawer, on its leaf, about a fortnight.",
    service: "Out several hours beforehand. Fresh, dry or runny: it's a matter of taste and patience.",
    anecdote:
      "The chestnut — or plane — leaf isn't decoration: it draws moisture out of the cheese from underneath, giving a softer, creamier paste and a thinner rind than if the cheese dried on a rack.",
    notes: ['Goaty', 'Undergrowth', 'Damp leaf', 'Cream'],
    accords: {
      vin: 'White Haut-Poitou, Touraine, rosé Champagne',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Sourdough country bread',
    },
  },
  'bonde-gatine': {
    histoire:
      "The Poitevin Gâtine is a granite hedgerow country north of the Deux-Sèvres, long known as poor land, where goats stood in for cows. The bonde is made at Verruyes by the dairy that carries its name, and takes the bonde shape — a cask bung — also found in the Sologne.",
    fabrication:
      "Lactic curd from raw goat's milk, moulded into a tall cylinder, drained, salted and ashed, then aged four to ten weeks. The white bloom gradually covers the ash and the rind wrinkles.",
    conservation: "In the refrigerator in its paper, 2 to 3 weeks.",
    service: "Out ahead of time, whole on the board, with a dry white.",
    anecdote:
      "The same cheese changes character over time: buttery and hazelnutty at six weeks, it develops by ten weeks a frank acidity that leaves a light aroma on the palate. The choice is made at the stall.",
    notes: ['Butter', 'Hazelnut', 'Goaty', 'Tangy'],
    accords: {
      vin: 'Saint-Véran, Pouilly-Fuissé, white Haut-Poitou',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread',
    },
  },
  taupinette: {
    histoire:
      "A farmhouse cheese from the Angoumois, made at Roullet-Saint-Estèphe by the farmer Alain Jousseaume, whose Taupinette is the brand. It won a silver medal at the Concours général agricole in Paris in 2006.",
    fabrication:
      "Raw goat's milk curdled slowly, ladled into moulds to avoid breaking the curd, drained, salted, then covered with a thin layer of charcoal before ageing.",
    conservation: "In the refrigerator in its paper, about ten days.",
    service: "Out an hour beforehand. Its salty edge calls for a Chardonnay or an old Pineau.",
    anecdote:
      "The name comes from the molehill, taupinière: a small grey dome sitting on the stall. The colour isn't earth but charcoal, under which ageing brings up bluish moulds.",
    notes: ['Goaty', 'Ash', 'Mushroom', 'Salt'],
    accords: {
      vin: 'Chardonnay, old Pineau des Charentes',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread, walnut bread',
    },
  },
  jonchee: {
    histoire:
      "Attested since at least the Middle Ages in several coastal regions of the South-West, jonchée has only survived on the Charente coast: the Aunis, maritime Saintonge, Oléron and Ré. It changes name from canton to canton — jonchée niortaise, rochefortaise, from Oléron, from Poitou — without changing its nature.",
    fabrication:
      "Milk curdled with rennet — traditionally wild artichoke flower — then flavoured with almond or bay, wrapped in a woven rush trellis and tied at both ends. It finishes draining, chilled, in under a day: it's the rush that gives it its name and its herbaceous bitterness.",
    conservation: "Two to three days in the refrigerator, in its rush wrapping and its liquid.",
    service: "Unroll the roll, sprinkle with almond-scented bay water, sweeten — or add a splash of Pineau.",
    anecdote:
      "It appears in Haute Cuisine (Les Saveurs du palais, 2012): the Élysée's cook, played by Catherine Frot, insists on getting a jonchée rochefortaise right for the president's Charentais meal.",
    notes: ['Fresh milk', 'Almond', 'Bay leaf', 'Rush'],
    accords: {
      vin: 'White Pineau des Charentes, dry white wine',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Brioche, fresh bread',
    },
  },
  'tricorne-marans': {
    histoire:
      "A forerunner of the cheese is mentioned in 17th-century writings under the names « Trébêche », « Sableau » or « Trois-Cornes ». A speciality of Marans, on the edge of the Marais Poitevin, it's made from raw sheep's milk, sometimes goat's, more rarely cow's.",
    fabrication:
      "The milk is seeded with the previous day's whey then renneted. The curd drains at least forty-eight hours in its triangular faisselle, with one turning, before being salted on both faces. Some is sold at this stage, the rest goes to the cellar for at least three weeks.",
    conservation: "In the refrigerator; fresh, it's eaten within a few days.",
    service: "Fresh as a starter with young garlic and herbs, aged at the end of a meal.",
    anecdote:
      "The triangle comes from the wooden faisselle it's moulded in, and the name from the three-cornered hat. Eaten fresh, it's paired with aillet — young garlic — and fine herbs; aged, it's eaten as is.",
    notes: ['Sheep', 'Fresh milk', 'Grass', 'Hazelnut'],
    accords: {
      vin: 'Dry white Charentes wine, white Pineau',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread',
    },
  },
  'feuille-limousin': {
    histoire:
      "Made since around 1993 by a handful of farmers from the former Limousin region, under a collective certification mark owned by the Syndicat des éleveurs de chèvres de la Corrèze. The specification requires raw whole milk and calls for at least half the forage to come from the Limousin.",
    fabrication:
      "Lactic curd from raw whole goat's milk, moulded into a leaf-cut shape, drained then aged eight to twenty days. The rind stays thin, letting a slightly acidic flavour come through.",
    conservation: "In the refrigerator in its paper, about ten days.",
    service: "Out ahead of time, laid whole on the board — the shape does all the work.",
    anecdote:
      "Its shape follows the outline of the chestnut leaf, the region's emblem: it's the only French cheese whose mould draws a tree.",
    notes: ['Goaty', 'Fresh milk', 'Tangy', 'Hazelnut'],
    accords: {
      vin: 'Dry white from Corrèze, Sauvignon',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread, chestnut bread',
    },
  },
  chabis: {
    histoire:
      "Chabis is the everyday goat cheese of Poitou and the Charentes, its history intertwined with Chabichou du Poitou's: same word, same shape, same country — but no appellation, and a production both farmhouse and industrial.",
    fabrication:
      "Lactic curd from goat's milk, moulded into a small truncated cone, drained, salted, then aged about twenty days during which the white bloom covers the rind.",
    conservation: "In the refrigerator in its paper, about ten days.",
    service: "Out an hour beforehand, on the board or warm over a salad.",
    anecdote:
      "It's the cheese that shows what an AOP protects: chabis can be made anywhere, with any milk, whereas Chabichou du Poitou must come from within Poitou's borders and follow a specification.",
    notes: ['Goaty', 'Fresh milk', 'Mushroom', 'Hazelnut'],
    accords: {
      vin: 'White Haut-Poitou, Sauvignon',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread',
    },
  },
  'carre-poitou': {
    histoire:
      "It's Carré de l'Est made with goat's milk: the shape and the bloomy rind come from Lorraine, the milk is Poitou and Charentes. Its square shape gave it its name, in a country where almost everything else is round, conical or pyramidal.",
    fabrication:
      "Lactic curd from goat's milk, moulded into a square, drained, salted, then aged four weeks in a drying room, the time for the white bloom to fully cover the rind.",
    conservation: "In the refrigerator in its paper, about ten days.",
    service: "Out an hour beforehand, whole on the board or diced as an aperitif.",
    anecdote:
      "A 1988 decree, refined in 2007, reserves certain shapes for goat cheeses alone — pyramid, crottin, chabichou. The square isn't among them: which is exactly what lets it move between milks.",
    notes: ['Goaty', 'Mushroom', 'Cream', 'Hazelnut'],
    accords: {
      vin: 'White Haut-Poitou, Sauvignon',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread',
    },
  },
  'tomme-rilhac': {
    histoire:
      "The Limousin's cow cheese, made at Rilhac-Xaintrie from milk collected in the mountain area. The Xaintrie is that plateau wedged between the Dordogne and the Maronne, on the fringes of the Corrèze and the Cantal — which shows in the cheese, whose making and look are close to Cantal's.",
    fabrication:
      "Pasteurised cow's milk, renneted, curd pressed and moulded, then aged one to five months in a humid cellar. The rind turns rustic, thick and cracked; the paste stays golden and lightly crumbly.",
    conservation: "At the bottom of the refrigerator in paper, 3 to 4 weeks.",
    service: "In slices at room temperature, or melted over potatoes.",
    anecdote:
      "It comes in two sizes without changing family name: the 10 kg tomme, and the 1 kg « tomette de Rilhac », ten centimetres across, sized for a table rather than a cellar.",
    notes: ['Butter', 'Hazelnut', 'Cellar', 'Mountain milk'],
    accords: {
      vin: 'Red Corrèze, Marcillac',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      pain: 'Country bread, rye bread',
    },
  },
  caillebotte: {
    histoire:
      "Rabelais already used the word in 1546, likely thinking of his own Poitou. Caillebotte remained the dessert of modest families in the Deux-Sèvres — Ernest Pérochon has his characters eat it in Les Creux de maisons, in 1913 — and is found from Anjou to Brittany and the Basque Country.",
    fabrication:
      "Milk set with rennet or a plant-based coagulant — thistle, wild artichoke flower — rather than by fermentation. The curd is sliced and served without being truly drained: this is what sets it apart from jonchée, rolled on a bed of rushes to lose its whey.",
    conservation: "In the refrigerator, one to two days: it doesn't keep.",
    service: "As a dessert, by the spoon, sweetened, with cream, a splash of coffee or Pineau.",
    anecdote:
      "It gave its name to the caillebotis (duckboard): the curd used to drain on slatted shelves, the caillebots, a word that passed on to open-slat flooring and then to ships' hatch covers.",
    notes: ['Fresh milk', 'Cream', 'Mild', 'Tangy'],
    accords: {
      vin: 'White Pineau des Charentes',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Brioche, fresh bread',
    },
  },
  pigouille: {
    histoire:
      "A marsh cheese, made in the Marans area and on the Île d'Oléron. It takes goat's, cow's or sheep's milk indifferently — whatever the farm has — and comes from the same country as the tricorne, sharing its customers but not its shape. It's now considered at risk of disappearing.",
    fabrication:
      "Milk renneted and moulded, drained then briefly aged: the rind develops a fine bloom that quickly yellows. Neither the shape nor the fat content is standardised — it's a farm cheese, not a specification.",
    conservation: "In the refrigerator in its paper, a few days: it gains nothing from waiting.",
    service: "Out an hour beforehand, young, with a dry white from the Charentes.",
    anecdote:
      "It's named after a tool: the pigouille is the long pole with which Marais Poitevin residents push their flat-bottomed boats through the conches. The gesture came before the cheese.",
    notes: ['Fresh milk', 'Cream', 'Mushroom', 'Mild'],
    accords: {
      vin: 'Dry white Charentes wine, white Pineau',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Country bread',
    },
  },
  'couhe-verac': {
    histoire:
      "A farmhouse, artisan cheese from the southern Vienne, made around Couhé-Vérac, in the Civraisien. Its distinguishing feature lies entirely in its wrapping: plane-tree leaves, which give it both its texture and its aroma.",
    fabrication:
      "Lactic curd from goat's milk, moulded into a square, drained and salted, then wrapped in plane leaves for ageing. The leaf retains moisture much as the chestnut leaf does for Mothais, but lends a quite different aroma.",
    conservation: "In the refrigerator in its leaves, about ten days.",
    service: "Out ahead of time, presented in its wrapping — the leaves are pulled back at the table.",
    anecdote:
      "The cheese has outlived the village's name. Couhé, also called Couhé-Vérac, ceased to be a commune on 1 January 2019 when it merged into Valence-en-Poitou: the cheese's label now names a place the administrative map no longer does.",
    notes: ['Goaty', 'Green leaf', 'Undergrowth', 'Hazelnut'],
    accords: {
      vin: 'White Haut-Poitou, Sauvignon',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      pain: 'Sourdough country bread',
    },
  },

  // Provence-Alpes-Côte d'Azur (20 fiches : 19 dans
  // cheeses-provence-alpes-cote-azur.ts + 1 rattachée depuis le jeu généré
  // via EXTRA_REGION_OVERRIDES — tomme-champsaur).
  'tomme-champsaur': {
    histoire:
      "A peasant tomme from the Champsaur alpine valley, sometimes made from a blend of milks depending on the farm.",
    fabrication:
      "A soft cow's-milk cheese, moulded into a cylinder 25 to 30 cm across and 6 to 8 cm tall, with a grey-white streaked rind. The tome fraîche version is smaller — 15 cm for 4 cm — and eaten without ageing.",
    conservation: "In paper, at the bottom of the refrigerator; the tome fraîche is eaten within a few days.",
    service: "At room temperature, in slices, with a wine from the Hautes-Alpes.",
    anecdote:
      "It's not one cheese but a family: the unprotected name covers the tomes of Tende, the Vésubie, Les Vigneaux, the Queyras and the Ubaye. Fresh tomes come from the Queyras and Barcelonnette cooperatives, some thirty tonnes a year; the keeping tomes are the business of two families.",
    notes: ['Mild', 'Grass', 'Hazelnut'],
    accords: {
      vin: 'Wine from the Hautes-Alpes',
      biere: 'Blonde lager',
      cidre: 'Brut cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  banon: {
    histoire:
      "Banon was born of necessity: getting through winter, when the goats dried up, still needing protein. Haute-Provence shepherds wrapped their tomes in chestnut leaves to keep them soft, and the dry, hot climate called for the sweet-curd technique, quick-set, which remains the cheese's signature. It has been known since Roman times, prized in the Middle Ages, mentioned in the 19th century by Jules Verne and Frédéric Mistral. INAO protected it with an AOC on 23 July 2003: the first cheese from Provence-Alpes-Côte d'Azur to earn one.",
    fabrication:
      "Raw whole goat's milk from the Provençale, Rove and Alpine breeds, renneted using the sweet-curd technique then ladled into moulds. The tomes go through a first bare ageing of five to ten days, sometimes with a pass through marc, before being folded by hand into brown chestnut leaves, tied with a strand of raffia in six to twelve turns. Fermentation then lasts at least ten days away from air and light, the time for the leaf's tannins to migrate into the paste.",
    conservation:
      "In its leaves, at the bottom of the refrigerator, one to two weeks: the leaf is its packaging, never remove it.",
    service:
      "At room temperature, unfolded onto the plate and eaten with a spoon, with cherry or fig jam and a glass of white Ventoux.",
    anecdote:
      "The leaves are hand-picked, brown, as they fall in autumn, by seasonal teams on the Albion plateau, in the Cévennes, in Corsica and in the Ardèche. La Fromagerie de Banon alone, which makes 60% of the production, uses five million a year — the equivalent of five articulated lorries.",
    notes: ['Chestnut', 'Undergrowth', 'Goaty', 'Tannin'],
    accords: {
      vin: 'White Ventoux, Luberon, white Côtes-du-Rhône',
      biere: 'Haute-Provence blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light unpeated single malt',
      pain: 'Country bread',
    },
  },
  'brousse-rove': {
    histoire:
      "Noted since at least the early 19th century, Brousse du Rove is the only brousse that isn't a reheated by-product: it's made from whole goat's milk rather than whey, which makes it a cheese in the sense of French regulation, where other brousses remain dairy products. Eight farmers filed for protection in spring 2007, against imitations that dispensed with the herd and its diet; the AOC came on 31 May 2018.",
    fabrication:
      "Rove goats grazed under agropastoral management on the garrigue of the Rove, l'Étoile and the hills around Marseille, where they browse broom, gorse, kermes oak, thyme and immortelle. The milk is heated right after milking to about 90 °C — so it's pasteurised — allowed to fall back to around 70 °C, then coagulated with alcohol vinegar. The curds are skimmed off and moulded into 12 cm cone shapes.",
    conservation: "Refrigerator, two to three days at most: it's a fresh cheese, with no ageing or rind to protect it.",
    service:
      "Unmoulded as a cone on the plate, plain or drizzled with orange-blossom water, honey or a fruit coulis; it also goes into fritters and stuffed vegetables.",
    anecdote:
      "Its elongated conical faisselles are thought to recall the ram's horns once used as moulds, later replaced by tin then plastic cones. Rove goats' milk runs to 45 g of fat per litre, an exceptional rate.",
    notes: ['Fresh milk', 'Garrigue', 'Mild', 'Tangy'],
    accords: {
      vin: "White Cassis, Coteaux d'Aix, Palette",
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      whisky: 'Not recommended',
      pain: 'Fougasse, country bread',
    },
  },
  'tomme-provence': {
    histoire:
      "Made throughout Provence, Tomme de Provence is said to descend from the first Provençal cheeses: its technique, rennet-curdling, is thought to go back to goat domestication, between 5000 and 6000 BCE. Prehistoric faisselles unearthed by excavation confirm it — pierced with few but large holes, they could only have served for a rennet curd, a lactic curd being too crumbly to hold shape in them.",
    fabrication:
      "Raw whole milk from local goat breeds — Alpine, Provençale and Rove — raised outdoors. Lactic cultures bring the milk to the right pH for renneting, a step that determines the cheese's mineralisation and dry matter. The sweet curd is set into a faisselle, salted, then turned regularly over ten days to three weeks of ageing.",
    conservation:
      "In paper, at the bottom of the refrigerator: it keeps ageing and turns from creamy to runny within a week.",
    service: "At room temperature, whole on the board, with a fresh, lively white from Provence.",
    anecdote:
      "It's made exactly like Banon, with a sweet or mixed curd — but without the chestnut leaf, which is the only thing separating them. Its producers have sought an AOC or IGP for years; it still has neither.",
    notes: ['Walnut', 'Spices', 'Tangy', 'Goaty'],
    accords: {
      vin: 'White Cassis, Coteaux Varois, white Côtes de Provence',
      biere: 'Provence blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Country bread, fougasse',
    },
  },
  'tomme-annot': {
    histoire:
      "A mid-mountain alpine-pasture cheese, made in the Alpes-de-Haute-Provence and mainly in the pastures of the Var valley, from sheep's or goat's milk depending on the herd. It's a summer-pasture tomme: its season is summer, when the animals are up in the mountains.",
    fabrication:
      "Not specified: published sources describe the finished cheese — a wheel of 16 to 22 cm at 45% fat — without detailing the curd's handling.",
    conservation: "In paper, at the bottom of the refrigerator.",
    service: "At room temperature, in slices, with a rosé from Provence.",
    anecdote:
      "The Var valley it comes from isn't in the Var département: the river rises and flows through the Alpes-de-Haute-Provence and the Alpes-Maritimes, and never once crosses the département that took its name — which it lost at the 1814 Treaty of Paris.",
    notes: ['Hazelnut', 'Dry grass', 'Lanolin'],
    accords: {
      vin: 'Rosé de Provence, red or dry white Côtes de Provence',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      whisky: 'Mild single malt',
      pain: 'Country bread',
    },
  },
  'tomme-ubaye': {
    histoire:
      "A cheese from the Ubaye valley, the highest and most isolated of the Alpes-de-Haute-Provence valleys. It's made by the Coopérative Laitière de la Vallée de l'Ubaye, based at Barcelonnette — a soft, bloomy-rind cheese, which is rare for an alpine cheese, where the pressed tomme is the rule.",
    fabrication: "Not specified: published sources give the milk, family and format without detailing the making.",
    conservation: "In its paper, at the bottom of the refrigerator, one to two weeks.",
    service: "At room temperature, with a mountain white.",
    notes: ['Cream', 'Mushroom', 'Mild'],
    accords: {
      vin: 'Wine from the Hautes-Alpes, Roussette',
      biere: 'Mountain blonde lager',
      cidre: 'Brut cider',
      whisky: 'Highlands',
      pain: 'Country bread, rye bread',
    },
  },
  'bleu-queyras': {
    histoire:
      "The first blue cheeses in the Queyras date back to the 18th century, even before the fruitières. These multiplied from the first half of the 19th century — the first, the Rochebrune fruitière, was founded in 1830 at Arvieux — with the milk brought down to Ville-Vieille for processing. In the 20th century, trade centred on Aiguilles, from where a company shipped the cheese via its Avignon depot to Marseille, Toulon, Montpellier, Perpignan, then North Africa. The last fruitière closed in 1939 and production stayed small-scale until the 1990s.",
    fabrication:
      "Milk from Tarine and Abondance cows grazing the Queyras alpine pastures, seeded with Penicillium, moulded into a cylinder then aged in a cellar. The veining develops by needle-piercing, and the rind thickens with cellar time.",
    conservation: "Wrapped in paper then film at the cut face, at the bottom of the refrigerator, two to three weeks.",
    service:
      "At room temperature. Young, it's mild; long-aged, it turns strong, its paste crumbly and yellow. Well matured, it lifts a salad or a sauce.",
    anecdote:
      "Depending on the producer and ageing, it has carried five other names: bleu de Girardin, bleu de Ceillac, bleu du Pelvoux, bleu du Briançonnais and bleu de l'Olan. It has also shrunk considerably — at the end of the 20th century it weighed one to six kilos, against under a kilo today.",
    notes: ['Blue', 'Cream', 'Alpine pasture', 'Mushroom'],
    accords: {
      vin: 'Wine from the Hautes-Alpes, Muscat de Beaumes-de-Venise',
      biere: 'Mountain brown ale',
      cidre: 'Brut cider',
      whisky: 'Sherry-cask single malt',
      pain: 'Rye bread, walnut bread',
    },
  },
  'bleu-devoluy': {
    histoire:
      "A cow's-milk blue from the Dévoluy massif, that high limestone plateau wedged between the Champsaur and the Trièves. It's one of the three veined cheeses still made in the Hautes-Alpes, alongside Bleu du Queyras and Persillé du col Bayard; the published source gives the milk, the paste and the country, and nothing more.",
    fabrication: "Not specified: the published source limits itself to cow's milk, veined paste and the département.",
    conservation: "Wrapped in paper, at the bottom of the refrigerator.",
    service: "At room temperature, with rye bread.",
    notes: ['Blue', 'Cream', 'Alpine pasture'],
    accords: {
      vin: 'Wine from the Hautes-Alpes',
      biere: 'Mountain brown ale',
      cidre: 'Brut cider',
      whisky: 'Sherry-cask single malt',
      pain: 'Rye bread',
    },
  },
  'persille-col-bayard': {
    histoire:
      "A cow's-milk veined cheese from the col Bayard, the 1,246-metre pass separating the Gap basin from the Champsaur. It's also called the little Bayard, after the pass — itself named after the Dauphiné knight. The published source limits itself to the milk and the place.",
    fabrication: "Not specified: the published source gives only the cow's milk and the place of production.",
    conservation: "Wrapped in paper, at the bottom of the refrigerator.",
    service: "At room temperature, at the end of a meal.",
    notes: ['Blue', 'Cream', 'Grass'],
    accords: {
      vin: 'Wine from the Hautes-Alpes',
      biere: 'Mountain brown ale',
      cidre: 'Brut cider',
      whisky: 'Sherry-cask single malt',
      pain: 'Rye bread, walnut bread',
    },
  },
  'aiguille-orcieres': {
    histoire:
      "A cooked, pressed cheese from the Champsaur country, of the gruyère family — a Southern Alps gruyère, where this type of cheese is almost always Savoyard or Jurassian. Four months in the cellar give it a taste the source describes as « fairly restrained ».",
    fabrication:
      "Not specified: the published source gives the family — cooked pressed paste, gruyère type — and the ageing time, without detailing the curd work.",
    conservation: "In paper, at the bottom of the refrigerator, several weeks.",
    service: "At room temperature, in thin slices or cubed as an aperitif.",
    notes: ['Hazelnut', 'Cooked butter', 'Alpine pasture'],
    accords: {
      vin: 'Wine from the Hautes-Alpes, Roussette',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  'saint-laurent-champsaur': {
    histoire:
      "A creamy cheese from the Champsaur country, described as being in the style of Brillat-Savarin: a soft, bloomy-rind, cow's-milk cheese, rich and mild, in a valley that otherwise makes only tommes and blues.",
    fabrication:
      "Not specified: the published source places it in the soft bloomy-rind family and compares it to Brillat-Savarin, without further detail.",
    conservation: "In its paper, at the bottom of the refrigerator, a week.",
    service: "At room temperature, by the teaspoon, with a sparkling wine.",
    notes: ['Cream', 'Butter', 'Mild'],
    accords: {
      vin: 'Wine from the Hautes-Alpes, Champagne',
      biere: 'Blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Country bread, brioche',
    },
  },
  'chevre-mont-ventoux': {
    histoire:
      "A raw-milk goat cheese moulded into an elongated cone, meant to echo the silhouette of the Giant of Provence, its base most often rolled in herbes de Provence. It's made artisanally at the foot of the Ventoux, from Rove or Provençale goat's milk.",
    fabrication:
      "Raw goat's milk moulded into a cone, then aged three to four weeks in a ventilated, dry cellar. The paste, smooth and lightly tangy before ageing, tightens as it dries and turns white and crumbly.",
    conservation: "In paper, at the bottom of the refrigerator: it keeps drying and getting stronger.",
    service: "At room temperature, whole, with a white Ventoux.",
    anecdote:
      "Its main producer isn't from the Vaucluse but from the Alpes-de-Haute-Provence: near Saumane, a commune straddling the Albion plateau and the Montagne de Lure — the same country as Banon.",
    notes: ['Herbes de Provence', 'Goaty', 'Tangy', 'Dry'],
    accords: {
      vin: "White Ventoux, Pierrevert, Coteaux d'Aix",
      biere: 'Provence blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Country bread, fougasse',
    },
  },
  'poivre-ane': {
    histoire:
      "Its name comes from its coating: pèbre d'aï, « donkey's pepper » in Provençal, is winter savory (Satureja montana), which grows on the garrigue and here serves as the cheese's covering. The producers who sell it are found around Mont Ventoux, in the Comtat Venaissin, Provençal Drôme and Haute-Provence.",
    fabrication:
      "The curd's handling isn't specified by the source; it describes the finished cheese: a blue-white to golden-white rind, a fine, tight paste, a mild, fragrant flavour, under its coat of dried herbs dominated by winter savory.",
    conservation: "In paper, at the bottom of the refrigerator, one to two weeks.",
    service: "At room temperature, whole with its herbs, on a board of Provençal cheeses.",
    anecdote:
      "It's one of the few Provençal cheeses made indifferently from goat's or cow's milk: what makes a poivre d'âne is the herb, not the herd.",
    notes: ['Savory', 'Dried herbs', 'Mild', 'Fragrant'],
    accords: {
      vin: 'White Ventoux, white Côtes-du-Rhône, rosé de Provence',
      biere: 'Provence blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Light single malt',
      pain: 'Country bread',
    },
  },
  'chevre-alpilles': {
    histoire:
      "A recently created farmhouse cheese, made from raw goat's milk at the foot of the Alpilles massif. Its main producer is the Fromagerie des Alpilles, based at the Mas Laferrière in Saint-Rémy-de-Provence since 1981.",
    fabrication:
      "Lactic curd moulded into a faisselle, aged at least ten days. Taken to two or three weeks, it becomes creamier and more distinctive, its rind wrinkling and its paste turning runny.",
    conservation: "At the bottom of the refrigerator. To enjoy its whey tang, eat it before the rind forms.",
    service: "At room temperature, plain or drizzled with olive oil, with a dry local white.",
    anecdote:
      "It's sold as often plain as dressed: with herbes de Provence, spices, pepper, pink peppercorns, or kept in olive oil — a Provençal habit few other goat-cheese regions share.",
    notes: ['Fresh milk', 'Herbes de Provence', 'Tangy', 'Olive oil'],
    accords: {
      vin: "White Baux-de-Provence, Coteaux d'Aix, Palette",
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      whisky: 'Not recommended',
      pain: 'Fougasse, country bread',
    },
  },
  'tomme-arles': {
    histoire:
      "A Camargue speciality made since 1923, from sheep's milk, by around twenty producers mostly settled around Avignon and Nîmes. The paste, white and supple, is flavoured with herbes de Provence.",
    fabrication:
      "Sheep's milk moulded into a round, flavoured with herbes de Provence, then briefly aged side by side, which gives the tomme its brick shape. It's covered with a bay leaf at the point of sale.",
    conservation: "Once kept in jute cloth; now in the refrigerator, eaten fresh or left to dry.",
    service: "Fresh, with a raw-vegetable salad; dried, grated or in thin slivers. Found at Provence markets.",
    anecdote:
      "It's round when moulded and becomes rectangular during ageing, simply because the cheeses are stored pressed tightly against one another. Its production remains tiny: one to two tonnes a year.",
    notes: ['Herbes de Provence', 'Bay leaf', "Sheep's milk", 'Fresh'],
    accords: {
      vin: 'White Costières de Nîmes, rosé Coteaux d\'Aix',
      biere: 'Wheat beer',
      cidre: 'Sweet cider',
      whisky: 'Not recommended',
      pain: 'Fougasse, country bread',
    },
  },
  cachaille: {
    histoire:
      "Originally a home preparation, where every household had its own method: the earliest references are said to come from Puimichel, in the Provençal Alps. The people of Reillanne, known for their thriftiness, carried the nickname mangea-cacheïo — cachaille-eaters. Its reputation spread during the Revolution across the Southern Alps as far as Marseille, and its trade is documented at the annual fair of Saint-Jean-de-Garguier, near Gémenos.",
    fabrication:
      "Grated dry cheese — sheep's tommes and goat's brousses — moistened with eau-de-vie, white wine and olive oil, mixed with fresh cheese less than three days old. The whole ferments two to three months in a jar, then runs continuously: after each scoop taken out, an equal amount of cheese is put back in, so the jar is never empty.",
    conservation:
      "In a closed jar, chilled. The jar is alive: it must be fed with cheese and stirred, or it will harden or turn too strong.",
    service:
      "Spread on slices of toasted bread, peppered, with onion or oil, or as a sauce over steamed potatoes. In Provence, it's softened with fresh or dried figs.",
    anecdote:
      "It changes name every fifty kilometres: cacheille at the foot of the Montagne de Lure and around Banon, catcha in the Haut-Verdon, fuorte in the Queyras, toupina in the Briançonnais. Well tended, it keeps for up to twenty years.",
    notes: ['Fermented', 'Garlic', 'Eau-de-vie', 'Sharp'],
    accords: {
      vin: 'White or rosé Pierrevert, red Côtes-du-Rhône',
      biere: 'Provence blonde lager',
      cidre: 'Brut cider',
      whisky: 'Peated single malt',
      pain: 'Toasted bread, steamed potatoes',
    },
  },
  cachat: {
    histoire:
      "Its name comes from the Provençal cachar, to crush, to press — from the Latin coactare — and it's attested in French as early as the 1866 Larousse. Traditional all around the Ventoux, it's a cousin of the Dauphiné's pétafine and Haute-Provence's cachaille, and is called in Lower Provence lou fromagi coueint, the burning cheese. Frédéric Mistral mentions it in Mirèio under the name cachat roudoulent, the fragrant one.",
    fabrication:
      "Leftover dry goat's and sheep's cheeses, sometimes spiked with pieces of blue, softened and kneaded in an earthenware jar or a large stoneware pot of around ten litres. Curdled milk is soured into it, draining off the whey as it goes, and a shot of eau-de-vie is added, which speeds fermentation, keeps off infection and lifts the flavour, along with garlic, salt and pepper. At least three weeks, and the taste keeps growing with age.",
    conservation:
      "In a jar, chilled. Cachat is « fed »: after each scoop taken out, ready-made cheese and a little alcohol are added back, adjusted with fresh cheese or milk if it grows too thick, and stirred regularly.",
    service:
      "Spread on thick slices of toasted, peppered bread, with raw onion, or thinned into a sauce over potatoes. In some areas it's counted among the thirteen Christmas desserts.",
    anecdote:
      "A Provençal proverb sums it up: « Uno brigo fa manja un pan » — one crumb makes you eat a whole loaf. Beware the confusion, common even among leading affineurs, with foudjou: cachat isn't a small Ventoux tomme but the fermented pot itself.",
    notes: ['Fermented', 'Garlic', 'Eau-de-vie', 'Sharp'],
    accords: {
      vin: 'Red Ventoux, Côtes-du-Rhône, dry white wine',
      biere: 'Brown ale',
      cidre: 'Brut cider',
      whisky: 'Peated single malt',
      pain: 'Toasted bread, jacket potatoes',
    },
  },
  brous: {
    histoire:
      "Brous is historically the cheese of the shepherds of the high Nice hinterland: summer-pasture tommes kept badly, and rather than lose the unsellable ones, families turned them into a formidable preparation. It's still made in the villages of the hinterland. A shepherd from Mollières summed up the method: « they broke them all up so it would drain well, then they ground it, made it into a paste, and left it in a corner with salt, and it fermented. By autumn, it was ready. »",
    fabrication:
      "High-country tommes and fresh curd — cow's, goat's, sheep's or a mix in widely varying proportions, since the preparation is a household one — ground together with salt, about ten chopped garlic cloves, pepper, spices and branda, the local Nice-country marc brandy. Fermentation only begins after a few weeks.",
    conservation: "In a closed jar, chilled: it only grows more powerful.",
    service:
      "Spread on slices of grilled rye bread, warmed on both sides over embers. It also goes into Nice cooking, such as ménardoun, a chard-and-cheese gratin.",
    anecdote:
      "It has its own festivals: at Belvédère, for Saint-Michel, the return from summer pasture is celebrated and shepherds sell their alpine brous there; at Ilonse, since 2008, a music and singing festival has been devoted to it in mid-August. True enthusiasts only eat it after a year.",
    notes: ['Fermented', 'Garlic', 'Marc', 'Sharp'],
    accords: {
      vin: 'Red Bellet, Côtes de Provence',
      biere: 'Brown ale',
      cidre: 'Brut cider',
      whisky: 'Peated single malt',
      pain: 'Grilled rye bread',
    },
  },
  coussignous: {
    histoire:
      "Originally made at Signes, coussignous was born of the same instinct as its Provençal cousins: reclaiming over-ripe cheeses rather than losing them. It's also called couient, burning, because it scorched the mouth; broussin on the Var coast and in the Maures, where it's a cousin of brous; catcha in the Haut-Verdon, where it merges with cachaille.",
    fabrication:
      "The same technique as cachat, with local cheeses: goat — a great Var speciality — and sheep. The hard, fermented cheeses are mixed with fresh cheese, fine herbs, eau-de-vie and wine, then jarred or potted in earthenware with garlic cloves, pink peppercorns and a bouquet garni, the whole covered with olive oil.",
    conservation: "In a jar covered with oil, chilled.",
    service:
      "Spread on bread, with raw onion or shallots. Shepherds also ate it fresh, like a fromage blanc, before fermentation.",
    anecdote:
      "The people of Toulon stocked up on it every year at the Ollioules fair, for Saint-Laurent, and it was sold in the evening in the streets of Toulon, along the Rue des Orfèvres stream, ladled from a small barrel. Two restaurants around Hyères are said to still make it themselves.",
    notes: ['Fermented', 'Garlic', 'Pink peppercorns', 'Olive oil'],
    accords: {
      vin: 'Red Bandol, Coteaux Varois',
      biere: 'Brown ale',
      cidre: 'Brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, raw onion',
    },
  },
  'bosson-macere': {
    histoire:
      "A traditional farmhouse preparation from two areas that don't even touch: the Crau, where it's made with sheep's cheese, and the Vivarais, where it's made with goat's cheese. The link is transhumance: part of the Crau's large flocks long spent summer in the hills of the Vivarais. Louis Pize, in Le Vivarais (1935), still describes shepherds moving up from the Camargue and the Crau to the pastures of Bauzon and the Mézenc.",
    fabrication:
      "Small end-of-season cheeses — dry or stale sheep's or goat's tommes, unsold leftovers, failed batches — broken up, crushed and kneaded with marc eau-de-vie, white wine, garlic, onions, pepper, herbs, spices and olive oil, then put into a large earthenware or stoneware pot. After a month in a cool cellar, the mixture is mashed with a spatula and the pot resealed for two more months of fermentation.",
    conservation: "In a closed jar, in a cool cellar or the refrigerator.",
    service: "As a spread, on slices of country bread, or with potatoes.",
    anecdote:
      "One of France's leading affineurs describes it as not sold commercially, but it still circulates: a British trade magazine noted it in the Rhône valley in 1982, and it turned up now and then at Vivarais markets in the mid-2010s, alongside Picodons and Pélardons.",
    notes: ['Fermented', 'Marc', 'Olive oil', 'Garlic'],
    accords: {
      vin: 'Côtes-du-Rhône, Costières de Nîmes',
      biere: 'Brown ale',
      cidre: 'Brut cider',
      whisky: 'Peated single malt',
      pain: 'Country bread, potatoes',
    },
  },

  // Pays de la Loire (9 fiches, toutes dans cheeses-pays-de-la-loire.ts) —
  // dernière région, achève la traduction anglaise des 216 fiches.
  'cure-nantais': {
    histoire:
      "Created around 1880 at Saint-Julien-de-Concelles, in the Nantes vineyard country, from a meeting between a local farmer, Pierre Hivert, and a passing priest — a Vendéen fleeing the Revolution according to some, a Savoyard according to legend. The cheese was first called « Régal des Gourmets ». It's now made at Pornic, in a region caught up in an old dispute: historically part of Brittany, it now falls administratively within the Loire-Atlantique, and so within the Pays de la Loire.",
    fabrication:
      "Raw milk only, blending the morning milking with the previous evening's, bought from six families in the Pays de Retz. It's set in a copper vat at 36 °C — the temperature straight from the udder — renneted with lactic cultures, then the curd is cut into strips and broken into grains a few millimetres across. Moulded into a square, drained without pressing, and four weeks of rind washing with salted water then with Muscadet or cider.",
    conservation: "In the refrigerator in its box, 2 weeks.",
    service:
      "At room temperature, with the Muscadet used to wash it. Its paste, dotted with small holes, leans toward smoked bacon and finishes spicy.",
    anecdote:
      "The Nantes region has no cheesemaking tradition: its rich milk went to butter, and butter-making skill remained far more developed there. Curé Nantais is the exception, and it changed hands in November 2024 — taken over by Établissements Beillevaire, at Machecoul, when the Olga group ended its conventional cow's-milk cheese business.",
    notes: ['Muscadet', 'Barnyard', 'Butter', 'Hazelnut'],
    accords: {
      vin: 'Muscadet Sèvre-et-Maine, Gros plant',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      whisky: 'Breton single malt',
      pain: 'Country bread, buckwheat bread',
    },
  },
  'port-salut': {
    histoire:
      "In 1794, French émigrés — nobles and non-juring priests — took refuge at Darfeld, in then-neutral Westphalia. Among them were Trappists, who learned there a cheesemaking method that has gone down in history as the « secret of Darfeld ». Napoleon's amnesty brought them back to France, and in 1815 Dom Bernard de Girmont founded the Abbaye du Port-du-Salut at Entrammes, on the site of the former Port-Ringeard priory. The community processed the milk of its own land and sold the surplus; the success was such that by 1850 it was buying milk from the surrounding area, expanding the dairy and digging ageing cellars.",
    fabrication:
      "Industrial production since the 1957 sale: milks collected, blended and pasteurised, renneted, curd pressed without cooking, moulded into a flat cylinder then aged under a washed rind. The original process was farmhouse: the abbey's own land's milk, processed on site.",
    conservation: "In its packaging, at the bottom of the refrigerator, two to three weeks.",
    service:
      "At room temperature, in slices or in a sandwich: it's a mild cheese with no rough edges, and it built its career on exactly that.",
    anecdote:
      "In 1957, the monks sold the brand and the process to the food industry: Port-Salut became an industrial cheese, now owned by the Bel group, and the model for the whole « abbey cheese » category. The story doesn't end there: in 2010, a cooperative of forty organic producers revived a dairy on a plot given by the abbey, La Fromagerie d'Entrammes, which makes about a dozen organic raw-milk cheeses from Mayenne.",
    notes: ['Mild', 'Cream', 'Butter', 'Milky'],
    accords: {
      vin: 'White Anjou, Saumur-Champigny',
      biere: 'Blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Lowlands',
      pain: 'Country bread, baguette',
    },
  },
  'trappe-coudre': {
    histoire:
      "The process comes from the monks of Port-du-Salut, who passed it on to the sisters of La Coudre in 1868, when they set up their own dairy. The nuns then made the cheese themselves, from raw milk bought from surrounding farmers. Since 1995, they have outsourced production to a dairy company at Entrammes and kept only the ageing, in the abbey's vaulted cellars.",
    fabrication:
      "Pasteurised cow's milk, processed industrially at Entrammes into a soft, washed-rind cheese, then aged by hand by the nuns in the cellars of the Abbaye Notre-Dame de la Coudre, at Laval. The brand carries the Monastic label.",
    conservation: "In its packaging, at the bottom of the refrigerator, two weeks.",
    service: "At room temperature, in portions, with a light red Loire wine.",
    anecdote:
      "Production has collapsed: 220 tonnes in 1985, 20 tonnes in 2013. It's the same pattern as Trappe d'Échourgnac in the Dordogne — communities that have kept only the ageing gesture of their cheese.",
    notes: ['Cellar', 'Cream', 'Barnyard', 'Mild'],
    accords: {
      vin: 'Red Anjou, Saumur',
      biere: 'Amber abbey beer',
      cidre: 'Brut cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  'chaussee-moines': {
    histoire:
      "The brand was born in the late 1970s at Célia, a family firm from the Mayenne formed from the merger of several dairies — Craon, Montfaucon-sur-Moine, Saint-Florent-le-Vieil, Saint-Denis-de-l'Hôtel — that had made butter, cheese and milk powder since 1927. Its creator, Roger Mortel, named it after his street in Craon: the Route de la Chaussée aux Moines, which runs past the former Saint-Clément Benedictine monastery. The Lactalis group bought Célia in 2006.",
    fabrication:
      "Industrial production: refrigerated raw milks bought from farmers and blended, pasteurised, brought back to temperature for renneting and reseeded with cultures. The curd is moulded and pressed in cloth.",
    conservation: "In its packaging, at the bottom of the refrigerator, two to three weeks.",
    service: "At room temperature, in slices, on fresh bread.",
    anecdote:
      "The name is misleading, and the Wikipedia article says so plainly: this cheese « has no connection to any monastery or monks whatsoever ». Its fame owes everything to advertising — two eight-second films in 1983, the brand sung to a liturgical tune, and a 69% market share of pressed uncooked cheeses; 80% three years later, with sales multiplied tenfold in ten years.",
    notes: ['Mild', 'Cream', 'Milky', 'Butter'],
    accords: {
      vin: 'White Anjou, Chinon',
      biere: 'Blonde lager',
      cidre: 'Sweet cider',
      whisky: 'Lowlands',
      pain: 'Baguette, country bread',
    },
  },
  'vieux-pane': {
    histoire:
      "Made since 1928 by the Perreault dairy, founded in 1906 by René Perreault in the Anjou-facing corner of the Mayenne. The company joined the Bongrain group in 1977; the brand now belongs to Savencia.",
    fabrication:
      "Industrial production: pasteurised cow's milk, soft paste moulded into a large 25 cm square, rind washed over two weeks of ageing.",
    conservation: "In its packaging, at the bottom of the refrigerator, two weeks.",
    service: "At room temperature, in portions, with a red Loire wine.",
    anecdote:
      "It's available year-round, which is no small feat for a soft cheese: the dairy uses milk from herds bred out of season, their gestation cycle offset to smooth out milk production.",
    notes: ['Barnyard', 'Cream', 'Mild', 'Milky'],
    accords: {
      vin: 'Red Anjou, Saumur-Champigny',
      biere: 'Amber ale',
      cidre: 'Brut cider',
      whisky: 'Highlands',
      pain: 'Country bread',
    },
  },
  'bons-mayennais': {
    histoire:
      "The Vaubernier dairy has been based at Martigné-sur-Mayenne since 1912, deep in the Mayenne countryside. Several families have run it in succession; it has stayed family-owned and independent, now in its third generation of leadership. Its brand uses the term « camembert », which is unprotected outside Normandy.",
    fabrication:
      "The collected raw milk is standardised — filtered, temperature-adjusted, skimmed and pasteurised — then its fat content is reset for each recipe. Renneted in basins, curd cut, moulded, drained and aged under a bloomy rind.",
    conservation: "In its box, at the bottom of the refrigerator; it keeps ageing up to the date shown.",
    service: "At room temperature, an hour out of the refrigerator, with a fresh baguette.",
    anecdote:
      "It's a camembert without quite being one: « camembert » on its own is an unprotected name, and only « Camembert de Normandie » is an AOP. The milk, though, is genuinely local — collected from farms within 40 km of the dairy.",
    notes: ['Mushroom', 'Cream', 'Mild', 'Milky'],
    accords: {
      vin: 'White Anjou, Chinon',
      biere: 'Blonde lager',
      cidre: 'Brut cider',
      whisky: 'Lowlands',
      pain: 'Baguette',
    },
  },
  kiri: {
    histoire:
      "In the late 1960s, the Bel dairies — which had created La Vache qui rit forty years earlier — set out to make the first cheese designed for children. The first Kiri portion came out of the Sablé-sur-Sarthe factory in 1966, after several years of development. A « Kiri Goûter » version, in a tray with breadsticks, followed in the 1990s, and an organic version in 2022, still made at Sablé.",
    fabrication:
      "Industrial preparation: pasteurised milk, cream, water, ingredients from processed milk, salt and cultures, portioned into aluminium-foil cubes. The milk is collected within a 50 km radius of the Sablé-sur-Sarthe factory.",
    conservation: "In the refrigerator, in its packaging, up to the date shown.",
    service: "Cold, spread on sandwich bread or a rusk. It's a snack cheese, not a cheese-board cheese.",
    anecdote:
      "In 2023, amid inflation, the finance minister called the shrinking of the portion from 20 to 18 grams an « abusive practice »; Foodwatch had already called out the brand in 2022 for shrinkflation. Bel defended itself by pointing to a new recipe, developed before the crisis.",
    notes: ['Cream', 'Mild', 'Milky', 'Lightly salted'],
    accords: {
      vin: 'Not recommended',
      biere: 'Not recommended',
      cidre: 'Sweet cider',
      whisky: 'Not recommended',
      pain: 'Sandwich bread, rusks',
    },
  },
  mizotte: {
    histoire:
      "Its name comes from a plant: mizotte, or saltmarsh grass, a salt-tolerant plant of the tidal marshes in the Vendée wetlands the sea floods. The cheese was made at Saint-Michel-en-l'Herm by the Lescure dairies, later part of the Bongrain group.",
    fabrication:
      "Cow's milk, a so-called « solubilised » paste, rind washed with white wine. The details of the process aren't published.",
    conservation: "In its packaging, at the bottom of the refrigerator, two weeks.",
    service: "At room temperature, with a white from the Fiefs Vendéens.",
    anecdote:
      "It has left its marsh: production at Saint-Michel-en-l'Herm stopped in early 2016, and manufacturing was revived by Savencia in the Dordogne. The source is blunt — « its taste no longer has anything to do with the original ». It's a Vendée cheese no longer made in the Vendée.",
    notes: ['White wine', 'Salt marsh', 'Barnyard', 'Iodine'],
    accords: {
      vin: 'Fiefs Vendéens, Gros plant',
      biere: 'Blonde lager',
      cidre: 'Brut cider',
      whisky: 'Not recommended',
      pain: 'Country bread',
    },
  },
  halbran: {
    histoire:
      "One of the oldest cheeses in the Vendée, taking its name from halbrans — the young ducks of the region's marshes. It's described as a cow's-milk cheese with a soft, fine paste, whose rind takes on an ash-grey look not from ash but from being rubbed with potato starch.",
    fabrication:
      "Not specified: the only published source, the Mizotte article, describes the finished cheese — its soft paste, its starch-greyed rind — without detailing how it's made.",
    conservation: "In paper, at the bottom of the refrigerator.",
    service: "At room temperature, with a Vendée white.",
    notes: ['Mild', 'Cream', 'Cellar'],
    accords: {
      vin: 'Fiefs Vendéens, Gros plant',
      biere: 'Blonde lager',
      cidre: 'Brut cider',
      whisky: 'Not recommended',
      pain: 'Country bread',
    },
  },
}
