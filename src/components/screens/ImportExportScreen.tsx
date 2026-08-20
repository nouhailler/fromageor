import { useRef, useState } from 'react'
import { Download, Upload, FileJson, RotateCcw, CircleCheck, CircleAlert } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
import {
  parseImportPayload,
  validateImportPayload,
  buildExportPayload,
  exportPayloadToJson,
  type ValidationResult,
} from '../../lib/cheese-import-export'
import { EXAMPLE_CHEESE, EXAMPLE_REGION, CHEESE_FIELD_DOCS } from '../../lib/cheese-schema'
import { VersionCard } from '../ui/VersionCard'
import styles from './ImportExportScreen.module.css'

function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function todayStamp(): string {
  return new Date().toISOString().slice(0, 10)
}

export function ImportExportScreen() {
  const { actions } = useAppState()
  const { cheeses, regions, importedCount, commitImport, resetImports, exportJson } = useCollections()
  const [text, setText] = useState('')
  const [validation, setValidation] = useState<ValidationResult | null>(null)
  const [parseError, setParseError] = useState<string | null>(null)
  const [confirmedCount, setConfirmedCount] = useState<number | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleExport() {
    downloadTextFile(`fromages-export-${todayStamp()}.json`, exportJson())
  }

  function handleDownloadTemplate() {
    const template = exportPayloadToJson(buildExportPayload([EXAMPLE_CHEESE], [EXAMPLE_REGION]))
    downloadTextFile('fromages-gabarit.json', template)
  }

  async function handleFilePicked(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const content = await file.text()
    setText(content)
    setValidation(null)
    setParseError(null)
    setConfirmedCount(null)
    e.target.value = ''
  }

  function handleValidate() {
    setConfirmedCount(null)
    try {
      const payload = parseImportPayload(text)
      setParseError(null)
      setValidation(validateImportPayload(payload))
    } catch (err) {
      setParseError(err instanceof Error ? err.message : String(err))
      setValidation(null)
    }
  }

  function handleConfirmImport() {
    if (!validation || validation.valid.length === 0) return
    let region
    try {
      region = parseImportPayload(text).region
    } catch {
      region = undefined
    }
    commitImport(validation.valid, region)
    setConfirmedCount(validation.valid.length)
    setValidation(null)
    setText('')
  }

  function handleReset() {
    resetImports()
    setConfirmedCount(null)
  }

  return (
    <OverlayScreen>
      <OverlayHeader onBack={actions.closeImportExport}>
        <OverlayTitle>Import / Export</OverlayTitle>
        <OverlayEyebrow>Base de données</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        <VersionCard />

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Exporter</h2>
          <div className={styles.hint}>
            {cheeses.length} fromage(s) · {regions.length} région(s) actuellement chargés.
          </div>
          <div className={styles.buttonRow}>
            <button type="button" className={`${styles.button} ${styles.buttonPrimary}`} onClick={handleExport}>
              <Download size={17} strokeWidth={2.75} />
              Exporter la base (.json)
            </button>
            <button type="button" className={`${styles.button} ${styles.buttonSecondary}`} onClick={handleDownloadTemplate}>
              <FileJson size={17} strokeWidth={2.75} />
              Télécharger un gabarit
            </button>
          </div>
        </div>

        {importedCount > 0 && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>Données importées</h2>
            <div className={styles.hint}>
              <span className={styles.badge}>{importedCount}</span> fromage(s) importé(s) localement (stockés sur cet
              appareil, ajoutés ou remplaçant des fiches existantes par id).
            </div>
            <div className={styles.buttonRow}>
              <button type="button" className={`${styles.button} ${styles.buttonDanger}`} onClick={handleReset}>
                <RotateCcw size={16} strokeWidth={2.75} />
                Réinitialiser les imports
              </button>
            </div>
          </div>
        )}

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Importer</h2>
          <div className={styles.hint}>
            Collez du JSON ci-dessous, ou choisissez un fichier. Format attendu détaillé plus bas.
          </div>
          <textarea
            className={styles.textarea}
            value={text}
            onChange={(e) => {
              setText(e.target.value)
              setValidation(null)
              setParseError(null)
              setConfirmedCount(null)
            }}
            placeholder='[{ "id": "…", "nom": "…", … }]  ou  { "region": {"id":"…","name":"…"}, "cheeses": [ … ] }'
            spellCheck={false}
          />
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json,.json"
            className={styles.fileInput}
            onChange={handleFilePicked}
          />
          <div className={styles.buttonRow}>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonSecondary}`}
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={16} strokeWidth={2.75} />
              Choisir un fichier…
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonPrimary}`}
              onClick={handleValidate}
              disabled={!text.trim()}
            >
              Valider
            </button>
          </div>

          {parseError && (
            <div className={styles.validation}>
              <div className={`${styles.validationRow} ${styles.validError}`}>
                <CircleAlert size={16} strokeWidth={2.75} />
                {parseError}
              </div>
            </div>
          )}

          {validation && (
            <div className={styles.validation}>
              {validation.valid.length > 0 && (
                <div className={`${styles.validationRow} ${styles.validOk}`}>
                  <CircleCheck size={16} strokeWidth={2.75} />
                  {validation.valid.length} fromage(s) valide(s), prêt(s) à importer.
                </div>
              )}
              {validation.invalid.length > 0 && (
                <>
                  <div className={`${styles.validationRow} ${styles.validError}`}>
                    <CircleAlert size={16} strokeWidth={2.75} />
                    {validation.invalid.length} entrée(s) invalide(s), ignorée(s) :
                  </div>
                  <div className={styles.errorList}>
                    {validation.invalid.map((e) => (
                      <div key={e.index} className={styles.errorItem}>
                        <span className={styles.errorItemLabel}>{e.id ?? `#${e.index}`}</span> — {e.errors.join(' · ')}
                      </div>
                    ))}
                  </div>
                </>
              )}
              {validation.valid.length > 0 && (
                <div className={styles.buttonRow}>
                  <button type="button" className={`${styles.button} ${styles.buttonPrimary}`} onClick={handleConfirmImport}>
                    Confirmer l'import ({validation.valid.length})
                  </button>
                </div>
              )}
            </div>
          )}

          {confirmedCount !== null && (
            <div className={`${styles.validationRow} ${styles.validOk}`}>
              <CircleCheck size={16} strokeWidth={2.75} />
              {confirmedCount} fromage(s) importé(s) avec succès.
            </div>
          )}
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>Format attendu</h2>
          <div className={styles.hint}>
            Le fichier JSON doit être soit un tableau de fromages, soit un objet{' '}
            <code>{'{ "region"?: { "id", "name" }, "cheeses": [...] }'}</code>. Chaque fromage suit le schéma
            ci-dessous ; <code>regionId</code> hérite de <code>region.id</code> s'il est omis. Importer un{' '}
            <code>id</code> déjà présent remplace la fiche existante ; un nouvel <code>id</code> l'ajoute.
          </div>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>Champ</th>
                  <th>Type</th>
                  <th>Requis</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {CHEESE_FIELD_DOCS.map((f) => (
                  <tr key={f.key}>
                    <td className={styles.fieldKey}>{f.key}</td>
                    <td className={styles.fieldType}>{f.type}</td>
                    <td className={f.required ? styles.required : styles.optional}>{f.required ? 'oui' : 'non'}</td>
                    <td>{f.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </OverlayScreen>
  )
}
