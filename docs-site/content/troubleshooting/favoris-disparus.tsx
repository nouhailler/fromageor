export const meta = {
  title: 'Mes favoris ont disparu',
  summary: "Une liste de favoris vide, ou l'import personnel absent après une réouverture.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Symptôme</h2>
      <p>Une liste de favoris vide, ou l'import personnel absent après une réouverture.</p>

      <h2>Causes possibles</h2>
      <ul>
        <li>Données de navigation effacées (le stockage local a été vidé).</li>
        <li>Navigation privée : rien n'est conservé à la fermeture.</li>
        <li>
          Changement de navigateur ou d'appareil : il n'y a <strong>aucune synchronisation</strong> — voir{' '}
          <a href="/docs/offline/">Hors connexion</a>.
        </li>
      </ul>

      <h2>Diagnostic</h2>
      <p>
        Vérifier si le navigateur était en navigation privée, ou si « Effacer les données de navigation » a été
        utilisé récemment.
      </p>

      <h2>Solution</h2>
      <p>
        Aucune récupération n'est possible une fois le stockage local effacé. Exporter régulièrement ses données
        (Import / Export → Export) pour s'en prémunir — voir{' '}
        <a href="/docs/features/import-export/">Import / Export</a>.
      </p>

      <h2>Informations utiles au support</h2>
      <p>Navigateur, mode privé ou non, date du dernier export connu.</p>
    </>
  )
}
