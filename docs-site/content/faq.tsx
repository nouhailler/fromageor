import { Fold } from '../components/Bits'

export const meta = {
  title: 'FAQ',
  summary: "Questions fréquentes sur l'installation, le fonctionnement hors connexion, les données et les fromages absents.",
}

export default function Faq() {
  return (
    <>
      <h1>FAQ</h1>
      <p className="summary">{meta.summary}</p>

      <Fold title="Comment installer l'application ?" open>
        <p>
          Ouvrir <a href="https://fromageor.netlify.app">fromageor.netlify.app</a> dans le navigateur, puis utiliser
          sa fonction native d'installation : « Ajouter à l'écran d'accueil » (Chrome/Edge Android, Safari iOS) ou
          l'icône d'installation dans la barre d'adresse (Chrome/Edge desktop). Il n'y a pas de version en magasin
          d'applications. Détails : <a href="/docs/getting-started/">Bien démarrer</a>.
        </p>
      </Fold>

      <Fold title="L'application fonctionne-t-elle sans connexion Internet ?">
        <p>
          Oui pour l'essentiel des écrans. Seules les photos de fromages ont besoin du réseau. Détails :{' '}
          <a href="/docs/offline/">Hors connexion</a>.
        </p>
      </Fold>

      <Fold title="Où sont stockées mes données (favoris, listes, fromages importés) ?">
        <p>
          Uniquement sur l'appareil, dans le <code>localStorage</code> du navigateur. Rien n'est envoyé à un serveur.
          Détails : <a href="/docs/data/">Données et confidentialité</a>.
        </p>
      </Fold>

      <Fold title="Comment exporter mes données ?">
        <p>
          Menu latéral → Import / Export → Export, qui télécharge un JSON du jeu de données actif. Détails :{' '}
          <a href="/docs/features/import-export/">Import / Export</a>.
        </p>
      </Fold>

      <Fold title="Comment ajouter mes propres fromages ?">
        <p>
          Menu latéral → Import / Export → Import, en collant ou en chargeant un JSON conforme au schéma affiché à
          l'écran. Détails : <a href="/docs/features/import-export/">Import / Export</a>.
        </p>
      </Fold>

      <Fold title="Comment supprimer mes données ?">
        <p>
          Depuis les réglages du navigateur : « Effacer les données de navigation » pour ce site. Il n'existe pas de
          bouton de réinitialisation dans l'application — voir{' '}
          <a href="/docs/reference/limitations/">Limites connues</a>.
        </p>
      </Fold>

      <Fold title="Pourquoi l'application ne demande-t-elle aucune permission (localisation, notifications…) ?">
        <p>
          Elle n'en a besoin d'aucune : la carte de France est une silhouette SVG décorative, pas une géolocalisation
          réelle. Détails : <a href="/docs/permissions/">Permissions</a>.
        </p>
      </Fold>

      <Fold title="Pourquoi certaines fiches n'ont pas de photo ?">
        <p>
          Faute de photo libre de droits trouvée pour ce fromage. Détails :{' '}
          <a href="/docs/reference/limitations/">Limites connues</a>.
        </p>
      </Fold>

      <Fold title="Pourquoi certaines fiches n'ont pas de bloc « Comment découper ce fromage ? » ?">
        <p>
          20 fiches n'ont volontairement aucune méthode assignée (fromages frais, fromages forts, service à la
          cuillère…) — inventer un geste serait pire que de ne rien afficher. Détails :{' '}
          <a href="/docs/features/decoupe/">Découpe</a>.
        </p>
      </Fold>

      <Fold title="Comment savoir si j'ai la dernière version installée ?">
        <p>
          Menu latéral → Import / Export → carte « Version de l'application », avec un bouton pour vérifier tout de
          suite. Détails : <a href="/docs/features/mise-a-jour/">Mise à jour automatique</a>.
        </p>
      </Fold>

      <Fold title="L'application couvre-t-elle les départements et régions d'outre-mer ?">
        <p>
          Non : seules les 13 régions de la France métropolitaine sont couvertes à ce jour. Détails :{' '}
          <a href="/docs/reference/limitations/">Limites connues</a>.
        </p>
      </Fold>
    </>
  )
}
