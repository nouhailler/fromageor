export const meta = {
  title: 'Écran — Recherche',
  summary: 'Recherche plein texte sur nom, notes, région, appellation, avec un filtre par type de lait.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Trouver rapidement un fromage par son nom ou sa provenance.</p>

      <h2>Accès</h2>
      <p>Onglet « Recherche » de la barre du bas.</p>

      <h2>Éléments de l'interface</h2>
      <ul>
        <li>Champ de recherche texte libre (placeholder « Nom, région, département… »).</li>
        <li>Filtre en chips par type de lait : Tous, Vache, Chèvre, Brebis, Mélange.</li>
        <li>Compteur de résultats.</li>
        <li>Liste des fromages correspondants.</li>
      </ul>

      <h2>Actions</h2>
      <p>Taper filtre en direct, sans bouton de validation. Toucher un résultat ouvre sa fiche.</p>

      <h2>Résultat</h2>
      <p>
        Le texte tapé est comparé (insensible à la casse) au nom, aux noms alternatifs, au département, à la
        commune, à la famille, à la texture et au nom de la région. Aucune tolérance aux fautes de frappe.
      </p>

      <h2>Cas particuliers</h2>
      <p>Champ vide + filtre « Tous » → tous les fromages du jeu de données actif s'affichent.</p>

      <h2>Navigation</h2>
      <p>Barre du bas ou menu latéral.</p>
    </>
  )
}
