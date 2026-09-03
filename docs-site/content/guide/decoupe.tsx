export const meta = {
  title: 'Écran — Découpe',
  summary: 'Six méthodes de découpe, chacune listant les fromages concernés et ouvrant un guide illustré du geste.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Apprendre à découper correctement un fromage selon sa forme et sa famille.</p>

      <h2>Accès</h2>
      <p>Menu latéral → Découpe ; ou depuis une fiche, bouton « Comment découper ce fromage ? » qui ouvre directement la méthode concernée.</p>

      <h2>Éléments de l'interface</h2>
      <p>
        <strong>Liste des méthodes</strong> : une carte par méthode (Roquefort &amp; pâtes persillées, Cœurs
        coulants &amp; carrés, Bûches &amp; pyramides de chèvre, Comté &amp; grandes meules, Brie &amp; grandes
        pointes molles, Camembert &amp; petits ronds fleuris), chacune avec un schéma, trois exemples de fromages et
        le compte des autres.
      </p>
      <p>
        <strong>Guide d'une méthode</strong> (au clic sur une carte) : bannière avec schéma et nom, principe du
        geste, pourquoi ce geste (ce qu'il répartit, ce qu'il confisque au premier servi), les quatre temps du geste
        illustrés et détaillés, ce qu'il faut éviter, une particularité de la famille, et la liste complète des
        fromages concernés.
      </p>

      <h2>Actions</h2>
      <p>Toucher une carte de méthode ouvre son guide. Toucher un fromage dans la liste des concernés ouvre sa fiche.</p>

      <h2>Cas particuliers</h2>
      <p>
        Les trois noms d'exemple de chaque carte sont les AOP en priorité, puis l'ordre alphabétique — jamais une
        liste écrite à la main. Voir <a href="/docs/features/decoupe/">la fonctionnalité Découpe</a> pour la logique
        de classement complète.
      </p>

      <h2>Navigation</h2>
      <p>
        Depuis une fiche, le retour du guide de méthode rouvre la fiche d'origine plutôt que la liste des méthodes
        (l'écran Découpe est sous la fiche dans la pile).
      </p>
    </>
  )
}
