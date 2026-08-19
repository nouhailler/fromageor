import { useCallback, useMemo, useState } from 'react'
import { ALL_CHEESES } from '../data/dataset'
import { REGIONS } from '../data/regions'
import type { Cheese, Region } from '../data/cheese.types'
import {
  loadImportedCheeses,
  loadImportedRegions,
  saveImportedCheeses,
  saveImportedRegions,
  mergeCheeses,
  mergeRegions,
  buildExportPayload,
  exportPayloadToJson,
} from '../lib/cheese-import-export'

/** The active cheese database = the built-in dataset with any locally
 *  imported cheeses/regions layered on top (upsert by id). Nothing here
 *  touches the bundled data — imports live in localStorage only. */
export function useCheeseDatabase() {
  const [importedCheeses, setImportedCheeses] = useState<Cheese[]>(() => loadImportedCheeses())
  const [importedRegions, setImportedRegions] = useState<Region[]>(() => loadImportedRegions())

  const cheeses = useMemo(() => mergeCheeses(ALL_CHEESES, importedCheeses), [importedCheeses])
  const regions = useMemo(() => mergeRegions(REGIONS, importedRegions), [importedRegions])

  const commitImport = useCallback((newCheeses: Cheese[], newRegion?: Region) => {
    setImportedCheeses((prev) => {
      const next = mergeCheeses(prev, newCheeses)
      saveImportedCheeses(next)
      return next
    })
    if (newRegion) {
      setImportedRegions((prev) => {
        const next = mergeRegions(prev, [newRegion])
        saveImportedRegions(next)
        return next
      })
    }
  }, [])

  const resetImports = useCallback(() => {
    setImportedCheeses([])
    setImportedRegions([])
    saveImportedCheeses([])
    saveImportedRegions([])
  }, [])

  const exportJson = useCallback(() => {
    return exportPayloadToJson(buildExportPayload(cheeses, regions))
  }, [cheeses, regions])

  return {
    cheeses,
    regions,
    importedCount: importedCheeses.length,
    commitImport,
    resetImports,
    exportJson,
  }
}
