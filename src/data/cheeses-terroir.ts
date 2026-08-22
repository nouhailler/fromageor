// Photos de terroir, choisies à la main sur Pexels et vérifiées une par une.
//
// ⚠️ Ce ne sont PAS des photos des fromages. Aucune banque d'images
// généraliste n'a de photo du claousou ou du sablé de Wissant : un balayage
// des 78 fiches sans illustration n'en a pas trouvé une seule. Ce que Pexels
// a, en revanche, c'est le pays — Bastelica sous la neige, les ruelles de
// Laruns, un lac du Queyras. C'est ce qui est stocké ici, et l'écran Fiche
// l'affiche dans la section « Localisation », légendé comme le lieu et jamais
// comme le fromage.
//
// La règle de sélection est la même que pour le reste du projet : la photo
// n'est retenue que si sa description Pexels nomme le lieu de la fiche, à la
// même échelle que son champ `commune` — la commune quand la fiche donne une
// commune, le massif ou la région quand elle est plus large.
//
// L'appariement automatique par mot-clé ne suffit pas et il ne faut pas s'y
// fier : sur 58 candidats trouvés par cette méthode, la moitié désignait un
// autre endroit. « Tome du Pays de Rohan » tombait sur le palais Rohan de
// Bordeaux, « Trèfle du Perche » sur les falaises d'Étretat, la « Chèvre de
// la Woëvre » sur la Meuse à Dinant, en Belgique. Toute nouvelle entrée doit
// être regardée, pas seulement appariée.
//
// Une fiche qui gagne une photo du fromage perd sa photo de terroir : le
// menez-hom, le sablé de Wissant et la tomme corse sont sortis d'ici le jour
// où une recherche directe sur Commons a retrouvé leurs photos (voir
// cheeses-photos.ts). Un test refuse qu'une fiche porte les deux.
//
// Licence : les photos restent hébergées chez Pexels, comme les photos
// Wikimedia restent sur Commons. Le crédit auteur est affiché et lie vers la
// page de la photo.
import type { CheeseTerroir } from './cheese.types'

