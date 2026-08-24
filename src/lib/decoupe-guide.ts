// Le guide de découpe, méthode par méthode : ce que la carte de l'écran
// Découpe n'a pas la place de dire.
//
// Ces textes ne viennent pas des données : ce sont des consignes de service,
// écrites pour ce projet et non extraites d'un article. Ils décrivent l'usage
// courant des fromagers — un geste, sa raison, ce qu'il faut éviter — et
// n'affirment rien sur un fromage en particulier, ce que seule sa fiche fait.
//
// Le fil conducteur est toujours le même : une part doit valoir les autres.
// Un fromage n'est homogène ni de la croûte au cœur, ni d'un bout à l'autre,
// et c'est la découpe qui répartit ces états — ou les confisque au premier
// servi.
import type { DecoupeMethodId } from './decoupe'

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

export const DECOUPE_GUIDE: Record<DecoupeMethodId, DecoupeGuide> = {
  ronds: {
    principe:
      'Des parts triangulaires régulières, tracées du centre vers le bord comme une tarte : chacune porte autant de cœur que de croûte, et la même épaisseur que les autres.',
    pourquoi:
      "Une pâte molle ne mûrit pas d'un bloc. L'affinage part de la croûte et progresse vers l'intérieur, si bien que la couronne est plus fondante et plus parfumée que le centre, qui reste plus ferme et plus frais. Une part qui va du centre au bord traverse tous ces états ; une bande prélevée sur le côté n'en donne qu'un, et laisse aux suivants un fromage déséquilibré.",
    etapes: [
      {
        titre: 'La forme',
        texte:
          "Un disque bas, à croûte fleurie ou lavée, de 8 à 25 cm. Sortez-le une heure avant le service pour qu'il donne son goût.",
      },
      {
        titre: 'La lame',
        texte:
          "Un couteau à lame fine, passé sous l'eau chaude et essuyé. Posez la pointe au centre du fromage, la lame à plat sur le rayon à couper.",
      },
      {
        titre: 'Le premier coup',
        texte:
          "Coupez du centre vers le bord d'un seul geste, sans scier, en traversant la croûte du dessus jusqu'à la planche.",
      },
      {
        titre: 'Les parts',
        texte:
          'Continuez en secteurs réguliers : six parts pour six convives, huit pour huit. Comptez-les avant de commencer plutôt qu’en cours de route.',
      },
    ],
    eviter: [
      'Prélever une bande sur le bord : elle emporte la croûte et le plus affiné, et laisse un cœur nu.',
      'Creuser le cœur à la cuillère d’un fromage qui se coupe encore : les suivants n’ont plus que la couronne.',
      'Scier : la pâte molle colle à la lame et se déchire. Un essuyage entre deux parts suffit à garder des coupes nettes.',
    ],
    particularite: {
      titre: 'Le camembert très affiné',
      texte:
        "Un camembert à cœur coulant se découpe mieux sorti du froid : un quart d'heure au réfrigérateur raffermit assez la pâte pour que les parts tiennent, et on les laisse revenir à température dans l'assiette. Passé ce stade, il relève de la calotte et de la cuillère — voir « Cœurs coulants & carrés ».",
    },
  },

  meules: {
    principe:
      'On ne coupe pas la meule, on recoupe la part : fendez-la dans sa longueur, puis débitez le talon — le côté croûte — en petits bâtonnets.',
    pourquoi:
      "Dans une pâte pressée, la pointe et le talon n'ont ni la même texture ni le même goût : la pâte est plus sèche et plus salée près de la croûte, plus souple et plus douce vers la pointe, qui vient du cœur de la meule. Une part coupée en travers donne au premier toute la pointe et au dernier toute la croûte. Recoupée dans sa longueur, elle donne à chacun un morceau de l'une et de l'autre.",
    etapes: [
      {
        titre: 'La forme',
        texte:
          'Une part triangulaire prise dans une meule, croûte sur le grand côté. C’est ce triangle qu’on redécoupe, jamais la meule entière.',
      },
      {
        titre: 'La lame',
        texte:
          'Une lame rigide et large, ou un fil pour les grandes parts. Une pâte pressée résiste : mieux vaut appuyer droit que scier.',
      },
      {
        titre: 'Le premier coup',
        texte:
          'Coupez la part dans la longueur, parallèlement au talon, pour séparer la pointe du côté croûte.',
      },
      {
        titre: 'Les parts',
        texte:
          'Débitez le talon en bâtonnets et la pointe en tranches, puis servez un peu de chaque à chacun.',
      },
    ],
    eviter: [
      'Couper la part en travers : le premier a la pointe, le dernier n’a que la croûte.',
      'Parer la croûte à l’avance : elle protège la pâte du dessèchement jusqu’au service.',
      'Servir des morceaux tous pris du même côté : c’est le déséquilibre que toute la méthode cherche à éviter.',
    ],
    particularite: {
      titre: 'Les très grandes meules',
      texte:
        'Au-delà d’une dizaine de kilos — comté, beaufort, emmental, cantal, salers —, la meule est fendue chez le fromager, au fil ou au couteau à deux poignées. À la maison on ne travaille jamais que la part.',
    },
  },

  persillees: {
    principe:
      'En rayons fins depuis le cœur vers la croûte, au fil plutôt qu’à la lame : la lyre du fromager, ou un simple fil tendu.',
    pourquoi:
      "Le persillé n'est pas réparti au hasard : le bleu se développe le long des piqûres et des ouvertures de la pâte, donc plus au cœur qu'en surface, et c'est là que le goût est le plus fort et le plus salé. Une découpe en rayons donne à chacun un peu de cœur bleu et un peu de bord clair. Le fil plutôt que la lame parce qu'une pâte persillée est friable : une lame épaisse la tasse et la fait graisser, le fil la traverse sans l'écraser.",
    etapes: [
      {
        titre: 'La forme',
        texte:
          'Un cylindre, ou une part de cylindre, veiné de bleu-vert. Pâte friable, plus marbrée au centre qu’au bord.',
      },
      {
        titre: 'Le fil',
        texte:
          'Une lyre à roquefort, ou un fil de cuisine tendu entre deux mains. À défaut, une lame fine passée sous l’eau chaude et essuyée.',
      },
      {
        titre: 'Le premier coup',
        texte:
          'Descendez le fil d’un trait, du cœur vers la croûte, sans revenir en arrière.',
      },
      {
        titre: 'Les parts',
        texte:
          'Continuez en éventail, des rayons fins et réguliers, jusqu’à faire le tour de la part.',
      },
    ],
    eviter: [
      'Écraser la pâte sous une lame épaisse : le persillé se referme et le fromage graisse.',
      'Servir un convive sur le seul cœur : c’est la partie la plus bleue et la plus salée du fromage.',
      'Sortir la part trop tôt : très à l’aise à température, une pâte persillée devient tartinable et ne se coupe plus proprement.',
    ],
    particularite: {
      titre: 'La lyre',
      texte:
        'Le fil du fromager s’appelle une lyre : deux montants et un fil d’acier qu’on abaisse d’un coup. Passé humide, il n’accroche pas la pâte. Chez soi, un fil à couper tendu fait le même travail, et une lame fine rincée entre deux parts s’en approche.',
    },
  },

  brie: {
    principe:
      'Jamais « le nez ». Sur une grande pointe, on tranche en biseau le long des rayons pour que chaque part garde un morceau de croûte extérieure.',
    pourquoi:
      "Une pointe de brie est un triangle découpé dans une roue de 35 à 37 cm : sa pointe fine — le nez — vient du centre de la roue, son grand côté en est le bord. Or le centre est la partie la plus crémeuse, le bord la plus ferme et la plus croûtée. Manger le nez, c'est manger le cœur de tout le monde : il ne reste ensuite que des morceaux de croûte. Les biseaux redistribuent, chaque part touchant à la fois au nez et au bord.",
    etapes: [
      {
        titre: 'La forme',
        texte:
          'Une part triangulaire prise dans une grande roue molle : le nez d’un côté, la croûte fleurie de l’autre.',
      },
      {
        titre: 'La lame',
        texte:
          'Une lame longue et fine, essuyée entre deux coupes : la pâte d’un brie mûr colle et arrache.',
      },
      {
        titre: 'Le premier coup',
        texte:
          'Partez du milieu du grand côté et coupez en biais vers le nez, sans le sectionner.',
      },
      {
        titre: 'Les parts',
        texte:
          'Continuez en biseaux parallèles de part et d’autre : chaque part porte un peu de nez et un peu de croûte.',
      },
    ],
    eviter: [
      'Couper le nez : c’est le geste qu’on reproche le plus à table, et il ne laisse que la croûte aux suivants.',
      'Détailler toute la roue à l’avance : un brie sèche par la coupe, pas par la croûte.',
      'Servir froid : sous 16 °C la pâte est plâtreuse, et le biseau se casse au lieu de trancher.',
    ],
    particularite: {
      titre: 'La roue entière',
      texte:
        'Une roue de brie de Meaux pèse près de 3 kg. Elle se fend d’abord en quartiers, du centre vers le bord, et c’est chaque quartier qu’on retaille ensuite en biseaux — la règle du nez ne vaut que sur la part.',
    },
  },

  buches: {
    principe:
      'Les bûches en rondelles régulières ; les pyramides et les troncs de cône en tranches prises dans la hauteur, depuis la pointe.',
    pourquoi:
      "Un chèvre ne s'affine pas de la même façon d'un bout à l'autre. Les extrémités d'une bûche sèchent plus vite que son milieu, et la pointe d'une pyramide plus vite que sa base : entre les deux, il peut y avoir plusieurs semaines d'écart apparent. Des rondelles d'égale épaisseur distribuent ces états ; il reste seulement à ne pas donner les deux bouts au même convive.",
    etapes: [
      {
        titre: 'La forme',
        texte:
          'Une bûche, un tronc de cône, une pyramide tronquée. Souvent cendrée, parfois traversée d’une paille de seigle.',
      },
      {
        titre: 'La lame',
        texte:
          'Un fil, ou une lame fine passée sous l’eau chaude : une pâte de chèvre jeune s’écrase sous une lame épaisse.',
      },
      {
        titre: 'Le premier coup',
        texte:
          'Coupez à angle droit, à un centimètre du bout. Sur une pyramide, tranchez dans la hauteur, de la pointe vers la base.',
      },
      {
        titre: 'Les parts',
        texte:
          'Des rondelles d’égale épaisseur, et les deux extrémités réparties entre deux assiettes plutôt qu’une seule.',
      },
    ],
    eviter: [
      'Donner les deux bouts à la même personne : ce sont les morceaux les plus secs et les plus croûtés de la bûche.',
      'Retirer la paille de seigle avant de couper : c’est elle qui tient la bûche pendant qu’on la tranche.',
      'Appuyer au lieu de trancher : la rondelle se fend et la cendre part dans la pâte.',
    ],
    particularite: {
      titre: 'La cendre',
      texte:
        'La cendre d’une sainte-maure, d’un valençay ou d’un selles-sur-cher est du charbon végétal : elle se mange avec la pâte et ne se pare pas. Essuyer la lame entre deux rondelles évite seulement d’en promener sur l’assiette.',
    },
  },

  coeurs: {
    principe:
      'Deux gestes sous un même nom : un petit fromage devenu coulant s’ouvre en calotte et se mange à la cuillère ; un carré ou un pavé se tranche en bandes parallèles.',
    pourquoi:
      "Un fromage coulant ne se coupe plus : entamé de travers, il se vide dans l'assiette et il ne reste que la croûte. Ouvrir la croûte en calotte — un couvercle découpé sur le dessus — garde la pâte dans son propre contenant, et chacun se sert à la cuillère, du centre vers le bord. Pour un carré, la logique redevient celle des ronds : des bandes régulières donnent à chacun autant de croûte que de cœur, ce qu'une part prise dans un angle ne fait jamais.",
    etapes: [
      {
        titre: 'La forme',
        texte:
          'Un petit fromage à croûte lavée ou fleurie, mûr au point d’être coulant, souvent servi dans sa boîte ou sa sangle.',
      },
      {
        titre: 'La lame',
        texte:
          'Une lame fine tenue presque à plat, et une cuillère prête à côté : c’est elle qui servira.',
      },
      {
        titre: 'Le premier coup',
        texte:
          'Tracez un cercle sur le dessus, à un centimètre du bord, et soulevez la calotte de croûte d’une pièce.',
      },
      {
        titre: 'Le service',
        texte:
          'Servez à la cuillère depuis le centre, et laissez la croûte faire le récipient jusqu’au bout.',
      },
    ],
    eviter: [
      'Couper un fromage coulant en parts : la pâte s’échappe, et les derniers servis n’ont que la croûte.',
      'Sortir un mont d’or ou un vacherin de sa boîte : la sangle et l’épicéa le tiennent, et sans eux il s’étale.',
      'Découper un carré en petits carrés : ceux du bord n’ont que de la croûte, celui du milieu n’en a pas.',
    ],
    particularite: {
      titre: 'Les carrés et les pavés',
      texte:
        'Maroilles, pont-l’évêque, pavé d’Auge : pâte tenue, croûte lavée, angles francs. On les coupe en bandes parallèles d’un centimètre, chaque bande ensuite en deux ou trois ; sur un grand carré, une coupe en croix puis en triangles depuis le centre donne le même équilibre. La règle ne change pas : autant de croûte que de cœur dans chaque portion.',
    },
  },
}
