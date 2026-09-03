/** Static navigation tree — the source of truth for URL structure, the
 *  accordion nav (Layout.tsx) and page order. Content pages don't register
 *  themselves here; this list is what the build script checks every page
 *  against (docs-site/ssr-entry.tsx throws if a page has no matching entry,
 *  or an entry has no matching page — see §37/§47 of the spec: no dangling
 *  links, nothing undocumented). */

export interface NavLeaf {
  slug: string
  label: string
}

export interface NavSection {
  id: string
  label: string
  icon: string
  /** Single-page section: exactly one leaf with slug ''. */
  items: NavLeaf[]
}

export const NAV: NavSection[] = [
  { id: 'getting-started', label: 'Bien démarrer', icon: '🚀', items: [{ slug: '', label: 'Bien démarrer' }] },
  {
    id: 'guide',
    label: 'Guide utilisateur',
    icon: '📖',
    items: [
      { slug: 'accueil', label: 'Accueil' },
      { slug: 'fiche', label: 'Fiche détaillée' },
      { slug: 'carte', label: 'Carte de France' },
      { slug: 'recherche', label: 'Recherche' },
      { slug: 'favoris', label: 'Favoris' },
      { slug: 'accords', label: 'Accords mets & boissons' },
      { slug: 'decoupe', label: 'Découpe' },
      { slug: 'calendrier', label: 'Calendrier des saisons' },
      { slug: 'appellations', label: 'Appellations' },
      { slug: 'encyclopedie', label: 'Encyclopédie' },
      { slug: 'import-export', label: 'Import / Export' },
      { slug: 'mentions-legales', label: 'Mentions légales' },
      { slug: 'menu', label: 'Menu latéral' },
    ],
  },
  {
    id: 'features',
    label: 'Fonctionnalités',
    icon: '🧩',
    items: [
      { slug: 'fiche', label: 'Fiche détaillée' },
      { slug: 'carte', label: 'Carte de France' },
      { slug: 'recherche', label: 'Recherche plein texte' },
      { slug: 'favoris', label: 'Favoris' },
      { slug: 'accords', label: 'Accords mets & boissons' },
      { slug: 'decoupe', label: 'Découpe' },
      { slug: 'calendrier', label: 'Calendrier des saisons' },
      { slug: 'appellations', label: 'Appellations' },
      { slug: 'encyclopedie', label: 'Encyclopédie' },
      { slug: 'import-export', label: 'Import / Export' },
      { slug: 'mise-a-jour', label: 'Mise à jour automatique' },
      { slug: 'mentions-legales', label: 'Mentions légales' },
      { slug: 'menu', label: 'Menu latéral' },
    ],
  },
  { id: 'settings', label: 'Paramètres', icon: '⚙️', items: [{ slug: '', label: 'Paramètres' }] },
  { id: 'permissions', label: 'Permissions', icon: '🔐', items: [{ slug: '', label: 'Permissions' }] },
  { id: 'data', label: 'Données et confidentialité', icon: '🗄️', items: [{ slug: '', label: 'Données et confidentialité' }] },
  { id: 'offline', label: 'Hors connexion', icon: '📡', items: [{ slug: '', label: 'Hors connexion' }] },
  {
    id: 'troubleshooting',
    label: 'Dépannage',
    icon: '🛠️',
    items: [
      { slug: 'mise-a-jour-non-visible', label: "L'application ne semble pas à jour" },
      { slug: 'photo-manquante', label: 'Une photo ne s’affiche pas' },
      { slug: 'favoris-disparus', label: 'Mes favoris ont disparu' },
      { slug: 'import-refuse', label: 'L’import JSON est refusé' },
      { slug: 'avertissement-repete', label: 'L’avertissement légal réapparaît' },
    ],
  },
  { id: 'faq', label: 'FAQ', icon: '❓', items: [{ slug: '', label: 'FAQ' }] },
  {
    id: 'reference',
    label: 'Référence',
    icon: '📘',
    items: [
      { slug: 'settings', label: 'Paramètres' },
      { slug: 'errors', label: 'Codes et erreurs' },
      { slug: 'glossary', label: 'Glossaire' },
      { slug: 'compatibility', label: 'Compatibilité' },
      { slug: 'limitations', label: 'Limites connues' },
    ],
  },
  { id: 'versions', label: 'Versions', icon: '🔄', items: [{ slug: '', label: 'Versions' }] },
  { id: 'legal', label: 'Informations légales', icon: '⚖️', items: [{ slug: '', label: 'Informations légales' }] },
  { id: 'support', label: 'Support', icon: '📩', items: [{ slug: '', label: 'Support' }] },
]

export function sectionOf(id: string): NavSection {
  const s = NAV.find((n) => n.id === id)
  if (!s) throw new Error(`Section de navigation inconnue : "${id}"`)
  return s
}

export function pageUrl(section: string, slug: string): string {
  return slug ? `/docs/${section}/${slug}/` : `/docs/${section}/`
}

export interface FlatEntry {
  section: NavSection
  leaf: NavLeaf
  url: string
}

/** Every page in reading order, for the prev/next footer links (§33). */
export function flattenNav(): FlatEntry[] {
  return NAV.flatMap((section) => section.items.map((leaf) => ({ section, leaf, url: pageUrl(section.id, leaf.slug) })))
}
