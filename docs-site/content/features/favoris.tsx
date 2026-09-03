export const meta = {
  title: 'Fonctionnalité — Favoris',
  summary: 'Listes de favoris multiples, stockées localement, avec migration automatique depuis une ancienne liste unique.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>Un fromage peut appartenir à zéro, une ou plusieurs listes nommées par l'utilisateur.</p>

      <h2>Objectif</h2>
      <p>Organiser des sélections personnelles (dégustation, cadeaux, envies) sans se limiter à une seule liste plate.</p>

      <h2>Comment l'utiliser</h2>
      <p>Bouton cœur sur une fiche, ou onglet Favoris. Voir <a href="/docs/guide/favoris/">le guide de cet écran</a>.</p>

      <h2>Options</h2>
      <p>Créer une nouvelle liste à la volée (depuis la vue d'ensemble ou depuis la feuille d'ajout d'une fiche), supprimer une liste existante.</p>

      <h2>Données utilisées</h2>
      <p>
        Stockées dans <code>localStorage</code> sous la clé <code>fromages-listes</code>, sous la forme{' '}
        <code>{'[{ id, name, ids[] }]'}</code>. Trois listes existent par défaut à la première utilisation : « Mes
        chèvres préférés », « À goûter », « Plateau Noël ».
      </p>

      <h2>Résultat</h2>
      <p>
        Une ancienne liste unique (clé <code>fromages-favoris</code>, format antérieur aux listes multiples) est
        migrée automatiquement dans la première liste au premier chargement si elle existe.
      </p>

      <h2>Hors connexion</h2>
      <p>Fonctionne entièrement hors connexion — lecture/écriture purement locales.</p>

      <h2>Limites</h2>
      <p>
        Aucune synchronisation entre appareils, aucun export dédié aux favoris (contrairement aux fromages importés,
        voir <a href="/docs/features/import-export/">Import / Export</a>). Une suppression de liste n'a pas de
        confirmation supplémentaire ni d'annulation.
      </p>

      <h2>Dépannage</h2>
      <p>
        <a href="/docs/troubleshooting/favoris-disparus/">Mes favoris ont disparu</a>.
      </p>
    </>
  )
}
