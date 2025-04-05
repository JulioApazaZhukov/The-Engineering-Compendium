"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function ApplicationsOfIntegralsPage() {
  const { language } = useLanguage()

  // Content for both languages
  const content = {
    en: {
      title: "Applications of Integral Calculus",
      description: "Explore the practical applications of integrals in solving real-world problems.",
      backLink: "Back to Mathematics",
      introduction:
        "Integral calculus provides powerful tools for calculating areas, volumes, and other quantities that involve accumulation or summation. These applications extend beyond pure mathematics into fields such as physics, engineering, economics, and biology.",
      exploreTopics: "Explore topic",
      topics: [
        {
          id: "area-under-curve",
          title: "Area Under the Curve",
          description:
            "Calculating the area between a function and the x-axis, a fundamental application of definite integrals.",
          href: "/topics/mathematics/integral-calculus/area-under-curve",
        },
        {
          id: "area-between-curves",
          title: "Area Between Curves",
          description: "Finding the area enclosed by two or more functions using definite integrals.",
          href: "/topics/mathematics/integral-calculus/area-between-curves",
        },
        {
          id: "volume-solids-revolution",
          title: "Volume of Solids of Revolution",
          description: "Calculating volumes of three-dimensional objects formed by rotating a region around an axis.",
          href: "/topics/mathematics/integral-calculus/volume-solids-revolution",
        },
        {
          id: "surface-area-revolution",
          title: "Surface Area of Solids of Revolution",
          description: "Finding the surface area of three-dimensional objects formed by rotation.",
          href: "/topics/mathematics/integral-calculus/surface-area-revolution",
        },
        {
          id: "pappus-theorem",
          title: "Pappus' Theorem",
          description: "Relating volumes and surface areas to the centroid of a region for simplified calculations.",
          href: "/topics/mathematics/integral-calculus/pappus-theorem",
        },
        {
          id: "hydrostatic-force",
          title: "Hydrostatic Force",
          description: "Calculating the force exerted by a fluid on a submerged surface using integration.",
          href: "/topics/mathematics/integral-calculus/hydrostatic-force",
        },
      ],
    },
    es: {
      title: "Aplicaciones del Cálculo Integral",
      description: "Explora las aplicaciones prácticas de las integrales en la resolución de problemas del mundo real.",
      backLink: "Volver a Matemáticas",
      introduction:
        "El cálculo integral proporciona herramientas poderosas para calcular áreas, volúmenes y otras cantidades que involucran acumulación o suma. Estas aplicaciones se extienden más allá de las matemáticas puras a campos como la física, la ingeniería, la economía y la biología.",
      exploreTopics: "Explorar tema",
      topics: [
        {
          id: "area-under-curve",
          title: "Área Bajo la Curva",
          description:
            "Cálculo del área entre una función y el eje x, una aplicación fundamental de las integrales definidas.",
          href: "/topics/mathematics/integral-calculus/area-under-curve",
        },
        {
          id: "area-between-curves",
          title: "Área Entre Curvas",
          description: "Cálculo del área encerrada por dos o más funciones usando integrales definidas.",
          href: "/topics/mathematics/integral-calculus/area-between-curves",
        },
        {
          id: "volume-solids-revolution",
          title: "Volumen de Sólidos de Revolución",
          description:
            "Cálculo de volúmenes de objetos tridimensionales formados al rotar una región alrededor de un eje.",
          href: "/topics/mathematics/integral-calculus/volume-solids-revolution",
        },
        {
          id: "surface-area-revolution",
          title: "Área de Superficie de Sólidos de Revolución",
          description: "Cálculo del área de superficie de objetos tridimensionales formados por rotación.",
          href: "/topics/mathematics/integral-calculus/surface-area-revolution",
        },
        {
          id: "pappus-theorem",
          title: "Teorema de Pappus",
          description:
            "Relacionando volúmenes y áreas de superficie con el centroide de una región para cálculos simplificados.",
          href: "/topics/mathematics/integral-calculus/pappus-theorem",
        },
        {
          id: "hydrostatic-force",
          title: "Fuerza Hidrostática",
          description: "Cálculo de la fuerza ejercida por un fluido sobre una superficie sumergida usando integración.",
          href: "/topics/mathematics/integral-calculus/hydrostatic-force",
        },
      ],
    },
  }

  const currentContent = language === "es" ? content.es : content.en

  return (
    <div className="container py-8">
      <div className="flex justify-start items-center mb-8">
        <Button variant="ghost" asChild className="gap-1">
          <Link href="/topics/mathematics">
            <ArrowLeft className="h-4 w-4" />
            {currentContent.backLink}
          </Link>
        </Button>
      </div>

      <div className="space-y-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">{currentContent.title}</h1>
          <p className="text-xl text-muted-foreground mb-8">{currentContent.description}</p>
          <p className="mb-8">{currentContent.introduction}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentContent.topics.map((topic) => (
            <Card key={topic.id} className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <CardTitle>{topic.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{topic.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                  <Link href={topic.href} className="flex items-center text-primary">
                    {currentContent.exploreTopics}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
