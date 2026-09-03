export const meta = {
  title: 'Fonctionnalité — Mentions légales',
  summary: "Avertissement affiché au premier lancement, mémorisé localement, avec accès permanent depuis le menu.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>
        Le contenu légal (<code>src/lib/legal-notice.ts</code>) est centralisé et partagé entre la modale de premier
        lancement et l'écran complet. Aucun composant ne contient de texte juridique en dur.
      </p>

      <h2>Objectif</h2>
      <p>S'assurer que l'avertissement (données indicatives, limitation de responsabilité) est vu une fois, sans forcer à le revalider à chaque session.</p>

      <h2>Comment ça fonctionne</h2>
      <p>Voir <a href="/docs/guide/mentions-legales/">le guide de cet écran</a> pour le détail de l'interface.</p>

      <h2>Données utilisées</h2>
      <p>
        <code>localStorage</code> : <code>legal_notice_acknowledged</code> (validation faite ou non) et{' '}
        <code>legal_notice_acknowledged_version</code> (version validée). Aucune donnée personnelle.
      </p>

      <h2>Résultat</h2>
      <p>
        Une simple retouche mineure des mentions n'oblige pas à revalider : la politique compare la version
        enregistrée à la version courante, et ne réaffiche l'avertissement que si un changement important le
        justifie.
      </p>

      <h2>Hors connexion</h2>
      <p>Fonctionne entièrement hors connexion — texte intégré au bundle, stockage local.</p>

      <h2>Limites</h2>
      <p>Contenu juridique non extrait dans cette documentation — voir <a href="/docs/legal/">Informations légales</a> pour savoir pourquoi.</p>

      <h2>Dépannage</h2>
      <p><a href="/docs/troubleshooting/avertissement-repete/">L'avertissement légal réapparaît</a>.</p>
    </>
  )
}
