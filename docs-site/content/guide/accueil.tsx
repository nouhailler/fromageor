export const meta = {
  title: 'Écran — Accueil',
  summary: "Le fromage à la une, la carte miniature, les sélections de saison et populaires — point d'entrée de l'application.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Donner un aperçu de la base et des points d'entrée vers les autres écrans, sans obliger à chercher.</p>

      <h2>Accès</h2>
      <p>Écran par défaut au lancement de l'application ; onglet « Accueil » de la barre du bas.</p>

      <h2>Éléments de l'interface</h2>
      <ul>
        <li>En-tête : nombre total de fromages et de régions.</li>
        <li>Carte « À la une » : un fromage mis en avant, ouvre sa fiche.</li>
        <li>Bloc « Sur la carte » avec un lien « Tout explorer → » et une miniature de la carte de France (ouvre l'écran Carte).</li>
        <li>Bandeau « Accords mets &amp; boissons », ouvre l'écran du même nom.</li>
        <li>Carrousel « De saison » (avec la saison en cours), un fromage par carte.</li>
        <li>Liste « À découvrir » : une sélection de fromages populaires.</li>
      </ul>

      <h2>Actions</h2>
      <p>Toucher un fromage (mis en avant, de saison ou à découvrir) ouvre sa fiche détaillée. Toucher la carte miniature ou « Tout explorer » ouvre l'écran Carte. Toucher le bandeau Accords ouvre cet écran.</p>

      <h2>Cas particuliers</h2>
      <p>Le sous-titre bascule automatiquement entre le nom d'une seule région (une seule région couverte) et « N régions » au-delà d'une — utile pour un jeu de données personnalisé restreint à une seule région importée.</p>

      <h2>Navigation</h2>
      <p>Barre du bas (Accueil, Carte, Recherche, Favoris) ou menu latéral (☰, en haut à droite) pour tout le reste.</p>
    </>
  )
}
