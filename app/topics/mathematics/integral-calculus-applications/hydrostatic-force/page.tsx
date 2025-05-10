"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function HydrostaticForcePage() {
  const { language } = useLanguage()
  const [activeExample, setActiveExample] = useState<number | null>(null)

  const toggleExample = (index: number) => {
    setActiveExample(activeExample === index ? null : index)
  }

  // Content for both languages
  const content = {
    en: {
      title: "Hydrostatic Force",
      subtitle: "Calculate the force exerted by a fluid on a submerged surface",
      backLink: "Back to Applications of Integral Calculus",
      introduction:
        "Hydrostatic force is the force exerted by a fluid at rest on a submerged surface due to the pressure of the fluid. This concept is fundamental in fluid mechanics, civil engineering, and naval architecture. Integral calculus provides a powerful method for calculating these forces on surfaces of various shapes and orientations.",
      principle: {
        title: "Principle of Hydrostatic Force",
        description:
          "The pressure at any point in a fluid at rest varies linearly with depth. This pressure, acting on a submerged surface, creates a force that can be calculated using integration.",
        pressureFormula: "P = \\rho g h",
        pressureWhere: "where:",
        pressureWhereDescription: [
          "P is the pressure at a point",
          "\\rho (rho) is the density of the fluid",
          "g is the acceleration due to gravity",
          "h is the depth of the point below the fluid surface",
        ],
      },
      formula: {
        title: "Hydrostatic Force Formula",
        description:
          "For a vertical or inclined planar surface submerged in a fluid, the total hydrostatic force can be calculated using the following integral:",
        formula: "F = \\int_a^b \\rho g h(x) w(x) \\, dx",
        where: "where:",
        whereDescription: [
          "F is the total hydrostatic force",
          "\\rho g is the specific weight of the fluid",
          "h(x) is the depth function",
          "w(x) is the width function of the surface at depth x",
          "[a, b] are the limits of integration representing the depth range",
        ],
        centroidFormula: "F = \\rho g \\bar{h} A",
        centroidWhere: "Alternatively, using the centroid of the surface:",
        centroidWhereDescription: [
          "\\bar{h} is the depth of the centroid of the surface",
          "A is the total area of the submerged surface",
        ],
      },
      examples: {
        title: "Examples",
        example1: {
          title: "Example: Rectangular Gate",
          problem:
            "Calculate the hydrostatic force on a vertical rectangular gate that is 4 meters wide and 3 meters high, with its top edge 2 meters below the water surface. Assume the density of water is 1000 kg/m³ and g = 9.8 m/s².",
          solution: "We'll solve this problem using both the centroid method and the integral method:",
          step1: "1. Identify the dimensions and set up a coordinate system:",
          step1Description:
            "Let's place the origin at the water surface, with the positive y-axis pointing downward. The gate extends from y = 2 m to y = 5 m, with a constant width of 4 m.",
          step2: "2. Calculate the hydrostatic force using the centroid method:",
          step2a: "First, find the area of the gate:",
          step2aFormula:
            "A = \\text{width} \\times \\text{height} = 4 \\text{ m} \\times 3 \\text{ m} = 12 \\text{ m}^2",
          step2b: "Next, find the depth of the centroid of the gate:",
          step2bFormula: "\\bar{h} = 2 \\text{ m} + \\frac{3 \\text{ m}}{2} = 3.5 \\text{ m}",
          step2c: "Calculate the hydrostatic force:",
          step2cFormula:
            "F = \\rho g \\bar{h} A = 1000 \\text{ kg/m}^3 \\times 9.8 \\text{ m/s}^2 \\times 3.5 \\text{ m} \\times 12 \\text{ m}^2",
          step2dFormula: "F = 411,600 \\text{ N} = 411.6 \\text{ kN}",
          step3: "3. Alternatively, using the integral method:",
          step3a: "Set up the integral with y as the variable of integration:",
          step3aFormula: "F = \\int_2^5 \\rho g y \\cdot 4 \\, dy = 4\\rho g \\int_2^5 y \\, dy",
          step3b: "Evaluate the integral:",
          step3bFormula:
            "F = 4\\rho g \\left[ \\frac{y^2}{2} \\right]_2^5 = 4\\rho g \\left( \\frac{5^2}{2} - \\frac{2^2}{2} \\right) = 4\\rho g \\left( \\frac{25 - 4}{2} \\right) = 4\\rho g \\cdot \\frac{21}{2}",
          step3cFormula:
            "F = 4 \\times 1000 \\text{ kg/m}^3 \\times 9.8 \\text{ m/s}^2 \\times \\frac{21}{2} \\text{ m}^2 = 411,600 \\text{ N} = 411.6 \\text{ kN}",
        },
      },
      applications: {
        title: "Applications",
        content: "Hydrostatic force calculations are essential in various fields:",
        list: [
          "Dam design and analysis",
          "Ship and submarine hull design",
          "Water tank and reservoir engineering",
          "Floodgate and lock design",
          "Underwater structures and pipelines",
        ],
      },
      considerations: {
        title: "Important Considerations",
        list: [
          "The force acts perpendicular to the submerged surface",
          "The point of application of the force (center of pressure) is below the centroid of the surface",
          "For non-rectangular surfaces, the width function w(x) must be determined based on the geometry",
          "For inclined surfaces, the depth must be measured perpendicular to the fluid surface",
          "Different fluids have different densities, affecting the magnitude of the force",
        ],
      },
      relatedTopics: [
        { name: "Fluid Statics", path: "/topics/physics/fluid-mechanics/fluid-statics" },
        { name: "Center of Pressure", path: "/topics/physics/fluid-mechanics/center-of-pressure" },
        { name: "Applications of Integration", path: "/topics/mathematics/integral-calculus-applications" },
        { name: "Integral Calculus", path: "/topics/mathematics/integral-calculus" },
      ],
      resources: [
        {
          title: "Solved Problems",
          description: "Practice with step-by-step solutions",
          link: "/resources/solved-problems?topic=hydrostatic-force",
          linkText: "View problems",
        },
        {
          title: "Interactive Calculator",
          description: "Calculate hydrostatic forces with our tool",
          link: "/resources/tools/hydrostatic-calculator",
          linkText: "Use calculator",
        },
        {
          title: "Recommended Reading",
          description: "Books and articles on fluid mechanics",
          link: "/resources/bibliography?topic=fluid-mechanics",
          linkText: "View bibliography",
        },
      ],
    },
    es: {
      title: "Fuerza Hidrostática",
      subtitle: "Calcula la fuerza ejercida por un fluido sobre una superficie sumergida",
      backLink: "Volver a Aplicaciones del Cálculo Integral",
      introduction:
        "La fuerza hidrostática es la fuerza ejercida por un fluido en reposo sobre una superficie sumergida debido a la presión del fluido. Este concepto es fundamental en mecánica de fluidos, ingeniería civil y arquitectura naval. El cálculo integral proporciona un método poderoso para calcular estas fuerzas en superficies de diversas formas y orientaciones.",
      principle: {
        title: "Principio de la Fuerza Hidrostática",
        description:
          "La presión en cualquier punto de un fluido en reposo varía linealmente con la profundidad. Esta presión, actuando sobre una superficie sumergida, crea una fuerza que puede calcularse mediante integración.",
        pressureFormula: "P = \\rho g h",
        pressureWhere: "donde:",
        pressureWhereDescription: [
          "P es la presión en un punto",
          "\\rho (rho) es la densidad del fluido",
          "g es la aceleración debida a la gravedad",
          "h es la profundidad del punto bajo la superficie del fluido",
        ],
      },
      formula: {
        title: "Fórmula de la Fuerza Hidrostática",
        description:
          "Para una superficie plana vertical o inclinada sumergida en un fluido, la fuerza hidrostática total puede calcularse utilizando la siguiente integral:",
        formula: "F = \\int_a^b \\rho g h(x) w(x) \\, dx",
        where: "donde:",
        whereDescription: [
          "F es la fuerza hidrostática total",
          "\\rho g es el peso específico del fluido",
          "h(x) es la función de profundidad",
          "w(x) es la función de anchura de la superficie a la profundidad x",
          "[a, b] son los límites de integración que representan el rango de profundidad",
        ],
        centroidFormula: "F = \\rho g \\bar{h} A",
        centroidWhere: "Alternativamente, utilizando el centroide de la superficie:",
        centroidWhereDescription: [
          "\\bar{h} es la profundidad del centroide de la superficie",
          "A es el área total de la superficie sumergida",
        ],
      },
      examples: {
        title: "Ejemplos",
        example1: {
          title: "Ejemplo: Compuerta Rectangular",
          problem:
            "Calcula la fuerza hidrostática sobre una compuerta rectangular vertical que tiene 4 metros de ancho y 3 metros de alto, con su borde superior a 2 metros por debajo de la superficie del agua. Asume que la densidad del agua es 1000 kg/m³ y g = 9.8 m/s².",
          solution: "Resolveremos este problema utilizando tanto el método del centroide como el método integral:",
          step1: "1. Identifica las dimensiones y establece un sistema de coordenadas:",
          step1Description:
            "Coloquemos el origen en la superficie del agua, con el eje y positivo apuntando hacia abajo. La compuerta se extiende desde y = 2 m hasta y = 5 m, con un ancho constante de 4 m.",
          step2: "2. Calcula la fuerza hidrostática utilizando el método del centroide:",
          step2a: "Primero, encuentra el área de la compuerta:",
          step2aFormula:
            "A = \\text{ancho} \\times \\text{altura} = 4 \\text{ m} \\times 3 \\text{ m} = 12 \\text{ m}^2",
          step2b: "Luego, encuentra la profundidad del centroide de la compuerta:",
          step2bFormula: "\\bar{h} = 2 \\text{ m} + \\frac{3 \\text{ m}}{2} = 3.5 \\text{ m}",
          step2c: "Calcula la fuerza hidrostática:",
          step2cFormula:
            "F = \\rho g \\bar{h} A = 1000 \\text{ kg/m}^3 \\times 9.8 \\text{ m/s}^2 \\times 3.5 \\text{ m} \\times 12 \\text{ m}^2",
          step2dFormula: "F = 411,600 \\text{ N} = 411.6 \\text{ kN}",
          step3: "3. Alternativamente, utilizando el método integral:",
          step3a: "Establece la integral con y como la variable de integración:",
          step3aFormula: "F = \\int_2^5 \\rho g y \\cdot 4 \\, dy = 4\\rho g \\int_2^5 y \\, dy",
          step3b: "Evalúa la integral:",
          step3bFormula:
            "F = 4\\rho g \\left[ \\frac{y^2}{2} \\right]_2^5 = 4\\rho g \\left( \\frac{5^2}{2} - \\frac{2^2}{2} \\right) = 4\\rho g \\left( \\frac{25 - 4}{2} \\right) = 4\\rho g \\cdot \\frac{21}{2}",
          step3cFormula:
            "F = 4 \\times 1000 \\text{ kg/m}^3 \\times 9.8 \\text{ m/s}^2 \\times \\frac{21}{2} \\text{ m}^2 = 411,600 \\text{ N} = 411.6 \\text{ kN}",
        },
      },
      applications: {
        title: "Aplicaciones",
        content: "Los cálculos de fuerza hidrostática son esenciales en varios campos:",
        list: [
          "Diseño y análisis de presas",
          "Diseño de cascos de barcos y submarinos",
          "Ingeniería de tanques de agua y embalses",
          "Diseño de compuertas y esclusas",
          "Estructuras y tuberías submarinas",
        ],
      },
      considerations: {
        title: "Consideraciones Importantes",
        list: [
          "La fuerza actúa perpendicular a la superficie sumergida",
          "El punto de aplicación de la fuerza (centro de presión) está por debajo del centroide de la superficie",
          "Para superficies no rectangulares, la función de anchura w(x) debe determinarse según la geometría",
          "Para superficies inclinadas, la profundidad debe medirse perpendicular a la superficie del fluido",
          "Diferentes fluidos tienen diferentes densidades, afectando la magnitud de la fuerza",
        ],
      },
      relatedTopics: [
        { name: "Estática de Fluidos", path: "/topics/physics/fluid-mechanics/fluid-statics" },
        { name: "Centro de Presión", path: "/topics/physics/fluid-mechanics/center-of-pressure" },
        { name: "Aplicaciones de Integración", path: "/topics/mathematics/integral-calculus-applications" },
        { name: "Cálculo Integral", path: "/topics/mathematics/integral-calculus" },
      ],
      resources: [
        {
          title: "Problemas Resueltos",
          description: "Practica con soluciones paso a paso",
          link: "/resources/solved-problems?topic=hydrostatic-force",
          linkText: "Ver problemas",
        },
        {
          title: "Calculadora Interactiva",
          description: "Calcula fuerzas hidrostáticas con nuestra herramienta",
          link: "/resources/tools/hydrostatic-calculator",
          linkText: "Usar calculadora",
        },
        {
          title: "Lecturas Recomendadas",
          description: "Libros y artículos sobre mecánica de fluidos",
          link: "/resources/bibliography?topic=fluid-mechanics",
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

          {/* Principle Section */}
          <section>
            <h2 id="principle" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.principle.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>{currentContent.principle.description}</p>

              <div className="my-4 flex justify-center">
                <MathDisplay math={currentContent.principle.pressureFormula} />
              </div>

              <p className="font-medium">{currentContent.principle.pressureWhere}</p>
              <ul>
                {currentContent.principle.pressureWhereDescription.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Formula Section */}
          <section>
            <h2 id="formula" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.formula.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>{currentContent.formula.description}</p>

              <div className="my-4 flex justify-center">
                <MathDisplay math={currentContent.formula.formula} />
              </div>

              <p className="font-medium">{currentContent.formula.where}</p>
              <ul>
                {currentContent.formula.whereDescription.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>

              <div className="my-4 flex justify-center">
                <MathDisplay math={currentContent.formula.centroidFormula} />
              </div>

              <p className="font-medium">{currentContent.formula.centroidWhere}</p>
              <ul>
                {currentContent.formula.centroidWhereDescription.map((item, index) => (
                  <li key={index}>{item}</li>
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
                      <p className="ml-4">{currentContent.examples.example1.step1Description}</p>

                      <p>{currentContent.examples.example1.step2}</p>
                      <p className="ml-4">{currentContent.examples.example1.step2a}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math={currentContent.examples.example1.step2aFormula} />
                      </div>

                      <p className="ml-4">{currentContent.examples.example1.step2b}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math={currentContent.examples.example1.step2bFormula} />
                      </div>

                      <p className="ml-4">{currentContent.examples.example1.step2c}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math={currentContent.examples.example1.step2cFormula} />
                      </div>

                      <div className="my-2 flex justify-center">
                        <MathDisplay math={currentContent.examples.example1.step2dFormula} />
                      </div>

                      <p>{currentContent.examples.example1.step3}</p>
                      <p className="ml-4">{currentContent.examples.example1.step3a}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math={currentContent.examples.example1.step3aFormula} />
                      </div>

                      <p className="ml-4">{currentContent.examples.example1.step3b}</p>
                      <div className="my-2 flex justify-center">
                        <MathDisplay math={currentContent.examples.example1.step3bFormula} />
                      </div>

                      <div className="my-2 flex justify-center">
                        <MathDisplay math={currentContent.examples.example1.step3cFormula} />
                      </div>
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
              <ul>
                {currentContent.applications.list.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Considerations Section */}
          <section>
            <h2 id="considerations" className="text-2xl font-bold mb-4 scroll-mt-16">
              {currentContent.considerations.title}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <ul>
                {currentContent.considerations.list.map((item, index) => (
                  <li key={index}>{item}</li>
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
                  <a href="#principle" className="text-primary hover:underline">
                    {currentContent.principle.title}
                  </a>
                </li>
                <li>
                  <a href="#formula" className="text-muted-foreground hover:text-primary">
                    {currentContent.formula.title}
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
                  <a href="#considerations" className="text-muted-foreground hover:text-primary">
                    {currentContent.considerations.title}
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
