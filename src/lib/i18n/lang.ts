/** The only two languages the app supports. Shared by every lang-aware
 *  function across src/lib/ and src/state/ to avoid circular imports. */
export type Lang = 'fr' | 'en'

export function pick<T>(lang: Lang, fr: T, en: T): T {
  return lang === 'en' ? en : fr
}
