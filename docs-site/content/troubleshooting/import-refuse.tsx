import { TableWrap } from '../../components/Bits'

export const meta = {
  title: 'L’import JSON est refusé',
  summary: "Un message d'erreur s'affiche au lieu de la confirmation d'import sur l'écran Import / Export.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Symptôme</h2>
      <p>Un message d'erreur s'affiche au lieu de la confirmation d'import.</p>

      <h2>Diagnostic</h2>
      <p>
        Comparer le fichier au schéma affiché sur l'écran Import / Export, ou télécharger son gabarit d'exemple
        depuis ce même écran.
      </p>

      <h2>Solution</h2>
      <p>Corriger le ou les champs signalés, réessayer. Voir le détail des messages ci-dessous.</p>

      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Message</th>
              <th>Signification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>JSON invalide : le texte fourni ne peut pas être analysé.</td>
              <td>Le texte collé n'est pas du JSON syntaxiquement valide.</td>
            </tr>
            <tr>
              <td>Format non reconnu : attendu un tableau de fromages, ou un objet {'{ "region"?, "cheeses": [...] }'}.</td>
              <td>La racine du document n'est ni un tableau, ni un objet avec une clé « cheeses ».</td>
            </tr>
            <tr>
              <td>"region" doit être un objet {'{ "id": string, "name": string }'}.</td>
              <td>La clé « region », si présente, ne respecte pas la forme attendue.</td>
            </tr>
            <tr>
              <td>"&lt;champ&gt;" manquant ou vide / doit être un(e) …</td>
              <td>
                Un fromage du tableau ne respecte pas le schéma — voir{' '}
                <a href="/docs/reference/errors/">Codes et erreurs</a> pour la liste complète des champs attendus.
              </td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>Informations utiles au support</h2>
      <p>Le fichier JSON en cause (sans données personnelles), la liste des erreurs affichées.</p>
    </>
  )
}
