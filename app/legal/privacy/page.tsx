"use client"

import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function PrivacyPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: May 14, 2025",
      introduction: {
        title: "Introduction",
        text: "At The Engineering Compendium, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website.",
      },
      dataCollection: {
        title: "Information We Collect",
        text: "We may collect certain information when you visit our website, including but not limited to: IP addresses, browser type, pages visited, time spent on pages, and other analytics data. We do not collect personally identifiable information unless you voluntarily provide it to us.",
      },
      cookies: {
        title: "Cookies",
        text: "Our website uses cookies to enhance your browsing experience. You can set your browser to refuse all or some browser cookies, but this may prevent some parts of our website from functioning properly.",
      },
      dataUsage: {
        title: "How We Use Your Data",
        text: "We use the information we collect to analyze website usage, improve our content and services, and personalize your experience. We do not sell or rent your personal information to third parties.",
      },
      dataSharing: {
        title: "Data Sharing",
        text: "We may share aggregated, non-personal information with third parties for analytics purposes. We may also disclose your information if required by law or to protect our rights or the rights of others.",
      },
      dataSecurity: {
        title: "Data Security",
        text: "We implement appropriate security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.",
      },
      userRights: {
        title: "Your Rights",
        text: "Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete your information. Please contact us to exercise these rights.",
      },
      changes: {
        title: "Changes to This Policy",
        text: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.",
      },
      contact: {
        title: "Contact Us",
        text: "If you have any questions about this Privacy Policy, please contact us.",
      },
      backHome: "Back to Home",
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última Actualización: 14 de mayo de 2025",
      introduction: {
        title: "Introducción",
        text: "En The Engineering Compendium, respetamos tu privacidad y estamos comprometidos a proteger tus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos y protegemos tu información cuando visitas nuestro sitio web.",
      },
      dataCollection: {
        title: "Información que Recopilamos",
        text: "Podemos recopilar cierta información cuando visitas nuestro sitio web, incluyendo pero no limitado a: direcciones IP, tipo de navegador, páginas visitadas, tiempo en páginas y otros datos analíticos. No recopilamos información de identificación personal a menos que la proporciones voluntariamente.",
      },
      cookies: {
        title: "Cookies",
        text: "Nuestro sitio web utiliza cookies para mejorar tu experiencia de navegación. Puedes configurar tu navegador para rechazar todas o algunas cookies, pero esto puede impedir que algunas partes de nuestro sitio web funcionen correctamente.",
      },
      dataUsage: {
        title: "Cómo Usamos tus Datos",
        text: "Utilizamos la información que recopilamos para analizar el uso del sitio web, mejorar nuestro contenido y servicios, y personalizar tu experiencia. No vendemos ni alquilamos tu información personal a terceros.",
      },
      dataSharing: {
        title: "Compartir Datos",
        text: "Podemos compartir información agregada y no personal con terceros con fines analíticos. También podemos divulgar tu información si lo exige la ley o para proteger nuestros derechos o los derechos de otros.",
      },
      dataSecurity: {
        title: "Seguridad de Datos",
        text: "Implementamos medidas de seguridad apropiadas para proteger tu información personal. Sin embargo, ningún método de transmisión por Internet es 100% seguro, y no podemos garantizar una seguridad absoluta.",
      },
      userRights: {
        title: "Tus Derechos",
        text: "Dependiendo de tu ubicación, puedes tener ciertos derechos con respecto a tus datos personales, incluido el derecho a acceder, corregir o eliminar tu información. Contáctanos para ejercer estos derechos.",
      },
      changes: {
        title: "Cambios en esta Política",
        text: "Podemos actualizar nuestra Política de Privacidad de vez en cuando. Te notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página.",
      },
      contact: {
        title: "Contáctanos",
        text: "Si tienes alguna pregunta sobre esta Política de Privacidad, por favor contáctanos.",
      },
      backHome: "Volver al Inicio",
    },
  }

  const currentContent = content[language]

  return (
    <div className="container max-w-4xl py-12 px-4 mx-auto">
      <Link href="/" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        {currentContent.backHome}
      </Link>

      <h1 className="text-3xl font-bold mb-2">{currentContent.title}</h1>
      <p className="text-sm text-gray-500 mb-8">{currentContent.lastUpdated}</p>

      <div className="space-y-8">
        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.introduction.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.introduction.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.dataCollection.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.dataCollection.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.cookies.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.cookies.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.dataUsage.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.dataUsage.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.dataSharing.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.dataSharing.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.dataSecurity.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.dataSecurity.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.userRights.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.userRights.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.changes.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.changes.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.contact.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.contact.text}</p>
          </Card>
        </section>
      </div>
    </div>
  )
}
