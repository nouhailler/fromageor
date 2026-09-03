export const meta = {
  title: 'Écran — Accords mets & boissons',
  summary: 'Dix catégories de boissons, chacune avec les fromages qui lui sont automatiquement suggérés.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Suggérer des accords mets-boissons sans avoir à les chercher fromage par fromage.</p>

      <h2>Accès</h2>
      <p>Bandeau « Accords mets &amp; boissons » sur l'accueil, ou menu latéral → Accords mets &amp; boissons.</p>

      <h2>Éléments de l'interface</h2>
      <p>Dix catégories, chacune avec une icône, un libellé, une courte description et un carrousel horizontal de fromages correspondants : vins rouges, vins blancs, champagne, bière, cidre, poiré, whisky, pain, confiture, miel.</p>

      <h2>Actions</h2>
      <p>Toucher un fromage dans un carrousel ouvre sa fiche.</p>

      <h2>Résultat</h2>
      <p>
        Chaque catégorie applique une règle de correspondance sur la famille, la croûte, la texture, le type de lait
        ou l'intensité du fromage — voir <a href="/docs/features/accords/">la fonctionnalité Accords</a> pour le
        détail des règles.
      </p>

      <h2>Navigation</h2>
      <p>Bouton retour (flèche en haut à gauche) revient à l'écran d'origine.</p>
    </>
  )
}
