// Ported from the Component class in the design handoff prototype:
// appellationsOf() and appBadge(). AOP is the cheese's real designation;
// IGP is inferred from the name; Label Rouge/Bio are indicative only (demo
// data) — see the footnote on the Appellations screen.
import type { Cheese } from '../data/cheese.types'

export type AppellationLabel = 'AOP' | 'IGP' | 'Label Rouge' | 'Bio'

/** L'IGP est déduite du nom, faute de champ dédié dans les données du handoff.
 *  Cette liste couvre les IGP réellement portées par des fromages de la base. */
const IGP_NAMES =
  /(tomme|raclette|emmental) de savoie|tomme des pyr[ée]n[ée]es|p[ée]rail|emmental fran[çc]ais est-central|soumaintrain|cancoillotte/i

export function appellationsOf(c: Cheese): AppellationLabel[] {
  const labels: AppellationLabel[] = []
  if (c.aop) labels.push('AOP')
  if (IGP_NAMES.test(c.nom)) labels.push('IGP')
  if (!c.aop && /press[ée]+e? non cuite/i.test(c.famille || '') && c.intensite >= 3) {
    labels.push('Label Rouge')
  }
  if (/tomme|tommette/i.test(c.nom) || (/press/i.test(c.famille || '') && c.intensite <= 2)) {
    labels.push('Bio')
  }
  return labels
}

export interface AppellationBadge {
  t: AppellationLabel
  bg: string
  fg: string
}

const BADGE_COLORS: Record<AppellationLabel, [string, string]> = {
  AOP: ['var(--color-accent-2-200)', 'var(--color-accent-2-900)'],
  IGP: ['var(--color-accent-200)', 'var(--color-accent-700)'],
  'Label Rouge': ['var(--color-accent)', '#fff'],
  Bio: ['var(--color-accent-2-700)', '#fff'],
}

export function appBadge(t: AppellationLabel): AppellationBadge {
  const [bg, fg] = BADGE_COLORS[t] || BADGE_COLORS.AOP
  return { t, bg, fg }
}
