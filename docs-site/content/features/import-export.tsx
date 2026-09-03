export const meta = {
  title: 'Fonctionnalité — Import / Export',
  summary: "Sauvegarde et extension du jeu de données depuis l'interface, sans jamais modifier les fromages intégrés au bundle.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>
        Un écran permet d'exporter le jeu de données actif au format JSON, et d'en importer un nouveau — un tableau
        de fromages, ou un objet <code>{'{ region?, cheeses[] }'}</code> qui peut aussi enregistrer une nouvelle
        région.
      </p>

      <h2>Objectif</h2>
      <p>Permettre à quelqu'un d'étendre sa propre base (nouveaux fromages, nouvelle région) sans toucher au code, et de la sauvegarder.</p>

      <h2>Prérequis</h2>
      <p>Aucun compte : tout se passe en local. Voir <a href="/docs/guide/import-export/">le guide de cet écran</a>.</p>

      <h2>Comment l'utiliser</h2>
      <ol>
        <li>Export : bouton « Exporter la base (.json) », qui télécharge le jeu actif.</li>
        <li>Import : coller ou charger un fichier JSON, bouton « Valider » pour voir le détail des erreurs, puis « Confirmer l'import ».</li>
      </ol>

      <h2>Options</h2>
      <p>Télécharger un gabarit d'exemple entièrement rempli, pour partir d'un fichier valide plutôt que d'un schéma abstrait.</p>

      <h2>Données utilisées</h2>
      <p>
        Chaque fromage suit le schéma décrit dans <a href="/docs/reference/errors/">Codes et erreurs</a>. Un import
        est stocké dans une surcouche <code>localStorage</code> (clés <code>fromages-import-cheeses</code> et{' '}
        <code>fromages-import-regions</code>), fusionnée par-dessus les données intégrées (remplacement par{' '}
        <code>id</code>) — le jeu de données embarqué dans l'application n'est jamais modifié.
      </p>

      <h2>Résultat</h2>
      <p>Importer un <code>id</code> déjà présent remplace la fiche existante ; un nouvel <code>id</code> l'ajoute. Un bouton « Réinitialiser les imports » efface tout l'import personnel.</p>

      <h2>Hors connexion</h2>
      <p>Fonctionne entièrement hors connexion — export, import et validation sont purement locaux.</p>

      <h2>Limites</h2>
      <p>Pas de fusion champ par champ : importer un <code>id</code> existant remplace la fiche entière, pas seulement les champs fournis.</p>

      <h2>Erreurs possibles</h2>
      <p>Voir la table complète des messages de validation : <a href="/docs/reference/errors/">Codes et erreurs</a>.</p>

      <h2>Dépannage</h2>
      <p><a href="/docs/troubleshooting/import-refuse/">L'import JSON est refusé</a>.</p>

      <h2>FAQ</h2>
      <p><a href="/docs/faq/">Comment exporter mes données ?</a> · <a href="/docs/faq/">Comment ajouter mes propres fromages ?</a></p>
    </>
  )
}
