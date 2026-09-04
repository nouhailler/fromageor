import { useRef, useState } from 'react'
import { Download, Upload, FileJson, RotateCcw, CircleCheck, CircleAlert } from 'lucide-react'
import { useAppState } from '../../state/AppStateContext'
import { useCollections } from '../../state/CheeseCollectionsContext'
import { useLanguage } from '../../state/LanguageContext'
import {
  parseImportPayload,
  validateImportPayload,
  buildExportPayload,
  exportPayloadToJson,
  type ValidationResult,
} from '../../lib/cheese-import-export'
import { EXAMPLE_CHEESE, EXAMPLE_REGION, cheeseFieldDocs } from '../../lib/cheese-schema'
import { OverlayScreen } from '../layout/OverlayScreen'
import { OverlayHeader, OverlayTitle, OverlayEyebrow } from '../layout/OverlayHeader'
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
  const { t, lang } = useLanguage()

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
        <OverlayTitle>{t('drawer.importExport')}</OverlayTitle>
        <OverlayEyebrow>{t('importExport.eyebrow')}</OverlayEyebrow>
      </OverlayHeader>

      <div className={styles.content}>
        <VersionCard />

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>{t('importExport.exportTitle')}</h2>
          <div className={styles.hint}>{t('importExport.loadedHint', { n: cheeses.length, r: regions.length })}</div>
          <div className={styles.buttonRow}>
            <button type="button" className={`${styles.button} ${styles.buttonPrimary}`} onClick={handleExport}>
              <Download size={17} strokeWidth={2.75} />
              {t('importExport.exportButton')}
            </button>
            <button type="button" className={`${styles.button} ${styles.buttonSecondary}`} onClick={handleDownloadTemplate}>
              <FileJson size={17} strokeWidth={2.75} />
              {t('importExport.templateButton')}
            </button>
          </div>
        </div>

        {importedCount > 0 && (
          <div className={styles.card}>
            <h2 className={styles.sectionTitle}>{t('importExport.importedDataTitle')}</h2>
            <div className={styles.hint}>
              <span className={styles.badge}>{importedCount}</span> {t('importExport.importedHint')}
            </div>
            <div className={styles.buttonRow}>
              <button type="button" className={`${styles.button} ${styles.buttonDanger}`} onClick={handleReset}>
                <RotateCcw size={16} strokeWidth={2.75} />
                {t('importExport.resetImports')}
              </button>
            </div>
          </div>
        )}

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>{t('importExport.importTitle')}</h2>
          <div className={styles.hint}>{t('importExport.importHint')}</div>
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
              {t('importExport.chooseFile')}
            </button>
            <button
              type="button"
              className={`${styles.button} ${styles.buttonPrimary}`}
              onClick={handleValidate}
              disabled={!text.trim()}
            >
              {t('importExport.validate')}
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
                  {t('importExport.validCount', { n: validation.valid.length })}
                </div>
              )}
              {validation.invalid.length > 0 && (
                <>
                  <div className={`${styles.validationRow} ${styles.validError}`}>
                    <CircleAlert size={16} strokeWidth={2.75} />
                    {t('importExport.invalidCount', { n: validation.invalid.length })}
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
                    {t('importExport.confirmImport', { n: validation.valid.length })}
                  </button>
                </div>
              )}
            </div>
          )}

          {confirmedCount !== null && (
            <div className={`${styles.validationRow} ${styles.validOk}`}>
              <CircleCheck size={16} strokeWidth={2.75} />
              {t('importExport.importedSuccess', { n: confirmedCount })}
            </div>
          )}
        </div>

        <div className={styles.card}>
          <h2 className={styles.sectionTitle}>{t('importExport.formatTitle')}</h2>
          <div className={styles.hint}>{t('importExport.formatHint')}</div>
          <div className={styles.tableScroll}>
            <table className={styles.table}>
              <thead>
                <tr>
                  <th>{t('importExport.table.field')}</th>
                  <th>{t('importExport.table.type')}</th>
                  <th>{t('importExport.table.required')}</th>
                  <th>{t('importExport.table.description')}</th>
                </tr>
              </thead>
              <tbody>
                {cheeseFieldDocs(lang).map((f) => (
                  <tr key={f.key}>
                    <td className={styles.fieldKey}>{f.key}</td>
                    <td className={styles.fieldType}>{f.type}</td>
                    <td className={f.required ? styles.required : styles.optional}>
                      {f.required ? t('importExport.yes') : t('importExport.no')}
                    </td>
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
