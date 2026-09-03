export const meta = {
  title: 'Écran — Favoris',
  summary: 'Listes de favoris multiples : vue d’ensemble, détail d’une liste, création et suppression.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Organiser des fromages dans des listes personnelles (dégustation, cadeaux, envies…).</p>

      <h2>Accès</h2>
      <p>Onglet « Favoris » de la barre du bas ; ou bouton cœur sur une fiche, qui ouvre une feuille d'ajout sans quitter la fiche.</p>

      <h2>Éléments de l'interface</h2>
      <ul>
        <li><strong>Vue d'ensemble</strong> : une ligne par liste (icône cœur, nom, sous-titre), plus un bouton « Créer une liste ».</li>
        <li>
          <strong>Détail d'une liste</strong> : titre, bouton retour, bouton supprimer (icône corbeille), grille des
          fromages de la liste. Liste vide → message « Liste vide » avec l'indication d'ouvrir une fiche et de
          toucher le cœur.
        </li>
        <li>
          <strong>Feuille d'ajout</strong> (depuis une fiche) : une ligne par liste avec case à cocher, formulaire de
          création rapide, bouton « Terminé ».
        </li>
      </ul>

      <h2>Actions</h2>
      <ul>
        <li>Toucher une liste dans la vue d'ensemble → ouvre son détail.</li>
        <li>Bouton corbeille dans le détail → supprime la liste (sans confirmation supplémentaire).</li>
        <li>Depuis une fiche, cocher/décocher une liste dans la feuille d'ajout → ajoute ou retire le fromage.</li>
        <li>« Créer une liste » → nomme et crée une nouvelle liste, optionnellement en y ajoutant directement le fromage courant si créée depuis une fiche.</li>
      </ul>

      <h2>Cas particuliers</h2>
      <p>
        Trois listes existent par défaut à la première utilisation : « Mes chèvres préférés », « À goûter », «
        Plateau Noël ». Une éventuelle ancienne liste unique (avant l'existence des listes multiples) est migrée
        automatiquement dans la première liste.
      </p>

      <h2>Navigation</h2>
      <p>Barre du bas ou menu latéral pour la vue d'ensemble ; bouton retour pour revenir de son détail.</p>
    </>
  )
}
