"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function NumericalMethodsPage() {
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
          {language === "es" ? "Métodos Numéricos" : "Numerical Methods"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Métodos Numéricos" : "Numerical Methods"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Técnicas computacionales para resolver problemas matemáticos"
              : "Computational techniques for solving mathematical problems"}
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
              {language === "es" ? "Introducción a los Métodos Numéricos" : "Introduction to Numerical Methods"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Los métodos numéricos son técnicas mediante las cuales se formulan problemas matemáticos para que puedan resolverse utilizando operaciones aritméticas. Estos métodos se aplican cuando no es posible o es demasiado complejo obtener soluciones analíticas exactas, o cuando se requieren aproximaciones numéricas eficientes."
                  : "Numerical methods are techniques by which mathematical problems are formulated so that they can be solved using arithmetic operations. These methods are applied when it is not possible or too complex to obtain exact analytical solutions, or when efficient numerical approximations are required."}
              </p>
              <p>
                {language === "es"
                  ? "Los métodos numéricos son fundamentales en ingeniería, física, economía y muchas otras disciplinas donde se necesitan soluciones computacionales a problemas matemáticos complejos. Con el aumento de la potencia computacional, estos métodos se han vuelto cada vez más importantes y sofisticados."
                  : "Numerical methods are fundamental in engineering, physics, economics, and many other disciplines where computational solutions to complex mathematical problems are needed. With the increase in computational power, these methods have become increasingly important and sophisticated."}
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}" />
              </div>
              <p>
                {language === "es"
                  ? "Esta es la fórmula del método de Newton-Raphson, una técnica iterativa para encontrar aproximaciones a las raíces de una función real. Es un ejemplo de un método numérico ampliamente utilizado en ingeniería."
                  : "This is the formula for the Newton-Raphson method, an iterative technique for finding approximations to the roots of a real-valued function. It is an example of a widely used numerical method in engineering."}
              </p>
            </div>
          </section>

          {/* Key Topics Section */}
          <section>
            <h2 id="key-topics" className="text-2xl font-bold mb-6 scroll-mt-16">
              {language === "es" ? "Temas Principales" : "Key Topics"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Root Finding */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Búsqueda de Raíces" : "Root Finding"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Métodos para encontrar soluciones de ecuaciones"
                      : "Methods for finding solutions to equations"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="f(x) = 0" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Métodos de bisección, Newton-Raphson, secante y punto fijo para encontrar raíces de ecuaciones no lineales."
                      : "Bisection, Newton-Raphson, secant, and fixed-point methods for finding roots of nonlinear equations."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/numerical-methods/root-finding" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Linear Systems */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Sistemas Lineales" : "Linear Systems"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Resolución de sistemas de ecuaciones lineales"
                      : "Solving systems of linear equations"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="A\vec{x} = \vec{b}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Métodos directos (eliminación de Gauss, factorización LU) y métodos iterativos (Jacobi, Gauss-Seidel)."
                      : "Direct methods (Gaussian elimination, LU factorization) and iterative methods (Jacobi, Gauss-Seidel)."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/numerical-methods/linear-systems" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Interpolation */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Interpolación" : "Interpolation"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Construcción de funciones a partir de datos discretos"
                      : "Constructing functions from discrete data"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="P_n(x) = \sum_{i=0}^{n} y_i \prod_{j=0, j \neq i}^{n} \frac{x - x_j}{x_i - x_j}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Interpolación polinómica, splines, interpolación de Lagrange y Newton."
                      : "Polynomial interpolation, splines, Lagrange and Newton interpolation."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/numerical-methods/interpolation" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Numerical Integration */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Integración Numérica" : "Numerical Integration"}</CardTitle>
                  <CardDescription>
                    {language === "es" ? "Aproximación de integrales definidas" : "Approximating definite integrals"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\int_a^b f(x) \, dx \approx \sum_{i=0}^{n} w_i f(x_i)" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Reglas de Newton-Cotes (trapecio, Simpson), cuadratura gaussiana y métodos adaptativos."
                      : "Newton-Cotes rules (trapezoidal, Simpson's), Gaussian quadrature, and adaptive methods."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/numerical-methods/integration" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Differential Equations */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Ecuaciones Diferenciales" : "Differential Equations"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Solución numérica de ecuaciones diferenciales"
                      : "Numerical solution of differential equations"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="y_{n+1} = y_n + h f(t_n, y_n)" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Métodos de Euler, Runge-Kutta, métodos de paso múltiple y métodos para EDPs."
                      : "Euler methods, Runge-Kutta methods, multi-step methods, and methods for PDEs."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/numerical-methods/differential-equations" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Optimization */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Optimización" : "Optimization"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Búsqueda de valores óptimos de funciones"
                      : "Finding optimal values of functions"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\min_{\vec{x}} f(\vec{x}) \quad \text{subject to} \quad g_i(\vec{x}) \leq 0" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Métodos de descenso, algoritmos genéticos, programación lineal y no lineal."
                      : "Descent methods, genetic algorithms, linear and nonlinear programming."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/numerical-methods/optimization" className="w-full">
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
                  ? "Los métodos numéricos tienen numerosas aplicaciones en ingeniería y ciencia:"
                  : "Numerical methods have numerous applications in engineering and science:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Análisis Estructural:" : "Structural Analysis:"}</strong>{" "}
                  {language === "es"
                    ? "Método de elementos finitos para analizar tensiones y deformaciones."
                    : "Finite element method for analyzing stresses and deformations."}
                </li>
                <li>
                  <strong>{language === "es" ? "Dinámica de Fluidos:" : "Fluid Dynamics:"}</strong>{" "}
                  {language === "es"
                    ? "Dinámica de fluidos computacional (CFD) para modelar flujos."
                    : "Computational fluid dynamics (CFD) for modeling flows."}
                </li>
                <li>
                  <strong>{language === "es" ? "Control de Sistemas:" : "Control Systems:"}</strong>{" "}
                  {language === "es"
                    ? "Simulación y optimización de sistemas de control."
                    : "Simulation and optimization of control systems."}
                </li>
                <li>
                  <strong>{language === "es" ? "Procesamiento de Señales:" : "Signal Processing:"}</strong>{" "}
                  {language === "es"
                    ? "Transformada rápida de Fourier (FFT) y filtrado digital."
                    : "Fast Fourier Transform (FFT) and digital filtering."}
                </li>
                <li>
                  <strong>{language === "es" ? "Modelado Financiero:" : "Financial Modeling:"}</strong>{" "}
                  {language === "es"
                    ? "Valoración de opciones y gestión de riesgos."
                    : "Option pricing and risk management."}
                </li>
                <li>
                  <strong>{language === "es" ? "Aprendizaje Automático:" : "Machine Learning:"}</strong>{" "}
                  {language === "es"
                    ? "Algoritmos de optimización para entrenar modelos."
                    : "Optimization algorithms for training models."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "En ingeniería, los métodos numéricos son esenciales para simular y analizar sistemas complejos, optimizar diseños y resolver problemas que no tienen soluciones analíticas cerradas."
                  : "In engineering, numerical methods are essential for simulating and analyzing complex systems, optimizing designs, and solving problems that do not have closed-form analytical solutions."}
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
                        {language === "es" ? "Búsqueda de Raíces" : "Root Finding"}
                      </a>
                    </li>
                    <li>
                      <a href="#key-topics" className="text-muted-foreground group-hover:text-primary">
                        {language === "es" ? "Sistemas Lineales" : "Linear Systems"}
                      </a>
                    </li>
                    <li>
                      <a href="#key-topics" className="text-muted-foreground group-hover:text-primary">
                        {language === "es" ? "Ecuaciones Diferenciales" : "Differential Equations"}
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
                    href="/topics/mathematics/differential-equations"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Ecuaciones Diferenciales" : "Differential Equations"}
                  </Link>
                </li>
                <li>
                  <Link href="/topics/software/programming" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Programación" : "Programming"}
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
                      //href="/resources/solved-problems?topic=numerical-methods"
                      href="/under-development"
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
                        ? "Libros y artículos sobre métodos numéricos"
                        : "Books and articles on numerical methods"}
                    </p>
                    <Link
                      href="/under-development"
                      className="text-xs text-primary hover:underline"
                    >
                      {language === "es" ? "Ver bibliografía" : "View bibliography"}
                    </Link>
                  </div>
                </div>

                {/* <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Calculator className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">
                      {language === "es" ? "Calculadora Numérica" : "Numerical Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta interactiva para métodos numéricos"
                        : "Interactive tool for numerical methods"}
                    </p>
                    <Link href="/resources/tools/numerical-calculator" className="text-xs text-primary hover:underline">
                      {t("common.use_calculator")}
                    </Link>
                  </div>
                </div> */}
              </div>
            </CardContent>
          </Card>

          {/* Visual Aid: Maybe later
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Numerical method visualization"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-center text-muted-foreground">
                {language === "es"
                  ? "Visualización de convergencia en un método numérico iterativo"
                  : "Visualization of convergence in an iterative numerical method"}
              </p>
            </CardContent>
          </Card> */}

          {/* Formula Database Promo */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-2 text-primary" />
                {t("common.formula_database")}
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                {language === "es"
                  ? "Accede a nuestra colección completa de fórmulas matemáticas, incluyendo algoritmos de métodos numéricos."
                  : "Access our comprehensive collection of mathematical formulas, including numerical method algorithms."}
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
                <Link href="/topics/software/programming" className="text-primary hover:underline text-lg">
                  {language === "es" ? "Programación" : "Programming"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende a implementar métodos numéricos en código"
                    : "Learn to implement numerical methods in code"}
                </p>
              </div>
            </div>
          </Card>

          {/* <Card className="overflow-hidden">
            <div className="p-6 flex items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 p-3 rounded-lg">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {language === "es" ? "Aplicación Relacionada" : "Related Application"}
                </h3>
                <Link
                  href="/topics/mechanical/finite-element-analysis"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Análisis de Elementos Finitos" : "Finite Element Analysis"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Observa cómo se aplican los métodos numéricos en ingeniería mecánica"
                    : "See how numerical methods are applied in mechanical engineering"}
                </p>
              </div>
            </div>
          </Card> */}
        </div>
      </section>
    </div>
  )
}
