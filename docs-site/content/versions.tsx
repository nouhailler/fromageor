import { Callout, TableWrap } from '../components/Bits'

export const meta = {
  title: 'Versions',
  summary: "Historique des changements visibles par l'utilisateur, du plus récent au plus ancien. Pas de numéro de version publié — chaque build est daté.",
}

const ENTRIES: { date: string; changes: string }[] = [
  {
    date: '24/08/2026',
    changes:
      "Chaque fiche affiche sa méthode de découpe, avec un guide illustré pour chacune des six méthodes (principe, geste en quatre temps, fromages concernés).",
  },
  {
    date: '22/08/2026',
    changes:
      "31 fiches supplémentaires illustrées. Pays de la Loire ajoutée — treizième et dernière région métropolitaine (9 fiches) : la France métropolitaine est complète. Provence-Alpes-Côte d'Azur ajoutée (20 fiches). Passe éditoriale sur les 38 fiches du prototype initial. Correction : une marque commerciale n'est plus présentée comme une appellation.",
  },
  { date: '21/08/2026', changes: 'Nouvelle-Aquitaine ajoutée (19 fiches).' },
  {
    date: '20/08/2026',
    changes:
      "Occitanie ajoutée (14 fiches). Écran « Version de l'application ». Mentions légales déplacées dans leur propre écran, accessible depuis le menu.",
  },
  {
    date: '19/08/2026',
    changes:
      'Huit régions ajoutées d’un coup : Bourgogne-Franche-Comté, Bretagne, Centre-Val de Loire, Normandie, Hauts-de-France, Corse, Grand Est, Île-de-France. Mise à jour automatique de l’application en arrière-plan. Avertissement de premier lancement. Logo et icônes.',
  },
  { date: '05/08/2026', changes: 'Photos et résumés Wikipédia ajoutés aux fiches.' },
  {
    date: '04/08/2026',
    changes:
      "Première version : écrans du prototype initial, une région (Auvergne-Rhône-Alpes, 50 fromages), import / export de la base, déploiement sur Netlify.",
  },
]

export default function Versions() {
  return (
    <>
      <h1>Versions</h1>
      <p className="summary">{meta.summary}</p>

      <Callout>
        La version installée (identifiant dérivé de la date du build + commit) est visible dans l'application : menu
        latéral → Import / Export → carte « Version ». Voir <a href="/docs/features/mise-a-jour/">Mise à jour automatique</a>.
      </Callout>

      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Changements</th>
            </tr>
          </thead>
          <tbody>
            {ENTRIES.map((e) => (
              <tr key={e.date}>
                <td style={{ whiteSpace: 'nowrap' }}>{e.date}</td>
                <td>{e.changes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>

      <p>Le détail technique de chaque changement est dans l'historique Git du dépôt.</p>
    </>
  )
}
