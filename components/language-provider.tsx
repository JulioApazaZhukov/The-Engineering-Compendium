"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type Language = "en" | "es"

type LanguageContextType = {
  language: Language
  setLanguage: (language: Language) => void
  t: (key: string) => string
}

const translations = {
  en: {
    "nav.topics": "Topics",
    "nav.resources": "Resources",
    "nav.blog": "Blog",
    "landing.title": "The Engineering Compendium",
    "landing.subtitle": "Your comprehensive resource for engineering education",
    "landing.explore": "Explore Topics",
    "landing.featured": "Featured Resources",
    "landing.topics": "Engineering Topics",
    // Add more translations as needed
  },
  es: {
    "nav.topics": "Temas",
    "nav.resources": "Recursos",
    "nav.blog": "Blog",
    "landing.title": "El Compendio de Ingeniería",
    "landing.subtitle": "Tu recurso integral para la educación en ingeniería",
    "landing.explore": "Explorar Temas",
    "landing.featured": "Recursos Destacados",
    "landing.topics": "Temas de Ingeniería",
    // Add more translations as needed
  },
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key) => key,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") as Language
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
    localStorage.setItem("language", newLanguage)
  }

  const t = (key: string) => {
    return translations[language][key as keyof typeof translations.en] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)

