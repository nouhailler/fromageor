import { renderToStaticMarkup } from 'react-dom/server'
import { Layout } from './components/Layout'
import { NAV, pageUrl } from './lib/nav'
import type { ContentModule, PageMeta } from './lib/types'

/** Every file under content/ becomes one page. Section/slug come from the
 *  file path, not from the module itself — see lib/types.ts ContentModule. */
const modules = import.meta.glob('./content/**/*.tsx', { eager: true }) as Record<string, ContentModule>

interface ResolvedPage {
  meta: PageMeta
  Component: () => import('react').ReactNode
}

function urlFor(meta: PageMeta): string {
  return meta.section === '' ? '/docs/' : pageUrl(meta.section, meta.slug)
}

function resolvePages(): ResolvedPage[] {
  const pages: ResolvedPage[] = []
  for (const [path, mod] of Object.entries(modules)) {
    const rel = path.replace(/^\.\/content\//, '').replace(/\.tsx$/, '')
    let section: string
    let slug: string
    if (rel === 'index') {
      section = ''
      slug = ''
    } else if (rel.includes('/')) {
      const parts = rel.split('/')
      section = parts[0]
      slug = parts.slice(1).join('/')
    } else {
      section = rel
      slug = ''
    }
    pages.push({ meta: { section, slug, title: mod.meta.title, summary: mod.meta.summary }, Component: mod.default })
  }
  return pages
}

/** Fails the build loudly if a nav entry has no page, or a page claims a URL
 *  the nav doesn't list — the spec (§37, §47) forbids both a documented
 *  feature without a page and a link to nothing. */
function validateAgainstNav(pages: ResolvedPage[]): void {
  const pageUrls = new Set(pages.map((p) => urlFor(p.meta)))
  const navUrls = new Set(NAV.flatMap((s) => s.items.map((i) => pageUrl(s.id, i.slug))))
  navUrls.add('/docs/')

  const missing = [...navUrls].filter((u) => !pageUrls.has(u))
  const orphaned = [...pageUrls].filter((u) => !navUrls.has(u))
  if (missing.length || orphaned.length) {
    const lines = [
      missing.length ? `Pages listées dans nav.ts mais introuvables sous content/ :\n  ${missing.join('\n  ')}` : '',
      orphaned.length ? `Fichiers sous content/ absents de nav.ts :\n  ${orphaned.join('\n  ')}` : '',
    ].filter(Boolean)
    throw new Error(`docs-site: navigation et contenu désynchronisés.\n${lines.join('\n')}`)
  }
}

export function buildSite(): { url: string; html: string }[] {
  const pages = resolvePages()
  validateAgainstNav(pages)
  return pages.map(({ meta, Component }) => {
    const url = urlFor(meta)
    const html =
      '<!doctype html>\n' +
      renderToStaticMarkup(
        <Layout meta={meta}>
          <Component />
        </Layout>,
      )
    return { url, html }
  })
}

export function buildSearchIndex(): { url: string; title: string; section: string; excerpt: string }[] {
  return resolvePages().map(({ meta }) => ({
    url: urlFor(meta),
    title: meta.title,
    section: meta.section,
    excerpt: meta.summary,
  }))
}
