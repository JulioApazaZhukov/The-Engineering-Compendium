"use client"

import Link from "next/link"
import { useLanguage } from "./language-provider"
import { Github, Mail, BookOpen } from "lucide-react"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-gradient-to-r from-gray-50 to-gray-100 border-t border-gray-200 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">The Engineering Compendium</h3>
            <p className="text-gray-600 text-sm">{t("footer.description")}</p>
            <div className="flex space-x-4 pt-2">
              <a href="https://github.com" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Github size={20} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="mailto:contact@example.com" className="text-gray-500 hover:text-gray-900 transition-colors">
                <Mail size={20} />
                <span className="sr-only">Email</span>
              </a>
              <a href="/resources" className="text-gray-500 hover:text-gray-900 transition-colors">
                <BookOpen size={20} />
                <span className="sr-only">Resources</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{t("footer.links")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/topics" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t("nav.topics")}
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t("nav.resources")}
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t("nav.blog")}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-4">{t("footer.legal")}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t("footer.privacy")}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                  {t("footer.terms")}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} The Engineering Compendium. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