export const TERROIR_PHOTOS: Record<string, CheeseTerroir> = {
  'aiguille-orcieres': {
    url: 'https://images.pexels.com/photos/9851837/pexels-photo-9851837.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 1598,
    lieu: 'Orcières',
    credit: 'Eugène, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/paysage-detente-relaxation-rochers-9851837/',
  },
  'bastelicacciu': {
    url: 'https://images.pexels.com/photos/10743957/pexels-photo-10743957.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 800,
    lieu: 'Bastelica',
    credit: 'GoodBarber, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/rhume-froid-neige-montagnes-10743957/',
  },
  'bleu-queyras': {
    url: 'https://images.pexels.com/photos/19890614/pexels-photo-19890614.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 1800,
    lieu: 'Molines-en-Queyras',
    credit: 'PHILIPPE SERRAND, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/paysage-montagnes-nature-rochers-19890614/',
  },
  'brie-montereau': {
    url: 'https://images.pexels.com/photos/28892442/pexels-photo-28892442.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 801,
    lieu: 'Montereau-Fault-Yonne',
    credit: 'Bako Harry R., Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/sentier-pittoresque-d-automne-a-montereau-fault-yonne-28892442/',
  },
  'cendre-de-la-tour': {
    url: 'https://images.pexels.com/photos/29096234/pexels-photo-29096234.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 800,
    lieu: 'Indre',
    credit: 'André Cogez, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/sentier-forestier-serein-en-automne-dans-l-indre-france-29096234/',
  },
  'chevre-alpilles': {
    url: 'https://images.pexels.com/photos/37632283/pexels-photo-37632283.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 900,
    lieu: 'Saint-Rémy-de-Provence',
    credit: 'Catherine Kozdoba, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/vue-aerienne-des-collines-et-des-champs-de-provence-37632283/',
  },
  'claousou': {
    url: 'https://images.pexels.com/photos/16038819/pexels-photo-16038819.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 691,
    lieu: 'Massif central',
    credit: 'PHILIPPE SERRAND, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/paysage-france-arbres-campagne-16038819/',
  },
  'coeur-arras': {
    url: 'https://images.pexels.com/photos/22741701/pexels-photo-22741701.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 1790,
    lieu: 'Arras',
    credit: 'Jiri Ikonomidis, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/ville-france-monument-voyager-22741701/',
  },
  'coeur-massif': {
    url: 'https://images.pexels.com/photos/37991042/pexels-photo-37991042.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 901,
    lieu: 'Massif des Vosges',
    credit: 'PM Photography, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/montagne-enneigee-de-la-chaine-des-vosges-37991042/',
  },
  'couronne-lozerienne': {
    url: 'https://images.pexels.com/photos/28646016/pexels-photo-28646016.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 800,
    lieu: 'Saint-Chély-d’Aubrac',
    credit: 'Quentin Guiot, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/paysage-rural-pittoresque-a-saint-chely-d-aubrac-28646016/',
  },
  'fleur-audresselles': {
    url: 'https://images.pexels.com/photos/18644089/pexels-photo-18644089.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 1600,
    lieu: 'Audresselles',
    credit: 'Laurent JULIEN, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/mer-paysage-cote-littoral-18644089/',
  },
  'la-bouille': {
    url: 'https://images.pexels.com/photos/5794705/pexels-photo-5794705.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 675,
    lieu: 'Rouen, boucles de la Seine',
    credit: 'Pierre Blaché, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/ville-circulation-trafic-paysage-5794705/',
  },
  'laruns': {
    url: 'https://images.pexels.com/photos/166647/pexels-photo-166647.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 1800,
    lieu: 'Laruns',
    credit: 'Benjamin Svobodny, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/sentier-gris-entoure-de-maisons-166647/',
  },
  'petit-prince-armorique': {
    url: 'https://images.pexels.com/photos/31122804/pexels-photo-31122804.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 1803,
    lieu: 'Dinan',
    credit: 'Jean-Paul Wettstein, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/charmante-rue-pavee-dans-la-ville-medievale-de-dinan-france-31122804/',
  },
  'sartinesi': {
    url: 'https://images.pexels.com/photos/27643710/pexels-photo-27643710.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 900,
    lieu: 'Sartène',
    credit: 'AGENCE MALD, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/mer-paysage-nature-soleil-couchant-27643710/',
  },
  'toit-de-paris': {
    url: 'https://images.pexels.com/photos/22020955/pexels-photo-22020955.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 1800,
    lieu: 'Paris',
    credit: 'Shamba Datta, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/noir-et-blanc-ville-voitures-vehicules-22020955/',
  },
  'tomme-alsace': {
    url: 'https://images.pexels.com/photos/29676915/pexels-photo-29676915.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 795,
    lieu: 'Alsace',
    credit: 'Hub JACQU, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/charmante-enseigne-de-magasin-de-vins-d-alsace-avec-fleurs-29676915/',
  },
  'tomme-annot': {
    url: 'https://images.pexels.com/photos/29906194/pexels-photo-29906194.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 1002,
    lieu: 'Annot',
    credit: 'laurent planson crequer, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/vue-aerienne-du-village-d-annot-en-provence-france-29906194/',
  },
  'tomme-bretagne': {
    url: 'https://images.pexels.com/photos/31665198/pexels-photo-31665198.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 1803,
    lieu: 'Bretagne',
    credit: 'Jean-Paul Wettstein, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/charmante-cour-francaise-en-bretagne-31665198/',
  },
  'tomme-champsaur2': {
    url: 'https://images.pexels.com/photos/28267978/pexels-photo-28267978.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 900,
    lieu: 'Le Puy-en-Velay',
    credit: 'ARNAUD VIGNE, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/le-puy-en-velay-28267978/',
  },
  'tomme-chevre-vercors': {
    url: 'https://images.pexels.com/photos/28690470/pexels-photo-28690470.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 675,
    lieu: 'Massif du Vercors',
    credit: 'SlimMars 13, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/vue-panoramique-du-massif-du-vercors-france-28690470/',
  },
  'tricorne-marans': {
    url: 'https://images.pexels.com/photos/11930316/pexels-photo-11930316.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 800,
    lieu: 'Marans',
    credit: 'Catherine Leclert, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/mer-ville-eau-bateaux-11930316/',
  },
  'tricorne-picardie': {
    url: 'https://images.pexels.com/photos/18536155/pexels-photo-18536155.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 800,
    lieu: 'Côte picarde',
    credit: 'PHILIPPE SERRAND, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/ville-bateaux-voiliers-yachts-18536155/',
  },
  'vieux-lille': {
    url: 'https://images.pexels.com/photos/18596288/pexels-photo-18596288.jpeg?auto=compress&cs=tinysrgb&w=1200',
    width: 1200,
    height: 1802,
    lieu: 'Lille',
    credit: 'Matteo Angeloni, Pexels',
    creditUrl: 'https://www.pexels.com/fr-fr/photo/ville-france-rue-ciel-bleu-18596288/',
  },
}
