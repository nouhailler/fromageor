import { Callout, TableWrap } from '../components/Bits'

export const meta = {
  title: 'Hors connexion',
  summary: "Ce qui fonctionne sans réseau, ce qui en a besoin, et pourquoi certaines photos peuvent manquer hors connexion.",
}

export default function Offline() {
  return (
    <>
      <h1>Hors connexion</h1>
      <p className="summary">{meta.summary}</p>

      <p>
        Le service worker (Workbox, généré par <code>vite-plugin-pwa</code>) précharge l'intégralité de
        l'application — écrans, styles, polices, icônes — au premier chargement. Les 216 fiches elles-mêmes sont des
        données compilées dans le bundle JS, pas récupérées par une API : recherche, favoris, accords, découpe,
        calendrier, appellations et encyclopédie fonctionnent donc <strong>entièrement hors connexion</strong> dès la
        deuxième ouverture.
      </p>

      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Fonction</th>
              <th>Hors connexion</th>
              <th>En ligne</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Navigation, fiches, recherche, favoris, découpe, calendrier, appellations, encyclopédie, mentions légales</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Import / export JSON (localStorage)</td>
              <td>✅</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Photos de fromages (Wikimedia Commons, Pexels)</td>
              <td>⚠️ selon le cache du navigateur</td>
              <td>✅</td>
            </tr>
            <tr>
              <td>Vérification de mise à jour</td>
              <td>❌</td>
              <td>✅</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <Callout kind="warning">
        Les photos ne sont pas mises en cache par le service worker : <code>image</code>, <code>galleryImages</code>{' '}
        et <code>terroir</code> pointent vers <code>upload.wikimedia.org</code> ou Pexels, hors du périmètre
        précaché. Une fiche déjà consultée en ligne peut donc réafficher un encart vide si elle est rouverte hors
        connexion, selon que le navigateur a ou non gardé la photo dans son propre cache HTTP.
      </Callout>

      <h2>Synchronisation</h2>
      <p>
        Il n'y a <strong>aucune synchronisation</strong> : pas de compte, pas de serveur, pas de file d'attente à
        réconcilier. Le seul mécanisme de transfert de données est l'export/import JSON manuel — voir{' '}
        <a href="/docs/features/import-export/">Import / Export</a>.
      </p>
    </>
  )
}
