// Ported from accordsDefs() in the design handoff prototype: 10 pairing
// categories with a match(cheese) predicate driving automatic suggestions.
import type { ComponentType } from 'react'
import type { Cheese } from '../data/cheese.types'
import { laitBase } from './lait'
import {
  WineIcon,
  GlassIcon,
  BottleIcon,
  MugIcon,
  AppleIcon,
  PearIcon,
  BreadIcon,
  JarIcon,
  HoneyIcon,
} from '../components/icons/AccordIcons'

export interface AccordCategory {
  key: string
  label: string
  desc: string
  tint: string
  ink: string
  Icon: ComponentType<{ size?: number }>
  match: (c: Cheese) => boolean
}

function has(c: Cheese, re: RegExp): boolean {
  return re.test((c.famille || '') + ' ' + (c.croute || '') + ' ' + (c.texture || ''))
}

export function accordsDefs(): AccordCategory[] {
  return [
    {
      key: 'vin-rouge',
      label: 'Vins rouges',
      desc: 'Pâtes pressées et affinées, structure tannique',
      tint: 'var(--color-accent-200)',
      ink: 'var(--color-accent-700)',
      Icon: WineIcon,
      match: (c) => has(c, /press/i) || c.intensite >= 4,
    },
    {
      key: 'vin-blanc',
      label: 'Vins blancs',
      desc: 'Chèvres et pâtes fleuries, vivacité et fraîcheur',
      tint: 'var(--color-accent-2-200)',
      ink: 'var(--color-accent-2-900)',
      Icon: WineIcon,
      match: (c) => laitBase(c.lait) === 'Chèvre' || has(c, /fleurie|press[ée]+e? cuite/i),
    },
    {
      key: 'champagne',
      label: 'Champagne',
      desc: 'Triple-crèmes et pâtes molles délicates',
      tint: 'var(--color-neutral-200)',
      ink: 'var(--color-neutral-700)',
      Icon: GlassIcon,
      match: (c) => has(c, /fleurie/i) || (laitBase(c.lait) === 'Vache' && c.intensite <= 2),
    },
    {
      key: 'biere',
      label: 'Bière',
      desc: 'Croûtes lavées et tommes de caractère',
      tint: 'var(--color-accent-200)',
      ink: 'var(--color-accent-700)',
      Icon: MugIcon,
      match: (c) => has(c, /lav[ée]+e?/i) || has(c, /press[ée]+e? non cuite/i) || c.intensite >= 3,
    },
    {
      key: 'cidre',
      label: 'Cidre',
      desc: 'Reblochon, tommes et pâtes souples de Savoie',
      tint: 'var(--color-accent-2-200)',
      ink: 'var(--color-accent-2-900)',
      Icon: AppleIcon,
      match: (c) => has(c, /press[ée]+e? non cuite|molle/i),
    },
    {
      key: 'poire',
      label: 'Poiré',
      desc: 'Chèvres frais et fromages doux et fins',
      tint: 'var(--color-neutral-200)',
      ink: 'var(--color-neutral-700)',
      Icon: PearIcon,
      match: (c) => laitBase(c.lait) === 'Chèvre' || c.intensite <= 2,
    },
    {
      key: 'whisky',
      label: 'Whisky',
      desc: 'Bleus persillés et fromages intenses',
      tint: 'var(--color-accent-200)',
      ink: 'var(--color-accent-700)',
      Icon: BottleIcon,
      match: (c) => has(c, /persill/i) || c.intensite >= 4,
    },
    {
      key: 'pain',
      label: 'Pain',
      desc: 'Le compagnon universel — pressées et tommes',
      tint: 'var(--color-accent-2-200)',
      ink: 'var(--color-accent-2-900)',
      Icon: BreadIcon,
      match: (c) => has(c, /press/i) || c.intensite === 3,
    },
    {
      key: 'confiture',
      label: 'Confiture',
      desc: 'Chèvres, brebis et pâtes fleuries',
      tint: 'var(--color-neutral-200)',
      ink: 'var(--color-neutral-700)',
      Icon: JarIcon,
      match: (c) => {
        const base = laitBase(c.lait)
        return base === 'Chèvre' || base === 'Brebis' || has(c, /fleurie/i)
      },
    },
    {
      key: 'miel',
      label: 'Miel',
      desc: 'Bleus, chèvres et brebis — le contraste sucré-salé',
      tint: 'var(--color-accent-200)',
      ink: 'var(--color-accent-700)',
      Icon: HoneyIcon,
      match: (c) => {
        const base = laitBase(c.lait)
        return has(c, /persill/i) || base === 'Chèvre' || base === 'Brebis'
      },
    },
  ]
}
