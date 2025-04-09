"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function AreaUnderCurvePage() {
  const { language } = useLanguage()
  const [activeExample, setActiveExample] = useState<number | null>(null)

  const toggleExample = (index: number) => {
    setActiveExample(activeExample === index ? null : index)
  }

  // Content for both languages
  const content = {
    en: {
      title: "Area Under the Curve",
      subtitle: "Calculating the area bounded by a function and the x-axis",
      backLink: "Back to Applications of Integral Calculus",
      introduction:
        "The area under a curve is one of the most fundamental applications of definite integrals. It allows us to calculate the exact area bounded by a function, the x-axis, and vertical lines.",
      definition: {
        title: "Definition",
        content: "The area under a curve y = f(x) from x = a to x = b is given by the definite integral:",
      },
      interpretation: {
        title: "Geometric Interpretation",
        content:
          "The definite integral can be interpreted as the signed area between the curve y = f(x) and the x-axis from x = a to x = b:",
        points: [
          "If f(x) ≥ 0 on [a, b], the integral gives the area between the curve and the x-axis.",
          "If f(x) ≤ 0 on [a, b], the integral gives the negative of the area between the curve and the x-axis.",
          "If f(x) changes sign on [a, b], the integral gives the algebraic sum of the areas.",
        ],
      },
      examples: {
        title: "Examples",
        example1: {
          title: "Example 1: Area under a parabola",
          problem: "Find the area under the curve y = x² from x = 0 to x = 3.",
          solution: "We need to evaluate the definite integral:",
          step1: "Set up the integral:",
          step2: "Apply the power rule for integration:",
          step3: "Evaluate at the bounds:",
          result: "Therefore, the area under the curve y = x² from x = 0 to x = 3 is 9 square units.",
        },
        example2: {
          title: "Example 2: Area with a negative function",
          problem: "Find the area between the curve y = x - 2 and the x-axis from x = 0 to x = 3.",
          solution: "First, we need to identify where the function crosses the x-axis:",
          step1: "The function crosses the x-axis when x - 2 = 0, so at x = 2.",
          step2: "For x from 0 to 2, the function is negative, so we need to compute:",
          step3: "For x from 2 to 3, the function is positive, so we compute:",
          step4: "The total area between the curve and the x-axis is the sum of the absolute values:",
          result:
            "Therefore, the area between the curve y = x - 2 and the x-axis from x = 0 to x = 3 is 2 square units.",
        },
      },
      applications: {
        title: "Applications",
        content: "The concept of area under a curve has numerous applications in various fields:",
        fields: [
          {
            name: "Physics",
            applications: [
              "Work done by a variable force",
              "Distance traveled from a velocity-time graph",
              "Electric charge from a current-time graph",
            ],
          },
          {
            name: "Economics",
            applications: [
              "Consumer and producer surplus",
              "Income distribution (Lorenz curves and Gini coefficient)",
              "Total cost from marginal cost",
            ],
          },
          {
            name: "Probability",
            applications: ["Probability distributions", "Expected values", "Cumulative distribution functions"],
          },
        ],
      },
      commonMistakes: {
        title: "Common Mistakes",
        mistakes: [
          "Forgetting to check if the function is negative in some regions",
          "Not identifying where the function crosses the x-axis",
          "Confusing the area under the curve with the definite integral when the function takes negative values",
          "Using incorrect limits of integration",
        ],
      },
      relatedTopics: [
        { name: "Area Between Curves", path: "/topics/mathematics/integral-calculus-applications/area-between-curves" },
        {
          name: "Volume of Solids of Revolution",
          path: "/topics/mathematics/integral-calculus-applications/volume-solids-revolution",
        },
        { name: "Integral Calculus", path: "/topics/mathematics/integral-calculus" },
        { name: "Differential Calculus", path: "/topics/mathematics/differential-calculus" },
      ],
      resources: [
        {
          title: "Solved Problems",
          description: "Practice with step-by-step solutions",
          link: "/resources/solved-problems?topic=area-under-curve",
          linkText: "View problems",
        },
        {
          title: "Interactive Calculator",
          description: "Calculate areas under curves with our tool",
          link: "/resources/tools/area-calculator",
          linkText: "Use calculator",
        },
        {
          title: "Recommended Reading",
          description: "Books and articles on integral applications",
          link: "/resources/bibliography?topic=integral-applications",
          linkText: "View bibliography",
        },
      ],
    },
    es: {
      title: "Área Bajo la Curva",
      subtitle: "Calculando el área limitada por una función y el eje x",
      backLink: "Volver a Aplicaciones del Cálculo Integral",
      introduction:
        "El área bajo una curva es una de las aplicaciones más fundamentales de las integrales definidas. Nos permite calcular el área exacta limitada por una función, el eje x y líneas verticales.",
      definition: {
        title: "Definición",
        content: "El área bajo una curva y = f(x) desde x = a hasta x = b está dada por la integral definida:",
      },
      interpretation: {
        title: "Interpretación Geométrica",
        content:
          "La integral definida puede interpretarse como el área con signo entre la curva y = f(x) y el eje x desde x = a hasta x = b:",
        points: [
          "Si f(x) ≥ 0 en [a, b], la integral da el área entre la curva y el eje x.",
          "Si f(x) ≤ 0 en [a, b], la integral da el negativo del área entre la curva y el eje x.",
          "Si f(x) cambia de signo en [a, b], la integral da la suma algebraica de las áreas.",
        ],
      },
      examples: {
        title: "Ejemplos",
        example1: {
          title: "Ejemplo 1: Área bajo una parábola",
          problem: "Encuentra el área bajo la curva y = x² desde x = 0 hasta x = 3.",
          solution: "Necesitamos evaluar la integral definida:",
          step1: "Planteamos la integral:",
          step2: "Aplicamos la regla de potencia para integración:",
          step3: "Evaluamos en los límites:",
          result: "Por lo tanto, el área bajo la curva y = x² desde x = 0 hasta x = 3 es 9 unidades cuadradas.",
        },
        example2: {
          title: "Ejemplo 2: Área con una función negativa",
          problem: "Encuentra el área entre la curva y = x - 2 y el eje x desde x = 0 hasta x = 3.",
          solution: "Primero, necesitamos identificar dónde la función cruza el eje x:",
          step1: "La función cruza el eje x cuando x - 2 = 0, así que en x = 2.",
          step2: "Para x desde 0 hasta 2, la función es negativa, así que calculamos:",
          step3: "Para x desde 2 hasta 3, la función es positiva, así que calculamos:",
          step4: "El área total entre la curva y el eje x es la suma de los valores absolutos:",
          result:
            "Por lo tanto, el área entre la curva y = x - 2 y el eje x desde x = 0 hasta x = 3 es 2 unidades cuadradas.",
        },
      },
      applications: {
        title: "Aplicaciones",
        content: "El concepto de área bajo la curva tiene numerosas aplicaciones en varios campos:",
        fields: [
          {
            name: "Física",
            applications: [
              "Trabajo realizado por una fuerza variable",
              "Distancia recorrida a partir de un gráfico velocidad-tiempo",
              "Carga eléctrica a partir de un gráfico corriente-tiempo",
            ],
          },
          {
            name: "Economía",
            applications: [
              "Excedente del consumidor y productor",
              "Distribución de ingresos (curvas de Lorenz y coeficiente de Gini)",
              "Costo total a partir del costo marginal",
            ],
          },
          {
            name: "Probabilidad",
            applications: [
              "Distribuciones de probabilidad",
              "Valores esperados",
              "Funciones de distribución acumulativa",
            ],
          },
        ],
      },
      commonMistakes: {
        title: "Errores Comunes",
        mistakes: [
          "Olvidar verificar si la función es negativa en algunas regiones",
          "No identificar dónde la función cruza el eje x",
          "Confundir el área bajo la curva con la integral definida cuando la función toma valores negativos",
          "Usar límites de integración incorrectos",
        ],
      },
      relatedTopics: [
        { name: "Área Entre Curvas", path: "/topics/mathematics/integral-calculus-applications/area-between-curves" },
        {
          name: "Volumen de Sólidos de Revolución",
          path: "/topics/mathematics/integral-calculus-applications/volume-solids-revolution",
        },
        { name: "Cálculo Integral", path: "/topics/mathematics/integral-calculus" },
        { name: "Cálculo Diferencial", path: "/topics/mathematics/differential-calculus" },
      ],
      resources: [
        {
          title: "Problemas Resueltos",
          description: "Practica con soluciones paso a paso",
          link: "/resources/solved-problems?topic=area-under-curve",
          linkText: "Ver problemas",
        },
        {
          title: "Calculadora Interactiva",
          description: "Calcula áreas bajo curvas con nuestra herramienta",
          link: "/resources/tools/area-calculator",
          linkText: "Usar calculadora",
        },
        {
          title: "Lecturas Recomendadas",
          description: "Libros y artículos sobre aplicaciones de integrales",
          link: "/resources/bibliography?topic=integral-applications",
          linkText: "Ver bibliografía",
        },
      ],
    },
  }

  const currentContent = language === "es" ? content.es : content.en

  return (
    <div className="container py-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          {language === "es" ? "Inicio" : "Home"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics" className="hover:text-foreground">
          {language === "es" ? "Temas" : "Topics"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics/mathematics" className="hover:text-foreground">
          {language === "es" ? "Matemáticas" : "Mathematics"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics/mathematics/integral-calculus-applications" className="hover:text-foreground">
          {language === "es" ? "Aplicaciones del Cálculo Integral" : "Applications of Integral Calculus"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">{currentContent.title}</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{currentContent.title}</h1>
          <p className="text-muted-foreground">{currentContent.subtitle}</p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/topics/mathematics/integral-calculus-applications" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {currentContent.backLink}
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction Section */}
          <section>
            <div className="prose dark:prose-invert max-w-none">
              <p>{currentContent.introduction}</p>
            </div>
          </section>

          {/* Definition Section */}
          <section>
            <h2 id="definition" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.definition.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>{currentContent.definition.content}</p>
              <div className="my-4 flex justify-center">
                <MathDisplay math="\int_{a}^{b} f(x) \, dx" />
              </div>
            </div>
          </section>

          {/* Geometric Interpretation Section */}
          <section>
            <h2 id="geometric-interpretation" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.interpretation.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>{currentContent.interpretation.content}</p>
              <ul>
                {currentContent.interpretation.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
              <div className="my-4 flex justify-center">
                <MathDisplay
                  math={`\\text{Area} = 
                \\begin{cases}
                \\int_{a}^{b} f(x) \\, dx & \\text{if } f(x) \\geq 0 \\text{ on } [a,b] \\\\
                -\\int_{a}^{b} f(x) \\, dx & \\text{if } f(x) \\leq 0 \\text{ on } [a,b] \\\\
                \\int_{a}^{c} f(x) \\, dx + \\int_{c}^{b} f(x) \\, dx & \\text{if } f(c) = 0 \\text{ for } a < c < b
                \\end{cases}`}
                />
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section>
            <h2 id="examples" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.examples.title}
            </h2>

            <div className="space-y-4">
              {/* Example 1 */}
              <Card className="overflow-hidden">
                <div
                  className="p-4 bg-muted cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExample(1)}
                >
                  <h3 className="font-medium">{currentContent.examples.example1.title}</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{currentContent.examples.example1.problem}</strong>
                      </p>
                      <p>{currentContent.examples.example1.solution}</p>

                      <p>{currentContent.examples.example1.step1}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="\int_{0}^{3} x^2 \, dx" />
                      </div>

                      <p>{currentContent.examples.example1.step2}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="\left[ \frac{x^3}{3} \right]_{0}^{3}" />
                      </div>

                      <p>{currentContent.examples.example1.step3}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="\frac{3^3}{3} - \frac{0^3}{3} = \frac{27}{3} - 0 = 9" />
                      </div>

                      <p className="font-medium">{currentContent.examples.example1.result}</p>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Example 2 */}
              <Card className="overflow-hidden">
                <div
                  className="p-4 bg-muted cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExample(2)}
                >
                  <h3 className="font-medium">{currentContent.examples.example2.title}</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{currentContent.examples.example2.problem}</strong>
                      </p>
                      <p>{currentContent.examples.example2.solution}</p>

                      <p>{currentContent.examples.example2.step1}</p>

                      <p>{currentContent.examples.example2.step2}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay
                          math={`\\left| \\int_{0}^{2} (x - 2) \\, dx \\right| = \\left| \\left[ \\frac{x^2}{2} - 2x \\right]_{0}^{2} \\right| = \\left| \\left( \\frac{2^2}{2} - 2 \\cdot 2 \\right) - \\left( \\frac{0^2}{2} - 2 \\cdot 0 \\right) \\right| = |2 - 4 - 0| = |-2| = 2`}
                        />
                      </div>

                      <p>{currentContent.examples.example2.step3}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay
                          math={`\\int_{2}^{3} (x - 2) \\, dx = \\left[ \\frac{x^2}{2} - 2x \\right]_{2}^{3} = \\left( \\frac{3^2}{2} - 2 \\cdot 3 \\right) - \\left( \\frac{2^2}{2} - 2 \\cdot 2 \\right) = (4.5 - 6) - (2 - 4) = -1.5 - (-2) = 0.5`}
                        />
                      </div>

                      <p>{currentContent.examples.example2.step4}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math={`\\text{Total Area} = 2 + 0.5 = 2.5`} />
                      </div>

                      <p className="font-medium">{currentContent.examples.example2.result}</p>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </section>

          {/* Applications Section */}
          <section>
            <h2 id="applications" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.applications.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>{currentContent.applications.content}</p>

              {currentContent.applications.fields.map((field, index) => (
                <div key={index} className="mt-4">
                  <h3 className="text-xl font-semibold">{field.name}</h3>
                  <ul>
                    {field.applications.map((app, i) => (
                      <li key={i}>{app}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section>
            <h2 id="common-mistakes" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.commonMistakes.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <ul>
                {currentContent.commonMistakes.mistakes.map((mistake, index) => (
                  <li key={index}>{mistake}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Table of Contents */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">{language === "es" ? "En Esta Página" : "On This Page"}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#definition" className="text-primary hover:underline">
                    {currentContent.definition.title}
                  </a>
                </li>
                <li>
                  <a href="#geometric-interpretation" className="text-muted-foreground hover:text-primary">
                    {currentContent.interpretation.title}
                  </a>
                </li>
                <li>
                  <a href="#examples" className="text-muted-foreground hover:text-primary">
                    {currentContent.examples.title}
                  </a>
                </li>
                <li>
                  <a href="#applications" className="text-muted-foreground hover:text-primary">
                    {currentContent.applications.title}
                  </a>
                </li>
                <li>
                  <a href="#common-mistakes" className="text-muted-foreground hover:text-primary">
                    {currentContent.commonMistakes.title}
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Related Topics */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">{language === "es" ? "Temas Relacionados" : "Related Topics"}</h3>
              <ul className="space-y-2 text-sm">
                {currentContent.relatedTopics.map((topic, index) => (
                  <li key={index}>
                    <Link href={topic.path} className="text-primary hover:underline flex items-center">
                      <ChevronRight className="h-3 w-3 mr-1" />
                      {topic.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">
                {language === "es" ? "Recursos de Aprendizaje" : "Learning Resources"}
              </h3>

              <div className="space-y-4">
                {currentContent.resources.map((resource, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="bg-primary/10 p-2 rounded-md">
                      {index === 0 ? (
                        <FileText className="h-4 w-4 text-primary" />
                      ) : index === 1 ? (
                        <Calculator className="h-4 w-4 text-primary" />
                      ) : (
                        <BookOpen className="h-4 w-4 text-primary" />
                      )}
                    </div>
                    <div>
                      <h4 className="text-sm font-medium">{resource.title}</h4>
                      <p className="text-xs text-muted-foreground mb-1">{resource.description}</p>
                      <Link href={resource.link} className="text-xs text-primary hover:underline">
                        {resource.linkText}
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
