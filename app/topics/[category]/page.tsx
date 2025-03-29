"use client"

import { useParams } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Calculator, FileText, Lightbulb, Zap, Code, Cog } from "lucide-react"

// Topic data with subtopics
const topicsData = {
  mathematics: {
    title: "Mathematics",
    description: "From calculus to numerical methods, explore the mathematical foundations of engineering.",
    icon: Calculator,
    color: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
    subtopics: [
      {
        name: "Differential Calculus",
        description: "Study of rates of change and slopes of curves, including derivatives and their applications.",
        href: "/topics/mathematics/differential-calculus",
      },
      {
        name: "Integral Calculus",
        description: "Techniques for calculating areas, volumes, and solutions to differential equations.",
        href: "/topics/mathematics/integral-calculus",
      },
      {
        name: "Linear Algebra",
        description: "Study of vectors, matrices, and linear transformations with applications in engineering.",
        href: "/topics/mathematics/linear-algebra",
      },
      {
        name: "Differential Equations",
        description: "Equations involving derivatives, essential for modeling dynamic systems in engineering.",
        href: "/topics/mathematics/differential-equations",
      },
      {
        name: "Probability & Statistics",
        description: "Mathematical analysis of random phenomena and data, crucial for engineering decision-making.",
        href: "/topics/mathematics/probability-statistics",
      },
      {
        name: "Numerical Methods",
        description: "Computational techniques for solving complex mathematical problems in engineering.",
        href: "/topics/mathematics/numerical-methods",
      },
    ],
  },
  physics: {
    title: "Physics",
    description: "Understand the physical principles that govern engineering systems and processes.",
    icon: Lightbulb,
    color: "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100",
    subtopics: [
      {
        name: "Classical Mechanics",
        description: "Study of motion, forces, and energy in macroscopic systems.",
        href: "/topics/physics/classical-mechanics",
      },
      {
        name: "Thermodynamics",
        description: "Principles governing energy, heat, and work in physical systems.",
        href: "/topics/physics/thermodynamics",
      },
      {
        name: "Electromagnetism",
        description: "Study of electrical and magnetic phenomena and their applications.",
        href: "/topics/physics/electromagnetism",
      },
      {
        name: "Optics",
        description: "Behavior and properties of light, including reflection, refraction, and diffraction.",
        href: "/topics/physics/optics",
      },
      {
        name: "Modern Physics",
        description: "Quantum mechanics, relativity, and their applications in engineering.",
        href: "/topics/physics/modern-physics",
      },
    ],
  },
  materials: {
    title: "Materials Engineering",
    description: "Learn about material properties and their applications in engineering design.",
    icon: FileText,
    color: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
    subtopics: [
      {
        name: "Material Properties",
        description: "Mechanical, thermal, electrical, and chemical properties of engineering materials.",
        href: "/topics/materials/properties",
      },
      {
        name: "Composite Materials",
        description: "Design and analysis of materials composed of multiple constituents.",
        href: "/topics/materials/composites",
      },
      {
        name: "Metallic & Ceramic Materials",
        description: "Structure, properties, and applications of metals and ceramics in engineering.",
        href: "/topics/materials/metallic-ceramic",
      },
      {
        name: "Polymers",
        description: "Properties and applications of polymer materials in engineering design.",
        href: "/topics/materials/polymers",
      },
    ],
  },
  mechanical: {
    title: "Mechanical Engineering",
    description: "Explore the principles of mechanics, thermodynamics, and mechanical design.",
    icon: Cog,
    color: "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100",
    subtopics: [
      {
        name: "Machine Dynamics",
        description: "Analysis of motion and forces in mechanical systems.",
        href: "/topics/mechanical/dynamics",
      },
      {
        name: "Heat Transfer",
        description: "Principles and applications of conduction, convection, and radiation.",
        href: "/topics/mechanical/heat-transfer",
      },
      {
        name: "Mechanical Design",
        description: "Principles and methodologies for designing mechanical components and systems.",
        href: "/topics/mechanical/design",
      },
    ],
  },
  electrical: {
    title: "Electrical & Electronics Engineering",
    description: "Study of electrical systems, circuits, and electronic devices.",
    icon: Zap,
    color: "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100",
    subtopics: [
      {
        name: "Electrical Circuits",
        description: "Analysis and design of electrical circuits using principles of circuit theory.",
        href: "/topics/electrical/circuits",
      },
      {
        name: "Digital Electronics",
        description: "Design and analysis of digital systems and logic circuits.",
        href: "/topics/electrical/digital",
      },
      {
        name: "Control Systems",
        description: "Theory and application of control systems in engineering.",
        href: "/topics/electrical/control",
      },
      {
        name: "Signals & Systems",
        description: "Analysis of signals and systems in time and frequency domains.",
        href: "/topics/electrical/signals",
      },
    ],
  },
  software: {
    title: "Software Engineering",
    description: "Principles and practices of software development for engineering applications.",
    icon: Code,
    color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-100",
    subtopics: [
      {
        name: "Algorithms & Data Structures",
        description: "Fundamental algorithms and data structures for efficient computation.",
        href: "/topics/software/algorithms",
      },
      {
        name: "Python Programming",
        description: "Programming in Python for scientific and engineering applications.",
        href: "/topics/software/python",
      },
      {
        name: "Databases",
        description: "Design and implementation of databases for engineering applications.",
        href: "/topics/software/databases",
      },
      {
        name: "Web Development",
        description: "Development of web applications for engineering purposes.",
        href: "/topics/software/web",
      },
    ],
  },
  industrial: {
    title: "Industrial Engineering",
    description: "Optimization of complex processes, systems, and organizations.",
    icon: BookOpen,
    color: "bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100",
    subtopics: [
      {
        name: "Optimization",
        description: "Mathematical techniques for optimizing engineering systems and processes.",
        href: "/topics/industrial/optimization",
      },
      {
        name: "Lean Manufacturing",
        description: "Principles and practices for eliminating waste in manufacturing processes.",
        href: "/topics/industrial/lean",
      },
      {
        name: "Logistics & Supply Chain",
        description: "Management and optimization of supply chains and logistics systems.",
        href: "/topics/industrial/logistics",
      },
      {
        name: "Process Simulation",
        description: "Modeling and simulation of industrial processes for analysis and optimization.",
        href: "/topics/industrial/simulation",
      },
    ],
  },
}

export default function TopicCategoryPage() {
  const params = useParams()
  const category = params.category as string

  // Check if the category exists in our data
  if (!topicsData[category as keyof typeof topicsData]) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Topic Not Found</h1>
        <p className="text-muted-foreground mb-8">The requested topic category does not exist.</p>
        <Button asChild>
          <Link href="/topics">View All Topics</Link>
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
                  Explore topic
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Related Resources</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Enhance your learning with these carefully selected resources related to {topicData.title}.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Tutorials</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Step-by-step guides to help you master key concepts in {topicData.title}.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={`/resources/tutorials?category=${category}`}>View Tutorials</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Solved Problems</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Practice with solved examples to strengthen your understanding of {topicData.title}.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={`/resources/solved-problems?category=${category}`}>View Problems</Link>
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Online Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Interactive tools and calculators to apply concepts from {topicData.title}.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button variant="outline" asChild>
                <Link href={`/resources/tools?category=${category}`}>View Tools</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

