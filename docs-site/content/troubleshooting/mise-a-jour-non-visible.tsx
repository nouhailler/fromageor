export const meta = {
  title: "L'application ne semble pas à jour",
  summary: "Un écran ou une donnée récemment ajoutée n'apparaît pas alors que le déploiement est annoncé terminé.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Symptôme</h2>
      <p>Un écran ou une donnée récemment ajoutée n'apparaît pas alors que le déploiement est annoncé terminé.</p>

      <h2>Causes possibles</h2>
      <ul>
        <li>L'onglet est resté ouvert sans repasser au premier plan ni se reconnecter depuis le déploiement.</li>
        <li>Le garde-fou anti-boucle (deux rechargements en moins de 10 min) vient d'ignorer un rechargement légitime.</li>
      </ul>

      <h2>Diagnostic</h2>
      <p>
        Menu latéral → Import / Export → carte Version : comparer la date de build affichée à la date attendue du
        déploiement.
      </p>

      <h2>Solution</h2>
      <p>
        Bouton « Rechercher une mise à jour » sur cette carte : il relance la vérification et lève le garde-fou
        anti-boucle pour l'occasion. Voir <a href="/docs/features/mise-a-jour/">Mise à jour automatique</a>.
      </p>

      <h2>Si le problème persiste</h2>
      <p>Fermer complètement l'onglet ou l'application, puis la rouvrir.</p>

      <h2>Informations utiles au support</h2>
      <p>Version et date affichées, navigateur, appareil, état de la connexion.</p>
    </>
  )
}
