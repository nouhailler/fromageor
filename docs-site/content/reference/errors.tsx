import { TableWrap } from '../../components/Bits'

export const meta = {
  title: 'Référence — Codes et erreurs',
  summary: "Messages de validation de l'import JSON et états de la vérification de mise à jour, détectés dans le code source.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Import JSON (écran Import / Export)</h2>
      <p>
        Sourcé sur <code>src/lib/cheese-import-export.ts</code> et <code>src/lib/cheese-schema.ts</code>.
      </p>
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
              <td>"id" manquant ou vide</td>
              <td>Chaque fromage doit avoir un identifiant non vide.</td>
            </tr>
            <tr>
              <td>"&lt;champ&gt;" manquant ou vide</td>
              <td>
                Un des 17 champs texte obligatoires (nom, dept, commune, lait, race, famille, croute, texture, forme,
                poids, dim, affinage, mg, saison, prix, dispo, color, histoire) est absent ou vide.
              </td>
            </tr>
            <tr>
              <td>"intensite" doit être un entier entre 1 et 5</td>
              <td>L'intensité doit être un nombre entier de 1 (doux) à 5 (intense).</td>
            </tr>
            <tr>
              <td>"aop" doit être un booléen (true/false)</td>
              <td>Le champ AOP doit être <code>true</code> ou <code>false</code>, jamais une chaîne.</td>
            </tr>
            <tr>
              <td>"notes" doit être un tableau de chaînes non vide</td>
              <td>Au moins une note aromatique est requise.</td>
            </tr>
            <tr>
              <td>"accords" / "nutrition" doit être un objet</td>
              <td>Même vide (<code>{'{}'}</code>), ces deux champs doivent être des objets.</td>
            </tr>
            <tr>
              <td>"galerie" doit être un tableau de chaînes non vide</td>
              <td>Au moins un libellé de photo de galerie est requis.</td>
            </tr>
            <tr>
              <td>"map" doit être un tableau [x, y] avec x et y entre 0 et 100</td>
              <td>Coordonnées normalisées sur la silhouette de la carte de France.</td>
            </tr>
            <tr>
              <td>"regionId" manquant et aucune région par défaut fournie</td>
              <td>
                Un fromage doit soit porter <code>regionId</code>, soit être importé dans l'enveloppe{' '}
                {'{ region, cheeses }'} qui le fournit implicitement.
              </td>
            </tr>
            <tr>
              <td>"image" / "wikipedia" / "galleryImages" doit être un objet {'{ url, ... }'}</td>
              <td>Champs optionnels, mais dont la forme est vérifiée s'ils sont présents.</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>Vérification de mise à jour</h2>
      <p>
        Sourcé sur <code>src/lib/app-update.ts</code> (<code>runUpdateCheck</code>). Ces états ne sont pas des
        messages affichés textuellement à l'identique, mais déterminent ce que montre la carte « Version » de
        l'écran Import / Export.
      </p>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>État</th>
              <th>Signification</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><code>update-found</code></td>
              <td>Une nouvelle version a été trouvée ; le rechargement suit.</td>
            </tr>
            <tr>
              <td><code>up-to-date</code></td>
              <td>Le serveur n'a rien de plus récent que la version installée.</td>
            </tr>
            <tr>
              <td><code>offline</code></td>
              <td>Appareil hors ligne : rien à vérifier.</td>
            </tr>
            <tr>
              <td><code>unsupported</code></td>
              <td>Pas de service worker actif (mode développement, navigation privée stricte, navigateur sans support).</td>
            </tr>
            <tr>
              <td><code>error</code></td>
              <td>Le serveur n'a pas répondu correctement à la vérification.</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>
    </>
  )
}
