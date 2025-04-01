"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function DifferentialEquationsPage() {
  const { t, language } = useLanguage()

  return (
    <div className="container py-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          {language === "es" ? "Inicio" : "Home"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics" className="hover:text-foreground">
          {t("nav.topics")}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics/mathematics" className="hover:text-foreground">
          {t("math.title")}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">
          {language === "es" ? "Ecuaciones Diferenciales" : "Differential Equations"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Ecuaciones Diferenciales" : "Differential Equations"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "El estudio de ecuaciones que involucran derivadas"
              : "The study of equations involving derivatives"}
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/topics/mathematics" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {t("common.back")} {t("math.title")}
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 id="introduction" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es"
                ? "Introducción a las Ecuaciones Diferenciales"
                : "Introduction to Differential Equations"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Las ecuaciones diferenciales son ecuaciones matemáticas que relacionan una función con sus derivadas. Son fundamentales en la modelación de fenómenos físicos, biológicos, económicos y de ingeniería donde hay tasas de cambio o acumulación."
                  : "Differential equations are mathematical equations that relate a function with its derivatives. They are fundamental in modeling physical, biological, economic, and engineering phenomena where there are rates of change or accumulation."}
              </p>
              <p>
                {language === "es"
                  ? "Una ecuación diferencial ordinaria (EDO) contiene derivadas con respecto a una sola variable independiente, mientras que una ecuación diferencial parcial (EDP) contiene derivadas parciales con respecto a múltiples variables independientes."
                  : "An ordinary differential equation (ODE) contains derivatives with respect to a single independent variable, while a partial differential equation (PDE) contains partial derivatives with respect to multiple independent variables."}
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="\frac{dy}{dx} + P(x)y = Q(x)" />
              </div>
              <p>
                {language === "es"
                  ? "Esta es una ecuación diferencial lineal de primer orden, donde P(x) y Q(x) son funciones de x. Resolver ecuaciones diferenciales implica encontrar funciones que satisfagan estas relaciones."
                  : "This is a first-order linear differential equation, where P(x) and Q(x) are functions of x. Solving differential equations involves finding functions that satisfy these relationships."}
              </p>
            </div>
          </section>

          {/* Key Topics Section */}
          <section>
            <h2 id="key-topics" className="text-2xl font-bold mb-6 scroll-mt-16">
              {language === "es" ? "Temas Principales" : "Key Topics"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* First-Order Differential Equations */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es"
                      ? "Ecuaciones Diferenciales de Primer Orden"
                      : "First-Order Differential Equations"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Ecuaciones que contienen solo la primera derivada"
                      : "Equations containing only the first derivative"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\frac{dy}{dx} = f(x, y)" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Métodos de solución para ecuaciones separables, lineales, exactas y más."
                      : "Solution methods for separable, linear, exact equations, and more."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/differential-equations/first-order" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Second-Order Differential Equations */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es"
                      ? "Ecuaciones Diferenciales de Segundo Orden"
                      : "Second-Order Differential Equations"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Ecuaciones que contienen segundas derivadas"
                      : "Equations containing second derivatives"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\frac{d^2y}{dx^2} + p\frac{dy}{dx} + qy = g(x)" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Ecuaciones homogéneas, no homogéneas, con coeficientes constantes y variables."
                      : "Homogeneous, non-homogeneous equations with constant and variable coefficients."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/differential-equations/second-order" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Higher-Order Differential Equations */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es"
                      ? "Ecuaciones Diferenciales de Orden Superior"
                      : "Higher-Order Differential Equations"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Ecuaciones con derivadas de orden superior"
                      : "Equations with higher-order derivatives"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\frac{d^ny}{dx^n} + a_{n-1}\frac{d^{n-1}y}{dx^{n-1}} + \ldots + a_1\frac{dy}{dx} + a_0y = f(x)" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Métodos para resolver ecuaciones diferenciales de orden n."
                      : "Methods for solving nth-order differential equations."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/differential-equations/higher-order" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Systems of Differential Equations */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es" ? "Sistemas de Ecuaciones Diferenciales" : "Systems of Differential Equations"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Múltiples ecuaciones diferenciales interrelacionadas"
                      : "Multiple interrelated differential equations"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\begin{cases} \frac{dx}{dt} = f(x, y, t) \\ \frac{dy}{dt} = g(x, y, t) \end{cases}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Métodos matriciales, valores propios y aplicaciones."
                      : "Matrix methods, eigenvalues, and applications."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/differential-equations/systems" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Laplace Transforms */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Transformadas de Laplace" : "Laplace Transforms"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Técnica para resolver ecuaciones diferenciales"
                      : "Technique for solving differential equations"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\mathcal{L}\{f(t)\} = F(s) = \int_0^{\infty} e^{-st}f(t) \, dt" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Propiedades, aplicaciones y transformadas inversas."
                      : "Properties, applications, and inverse transforms."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/differential-equations/laplace-transforms" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Partial Differential Equations */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es" ? "Ecuaciones Diferenciales Parciales" : "Partial Differential Equations"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es" ? "Ecuaciones con derivadas parciales" : "Equations with partial derivatives"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Ecuaciones de onda, calor, Laplace y métodos de solución."
                      : "Wave, heat, Laplace equations, and solution methods."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/differential-equations/partial" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Applications Section */}
          <section>
            <h2 id="applications" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Aplicaciones" : "Applications"}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Las ecuaciones diferenciales tienen numerosas aplicaciones en ingeniería y ciencia:"
                  : "Differential equations have numerous applications in engineering and science:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Mecánica:" : "Mechanics:"}</strong>{" "}
                  {language === "es"
                    ? "Movimiento de partículas, osciladores, sistemas mecánicos."
                    : "Motion of particles, oscillators, mechanical systems."}
                </li>
                <li>
                  <strong>{language === "es" ? "Circuitos Eléctricos:" : "Electrical Circuits:"}</strong>{" "}
                  {language === "es"
                    ? "Análisis de circuitos RLC y respuesta transitoria."
                    : "RLC circuit analysis and transient response."}
                </li>
                <li>
                  <strong>{language === "es" ? "Transferencia de Calor:" : "Heat Transfer:"}</strong>{" "}
                  {language === "es"
                    ? "Conducción, convección y distribución de temperatura."
                    : "Conduction, convection, and temperature distribution."}
                </li>
                <li>
                  <strong>{language === "es" ? "Dinámica de Fluidos:" : "Fluid Dynamics:"}</strong>{" "}
                  {language === "es"
                    ? "Ecuaciones de Navier-Stokes y flujo de fluidos."
                    : "Navier-Stokes equations and fluid flow."}
                </li>
                <li>
                  <strong>{language === "es" ? "Sistemas de Control:" : "Control Systems:"}</strong>{" "}
                  {language === "es"
                    ? "Modelado y análisis de sistemas de control."
                    : "Modeling and analysis of control systems."}
                </li>
                <li>
                  <strong>{language === "es" ? "Biología:" : "Biology:"}</strong>{" "}
                  {language === "es"
                    ? "Dinámica poblacional, epidemiología y sistemas biológicos."
                    : "Population dynamics, epidemiology, and biological systems."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "En ingeniería, las ecuaciones diferenciales son esenciales para modelar sistemas dinámicos, predecir comportamientos y diseñar soluciones efectivas para problemas complejos."
                  : "In engineering, differential equations are essential for modeling dynamic systems, predicting behaviors, and designing effective solutions for complex problems."}
              </p>
            </div>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Table of Contents */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">{t("common.on_this_page")}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#introduction" className="text-primary hover:underline">
                    {t("common.introduction")}
                  </a>
                </li>
                <li className="group">
                  <a href="#key-topics" className="text-muted-foreground group-hover:text-primary">
                    {language === "es" ? "Temas Principales" : "Key Topics"}
                  </a>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#key-topics" className="text-muted-foreground group-hover:text-primary">
                        {language === "es" ? "Ecuaciones de Primer Orden" : "First-Order Equations"}
                      </a>
                    </li>
                    <li>
                      <a href="#key-topics" className="text-muted-foreground group-hover:text-primary">
                        {language === "es" ? "Ecuaciones de Segundo Orden" : "Second-Order Equations"}
                      </a>
                    </li>
                    <li>
                      <a href="#key-topics" className="text-muted-foreground group-hover:text-primary">
                        {language === "es" ? "Transformadas de Laplace" : "Laplace Transforms"}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#applications" className="text-muted-foreground hover:text-primary">
                    {t("common.applications")}
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
                <li>
                  <Link href="/topics/mathematics/calculus" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Cálculo" : "Calculus"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/linear-algebra"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Álgebra Lineal" : "Linear Algebra"}
                  </Link>
                </li>
                <li>
                  <Link href="/topics/physics/mechanics" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Mecánica" : "Mechanics"}
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">{t("common.resources")}</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{t("common.solved_problems")}</h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Practica con soluciones paso a paso"
                        : "Practice with step-by-step solutions"}
                    </p>
                    <Link
                      href="/resources/solved-problems?topic=differential-equations"
                      className="text-xs text-primary hover:underline"
                    >
                      {t("common.view_problems")}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">{t("common.recommended_reading")}</h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Libros y artículos sobre ecuaciones diferenciales"
                        : "Books and articles on differential equations"}
                    </p>
                    <Link
                      href="/resources/bibliography?topic=differential-equations"
                      className="text-xs text-primary hover:underline"
                    >
                      {language === "es" ? "Ver bibliografía" : "View bibliography"}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Calculator className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">
                      {language === "es" ? "Solucionador de Ecuaciones" : "Equation Solver"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta interactiva para resolver ecuaciones diferenciales"
                        : "Interactive tool for solving differential equations"}
                    </p>
                    <Link
                      href="/resources/tools/differential-equation-solver"
                      className="text-xs text-primary hover:underline"
                    >
                      {t("common.use_calculator")}
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visual Aid */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Differential equation solution visualization"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-center text-muted-foreground">
                {language === "es"
                  ? "Visualización de soluciones de una ecuación diferencial"
                  : "Visualization of solutions to a differential equation"}
              </p>
            </CardContent>
          </Card>

          {/* Formula Database Promo */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-2 text-primary" />
                {t("common.formula_database")}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {language === "es"
                  ? "Accede a nuestra colección completa de fórmulas matemáticas, incluyendo métodos para resolver ecuaciones diferenciales."
                  : "Access our comprehensive collection of mathematical formulas, including methods for solving differential equations."}
              </p>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/resources/tools/formula-database">{t("common.explore_database")}</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">{t("common.continue")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="p-6 flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 p-3 rounded-lg">
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{language === "es" ? "Siguiente Tema" : "Next Topic"}</h3>
                <Link href="/topics/mathematics/numerical-methods" className="text-primary hover:underline text-lg">
                  {language === "es" ? "Métodos Numéricos" : "Numerical Methods"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende técnicas computacionales para resolver problemas matemáticos"
                    : "Learn computational techniques for solving mathematical problems"}
                </p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="p-6 flex items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 p-3 rounded-lg">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {language === "es" ? "Aplicación Relacionada" : "Related Application"}
                </h3>
                <Link href="/topics/electrical/circuits" className="text-primary hover:underline text-lg">
                  {language === "es" ? "Circuitos Eléctricos" : "Electrical Circuits"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Observa cómo se aplican las ecuaciones diferenciales en circuitos eléctricos"
                    : "See how differential equations are applied in electrical circuits"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
