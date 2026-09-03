export const meta = {
  title: 'Écran — Calendrier des saisons',
  summary: 'Les fromages à leur apogée, mois par mois.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Savoir quels fromages sont de saison à un moment donné de l'année.</p>

      <h2>Accès</h2>
      <p>Menu latéral → Calendrier des saisons.</p>

      <h2>Éléments de l'interface</h2>
      <p>
        Douze cartes, une par mois, chacune avec son nombre de fromages et la liste de leurs noms. Le mois en cours
        porte un badge « Ce mois-ci ».
      </p>

      <h2>Actions</h2>
      <p>Toucher un fromage dans la liste d'un mois ouvre sa fiche.</p>

      <h2>Résultat</h2>
      <p>
        Le champ <code>saison</code> de chaque fromage (texte libre : une saison, une plage cyclique comme «&nbsp;Été
        → Hiver&nbsp;», ou «&nbsp;Toute l'année&nbsp;») est traduit en mois précis — voir{' '}
        <a href="/docs/features/calendrier/">la fonctionnalité Calendrier</a>.
      </p>

      <h2>Navigation</h2>
      <p>Bouton retour (flèche en haut à gauche).</p>
    </>
  )
}
