export const meta = {
  title: 'Fonctionnalité — Encyclopédie',
  summary: "Huit articles de fond, écrits pour l'application, indépendants des fiches individuelles de fromages.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>
        <code>encycloDefs()</code> (<code>src/lib/encyclopedia.ts</code>) fournit huit articles à quatre sections
        chacun : Histoire du fromage, La fabrication, L'affinage, Les moisissures, Les caves d'affinage, Races
        bovines, Races caprines, Races ovines.
      </p>

      <h2>Objectif</h2>
      <p>Donner le contexte général (technique, historique, biologique) qu'une fiche de fromage individuelle n'a pas vocation à porter.</p>

      <h2>Comment l'utiliser</h2>
      <p>Menu latéral → Encyclopédie, choisir un article. Voir <a href="/docs/guide/encyclopedie/">le guide de cet écran</a>.</p>

      <h2>Données utilisées</h2>
      <p>Contenu entièrement statique, écrit pour l'application — pas de lien dynamique avec les fiches de fromages individuelles.</p>

      <h2>Hors connexion</h2>
      <p>Fonctionne entièrement hors connexion — texte intégré au bundle de l'application.</p>

      <h2>Limites</h2>
      <p>Huit articles fixes ; pas de recherche interne à l'encyclopédie ni de liens croisés vers des fiches de fromages précises.</p>
    </>
  )
}
