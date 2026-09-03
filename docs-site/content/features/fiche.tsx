export const meta = {
  title: 'Fonctionnalité — Fiche détaillée',
  summary: "Rassemble tout ce que l'application sait d'un fromage : identité, dégustation, localisation, accords, découpe, sources.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>La fiche détaillée compose toutes les informations disponibles pour un fromage donné, tirées des données intégrées ou importées.</p>

      <h2>Objectif</h2>
      <p>Éviter d'avoir à chercher l'information ailleurs : une fiche = une réponse complète sur un fromage.</p>

      <h2>Prérequis</h2>
      <p>Aucun. Toujours accessible en touchant un fromage n'importe où dans l'application.</p>

      <h2>Comment l'utiliser</h2>
      <p>Toucher un fromage depuis n'importe quel écran de liste ouvre sa fiche. Voir <a href="/docs/guide/fiche/">le guide de cet écran</a> pour le détail des éléments affichés.</p>

      <h2>Données utilisées</h2>
      <p>
        Tous les champs du fromage (voir <a href="/docs/reference/errors/">le schéma de données</a>), plus deux
        déductions calculées à l'affichage : les appellations Label Rouge/Bio (voir{' '}
        <a href="/docs/features/appellations/">Appellations</a>) et la méthode de découpe (voir{' '}
        <a href="/docs/features/decoupe/">Découpe</a>).
      </p>

      <h2>Hors connexion</h2>
      <p>
        Le contenu textuel fonctionne entièrement hors connexion. La photo principale et les vignettes, hébergées sur
        Wikimedia Commons ou Pexels, nécessitent le réseau — voir <a href="/docs/offline/">Hors connexion</a>.
      </p>

      <h2>Limites</h2>
      <p>
        47 fiches sur 216 n'ont aucune photo (voir <a href="/docs/reference/limitations/">Limites connues</a>). Les
        badges Label Rouge et Bio sont indicatifs, pas des certifications réelles.
      </p>

      <h2>Dépannage</h2>
      <p>
        <a href="/docs/troubleshooting/photo-manquante/">Une photo ne s'affiche pas</a>.
      </p>

      <h2>FAQ</h2>
      <p>
        <a href="/docs/faq/">Pourquoi certaines fiches n'ont pas de photo ?</a>
      </p>
    </>
  )
}
