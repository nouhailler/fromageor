export const meta = {
  title: 'L’avertissement légal réapparaît',
  summary: "La modale de premier lancement se réaffiche alors qu'elle a déjà été validée.",
}

export default function Page() {
  return (
    <>
      <h1>{meta.title}</h1>
      <p className="summary">{meta.summary}</p>

      <h2>Symptôme</h2>
      <p>La modale légale se réaffiche à chaque ouverture, alors qu'elle a déjà été validée.</p>

      <h2>Cause</h2>
      <p>
        Le navigateur n'a pas conservé la clé <code>legal_notice_acknowledged</code> dans <code>localStorage</code>{' '}
        (navigation privée, ou réglage du navigateur qui efface le stockage à la fermeture).
      </p>

      <h2>Solution</h2>
      <p>
        Désactiver cet effacement automatique pour ce site, ou accepter que l'avertissement réapparaisse en
        navigation privée : c'est le comportement attendu, pas un bug.
      </p>
    </>
  )
}
