export const meta = {
  title: 'Fonctionnalité — Calendrier des saisons',
  summary: "Traduit le champ « saison » (texte libre) de chaque fromage en mois précis, saisons cycliques comprises.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>
        <code>seasonMonths()</code> (<code>src/lib/season.ts</code>) analyse le champ <code>saison</code> — une
        saison simple, une plage cyclique (« Été → Hiver », qui traverse l'automne), « Toute l'année », ou du texte
        additionnel entre parenthèses — et renvoie la liste des mois concernés.
      </p>

      <h2>Objectif</h2>
      <p>Répondre à « quels fromages sont à leur apogée ce mois-ci ? » sans qu'aucune fiche n'ait à lister ses mois un par un.</p>

      <h2>Comment l'utiliser</h2>
      <p>Menu latéral → Calendrier des saisons. Voir <a href="/docs/guide/calendrier/">le guide de cet écran</a>.</p>

      <h2>Données utilisées</h2>
      <p>Le champ texte libre <code>saison</code> de chaque fromage — recherché par sous-chaîne, pas par un format strict.</p>

      <h2>Résultat</h2>
      <p>
        Douze cartes mensuelles, chacune listant les fromages dont la plage de saison couvre ce mois. Le mois en
        cours porte un badge « Ce mois-ci » (calculé séparément, pour le carrousel « De saison » de l'accueil, par
        une simple table mois → saison, distincte du parseur cyclique utilisé ici).
      </p>

      <h2>Hors connexion</h2>
      <p>Fonctionne entièrement hors connexion — calcul purement local.</p>

      <h2>Limites</h2>
      <p>Le texte de saison étant libre, une formulation inhabituelle qui ne contient aucun des quatre noms de saison reconnus (Printemps, Été, Automne, Hiver) ne produit aucun mois.</p>
    </>
  )
}
