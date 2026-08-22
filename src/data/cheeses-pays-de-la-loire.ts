// Fromages des Pays de la Loire, écrits à la main. C'est la treizième et
// dernière région métropolitaine de la base, et de loin la plus atypique :
// elle ne compte aucune AOP, presque aucun fromage fermier, et huit de ses
// neuf fiches portent un nom de marque.
//
// Ce n'est pas un défaut de recherche, c'est l'histoire du pays. Le lait
// ligérien, riche en matière grasse, allait traditionnellement au beurre et
// non au fromage — l'article du Curé Nantais le dit sans détour. Ce qui a fait
// la région, c'est l'invention du fromage industriel : le port-salut des
// trappistes d'Entrammes, vendu en 1957 à l'agroalimentaire, a servi de modèle
// à toute la filière des « fromages d'abbaye », et la Mayenne et la Sarthe
// abritent aujourd'hui les usines de Bel, Lactalis et Savencia. Le champ
// `marque` sert précisément à le dire fiche par fiche, plutôt qu'à laisser
// croire à des appellations.
//
// Le Curé Nantais n'est pas nouveau : il était rangé en Bretagne, avec Pornic
// pour commune. Pornic est en Loire-Atlantique, donc en Pays de la Loire. La
// fiche est déplacée ici — c'était une fiche écrite à la main, pas une entrée
// générée, donc pas un cas pour EXTRA_REGION_OVERRIDES.
//
// Le port-salut et l'entrammes sont un seul et même fromage sous deux noms :
// l'article « Entrammes (fromage) » redirige sur celui de la marque
// Port-Salut. D'où une fiche unique, et « Entrammes » en nom alternatif.
//
// Ce qui n'est pas ici et pourrait s'y attendre :
//   — le crémet d'Anjou, que son article définit comme une « spécialité
//     crémière » — crème fouettée et blancs en neige, sans coagulation du
//     lait. Ce n'est pas un fromage, même raisonnement que pour la
//     caillebotte poitevine ;
//   — le gourmelin, dont l'article tient en une phrase et ne dit ni son
//     département, ni son lait, ni sa fabrication — il porte d'ailleurs à la
//     fois le portail Bretagne et le portail Pays de la Loire, sans trancher ;
//   — le babybel, fabriqué à Évron (Mayenne) et à Sablé-sur-Sarthe, mais que
//     les catégories ne rangent dans aucun département : c'est une marque
//     nationale dont le lait vient de tout l'Ouest, et la méthode du projet
//     part des catégories.
//
// Le halbran n'a pas d'article propre : il est décrit dans celui de la
// mizotte, qui lui sert de source — comme la pigouille et le couhé-vérac le
// sont dans « Chèvre du Poitou ». D'où plusieurs champs à « Non précisée »
// plutôt qu'une valeur plausible inventée, et une fiche qui restera sans
// résumé Wikipédia.
//
// Coordonnées `map` : espace de FR_XY, calculées avec l'ajustement décrit dans
// l'en-tête de cheeses-provence-alpes-cote-azur.ts — projection conique
// conforme (parallèles 44°/49°, méridien 3° E) puis affine, 119 repères,
// résidu médian 0,46 unité. Chaque point est vérifié point-dans-polygone
// contre franceOutline.ts, marge minimale 3,3 unités.
//
// Un seul repère est reculé dans les terres : la mizotte, dont la commune
// (Saint-Michel-en-l'Herm) est en plein marais littoral, là où la silhouette à
// 47 points rabote l'anse de l'Aiguillon.
import type { Cheese } from './cheese.types'

