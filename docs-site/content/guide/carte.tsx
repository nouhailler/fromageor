export const meta = {
  title: 'Écran — Carte de France',
  summary: 'Tous les fromages positionnés sur une silhouette de la France, avec des filtres et une liste.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Explorer les fromages par leur localisation géographique.</p>

      <h2>Accès</h2>
      <p>Onglet « Carte » de la barre du bas, ou depuis l'accueil (miniature de carte / « Tout explorer »).</p>

      <h2>Éléments de l'interface</h2>
      <ul>
        <li>Filtres en chips : Tous, AOP, Chèvre, Brebis, Pâte molle.</li>
        <li>Carte SVG de la France avec un point par fromage filtré.</li>
        <li>Légende des couleurs par type de lait (vache, chèvre, brebis, mélange).</li>
        <li>Liste des fromages filtrés sous la carte (nom + département).</li>
      </ul>

      <h2>Actions</h2>
      <p>Toucher un filtre restreint les points affichés. Toucher un point ou une ligne de la liste ouvre la fiche du fromage.</p>

      <h2>Cas particuliers</h2>
      <p>
        La silhouette n'a que 47 points de tracé : près des côtes, certains repères sont légèrement reculés dans les
        terres pour rester visibles à l'intérieur du contour — voir <a href="/docs/reference/limitations/">Limites connues</a>.
      </p>

      <h2>Navigation</h2>
      <p>Barre du bas ou menu latéral.</p>
    </>
  )
}
