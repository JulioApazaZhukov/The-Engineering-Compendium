"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, FileText, Lightbulb, Calculator } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"

export default function ResourcesPage() {
  const { language } = useLanguage()

  const resources = [
    {
      title: language === "es" ? "Tutoriales" : "Tutorials",
      description:
        language === "es"
          ? "Guías paso a paso para ayudarte a dominar conceptos y técnicas clave de ingeniería."
          : "Step-by-step guides to help you master key engineering concepts and techniques.",
      icon: Lightbulb,
      href: "/resources/tutorials",
      color: "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: language === "es" ? "Problemas Resueltos" : "Solved Problems",
      description:
        language === "es"
          ? "Practica con ejemplos resueltos para fortalecer tu comprensión de los principios de ingeniería."
          : "Practice with solved examples to strengthen your understanding of engineering principles.",
      icon: FileText,
      href: "/resources/solved-problems",
      color: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: language === "es" ? "Bibliografía Recomendada" : "Recommended Bibliography",
      description:
        language === "es"
          ? "Colección seleccionada de libros, artículos y documentos para un aprendizaje en profundidad."
          : "Curated collection of books, articles, and papers for in-depth learning.",
      icon: BookOpen,
      href: "/resources/bibliography",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      title: language === "es" ? "Herramientas en Línea" : "Online Tools",
      description:
        language === "es"
          ? "Calculadoras, simuladores y software interactivos para aplicar conceptos de ingeniería."
          : "Interactive calculators, simulators, and software to apply engineering concepts.",
      icon: Calculator,
      href: "/resources/tools",
      color: "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  const featuredTools = [
    {
      title: language === "es" ? "Solucionador de Ecuaciones Diferenciales" : "Differential Equations Solver",
      description:
        language === "es"
          ? "Herramienta interactiva para resolver y visualizar ecuaciones diferenciales"
          : "Interactive tool to solve and visualize differential equations",
      href: "/resources/tools/differential-equations",
    },
    {
      title: language === "es" ? "Base de Datos de Propiedades de Materiales" : "Material Properties Database",
      description:
        language === "es"
          ? "Base de datos completa de materiales de ingeniería y sus propiedades"
          : "Comprehensive database of engineering materials and their properties",
      href: "/resources/tools/materials-database",
    },
    {
      title: language === "es" ? "Simulador de Circuitos" : "Circuit Simulator",
      description:
        language === "es"
          ? "Diseña y analiza circuitos eléctricos con este simulador interactivo"
          : "Design and analyze electrical circuits with this interactive simulator",
      href: "/resources/tools/circuit-simulator",
    },
  ]

  return (
    <div className="container py-12">
      <div className="space-y-12">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            {language === "es" ? "Recursos de Ingeniería" : "Engineering Resources"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "es"
              ? "Accede a una amplia gama de recursos educativos para mejorar tus conocimientos y habilidades de ingeniería."
              : "Access a wide range of educational resources to enhance your engineering knowledge and skills."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource) => (
            <Card key={resource.title} className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 w-full">
                <Image src={resource.image || "/placeholder.svg"} alt={resource.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div
                  className={`absolute top-4 left-4 w-12 h-12 rounded-lg flex items-center justify-center ${resource.color}`}
                >
                  <resource.icon className="h-6 w-6" />
                </div>
              </div>
              <CardHeader>
                <CardTitle>{resource.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-base">{resource.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Link
                  href={resource.href}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                >
                  {language === "es" ? `Explorar ${resource.title}` : `Explore ${resource.title}`}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">
              {language === "es" ? "Herramientas Destacadas" : "Featured Tools"}
            </h2>
            <p className="text-muted-foreground">
              {language === "es"
                ? "Prueba nuestras herramientas interactivas más populares para aplicar conceptos de ingeniería en la práctica."
                : "Try our most popular interactive tools to apply engineering concepts in practice."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredTools.map((tool) => (
              <Card key={tool.title} className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg">{tool.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{tool.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Link
                    href={tool.href}
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    {language === "es" ? "Probar Herramienta" : "Try Tool"}
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        <div className="bg-muted rounded-lg p-6 md:p-8">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <h2 className="text-2xl font-bold tracking-tight">
              {language === "es" ? "¿Necesitas Recursos Específicos?" : "Need Specific Resources?"}
            </h2>
            <p className="text-muted-foreground">
              {language === "es"
                ? "¿No encuentras lo que buscas? Háznos saber qué recursos te ayudarían en tus estudios o proyectos de ingeniería."
                : "Can't find what you're looking for? Let us know what resources would help you in your engineering studies or projects."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
            >
              {language === "es" ? "Solicitar Recursos" : "Request Resources"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
