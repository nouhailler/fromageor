import { createContext, useCallback, useContext, useState, type ReactNode } from 'react'
import type { Lang } from '../lib/i18n/lang'
import { STRINGS, type StringKey } from '../lib/i18n/strings'

export const LANGUAGE_KEY = 'fromages-langue'

export function loadLang(): Lang {
  try {
    return localStorage.getItem(LANGUAGE_KEY) === 'en' ? 'en' : 'fr'
  } catch {
    return 'fr'
  }
}

function saveLang(lang: Lang): void {
  try {
    localStorage.setItem(LANGUAGE_KEY, lang)
  } catch {
    // storage unavailable (private browsing, quota) — stays in memory for this session
  }
}

interface LanguageContextValue {
  lang: Lang
  setLang: (lang: Lang) => void
  /** Looks up `key` in strings.ts and substitutes `{var}` placeholders from `vars`. */
  t: (key: StringKey, vars?: Record<string, string | number>) => string
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(loadLang)

  const setLang = useCallback((next: Lang) => {
    setLangState(next)
    saveLang(next)
  }, [])

  const t = useCallback(
    (key: StringKey, vars?: Record<string, string | number>) => {
      const template = STRINGS[key][lang]
      if (!vars) return template
      return template.replace(/\{(\w+)\}/g, (match, name: string) =>
        name in vars ? String(vars[name]) : match,
      )
    },
    [lang],
  )

  return <LanguageContext.Provider value={{ lang, setLang, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
