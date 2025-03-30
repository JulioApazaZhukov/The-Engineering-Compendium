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
    // Common elements
    "common.back": "Back to",
    "common.learn_more": "Learn More",
    "common.view_all": "View all",
    "common.continue": "Continue Learning",
    "common.next": "Next",
    "common.previous": "Previous",
    "common.related": "Related",
    "common.examples": "Examples",
    "common.practice": "Practice Problems",
    "common.show_solution": "Show Solution",
    "common.on_this_page": "On This Page",
    "common.introduction": "Introduction",
    "common.applications": "Applications",
    "common.resources": "Learning Resources",
    "common.solved_problems": "Solved Problems",
    "common.view_problems": "View problems",
    "common.recommended_reading": "Recommended Reading",
    "common.view_bibliography": "View bibliography",
    "common.use_calculator": "Use calculator",
    "common.explore_database": "Explore Database",
    "common.formula_database": "Formula Database",
    "common.integration_formulas": "Integration Formulas",
    // Mathematics section
    "math.title": "Mathematics",
    "math.description": "From calculus to numerical methods, explore the mathematical foundations of engineering.",
    "math.differential_calculus": "Differential Calculus",
    "math.integral_calculus": "Integral Calculus",
    "math.linear_algebra": "Linear Algebra",
    "math.differential_equations": "Differential Equations",
    // Integral Calculus section
    "integral.title": "Integral Calculus",
    "integral.subtitle": "The study of integration and its applications in engineering",
    "integral.intro": "Introduction to Integral Calculus",
    "integral.methods": "Methods of Integration",
    "integral.formulas": "Integral Formulas",
    "integral.applications": "Applications of Integration",
    // Integration methods
    "integration.by_parts": "Integration by Parts",
    "integration.by_parts_desc": "A technique for integrating products of functions",
    "integration.by_substitution": "Integration by Substitution",
    "integration.by_substitution_desc": "A technique for simplifying complex integrals using variable substitution",
    "integration.trigonometric": "Trigonometric Substitution",
    "integration.trigonometric_desc": "A specialized technique for integrals involving certain radical expressions",
    "integration.universal": "Universal Substitution",
    "integration.universal_desc": "A general approach for rational functions",
    // Formula database
    "formula.title": "Engineering Formula Database",
    "formula.subtitle": "Access a comprehensive collection of mathematical and engineering formulas",
    "formula.search": "Search formulas...",
    "formula.filters": "Quick Filters:",
    "formula.results": "Formulas Found",
    "formula.no_results": "No formulas found",
    "formula.try_adjusting": "Try adjusting your search or filters to find what you're looking for.",
    "formula.reset": "Reset Filters",
    "formula.suggest": "Can't find what you're looking for?",
    "formula.suggest_desc":
      "Our formula database is constantly growing. Let us know if you need a specific formula that's not listed.",
    "formula.suggest_button": "Suggest a Formula",
    // Newsletter section
    "newsletter.title": "Stay Updated with Engineering Insights",
    "newsletter.subtitle":
      "Subscribe to our newsletter to receive the latest engineering articles, tutorials, and resources.",
    "newsletter.placeholder": "Enter your email",
    "newsletter.button": "Subscribe",
    // Footer
    "footer.rights": "All rights reserved.",
    "footer.privacy": "Privacy Policy",
    "footer.terms": "Terms of Service",
    "footer.contact": "Contact",
  },
  es: {
    "nav.topics": "Temas",
    "nav.resources": "Recursos",
    "nav.blog": "Blog",
    "landing.title": "The Engineering Compendium",
    "landing.subtitle": "Tu recurso integral para la educación en ingeniería",
    "landing.explore": "Explorar Temas",
    "landing.featured": "Recursos Destacados",
    "landing.topics": "Temas de Ingeniería",
    // Common elements
    "common.back": "Volver a",
    "common.learn_more": "Más Información",
    "common.view_all": "Ver todo",
    "common.continue": "Continuar Aprendiendo",
    "common.next": "Siguiente",
    "common.previous": "Anterior",
    "common.related": "Relacionado",
    "common.examples": "Ejemplos",
    "common.practice": "Problemas de Práctica",
    "common.show_solution": "Mostrar Solución",
    "common.on_this_page": "En Esta Página",
    "common.introduction": "Introducción",
    "common.applications": "Aplicaciones",
    "common.resources": "Recursos de Aprendizaje",
    "common.solved_problems": "Problemas Resueltos",
    "common.view_problems": "Ver problemas",
    "common.recommended_reading": "Lecturas Recomendadas",
    "common.view_bibliography": "Ver bibliografía",
    "common.use_calculator": "Usar calculadora",
    "common.explore_database": "Explorar Base de Datos",
    "common.formula_database": "Base de Datos de Fórmulas",
    "common.integration_formulas": "Fórmulas de Integración",
    // Mathematics section
    "math.title": "Matemáticas",
    "math.description": "Desde cálculo hasta métodos numéricos, explora los fundamentos matemáticos de la ingeniería.",
    "math.differential_calculus": "Cálculo Diferencial",
    "math.integral_calculus": "Cálculo Integral",
    "math.linear_algebra": "Álgebra Lineal",
    "math.differential_equations": "Ecuaciones Diferenciales",
    // Integral Calculus section
    "integral.title": "Cálculo Integral",
    "integral.subtitle": "El estudio de la integración y sus aplicaciones en ingeniería",
    "integral.intro": "Introducción al Cálculo Integral",
    "integral.methods": "Métodos de Integración",
    "integral.formulas": "Fórmulas de Integración",
    "integral.applications": "Aplicaciones de la Integración",
    // Integration methods
    "integration.by_parts": "Integración por Partes",
    "integration.by_parts_desc": "Una técnica para integrar productos de funciones",
    "integration.by_substitution": "Integración por Sustitución",
    "integration.by_substitution_desc":
      "Una técnica para simplificar integrales complejas mediante sustitución de variables",
    "integration.trigonometric": "Sustitución Trigonométrica",
    "integration.trigonometric_desc":
      "Una técnica especializada para integrales que involucran ciertas expresiones radicales",
    "integration.universal": "Sustitución Universal",
    "integration.universal_desc": "Un enfoque general para funciones racionales",
    // Formula database
    "formula.title": "Base de Datos de Fórmulas de Ingeniería",
    "formula.subtitle": "Accede a una colección completa de fórmulas matemáticas y de ingeniería",
    "formula.search": "Buscar fórmulas...",
    "formula.filters": "Filtros Rápidos:",
    "formula.results": "Fórmulas Encontradas",
    "formula.no_results": "No se encontraron fórmulas",
    "formula.try_adjusting": "Intenta ajustar tu búsqueda o filtros para encontrar lo que estás buscando.",
    "formula.reset": "Restablecer Filtros",
    "formula.suggest": "¿No encuentras lo que buscas?",
    "formula.suggest_desc":
      "Nuestra base de datos de fórmulas está en constante crecimiento. Háznoslo saber si necesitas una fórmula específica que no esté listada.",
    "formula.suggest_button": "Sugerir una Fórmula",
    // Newsletter section
    "newsletter.title": "Mantente Actualizado con Información de Ingeniería",
    "newsletter.subtitle":
      "Suscríbete a nuestro boletín para recibir los últimos artículos, tutoriales y recursos de ingeniería.",
    "newsletter.placeholder": "Ingresa tu correo electrónico",
    "newsletter.button": "Suscribirse",
    // Footer
    "footer.rights": "Todos los derechos reservados.",
    "footer.privacy": "Política de Privacidad",
    "footer.terms": "Términos de Servicio",
    "footer.contact": "Contacto",
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
