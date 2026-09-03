export const meta = {
  title: 'Écran — Appellations',
  summary: 'Fromages filtrés par signe de qualité : AOP, IGP, Label Rouge, Bio.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Parcourir les fromages par appellation ou label.</p>

      <h2>Accès</h2>
      <p>Menu latéral → Appellations.</p>

      <h2>Éléments de l'interface</h2>
      <ul>
        <li>Filtres en chips : Tous, AOP, IGP, Label Rouge, Bio.</li>
        <li>Compteur de résultats.</li>
        <li>Liste des fromages correspondants, avec leurs badges de label.</li>
        <li>Note de bas de page rappelant la nature indicative de Label Rouge et Bio.</li>
      </ul>

      <h2>Actions</h2>
      <p>Toucher un filtre restreint la liste. Toucher un fromage ouvre sa fiche.</p>

      <h2>Cas particuliers</h2>
      <p>
        AOP et IGP sont des signes officiels réels ; Label Rouge et Bio sont <strong>déduits</strong> de la famille
        et de l'intensité du fromage, à titre indicatif — ils ne garantissent aucune certification réelle. Voir{' '}
        <a href="/docs/features/appellations/">la fonctionnalité Appellations</a>.
      </p>

      <h2>Navigation</h2>
      <p>Bouton retour (flèche en haut à gauche).</p>
    </>
  )
}
