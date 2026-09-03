export const meta = {
  title: 'Référence — Limites connues',
  summary: "Ce que l'application ne fait pas ou ne fait qu'imparfaitement, listé honnêtement plutôt que caché.",
}

const LIMITS: string[] = [
  "Couverture géographique — 13 régions de France métropolitaine (216 fiches). L'outre-mer n'est pas couvert ; rien n'est décidé sur le sujet.",
  "Iconographie incomplète — au 22/08/2026, 47 fiches sur 216 n'ont aucune image (78 avant la dernière passe d'illustration) ; 24 affichent une photo du pays du fromage plutôt que du fromage lui-même, toujours identifiée comme telle. Ces chiffres n'évoluent que par relecture manuelle, photo par photo.",
  "18 fiches sans anecdote (« le saviez-vous »), faute de source vérifiable pour ce champ précisément — délibéré, pas un oubli.",
  "Label Rouge et Bio sont des déductions indicatives — calculées depuis la famille et l'intensité du fromage, pas des données officielles vérifiées fromage par fromage. Seules AOP et IGP sont des signes officiels réels.",
  "Méthode de découpe déduite, jamais déclarée — 20 fiches n'en affichent aucune plutôt que d'inventer un geste (fromages frais, forts, service à la cuillère…).",
  "Aucun compte, aucune synchronisation — les favoris et les imports d'un appareil ne se retrouvent pas sur un autre ; seul un export/import manuel permet de les transférer.",
  "Aucune suppression de données depuis l'interface — les données locales s'effacent en vidant le stockage du navigateur, pas depuis un bouton de l'application.",
  "Photos hébergées à distance, non mises en cache par le service worker : elles ne s'affichent pas hors connexion si elles n'ont jamais été chargées.",
  "Carte de France décorative — silhouette SVG à 47 points, pas un fond de carte géographique précis ; ni géolocalisation ni itinéraire réels.",
  "Compatibilité navigateur non vérifiée formellement — l'application vise les navigateurs récents supportant les Service Workers et les modules ES ; aucune version minimale précise n'a été testée.",
]

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>
      <ul>
        {LIMITS.map((l) => (
          <li key={l.slice(0, 24)}>{l}</li>
        ))}
      </ul>
    </>
  )
}
