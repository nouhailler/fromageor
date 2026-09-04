// Contenu de l'écran À propos, centralisé comme legal-notice.ts l'est pour
// les mentions légales — rien de tout ceci ne devrait vivre dans le composant.

export interface AboutAuthor {
  name: string
  website: string
  portfolio: string
}

export const aboutAuthor: AboutAuthor = {
  name: 'Patrick Nouhailler',
  website: 'https://swinux.ch',
  portfolio: 'https://swinux.ch/applications/',
}

/** Dépôt du projet, dérivé du remote `origin` au build (voir vite.config.ts)
 *  plutôt qu'écrit en dur. `null` si indéterminable — les liens qui en
 *  dépendent (dépôt, signaler un bug) doivent alors disparaître, pas pointer
 *  vers un mauvais projet. */
export const repoUrl: string | null = __REPO_URL__
export const issuesUrl: string | null = repoUrl ? `${repoUrl}/issues/new` : null

export interface CreditEntry {
  name: string
  license: string
  url: string
}

/** Dépendances réellement embarquées dans le bundle de production —
 *  `dependencies` de package.json, pas les outils de développement. Licence
 *  lue dans chaque `package.json` de `node_modules`, pas supposée. */
export const credits: CreditEntry[] = [
  { name: 'React', license: 'MIT', url: 'https://react.dev' },
  { name: 'React DOM', license: 'MIT', url: 'https://react.dev' },
  { name: 'lucide-react', license: 'ISC', url: 'https://lucide.dev' },
  { name: 'Figtree (police)', license: 'OFL-1.1', url: 'https://fonts.google.com/specimen/Figtree' },
  { name: 'Caprasimo (police)', license: 'OFL-1.1', url: 'https://fonts.google.com/specimen/Caprasimo' },
  { name: 'Workbox (via vite-plugin-pwa)', license: 'MIT', url: 'https://developer.chrome.com/docs/workbox' },
]
