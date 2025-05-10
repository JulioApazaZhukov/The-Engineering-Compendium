"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, Code, Cog, FileText, Lightbulb, Zap } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"

export default function TopicsPage() {
  const { t, language } = useLanguage()

  const topics = [
    {
      name: language === "es" ? "Matemáticas" : "Mathematics",
      description:
        language === "es"
          ? "Desde cálculo hasta métodos numéricos, explora los fundamentos matemáticos de la ingeniería."
          : "From calculus to numerical methods, explore the mathematical foundations of engineering.",
      icon: Calculator,
      href: "/topics/mathematics",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
      subtopics: [
        language === "es" ? "Cálculo Diferencial" : "Differential Calculus",
        language === "es" ? "Cálculo Integral" : "Integral Calculus",
        language === "es" ? "Álgebra Lineal" : "Linear Algebra",
        language === "es" ? "Ecuaciones Diferenciales" : "Differential Equations",
        language === "es" ? "Probabilidad y Estadística" : "Probability & Statistics",
        language === "es" ? "Métodos Numéricos" : "Numerical Methods",
      ],
    },
    {
      name: language === "es" ? "Física" : "Physics",
      description:
        language === "es"
          ? "Comprende los principios físicos que gobiernan los sistemas y procesos de ingeniería."
          : "Understand the physical principles that govern engineering systems and processes.",
      icon: Lightbulb,
      href: "/topics/physics",
      color: "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100",
      subtopics: [
        language === "es" ? "Mecánica Clásica" : "Classical Mechanics",
        language === "es" ? "Termodinámica" : "Thermodynamics",
        language === "es" ? "Electromagnetismo" : "Electromagnetism",
        language === "es" ? "Óptica" : "Optics",
        language === "es" ? "Física Moderna" : "Modern Physics",
      ],
    },
    {
      name: language === "es" ? "Ingeniería de Materiales" : "Materials Engineering",
      description:
        language === "es"
          ? "Aprende sobre las propiedades de los materiales y sus aplicaciones en el diseño de ingeniería."
          : "Learn about material properties and their applications in engineering design.",
      icon: FileText,
      href: "/under-development",
      color: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
      subtopics: [
        language === "es" ? "Propiedades de Materiales" : "Material Properties",
        language === "es" ? "Materiales Compuestos" : "Composite Materials",
        language === "es" ? "Materiales Metálicos y Cerámicos" : "Metallic & Ceramic Materials",
        language === "es" ? "Polímeros" : "Polymers",
      ],
    },
    {
      name: language === "es" ? "Ingeniería Mecánica" : "Mechanical Engineering",
      description:
        language === "es"
          ? "Explora los principios de mecánica, termodinámica y diseño mecánico."
          : "Explore the principles of mechanics, thermodynamics, and mechanical design.",
      icon: Cog,
      href: "/under-development",
      color: "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100",
      subtopics: [
        language === "es" ? "Dinámica de Máquinas" : "Machine Dynamics",
        language === "es" ? "Transferencia de Calor" : "Heat Transfer",
        language === "es" ? "Diseño Mecánico" : "Mechanical Design",
      ],
    },
    {
      name: language === "es" ? "Ingeniería Eléctrica y Electrónica" : "Electrical & Electronics Engineering",
      description:
        language === "es"
          ? "Estudio de sistemas eléctricos, circuitos y dispositivos electrónicos."
          : "Study of electrical systems, circuits, and electronic devices.",
      icon: Zap,
      href: "/under-development",
      color: "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100",
      subtopics: [
        language === "es" ? "Circuitos Eléctricos" : "Electrical Circuits",
        language === "es" ? "Electrónica Digital" : "Digital Electronics",
        language === "es" ? "Sistemas de Control" : "Control Systems",
        language === "es" ? "Señales y Sistemas" : "Signals & Systems",
      ],
    },
    {
      name: language === "es" ? "Ingeniería de Software" : "Software Engineering",
      description:
        language === "es"
          ? "Principios y prácticas de desarrollo de software para aplicaciones de ingeniería."
          : "Principles and practices of software development for engineering applications.",
      icon: Code,
      href: "/under-development",
      color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-100",
      subtopics: [
        language === "es" ? "Algoritmos y Estructuras de Datos" : "Algorithms & Data Structures",
        language === "es" ? "Programación en Python" : "Python Programming",
        language === "es" ? "Bases de Datos" : "Databases",
        language === "es" ? "Desarrollo Web" : "Web Development",
      ],
    },
    {
      name: language === "es" ? "Ingeniería Industrial" : "Industrial Engineering",
      description:
        language === "es"
          ? "Optimización de procesos complejos, sistemas y organizaciones."
          : "Optimization of complex processes, systems, and organizations.",
      icon: BookOpen,
      href: "/under-development",
      color: "bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100",
      subtopics: [
        language === "es" ? "Optimización" : "Optimization",
        language === "es" ? "Manufactura Esbelta" : "Lean Manufacturing",
        language === "es" ? "Logística y Cadena de Suministro" : "Logistics & Supply Chain",
        language === "es" ? "Simulación de Procesos" : "Process Simulation",
      ],
    },
  ]

  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            {language === "es" ? "Temas de Ingeniería" : "Engineering Topics"}
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {language === "es"
              ? "Explora nuestra completa colección de temas de ingeniería, desde principios fundamentales hasta aplicaciones avanzadas."
              : "Explore our comprehensive collection of engineering topics, from fundamental principles to advanced applications."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {topics.map((topic) => (
            <Card key={topic.name} className="h-full transition-all hover:shadow-md">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${topic.color} mb-4`}>
                  <topic.icon className="h-6 w-6" />
                </div>
                <CardTitle>{topic.name}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">{topic.description}</CardDescription>
                <div>
                  <h4 className="text-sm font-medium mb-2">
                    {language === "es" ? "Subtemas Clave:" : "Key Subtopics:"}
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {topic.subtopics.slice(0, 4).map((subtopic) => (
                      <li key={subtopic}>{subtopic}</li>
                    ))}
                    {topic.subtopics.length > 4 && (
                      <li>
                        {language === "es"
                          ? `Y ${topic.subtopics.length - 4} más...`
                          : `And ${topic.subtopics.length - 4} more...`}
                      </li>
                    )}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={topic.href}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                >
                  {language === "es" ? `Explorar ${topic.name}` : `Explore ${topic.name}`}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
