"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function ApplicationsOfDifferentialsPage() {
  const { language } = useLanguage()

  // Content for both languages
  const content = {
    en: {
      title: "Applications of Differential Calculus",
      description: "Explore the practical applications of derivatives in solving real-world problems.",
      backLink: "Back to Mathematics",
      introduction:
        "Differential calculus provides powerful tools for analyzing rates of change, finding optimal values, and approximating complex functions. These applications extend beyond pure mathematics into fields such as physics, engineering, economics, and computer science.",
      exploreTopics: "Explore topic",
      topics: [
        {
          id: "optimization",
          title: "Optimization Problems",
          description:
            "Finding maximum and minimum values of functions to solve practical problems in engineering, economics, and other fields.",
          href: "/topics/mathematics/differential-calculus-applications/optimization",
        },
        {
          id: "lhopital",
          title: "L'Hôpital's Rule",
          description: "Evaluating limits that result in indeterminate forms such as 0/0 or ∞/∞ using derivatives.",
          href: "/topics/mathematics/differential-calculus-applications/lhopitals-rule",
        },
        {
          id: "linear-approximation",
          title: "Linear Approximation",
          description:
            "Approximating function values using tangent lines and derivatives to simplify complex calculations.",
          href: "/topics/mathematics/differential-calculus-applications/linear-approximation",
        },
        {
          id: "rates-of-change",
          title: "Related Rates of Change",
          description: "Analyzing how related quantities change with respect to time using implicit differentiation.",
          href: "/topics/mathematics/differential-calculus-applications/related-rates",
        },
        {
          id: "leibniz-rule",
          title: "Leibniz Derivative Rule",
          description: "Differentiating integrals with variable limits, connecting differential and integral calculus.",
          href: "/topics/mathematics/differential-calculus-applications/leibniz-rule",
        },
        {
          id: "newton-raphson",
          title: "Newton-Raphson Method",
          description: "Using derivatives to find increasingly accurate approximations to the roots of a function.",
          href: "/topics/mathematics/differential-calculus-applications/newton-raphson",
        },
      ],
    },
    es: {
      title: "Aplicaciones del Cálculo Diferencial",
      description: "Explora las aplicaciones prácticas de las derivadas en la resolución de problemas del mundo real.",
      backLink: "Volver a Matemáticas",
      introduction:
        "El cálculo diferencial proporciona herramientas poderosas para analizar tasas de cambio, encontrar valores óptimos y aproximar funciones complejas. Estas aplicaciones se extienden más allá de las matemáticas puras a campos como la física, la ingeniería, la economía y la informática.",
      exploreTopics: "Explorar tema",
      topics: [
        {
          id: "optimization",
          title: "Problemas de Optimización",
          description:
            "Encontrar valores máximos y mínimos de funciones para resolver problemas prácticos en ingeniería, economía y otros campos.",
          href: "/topics/mathematics/differential-calculus-applications/optimization",
        },
        {
          id: "lhopital",
          title: "Regla de L'Hôpital",
          description: "Evaluación de límites que resultan en formas indeterminadas como 0/0 o ∞/∞ usando derivadas.",
          href: "/topics/mathematics/differential-calculus-applications/lhopitals-rule",
        },
        {
          id: "linear-approximation",
          title: "Aproximación Lineal",
          description:
            "Aproximación de valores de funciones utilizando líneas tangentes y derivadas para simplificar cálculos complejos.",
          href: "/topics/mathematics/differential-calculus-applications/linear-approximation",
        },
        {
          id: "rates-of-change",
          title: "Tasas Relacionadas de Cambio",
          description:
            "Análisis de cómo cantidades relacionadas cambian con respecto al tiempo usando diferenciación implícita.",
          href: "/topics/mathematics/differential-calculus-applications/related-rates",
        },
        {
          id: "leibniz-rule",
          title: "Regla de Derivación de Leibniz",
          description:
            "Diferenciación de integrales con límites variables, conectando el cálculo diferencial e integral.",
          href: "/topics/mathematics/differential-calculus-applications/leibniz-rule",
        },
        {
          id: "newton-raphson",
          title: "Método de Newton-Raphson",
          description:
            "Uso de derivadas para encontrar aproximaciones cada vez más precisas a las raíces de una función.",
          href: "/topics/mathematics/differential-calculus-applications/newton-raphson",
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
