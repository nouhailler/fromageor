export const meta = {
  title: 'Écran — Encyclopédie',
  summary: 'Huit articles de fond sur le fromage : histoire, fabrication, affinage, moisissures, caves, races laitières.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Comprendre le fromage au-delà des fiches individuelles : d'où il vient, comment il se fait et s'affine.</p>

      <h2>Accès</h2>
      <p>Menu latéral → Encyclopédie.</p>

      <h2>Éléments de l'interface</h2>
      <p>
        <strong>Liste des articles</strong> : huit lignes (icône, titre, sous-titre) — Histoire du fromage, La
        fabrication, L'affinage, Les moisissures, Les caves d'affinage, Races bovines, Races caprines, Races ovines.
      </p>
      <p>
        <strong>Un article</strong> : bannière (titre + sous-titre) puis quatre sections, chacune avec son propre
        titre et son texte.
      </p>

      <h2>Actions</h2>
      <p>Toucher un article dans la liste l'ouvre.</p>

      <h2>Navigation</h2>
      <p>Bouton retour depuis un article revient à la liste des articles ; depuis la liste, revient à l'écran d'origine.</p>
    </>
  )
}
