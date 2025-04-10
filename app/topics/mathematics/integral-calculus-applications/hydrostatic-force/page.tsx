"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function HydrostaticForcePage() {
  const { language } = useLanguage()

  // Content for both languages
  const content = {
    en: {
      title: "Hydrostatic Force",
      description: "Calculate the force exerted by a fluid on a submerged surface.",
      backLink: "Back to Applications",
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
      example: {
        title: "Example",
        problem:
          "Calculate the hydrostatic force on a vertical rectangular gate that is 4 meters wide and 3 meters high, with its top edge 2 meters below the water surface. Assume the density of water is 1000 kg/m³ and g = 9.8 m/s².",
        solution: {
          title: "Solution:",
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
        description: "Hydrostatic force calculations are essential in various fields:",
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
    },
    es: {
      title: "Fuerza Hidrostática",
      description: "Calcula la fuerza ejercida por un fluido sobre una superficie sumergida.",
      backLink: "Volver a Aplicaciones",
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
      example: {
        title: "Ejemplo",
        problem:
          "Calcula la fuerza hidrostática sobre una compuerta rectangular vertical que tiene 4 metros de ancho y 3 metros de alto, con su borde superior a 2 metros por debajo de la superficie del agua. Asume que la densidad del agua es 1000 kg/m³ y g = 9.8 m/s².",
        solution: {
          title: "Solución:",
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
        description: "Los cálculos de fuerza hidrostática son esenciales en varios campos:",
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
    },
  }

  const currentContent = language === "es" ? content.es : content.en

  return (
    <div className="container py-8">
      <div className="flex justify-start mb-8">
        <Button variant="outline" asChild className="gap-1">
          <Link href="/topics/mathematics/integral-calculus-applications">
            <ArrowLeft className="h-4 w-4" />
            {currentContent.backLink}
          </Link>
        </Button>
      </div>

      <div className="space-y-8 max-w-4xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">{currentContent.title}</h1>
          <p className="text-xl text-muted-foreground">{currentContent.description}</p>
        </div>

        <div>
          <p className="mb-6">{currentContent.introduction}</p>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">{currentContent.principle.title}</h2>
          <p className="mb-4">{currentContent.principle.description}</p>

          <div className="flex justify-center my-4">
            <MathDisplay math={currentContent.principle.pressureFormula} />
          </div>

          <div>
            <p className="font-medium mb-2">{currentContent.principle.pressureWhere}</p>
            <ul className="list-disc pl-6 space-y-1">
              {currentContent.principle.pressureWhereDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">{currentContent.formula.title}</h2>
          <p className="mb-4">{currentContent.formula.description}</p>

          <div className="flex justify-center my-4">
            <MathDisplay math={currentContent.formula.formula} />
          </div>

          <div className="mb-4">
            <p className="font-medium mb-2">{currentContent.formula.where}</p>
            <ul className="list-disc pl-6 space-y-1">
              {currentContent.formula.whereDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center my-4">
            <MathDisplay math={currentContent.formula.centroidFormula} />
          </div>

          <div>
            <p className="font-medium mb-2">{currentContent.formula.centroidWhere}</p>
            <ul className="list-disc pl-6 space-y-1">
              {currentContent.formula.centroidWhereDescription.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">{currentContent.example.title}</h2>
          <p className="mb-4 font-medium">{currentContent.example.problem}</p>

          <div>
            <p className="font-semibold mb-2">{currentContent.example.solution.title}</p>

            <div className="space-y-4">
              <div>
                <p>{currentContent.example.solution.step1}</p>
                <p className="ml-4 my-2">{currentContent.example.solution.step1Description}</p>
              </div>

              <div>
                <p>{currentContent.example.solution.step2}</p>
                <p className="ml-4 my-2">{currentContent.example.solution.step2a}</p>
                <div className="flex justify-center my-2">
                  <MathDisplay math={currentContent.example.solution.step2aFormula} />
                </div>

                <p className="ml-4 my-2">{currentContent.example.solution.step2b}</p>
                <div className="flex justify-center my-2">
                  <MathDisplay math={currentContent.example.solution.step2bFormula} />
                </div>

                <p className="ml-4 my-2">{currentContent.example.solution.step2c}</p>
                <div className="flex justify-center my-2">
                  <MathDisplay math={currentContent.example.solution.step2cFormula} />
                </div>

                <div className="flex justify-center my-2">
                  <MathDisplay math={currentContent.example.solution.step2dFormula} />
                </div>
              </div>

              <div>
                <p>{currentContent.example.solution.step3}</p>
                <p className="ml-4 my-2">{currentContent.example.solution.step3a}</p>
                <div className="flex justify-center my-2">
                  <MathDisplay math={currentContent.example.solution.step3aFormula} />
                </div>

                <p className="ml-4 my-2">{currentContent.example.solution.step3b}</p>
                <div className="flex justify-center my-2">
                  <MathDisplay math={currentContent.example.solution.step3bFormula} />
                </div>

                <div className="flex justify-center my-2">
                  <MathDisplay math={currentContent.example.solution.step3cFormula} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">{currentContent.applications.title}</h2>
          <p className="mb-4">{currentContent.applications.description}</p>
          <ul className="list-disc pl-6 space-y-1">
            {currentContent.applications.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="bg-card p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-4">{currentContent.considerations.title}</h2>
          <ul className="list-disc pl-6 space-y-1">
            {currentContent.considerations.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
