import { Callout, TableWrap } from '../components/Bits'

export const meta = {
  title: 'Données et confidentialité',
  summary: "Aucune donnée personnelle n'est collectée. Tout ce qui est stocké l'est localement, sur l'appareil, dans le localStorage du navigateur.",
}

export default function DataPage() {
  return (
    <>
      <h1>Données et confidentialité</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Les 216 fiches de fromages</h2>
      <p>
        Le contenu encyclopédique (fromages, régions, guides de découpe, articles d'encyclopédie) est{' '}
        <strong>compilé dans l'application</strong> au moment du build — ce ne sont pas des données personnelles,
        et elles ne changent pas sans une nouvelle version de l'application (voir{' '}
        <a href="/docs/versions/">Versions</a>).
      </p>

      <h2>Ce qui est stocké localement</h2>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Donnée</th>
              <th>Clé <code>localStorage</code></th>
              <th>Origine</th>
              <th>Transmission</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Listes de favoris</td>
              <td><code>fromages-listes</code></td>
              <td>Créées par l'utilisateur (écran Favoris)</td>
              <td>Aucune — jamais envoyées nulle part</td>
            </tr>
            <tr>
              <td>Fromages / régions importés</td>
              <td><code>fromages-import-cheeses</code>, <code>fromages-import-regions</code></td>
              <td>Import JSON par l'utilisateur (écran Import / Export)</td>
              <td>Aucune</td>
            </tr>
            <tr>
              <td>Avertissement légal validé</td>
              <td><code>legal_notice_acknowledged</code>, <code>legal_notice_acknowledged_version</code></td>
              <td>Validation de la modale de premier lancement</td>
              <td>Aucune</td>
            </tr>
            <tr>
              <td>Dernière vérification de mise à jour</td>
              <td><code>fromages-maj-verifiee-le</code></td>
              <td>Automatique ou bouton « Rechercher une mise à jour »</td>
              <td>Aucune (la vérification elle-même interroge le serveur de déploiement, sans identifier l'utilisateur)</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>Stockage local</h2>
      <p>
        Tout est dans le <code>localStorage</code> du navigateur — pas d'IndexedDB, pas de fichiers locaux propres à
        l'application au-delà de ce que le service worker précache (voir{' '}
        <a href="/docs/offline/">Hors connexion</a>). Ces données :
      </p>
      <ul>
        <li>ne quittent jamais l'appareil ;</li>
        <li>disparaissent si l'utilisateur efface les données de navigation du site, ou en navigation privée à la fermeture de l'onglet ;</li>
        <li>disparaissent à la désinstallation de l'application ;</li>
        <li>peuvent être sauvegardées manuellement pour les fromages importés, via l'export JSON (pas pour les favoris, qui n'ont pas de fonction d'export dédiée).</li>
      </ul>

      <h2>Export</h2>
      <p>
        Menu latéral → Import / Export → Export : télécharge un fichier JSON du jeu de données actif (fromages
        intégrés et import personnel fusionnés). Voir <a href="/docs/features/import-export/">Import / Export</a>.
      </p>

      <h2>Suppression</h2>
      <p>
        Aucun bouton dédié dans l'application. Passer par les réglages du navigateur : « Effacer les données de
        navigation » pour ce site.
      </p>

      <Callout>
        L'application ne collecte aucune donnée : il n'y a pas de politique de confidentialité séparée. La section
        « Données personnelles » des <a href="/docs/legal/">mentions légales</a> en tient lieu.
      </Callout>
    </>
  )
}
