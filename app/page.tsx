"use client"

import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, BookOpen, Calculator, FileText, Lightbulb } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const topics = [
  {
    name: "Mathematics",
    description: "From calculus to numerical methods, explore the mathematical foundations of engineering.",
    icon: Calculator,
    href: "/topics/mathematics",
    color: "bg-blue-100 dark:bg-blue-900",
  },
  {
    name: "Physics",
    description: "Understand the physical principles that govern engineering systems and processes.",
    icon: Lightbulb,
    href: "/topics/physics",
    color: "bg-amber-100 dark:bg-amber-900",
  },
  {
    name: "Materials Engineering",
    description: "Learn about material properties and their applications in engineering design.",
    icon: FileText,
    href: "/topics/materials",
    color: "bg-green-100 dark:bg-green-900",
  },
  {
    name: "Mechanical Engineering",
    description: "Explore the principles of mechanics, thermodynamics, and mechanical design.",
    icon: BookOpen,
    href: "/topics/mechanical",
    color: "bg-purple-100 dark:bg-purple-900",
  },
]

const featuredResources = [
  {
    title: "Formula Database",
    description: "Comprehensive collection of engineering formulas and equations",
    image: "/formulaDB.png?height=200&width=400",
    href: "/resources/tools/formula-database",
  },
  {
    title: "Calculator Index",
    description: "Collection of specialized calculators for various engineering problems",
    image: "/calculatorIndex.jpg?height=200&width=400",
    href: "calculatorIndex.html",
  },
  {
    title: "Material Properties Database",
    description: "Comprehensive database of engineering materials and their properties",
    image: "/materialPropertiesDB.png?height=200&width=400",
    //href: "/resources/tools/materials-database",
    href: "/under-development"
  },
]

export default function Home() {
  const { language, t } = useLanguage()

  return (
    <div className="flex flex-col min-h-screen">
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 dark:from-primary/10 dark:to-background z-0" />
        <div className="container relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">{t("landing.title")}</h1>
              <p className="text-xl text-muted-foreground max-w-md">{t("landing.subtitle")}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild>
                  <Link href="/topics">
                    {t("landing.explore")}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/resources">{t("nav.resources")}</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/TEC-logo.svg?height=400&width=600"
                alt="Engineering illustration"
                fill
                className="object-contain" // className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Topics Preview Section */}
      <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("landing.topics")}</h2>
            <p className="text-muted-foreground max-w-2xl">
              {language === "es"
                ? "Explora nuestra colección completa de temas de ingeniería, desde principios fundamentales hasta aplicaciones avanzadas."
                : "Explore our comprehensive collection of engineering topics, from fundamental principles to advanced applications."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {topics.map((topic) => (
              <Link key={topic.name} href={topic.href} className="group">
                <Card className="h-full transition-all hover:shadow-md">
                  <CardHeader>
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${topic.color} mb-4`}>
                      <topic.icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{topic.name === "Mathematics" ? t("math.title") : topic.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {topic.name === "Mathematics" ? t("math.description") : topic.description}
                    </CardDescription>
                  </CardContent>
                  <CardFooter>
                    <span className="text-sm font-medium text-primary flex items-center group-hover:underline">
                      {language === "es" ? "Explorar tema" : "Explore topic"}
                      <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <Button variant="outline" asChild>
              <Link href="/topics">
                {language === "es" ? "Ver todos los temas" : "View all topics"}
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Resources Section */}
      <section className="py-16">
        <div className="container">
          <div className="flex flex-col items-center text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("landing.featured")}</h2>
            <p className="text-muted-foreground max-w-2xl">
              {language === "es"
                ? "Descubre nuestras herramientas, tutoriales y recursos de aprendizaje más populares para mejorar tus conocimientos de ingeniería."
                : "Discover our most popular tools, tutorials, and learning resources to enhance your engineering knowledge."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredResources.map((resource) => (
              <Card key={resource.title} className="overflow-hidden h-full flex flex-col">
                <div className="relative h-48 w-full">
                  <Image
                    src={resource.image || "/placeholder.svg"}
                    alt={resource.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle>
                    {resource.title === "Formula Database" ? t("common.formula_database") : resource.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-base">{resource.description}</CardDescription>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                    <Link href={resource.href} className="flex items-center text-primary">
                      {language === "es" ? "Explorar recurso" : "Explore resource"}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      {/* <section className="py-16 bg-muted/50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">{t("newsletter.title")}</h2>
            <p className="text-muted-foreground mb-8">{t("newsletter.subtitle")}</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t("newsletter.placeholder")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Button>{t("newsletter.button")}</Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  )
}
