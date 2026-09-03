import type { ReactNode } from 'react'

/** Metadata every content page exports alongside its default component.
 *  Drives the nav, the breadcrumb, the <title>/<meta> tags and the search
 *  index — see docs-site/lib/nav.ts for how pages are grouped into sections. */
export interface PageMeta {
  /** Section id, matches a NavSection.id in nav.ts (e.g. 'guide', 'faq'). */
  section: string
  /** Slug within the section; '' for a section that is a single page. */
  slug: string
  /** Page <title> and H1. */
  title: string
  /** One-sentence summary shown under the H1 and used as the search excerpt. */
  summary: string
}

export interface PageModule {
  meta: PageMeta
  default: () => ReactNode
}

/** What a content file under docs-site/content/ actually exports — section
 *  and slug are derived from its file path by ssr-entry.tsx, not repeated
 *  here, so a page can never claim a URL that disagrees with where it lives. */
export interface ContentMeta {
  title: string
  summary: string
}

export interface ContentModule {
  meta: ContentMeta
  default: () => ReactNode
}
