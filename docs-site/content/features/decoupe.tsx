import { Callout, TableWrap } from '../../components/Bits'

export const meta = {
  title: 'Fonctionnalité — Découpe',
  summary: "Déduit la méthode de découpe d'un fromage à partir de sa forme, sa famille, son poids et son mode de service — jamais un champ écrit à la main.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>
        Aucune fiche ne porte sa méthode de découpe. <code>decoupeMatchFor()</code> (<code>src/lib/decoupe.ts</code>)
        déduit laquelle des six méthodes de découpe concerne un fromage, et le dit — la fiche affiche « Méthode
        déduite de la forme (« Disque »), à titre indicatif », comme les badges Label Rouge et Bio.
      </p>

      <h2>Objectif</h2>
      <p>Donner un geste de découpe correct sans demander à chaque fiche de le déclarer, et rester honnête sur le fait que c'est une déduction.</p>

      <h2>Comment l'utiliser</h2>
      <p>Sur une fiche, bouton « Comment découper ce fromage ? » (si une méthode a pu être déduite) ; ou menu latéral → Découpe pour parcourir les six méthodes. Voir <a href="/docs/guide/decoupe/">le guide de cet écran</a>.</p>

      <h2>Données utilisées</h2>
      <p>famille, forme, poids, et le texte du champ « Comment le servir ».</p>

      <h2>Résultat — l'ordre des règles, du plus sûr au plus général</h2>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Test</th>
              <th>Champ lu</th>
              <th>Méthode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Fromage frais, fromage fort, lactosérum, pâte fondue, caillé — ou une forme qui nomme son contenant (pot, bocal, bol…)</td>
              <td>famille, forme</td>
              <td><strong>aucune</strong> : ces fromages ne se coupent pas</td>
            </tr>
            <tr>
              <td>Famille persillée</td>
              <td>famille</td>
              <td>Roquefort &amp; pâtes persillées</td>
            </tr>
            <tr>
              <td>« À la cuillère » dans le texte Comment le servir</td>
              <td>service</td>
              <td>Cœurs coulants &amp; carrés</td>
            </tr>
            <tr>
              <td>Carré, pavé, brique, cœur, triangle…</td>
              <td>forme</td>
              <td>Cœurs coulants &amp; carrés</td>
            </tr>
            <tr>
              <td>Bûche, pyramide, tronc de cône, bonde, tonnelet…</td>
              <td>forme</td>
              <td>Bûches &amp; pyramides de chèvre</td>
            </tr>
            <tr>
              <td>Au moins 1,5 kg — ou, à défaut de poids renseigné, une forme qui dit « meule », « fourme » ou « roue »</td>
              <td>poids, forme, famille</td>
              <td>Comté &amp; grandes meules, ou Brie &amp; grandes pointes molles si la pâte est molle</td>
            </tr>
            <tr>
              <td>Tout le reste</td>
              <td>forme</td>
              <td>Camembert &amp; petits ronds fleuris</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <Callout kind="warning">
        Le <strong>poids</strong> tranche entre « meule » et « petit rond », pas le mot « meule » de la forme : la
        tomme d'Annot (0,6 kg) se coupe comme un camembert, la tomme de Savoie (1,5 kg) s'achète à la coupe. Et le
        texte « Comment le servir » l'emporte sur la forme quand il parle de cuillère : l'époisses est un « Disque »,
        mais personne ne le coupe en parts.
      </Callout>

      <h2>Le guide d'une méthode</h2>
      <p>
        Chaque méthode s'ouvre sur son principe, pourquoi ce geste, les quatre temps du geste (forme, lame, premier
        coup, parts) dessinés et détaillés, ce qu'il faut éviter, une particularité de la famille, et la liste
        complète des fromages concernés. Ces textes (<code>src/lib/decoupe-guide.ts</code>) sont écrits pour
        l'application — ce sont des consignes de service, pas des faits sourcés sur un fromage en particulier.
      </p>
      <p>
        L'écran Découpe se sert du même classement pour ses listes d'exemples : trois noms par méthode (les AOP
        d'abord, puis l'ordre alphabétique) plus le compte des autres — jamais une liste écrite à la main.
      </p>

      <h2>Limites</h2>
      <p>
        20 fiches n'affichent aucun bloc Découpe (fromages frais, fromages forts, cancoillotte, brocciu, caillebotte,
        tome fraîche de l'Aubrac, halbran dont la forme n'est pas renseignée). Inventer un geste pour eux serait pire
        que de se taire.
      </p>

      <h2>FAQ</h2>
      <p>
        <a href="/docs/faq/">Pourquoi certaines fiches n'ont pas de bloc « Comment découper ce fromage ? » ?</a>
      </p>
    </>
  )
}
