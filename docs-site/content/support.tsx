import { TableWrap } from '../components/Bits'

export const meta = {
  title: 'Support',
  summary: "Comment signaler un bug ou contacter l'éditeur. Projet personnel, sans délai de réponse garanti.",
}

export default function Support() {
  return (
    <>
      <h1>Support</h1>
      <p className="summary">{meta.summary}</p>

      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Pour</th>
              <th>Où</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Signaler un bug, une fiche incorrecte ou une suggestion</td>
              <td>
                <a href="https://github.com/nouhailler/fromageor/issues">github.com/nouhailler/fromageor/issues</a>
              </td>
            </tr>
            <tr>
              <td>Contacter l'éditeur</td>
              <td>
                <a href="mailto:contact@swinux.ch">contact@swinux.ch</a>
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>À joindre dans un signalement</h2>
      <ul>
        <li>la version affichée (Import / Export → Version de l'application) ;</li>
        <li>l'appareil et le navigateur utilisés ;</li>
        <li>ce qui a été fait juste avant le problème ;</li>
        <li>si possible, une capture d'écran ;</li>
        <li>pour une fiche de fromage : son nom exact.</li>
      </ul>
    </>
  )
}
