// Ported from encycloDefs() in the design handoff prototype — 8 articles,
// content copied verbatim. English translations added alongside, not a
// separate source: each entry is `{ fr, en }` per field.
import type { ComponentType } from 'react'
import { BookIcon, DropIcon, HourglassIcon, ArchIcon, LeafIcon, DotsIcon } from '../components/icons/EncyclopediaIcons'
import { type Lang } from './i18n/lang'

export interface EncyclopediaSection {
  h: string
  p: string
}

export interface EncyclopediaArticle {
  id: string
  titre: string
  sous: string
  tint: string
  ink: string
  Icon: ComponentType<{ size?: number }>
  sections: EncyclopediaSection[]
}

interface Bi {
  fr: string
  en: string
}
interface SectionRaw {
  h: Bi
  p: Bi
}
interface ArticleRaw {
  id: string
  titre: Bi
  sous: Bi
  tint: string
  ink: string
  Icon: ComponentType<{ size?: number }>
  sections: SectionRaw[]
}

const ARTICLES_RAW: ArticleRaw[] = [
  {
    id: 'histoire',
    titre: { fr: 'Histoire du fromage', en: 'History of cheese' },
    sous: { fr: 'Du Néolithique aux AOP', en: 'From the Neolithic to the AOP' },
    tint: 'var(--color-accent-200)',
    ink: 'var(--color-accent-700)',
    Icon: BookIcon,
    sections: [
      {
        h: { fr: 'Une découverte accidentelle', en: 'An accidental discovery' },
        p: {
          fr: "Le fromage naît il y a environ 8 000 ans, avec la domestication des chèvres et des brebis. La légende veut qu'un berger, transportant du lait dans une panse de ruminant, l'ait retrouvé caillé : la présure naturelle du jeune animal avait séparé le caillé du petit-lait.",
          en: 'Cheese was born some 8,000 years ago, with the domestication of goats and sheep. Legend has it that a shepherd, carrying milk in a ruminant\'s stomach pouch, found it had curdled: the young animal\'s natural rennet had separated the curd from the whey.',
        },
      },
      {
        h: { fr: 'Antiquité', en: 'Antiquity' },
        p: {
          fr: "Grecs et Romains codifient la fabrication et le transport du fromage. Au Iᵉʳ siècle, Pline l'Ancien décrit déjà des fromages réputés venus de régions précises de la Gaule, preuve d'un commerce organisé.",
          en: 'The Greeks and Romans codified cheesemaking and transport. In the 1st century, Pliny the Elder already described renowned cheeses from specific regions of Gaul — evidence of an organised trade.',
        },
      },
      {
        h: { fr: 'Le rôle des abbayes', en: 'The role of the abbeys' },
        p: {
          fr: "Au Moyen Âge, les moines perfectionnent les techniques d'affinage : croûtes lavées à la morge, pâtes persillées, fromages de garde. Beaucoup de grands noms (Munster, Maroilles, Trappe) sont d'origine monastique.",
          en: 'In the Middle Ages, monks perfected ageing techniques: rinds washed in brine, blue cheeses, long-keeping cheeses. Many great names (Munster, Maroilles, Trappe) are of monastic origin.',
        },
      },
      {
        h: { fr: 'La protection des terroirs', en: 'Protecting terroir' },
        p: {
          fr: "Au XXᵉ siècle, les appellations d'origine (AOC puis AOP) protègent le lien entre un fromage, sa race animale, son territoire et son savoir-faire. Le Roquefort fut la première AOC fromagère française, en 1925.",
          en: 'In the 20th century, designations of origin (AOC, then AOP) protected the link between a cheese, its animal breed, its territory and its know-how. Roquefort was the first French AOC cheese, in 1925.',
        },
      },
    ],
  },
  {
    id: 'fabrication',
    titre: { fr: 'La fabrication', en: 'How cheese is made' },
    sous: { fr: 'Du lait au caillé', en: 'From milk to curd' },
    tint: 'var(--color-accent-2-200)',
    ink: 'var(--color-accent-2-900)',
    Icon: DropIcon,
    sections: [
      {
        h: { fr: 'Le caillage', en: 'Curdling' },
        p: {
          fr: "Tout commence par la coagulation du lait. La voie présure (emprésurage) donne un caillé souple, base des pâtes pressées et molles. La voie lactique, par acidification lente des ferments, donne un caillé fragile typique des fromages de chèvre.",
          en: 'It all starts with milk coagulating. The rennet route gives a supple curd, the base of pressed and soft cheeses. The lactic route, through slow acidification by cultures, gives the fragile curd typical of goat cheeses.',
        },
      },
      {
        h: { fr: 'Décaillage et moulage', en: 'Cutting and moulding' },
        p: {
          fr: "Le caillé est tranché puis brassé. Plus les grains sont fins et chauffés, plus la pâte sera dure : c'est ce qui distingue une pâte pressée cuite (Comté) d'une pâte molle. Le caillé est ensuite versé dans des moules.",
          en: 'The curd is cut, then stirred. The finer and more heated the grains, the harder the paste: this is what separates a cooked pressed cheese (Comté) from a soft one. The curd is then poured into moulds.',
        },
      },
      {
        h: { fr: 'Pressage et salage', en: 'Pressing and salting' },
        p: {
          fr: 'Le pressage expulse le petit-lait et soude la pâte. Le salage, au sel sec ou par bain de saumure, assaisonne, protège et amorce la formation de la croûte.',
          en: 'Pressing expels the whey and binds the paste together. Salting, whether dry or by brine bath, seasons, protects, and starts the rind forming.',
        },
      },
      {
        h: { fr: 'Les grandes familles', en: 'The main families' },
        p: {
          fr: 'Selon la technique naissent les familles : pâtes fraîches, molles à croûte fleurie ou lavée, pressées cuites ou non cuites, persillées et fromages fondus.',
          en: 'The technique used gives rise to the families: fresh cheeses, soft with a bloomy or washed rind, pressed cooked or uncooked, blue, and processed cheeses.',
        },
      },
    ],
  },
  {
    id: 'affinage',
    titre: { fr: "L'affinage", en: 'Ageing' },
    sous: { fr: 'La maturation en cave', en: 'Maturing in the cellar' },
    tint: 'var(--color-neutral-200)',
    ink: 'var(--color-neutral-700)',
    Icon: HourglassIcon,
    sections: [
      {
        h: { fr: "Le métier d'affineur", en: 'The affineur\'s craft' },
        p: {
          fr: "L'affineur conduit la maturation du fromage en cave. Il retourne, brosse, frotte, lave ou pique les fromages selon leur type, jour après jour, jusqu'à leur pleine expression.",
          en: "The affineur oversees the cheese's maturing in the cellar — turning, brushing, rubbing, washing or piercing each cheese according to its type, day after day, until it reaches its full expression.",
        },
      },
      {
        h: { fr: 'Ce qui se passe dans la pâte', en: 'What happens inside the paste' },
        p: {
          fr: 'Deux phénomènes développent le goût : la protéolyse dégrade les protéines (fondant, arômes) et la lipolyse transforme les matières grasses. La croûte, elle, respire et abrite les flores de surface.',
          en: 'Two processes develop the flavour: proteolysis breaks down proteins (giving a fondant texture and aromas), and lipolysis transforms the fats. The rind, meanwhile, breathes and hosts the surface microflora.',
        },
      },
      {
        h: { fr: 'Une question de temps', en: 'A matter of time' },
        p: {
          fr: "L'affinage va de quelques jours pour un fromage frais à plusieurs semaines pour un camembert, jusqu'à deux ans et plus pour un Comté ou un Beaufort de garde.",
          en: 'Ageing ranges from a few days for a fresh cheese to several weeks for a camembert, up to two years or more for a well-kept Comté or Beaufort.',
        },
      },
      {
        h: { fr: 'Les soins de croûte', en: 'Rind care' },
        p: {
          fr: "Croûtes lavées à la morge pour les pâtes odorantes, brossage pour les tommes grises, piquage à l'aiguille pour aérer et bleuir les pâtes persillées.",
          en: 'Rinds washed in brine for pungent cheeses, brushing for grey-rind tommes, needle piercing to air and blue blue cheeses.',
        },
      },
    ],
  },
  {
    id: 'moisissures',
    titre: { fr: 'Les moisissures', en: 'Moulds' },
    sous: { fr: 'Les alliées du goût', en: 'Flavour\'s allies' },
    tint: 'var(--color-accent-200)',
    ink: 'var(--color-accent-700)',
    Icon: DotsIcon,
    sections: [
      {
        h: { fr: 'La croûte fleurie', en: 'The bloomy rind' },
        p: {
          fr: "Le Penicillium candidum (ou camemberti) forme le duvet blanc des camemberts et bries. Il attendrit la pâte de l'extérieur vers le cœur et apporte des notes de champignon.",
          en: "Penicillium candidum (or camemberti) forms the white down of camemberts and bries. It softens the paste from the outside in and brings mushroom notes.",
        },
      },
      {
        h: { fr: 'Le bleu', en: 'The blue' },
        p: {
          fr: "Le Penicillium roqueforti (et le glaucum) crée les veines bleu-vert des pâtes persillées. Ensemencé dans le caillé, il se développe grâce à l'air introduit par le piquage.",
          en: 'Penicillium roqueforti (and glaucum) creates the blue-green veins of blue cheeses. Seeded into the curd, it grows thanks to the air let in by piercing.',
        },
      },
      {
        h: { fr: 'La morge', en: 'The brine wash' },
        p: {
          fr: "Les ferments de surface, dont le Brevibacterium linens, colorent en orangé les croûtes lavées et leur donnent leur puissance aromatique (Munster, Époisses, Vacherin).",
          en: 'Surface cultures, including Brevibacterium linens, turn washed rinds orange and give them their aromatic power (Munster, Époisses, Vacherin).',
        },
      },
      {
        h: { fr: 'Un atout, pas un défaut', en: 'An asset, not a flaw' },
        p: {
          fr: "Ces moisissures sont sélectionnées, cultivées et parfaitement comestibles : loin d'être une altération, elles sont le moteur du goût et de la texture du fromage.",
          en: "These moulds are selected, cultivated and perfectly edible: far from being a flaw, they drive the cheese's flavour and texture.",
        },
      },
    ],
  },
  {
    id: 'caves',
    titre: { fr: "Les caves d'affinage", en: 'Ageing cellars' },
    sous: { fr: 'Le berceau des arômes', en: 'The cradle of aroma' },
    tint: 'var(--color-accent-2-200)',
    ink: 'var(--color-accent-2-900)',
    Icon: ArchIcon,
    sections: [
      {
        h: { fr: 'Fraîcheur et humidité', en: 'Coolness and humidity' },
        p: {
          fr: "Une bonne cave d'affinage marie une température fraîche (8 à 14 °C) et une très forte hygrométrie (85 à 98 %). Ce microclimat stable évite au fromage de se dessécher et nourrit ses flores.",
          en: 'A good ageing cellar combines a cool temperature (8 to 14°C) with very high humidity (85 to 98%). This stable microclimate keeps the cheese from drying out and feeds its microflora.',
        },
      },
      {
        h: { fr: 'Les caves naturelles', en: 'Natural cellars' },
        p: {
          fr: "Les fleurines, failles naturelles des caves calcaires des Causses, ventilent le Roquefort à humidité constante. Ailleurs, caves de tuf, celliers de montagne et burons d'alpage jouent le même rôle.",
          en: 'The fleurines — natural fissures in the limestone cellars of the Causses — ventilate Roquefort at constant humidity. Elsewhere, tuff cellars, mountain stores and alpine huts play the same role.',
        },
      },
      {
        h: { fr: 'La flore de la cave', en: 'The cellar\'s microflora' },
        p: {
          fr: "Chaque cave abrite une flore microbienne propre, qui imprègne les murs et les fromages : c'est une part invisible mais essentielle du terroir, impossible à reproduire à l'identique.",
          en: "Each cellar hosts its own microbial flora, which permeates its walls and its cheeses — an invisible but essential part of terroir, impossible to reproduce identically elsewhere.",
        },
      },
      {
        h: { fr: 'Les caves modernes', en: 'Modern cellars' },
        p: {
          fr: "Aujourd'hui, des caves climatisées régulent finement température, humidité et ventilation pour reproduire ces conditions à grande échelle, sans renoncer aux caves historiques pour les grands crus.",
          en: 'Today, climate-controlled cellars finely regulate temperature, humidity and ventilation to reproduce these conditions at scale, without giving up historic cellars for the finest cheeses.',
        },
      },
    ],
  },
  {
    id: 'bovines',
    titre: { fr: 'Races bovines', en: 'Cattle breeds' },
    sous: { fr: 'Les vaches à fromage', en: 'Cheese cows' },
    tint: 'var(--color-accent-200)',
    ink: 'var(--color-accent-700)',
    Icon: LeafIcon,
    sections: [
      {
        h: { fr: 'Un lait, un fromage', en: 'One milk, one cheese' },
        p: {
          fr: "La race, son alimentation et son terroir façonnent le lait, donc le fromage. Les cahiers des charges AOP imposent souvent des races locales nourries à l'herbe et au foin.",
          en: "The breed, its diet and its terroir shape the milk, and so the cheese. AOP specifications often require local breeds fed on grass and hay.",
        },
      },
      {
        h: { fr: 'Montbéliarde', en: 'Montbéliarde' },
        p: {
          fr: "Robe pie rouge, rustique et laitière : c'est la reine des pâtes pressées cuites (Comté, Bleu de Gex). Son lait riche en caséines coagule idéalement.",
          en: 'Red-and-white coated, hardy and a good milker: the queen of cooked pressed cheeses (Comté, Bleu de Gex). Its casein-rich milk coagulates ideally.',
        },
      },
      {
        h: { fr: 'Abondance & Tarine', en: 'Abondance & Tarine' },
        p: {
          fr: 'Vaches de montagne des Alpes du Nord, adaptées aux alpages. Leur lait donne Abondance, Beaufort, Reblochon et les tommes de Savoie.',
          en: 'Mountain cows from the Northern Alps, suited to high pastures. Their milk gives Abondance, Beaufort, Reblochon and the tommes of Savoie.',
        },
      },
      {
        h: { fr: 'Salers & Aubrac', en: 'Salers & Aubrac' },
        p: {
          fr: 'Robes acajou, cornes en lyre, élevées sur les hauts plateaux du Massif central. Elles fournissent le lait du Salers, du Cantal et du Laguiole.',
          en: 'Mahogany-coated, lyre-horned, raised on the high plateaus of the Massif Central. They supply the milk for Salers, Cantal and Laguiole.',
        },
      },
    ],
  },
  {
    id: 'caprines',
    titre: { fr: 'Races caprines', en: 'Goat breeds' },
    sous: { fr: 'Les chèvres', en: 'The goats' },
    tint: 'var(--color-neutral-200)',
    ink: 'var(--color-neutral-700)',
    Icon: LeafIcon,
    sections: [
      {
        h: { fr: 'Le lait de chèvre', en: 'Goat milk' },
        p: {
          fr: 'Plus fin et plus blanc que le lait de vache, il se prête à la voie lactique et donne des fromages frais, des bûches, des palets et des tommes au goût caprin caractéristique.',
          en: 'Finer and whiter than cow milk, it suits the lactic route and yields fresh cheeses, logs, discs and tommes with a characteristic goaty taste.',
        },
      },
      {
        h: { fr: 'Alpine', en: 'Alpine' },
        p: {
          fr: 'La chèvre la plus répandue en Auvergne-Rhône-Alpes : robe chamoisée, très laitière et bien adaptée aux reliefs. Elle est derrière le Picodon, le Chevrotin et les tommes caprines.',
          en: "The most common goat in Auvergne-Rhône-Alpes: fawn-coated, a strong milker, well suited to hilly terrain. Behind Picodon, Chevrotin and the region's goat tommes.",
        },
      },
      {
        h: { fr: 'Saanen', en: 'Saanen' },
        p: {
          fr: "Grande chèvre blanche d'origine suisse, réputée pour l'abondance et la régularité de son lait, souvent élevée en plaine.",
          en: 'A large white goat of Swiss origin, prized for the abundance and consistency of its milk, usually raised on lowland farms.',
        },
      },
      {
        h: { fr: 'Poitevine & Rove', en: 'Poitevine & Rove' },
        p: {
          fr: "Races plus rustiques et locales, à la production plus modeste mais au lait très typé, aujourd'hui préservées par des éleveurs passionnés.",
          en: 'Hardier, more local breeds with a more modest yield but very distinctive milk, kept alive today by passionate farmers.',
        },
      },
    ],
  },
  {
    id: 'ovines',
    titre: { fr: 'Races ovines', en: 'Sheep breeds' },
    sous: { fr: 'Les brebis', en: 'The ewes' },
    tint: 'var(--color-accent-2-200)',
    ink: 'var(--color-accent-2-900)',
    Icon: LeafIcon,
    sections: [
      {
        h: { fr: 'Le lait de brebis', en: 'Sheep milk' },
        p: {
          fr: 'Deux fois plus riche en matière grasse et en protéines que le lait de vache, il donne des fromages onctueux et puissants, à la note légère de lanoline.',
          en: 'Twice as rich in fat and protein as cow milk, it gives unctuous, powerful cheeses with a light lanolin note.',
        },
      },
      {
        h: { fr: 'Lacaune', en: 'Lacaune' },
        p: {
          fr: 'La grande race laitière du sud du Massif central, à la tête fine et sans cornes. Son lait fait le Roquefort et de nombreuses tommes de brebis.',
          en: 'The great dairy breed of the southern Massif Central, fine-headed and hornless. Its milk makes Roquefort and many sheep tommes.',
        },
      },
      {
        h: { fr: 'Manech & Basco-Béarnaise', en: 'Manech & Basco-Béarnaise' },
        p: {
          fr: 'Brebis des Pyrénées, à tête rousse ou noire, emblématiques des fromages de brebis du Sud-Ouest (Ossau-Iraty).',
          en: 'Pyrenean ewes with a russet or black head, emblematic of the sheep cheeses of southwest France (Ossau-Iraty).',
        },
      },
      {
        h: { fr: 'Préalpes du Sud', en: 'Préalpes du Sud' },
        p: {
          fr: 'Race rustique du sud des Alpes, élevée surtout pour la viande mais dont le lait sert quelques tommes fermières confidentielles.',
          en: 'A hardy breed from the southern Alps, raised mainly for meat, though its milk goes into a few little-known farmhouse tommes.',
        },
      },
    ],
  },
]

export function encycloDefs(lang: Lang = 'fr'): EncyclopediaArticle[] {
  return ARTICLES_RAW.map((a) => ({
    id: a.id,
    titre: a.titre[lang],
    sous: a.sous[lang],
    tint: a.tint,
    ink: a.ink,
    Icon: a.Icon,
    sections: a.sections.map((s) => ({ h: s.h[lang], p: s.p[lang] })),
  }))
}
