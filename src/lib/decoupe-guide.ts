// Le guide de découpe, méthode par méthode : ce que la carte de l'écran
// Découpe n'a pas la place de dire.
//
// Ces textes ne viennent pas des données : ce sont des consignes de service,
// écrites pour ce projet et non extraites d'un article. Ils décrivent l'usage
// courant des fromagers — un geste, sa raison, ce qu'il faut éviter — et
// n'affirment rien sur un fromage en particulier, ce que seule sa fiche fait.
// English translations live alongside as `{ fr, en }` pairs, not a separate
// file — see decoupeGuide().
//
// Le fil conducteur est toujours le même : une part doit valoir les autres.
// Un fromage n'est homogène ni de la croûte au cœur, ni d'un bout à l'autre,
// et c'est la découpe qui répartit ces états — ou les confisque au premier
// servi.
import type { DecoupeMethodId } from './decoupe'
import { type Lang } from './i18n/lang'

export interface DecoupeEtape {
  /** Deux ou trois mots : sert aussi de légende sous le schéma. */
  titre: string
  texte: string
}

export interface DecoupeGuide {
  /** Le geste, en une phrase. */
  principe: string
  /** Pourquoi celui-là : ce que la découpe répartit, et ce qu'elle gâche
   *  quand elle est faite autrement. */
  pourquoi: string
  /** Les quatre temps du geste : la forme, la lame, le premier coup, les
   *  parts. Le schéma de l'écran suit exactement ces quatre étapes. */
  etapes: [DecoupeEtape, DecoupeEtape, DecoupeEtape, DecoupeEtape]
  /** Ce qui déséquilibre le fromage pour les convives suivants. */
  eviter: string[]
  /** Le cas particulier de la famille, quand il y en a un. */
  particularite: DecoupeEtape
}

interface Bi {
  fr: string
  en: string
}
interface EtapeRaw {
  titre: Bi
  texte: Bi
}
interface GuideRaw {
  principe: Bi
  pourquoi: Bi
  etapes: [EtapeRaw, EtapeRaw, EtapeRaw, EtapeRaw]
  eviter: Bi[]
  particularite: EtapeRaw
}

