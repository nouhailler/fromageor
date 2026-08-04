// Ported from decoupeDefs() in the design handoff prototype — static
// content, copied verbatim.
import type { ComponentType } from 'react'
import {
  RoundDiagram,
  MeuleDiagram,
  BlueDiagram,
  BrieDiagram,
  BucheDiagram,
  HeartDiagram,
} from '../components/icons/DecoupeDiagrams'

export interface DecoupeMethod {
  shape: string
  rule: string
  examples: string[]
  Diagram: ComponentType
}

export function decoupeDefs(): DecoupeMethod[] {
  return [
    {
      shape: 'Camembert & petits ronds fleuris',
      rule: 'En parts triangulaires égales depuis le centre, comme un gâteau : chacun reçoit autant de cœur crémeux que de croûte.',
      examples: ['Camembert', 'Saint-Marcellin', 'Petit chèvre'],
      Diagram: RoundDiagram,
    },
    {
      shape: 'Comté & grandes meules (la pointe)',
      rule: 'On ne mange jamais que la pointe : coupez la part dans la longueur, puis divisez le talon (côté croûte) en petits bâtonnets pour partager cœur et croûte.',
      examples: ['Comté', 'Beaufort', 'Cantal', 'Abondance'],
      Diagram: MeuleDiagram,
    },
    {
      shape: 'Roquefort & pâtes persillées',
      rule: 'En rayons fins depuis le cœur vers la croûte, au fil (guillotine), pour répartir équitablement le persillé plus concentré au centre.',
      examples: ['Roquefort', 'Fourme d’Ambert', 'Bleu de Gex'],
      Diagram: BlueDiagram,
    },
    {
      shape: 'Brie & grandes pointes molles',
      rule: 'Jamais « le nez » (la pointe fine) ! Tranchez en biseau le long des rayons pour que chaque part garde une portion de croûte extérieure.',
      examples: ['Brie', 'Brillat-Savarin', 'Saint-Félicien'],
      Diagram: BrieDiagram,
    },
    {
      shape: 'Bûches & pyramides de chèvre',
      rule: 'Les bûches se coupent en rondelles régulières ; les pyramides et troncs, en tranches depuis la pointe. Un fil ou un couteau fin évite d’écraser la pâte.',
      examples: ['Sainte-Maure', 'Valençay', 'Bûche de chèvre'],
      Diagram: BucheDiagram,
    },
    {
      shape: 'Cœurs coulants & carrés',
      rule: 'Les petits fromages crémeux se servent à la cuillère, croûte ouverte en calotte. Les carrés et pavés se tranchent en bandes parallèles ou en croix.',
      examples: ['Époisses', 'Vacherin', 'Maroilles'],
      Diagram: HeartDiagram,
    },
  ]
}
