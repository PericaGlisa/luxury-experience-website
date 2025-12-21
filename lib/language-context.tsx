"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { useRouter, usePathname } from "next/navigation"
import { translations } from "./translations"

type Language = "en" | "sr"

const pathTranslations: Record<string, Record<string, string>> = {
  sr: {
    'experiences': 'iskustva',
    'destinations': 'destinacije',
    'yachts': 'jahte',
    'journal': 'zurnal',
    'hotels': 'hoteli',
    'booking': 'rezervacija',
    'contact': 'kontakt',
    'faq': 'pitanja',
    'insurance': 'osiguranje',
    'privacy': 'privatnost',
    'terms': 'uslovi',
    'cancellation': 'otkazivanje',
  }
}

type TranslationKey = keyof (typeof translations)["en"]

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: TranslationKey) => string
  getUrl: (path: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ 
  children, 
  initialLanguage = "sr" 
}: { 
  children: ReactNode
  initialLanguage?: Language
}) {
  const [language, setLanguageState] = useState<Language>(initialLanguage)
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!pathname) return
    const segments = pathname.split("/")
    const lang = segments[1] as Language
    if (lang === "en" || lang === "sr") {
      setLanguageState(lang)
    }
  }, [pathname])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    if (!pathname) return
    const segments = pathname.split("/")
    segments[1] = lang
    router.push(segments.join("/"))
  }

  const t = (key: TranslationKey): string => {
    return translations[language][key] || key
  }

  const getUrl = (path: string) => {
    if (path === "/") return `/${language}`
    if (path.startsWith("#")) return path

    // Split into base path, search, and hash
    const [pathAndSearch, hash] = path.split('#')
    const [basePath, search] = pathAndSearch.split('?')
    
    const cleanPath = basePath.startsWith('/') ? basePath.slice(1) : basePath
    const segments = cleanPath.split('/')
    
    if (language === 'sr' && segments[0] && pathTranslations.sr[segments[0]]) {
      segments[0] = pathTranslations.sr[segments[0]]
    }
    
    let result = `/${language}/${segments.join('/')}`
    if (search) result += `?${search}`
    if (hash) result += `#${hash}`
    
    return result
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getUrl }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