const GUIDE_RAW: Record<DecoupeMethodId, GuideRaw> = {
  ronds: {
    principe: {
      fr: 'Des parts triangulaires régulières, tracées du centre vers le bord comme une tarte : chacune porte autant de cœur que de croûte, et la même épaisseur que les autres.',
      en: 'Even triangular wedges, cut from the centre to the edge like a pie: each carries the same share of heart and rind, and the same thickness as the rest.',
    },
    pourquoi: {
      fr: "Une pâte molle ne mûrit pas d'un bloc. L'affinage part de la croûte et progresse vers l'intérieur, si bien que la couronne est plus fondante et plus parfumée que le centre, qui reste plus ferme et plus frais. Une part qui va du centre au bord traverse tous ces états ; une bande prélevée sur le côté n'en donne qu'un, et laisse aux suivants un fromage déséquilibré.",
      en: "A soft cheese doesn't ripen all at once. Ageing starts at the rind and moves inward, so the outer ring ends up more melting and fragrant than the centre, which stays firmer and fresher. A wedge from centre to edge crosses all these stages; a strip cut off the side gives only one, leaving the next guests an unbalanced cheese.",
    },
    etapes: [
      {
        titre: { fr: 'La forme', en: 'The shape' },
        texte: {
          fr: "Un disque bas, à croûte fleurie ou lavée, de 8 à 25 cm. Sortez-le une heure avant le service pour qu'il donne son goût.",
          en: 'A low disc, with a bloomy or washed rind, 8 to 25 cm across. Take it out an hour before serving so it gives its full flavour.',
        },
      },
      {
        titre: { fr: 'La lame', en: 'The knife' },
        texte: {
          fr: "Un couteau à lame fine, passé sous l'eau chaude et essuyé. Posez la pointe au centre du fromage, la lame à plat sur le rayon à couper.",
          en: 'A thin-bladed knife, run under hot water and wiped dry. Rest the tip at the centre of the cheese, the blade flat along the line to cut.',
        },
      },
      {
        titre: { fr: 'Le premier coup', en: 'The first cut' },
        texte: {
          fr: "Coupez du centre vers le bord d'un seul geste, sans scier, en traversant la croûte du dessus jusqu'à la planche.",
          en: 'Cut from centre to edge in one motion, without sawing, going through the top rind all the way to the board.',
        },
      },
      {
        titre: { fr: 'Les parts', en: 'The wedges' },
        texte: {
          fr: 'Continuez en secteurs réguliers : six parts pour six convives, huit pour huit. Comptez-les avant de commencer plutôt qu’en cours de route.',
          en: 'Continue in even sectors: six wedges for six guests, eight for eight. Count them before you start rather than partway through.',
        },
      },
    ],
    eviter: [
      {
        fr: 'Prélever une bande sur le bord : elle emporte la croûte et le plus affiné, et laisse un cœur nu.',
        en: 'Cutting a strip off the edge: it takes the rind and the most ripened part, leaving a bare heart behind.',
      },
      {
        fr: 'Creuser le cœur à la cuillère d’un fromage qui se coupe encore : les suivants n’ont plus que la couronne.',
        en: 'Spooning out the heart of a cheese that still cuts cleanly: the next guests are left with only the outer ring.',
      },
      {
        fr: 'Scier : la pâte molle colle à la lame et se déchire. Un essuyage entre deux parts suffit à garder des coupes nettes.',
        en: 'Sawing: soft paste sticks to the blade and tears. Wiping the blade between wedges is enough to keep the cuts clean.',
      },
    ],
    particularite: {
      titre: { fr: 'Le camembert très affiné', en: 'A well-ripened camembert' },
      texte: {
        fr: "Un camembert à cœur coulant se découpe mieux sorti du froid : un quart d'heure au réfrigérateur raffermit assez la pâte pour que les parts tiennent, et on les laisse revenir à température dans l'assiette. Passé ce stade, il relève de la calotte et de la cuillère — voir « Cœurs coulants & carrés ».",
        en: 'A runny-centred camembert cuts more cleanly cold: fifteen minutes in the fridge firms the paste enough for the wedges to hold, then they come back to room temperature on the plate. Past that point, it belongs with the spoon-and-cap method — see "Runny hearts & squares".',
      },
    },
  },

  meules: {
    principe: {
      fr: 'On ne coupe pas la meule, on recoupe la part : fendez-la dans sa longueur, puis débitez le talon — le côté croûte — en petits bâtonnets.',
      en: "You don't cut the wheel, you re-cut the wedge: split it lengthwise, then cut the heel — the rind side — into small sticks.",
    },
    pourquoi: {
      fr: "Dans une pâte pressée, la pointe et le talon n'ont ni la même texture ni le même goût : la pâte est plus sèche et plus salée près de la croûte, plus souple et plus douce vers la pointe, qui vient du cœur de la meule. Une part coupée en travers donne au premier toute la pointe et au dernier toute la croûte. Recoupée dans sa longueur, elle donne à chacun un morceau de l'une et de l'autre.",
      en: "In a pressed cheese, the tip and the heel differ in both texture and taste: the paste is drier and saltier near the rind, softer and milder toward the tip, which comes from the heart of the wheel. A wedge cut crosswise gives the first person all tip and the last all rind. Re-cut lengthwise, it gives everyone a piece of both.",
    },
    etapes: [
      {
        titre: { fr: 'La forme', en: 'The shape' },
        texte: {
          fr: 'Une part triangulaire prise dans une meule, croûte sur le grand côté. C’est ce triangle qu’on redécoupe, jamais la meule entière.',
          en: 'A triangular wedge taken from a wheel, rind along the long edge. It is this triangle you re-cut, never the whole wheel.',
        },
      },
      {
        titre: { fr: 'La lame', en: 'The knife' },
        texte: {
          fr: 'Une lame rigide et large, ou un fil pour les grandes parts. Une pâte pressée résiste : mieux vaut appuyer droit que scier.',
          en: 'A rigid, wide blade, or a wire for large wedges. Pressed paste resists: better to press straight down than saw.',
        },
      },
      {
        titre: { fr: 'Le premier coup', en: 'The first cut' },
        texte: {
          fr: 'Coupez la part dans la longueur, parallèlement au talon, pour séparer la pointe du côté croûte.',
          en: 'Cut the wedge lengthwise, parallel to the heel, to separate the tip from the rind side.',
        },
      },
      {
        titre: { fr: 'Les parts', en: 'The pieces' },
        texte: {
          fr: 'Débitez le talon en bâtonnets et la pointe en tranches, puis servez un peu de chaque à chacun.',
          en: 'Cut the heel into sticks and the tip into slices, then serve everyone a little of each.',
        },
      },
    ],
    eviter: [
      {
        fr: 'Couper la part en travers : le premier a la pointe, le dernier n’a que la croûte.',
        en: 'Cutting the wedge crosswise: the first person gets the tip, the last only the rind.',
      },
      {
        fr: 'Parer la croûte à l’avance : elle protège la pâte du dessèchement jusqu’au service.',
        en: "Trimming the rind ahead of time: it protects the paste from drying out until it's served.",
      },
      {
        fr: 'Servir des morceaux tous pris du même côté : c’est le déséquilibre que toute la méthode cherche à éviter.',
        en: 'Serving pieces all cut from the same side: that is exactly the imbalance this whole method avoids.',
      },
    ],
    particularite: {
      titre: { fr: 'Les très grandes meules', en: 'Very large wheels' },
      texte: {
        fr: 'Au-delà d’une dizaine de kilos — comté, beaufort, emmental, cantal, salers —, la meule est fendue chez le fromager, au fil ou au couteau à deux poignées. À la maison on ne travaille jamais que la part.',
        en: "Above about ten kilos — Comté, Beaufort, Emmental, Cantal, Salers — the wheel is split at the cheesemonger's, with a wire or a two-handled knife. At home, you only ever work with the wedge.",
      },
    },
  },

  persillees: {
    principe: {
      fr: 'En rayons fins depuis le cœur vers la croûte, au fil plutôt qu’à la lame : la lyre du fromager, ou un simple fil tendu.',
      en: "In thin wedges from the heart out to the rind, with a wire rather than a blade — the cheesemonger's lyre, or a simple taut wire.",
    },
    pourquoi: {
      fr: "Le persillé n'est pas réparti au hasard : le bleu se développe le long des piqûres et des ouvertures de la pâte, donc plus au cœur qu'en surface, et c'est là que le goût est le plus fort et le plus salé. Une découpe en rayons donne à chacun un peu de cœur bleu et un peu de bord clair. Le fil plutôt que la lame parce qu'une pâte persillée est friable : une lame épaisse la tasse et la fait graisser, le fil la traverse sans l'écraser.",
      en: "The blue veining isn't spread at random: it develops along the piercings and openings in the paste, so more at the heart than at the surface, and that's where the taste is strongest and saltiest. Cutting in wedges gives everyone a bit of blue heart and a bit of pale edge. A wire rather than a blade, because blue paste is crumbly: a thick blade compacts it and makes it greasy, while the wire passes through without crushing it.",
    },
    etapes: [
      {
        titre: { fr: 'La forme', en: 'The shape' },
        texte: {
          fr: 'Un cylindre, ou une part de cylindre, veiné de bleu-vert. Pâte friable, plus marbrée au centre qu’au bord.',
          en: 'A cylinder, or a wedge of one, veined blue-green. Crumbly paste, more marbled at the centre than at the edge.',
        },
      },
      {
        titre: { fr: 'Le fil', en: 'The wire' },
        texte: {
          fr: 'Une lyre à roquefort, ou un fil de cuisine tendu entre deux mains. À défaut, une lame fine passée sous l’eau chaude et essuyée.',
          en: 'A Roquefort lyre, or a length of kitchen wire held taut between two hands. Failing that, a thin blade run under hot water and wiped dry.',
        },
      },
      {
        titre: { fr: 'Le premier coup', en: 'The first cut' },
        texte: {
          fr: 'Descendez le fil d’un trait, du cœur vers la croûte, sans revenir en arrière.',
          en: 'Draw the wire down in one motion, from heart to rind, without pulling back.',
        },
      },
      {
        titre: { fr: 'Les parts', en: 'The wedges' },
        texte: {
          fr: 'Continuez en éventail, des rayons fins et réguliers, jusqu’à faire le tour de la part.',
          en: 'Continue fanning out, thin and even wedges, all the way round the piece.',
        },
      },
    ],
    eviter: [
      {
        fr: 'Écraser la pâte sous une lame épaisse : le persillé se referme et le fromage graisse.',
        en: 'Crushing the paste under a thick blade: the veining closes up and the cheese turns greasy.',
      },
      {
        fr: 'Servir un convive sur le seul cœur : c’est la partie la plus bleue et la plus salée du fromage.',
        en: "Serving one guest only from the heart: it's the bluest, saltiest part of the cheese.",
      },
      {
        fr: 'Sortir la part trop tôt : très à l’aise à température, une pâte persillée devient tartinable et ne se coupe plus proprement.',
        en: "Taking the wedge out too early: blue paste softens quickly at room temperature and becomes spreadable, no longer cutting cleanly.",
      },
    ],
    particularite: {
      titre: { fr: 'La lyre', en: 'The lyre' },
      texte: {
        fr: 'Le fil du fromager s’appelle une lyre : deux montants et un fil d’acier qu’on abaisse d’un coup. Passé humide, il n’accroche pas la pâte. Chez soi, un fil à couper tendu fait le même travail, et une lame fine rincée entre deux parts s’en approche.',
        en: "The cheesemonger's wire tool is called a lyre: two uprights and a steel wire lowered in one motion. Dampened, it doesn't snag the paste. At home, a taut cutting wire does the same job, and a thin blade rinsed between wedges comes close.",
      },
    },
  },

  brie: {
    principe: {
      fr: 'Jamais « le nez ». Sur une grande pointe, on tranche en biseau le long des rayons pour que chaque part garde un morceau de croûte extérieure.',
      en: 'Never just "the nose". On a large wedge, cut on the bias along the radius lines so every slice keeps a piece of the outer rind.',
    },
    pourquoi: {
      fr: "Une pointe de brie est un triangle découpé dans une roue de 35 à 37 cm : sa pointe fine — le nez — vient du centre de la roue, son grand côté en est le bord. Or le centre est la partie la plus crémeuse, le bord la plus ferme et la plus croûtée. Manger le nez, c'est manger le cœur de tout le monde : il ne reste ensuite que des morceaux de croûte. Les biseaux redistribuent, chaque part touchant à la fois au nez et au bord.",
      en: "A brie wedge is a triangle cut from a 35–37 cm wheel: its thin tip — the nose — comes from the centre of the wheel, its long edge from the rim. The centre is the creamiest part, the edge the firmest and most rind-heavy. Eating the nose means eating everyone's share of the heart, leaving only rind pieces afterward. Bias cuts redistribute it, so every slice touches both the nose and the edge.",
    },
    etapes: [
      {
        titre: { fr: 'La forme', en: 'The shape' },
        texte: {
          fr: 'Une part triangulaire prise dans une grande roue molle : le nez d’un côté, la croûte fleurie de l’autre.',
          en: 'A triangular wedge taken from a large soft wheel: the nose at one end, the bloomy rind at the other.',
        },
      },
      {
        titre: { fr: 'La lame', en: 'The knife' },
        texte: {
          fr: 'Une lame longue et fine, essuyée entre deux coupes : la pâte d’un brie mûr colle et arrache.',
          en: 'A long, thin blade, wiped between cuts: a ripe brie\'s paste sticks and tears.',
        },
      },
      {
        titre: { fr: 'Le premier coup', en: 'The first cut' },
        texte: {
          fr: 'Partez du milieu du grand côté et coupez en biais vers le nez, sans le sectionner.',
          en: 'Start from the middle of the long edge and cut on the bias toward the nose, without severing it.',
        },
      },
      {
        titre: { fr: 'Les parts', en: 'The slices' },
        texte: {
          fr: 'Continuez en biseaux parallèles de part et d’autre : chaque part porte un peu de nez et un peu de croûte.',
          en: 'Continue with parallel bias cuts on either side: every slice carries a bit of nose and a bit of rind.',
        },
      },
    ],
    eviter: [
      {
        fr: 'Couper le nez : c’est le geste qu’on reproche le plus à table, et il ne laisse que la croûte aux suivants.',
        en: "Cutting off the nose: it's the most frowned-upon move at the table, and it leaves only rind for everyone after.",
      },
      {
        fr: 'Détailler toute la roue à l’avance : un brie sèche par la coupe, pas par la croûte.',
        en: 'Cutting up the whole wheel in advance: a brie dries out from the cut face, not through the rind.',
      },
      {
        fr: 'Servir froid : sous 16 °C la pâte est plâtreuse, et le biseau se casse au lieu de trancher.',
        en: 'Serving it cold: below 16°C the paste turns chalky, and the bias cut breaks instead of slicing.',
      },
    ],
    particularite: {
      titre: { fr: 'La roue entière', en: 'The whole wheel' },
      texte: {
        fr: 'Une roue de brie de Meaux pèse près de 3 kg. Elle se fend d’abord en quartiers, du centre vers le bord, et c’est chaque quartier qu’on retaille ensuite en biseaux — la règle du nez ne vaut que sur la part.',
        en: 'A wheel of Brie de Meaux weighs close to 3 kg. It is first split into quarters, from centre to edge, and each quarter is then re-cut into bias slices — the rule about the nose only applies to the wedge itself.',
      },
    },
  },

  buches: {
    principe: {
      fr: 'Les bûches en rondelles régulières ; les pyramides et les troncs de cône en tranches prises dans la hauteur, depuis la pointe.',
      en: 'Logs in even rounds; pyramids and truncated cones in slices taken lengthwise, from the tip down.',
    },
    pourquoi: {
      fr: "Un chèvre ne s'affine pas de la même façon d'un bout à l'autre. Les extrémités d'une bûche sèchent plus vite que son milieu, et la pointe d'une pyramide plus vite que sa base : entre les deux, il peut y avoir plusieurs semaines d'écart apparent. Des rondelles d'égale épaisseur distribuent ces états ; il reste seulement à ne pas donner les deux bouts au même convive.",
      en: "A goat cheese doesn't ripen evenly end to end. A log's ends dry out faster than its middle, and a pyramid's tip faster than its base — the apparent gap between them can amount to several weeks. Rounds of equal thickness spread these states around; the only remaining rule is not to give both ends to the same guest.",
    },
    etapes: [
      {
        titre: { fr: 'La forme', en: 'The shape' },
        texte: {
          fr: 'Une bûche, un tronc de cône, une pyramide tronquée. Souvent cendrée, parfois traversée d’une paille de seigle.',
          en: 'A log, a truncated cone, a truncated pyramid. Often ash-coated, sometimes run through with a rye straw.',
        },
      },
      {
        titre: { fr: 'La lame', en: 'The knife' },
        texte: {
          fr: 'Un fil, ou une lame fine passée sous l’eau chaude : une pâte de chèvre jeune s’écrase sous une lame épaisse.',
          en: 'A wire, or a thin blade run under hot water: young goat paste is crushed by a thick blade.',
        },
      },
      {
        titre: { fr: 'Le premier coup', en: 'The first cut' },
        texte: {
          fr: 'Coupez à angle droit, à un centimètre du bout. Sur une pyramide, tranchez dans la hauteur, de la pointe vers la base.',
          en: 'Cut at a right angle, a centimetre in from the end. On a pyramid, slice lengthwise, from tip to base.',
        },
      },
      {
        titre: { fr: 'Les parts', en: 'The pieces' },
        texte: {
          fr: 'Des rondelles d’égale épaisseur, et les deux extrémités réparties entre deux assiettes plutôt qu’une seule.',
          en: 'Rounds of equal thickness, with the two end pieces split between two plates rather than given to one.',
        },
      },
    ],
    eviter: [
      {
        fr: 'Donner les deux bouts à la même personne : ce sont les morceaux les plus secs et les plus croûtés de la bûche.',
        en: "Giving both ends to the same person: they're the driest, most rind-heavy pieces of the log.",
      },
      {
        fr: 'Retirer la paille de seigle avant de couper : c’est elle qui tient la bûche pendant qu’on la tranche.',
        en: 'Removing the rye straw before cutting: it holds the log together while you slice it.',
      },
      {
        fr: 'Appuyer au lieu de trancher : la rondelle se fend et la cendre part dans la pâte.',
        en: 'Pressing instead of slicing: the round splits and the ash smears into the paste.',
      },
    ],
    particularite: {
      titre: { fr: 'La cendre', en: 'The ash coating' },
      texte: {
        fr: 'La cendre d’une sainte-maure, d’un valençay ou d’un selles-sur-cher est du charbon végétal : elle se mange avec la pâte et ne se pare pas. Essuyer la lame entre deux rondelles évite seulement d’en promener sur l’assiette.',
        en: "The ash on a Sainte-Maure, a Valençay or a Selles-sur-Cher is vegetable charcoal: it's eaten along with the paste, not trimmed off. Wiping the blade between rounds only keeps it from smudging across the plate.",
      },
    },
  },

  coeurs: {
    principe: {
      fr: 'Deux gestes sous un même nom : un petit fromage devenu coulant s’ouvre en calotte et se mange à la cuillère ; un carré ou un pavé se tranche en bandes parallèles.',
      en: 'Two moves under one name: a small cheese that has turned runny is opened cap-style and eaten by the spoon; a square or block is sliced in parallel strips.',
    },
    pourquoi: {
      fr: "Un fromage coulant ne se coupe plus : entamé de travers, il se vide dans l'assiette et il ne reste que la croûte. Ouvrir la croûte en calotte — un couvercle découpé sur le dessus — garde la pâte dans son propre contenant, et chacun se sert à la cuillère, du centre vers le bord. Pour un carré, la logique redevient celle des ronds : des bandes régulières donnent à chacun autant de croûte que de cœur, ce qu'une part prise dans un angle ne fait jamais.",
      en: "A runny cheese no longer cuts: cut into the wrong way, it spills onto the plate and only the rind is left. Opening the rind cap-style — a lid cut out of the top — keeps the paste in its own container, and everyone spoons from the centre outward. For a square, the logic returns to that of small rounds: even strips give everyone the same share of rind and heart, which a corner piece never does.",
    },
    etapes: [
      {
        titre: { fr: 'La forme', en: 'The shape' },
        texte: {
          fr: 'Un petit fromage à croûte lavée ou fleurie, mûr au point d’être coulant, souvent servi dans sa boîte ou sa sangle.',
          en: 'A small cheese with a washed or bloomy rind, ripe to the point of runniness, often served in its box or its bark strap.',
        },
      },
      {
        titre: { fr: 'La lame', en: 'The knife' },
        texte: {
          fr: 'Une lame fine tenue presque à plat, et une cuillère prête à côté : c’est elle qui servira.',
          en: 'A thin blade held almost flat, and a spoon ready alongside — that\'s what will actually serve it.',
        },
      },
      {
        titre: { fr: 'Le premier coup', en: 'The first cut' },
        texte: {
          fr: 'Tracez un cercle sur le dessus, à un centimètre du bord, et soulevez la calotte de croûte d’une pièce.',
          en: 'Trace a circle on top, a centimetre in from the edge, and lift the rind cap off in one piece.',
        },
      },
      {
        titre: { fr: 'Le service', en: 'Serving' },
        texte: {
          fr: 'Servez à la cuillère depuis le centre, et laissez la croûte faire le récipient jusqu’au bout.',
          en: 'Spoon out from the centre, and let the rind keep acting as the bowl until the end.',
        },
      },
    ],
    eviter: [
      {
        fr: 'Couper un fromage coulant en parts : la pâte s’échappe, et les derniers servis n’ont que la croûte.',
        en: 'Cutting a runny cheese into wedges: the paste escapes, and the last people served get only rind.',
      },
      {
        fr: 'Sortir un mont d’or ou un vacherin de sa boîte : la sangle et l’épicéa le tiennent, et sans eux il s’étale.',
        en: "Taking a Mont d'Or or a Vacherin out of its box: the bark strap and spruce casing hold it together, and without them it spreads out.",
      },
      {
        fr: 'Découper un carré en petits carrés : ceux du bord n’ont que de la croûte, celui du milieu n’en a pas.',
        en: 'Cutting a square into small squares: the edge pieces get only rind, the middle piece none at all.',
      },
    ],
    particularite: {
      titre: { fr: 'Les carrés et les pavés', en: 'Squares and blocks' },
      texte: {
        fr: 'Maroilles, pont-l’évêque, pavé d’Auge : pâte tenue, croûte lavée, angles francs. On les coupe en bandes parallèles d’un centimètre, chaque bande ensuite en deux ou trois ; sur un grand carré, une coupe en croix puis en triangles depuis le centre donne le même équilibre. La règle ne change pas : autant de croûte que de cœur dans chaque portion.',
        en: 'Maroilles, Pont-l\'Évêque, Pavé d\'Auge: firm paste, washed rind, sharp corners. Cut them into parallel one-centimetre strips, then each strip into two or three; on a large square, a cross cut followed by triangles from the centre gives the same balance. The rule never changes: as much rind as heart in every portion.',
      },
    },
  },
}

function pickEtape(e: EtapeRaw, lang: Lang): DecoupeEtape {
  return { titre: e.titre[lang], texte: e.texte[lang] }
}

/** The whole guide for one method, in one language. Replaces the old plain
 *  `DECOUPE_GUIDE[id]` lookup. */
export function decoupeGuide(id: DecoupeMethodId, lang: Lang = 'fr'): DecoupeGuide {
  const raw = GUIDE_RAW[id]
  return {
    principe: raw.principe[lang],
    pourquoi: raw.pourquoi[lang],
    etapes: raw.etapes.map((e) => pickEtape(e, lang)) as DecoupeGuide['etapes'],
    eviter: raw.eviter.map((e) => e[lang]),
    particularite: pickEtape(raw.particularite, lang),
  }
}

/** Method ids that have a guide — used by tests to check coverage stays in
 *  sync with decoupeDefs(). */
export const DECOUPE_GUIDE_IDS = Object.keys(GUIDE_RAW) as DecoupeMethodId[]
