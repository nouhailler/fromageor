import { Callout } from '../components/Bits'

export const meta = {
  title: 'Paramètres',
  summary: "L'application n'a aucun réglage utilisateur configurable — ni thème, ni langue, ni options de confidentialité.",
}

export default function Settings() {
  return (
    <>
      <h1>Paramètres</h1>
      <p className="summary">{meta.summary}</p>

      <p>
        Il n'existe pas d'écran « Réglages ». Ce qui s'en approche le plus est l'écran{' '}
        <a href="/docs/features/import-export/">Import / Export</a>, qui affiche la version installée et permet de
        vérifier une mise à jour à la demande — mais ce n'est pas un paramètre modifiable, juste une information et
        une action ponctuelle.
      </p>

      <h2>Le seul réglage existant est réservé au développement</h2>
      <p>
        L'écran <a href="/docs/guide/mentions-legales/">Mentions légales</a> affiche, uniquement en environnement de
        développement (<code>import.meta.env.DEV</code>), un bouton « Réinitialiser les mentions légales (dév.) ».
        Il est <strong>absent du bundle de production</strong> et n'est donc jamais visible dans l'application
        déployée.
      </p>

      <Callout>
        Pas de mode sombre, pas de choix de langue, pas de réglage de confidentialité à ajuster : voir{' '}
        <a href="/docs/data/">Données et confidentialité</a> pour ce que l'application fait de vos données (rien
        n'est collecté).
      </Callout>
    </>
  )
}
