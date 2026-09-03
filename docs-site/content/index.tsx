export const meta = {
  title: 'Documentation — Fromages de France',
  summary: "Encyclopédie et guide de découverte des fromages français, région par région. Documentation complète de l'application.",
}

const QUICK_LINKS: { href: string; label: string }[] = [
  { href: '/docs/getting-started/', label: '🚀 Commencer' },
  { href: '/docs/guide/accueil/', label: '📖 Guide utilisateur' },
  { href: '/docs/features/decoupe/', label: '🧩 Fonctionnalités' },
  { href: '/docs/settings/', label: '⚙️ Paramètres' },
  { href: '/docs/data/', label: '🔐 Données et confidentialité' },
  { href: '/docs/troubleshooting/mise-a-jour-non-visible/', label: '🛠️ Dépannage' },
  { href: '/docs/faq/', label: '❓ FAQ' },
  { href: '/docs/reference/glossary/', label: '📘 Référence' },
  { href: '/docs/versions/', label: '🔄 Versions' },
  { href: '/docs/legal/', label: '⚖️ Informations légales' },
  { href: '/docs/support/', label: '📩 Support' },
]

export default function Home() {
  return (
    <>
      <h1>🧀 Fromages de France</h1>
      <p className="summary">
        Encyclopédie du terroir fromager français : une PWA pour explorer, filtrer et collectionner 216 fromages,
        région par région. Cette documentation couvre l'installation, chaque écran, chaque fonctionnalité, les
        données utilisées et ce qu'il faut savoir en cas de problème.
      </p>

      <dl className="kv">
        <dt>Version</dt>
        <dd>
          affichée dans l'application, menu latéral → Import / Export → carte « Version » (voir{' '}
          <a href="/docs/features/mise-a-jour/">Mise à jour automatique</a>)
        </dd>
        <dt>Documentation</dt>
        <dd>mise à jour le 03/09/2026</dd>
        <dt>Dépôt</dt>
        <dd>
          <a href="https://github.com/nouhailler/fromageor">github.com/nouhailler/fromageor</a>
        </dd>
      </dl>

      <h2>Accès rapides</h2>
      <div className="quick-links">
        {QUICK_LINKS.map((l) => (
          <a key={l.href} href={l.href}>
            {l.label}
          </a>
        ))}
      </div>
    </>
  )
}
