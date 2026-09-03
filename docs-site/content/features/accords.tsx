import { TableWrap } from '../../components/Bits'

export const meta = {
  title: 'Fonctionnalité — Accords mets & boissons',
  summary: "Dix catégories de boissons, chacune peuplée automatiquement selon la famille, la croûte, la texture, le lait ou l'intensité du fromage.",
}

const CATS: { label: string; desc: string; rule: string }[] = [
  { label: 'Vins rouges', desc: 'Pâtes pressées et affinées, structure tannique', rule: 'famille/croûte/texture contient « press » OU intensité ≥ 4' },
  { label: 'Vins blancs', desc: 'Chèvres et pâtes fleuries, vivacité et fraîcheur', rule: 'lait de base « Chèvre » OU famille contient « fleurie » ou « pressée cuite »' },
  { label: 'Champagne', desc: 'Triple-crèmes et pâtes molles délicates', rule: 'famille contient « fleurie » OU (lait « Vache » ET intensité ≤ 2)' },
  { label: 'Bière', desc: 'Croûtes lavées et tommes de caractère', rule: 'contient « lavée » ou « pressée non cuite » OU intensité ≥ 3' },
  { label: 'Cidre', desc: 'Reblochon, tommes et pâtes souples de Savoie', rule: 'contient « pressée non cuite » ou « molle »' },
  { label: 'Poiré', desc: 'Chèvres frais et fromages doux et fins', rule: 'lait de base « Chèvre » OU intensité ≤ 2' },
  { label: 'Whisky', desc: 'Bleus persillés et fromages intenses', rule: 'contient « persillé » OU intensité ≥ 4' },
  { label: 'Pain', desc: 'Le compagnon universel — pressées et tommes', rule: 'contient « press » OU intensité = 3' },
  { label: 'Confiture', desc: 'Chèvres, brebis et pâtes fleuries', rule: 'lait de base « Chèvre » ou « Brebis » OU contient « fleurie »' },
  { label: 'Miel', desc: 'Bleus, chèvres et brebis — le contraste sucré-salé', rule: 'contient « persillé » OU lait de base « Chèvre » ou « Brebis »' },
]

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>
        Chaque catégorie applique une règle de correspondance sur la famille, la croûte, la texture, le lait de base
        ou l'intensité du fromage. Un même fromage peut apparaître dans plusieurs catégories.
      </p>

      <h2>Objectif</h2>
      <p>Suggérer des accords sans dépendre d'un champ « accords suggérés » écrit à la main par catégorie de boisson.</p>

      <h2>Comment l'utiliser</h2>
      <p>Menu latéral → Accords mets &amp; boissons, ou depuis l'accueil. Voir <a href="/docs/guide/accords/">le guide de cet écran</a>.</p>

      <h2>Résultat — les dix catégories</h2>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Catégorie</th>
              <th>Profil</th>
              <th>Règle de correspondance</th>
            </tr>
          </thead>
          <tbody>
            {CATS.map((c) => (
              <tr key={c.label}>
                <td>{c.label}</td>
                <td>{c.desc}</td>
                <td>{c.rule}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
      <p>
        À ne pas confondre avec le champ <code>accords</code> d'une fiche (vin / bière / cidre / whisky / pain,
        affichés dans la carte d'identité) : celui-ci est un texte spécifique écrit pour ce fromage précis, quand il
        est renseigné, alors que cet écran calcule des suggestions automatiques pour toute la base.
      </p>

      <h2>Hors connexion</h2>
      <p>Fonctionne entièrement hors connexion — calcul purement local sur les données déjà chargées.</p>

      <h2>Limites</h2>
      <p>Les règles sont approximatives par construction (mots-clés sur la famille/croûte/texture) : elles ne remplacent pas un conseil d'un professionnel.</p>
    </>
  )
}
