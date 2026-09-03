export const meta = {
  title: 'Fonctionnalité — Recherche plein texte',
  summary: 'Filtre les fromages par sous-chaîne sur nom, noms alternatifs, département, commune, famille, texture et région.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>
        <code>searchCheeses()</code> (<code>src/lib/search.ts</code>) filtre la liste des fromages en comparant, en
        minuscules, le texte saisi à la concaténation de sept champs par fromage.
      </p>

      <h2>Objectif</h2>
      <p>Retrouver un fromage sans connaître sa région exacte, par une partie de son nom ou de sa provenance.</p>

      <h2>Comment l'utiliser</h2>
      <p>Onglet Recherche, taper dans le champ ; le filtre s'applique à chaque frappe, sans bouton de validation. Voir <a href="/docs/guide/recherche/">le guide de cet écran</a>.</p>

      <h2>Options</h2>
      <p>Filtre complémentaire par type de lait (Tous, Vache, Chèvre, Brebis, Mélange), combiné avec le texte tapé.</p>

      <h2>Données utilisées</h2>
      <p>nom, noms alternatifs, département, commune, famille, texture, nom de la région — comparaison par sous-chaîne, insensible à la casse, sans tolérance aux fautes de frappe ni recherche floue.</p>

      <h2>Résultat</h2>
      <p>Une liste filtrée, avec un compteur de résultats. Champ vide et filtre « Tous » affiche l'ensemble du jeu de données actif (intégré + importé).</p>

      <h2>Hors connexion</h2>
      <p>Fonctionne entièrement hors connexion — recherche purement locale sur les données déjà chargées, aucun appel réseau.</p>

      <h2>Limites</h2>
      <p>Pas de correction orthographique ni de recherche phonétique : une faute de frappe ne trouve rien.</p>
    </>
  )
}
