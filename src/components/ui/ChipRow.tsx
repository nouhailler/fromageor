import styles from './ChipRow.module.css'

export interface ChipRowProps<T extends string> {
  options: readonly T[]
  value: T
  onChange: (value: T) => void
  className?: string
}

/** Horizontal scrolling row of pill filter chips (map/lait/appellation
 *  filters), ported from Component.mkChips(). */
export function ChipRow<T extends string>({ options, value, onChange, className }: ChipRowProps<T>) {
  return (
    <div className={className ? `scrollx ${styles.row} ${className}` : `scrollx ${styles.row}`}>
      {options.map((opt) => {
        const active = opt === value
        return (
          <button
            key={opt}
            type="button"
            className={styles.chip}
            style={{
              border: `1px solid ${active ? 'var(--color-accent)' : 'var(--color-neutral-300)'}`,
              background: active ? 'var(--color-accent)' : 'transparent',
              color: active ? '#fff' : 'var(--color-neutral-700)',
            }}
            onClick={() => onChange(opt)}
            aria-pressed={active}
          >
            {opt}
          </button>
        )
      })}
    </div>
  )
}
