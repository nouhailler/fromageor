import type { ReactNode } from 'react'

/** Callout box for warnings/notes inside page content — the ⚠️ boxes used
 *  throughout README.md, ported as a real component instead of a blockquote. */
export function Callout({ kind = 'note', children }: { kind?: 'note' | 'warning'; children: ReactNode }) {
  return (
    <div className={`callout callout-${kind}`}>
      <span className="callout-icon" aria-hidden="true">
        {kind === 'warning' ? '⚠️' : 'ℹ️'}
      </span>
      <div>{children}</div>
    </div>
  )
}

/** One collapsible entry — used for FAQ questions and troubleshooting steps
 *  that benefit from being folded by default (§5 accordion convention),
 *  native <details>, no JS. */
export function Fold({ title, children, open = false }: { title: string; children: ReactNode; open?: boolean }) {
  return (
    <details className="fold" open={open}>
      <summary>{title}</summary>
      <div className="fold-body">{children}</div>
    </details>
  )
}

export function TableWrap({ children }: { children: ReactNode }) {
  return <div className="table-wrap">{children}</div>
}
