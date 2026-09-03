import type { ReactNode } from 'react'
import { NAV, flattenNav, pageUrl, sectionOf } from '../lib/nav'
import type { PageMeta } from '../lib/types'

const SITE_TITLE = 'Documentation — Fromages de France'

/** Renders the full HTML document for one page: head, accordion nav (native
 *  <details>/<summary>, no JS — see plan §5/§44), breadcrumb, content,
 *  prev/next, footer with search. One call = one static page (see
 *  scripts/build-docs.mjs, which feeds this through renderToStaticMarkup). */
export function Layout({ meta, children }: { meta: PageMeta; children: ReactNode }) {
  const isHome = meta.section === '' && meta.slug === ''
  const currentUrl = isHome ? '/docs/' : pageUrl(meta.section, meta.slug)
  const section = isHome ? null : sectionOf(meta.section)
  const flat = flattenNav()
  const pos = flat.findIndex((e) => e.url === currentUrl)
  const prev = pos > 0 ? flat[pos - 1] : null
  const next = pos >= 0 && pos < flat.length - 1 ? flat[pos + 1] : null

  return (
    <html lang="fr">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{isHome ? SITE_TITLE : `${meta.title} — ${SITE_TITLE}`}</title>
        <meta name="description" content={meta.summary} />
        <link rel="icon" href="/favicon.svg" />
        <link rel="stylesheet" href="/docs/assets/docs.css" />
      </head>
      <body>
        <a className="skip-link" href="#contenu">
          Aller au contenu
        </a>

        <header className="site-header">
          <a className="brand" href="/docs/">
            🧀 Fromages de France <span>— Documentation</span>
          </a>
          <a className="brand-app-link" href="/">
            Ouvrir l'application →
          </a>
        </header>

        <div className="shell">
          <nav className="sidenav" aria-label="Sommaire de la documentation">
            <form className="search-form" role="search" data-docs-search>
              <label htmlFor="docs-search-input" className="visually-hidden">
                Rechercher dans la documentation
              </label>
              <input id="docs-search-input" type="search" placeholder="Rechercher…" autoComplete="off" />
              <ul className="search-results" hidden></ul>
            </form>

            <a className={`nav-toplink ${isHome ? 'active' : ''}`} href="/docs/">
              🏠 Accueil
            </a>

            {NAV.map((s) => {
              const single = s.items.length === 1 && s.items[0].slug === ''
              if (single) {
                const url = pageUrl(s.id, '')
                const active = url === currentUrl
                return (
                  <a key={s.id} className={`nav-toplink ${active ? 'active' : ''}`} href={url}>
                    {s.icon} {s.label}
                  </a>
                )
              }
              const open = s.id === meta.section
              return (
                <details key={s.id} className="nav-chapter" open={open}>
                  <summary>
                    <span>
                      {s.icon} {s.label}
                    </span>
                    <span className="nav-count">{s.items.length}</span>
                  </summary>
                  <ul>
                    {s.items.map((item) => {
                      const url = pageUrl(s.id, item.slug)
                      const active = url === currentUrl
                      return (
                        <li key={item.slug}>
                          <a className={active ? 'active' : ''} href={url} aria-current={active ? 'page' : undefined}>
                            {item.label}
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </details>
              )
            })}
          </nav>

          <main id="contenu" className="content">
            {!isHome && section && (
              <nav className="breadcrumb" aria-label="Fil d'Ariane">
                <a href="/docs/">Documentation</a>
                <span aria-hidden="true"> › </span>
                {section.items.length === 1 ? (
                  <span aria-current="page">{meta.title}</span>
                ) : (
                  <>
                    <span>{section.label}</span>
                    <span aria-hidden="true"> › </span>
                    <span aria-current="page">{meta.title}</span>
                  </>
                )}
              </nav>
            )}

            {children}

            {(prev || next) && (
              <nav className="prev-next" aria-label="Navigation entre pages">
                {prev ? (
                  <a className="prev-next-link prev" href={prev.url}>
                    ← {prev.leaf.label}
                  </a>
                ) : (
                  <span />
                )}
                {next && (
                  <a className="prev-next-link next" href={next.url}>
                    {next.leaf.label} →
                  </a>
                )}
              </nav>
            )}
          </main>
        </div>

        <footer className="site-footer">
          <p>
            Fromages de France — encyclopédie du terroir fromager français.{' '}
            <a href="https://github.com/nouhailler/fromageor#readme">Code source sur GitHub</a>.
          </p>
        </footer>

        <script src="/docs/assets/search-client.js" defer></script>
      </body>
    </html>
  )
}
