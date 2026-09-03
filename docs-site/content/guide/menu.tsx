export const meta = {
  title: 'Écran — Menu latéral',
  summary: "Navigation transverse vers tous les écrans secondaires, compteur par région, et lien vers cette documentation.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Donner accès à tout ce qui n'est pas dans la barre du bas.</p>

      <h2>Accès</h2>
      <p>Bouton ☰ toujours visible en haut à droite de l'application, sur tous les écrans principaux.</p>

      <h2>Éléments de l'interface</h2>
      <ul>
        <li>En-tête : nom de l'application, nombre de fiches référencées, bouton fermer.</li>
        <li>Raccourcis vers Accueil, Carte, Recherche, Favoris (miroir de la barre du bas).</li>
        <li>Accords mets &amp; boissons, Découpe, Calendrier des saisons, Appellations, Encyclopédie, Import / Export, Mentions légales.</li>
        <li>Liste des régions avec, pour chacune, un compteur de fromages.</li>
        <li>Pied de page : résumé (nombre de fiches et de régions).</li>
        <li>Tout en bas : lien « Documentation », qui ouvre ce site dans un nouvel onglet.</li>
      </ul>

      <h2>Actions</h2>
      <p>Toucher n'importe quelle entrée ouvre l'écran correspondant et ferme le menu. Toucher le fond assombri ou le bouton fermer ferme le menu sans naviguer.</p>

      <h2>Navigation</h2>
      <p>Le menu se superpose à l'écran courant ; le refermer revient exactement là où on était.</p>
    </>
  )
}
