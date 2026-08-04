// Ported from encycloDefs() in the design handoff prototype — 8 articles,
// content copied verbatim.
import type { ComponentType } from 'react'
import { BookIcon, DropIcon, HourglassIcon, ArchIcon, LeafIcon, DotsIcon } from '../components/icons/EncyclopediaIcons'

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

export function encycloDefs(): EncyclopediaArticle[] {
  return [
    {
      id: 'histoire',
      titre: 'Histoire du fromage',
      sous: 'Du Néolithique aux AOP',
      tint: 'var(--color-accent-200)',
      ink: 'var(--color-accent-700)',
      Icon: BookIcon,
      sections: [
        {
          h: 'Une découverte accidentelle',
          p: "Le fromage naît il y a environ 8 000 ans, avec la domestication des chèvres et des brebis. La légende veut qu'un berger, transportant du lait dans une panse de ruminant, l'ait retrouvé caillé : la présure naturelle du jeune animal avait séparé le caillé du petit-lait.",
        },
        {
          h: 'Antiquité',
          p: "Grecs et Romains codifient la fabrication et le transport du fromage. Au Iᵉʳ siècle, Pline l'Ancien décrit déjà des fromages réputés venus de régions précises de la Gaule, preuve d'un commerce organisé.",
        },
        {
          h: 'Le rôle des abbayes',
          p: "Au Moyen Âge, les moines perfectionnent les techniques d'affinage : croûtes lavées à la morge, pâtes persillées, fromages de garde. Beaucoup de grands noms (Munster, Maroilles, Trappe) sont d'origine monastique.",
        },
        {
          h: 'La protection des terroirs',
          p: 'Au XXᵉ siècle, les appellations d\'origine (AOC puis AOP) protègent le lien entre un fromage, sa race animale, son territoire et son savoir-faire. Le Roquefort fut la première AOC fromagère française, en 1925.',
        },
      ],
    },
    {
      id: 'fabrication',
      titre: 'La fabrication',
      sous: 'Du lait au caillé',
      tint: 'var(--color-accent-2-200)',
      ink: 'var(--color-accent-2-900)',
      Icon: DropIcon,
      sections: [
        {
          h: 'Le caillage',
          p: "Tout commence par la coagulation du lait. La voie présure (emprésurage) donne un caillé souple, base des pâtes pressées et molles. La voie lactique, par acidification lente des ferments, donne un caillé fragile typique des fromages de chèvre.",
        },
        {
          h: 'Décaillage et moulage',
          p: "Le caillé est tranché puis brassé. Plus les grains sont fins et chauffés, plus la pâte sera dure : c'est ce qui distingue une pâte pressée cuite (Comté) d'une pâte molle. Le caillé est ensuite versé dans des moules.",
        },
        {
          h: 'Pressage et salage',
          p: 'Le pressage expulse le petit-lait et soude la pâte. Le salage, au sel sec ou par bain de saumure, assaisonne, protège et amorce la formation de la croûte.',
        },
        {
          h: 'Les grandes familles',
          p: 'Selon la technique naissent les familles : pâtes fraîches, molles à croûte fleurie ou lavée, pressées cuites ou non cuites, persillées et fromages fondus.',
        },
      ],
    },
    {
      id: 'affinage',
      titre: "L'affinage",
      sous: 'La maturation en cave',
      tint: 'var(--color-neutral-200)',
      ink: 'var(--color-neutral-700)',
      Icon: HourglassIcon,
      sections: [
        {
          h: "Le métier d'affineur",
          p: "L'affineur conduit la maturation du fromage en cave. Il retourne, brosse, frotte, lave ou pique les fromages selon leur type, jour après jour, jusqu'à leur pleine expression.",
        },
        {
          h: 'Ce qui se passe dans la pâte',
          p: 'Deux phénomènes développent le goût : la protéolyse dégrade les protéines (fondant, arômes) et la lipolyse transforme les matières grasses. La croûte, elle, respire et abrite les flores de surface.',
        },
        {
          h: 'Une question de temps',
          p: "L'affinage va de quelques jours pour un fromage frais à plusieurs semaines pour un camembert, jusqu'à deux ans et plus pour un Comté ou un Beaufort de garde.",
        },
        {
          h: 'Les soins de croûte',
          p: "Croûtes lavées à la morge pour les pâtes odorantes, brossage pour les tommes grises, piquage à l'aiguille pour aérer et bleuir les pâtes persillées.",
        },
      ],
    },
    {
      id: 'moisissures',
      titre: 'Les moisissures',
      sous: 'Les alliées du goût',
      tint: 'var(--color-accent-200)',
      ink: 'var(--color-accent-700)',
      Icon: DotsIcon,
      sections: [
        {
          h: 'La croûte fleurie',
          p: "Le Penicillium candidum (ou camemberti) forme le duvet blanc des camemberts et bries. Il attendrit la pâte de l'extérieur vers le cœur et apporte des notes de champignon.",
        },
        {
          h: 'Le bleu',
          p: 'Le Penicillium roqueforti (et le glaucum) crée les veines bleu-vert des pâtes persillées. Ensemencé dans le caillé, il se développe grâce à l\'air introduit par le piquage.',
        },
        {
          h: 'La morge',
          p: 'Les ferments de surface, dont le Brevibacterium linens, colorent en orangé les croûtes lavées et leur donnent leur puissance aromatique (Munster, Époisses, Vacherin).',
        },
        {
          h: 'Un atout, pas un défaut',
          p: "Ces moisissures sont sélectionnées, cultivées et parfaitement comestibles : loin d'être une altération, elles sont le moteur du goût et de la texture du fromage.",
        },
      ],
    },
    {
      id: 'caves',
      titre: "Les caves d'affinage",
      sous: 'Le berceau des arômes',
      tint: 'var(--color-accent-2-200)',
      ink: 'var(--color-accent-2-900)',
      Icon: ArchIcon,
      sections: [
        {
          h: 'Fraîcheur et humidité',
          p: "Une bonne cave d'affinage marie une température fraîche (8 à 14 °C) et une très forte hygrométrie (85 à 98 %). Ce microclimat stable évite au fromage de se dessécher et nourrit ses flores.",
        },
        {
          h: 'Les caves naturelles',
          p: 'Les fleurines, failles naturelles des caves calcaires des Causses, ventilent le Roquefort à humidité constante. Ailleurs, caves de tuf, celliers de montagne et burons d\'alpage jouent le même rôle.',
        },
        {
          h: 'La flore de la cave',
          p: "Chaque cave abrite une flore microbienne propre, qui imprègne les murs et les fromages : c'est une part invisible mais essentielle du terroir, impossible à reproduire à l'identique.",
        },
        {
          h: 'Les caves modernes',
          p: "Aujourd'hui, des caves climatisées régulent finement température, humidité et ventilation pour reproduire ces conditions à grande échelle, sans renoncer aux caves historiques pour les grands crus.",
        },
      ],
    },
    {
      id: 'bovines',
      titre: 'Races bovines',
      sous: 'Les vaches à fromage',
      tint: 'var(--color-accent-200)',
      ink: 'var(--color-accent-700)',
      Icon: LeafIcon,
      sections: [
        {
          h: 'Un lait, un fromage',
          p: "La race, son alimentation et son terroir façonnent le lait, donc le fromage. Les cahiers des charges AOP imposent souvent des races locales nourries à l'herbe et au foin.",
        },
        {
          h: 'Montbéliarde',
          p: 'Robe pie rouge, rustique et laitière : c\'est la reine des pâtes pressées cuites (Comté, Bleu de Gex). Son lait riche en caséines coagule idéalement.',
        },
        {
          h: 'Abondance & Tarine',
          p: 'Vaches de montagne des Alpes du Nord, adaptées aux alpages. Leur lait donne Abondance, Beaufort, Reblochon et les tommes de Savoie.',
        },
        {
          h: 'Salers & Aubrac',
          p: 'Robes acajou, cornes en lyre, élevées sur les hauts plateaux du Massif central. Elles fournissent le lait du Salers, du Cantal et du Laguiole.',
        },
      ],
    },
    {
      id: 'caprines',
      titre: 'Races caprines',
      sous: 'Les chèvres',
      tint: 'var(--color-neutral-200)',
      ink: 'var(--color-neutral-700)',
      Icon: LeafIcon,
      sections: [
        {
          h: 'Le lait de chèvre',
          p: 'Plus fin et plus blanc que le lait de vache, il se prête à la voie lactique et donne des fromages frais, des bûches, des palets et des tommes au goût caprin caractéristique.',
        },
        {
          h: 'Alpine',
          p: 'La chèvre la plus répandue en Auvergne-Rhône-Alpes : robe chamoisée, très laitière et bien adaptée aux reliefs. Elle est derrière le Picodon, le Chevrotin et les tommes caprines.',
        },
        {
          h: 'Saanen',
          p: "Grande chèvre blanche d'origine suisse, réputée pour l'abondance et la régularité de son lait, souvent élevée en plaine.",
        },
        {
          h: 'Poitevine & Rove',
          p: "Races plus rustiques et locales, à la production plus modeste mais au lait très typé, aujourd'hui préservées par des éleveurs passionnés.",
        },
      ],
    },
    {
      id: 'ovines',
      titre: 'Races ovines',
      sous: 'Les brebis',
      tint: 'var(--color-accent-2-200)',
      ink: 'var(--color-accent-2-900)',
      Icon: LeafIcon,
      sections: [
        {
          h: 'Le lait de brebis',
          p: 'Deux fois plus riche en matière grasse et en protéines que le lait de vache, il donne des fromages onctueux et puissants, à la note légère de lanoline.',
        },
        {
          h: 'Lacaune',
          p: 'La grande race laitière du sud du Massif central, à la tête fine et sans cornes. Son lait fait le Roquefort et de nombreuses tommes de brebis.',
        },
        {
          h: 'Manech & Basco-Béarnaise',
          p: 'Brebis des Pyrénées, à tête rousse ou noire, emblématiques des fromages de brebis du Sud-Ouest (Ossau-Iraty).',
        },
        {
          h: 'Préalpes du Sud',
          p: 'Race rustique du sud des Alpes, élevée surtout pour la viande mais dont le lait sert quelques tommes fermières confidentielles.',
        },
      ],
    },
  ]
}
