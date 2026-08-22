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
  // La tomme du Champsaur est haut-alpine (05), donc en
  // Provence-Alpes-Côte d'Azur : le handoff la rangeait en
  // Auvergne-Rhône-Alpes faute d'y avoir la région.
  'tomme-champsaur': { regionId: 'provence-alpes-cote-azur' },
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
