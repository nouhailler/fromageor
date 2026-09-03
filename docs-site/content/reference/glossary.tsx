import { TableWrap } from '../../components/Bits'

export const meta = {
  title: 'Référence — Glossaire',
  summary: "Termes du fromage utilisés dans l'application, tels que définis par les données et l'encyclopédie intégrée.",
}

const TERMS: { term: string; def: string }[] = [
  {
    term: 'AOP (Appellation d’Origine Protégée)',
    def: "Signe officiel réel, indiqué par le champ « aop » des données. C'est la seule appellation garantie par une source officielle dans l'application.",
  },
  {
    term: 'IGP (Indication Géographique Protégée)',
    def: "Déduite du nom du fromage (liste fixe dans le code) faute de champ dédié dans les données — voir la fonctionnalité Appellations.",
  },
  {
    term: 'Label Rouge / Bio (dans l’application)',
    def: "Badges affichés à titre indicatif, calculés depuis la famille et l'intensité du fromage — ce ne sont pas des certifications officielles vérifiées fromage par fromage.",
  },
  {
    term: 'Famille (technologique)',
    def: "Catégorie de fabrication d'un fromage : pâte pressée cuite ou non cuite, pâte molle à croûte fleurie ou lavée, pâte persillée, pâte fraîche, fromage fondu…",
  },
  {
    term: 'Pâte pressée cuite',
    def: 'Caillé chauffé puis pressé fortement : donne les grandes meules de garde (Comté, Beaufort, Emmental).',
  },
  {
    term: 'Pâte pressée non cuite',
    def: 'Caillé pressé sans chauffage préalable : pâtes plus souples (tommes, Cantal, Saint-Nectaire).',
  },
  {
    term: 'Croûte fleurie',
    def: "Duvet blanc de Penicillium candidum, typique du camembert et des bries : attendrit la pâte de l'extérieur vers le cœur.",
  },
  {
    term: 'Croûte lavée',
    def: "Croûte régulièrement frottée d'une saumure pendant l'affinage, colorée en orangé par la morge (Munster, Époisses, Vacherin) — odeur et goût puissants.",
  },
  {
    term: 'Pâte persillée (bleu)',
    def: 'Veines bleu-vert dues au Penicillium roqueforti, développées grâce à l’air introduit par le piquage du caillé.',
  },
  { term: 'Affinage', def: "Maturation du fromage en cave après le moulage, de quelques jours à plusieurs années selon le type." },
  {
    term: 'Terroir (dans l’application)',
    def: "Photo du lieu d'origine d'un fromage, utilisée quand aucune photo du fromage lui-même n'a été trouvée. Toujours légendée comme telle, jamais présentée comme une photo du fromage.",
  },
  {
    term: 'Marque',
    def: "Nom commercial déposé porté par un fromage industriel, par opposition à une appellation de terroir — champ « marque » des données, affiché sur la fiche par un repère « Marque ».",
  },
  {
    term: 'Lait de base',
    def: "Type de lait principal d'un fromage — Vache, Chèvre, Brebis, Mélange ou Bufflonne — utilisé pour les filtres de recherche et de carte.",
  },
]

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Terme</th>
              <th>Définition</th>
            </tr>
          </thead>
          <tbody>
            {TERMS.map((t) => (
              <tr key={t.term}>
                <td>{t.term}</td>
                <td>{t.def}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableWrap>
    </>
  )
}
