import { Callout } from '../components/Bits'

export const meta = {
  title: 'Bien démarrer',
  summary: "Installer l'application, son premier lancement, sa compatibilité, et comment la désinstaller ou la mettre à jour.",
}

export default function GettingStarted() {
  return (
    <>
      <h1>Bien démarrer</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Présentation</h2>
      <p>
        Fromages de France est une <strong>PWA</strong> (Progressive Web App) : une application installable depuis le
        navigateur, sans passer par un magasin d'applications. Elle fonctionne sur mobile comme sur ordinateur.
      </p>

      <h2>Installation</h2>
      <p>
        Ouvrir <a href="https://fromageor.netlify.app">fromageor.netlify.app</a> dans le navigateur, puis utiliser sa
        fonction native d'installation :
      </p>
      <ul>
        <li>
          <strong>Android (Chrome/Edge)</strong> — menu du navigateur → « Ajouter à l'écran d'accueil » ou « Installer
          l'application ». Une icône apparaît sur l'écran d'accueil comme n'importe quelle application.
        </li>
        <li>
          <strong>iOS (Safari)</strong> — bouton de partage (carré avec flèche) → « Sur l'écran d'accueil ». Safari
          est le seul navigateur iOS qui permet l'installation d'une PWA.
        </li>
        <li>
          <strong>Ordinateur (Chrome/Edge)</strong> — icône d'installation dans la barre d'adresse.
        </li>
      </ul>
      <p>Sans installation, l'application reste utilisable directement dans un onglet de navigateur.</p>

      <h2>Compatibilité</h2>
      <p>
        L'application vise les navigateurs récents supportant les Service Workers et les modules ES. Voir{' '}
        <a href="/docs/reference/compatibility/">Compatibilité</a> pour le détail par plateforme.
      </p>

      <h2>Premier lancement</h2>
      <p>
        Au tout premier lancement, une modale affiche un avertissement légal (limitation de responsabilité,
        exactitude indicative des données). Elle doit être validée (« J'ai compris ») pour continuer ; ce choix est
        mémorisé localement et la modale ne réapparaît plus. Les mentions complètes restent accessibles à tout
        moment depuis le menu latéral → Mentions légales. Voir{' '}
        <a href="/docs/guide/mentions-legales/">le guide de cet écran</a>.
      </p>
      <p>
        Il n'y a pas d'étape de configuration initiale ni de permission à accorder : l'application n'en demande
        aucune (voir <a href="/docs/permissions/">Permissions</a>).
      </p>

      <h2>Désinstallation</h2>
      <p>
        Comme toute PWA installée : depuis l'écran d'accueil ou le gestionnaire d'applications de l'appareil (appui
        long sur l'icône → Désinstaller / Supprimer). Les données locales (favoris, import) sont supprimées avec
        l'application.
      </p>

      <h2>Mise à jour</h2>
      <p>
        L'application se met à jour toute seule, sans action de l'utilisateur. Voir{' '}
        <a href="/docs/features/mise-a-jour/">Mise à jour automatique</a>.
      </p>

      <Callout>
        Pas de version en magasin d'applications (App Store, Play Store) : la seule source est le site web.
      </Callout>
    </>
  )
}
