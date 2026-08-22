// Photos de fromages trouvées à la main sur Wikimedia Commons, en complément
// de scripts/enrich-wikipedia.mjs.
//
// Pourquoi ce fichier existe : le script part de l'article Wikipédia du
// fromage, prend sa photo d'en-tête puis fouille la catégorie Commons liée à
// cet article. Un fromage sans article n'atteint donc jamais Commons, même
// quand Commons a sa photo — c'était le cas de l'affidélice, du sablé de
// Wissant, du menez-hom, du chabis et de la tomme corse, tous photographiés
// et tous invisibles pour le script. La caillebotte, elle, était écartée dès
// l'étape article (Wikipédia la définit comme un lait caillé, pas un
// fromage), ce qui coupait aussi l'accès à sa photo.
//
// Une recherche directe de fichiers Commons les retrouve. Elle n'a pas été
// automatisée : sur les mêmes 78 fiches, elle ramène aussi un « Croque
// Monsieur » pour le Fromage de Monsieur, les toiles de Gustave Caillebotte,
// un fromage belge nommé Margot et la cathédrale de Coutances. Le tri est
// donc manuel, et chaque photo retenue ici a été regardée.
//
// Ces entrées sont prioritaires sur ce que produisent les scripts : elles
// s'appliquent dans dataset.ts après cheeses-extra-media.ts.
//
// Plusieurs viennent de WikiCheese, le projet de photographie des fromages
// français sur Commons — d'où les prises de vue sur ardoise.
import type { CheeseImage } from './cheese.types'

export const CHEESE_PHOTOS: Record<string, CheeseImage> = {
  'affidelice': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/WikiCheese_-_Affidelice_01.jpg/960px-WikiCheese_-_Affidelice_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    width: 800,
    height: 533,
    credit: 'Pierre-Yves Beaudouin, CC BY-SA 4.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:WikiCheese_-_Affidelice_01.jpg',
  },
  'trefle-perche': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Trefle_du_Perche_is_a_goat_cheese_from_the_Loire_Valley_%288438312316%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
    width: 800,
    height: 687,
    credit: 'Frank Kovalchek from Anchorage, Alaska, USA, CC BY 2.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Trefle_du_Perche_is_a_goat_cheese_from_the_Loire_Valley_(8438312316).jpg',
  },
  'menez-hom': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Caill%C3%A9_moul%C3%A9_%C3%A0_la_louche_fromage_de_ch%C3%A8vre_Menez-Hom.jpg/960px-Caill%C3%A9_moul%C3%A9_%C3%A0_la_louche_fromage_de_ch%C3%A8vre_Menez-Hom.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    width: 800,
    height: 530,
    credit: 'Gwenn hom, CC BY-SA 4.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Caill%C3%A9_moul%C3%A9_%C3%A0_la_louche_fromage_de_ch%C3%A8vre_Menez-Hom.jpg',
  },
  'caillebotte': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Caillebotte_gel.jpg/960px-Caillebotte_gel.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    width: 800,
    height: 525,
    credit: 'Pancrat, CC BY-SA 3.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Caillebotte_gel.jpg',
  },
  'sable-wissant': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/WikiCheese_-_Sabl%C3%A9_de_Wissant_01.jpg/960px-WikiCheese_-_Sabl%C3%A9_de_Wissant_01.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    width: 800,
    height: 533,
    credit: 'Pierre-Yves Beaudouin, CC BY-SA 4.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:WikiCheese_-_Sabl%C3%A9_de_Wissant_01.jpg',
  },
  'tomme-corse': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Tomme_corse_aux_Halles_de_Lyon-Paul_Bocuse.JPG/960px-Tomme_corse_aux_Halles_de_Lyon-Paul_Bocuse.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail',
    width: 800,
    height: 895,
    credit: 'Benoît Prieur, CC0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Tomme_corse_aux_Halles_de_Lyon-Paul_Bocuse.JPG',
  },
  'chabis': {
    url: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Chabi_du_Poitou.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled',
    width: 800,
    height: 693,
    credit: 'AB57, CC BY-SA 4.0',
    creditUrl: 'https://commons.wikimedia.org/wiki/File:Chabi_du_Poitou.jpg',
  },
}
