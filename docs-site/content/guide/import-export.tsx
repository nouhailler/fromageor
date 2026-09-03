export const meta = {
  title: 'Écran — Import / Export',
  summary: 'Sauvegarder la base au format JSON, ou l’étendre avec ses propres fromages. Affiche aussi la version installée.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Exporter ses données, importer de nouveaux fromages, et vérifier la version de l'application.</p>

      <h2>Accès</h2>
      <p>Menu latéral → Import / Export.</p>

      <h2>Éléments de l'interface</h2>
      <ul>
        <li>Carte « Version de l'application » — voir <a href="/docs/features/mise-a-jour/">Mise à jour automatique</a>.</li>
        <li>Carte « Exporter » : compteur de fromages/régions chargés, bouton « Exporter la base (.json) », bouton « Télécharger un gabarit ».</li>
        <li>Carte « Données importées » (si un import existe) : compteur, bouton « Réinitialiser les imports ».</li>
        <li>Carte « Importer » : zone de texte pour coller du JSON, bouton « Choisir un fichier… », bouton « Valider ».</li>
        <li>Résultat de validation : liste des entrées valides / invalides avec le détail des erreurs par fromage, bouton « Confirmer l'import (N) ».</li>
        <li>Carte « Format attendu » : tableau des champs du schéma (nom, type, requis, description).</li>
      </ul>

      <h2>Actions</h2>
      <ul>
        <li>« Exporter la base » télécharge immédiatement un fichier JSON.</li>
        <li>« Télécharger un gabarit » télécharge un exemple de fromage entièrement rempli.</li>
        <li>Coller ou charger un fichier JSON puis « Valider » vérifie chaque entrée sans rien modifier encore.</li>
        <li>« Confirmer l'import » applique les entrées valides ; les entrées invalides sont ignorées.</li>
        <li>« Réinitialiser les imports » efface tout l'import personnel et revient au jeu de données intégré.</li>
      </ul>

      <h2>Résultat</h2>
      <p>
        Les fromages importés sont stockés dans une surcouche locale, fusionnée par-dessus les données intégrées
        (remplacement par <code>id</code>), sans jamais modifier le jeu de données embarqué.
      </p>

      <h2>Erreurs possibles</h2>
      <p>
        Voir <a href="/docs/reference/errors/">Codes et erreurs</a> pour la liste complète des messages de
        validation, et <a href="/docs/troubleshooting/import-refuse/">L'import JSON est refusé</a> pour le dépannage.
      </p>

      <h2>Navigation</h2>
      <p>Bouton retour (flèche en haut à gauche).</p>
    </>
  )
}
