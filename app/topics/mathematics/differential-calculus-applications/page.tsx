"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"

export default function DifferentialCalculusApplicationsPage() {
  const { language } = useLanguage()

  // Content for both languages
  const content = {
    en: {
      title: "Applications of Differential Calculus",
      description: "Explore the practical applications of derivatives in solving real-world problems.",
      backLink: "Back to Mathematics",
      introduction:
        "Differential calculus has numerous practical applications across various fields. Explore these applications to understand how derivatives can be used to solve real-world problems in physics, engineering, economics, and optimization.",
      exploreTopics: "Explore topic",
      topics: [
        {
          id: "optimization",
          title: "Optimization Problems",
          description: "Learn how to find maximum and minimum values using derivatives.",
          href: "/topics/mathematics/differential-calculus-applications/optimization",
        },
        {
          id: "lhopitals-rule",
          title: "L'Hôpital's Rule",
          description: "Evaluate limits of indeterminate forms using derivatives.",
          href: "/topics/mathematics/differential-calculus-applications/lhopitals-rule",
        },
        {
          id: "linear-approximation",
          title: "Linear Approximation",
          description: "Approximate functions using tangent lines.",
          href: "/topics/mathematics/differential-calculus-applications/linear-approximation",
        },
        {
          id: "related-rates",
          title: "Related Rates of Change",
          description: "Study how related quantities change with respect to time.",
          href: "/topics/mathematics/differential-calculus-applications/related-rates",
        },
        {
          id: "leibniz-derivative-rule",
          title: "Leibniz Derivative Rule",
          description: "Differentiate integrals with variable limits.",
          href: "/topics/mathematics/differential-calculus-applications/leibniz-derivative-rule",
        },
        {
          id: "newton-raphson",
          title: "Newton-Raphson Method",
          description: "Find roots of equations using iterative approximations.",
          href: "/topics/mathematics/differential-calculus-applications/newton-raphson",
        },
      ],
    },
    es: {
      title: "Aplicaciones del Cálculo Diferencial",
      description: "Explora las aplicaciones prácticas de las derivadas en la resolución de problemas del mundo real.",
      backLink: "Volver a Matemáticas",
      introduction:
        "El cálculo diferencial tiene numerosas aplicaciones prácticas en diversos campos. Explora estas aplicaciones para entender cómo las derivadas pueden usarse para resolver problemas del mundo real en física, ingeniería, economía y optimización.",
      exploreTopics: "Explorar tema",
      topics: [
        {
          id: "optimization",
          title: "Problemas de Optimización",
          description: "Aprende a encontrar valores máximos y mínimos usando derivadas.",
          href: "/topics/mathematics/differential-calculus-applications/optimization",
        },
        {
          id: "lhopitals-rule",
          title: "Regla de L'Hôpital",
          description: "Evalúa límites de formas indeterminadas usando derivadas.",
          href: "/topics/mathematics/differential-calculus-applications/lhopitals-rule",
        },
        {
          id: "linear-approximation",
          title: "Aproximación Lineal",
          description: "Aproxima funciones usando líneas tangentes.",
          href: "/topics/mathematics/differential-calculus-applications/linear-approximation",
        },
        {
          id: "related-rates",
          title: "Tasas Relacionadas de Cambio",
          description: "Estudia cómo las cantidades relacionadas cambian con respecto al tiempo.",
          href: "/topics/mathematics/differential-calculus-applications/related-rates",
        },
        {
          id: "leibniz-derivative-rule",
          title: "Regla de Derivación de Leibniz",
          description: "Diferencia integrales con límites variables.",
          href: "/topics/mathematics/differential-calculus-applications/leibniz-derivative-rule",
        },
        {
          id: "newton-raphson",
          title: "Método de Newton-Raphson",
          description: "Encuentra raíces de ecuaciones usando aproximaciones iterativas.",
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
