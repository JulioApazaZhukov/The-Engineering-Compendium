"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, FileText, Lightbulb, Zap, Code, Cog } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function TopicCategoryPage() {
  const params = useParams()
  const category = params.category as string
  const { language } = useLanguage()

  // Topic data with subtopics
  const topicsData = {
    mathematics: {
      title: language === "es" ? "Matemáticas" : "Mathematics",
      description:
        language === "es"
          ? "Desde cálculo hasta métodos numéricos, explora los fundamentos matemáticos de la ingeniería."
          : "From calculus to numerical methods, explore the mathematical foundations of engineering.",
      icon: Calculator,
      color: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
      subtopics: [
        {
          name: language === "es" ? "Cálculo Diferencial" : "Differential Calculus",
          description:
            language === "es"
              ? "Estudio de tasas de cambio y pendientes de curvas, incluyendo derivadas y sus aplicaciones."
              : "Study of rates of change and slopes of curves, including derivatives and their applications.",
          href: "/topics/mathematics/differential-calculus",
        },
        {
          name: language === "es" ? "Aplicaciones de las Derivadas" : "Applications of Differentials",
          description:
            language === "es"
              ? "Aplicaciones prácticas de las derivadas en problemas de optimización y modelado."
              : "Practical applications of derivatives in optimization and modeling problems.",
          href: "/topics/mathematics/differential-calculus-applications",
        },
        {
          name: language === "es" ? "Cálculo Integral" : "Integral Calculus",
          description:
            language === "es"
              ? "Técnicas para calcular áreas, volúmenes y soluciones a ecuaciones diferenciales."
              : "Techniques for calculating areas, volumes, and solutions to differential equations.",
          href: "/topics/mathematics/integral-calculus",
        },
        {
          name: language === "es" ? "Aplicaciones de las Integrales" : "Applications of Integrals",
          description:
            language === "es"
              ? "Aplicaciones prácticas de las integrales en el cálculo de áreas, volúmenes y más."
              : "Practical applications of integrals in calculating areas, volumes, and more.",
          href: "/topics/mathematics/integral-calculus-applications",
        },
        {
          name: language === "es" ? "Álgebra Lineal" : "Linear Algebra",
          description:
            language === "es"
              ? "Estudio de vectores, matrices y transformaciones lineales con aplicaciones en ingeniería."
              : "Study of vectors, matrices, and linear transformations with applications in engineering.",
          href: "/topics/mathematics/linear-algebra",
        },
        {
          name: language === "es" ? "Ecuaciones Diferenciales" : "Differential Equations",
          description:
            language === "es"
              ? "Ecuaciones que involucran derivadas, esenciales para modelar sistemas dinámicos en ingeniería."
              : "Equations involving derivatives, essential for modeling dynamic systems in engineering.",
          href: "/topics/mathematics/differential-equations",
        },
        {
          name: language === "es" ? "Probabilidad y Estadística" : "Probability & Statistics",
          description:
            language === "es"
              ? "Análisis matemático de fenómenos aleatorios y datos, crucial para la toma de decisiones en ingeniería."
              : "Mathematical analysis of random phenomena and data, crucial for engineering decision-making.",
          href: "/topics/mathematics/probability-statistics",
        },
        {
          name: language === "es" ? "Métodos Numéricos" : "Numerical Methods",
          description:
            language === "es"
              ? "Técnicas computacionales para resolver problemas matemáticos complejos en ingeniería."
              : "Computational techniques for solving complex mathematical problems in engineering.",
          href: "/topics/mathematics/numerical-methods",
        },
      ],
    },
    physics: {
      title: language === "es" ? "Física" : "Physics",
      description:
        language === "es"
          ? "Comprende los principios físicos que gobiernan los sistemas y procesos de ingeniería."
          : "Understand the physical principles that govern engineering systems and processes.",
      icon: Lightbulb,
      color: "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100",
      subtopics: [
        {
          name: language === "es" ? "Mecánica Clásica" : "Classical Mechanics",
          description:
            language === "es"
              ? "Estudio del movimiento, fuerzas y energía en sistemas macroscópicos."
              : "Study of motion, forces, and energy in macroscopic systems.",
          href: "/topics/physics/classical-mechanics",
        },
        {
          name: language === "es" ? "Termodinámica" : "Thermodynamics",
          description:
            language === "es"
              ? "Principios que gobiernan la energía, el calor y el trabajo en sistemas físicos."
              : "Principles governing energy, heat, and work in physical systems.",
          href: "/topics/physics/thermodynamics",
        },
        {
          name: language === "es" ? "Electromagnetismo" : "Electromagnetism",
          description:
            language === "es"
              ? "Estudio de fenómenos eléctricos y magnéticos y sus aplicaciones."
              : "Study of electrical and magnetic phenomena and their applications.",
          href: "/topics/physics/electromagnetism",
        },
        {
          name: language === "es" ? "Óptica" : "Optics",
          description:
            language === "es"
              ? "Comportamiento y propiedades de la luz, incluyendo reflexión, refracción y difracción."
              : "Behavior and properties of light, including reflection, refraction, and diffraction.",
          href: "/topics/physics/optics",
        },
        {
          name: language === "es" ? "Física Moderna" : "Modern Physics",
          description:
            language === "es"
              ? "Mecánica cuántica, relatividad y sus aplicaciones en ingeniería."
              : "Quantum mechanics, relativity, and their applications in engineering.",
          href: "/topics/physics/modern-physics",
        },
      ],
    },
    materials: {
      title: language === "es" ? "Ingeniería de Materiales" : "Materials Engineering",
      description:
        language === "es"
          ? "Aprende sobre propiedades de materiales y sus aplicaciones en el diseño de ingeniería."
          : "Learn about material properties and their applications in engineering design.",
      icon: FileText,
      color: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
      subtopics: [
        {
          name: language === "es" ? "Propiedades de Materiales" : "Material Properties",
          description:
            language === "es"
              ? "Propiedades mecánicas, térmicas, eléctricas y químicas de los materiales de ingeniería."
              : "Mechanical, thermal, electrical, and chemical properties of engineering materials.",
          href: "/topics/materials/properties",
        },
        {
          name: language === "es" ? "Materiales Compuestos" : "Composite Materials",
          description:
            language === "es"
              ? "Diseño y análisis de materiales compuestos por múltiples constituyentes."
              : "Design and analysis of materials composed of multiple constituents.",
          href: "/topics/materials/composites",
        },
        {
          name: language === "es" ? "Materiales Metálicos y Cerámicos" : "Metallic & Ceramic Materials",
          description:
            language === "es"
              ? "Estructura, propiedades y aplicaciones de metales y cerámicas en ingeniería."
              : "Structure, properties, and applications of metals and ceramics in engineering.",
          href: "/topics/materials/metallic-ceramic",
        },
        {
          name: language === "es" ? "Polímeros" : "Polymers",
          description:
            language === "es"
              ? "Propiedades y aplicaciones de materiales poliméricos en el diseño de ingeniería."
              : "Properties and applications of polymer materials in engineering design.",
          href: "/topics/materials/polymers",
        },
      ],
    },
    mechanical: {
      title: language === "es" ? "Ingeniería Mecánica" : "Mechanical Engineering",
      description:
        language === "es"
          ? "Explora los principios de mecánica, termodinámica y diseño mecánico."
          : "Explore the principles of mechanics, thermodynamics, and mechanical design.",
      icon: Cog,
      color: "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100",
      subtopics: [
        {
          name: language === "es" ? "Dinámica de Máquinas" : "Machine Dynamics",
          description:
            language === "es"
              ? "Análisis del movimiento y fuerzas en sistemas mecánicos."
              : "Analysis of motion and forces in mechanical systems.",
          href: "/topics/mechanical/dynamics",
        },
        {
          name: language === "es" ? "Transferencia de Calor" : "Heat Transfer",
          description:
            language === "es"
              ? "Principios y aplicaciones de conducción, convección y radiación."
              : "Principles and applications of conduction, convection, and radiation.",
          href: "/topics/mechanical/heat-transfer",
        },
        {
          name: language === "es" ? "Diseño Mecánico" : "Mechanical Design",
          description:
            language === "es"
              ? "Principios y metodologías para diseñar componentes y sistemas mecánicos."
              : "Principles and methodologies for designing mechanical components and systems.",
          href: "/topics/mechanical/design",
        },
      ],
    },
    electrical: {
      title: language === "es" ? "Ingeniería Eléctrica y Electrónica" : "Electrical & Electronics Engineering",
      description:
        language === "es"
          ? "Estudio de sistemas eléctricos, circuitos y dispositivos electrónicos."
          : "Study of electrical systems, circuits, and electronic devices.",
      icon: Zap,
      color: "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100",
      subtopics: [
        {
          name: language === "es" ? "Circuitos Eléctricos" : "Electrical Circuits",
          description:
            language === "es"
              ? "Análisis y diseño de circuitos eléctricos utilizando principios de teoría de circuitos."
              : "Analysis and design of electrical circuits using principles of circuit theory.",
          href: "/topics/electrical/circuits",
        },
        {
          name: language === "es" ? "Electrónica Digital" : "Digital Electronics",
          description:
            language === "es"
              ? "Diseño y análisis de sistemas digitales y circuitos lógicos."
              : "Design and analysis of digital systems and logic circuits.",
          href: "/topics/electrical/digital",
        },
        {
          name: language === "es" ? "Sistemas de Control" : "Control Systems",
          description:
            language === "es"
              ? "Teoría y aplicación de sistemas de control en ingeniería."
              : "Theory and application of control systems in engineering.",
          href: "/topics/electrical/control",
        },
        {
          name: language === "es" ? "Señales y Sistemas" : "Signals & Systems",
          description:
            language === "es"
              ? "Análisis de señales y sistemas en dominios de tiempo y frecuencia."
              : "Analysis of signals and systems in time and frequency domains.",
          href: "/topics/electrical/signals",
        },
      ],
    },
    software: {
      title: language === "es" ? "Ingeniería de Software" : "Software Engineering",
      description:
        language === "es"
          ? "Principios y prácticas de desarrollo de software para aplicaciones de ingeniería."
          : "Principles and practices of software development for engineering applications.",
      icon: Code,
      color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-100",
      subtopics: [
        {
          name: language === "es" ? "Algoritmos y Estructuras de Datos" : "Algorithms & Data Structures",
          description:
            language === "es"
              ? "Algoritmos fundamentales y estructuras de datos para computación eficiente."
              : "Fundamental algorithms and data structures for efficient computation.",
          href: "/topics/software/algorithms",
        },
        {
          name: language === "es" ? "Programación en Python" : "Python Programming",
          description:
            language === "es"
              ? "Programación en Python para aplicaciones científicas y de ingeniería."
              : "Programming in Python for scientific and engineering applications.",
          href: "/topics/software/python",
        },
        {
          name: language === "es" ? "Bases de Datos" : "Databases",
          description:
            language === "es"
              ? "Diseño e implementación de bases de datos para aplicaciones de ingeniería."
              : "Design and implementation of databases for engineering applications.",
          href: "/topics/software/databases",
        },
        {
          name: language === "es" ? "Desarrollo Web" : "Web Development",
          description:
            language === "es"
              ? "Desarrollo de aplicaciones web para propósitos de ingeniería."
              : "Development of web applications for engineering purposes.",
          href: "/topics/software/web",
        },
      ],
    },
    industrial: {
      title: language === "es" ? "Ingeniería Industrial" : "Industrial Engineering",
      description:
        language === "es"
          ? "Optimización de procesos complejos, sistemas y organizaciones."
          : "Optimization of complex processes, systems, and organizations.",
      icon: BookOpen,
      color: "bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100",
      subtopics: [
        {
          name: language === "es" ? "Optimización" : "Optimization",
          description:
            language === "es"
              ? "Técnicas matemáticas para optimizar sistemas y procesos de ingeniería."
              : "Mathematical techniques for optimizing engineering systems and processes.",
          href: "/topics/industrial/optimization",
        },
        {
          name: language === "es" ? "Manufactura Esbelta" : "Lean Manufacturing",
          description:
            language === "es"
              ? "Principios y prácticas para eliminar desperdicios en procesos de fabricación."
              : "Principles and practices for eliminating waste in manufacturing processes.",
          href: "/topics/industrial/lean",
        },
        {
          name: language === "es" ? "Logística y Cadena de Suministro" : "Logistics & Supply Chain",
          description:
            language === "es"
              ? "Gestión y optimización de cadenas de suministro y sistemas logísticos."
              : "Management and optimization of supply chains and logistics systems.",
          href: "/topics/industrial/logistics",
        },
        {
          name: language === "es" ? "Simulación de Procesos" : "Process Simulation",
          description:
            language === "es"
              ? "Modelado y simulación de procesos industriales para análisis y optimización."
              : "Modeling and simulation of industrial processes for analysis and optimization.",
          href: "/topics/industrial/simulation",
        },
      ],
    },
  }

  // Check if the category exists in our data
  if (!topicsData[category as keyof typeof topicsData]) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">{language === "es" ? "Tema No Encontrado" : "Topic Not Found"}</h1>
        <p className="text-muted-foreground mb-8">
          {language === "es"
            ? "La categoría de tema solicitada no existe."
            : "The requested topic category does not exist."}
        </p>
        <Button asChild>
          <Link href="/topics">{language === "es" ? "Ver Todos los Temas" : "View All Topics"}</Link>
        </Button>
      </div>
    )
  }

  const topicData = topicsData[category as keyof typeof topicsData]
  const Icon = topicData.icon

  return (
    <div className="container py-12">
      <div className="flex flex-col items-center text-center mb-12">
        <div className={`w-16 h-16 rounded-lg flex items-center justify-center ${topicData.color} mb-4`}>
          <Icon className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight mb-4">{topicData.title}</h1>
        <p className="text-muted-foreground max-w-2xl">{topicData.description}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {topicData.subtopics.map((subtopic) => (
          <Card key={subtopic.name} className="h-full transition-all hover:shadow-md">
            <CardHeader>
              <CardTitle>{subtopic.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{subtopic.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                <Link href={subtopic.href} className="flex items-center text-primary">
                  {language === "es" ? "Explorar tema" : "Explore topic"}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">{language === "es" ? "Recursos Relacionados" : "Related Resources"}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          {language === "es"
            ? `Mejora tu aprendizaje con estos recursos cuidadosamente seleccionados relacionados con ${topicData.title}.`
            : `Enhance your learning with these carefully selected resources related to ${topicData.title}.`}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>{language === "es" ? "Tutoriales" : "Tutorials"}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {language === "es"
                  ? `Guías paso a paso para ayudarte a dominar conceptos clave en ${topicData.title}.`
                  : `Step-by-step guides to help you master key concepts in ${topicData.title}.`}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={`/resources/tutorials?category=${category}`}>
                  {language === "es" ? "Ver Tutoriales" : "View Tutorials"}
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{language === "es" ? "Problemas Resueltos" : "Solved Problems"}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {language === "es"
                  ? `Practica con ejemplos resueltos para fortalecer tu comprensión de ${topicData.title}.`
                  : `Practice with solved examples to strengthen your understanding of ${topicData.title}.`}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={`/resources/solved-problems?category=${category}`}>
                  {language === "es" ? "Ver Problemas" : "View Problems"}
                </Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{language === "es" ? "Herramientas en Línea" : "Online Tools"}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                {language === "es"
                  ? `Herramientas interactivas y calculadoras para aplicar conceptos de ${topicData.title}.`
                  : `Interactive tools and calculators to apply concepts from ${topicData.title}.`}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={`/resources/tools?category=${category}`}>
                  {language === "es" ? "Ver Herramientas" : "View Tools"}
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
