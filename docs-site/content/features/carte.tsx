export const meta = {
  title: 'Fonctionnalité — Carte de France',
  summary: 'Positionne chaque fromage sur une silhouette de la France par des coordonnées fixes, filtrable par type.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>Une silhouette SVG de la France métropolitaine (47 points de tracé) sur laquelle chaque fromage est placé par des coordonnées <code>[x, y]</code> normalisées 0-100, pas par une vraie projection cartographique.</p>

      <h2>Objectif</h2>
      <p>Donner une intuition géographique de la répartition des fromages, région par région.</p>

      <h2>Prérequis</h2>
      <p>Aucun — voir <a href="/docs/permissions/">Permissions</a> : ce n'est pas une géolocalisation, aucune permission n'est demandée.</p>

      <h2>Comment l'utiliser</h2>
      <p>Onglet Carte, filtrer par chip (Tous, AOP, Chèvre, Brebis, Pâte molle), toucher un point ou une ligne de la liste. Voir <a href="/docs/guide/carte/">le guide de cet écran</a>.</p>

      <h2>Données utilisées</h2>
      <p>Le champ <code>map: [x, y]</code> de chaque fromage. Pour les fiches écrites à la main, ces coordonnées sont réajustées par moindres carrés sur les repères déjà placés, faute de disposer de la projection d'origine du prototype.</p>

      <h2>Hors connexion</h2>
      <p>Fonctionne entièrement hors connexion — la carte est un tracé SVG intégré à l'application, aucune tuile ni service cartographique externe.</p>

      <h2>Limites</h2>
      <p>
        Silhouette à 47 points seulement : près des côtes et des frontières, certains repères sont volontairement
        reculés dans les terres pour rester visibles à l'intérieur du contour, sans changer leur position réelle
        dans les données textuelles de la fiche. Voir <a href="/docs/reference/limitations/">Limites connues</a>.
      </p>

      <h2>FAQ</h2>
      <p>
        <a href="/docs/permissions/">Pourquoi l'application ne demande-t-elle aucune permission de localisation ?</a>
      </p>
    </>
  )
}
