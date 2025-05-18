"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function AreaBetweenCurvesPage() {
  const { language } = useLanguage()
  const [activeExample, setActiveExample] = useState<number | null>(null)

  const toggleExample = (index: number) => {
    setActiveExample(activeExample === index ? null : index)
  }

  // Content for both languages
  const content = {
    en: {
      title: "Area Between Curves",
      subtitle: "Calculating the area enclosed by two or more functions",
      backLink: "Back to Applications of Integral Calculus",
      introduction:
        "The area between curves is a natural extension of the area under a curve. It allows us to calculate the area enclosed by two or more functions, providing a powerful tool for solving various geometric problems.",
      definition: {
        title: "Definition",
        content:
          "The area between two curves y = f(x) and y = g(x) from x = a to x = b, where f(x) ≥ g(x) for all x in [a, b], is given by:",
      },
      methods: {
        title: "Methods for Finding the Area Between Curves",
        vertical: {
          title: "Vertical Method (x-axis as reference)",
          content: "When the curves are expressed as functions of x:",
          formula: "A = \\int_{a}^{b} [f(x) - g(x)] \\, dx",
          note: "where f(x) is the upper curve and g(x) is the lower curve.",
        },
        horizontal: {
          title: "Horizontal Method (y-axis as reference)",
          content: "When the curves are expressed as functions of y:",
          formula: "A = \\int_{c}^{d} [h(y) - j(y)] \\, dy",
          note: "where h(y) is the rightmost curve and j(y) is the leftmost curve, and [c, d] is the range of y-values.",
        },
      },
      intersections: {
        title: "Finding Intersection Points",
        content: "To find the limits of integration, we often need to find where the curves intersect:",
        steps: [
          "Set f(x) = g(x) and solve for x to find the x-coordinates of intersection points.",
          "If using the horizontal method, set x = h(y) and x = j(y), then solve for y to find the y-coordinates of intersection points.",
        ],
      },
      examples: {
        title: "Examples",
        example1: {
          title: "Example 1: Area between two polynomial functions",
          problem: "Find the area between the curves y = x² and y = x + 2 over the interval where they intersect.",
          solution: "First, we need to find the points of intersection:",
          step1: "Set the equations equal: x² = x + 2",
          step2: "Rearrange to standard form: x² - x - 2 = 0",
          step3: "Factor or use the quadratic formula: (x - 2)(x + 1) = 0",
          step4: "Solve for x: x = 2 or x = -1",
          step5: "For x ∈ [-1, 2], we need to determine which function is greater:",
          step6: "At x = 0: f(0) = 0 and g(0) = 2, so g(x) > f(x)",
          step7: "Set up the integral with g(x) - f(x):",
          step8: "Evaluate the integral:",
          result: "Therefore, the area between the curves is 4.5 square units.",
        },
        example2: {
          title: "Example 2: Using the horizontal method",
          problem: "Find the area enclosed by the curves x = y² and x = 4 - y².",
          solution:
            "For this example, we'll use the horizontal method since the curves are expressed as functions of y:",
          step1: "First, find the points of intersection by setting y² = 4 - y²",
          step2: "Solve: 2y² = 4, so y² = 2, giving y = ±√2",
          step3: "The curves intersect at y = √2 and y = -√2",
          step4: "For y ∈ [-√2, √2], we have x = 4 - y² as the rightmost curve and x = y² as the leftmost curve",
          step5: "Set up the integral:",
          step6: "Evaluate the integral:",
          result: "Therefore, the area enclosed by the curves is 8 square units.",
        },
      },
      applications: {
        title: "Applications",
        content: "The concept of area between curves has numerous applications:",
        fields: [
          {
            name: "Physics",
            applications: [
              "Work done by a variable force over a displacement",
              "Pressure-volume work in thermodynamics",
              "Electric potential difference",
            ],
          },
          {
            name: "Economics",
            applications: ["Consumer and producer surplus", "Economic welfare analysis", "Cost-benefit analysis"],
          },
          {
            name: "Engineering",
            applications: [
              "Stress and strain analysis",
              "Fluid flow between boundaries",
              "Heat transfer between surfaces",
            ],
          },
        ],
      },
      commonMistakes: {
        title: "Common Mistakes",
        mistakes: [
          "Not identifying which curve is above/below or left/right correctly",
          "Using incorrect limits of integration",
          "Forgetting to check where the curves intersect",
          "Not choosing the appropriate method (vertical vs. horizontal) based on the form of the functions",
          "Incorrectly setting up the integral by subtracting in the wrong order",
        ],
      },
      relatedTopics: [
        { name: "Area Under the Curve", path: "/topics/mathematics/integral-calculus-applications/area-under-curve" },
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
          link: "/resources/solved-problems?topic=area-between-curves",
          linkText: "View problems",
        },
        {
          title: "Interactive Calculator",
          description: "Calculate areas between curves with our tool",
          link: "/resources/tools/area-calculator",
          linkText: "Use calculator",
        },
        {
          title: "Recommended Reading",
          description: "Books and articles on integral applications",
          link: "/resources/tools/bibliography",
          linkText: "View bibliography",
        },
      ],
    },
    es: {
      title: "Área Entre Curvas",
      subtitle: "Calculando el área encerrada por dos o más funciones",
      backLink: "Volver a Aplicaciones del Cálculo Integral",
      introduction:
        "El área entre curvas es una extensión natural del área bajo una curva. Nos permite calcular el área encerrada por dos o más funciones, proporcionando una herramienta poderosa para resolver varios problemas geométricos.",
      definition: {
        title: "Definición",
        content:
          "El área entre dos curvas y = f(x) y y = g(x) desde x = a hasta x = b, donde f(x) ≥ g(x) para todo x en [a, b], está dada por:",
      },
      methods: {
        title: "Métodos para Encontrar el Área Entre Curvas",
        vertical: {
          title: "Método Vertical (eje x como referencia)",
          content: "Cuando las curvas se expresan como funciones de x:",
          formula: "A = \\int_{a}^{b} [f(x) - g(x)] \\, dx",
          note: "donde f(x) es la curva superior y g(x) es la curva inferior.",
        },
        horizontal: {
          title: "Método Horizontal (eje y como referencia)",
          content: "Cuando las curvas se expresan como funciones de y:",
          formula: "A = \\int_{c}^{d} [h(y) - j(y)] \\, dy",
          note: "donde h(y) es la curva más a la derecha y j(y) es la curva más a la izquierda, y [c, d] es el rango de valores de y.",
        },
      },
      intersections: {
        title: "Encontrando Puntos de Intersección",
        content:
          "Para encontrar los límites de integración, a menudo necesitamos encontrar dónde se intersectan las curvas:",
        steps: [
          "Igualar f(x) = g(x) y resolver para x para encontrar las coordenadas x de los puntos de intersección.",
          "Si se usa el método horizontal, igualar x = h(y) y x = j(y), luego resolver para y para encontrar las coordenadas y de los puntos de intersección.",
        ],
      },
      examples: {
        title: "Ejemplos",
        example1: {
          title: "Ejemplo 1: Área entre dos funciones polinómicas",
          problem: "Encuentra el área entre las curvas y = x² y y = x + 2 en el intervalo donde se intersectan.",
          solution: "Primero, necesitamos encontrar los puntos de intersección:",
          step1: "Igualamos las ecuaciones: x² = x + 2",
          step2: "Reorganizamos a la forma estándar: x² - x - 2 = 0",
          step3: "Factorizamos o usamos la fórmula cuadrática: (x - 2)(x + 1) = 0",
          step4: "Resolvemos para x: x = 2 o x = -1",
          step5: "Para x ∈ [-1, 2], necesitamos determinar qué función es mayor:",
          step6: "En x = 0: f(0) = 0 y g(0) = 2, así que g(x) > f(x)",
          step7: "Planteamos la integral con g(x) - f(x):",
          step8: "Evaluamos la integral:",
          result: "Por lo tanto, el área entre las curvas es 4.5 unidades cuadradas.",
        },
        example2: {
          title: "Ejemplo 2: Usando el método horizontal",
          problem: "Encuentra el área encerrada por las curvas x = y² y x = 4 - y².",
          solution:
            "Para este ejemplo, usaremos el método horizontal ya que las curvas están expresadas como funciones de y:",
          step1: "Primero, encontramos los puntos de intersección igualando y² = 4 - y²",
          step2: "Resolvemos: 2y² = 4, así que y² = 2, dando y = ±√2",
          step3: "Las curvas se intersectan en y = √2 y y = -√2",
          step4:
            "Para y ∈ [-√2, √2], tenemos x = 4 - y² como la curva más a la derecha y x = y² como la curva más a la izquierda",
          step5: "Planteamos la integral:",
          step6: "Evaluamos la integral:",
          result: "Por lo tanto, el área encerrada por las curvas es 8 unidades cuadradas.",
        },
      },
      applications: {
        title: "Aplicaciones",
        content: "El concepto de área entre curvas tiene numerosas aplicaciones:",
        fields: [
          {
            name: "Física",
            applications: [
              "Trabajo realizado por una fuerza variable sobre un desplazamiento",
              "Trabajo presión-volumen en termodinámica",
              "Diferencia de potencial eléctrico",
            ],
          },
          {
            name: "Economía",
            applications: [
              "Excedente del consumidor y productor",
              "Análisis de bienestar económico",
              "Análisis costo-beneficio",
            ],
          },
          {
            name: "Ingeniería",
            applications: [
              "Análisis de tensión y deformación",
              "Flujo de fluidos entre límites",
              "Transferencia de calor entre superficies",
            ],
          },
        ],
      },
      commonMistakes: {
        title: "Errores Comunes",
        mistakes: [
          "No identificar correctamente qué curva está arriba/abajo o izquierda/derecha",
          "Usar límites de integración incorrectos",
          "Olvidar verificar dónde se intersectan las curvas",
          "No elegir el método apropiado (vertical vs. horizontal) basado en la forma de las funciones",
          "Configurar incorrectamente la integral restando en el orden incorrecto",
        ],
      },
      relatedTopics: [
        { name: "Área Bajo la Curva", path: "/topics/mathematics/integral-calculus-applications/area-under-curve" },
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
          link: "/resources/solved-problems?topic=area-between-curves",
          linkText: "Ver problemas",
        },
        {
          title: "Calculadora Interactiva",
          description: "Calcula áreas entre curvas con nuestra herramienta",
          link: "/resources/tools/area-calculator",
          linkText: "Usar calculadora",
        },
        {
          title: "Lecturas Recomendadas",
          description: "Libros y artículos sobre aplicaciones de integrales",
          link: "/resources/tools/bibliography",
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
                <MathDisplay math="A = \int_{a}^{b} [f(x) - g(x)] \, dx" />
              </div>
            </div>
          </section>

          {/* Methods Section */}
          <section>
            <h2 id="methods" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.methods.title}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">{currentContent.methods.vertical.title}</h3>
                <p>{currentContent.methods.vertical.content}</p>
                <div className="my-3 flex justify-center">
                  <MathDisplay math={currentContent.methods.vertical.formula} />
                </div>
                <p className="text-sm text-muted-foreground">{currentContent.methods.vertical.note}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">{currentContent.methods.horizontal.title}</h3>
                <p>{currentContent.methods.horizontal.content}</p>
                <div className="my-3 flex justify-center">
                  <MathDisplay math={currentContent.methods.horizontal.formula} />
                </div>
                <p className="text-sm text-muted-foreground">{currentContent.methods.horizontal.note}</p>
              </div>
            </div>
          </section>

          {/* Intersections Section */}
          <section>
            <h2 id="intersections" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.intersections.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>{currentContent.intersections.content}</p>
              <ul>
                {currentContent.intersections.steps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ul>
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
                        <MathDisplay math="x^2 = x + 2" />
                      </div>

                      <p>{currentContent.examples.example1.step2}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="x^2 - x - 2 = 0" />
                      </div>

                      <p>{currentContent.examples.example1.step3}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="(x - 2)(x + 1) = 0" />
                      </div>

                      <p>{currentContent.examples.example1.step4}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="x = 2 \text{ or } x = -1" />
                      </div>

                      <p>{currentContent.examples.example1.step5}</p>
                      <p>{currentContent.examples.example1.step6}</p>

                      <p>{currentContent.examples.example1.step7}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="A = \int_{-1}^{2} [(x + 2) - x^2] \, dx = \int_{-1}^{2} [x + 2 - x^2] \, dx" />
                      </div>

                      <p>{currentContent.examples.example1.step8}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay
                          math={`A = \\int_{-1}^{2} [x + 2 - x^2] \\, dx = \\left[ \\frac{x^2}{2} + 2x - \\frac{x^3}{3} \\right]_{-1}^{2} = \\left( \\frac{2^2}{2} + 2 \\cdot 2 - \\frac{2^3}{3} \\right) - \\left( \\frac{(-1)^2}{2} + 2 \\cdot (-1) - \\frac{(-1)^3}{3} \\right) = \\left( 2 + 4 - \\frac{8}{3} \\right) - \\left( \\frac{1}{2} - 2 + \\frac{1}{3} \\right) = \\frac{10}{3} + \\frac{7}{6} = \\frac{27}{6} = 4.5`}
                        />
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
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="y^2 = 4 - y^2" />
                      </div>

                      <p>{currentContent.examples.example2.step2}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="2y^2 = 4 \Rightarrow y^2 = 2 \Rightarrow y = \pm\sqrt{2}" />
                      </div>

                      <p>{currentContent.examples.example2.step3}</p>
                      <p>{currentContent.examples.example2.step4}</p>

                      <p>{currentContent.examples.example2.step5}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay
                          math={`A = \\int_{-\\sqrt{2}}^{\\sqrt{2}} [(4 - y^2) - y^2] \\, dy = \\int_{-\\sqrt{2}}^{\\sqrt{2}} [4 - 2y^2] \\, dy`}
                        />
                      </div>

                      <p>{currentContent.examples.example2.step6}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay
                          math={`A = \\int_{-\\sqrt{2}}^{\\sqrt{2}} [4 - 2y^2] \\, dy = \\left[ 4y - \\frac{2y^3}{3} \\right]_{-\\sqrt{2}}^{\\sqrt{2}} = \\left( 4\\sqrt{2} - \\frac{2(\\sqrt{2})^3}{3} \\right) - \\left( 4(-\\sqrt{2}) - \\frac{2(-\\sqrt{2})^3}{3} \\right) = 8\\sqrt{2} - \\frac{8\\sqrt{2}}{3} = \\frac{16\\sqrt{2}}{3} \\approx 7.54`}
                        />
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
                  <a href="#methods" className="text-muted-foreground hover:text-primary">
                    {currentContent.methods.title}
                  </a>
                </li>
                <li>
                  <a href="#intersections" className="text-muted-foreground hover:text-primary">
                    {currentContent.intersections.title}
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
