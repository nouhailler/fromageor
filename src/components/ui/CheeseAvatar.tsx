export interface CheeseAvatarProps {
  initial: string
  size: number
  fontSize: number
  background?: string
  color?: string
}

/** The circular pastille showing a cheese's initial letter, used across
 *  list rows, carousels and the featured home card. */
export function CheeseAvatar({
  initial,
  size,
  fontSize,
  background = 'var(--color-accent-200)',
  color = 'var(--color-accent-700)',
}: CheeseAvatarProps) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: size,
        height: size,
        borderRadius: 999,
        background,
        color,
        display: 'grid',
        placeItems: 'center',
        fontFamily: 'var(--font-heading)',
        fontSize,
      }}
    >
      {initial}
    </div>
  )
}
