import { Callout, TableWrap } from '../../components/Bits'

export const meta = {
  title: 'Fonctionnalité — Appellations',
  summary: "AOP et IGP sont des signes officiels réels ; Label Rouge et Bio sont déduits de la famille et de l'intensité, à titre indicatif seulement.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p><code>appellationsOf()</code> (<code>src/lib/appellations.ts</code>) calcule, pour chaque fromage, les labels à afficher.</p>

      <h2>Objectif</h2>
      <p>Signaler les signes de qualité sans laisser croire qu'une déduction indicative est une certification officielle.</p>

      <h2>Comment l'utiliser</h2>
      <p>Menu latéral → Appellations, filtrer par label. Voir <a href="/docs/guide/appellations/">le guide de cet écran</a>.</p>

      <h2>Résultat — comment chaque label est déterminé</h2>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Label</th>
              <th>Nature</th>
              <th>Comment il est déterminé</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AOP</td>
              <td>Signe officiel réel</td>
              <td>Champ <code>aop</code> des données, saisi fiche par fiche depuis une source vérifiée</td>
            </tr>
            <tr>
              <td>IGP</td>
              <td>Signe officiel réel</td>
              <td>Déduit du nom du fromage par une liste fixe (tomme/raclette/emmental de Savoie, tomme des Pyrénées, Pérail, soumaintrain, cancoillotte…), faute de champ dédié dans les données du prototype</td>
            </tr>
            <tr>
              <td>Label Rouge</td>
              <td><strong>Indicatif</strong>, pas une certification vérifiée</td>
              <td>Pas AOP, famille « pressée non cuite », intensité ≥ 3</td>
            </tr>
            <tr>
              <td>Bio</td>
              <td><strong>Indicatif</strong>, pas une certification vérifiée</td>
              <td>Nom contenant « tomme »/« tommette », ou famille « pressée » et intensité ≤ 2</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <Callout kind="warning">
        Label Rouge et Bio ne reflètent <strong>aucune certification réellement détenue</strong> — ce sont des
        heuristiques sur la famille et l'intensité, faute de mieux dans les données du prototype de référence. Ne
        jamais les présenter comme des signes officiels.
      </Callout>

      <h2>Hors connexion</h2>
      <p>Fonctionne entièrement hors connexion.</p>

      <h2>Limites</h2>
      <p>Voir la mise en garde ci-dessus ; c'est la principale limite de cette fonctionnalité.</p>
    </>
  )
}
