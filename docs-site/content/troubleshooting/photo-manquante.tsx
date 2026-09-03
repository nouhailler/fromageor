export const meta = {
  title: 'Une photo ne s’affiche pas',
  summary: "Un encart gris avec une icône image apparaît à la place de la photo d'un fromage.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Symptôme</h2>
      <p>Un encart gris avec une icône image à la place de la photo.</p>

      <h2>Causes possibles</h2>
      <ul>
        <li>
          Ce fromage n'a pas (encore) de photo dans la base — voir{' '}
          <a href="/docs/reference/limitations/">Limites connues</a>.
        </li>
        <li>
          Une coupure réseau empêche le chargement depuis Wikimedia/Pexels : ces photos ne sont jamais embarquées
          dans l'application — voir <a href="/docs/offline/">Hors connexion</a>.
        </li>
      </ul>

      <h2>Diagnostic</h2>
      <p>Vérifier la connexion réseau, recharger la fiche.</p>

      <h2>Solution</h2>
      <p>Revenir en ligne. Si la fiche n'a jamais eu de photo, ce n'est pas une anomalie.</p>

      <h2>Informations utiles au support</h2>
      <p>Nom du fromage, capture d'écran.</p>
    </>
  )
}
