"use client"

import { useLanguage } from "@/components/language-provider"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  const { language } = useLanguage()

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: May 14, 2025",
      introduction: {
        title: "Introduction",
        text: "Welcome to The Engineering Compendium. By accessing or using this website, you agree to comply with the following Terms and Conditions. Please read them carefully before using our services or contributing to the project.",
      },
      aboutTheSite: {
        title: "About The Site",
        text: [<>The Engineering Compendium is a free educational resource focused on engineering, developed as an open-source project. Its goal is to provide accessible and up-to-date materials for students, professionals, and enthusiasts in the field. <br></br><br></br>This website is released under the MIT License, which means you are free to use, copy, modify, and distribute both the content and code—even for commercial purposes—as long as you retain the copyright notice and the license disclaimer.</>,
        ],
      },
      usage: {
        title: "Use of Content",
        text: [<>• You may freely use the published content for personal, educational, or commercial purposes, as long as you comply with the applicable license. <br></br>• While we strive to ensure the accuracy of the information, we do not guarantee that all content is error-free or fully up to date. <br></br>• The content is not intended to replace professional or technical advice in contexts where regulatory or scientific precision is required.</>,
        ],
      },
      contributions: {
        title: "Contributions",
        text: [<>By contributing code, content, or suggestions to the project (e.g., through GitHub or other channels), you agree that your contribution may be modified, distributed, or reused under the terms of the MIT License. <br></br><b>Contribution Guidelines:</b><br></br>• Do not include plagiarized content or material protected by copyright without permission. <br></br>• Do not upload offensive, discriminatory, or illegal material.</>,
        ],
      },
      disclaimer: {
        title: "Disclaimer",
        text: "This site is provided \"as is\" without any warranties of any kind. Under the MIT License, The Engineering Compendium shall not be held liable for any damages or losses that may arise directly or indirectly from the use of the site or its content.",
      },
      userContent: {
        title: "User Content",
        text: "By submitting content to our platform, you grant us a non-exclusive, royalty-free license to use, modify, and display that content in connection with our services.",
      },
      externalLinks: {
        title: "External Links",
        text: "This site may contain links to external websites that are not under our control. We are not responsible for the content, accuracy, or privacy policies of any third-party websites.",
      },
      changes: {
        title: "Changes to Terms",
        text: "We may update these Terms and Conditions at any time without prior notice. We encourage you to check this page periodically. Continued use of the site after changes are made implies your acceptance of the new terms.",
      },
      contact: {
        title: "Contact Us",
        text: "If you have any questions about these terms or wish to report an issue, feel free to contact us via our GitHub repository or through a contact form (if available on the site).",
      },
      backHome: "Back to Home",
    },
    es: {
      title: "Términos de Servicio",
      lastUpdated: "Última Actualización: 14 de mayo de 2025",
      introduction: {
        title: "Introducción",
        text: "Bienvenido a The Engineering Compendium. Al acceder o utilizar este sitio web, aceptas cumplir con los siguientes Términos y Condiciones. Te recomendamos leerlos detenidamente antes de utilizar nuestros servicios o contribuir con el proyecto.",
      },
      aboutTheSite: {
        title: "Sobre El Sitio",
        text: [
          <>The Engineering Compendium es un recurso educativo gratuito enfocado en ingeniería, desarrollado como un proyecto de código abierto. Su propósito es proporcionar material accesible y actualizado para estudiantes, profesionales y entusiastas del área.</>,
          <><br></br><br></br>Este sitio está disponible bajo la licencia MIT, lo que significa que puedes usar, copiar, modificar y distribuir el contenido y el código, incluso con fines comerciales, siempre que mantengas el aviso de derechos de autor y la renuncia de responsabilidad.</>,
        ],
      },
      usage: {
        title: "Uso del Contenido",
        text: [
          <>• Puedes utilizar libremente el contenido publicado con fines personales, educativos o comerciales, siempre que respetes la licencia correspondiente.</>,
          <><br></br>• Aunque se hace un esfuerzo por asegurar la precisión del contenido, no garantizamos que toda la información esté libre de errores o completamente actualizada.</>,
          <><br></br>• El contenido no debe ser utilizado como sustituto del asesoramiento profesional o técnico en contextos donde se requiera precisión normativa o científica.</>,
        ],
      },
      contributions: {
        title: "Contribuciones",
        text: [
          <>Al contribuir con código, contenido o sugerencias al proyecto (por ejemplo, a través de GitHub u otros canales), aceptas que tu contribución pueda ser modificada, distribuida o reutilizada bajo los términos de la licencia MIT.</>,
          <><br></br><b>Reglas para contribuciones:</b><br></br>• No incluir contenido plagiado ni material protegido por derechos de autor sin autorización.<br></br>• No subir material ofensivo, discriminatorio o que viole leyes aplicables.</>,
        ],
      },
      disclaimer: {
        title: "Descargo de Responsabilidad",
        text: "El sitio se proporciona \"tal cual\", sin garantías de ningún tipo. Bajo la licencia MIT, The Engineering Compendium no será responsable de ningún daño o pérdida que pueda surgir directa o indirectamente del uso del sitio o su contenido.",
      },
      userContent: {
        title: "Contenido del Usuario",
        text: "Al enviar contenido a nuestra plataforma, nos otorgas una licencia no exclusiva y libre de regalías para usar, modificar y mostrar ese contenido en relación con nuestros servicios.",
      },
      externalLinks: {
        title: "Enlaces Externos",
        text: "Este sitio puede contener enlaces a otras páginas web que no están bajo nuestro control. No nos hacemos responsables del contenido, precisión o políticas de privacidad de sitios externos.",
      },
      changes: {
        title: "Cambios en los Términos",
        text: "Podemos actualizar estos Términos y Condiciones en cualquier momento sin previo aviso. Te recomendamos revisar esta página periódicamente. El uso continuo del sitio después de una actualización implica tu aceptación de los nuevos términos.",
      },
      MITlicense: {
        title: "Licencia MIT",
        text: "Este proyecto está licenciado bajo la Licencia MIT. Puedes usar, copiar, modificar y distribuir el contenido y el código, incluso con fines comerciales, siempre que mantengas el aviso de derechos de autor y la renuncia de responsabilidad.",
      },
      contact: {
        title: "Contáctanos",
        text: "Si tienes preguntas sobre estos términos o deseas reportar algún problema, puedes contactarnos a través de nuestro repositorio en GitHub o mediante nuestro formulario de contacto (si está disponible en el sitio).",
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
          <h2 className="text-xl font-semibold mb-3">{currentContent.aboutTheSite.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.aboutTheSite.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.usage.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.usage.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.contributions.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.contributions.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.disclaimer.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.disclaimer.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.userContent.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.userContent.text}</p>
          </Card>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">{currentContent.externalLinks.title}</h2>
          <Card className="p-4 bg-white shadow-sm">
            <p>{currentContent.externalLinks.text}</p>
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
