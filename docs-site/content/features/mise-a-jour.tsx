import { Callout, TableWrap } from '../../components/Bits'

export const meta = {
  title: 'Fonctionnalité — Mise à jour automatique',
  summary: "L'application vérifie d'elle-même qu'une nouvelle version a été déployée, l'installe et redémarre — sans rien demander à l'utilisateur.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Description</h2>
      <p>
        Le service worker (<code>registerType: 'autoUpdate'</code>) installe seul toute nouvelle version dès qu'elle
        est détectée. La logique de décision (quand vérifier, quand recharger) vit dans{' '}
        <code>src/lib/app-update.ts</code>, testée sans navigateur ; <code>src/pwa.ts</code> la branche sur les
        vraies API du navigateur.
      </p>

      <h2>Objectif</h2>
      <p>Que l'utilisateur ait toujours la dernière version sans jamais avoir à agir, tout en évitant qu'un déploiement cassé fasse clignoter l'application.</p>

      <h2>Comment ça se déclenche</h2>
      <TableWrap>
        <table>
          <thead>
            <tr>
              <th>Quand</th>
              <th>Quoi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Toutes les 30 min, au retour au premier plan, au retour du réseau</td>
              <td>Vérification automatique auprès du serveur</td>
            </tr>
            <tr>
              <td>Bouton « Rechercher une mise à jour » (Import / Export)</td>
              <td>Même vérification, à la demande — et le garde-fou anti-boucle est levé pour l'occasion</td>
            </tr>
            <tr>
              <td>Une nouvelle version est trouvée</td>
              <td>Le service worker l'installe et prend la main tout seul</td>
            </tr>
            <tr>
              <td>La nouvelle version s'active</td>
              <td>Onglet actif → bandeau « Nouvelle version installée » pendant 4 s, puis rechargement. Onglet en arrière-plan → rechargement immédiat</td>
            </tr>
          </tbody>
        </table>
      </TableWrap>

      <h2>Paramètres associés</h2>
      <p>Aucun réglage utilisateur — voir <a href="/docs/settings/">Paramètres</a>. Le comportement est fixe.</p>

      <h2>Données utilisées</h2>
      <p>
        <code>localStorage</code> : <code>fromages-maj-verifiee-le</code> (dernière vérification aboutie, affichée à
        l'utilisateur). La date du dernier rechargement de mise à jour vit en <code>sessionStorage</code> pour le
        garde-fou anti-boucle et ne survit pas à la fermeture de l'onglet.
      </p>

      <h2>Résultat — la carte « Version de l'application »</h2>
      <p>
        Import / Export ouvre sur une carte affichant : la version (dérivée de la date du build, croissante,
        comparable, suivie du commit git court), la date du build, l'ancienneté de la dernière vérification, et un
        bouton pour en chercher une tout de suite.
      </p>

      <Callout>
        Une demande explicite (le bouton) lève le garde-fou anti-boucle : si une version vient d'être installée mais
        que le rechargement a été écarté comme « trop tôt », appuyer sur le bouton la fait bien apparaître.
      </Callout>

      <h2>Hors connexion</h2>
      <p>La vérification a besoin du réseau ; elle échoue silencieusement (état <code>offline</code>) sans casser l'application.</p>

      <h2>Limites</h2>
      <p>Deux rechargements à moins de 10 minutes d'intervalle sont ignorés (garde-fou anti-boucle), sauf demande explicite via le bouton.</p>

      <h2>Erreurs possibles</h2>
      <p>Voir les états <code>unsupported</code>, <code>error</code>, <code>offline</code> dans <a href="/docs/reference/errors/">Codes et erreurs</a>.</p>

      <h2>Dépannage</h2>
      <p><a href="/docs/troubleshooting/mise-a-jour-non-visible/">L'application ne semble pas à jour</a>.</p>
    </>
  )
}
