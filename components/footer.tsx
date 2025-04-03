"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"

export function Footer() {
  const { language } = useLanguage()

  const translations = {
    privacy: {
      en: "Privacy Policy",
      es: "Política de Privacidad",
    },
    terms: {
      en: "Terms of Service",
      es: "Términos de Servicio",
    },
    contact: {
      en: "Contact Us",
      es: "Contáctenos",
    },
    rights: {
      en: "All rights reserved",
      es: "Todos los derechos reservados",
    },
  }

  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-600">
              &copy; 2025 The Engineering Compendium. {translations.rights[language as "en" | "es"]}
            </p>
          </div>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-gray-600 hover:text-gray-900">
              {translations.privacy[language as "en" | "es"]}
            </Link>
            <Link href="/terms" className="text-gray-600 hover:text-gray-900">
              {translations.terms[language as "en" | "es"]}
            </Link>
            <Link href="/contact" className="text-gray-600 hover:text-gray-900">
              {translations.contact[language as "en" | "es"]}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
