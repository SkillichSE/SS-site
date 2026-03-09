import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { Lang, translations } from '../translations'

type Translations = typeof translations.en | typeof translations.ru

const LanguageContext = createContext<{
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
} | null>(null)

const STORAGE_KEY = 'sputniksim-lang'

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null
    return stored === 'en' || stored === 'ru' ? stored : 'en'
  })

  const setLang = useCallback((l: Lang) => {
    setLangState(l)
    localStorage.setItem(STORAGE_KEY, l)
    document.documentElement.lang = l === 'ru' ? 'ru' : 'en'
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang === 'ru' ? 'ru' : 'en'
    document.title = translations[lang].meta.title
  }, [lang])

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
