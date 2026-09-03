import { Callout } from '../components/Bits'

export const meta = {
  title: 'Permissions',
  summary: "L'application ne demande et n'utilise aucune permission du système ou du navigateur.",
}

export default function Permissions() {
  return (
    <>
      <h1>Permissions</h1>
      <p className="summary">{meta.summary}</p>

      <p>
        Aucune permission — ni localisation, ni caméra, ni microphone, ni notifications, ni contacts, ni capteurs —
        n'est demandée à aucun moment.
      </p>

      <h2>Pourquoi</h2>
      <p>
        La « Carte de France » de l'application (voir{' '}
        <a href="/docs/features/carte/">la fonctionnalité Carte de France</a>) est une silhouette SVG décorative
        avec des points positionnés par des coordonnées fixes dans les données — ce n'est ni une géolocalisation
        réelle, ni un fond de carte géographique. Aucune autre fonctionnalité de l'application n'a besoin d'accéder
        à du matériel ou à des données sensibles de l'appareil.
      </p>
      <p>
        Ce fait est vérifiable dans le code : le drapeau <code>USES_GEOLOCATION</code> (
        <code>src/lib/legal-notice.ts</code>) vaut <code>false</code>, et aucun appel à une API de permission du
        navigateur n'existe dans le code source.
      </p>

      <Callout>
        Si ce drapeau passait un jour à <code>true</code>, les mentions légales feraient apparaître d'elles-mêmes une
        section « Précision de la localisation » — voir <a href="/docs/legal/">Informations légales</a>.
      </Callout>
    </>
  )
}
