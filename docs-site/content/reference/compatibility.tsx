import { Callout, TableWrap } from '../../components/Bits'

export const meta = {
  title: 'Référence — Compatibilité',
  summary: "Plateformes et navigateurs visés par l'application PWA. Aucune version minimale précise n'a été testée formellement.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Plateforme</th>
              <th>Support</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Android — Chrome, Edge</td>
              <td>Installation PWA complète (« Ajouter à l'écran d'accueil » / « Installer l'application »).</td>
            </tr>
            <tr>
              <td>iOS — Safari</td>
              <td>Installation via le bouton de partage → « Sur l'écran d'accueil ». Seul Safari permet l'installation d'une PWA sur iOS.</td>
            </tr>
            <tr>
              <td>Ordinateur — Chrome, Edge</td>
              <td>Installation via l'icône dédiée dans la barre d'adresse.</td>
            </tr>
            <tr>
              <td>Ordinateur — Firefox</td>
              <td>Utilisable dans un onglet ; Firefox desktop ne propose pas d'installation PWA native.</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>Prérequis techniques</h2>
      <p>
        L'application s'appuie sur des fonctionnalités standard des navigateurs modernes : Service Workers (mise à
        jour automatique, précache hors connexion), <code>localStorage</code> (favoris, import), modules ES et CSS
        récent (custom properties, <code>color-mix()</code>). Un navigateur sans ces API affichera l'application de
        façon dégradée ou ne la fera pas fonctionner.
      </p>

      <Callout kind="warning">
        Aucune version minimale précise (numéro de version Chrome, iOS, etc.) n'a été testée formellement — À
        vérifier. Signalé plutôt que deviné, conformément à la règle du projet de ne jamais inventer un comportement
        non déterminé par le code ou un test réel.
      </Callout>
    </>
  )
}
