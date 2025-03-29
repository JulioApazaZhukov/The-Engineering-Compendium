import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Calculator, Code, Cog, FileText, Lightbulb, Zap } from "lucide-react"
import Link from "next/link"

const topics = [
  {
    name: "Mathematics",
    description: "From calculus to numerical methods, explore the mathematical foundations of engineering.",
    icon: Calculator,
    href: "/topics/mathematics",
    color: "bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100",
    subtopics: [
      "Differential Calculus",
      "Integral Calculus",
      "Linear Algebra",
      "Differential Equations",
      "Probability & Statistics",
      "Numerical Methods",
    ],
  },
  {
    name: "Physics",
    description: "Understand the physical principles that govern engineering systems and processes.",
    icon: Lightbulb,
    href: "/topics/physics",
    color: "bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100",
    subtopics: ["Classical Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
  },
  {
    name: "Materials Engineering",
    description: "Learn about material properties and their applications in engineering design.",
    icon: FileText,
    href: "/topics/materials",
    color: "bg-green-100 dark:bg-green-900 text-green-900 dark:text-green-100",
    subtopics: ["Material Properties", "Composite Materials", "Metallic & Ceramic Materials", "Polymers"],
  },
  {
    name: "Mechanical Engineering",
    description: "Explore the principles of mechanics, thermodynamics, and mechanical design.",
    icon: Cog,
    href: "/topics/mechanical",
    color: "bg-purple-100 dark:bg-purple-900 text-purple-900 dark:text-purple-100",
    subtopics: ["Machine Dynamics", "Heat Transfer", "Mechanical Design"],
  },
  {
    name: "Electrical & Electronics Engineering",
    description: "Study of electrical systems, circuits, and electronic devices.",
    icon: Zap,
    href: "/topics/electrical",
    color: "bg-red-100 dark:bg-red-900 text-red-900 dark:text-red-100",
    subtopics: ["Electrical Circuits", "Digital Electronics", "Control Systems", "Signals & Systems"],
  },
  {
    name: "Software Engineering",
    description: "Principles and practices of software development for engineering applications.",
    icon: Code,
    href: "/topics/software",
    color: "bg-cyan-100 dark:bg-cyan-900 text-cyan-900 dark:text-cyan-100",
    subtopics: ["Algorithms & Data Structures", "Python Programming", "Databases", "Web Development"],
  },
  {
    name: "Industrial Engineering",
    description: "Optimization of complex processes, systems, and organizations.",
    icon: BookOpen,
    href: "/topics/industrial",
    color: "bg-orange-100 dark:bg-orange-900 text-orange-900 dark:text-orange-100",
    subtopics: ["Optimization", "Lean Manufacturing", "Logistics & Supply Chain", "Process Simulation"],
  },
]

export default function TopicsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Engineering Topics</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive collection of engineering topics, from fundamental principles to advanced
            applications.
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
                  <h4 className="text-sm font-medium mb-2">Key Subtopics:</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {topic.subtopics.slice(0, 4).map((subtopic) => (
                      <li key={subtopic}>{subtopic}</li>
                    ))}
                    {topic.subtopics.length > 4 && <li>And {topic.subtopics.length - 4} more...</li>}
                  </ul>
                </div>
              </CardContent>
              <CardFooter>
                <Link
                  href={topic.href}
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                >
                  Explore {topic.name}
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

