import { Callout } from '../components/Bits'

export const meta = {
  title: 'Informations légales',
  summary: "Avertissement, limitation de responsabilité et éditeur. Le texte complet vit dans l'application, pas ici, pour n'avoir qu'une seule source.",
}

export default function Legal() {
  return (
    <>
      <h1>Informations légales</h1>
      <p className="summary">{meta.summary}</p>

      <Callout kind="warning">
        Cette page <strong>ne reproduit pas</strong> le texte juridique. Un contenu légal ne doit jamais avoir deux
        versions qui peuvent diverger : la seule source de vérité est l'écran de l'application, éditable en un seul
        endroit du code (<code>src/lib/legal-notice.ts</code>).
      </Callout>

      <h2>Où lire le texte complet</h2>
      <ul>
        <li>Dans l'application : menu latéral → Mentions légales, accessible à tout moment.</li>
        <li>
          Au tout premier lancement, un avertissement court s'affiche et doit être validé avant de continuer — voir{' '}
          <a href="/docs/guide/mentions-legales/">le guide de cet écran</a>.
        </li>
      </ul>

      <h2>Ce que couvre ce texte</h2>
      <p>
        Avertissement sur l'exactitude des données (indicatives, notamment les appellations Label Rouge et Bio
        déduites — voir <a href="/docs/features/appellations/">Appellations</a>), limitation de responsabilité,
        section « Données personnelles » (qui tient lieu de politique de confidentialité, l'application n'en
        collectant aucune — voir <a href="/docs/data/">Données et confidentialité</a>), et identité de l'éditeur.
      </p>

      <h2>Éditeur</h2>
      <p>
        Swinux — contact : <a href="mailto:contact@swinux.ch">contact@swinux.ch</a>. L'identité complète (adresse,
        hébergeur) est dans l'écran Mentions légales de l'application.
      </p>
    </>
  )
}
