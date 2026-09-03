export const meta = {
  title: 'Référence — Paramètres',
  summary: "Table de référence des paramètres exposés à l'utilisateur : vide, l'application n'en a aucun.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>
      <p>
        Voir <a href="/docs/settings/">Paramètres</a> pour le détail : l'application n'a aucun réglage utilisateur
        configurable, il n'y a donc rien à lister ici.
      </p>
    </>
  )
}
