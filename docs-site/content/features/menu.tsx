export const meta = {
  title: 'Fonctionnalité — Menu latéral',
  summary: 'Navigation transverse vers tous les écrans, avec un compteur de fromages par région généré depuis les données réelles.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>Un panneau accessible depuis n'importe quel écran principal, listant tous les écrans secondaires et les régions couvertes.</p>

      <h2>Objectif</h2>
      <p>Centraliser l'accès à tout ce qui ne tient pas dans la barre du bas à quatre onglets.</p>

      <h2>Comment l'utiliser</h2>
      <p>Voir <a href="/docs/guide/menu/">le guide de cet écran</a> pour le détail des éléments.</p>

      <h2>Données utilisées</h2>
      <p>
        La liste des régions et leur compteur de fromages sont générés depuis le jeu de données actif (intégré +
        importé) : ajouter une région par import fait apparaître une nouvelle ligne sans changement de code.
      </p>

      <h2>Hors connexion</h2>
      <p>Fonctionne entièrement hors connexion.</p>

      <h2>Limites</h2>
      <p>Aucune — c'est un panneau de navigation, sans logique propre au-delà de l'affichage des données.</p>
    </>
  )
}