export const PDL_CHEESES: Cheese[] = [
  {
    id: 'cure-nantais',
    nom: 'Curé Nantais',
    alt: ['Fromage du Curé', 'Régal des Gourmets'],
    dept: 'Loire-Atlantique (44)',
    commune: 'Pornic, pays de Retz',
    lait: 'Vache',
    race: 'Normande, Prim’Holstein',
    famille: 'Pâte molle à croûte lavée',
    croute: 'Lavée au muscadet ou au cidre, orangée',
    texture: 'Souple et crémeuse',
    forme: 'Carré à angles arrondis',
    poids: '200 g ou 700 g',
    dim: '9 × 9 cm · 3 cm',
    affinage: '4 semaines',
    mg: '40 %',
    saison: 'Toute l’année',
    intensite: 4,
    aop: false,
    prix: '≈ 30 €/kg',
    dispo: 'Régionale',
    color: 'Ivoire',
    notes: ['Muscadet', 'Étable', 'Beurre', 'Noisette'],
    accords: {
      vin: 'Muscadet Sèvre-et-Maine, Gros plant',
      biere: 'Ambrée',
      cidre: 'Cidre brut',
      whisky: 'Single malt breton',
      pain: 'Pain de campagne, pain au sarrasin',
    },
    histoire:
      "Créé vers 1880 à Saint-Julien-de-Concelles, dans le vignoble nantais, de la rencontre entre un agriculteur du pays, Pierre Hivert, et un prêtre de passage — vendéen fuyant la Révolution selon les uns, savoyard selon la légende. Le fromage s'est d'abord appelé « Régal des Gourmets ». Il est aujourd'hui fabriqué à Pornic, et son pays est celui d'un vieux contentieux : rattaché à la Bretagne historique, il relève administrativement de la Loire-Atlantique, donc des Pays de la Loire.",
    anecdote:
      "Le pays nantais n'a pas de tradition fromagère : son lait, riche en graisse, allait au beurre, et le savoir-faire beurrier y est resté bien plus développé. Le Curé Nantais est l'exception, et il a changé de mains en novembre 2024 — repris par les établissements Beillevaire, à Machecoul, quand le groupe Olga a cessé son activité fromagère au lait de vache conventionnel.",
    fabrication:
      "Lait cru exclusivement, mêlant la traite du matin et celle de la veille au soir, acheté à six familles du pays de Retz. Il est mis en cuve de cuivre à 36 °C — la température au sortir du pis —, emprésuré avec des ferments lactiques, puis le caillé est tranché en lanières et décaillé en grains de quelques millimètres. Moulage en carré, égouttage sans pressage, et quatre semaines de croûte lavée à l'eau salée puis au muscadet ou au cidre.",
    conservation: 'Au réfrigérateur dans sa boîte, 2 semaines.',
    service:
      'À température ambiante, avec le muscadet qui a servi à le laver. Sa pâte, percée de petits trous, tire sur le lard fumé et finit épicé.',
    nutrition: {
      energie: '320 kcal',
      proteines: '20 g',
      lipides: '26 g',
      calcium: '400 mg',
    },
    galerie: ['Vue entière', 'Coupe', 'Croûte lavée', 'Plateau'],
    map: [17.2, 40.0],
    regionId: 'pays-de-la-loire',
    marque: 'Établissements Beillevaire, Machecoul',
  },
  {
    id: 'port-salut',
    nom: 'Port-Salut',
    alt: ['Entrammes', 'Port-du-Salut'],
    dept: 'Mayenne (53)',
    commune: 'Entrammes, abbaye du Port-du-Salut',
    lait: 'Vache',
    race: 'Prim’Holstein, Normande',
    famille: 'Pâte pressée non cuite',
    croute: 'Lavée, orangée, sous une fine pellicule',
    texture: 'Souple et fondante',
    forme: 'Cylindre plat',
    poids: '2 kg environ',
    dim: 'Ø 22 cm · 4 cm',
    affinage: 'Quelques semaines',
    mg: '45 %',
    saison: 'Toute l’année',
    intensite: 2,
    aop: false,
    prix: '≈ 16 €/kg',
    dispo: 'Nationale',
    color: 'Ivoire',
    notes: ['Doux', 'Crème', 'Beurre', 'Lacté'],
    accords: {
      vin: 'Anjou blanc, Saumur-Champigny',
      biere: 'Blonde',
      cidre: 'Cidre doux',
      whisky: 'Lowlands',
      pain: 'Pain de campagne, baguette',
    },
    histoire:
      "En 1794, des émigrés français — nobles et prêtres réfractaires — trouvent refuge à Darfeld, en Westphalie alors neutre. Parmi eux des trappistes, qui y apprennent une manière de faire le fromage restée dans l'histoire sous le nom de « secret de Darfeld ». L'amnistie de Napoléon les ramène en France, et en 1815 dom Bernard de Girmont fonde l'abbaye du Port-du-Salut à Entrammes, sur l'emplacement de l'ancien prieuré de Port-Ringeard. La communauté transforme le lait de ses terres et vend l'excédent ; le succès est tel qu'en 1850 elle achète du lait alentour, agrandit la laiterie et creuse des caves d'affinage.",
    anecdote:
      "En 1957, les moines vendent la marque et le procédé à l'agroalimentaire : le Port-Salut devient un fromage industriel, aujourd'hui propriété du groupe Bel, et le modèle de toute la filière des « fromages d'abbaye ». L'histoire a une suite : en 2010, une coopérative de quarante producteurs bio a fait renaître une fromagerie sur une parcelle cédée par l'abbaye, la Fromagerie d'Entrammes, qui fait une douzaine de fromages au lait cru biologique de Mayenne.",
    fabrication:
      "Fabrication industrielle depuis la vente de 1957 : laits collectés, mélangés et pasteurisés, emprésurés, caillé pressé sans cuisson, moulé en cylindre plat puis affiné en croûte lavée. Le procédé d'origine, lui, était fermier — le lait des terres de l'abbaye, transformé sur place.",
    conservation: 'Dans son emballage, au bas du réfrigérateur, deux à trois semaines.',
    service:
      'À température ambiante, en tranches ou en sandwich : c’est un fromage doux, sans aspérité, qui a bâti sa carrière là-dessus.',
    nutrition: {
      energie: '330 kcal',
      proteines: '23 g',
      lipides: '26 g',
      calcium: '600 mg',
    },
    galerie: ['Meule entière', 'Coupe', 'Abbaye du Port-du-Salut', 'Plateau'],
    map: [25.78, 32.44],
    regionId: 'pays-de-la-loire',
    marque: 'Bel Foodservice (groupe Bel)',
  },
  {
    id: 'trappe-coudre',
    nom: 'Trappe de la Coudre',
    alt: ['Trappiste de Laval'],
    dept: 'Mayenne (53)',
    commune: 'Laval, abbaye Notre-Dame de la Coudre',
    lait: 'Vache',
    race: 'Prim’Holstein',
    famille: 'Pâte molle à croûte lavée',
    croute: 'Lavée ou morgée, orangée',
    texture: 'Souple et fondante',
    forme: 'Cylindre plat',
    poids: '400 g environ',
    dim: 'Non précisées',
    affinage: 'En caves voûtées de l’abbaye',
    mg: '45 %',
    saison: 'Toute l’année',
    intensite: 3,
    aop: false,
    prix: '≈ 22 €/kg',
    dispo: 'Locale',
    color: 'Ivoire',
    notes: ['Cave', 'Crème', 'Étable', 'Doux'],
    accords: {
      vin: 'Anjou rouge, Saumur',
      biere: 'Ambrée d’abbaye',
      cidre: 'Cidre brut',
      whisky: 'Highlands',
      pain: 'Pain de campagne',
    },
    histoire:
      "Le procédé vient des moines du Port-du-Salut, qui le transmettent aux sœurs de la Coudre en 1868, au moment où celles-ci créent leur laiterie. Les moniales fabriquaient alors le fromage elles-mêmes, à partir de laits crus achetés aux agriculteurs des environs. Depuis 1995, elles sous-traitent la fabrication à une société laitière d'Entrammes et ne gardent que l'affinage, dans les caves voûtées de l'abbaye.",
    anecdote:
      "La production s'est effondrée : 220 tonnes en 1985, 20 tonnes en 2013. C'est le même mouvement que la Trappe d'Échourgnac en Dordogne — des communautés qui n'ont gardé de leur fromage que le geste de l'affinage.",
    fabrication:
      "Lait de vache pasteurisé, transformé industriellement à Entrammes en pâte molle à croûte lavée, puis affiné à la main par les moniales dans les caves de l'abbaye Notre-Dame de la Coudre, à Laval. La marque est accompagnée du label Monastic.",
    conservation: 'Dans son emballage, au bas du réfrigérateur, deux semaines.',
    service: 'À température ambiante, en parts, avec un rouge léger de Loire.',
    nutrition: {
      energie: '310 kcal',
      proteines: '20 g',
      lipides: '25 g',
      calcium: '450 mg',
    },
    galerie: ['Vue entière', 'Coupe', 'Caves de l’abbaye', 'Plateau'],
    map: [25.69, 31.97],
    regionId: 'pays-de-la-loire',
    marque: 'Société anonyme des fermiers réunis, avec l’abbaye Notre-Dame de la Coudre',
  },
  {
    id: 'chaussee-moines',
    nom: 'Chaussée aux Moines',
    alt: [],
    dept: 'Mayenne / Maine-et-Loire (53/49)',
    commune: 'Craon',
    lait: 'Vache',
    race: 'Prim’Holstein',
    famille: 'Pâte pressée non cuite',
    croute: 'Lavée, orangée',
    texture: 'Souple et fondante',
    forme: 'Cylindre plat',
    poids: '230 g, 340 g ou 450 g',
    dim: 'Non précisées',
    affinage: 'Quelques semaines',
    mg: '25 % sur le produit fini',
    saison: 'Toute l’année',
    intensite: 2,
    aop: false,
    prix: '≈ 14 €/kg',
    dispo: 'Nationale',
    color: 'Ivoire',
    notes: ['Doux', 'Crème', 'Lacté', 'Beurre'],
    accords: {
      vin: 'Anjou blanc, Chinon',
      biere: 'Blonde',
      cidre: 'Cidre doux',
      whisky: 'Lowlands',
      pain: 'Baguette, pain de campagne',
    },
    histoire:
      "La marque naît à la fin des années 1970 chez Célia, société familiale mayennaise née de l'association de plusieurs laiteries — Craon, Montfaucon-sur-Moine, Saint-Florent-le-Vieil, Saint-Denis-de-l'Hôtel — qui produisait beurres, fromages et poudre de lait depuis 1927. Son créateur, Roger Mortel, lui donne le nom de sa rue à Craon : la route de la Chaussée aux Moines, qui longe l'ancien monastère bénédictin Saint-Clément. Le groupe Lactalis a racheté Célia en 2006.",
    anecdote:
      "Le nom trompe et l'article Wikipédia le dit franchement : ce fromage « n'a aucun lien avec un quelconque monastère ou des moines en général ». Sa notoriété doit tout à la publicité — deux films de huit secondes en 1983, la marque chantée sur un air liturgique, et 69 % de part de marché des pâtes pressées non cuites ; 80 % trois ans plus tard, et des ventes multipliées par dix en dix ans.",
    fabrication:
      "Fabrication industrielle : laits crus réfrigérés achetés aux éleveurs et mélangés, pasteurisés, ramenés à température pour l'emprésurage et réensemencés en cultures. Le caillé est moulé et pressé dans une toile.",
    conservation: 'Dans son emballage, au bas du réfrigérateur, deux à trois semaines.',
    service: 'À température ambiante, en tranches, sur du pain frais.',
    nutrition: {
      energie: '311 kcal',
      proteines: '20,5 g',
      lipides: '25,2 g',
      calcium: '621 mg',
    },
    galerie: ['Vue entière', 'Coupe', 'Plateau'],
    map: [24.47, 34.15],
    regionId: 'pays-de-la-loire',
    marque: 'Lactalis',
  },
  {
    id: 'vieux-pane',
    nom: 'Vieux Pané',
    alt: [],
    dept: 'Mayenne (53)',
    commune: 'Mayenne angevine',
    lait: 'Vache',
    race: 'Prim’Holstein',
    famille: 'Pâte molle à croûte lavée',
    croute: 'Lavée, orangée',
    texture: 'Souple, fondante',
    forme: 'Carré',
    poids: '2,3 kg',
    dim: '25 cm de côté · 3,5 cm',
    affinage: '2 semaines',
    mg: '25 % sur le produit fini',
    saison: 'Toute l’année',
    intensite: 3,
    aop: false,
    prix: '≈ 15 €/kg',
    dispo: 'Nationale',
    color: 'Ivoire',
    notes: ['Étable', 'Crème', 'Doux', 'Lacté'],
    accords: {
      vin: 'Anjou rouge, Saumur-Champigny',
      biere: 'Ambrée',
      cidre: 'Cidre brut',
      whisky: 'Highlands',
      pain: 'Pain de campagne',
    },
    histoire:
      "Fabriqué depuis 1928 par les fromageries Perreault, fondées en 1906 par René Perreault dans la Mayenne angevine, ce coin de Mayenne tourné vers l'Anjou. L'entreprise est entrée dans le groupe Bongrain en 1977 ; la marque appartient aujourd'hui à Savencia.",
    anecdote:
      "Il est disponible toute l'année, ce qui n'a rien d'évident pour une pâte molle : la fromagerie emploie le lait de troupeaux désaisonnés, dont le cycle de gestation est décalé pour lisser la production laitière.",
    fabrication:
      "Fabrication industrielle : lait de vache pasteurisé, pâte molle moulée en grand carré de 25 cm de côté, croûte lavée pendant deux semaines d'affinage.",
    conservation: 'Dans son emballage, au bas du réfrigérateur, deux semaines.',
    service: 'À température ambiante, en parts, avec un rouge de Loire.',
    nutrition: {
      energie: '300 kcal',
      proteines: '19 g',
      lipides: '25 g',
      calcium: '450 mg',
    },
    galerie: ['Carré entier', 'Coupe', 'Croûte lavée', 'Plateau'],
    map: [26.1, 34.45],
    regionId: 'pays-de-la-loire',
    marque: 'Savencia Fromage & Dairy',
  },
  {
    id: 'bons-mayennais',
    nom: 'Bons Mayennais',
    alt: ['Camembert Bons Mayennais'],
    dept: 'Mayenne (53)',
    commune: 'Martigné-sur-Mayenne',
    lait: 'Vache',
    race: 'Prim’Holstein, Normande',
    famille: 'Pâte molle à croûte fleurie',
    croute: 'Fleurie, blanche',
    texture: 'Souple, crémeuse à cœur',
    forme: 'Disque en boîte',
    poids: '250 g',
    dim: 'Ø 11 cm · 3 cm',
    affinage: 'Quelques semaines',
    mg: '45 % sur extrait sec, soit 22 % sur le produit fini',
    saison: 'Toute l’année',
    intensite: 2,
    aop: false,
    prix: '≈ 14 €/kg',
    dispo: 'Nationale',
    color: 'Ivoire',
    notes: ['Champignon', 'Crème', 'Doux', 'Lacté'],
    accords: {
      vin: 'Anjou blanc, Chinon',
      biere: 'Blonde',
      cidre: 'Cidre brut',
      whisky: 'Lowlands',
      pain: 'Baguette',
    },
    histoire:
      "La fromagerie Vaubernier est installée à Martigné-sur-Mayenne depuis 1912, en pleine campagne mayennaise. Plusieurs familles s'y sont succédé ; elle est restée familiale et indépendante, et en est aujourd'hui à sa troisième génération de direction. Sa marque emploie l'appellation « camembert », qui n'est pas protégée hors de Normandie.",
    anecdote:
      "C'est un camembert sans l'être : « camembert » tout court est un nom libre, et seul le « camembert de Normandie » est une AOP. Le lait, lui, est bien local — collecté dans des fermes situées à moins de 40 km de la fromagerie.",
    fabrication:
      "Le lait cru collecté est standardisé — filtré, ajusté en température, écrémé et pasteurisé — puis son taux de matière grasse est réajusté pour chaque recette. Emprésurage en bassines, caillé tranché, moulage, égouttage et affinage sous croûte fleurie.",
    conservation: 'Dans sa boîte, au bas du réfrigérateur ; il s’affine jusqu’à la date indiquée.',
    service: 'À température ambiante, une heure hors du réfrigérateur, avec une baguette fraîche.',
    nutrition: {
      energie: '290 kcal',
      proteines: '19 g',
      lipides: '22 g',
      calcium: '400 mg',
    },
    galerie: ['Boîte', 'Coupe', 'Croûte fleurie', 'Plateau'],
    map: [26.04, 30.73],
    regionId: 'pays-de-la-loire',
    marque: 'Fromagerie Vaubernier',
  },
  {
    id: 'kiri',
    nom: 'Kiri',
    alt: [],
    dept: 'Sarthe (72)',
    commune: 'Sablé-sur-Sarthe',
    lait: 'Vache',
    race: 'Prim’Holstein',
    famille: 'Fromage frais à tartiner',
    croute: 'Sans croûte',
    texture: 'Lisse et grasse',
    forme: 'Portion cubique en aluminium',
    poids: '18 g par portion',
    dim: 'Non précisées',
    affinage: 'Aucun',
    mg: 'Non précisée',
    saison: 'Toute l’année',
    intensite: 1,
    aop: false,
    prix: '≈ 18 €/kg',
    dispo: 'Nationale',
    color: 'Blanc',
    notes: ['Crème', 'Doux', 'Lacté', 'Salé léger'],
    accords: {
      vin: 'Non conseillé',
      biere: 'Non conseillée',
      cidre: 'Cidre doux',
      whisky: 'Non conseillé',
      pain: 'Pain de mie, biscottes',
    },
    histoire:
      "À la fin des années soixante, les fromageries Bel — qui avaient créé quarante ans plus tôt La vache qui rit — cherchent le premier fromage conçu pour les enfants. La première portion de Kiri sort en 1966 de l'usine de Sablé-sur-Sarthe, après plusieurs années de recherche. Une version « Kiri Goûter », en barquette avec des bâtonnets, suit dans les années 1990, et une version bio en 2022, toujours fabriquée à Sablé.",
    anecdote:
      "En 2023, en pleine inflation, le ministre de l'Économie a qualifié de « pratiques abusives » le passage de la portion de 20 à 18 grammes ; Foodwatch avait mis la marque en cause dès 2022 pour réduflation. Bel s'est défendu en invoquant une nouvelle recette, mise au point avant la crise.",
    fabrication:
      "Préparation industrielle : lait pasteurisé, crème, eau, ingrédients issus de la transformation de laits, sel et ferments, portionnés en cubes d'aluminium. Le lait est collecté dans un rayon de 50 km autour de l'usine de Sablé-sur-Sarthe.",
    conservation: 'Au réfrigérateur, dans son emballage, jusqu’à la date indiquée.',
    service:
      'Froid, tartiné sur du pain de mie ou une biscotte. C’est un fromage de goûter, pas un fromage de plateau.',
    nutrition: {
      energie: '300 kcal',
      proteines: '8 g',
      lipides: '29 g',
      calcium: '110 mg',
    },
    galerie: ['Portion', 'Tartinée', 'Usine de Sablé-sur-Sarthe'],
    map: [28.48, 34.49],
    regionId: 'pays-de-la-loire',
    marque: 'Groupe Bel',
  },
  {
    id: 'mizotte',
    nom: 'Mizotte',
    alt: ['Mizotte de Vendée'],
    dept: 'Vendée (85)',
    commune: 'Saint-Michel-en-l’Herm, marais vendéen',
    lait: 'Vache',
    race: 'Prim’Holstein, Maraîchine',
    famille: 'Pâte molle à croûte lavée',
    croute: 'Lavée au vin blanc',
    texture: 'Solubilisée, fondante',
    forme: 'Disque',
    poids: 'Non précisé',
    dim: 'Non précisées',
    affinage: 'Non précisé',
    mg: 'Non précisée',
    saison: 'Toute l’année',
    intensite: 3,
    aop: false,
    prix: '≈ 20 €/kg',
    dispo: 'Rare',
    color: 'Ivoire',
    notes: ['Vin blanc', 'Pré salé', 'Étable', 'Iodé'],
    accords: {
      vin: 'Fiefs vendéens, Gros plant',
      biere: 'Blonde',
      cidre: 'Cidre brut',
      whisky: 'Non conseillé',
      pain: 'Pain de campagne',
    },
    histoire:
      "Son nom est celui d'une herbe : la mizotte, ou glycérie maritime, une plante halophile des prés salés qui pousse dans les marais vendéens que la mer inonde. Le fromage était fabriqué à Saint-Michel-en-l'Herm par les fromageries Lescure, passées au groupe Bongrain.",
    anecdote:
      "Elle a quitté son marais : la production de Saint-Michel-en-l'Herm s'est arrêtée début 2016, et la fabrication a été relancée par Savencia en Dordogne. La source est explicite — « son goût n'a plus rien à voir avec l'original ». C'est un fromage vendéen qui ne se fait plus en Vendée.",
    fabrication:
      "Lait de vache, pâte dite solubilisée, croûte lavée au vin blanc. Le détail de la fabrication n'est pas publié.",
    conservation: 'Dans son emballage, au bas du réfrigérateur, deux semaines.',
    service: 'À température ambiante, avec un blanc des fiefs vendéens.',
    nutrition: {
      energie: '300 kcal',
      proteines: '19 g',
      lipides: '24 g',
      calcium: '450 mg',
    },
    galerie: ['Vue entière', 'Coupe', 'Marais vendéen', 'Plateau'],
    map: [22.13, 49.05],
    regionId: 'pays-de-la-loire',
    marque: 'Savencia Fromage & Dairy',
  },
  {
    id: 'halbran',
    nom: 'Halbran',
    alt: [],
    dept: 'Vendée (85)',
    commune: 'Vendée',
    lait: 'Vache',
    race: 'Prim’Holstein, Maraîchine',
    famille: 'Pâte molle',
    croute: 'Grisée, d’aspect cendré, frottée à la fécule de pomme de terre',
    texture: 'Souple et fine',
    forme: 'Non précisée',
    poids: 'Non précisé',
    dim: 'Non précisées',
    affinage: 'Non précisé',
    mg: 'Non précisée',
    saison: 'Toute l’année',
    intensite: 2,
    aop: false,
    prix: '≈ 22 €/kg',
    dispo: 'Rare',
    color: 'Ivoire',
    notes: ['Doux', 'Crème', 'Cave'],
    accords: {
      vin: 'Fiefs vendéens, Gros plant',
      biere: 'Blonde',
      cidre: 'Cidre brut',
      whisky: 'Non conseillé',
      pain: 'Pain de campagne',
    },
    histoire:
      "L'un des plus anciens fromages de Vendée, qui doit son nom aux halbrans — les jeunes canards des marais de la région. Il est décrit comme un fromage au lait de vache à pâte souple et fine, dont la croûte prend un aspect cendré non par la cendre mais par le frottement de fécule de pomme de terre.",
    fabrication:
      "Non précisée : la seule source publiée, l'article de la mizotte, décrit le fromage fini — sa pâte souple, sa croûte grisée à la fécule — sans détailler sa fabrication.",
    conservation: 'Dans un papier, au bas du réfrigérateur.',
    service: 'À température ambiante, avec un blanc vendéen.',
    nutrition: {
      energie: '300 kcal',
      proteines: '19 g',
      lipides: '24 g',
      calcium: '450 mg',
    },
    galerie: ['Vue entière', 'Coupe', 'Marais vendéen', 'Plateau'],
    map: [22.74, 48.03],
    regionId: 'pays-de-la-loire',
  },
]
