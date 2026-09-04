import { ChevronRight } from 'lucide-react'
import type { AppellationBadge } from '../../lib/appellations'
import { useLanguage } from '../../state/LanguageContext'
import { CheeseAvatar } from './CheeseAvatar'
import { LabelBadge } from './LabelBadge'
import styles from './CheeseCard.module.css'

export interface CheeseCardProps {
  initial: string
  nom: string
  aop?: boolean
  subtitle: string
  onClick: () => void
  badges?: AppellationBadge[]
  avatarSize?: number
  avatarFontSize?: number
}

/** The "avatar + name + subtitle" list row shared by Accueil, Recherche,
 *  Favoris and Appellations. The Carte screen uses its own dot-based row
 *  instead (see MapListRow), and carousel cards their own layout. */
export function CheeseCard({
  initial,
  nom,
  aop,
  subtitle,
  onClick,
  badges,
  avatarSize = 44,
  avatarFontSize = 19,
}: CheeseCardProps) {
  const { t } = useLanguage()
  return (
    <button type="button" className={styles.card} onClick={onClick}>
      <CheeseAvatar initial={initial} size={avatarSize} fontSize={avatarFontSize} />
      <div className={styles.body}>
        <div className={styles.nameRow}>
          <span className={styles.name}>{nom}</span>
          {aop && (
            <LabelBadge bg="var(--color-accent-2-200)" fg="var(--color-accent-2-700)" size="xs">
              {t('common.aopBadge')}
            </LabelBadge>
          )}
        </div>
        <div className={styles.subtitle}>{subtitle}</div>
        {badges && badges.length > 0 && (
          <div className={styles.badgeRow}>
            {badges.map((b) => (
              <LabelBadge key={b.t} bg={b.bg} fg={b.fg} size="sm">
                {b.t}
              </LabelBadge>
            ))}
          </div>
        )}
      </div>
      <ChevronRight size={18} strokeWidth={2.75} color="var(--color-neutral-500)" className={styles.chevron} />
    </button>
  )
}
