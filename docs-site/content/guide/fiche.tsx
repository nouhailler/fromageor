export const meta = {
  title: 'Écran — Fiche détaillée',
  summary: "Toutes les informations d'un fromage : photo, intensité, notes, carte d'identité, localisation, accords, découpe, histoire.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Présenter un fromage en détail : origine, fabrication, dégustation, accords et méthode de découpe.</p>

      <h2>Accès</h2>
      <p>Toucher n'importe quel fromage, depuis n'importe quel écran (accueil, carte, recherche, favoris, accords, découpe, calendrier, appellations).</p>

      <h2>Éléments de l'interface</h2>
      <ul>
        <li>Photo en tête (ou encart si absente), avec bouton retour et bouton cœur (ajouter aux favoris).</li>
        <li>Une bande de vignettes photo supplémentaires si la fiche en a.</li>
        <li>Badges : AOP si applicable, « Marque » si le nom est une marque commerciale et non une appellation, région.</li>
        <li>Nom, noms alternatifs, département et commune.</li>
        <li>Jauge d'intensité (1 à 5).</li>
        <li>Notes aromatiques (puces).</li>
        <li>Carte d'identité : lait, race, famille, croûte, texture, forme, poids, dimensions, affinage, matière grasse, saison, couleur.</li>
        <li>Localisation : silhouette de la carte de France avec un point, commune/département/région ; photo du pays sous la carte si le fromage lui-même n'a pas de photo.</li>
        <li>Accords (vins, bières, cidres, whiskies, pains) si renseignés.</li>
        <li>Valeurs nutritionnelles pour 100 g si renseignées.</li>
        <li>Histoire, résumé Wikipédia avec lien si disponible, encart « Le saviez-vous » si une anecdote existe.</li>
        <li>Fabrication, conservation, comment le servir, si renseignés.</li>
        <li>Bloc Découpe (« Comment découper ce fromage ? ») si une méthode a pu être déduite.</li>
        <li>Prix moyen et disponibilité.</li>
      </ul>

      <h2>Actions</h2>
      <p>
        Bouton cœur → ouvre la fiche « Ajouter aux favoris » (choix de liste, création d'une nouvelle liste). Bloc
        Découpe → ouvre le guide de la méthode concernée. Lien Wikipédia → ouvre l'article dans un nouvel onglet.
      </p>

      <h2>Cas particuliers</h2>
      <ul>
        <li>Sans photo du fromage : encart gris avec une icône, remplacé par une photo du pays sous la carte si elle existe.</li>
        <li>Sans méthode de découpe déduite (20 fiches) : aucun bloc Découpe n'est affiché.</li>
        <li>Fromage-marque : une ligne « Nom déposé, et non une appellation — marque de X. » apparaît sous le nom.</li>
      </ul>

      <h2>Navigation</h2>
      <p>
        Bouton retour (flèche en haut à gauche de la photo) revient à l'écran d'origine — sauf depuis le guide de
        découpe, qui rouvre la fiche d'où on venait plutôt que de retomber sur une liste.
      </p>
    </>
  )
}
