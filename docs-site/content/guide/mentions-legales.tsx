import { Callout } from '../../components/Bits'

export const meta = {
  title: 'Écran — Mentions légales',
  summary: 'Avertissement, limitation de responsabilité et éditeur, accessibles en permanence depuis le menu.',
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Objectif</h2>
      <p>Donner accès au texte légal complet à tout moment, au-delà de l'avertissement du premier lancement.</p>

      <h2>Accès</h2>
      <ul>
        <li>Menu latéral → Mentions légales, à tout moment.</li>
        <li>
          Modale de premier lancement : s'affiche automatiquement à la toute première ouverture de l'application et
          doit être validée pour continuer.
        </li>
      </ul>

      <h2>Éléments de l'interface</h2>
      <ul>
        <li>Numéro de version des mentions dans l'en-tête.</li>
        <li>Sections du texte légal (avertissement, limitation de responsabilité, données personnelles, éditeur…).</li>
      </ul>

      <h2>Actions</h2>
      <p>
        Sur la modale de premier lancement uniquement : bouton « J'ai compris » qui valide et mémorise
        l'acceptation ; elle ne réapparaît plus ensuite (sauf changement majeur de version des mentions).
      </p>

      <h2>Cas particuliers</h2>
      <p>
        En développement uniquement, un bouton « Réinitialiser les mentions légales (dév.) » réaffiche la modale de
        premier lancement. Il est absent du bundle de production.
      </p>

      <h2>Navigation</h2>
      <p>Bouton retour (flèche en haut à gauche) sur l'écran ; la modale se ferme par Échap ou le bouton retour Android une fois validée.</p>

      <Callout>Le contenu de cette page n'est pas reproduit dans la documentation — voir <a href="/docs/legal/">Informations légales</a>.</Callout>
    </>
  )
}
