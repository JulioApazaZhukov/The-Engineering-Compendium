"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function VolumeSolidsRevolutionPage() {
  const { language } = useLanguage()
  const [activeExample, setActiveExample] = useState<number | null>(null)

  const toggleExample = (index: number) => {
    setActiveExample(activeExample === index ? null : index)
  }

  // Content for both languages
  const content = {
    en: {
      title: "Volume of Solids of Revolution",
      subtitle: "Calculating volumes of three-dimensional objects formed by rotation",
      backLink: "Back to Applications of Integral Calculus",
      introduction:
        "Solids of revolution are three-dimensional objects formed by rotating a two-dimensional region around an axis. Calculating their volumes is a powerful application of integral calculus that has numerous applications in engineering, physics, and design.",
      methods: {
        title: "Methods for Calculating Volumes",
        disc: {
          title: "Disc Method",
          content: "Used when the region is rotated around an axis that forms one of its boundaries:",
          formula: "V = \\pi \\int_{a}^{b} [f(x)]^2 \\, dx",
          note: "For rotation around the x-axis, where f(x) represents the distance from the x-axis to the curve.",
        },
        washer: {
          title: "Washer Method",
          content: "Used when the region is bounded by two curves and rotated around an axis:",
          formula: "V = \\pi \\int_{a}^{b} [(R(x))^2 - (r(x))^2] \\, dx",
          note: "For rotation around the x-axis, where R(x) is the outer radius function and r(x) is the inner radius function.",
        },
        shell: {
          title: "Shell Method",
          content: "Used when the region is rotated around an axis that is not one of its boundaries:",
          formula: "V = 2\\pi \\int_{a}^{b} x \\cdot f(x) \\, dx",
          note: "For rotation around the y-axis, where x is the distance from the y-axis to the shell and f(x) is the height of the shell.",
        },
      },
      axisChoice: {
        title: "Choosing the Axis of Revolution",
        content: "The choice of axis affects which method is most appropriate:",
        points: [
          "Rotation around the x-axis: Use the disc or washer method with y = f(x)",
          "Rotation around the y-axis: Use the disc or washer method with x = g(y), or the shell method with y = f(x)",
          "Rotation around a horizontal line y = k: Use the washer method with adjusted radii",
          "Rotation around a vertical line x = k: Use the shell method with adjusted distances",
        ],
      },
      examples: {
        title: "Examples",
        example1: {
          title: "Example 1: Disc Method",
          problem:
            "Find the volume of the solid formed by rotating the region bounded by y = x² and the x-axis from x = 0 to x = 2 around the x-axis.",
          solution: "We'll use the disc method since we're rotating around the x-axis:",
          step1: "Identify the function: f(x) = x²",
          step2: "Set up the integral using the disc method:",
          step3: "Evaluate the integral:",
          result:
            "Therefore, the volume of the solid of revolution is 8π/5 cubic units (approximately 5.03 cubic units).",
        },
        example2: {
          title: "Example 2: Washer Method",
          problem:
            "Find the volume of the solid formed by rotating the region bounded by y = x and y = x² around the x-axis.",
          solution: "We'll use the washer method since the region is bounded by two curves:",
          step1: "First, find the points of intersection: x = x², so x(1-x) = 0, giving x = 0 and x = 1",
          step2: "Determine which function forms the outer radius: For 0 ≤ x ≤ 1, y = x is above y = x²",
          step3: "Set up the integral using the washer method:",
          step4: "Evaluate the integral:",
          result:
            "Therefore, the volume of the solid of revolution is π/6 cubic units (approximately 0.52 cubic units).",
        },
        example3: {
          title: "Example 3: Shell Method",
          problem:
            "Find the volume of the solid formed by rotating the region bounded by y = x², the y-axis, and y = 4 around the y-axis.",
          solution: "We'll use the shell method since we're rotating around the y-axis:",
          step1: "Express x in terms of y: x = √y for 0 ≤ y ≤ 4",
          step2: "Set up the integral using the shell method:",
          step3: "Evaluate the integral:",
          result:
            "Therefore, the volume of the solid of revolution is 8π cubic units (approximately 25.13 cubic units).",
        },
      },
      applications: {
        title: "Applications",
        content: "The concept of solids of revolution has numerous applications:",
        fields: [
          {
            name: "Engineering",
            applications: [
              "Designing axisymmetric objects like bottles, vases, and containers",
              "Calculating volumes of tanks, pipes, and pressure vessels",
              "Determining moments of inertia for rotating machinery",
            ],
          },
          {
            name: "Physics",
            applications: [
              "Calculating mass and center of mass for objects with radial symmetry",
              "Determining fluid displacement and buoyancy",
              "Analyzing gravitational fields of spherically symmetric bodies",
            ],
          },
          {
            name: "Computer Graphics",
            applications: [
              "Generating 3D models from 2D profiles",
              "Creating surfaces of revolution for rendering",
              "Simulating lathe operations in CAD software",
            ],
          },
        ],
      },
      commonMistakes: {
        title: "Common Mistakes",
        mistakes: [
          "Choosing the wrong method for the given axis of revolution",
          "Incorrectly identifying the inner and outer radius functions",
          "Using x instead of y (or vice versa) as the variable of integration",
          "Forgetting to square the radius functions in the disc and washer methods",
          "Not adjusting the limits of integration when changing variables",
        ],
      },
      relatedTopics: [
        { name: "Area Under a Curve", path: "/topics/mathematics/integral-calculus-applications/area-under-curve" },
        { name: "Area Between Curves", path: "/topics/mathematics/integral-calculus-applications/area-between-curves" },
        {
          name: "Integration Techniques",
          path: "/topics/mathematics/integral-calculus/integration-methods/integration-by-substitution",
        },
        { name: "Integral Calculus", path: "/topics/mathematics/integral-calculus" },
      ],
      resources: [
        {
          title: "Solved Problems",
          description: "Practice with step-by-step solutions",
          link: "/resources/solved-problems?topic=volume-solids-revolution",
          linkText: "View problems",
        },
        {
          title: "Interactive Calculator",
          description: "Calculate volumes with our tool",
          link: "/resources/tools/volume-calculator",
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
      title: "Volumen de Sólidos de Revolución",
      subtitle: "Calculando volúmenes de objetos tridimensionales formados por rotación",
      backLink: "Volver a Aplicaciones del Cálculo Integral",
      introduction:
        "Los sólidos de revolución son objetos tridimensionales formados al rotar una región bidimensional alrededor de un eje. Calcular sus volúmenes es una poderosa aplicación del cálculo integral que tiene numerosas aplicaciones en ingeniería, física y diseño.",
      methods: {
        title: "Métodos para Calcular Volúmenes",
        disc: {
          title: "Método del Disco",
          content: "Se utiliza cuando la región se rota alrededor de un eje que forma uno de sus límites:",
          formula: "V = \\pi \\int_{a}^{b} [f(x)]^2 \\, dx",
          note: "Para rotación alrededor del eje x, donde f(x) representa la distancia desde el eje x hasta la curva.",
        },
        washer: {
          title: "Método de la Arandela",
          content: "Se utiliza cuando la región está limitada por dos curvas y se rota alrededor de un eje:",
          formula: "V = \\pi \\int_{a}^{b} [(R(x))^2 - (r(x))^2] \\, dx",
          note: "Para rotación alrededor del eje x, donde R(x) es la función del radio exterior y r(x) es la función del radio interior.",
        },
        shell: {
          title: "Método de la Cáscara",
          content: "Se utiliza cuando la región se rota alrededor de un eje que no es uno de sus límites:",
          formula: "V = 2\\pi \\int_{a}^{b} x \\cdot f(x) \\, dx",
          note: "Para rotación alrededor del eje y, donde x es la distancia desde el eje y hasta la cáscara y f(x) es la altura de la cáscara.",
        },
      },
      axisChoice: {
        title: "Eligiendo el Eje de Revolución",
        content: "La elección del eje afecta qué método es más apropiado:",
        points: [
          "Rotación alrededor del eje x: Usar el método del disco o arandela con y = f(x)",
          "Rotación alrededor del eje y: Usar el método del disco o arandela con x = g(y), o el método de la cáscara con y = f(x)",
          "Rotación alrededor de una línea horizontal y = k: Usar el método de la arandela con radios ajustados",
          "Rotación alrededor de una línea vertical x = k: Usar el método de la cáscara con distancias ajustadas",
        ],
      },
      examples: {
        title: "Ejemplos",
        example1: {
          title: "Ejemplo 1: Método del Disco",
          problem:
            "Encuentra el volumen del sólido formado al rotar la región limitada por y = x² y el eje x desde x = 0 hasta x = 2 alrededor del eje x.",
          solution: "Usaremos el método del disco ya que estamos rotando alrededor del eje x:",
          step1: "Identificamos la función: f(x) = x²",
          step2: "Planteamos la integral usando el método del disco:",
          step3: "Evaluamos la integral:",
          result:
            "Por lo tanto, el volumen del sólido de revolución es 8π/5 unidades cúbicas (aproximadamente 5.03 unidades cúbicas).",
        },
        example2: {
          title: "Ejemplo 2: Método de la Arandela",
          problem:
            "Encuentra el volumen del sólido formado al rotar la región limitada por y = x y y = x² alrededor del eje x.",
          solution: "Usaremos el método de la arandela ya que la región está limitada por dos curvas:",
          step1: "Primero, encontramos los puntos de intersección: x = x², así que x(1-x) = 0, dando x = 0 y x = 1",
          step2: "Determinamos qué función forma el radio exterior: Para 0 ≤ x ≤ 1, y = x está por encima de y = x²",
          step3: "Planteamos la integral usando el método de la arandela:",
          step4: "Evaluamos la integral:",
          result:
            "Por lo tanto, el volumen del sólido de revolución es π/6 unidades cúbicas (aproximadamente 0.52 unidades cúbicas).",
        },
        example3: {
          title: "Ejemplo 3: Método de la Cáscara",
          problem:
            "Encuentra el volumen del sólido formado al rotar la región limitada por y = x², el eje y, y y = 4 alrededor del eje y.",
          solution: "Usaremos el método de la cáscara ya que estamos rotando alrededor del eje y:",
          step1: "Expresamos x en términos de y: x = √y para 0 ≤ y ≤ 4",
          step2: "Planteamos la integral usando el método de la cáscara:",
          step3: "Evaluamos la integral:",
          result:
            "Por lo tanto, el volumen del sólido de revolución es 8π unidades cúbicas (aproximadamente 25.13 unidades cúbicas).",
        },
      },
      applications: {
        title: "Aplicaciones",
        content: "El concepto de sólidos de revolución tiene numerosas aplicaciones:",
        fields: [
          {
            name: "Ingeniería",
            applications: [
              "Diseño de objetos axisimétricos como botellas, jarrones y contenedores",
              "Cálculo de volúmenes de tanques, tuberías y recipientes a presión",
              "Determinación de momentos de inercia para maquinaria rotativa",
            ],
          },
          {
            name: "Física",
            applications: [
              "Cálculo de masa y centro de masa para objetos con simetría radial",
              "Determinación de desplazamiento de fluidos y flotabilidad",
              "Análisis de campos gravitacionales de cuerpos esféricamente simétricos",
            ],
          },
          {
            name: "Gráficos por Computadora",
            applications: [
              "Generación de modelos 3D a partir de perfiles 2D",
              "Creación de superficies de revolución para renderizado",
              "Simulación de operaciones de torno en software CAD",
            ],
          },
        ],
      },
      commonMistakes: {
        title: "Errores Comunes",
        mistakes: [
          "Elegir el método incorrecto para el eje de revolución dado",
          "Identificar incorrectamente las funciones de radio interior y exterior",
          "Usar x en lugar de y (o viceversa) como variable de integración",
          "Olvidar elevar al cuadrado las funciones de radio en los métodos del disco y la arandela",
          "No ajustar los límites de integración al cambiar variables",
        ],
      },
      relatedTopics: [
        { name: "Área Bajo una Curva", path: "/topics/mathematics/integral-calculus-applications/area-under-curve" },
        { name: "Área Entre Curvas", path: "/topics/mathematics/integral-calculus-applications/area-between-curves" },
        {
          name: "Técnicas de Integración",
          path: "/topics/mathematics/integral-calculus/integration-methods/integration-by-substitution",
        },
        { name: "Cálculo Integral", path: "/topics/mathematics/integral-calculus" },
      ],
      resources: [
        {
          title: "Problemas Resueltos",
          description: "Practica con soluciones paso a paso",
          link: "/resources/solved-problems?topic=volume-solids-revolution",
          linkText: "Ver problemas",
        },
        {
          title: "Calculadora Interactiva",
          description: "Calcula volúmenes con nuestra herramienta",
          link: "/resources/tools/volume-calculator",
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

          {/* Methods Section */}
          <section>
            <h2 id="methods" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.methods.title}
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">{currentContent.methods.disc.title}</h3>
                <p>{currentContent.methods.disc.content}</p>
                <div className="my-3 flex justify-center">
                  <MathDisplay math={currentContent.methods.disc.formula} />
                </div>
                <p className="text-sm text-muted-foreground">{currentContent.methods.disc.note}</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">{currentContent.methods.washer.title}</h3>
                <p>{currentContent.methods.washer.content}</p>
                <div className="my-3 flex justify-center">
                  <MathDisplay math={currentContent.methods.washer.formula} />
                </div>
                <p className="text-sm text-muted-foreground">{currentContent.methods.washer.note}</p>
              </div>

              <div>
                <h3 className="text-xl font-medium mb-2">{currentContent.methods.shell.title}</h3>
                <p>{currentContent.methods.shell.content}</p>
                <div className="my-3 flex justify-center">
                  <MathDisplay math={currentContent.methods.shell.formula} />
                </div>
                <p className="text-sm text-muted-foreground">{currentContent.methods.shell.note}</p>
              </div>
            </div>
          </section>

          {/* Axis Choice Section */}
          <section>
            <h2 id="axis-choice" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.axisChoice.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>{currentContent.axisChoice.content}</p>
              <ul>
                {currentContent.axisChoice.points.map((point, index) => (
                  <li key={index}>{point}</li>
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

                      <p>{currentContent.examples.example1.step2}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="V = \pi \int_{0}^{2} [x^2]^2 \, dx = \pi \int_{0}^{2} x^4 \, dx" />
                      </div>

                      <p>{currentContent.examples.example1.step3}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="V = \pi \int_{0}^{2} x^4 \, dx = \pi \left[ \frac{x^5}{5} \right]_{0}^{2} = \pi \left( \frac{2^5}{5} - \frac{0^5}{5} \right) = \pi \cdot \frac{32}{5} = \frac{32\pi}{5}" />
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

                      <p>{currentContent.examples.example2.step3}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="V = \pi \int_{0}^{1} [(x)^2 - (x^2)^2] \, dx = \pi \int_{0}^{1} [x^2 - x^4] \, dx" />
                      </div>

                      <p>{currentContent.examples.example2.step4}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="V = \pi \int_{0}^{1} [x^2 - x^4] \, dx = \pi \left[ \frac{x^3}{3} - \frac{x^5}{5} \right]_{0}^{1} = \pi \left( \frac{1^3}{3} - \frac{1^5}{5} - \frac{0^3}{3} + \frac{0^5}{5} \right) = \pi \left( \frac{1}{3} - \frac{1}{5} \right) = \pi \cdot \frac{2}{15} = \frac{2\pi}{15}" />
                      </div>

                      <p className="font-medium">{currentContent.examples.example2.result}</p>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Example 3 */}
              <Card className="overflow-hidden">
                <div
                  className="p-4 bg-muted cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExample(3)}
                >
                  <h3 className="font-medium">{currentContent.examples.example3.title}</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{currentContent.examples.example3.problem}</strong>
                      </p>
                      <p>{currentContent.examples.example3.solution}</p>

                      <p>{currentContent.examples.example3.step1}</p>

                      <p>{currentContent.examples.example3.step2}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="V = 2\pi \int_{0}^{4} \sqrt{y} \cdot 1 \, dy = 2\pi \int_{0}^{4} \sqrt{y} \, dy" />
                      </div>

                      <p>{currentContent.examples.example3.step3}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math="V = 2\pi \int_{0}^{4} \sqrt{y} \, dy = 2\pi \int_{0}^{4} y^{1/2} \, dy = 2\pi \left[ \frac{y^{3/2}}{3/2} \right]_{0}^{4} = 2\pi \left[ \frac{2y^{3/2}}{3} \right]_{0}^{4} = 2\pi \left( \frac{2 \cdot 4^{3/2}}{3} - \frac{2 \cdot 0^{3/2}}{3} \right) = 2\pi \left( \frac{2 \cdot 8}{3} - 0 \right) = 2\pi \cdot \frac{16}{3} = \frac{32\pi}{3}" />
                      </div>

                      <p className="font-medium">{currentContent.examples.example3.result}</p>
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
                  <a href="#methods" className="text-primary hover:underline">
                    {currentContent.methods.title}
                  </a>
                </li>
                <li>
                  <a href="#axis-choice" className="text-muted-foreground hover:text-primary">
                    {currentContent.axisChoice.title}
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
