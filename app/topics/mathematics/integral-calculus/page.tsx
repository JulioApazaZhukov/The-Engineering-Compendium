"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight, Database } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function IntegralCalculusPage() {
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
        <span className="text-foreground font-medium">{t("integral.title")}</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">{t("integral.title")}</h1>
          <p className="text-muted-foreground">{t("integral.subtitle")}</p>
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
              {t("integral.intro")}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "El cálculo integral es el estudio de la integración, que puede considerarse como el proceso inverso de la diferenciación. Se utiliza para encontrar áreas, volúmenes, puntos centrales y muchas cantidades útiles. La integración nos ayuda a comprender la acumulación de cantidades y las relaciones entre una función y su tasa de cambio."
                  : "Integral calculus is the study of integration, which can be thought of as the reverse process of differentiation. It is used to find areas, volumes, central points, and many useful quantities. Integration helps us to understand the accumulation of quantities and the relationships between a function and its rate of change."}
              </p>
              <p>
                {language === "es"
                  ? "El concepto fundamental en el cálculo integral es la integral definida, que representa el área bajo una curva entre dos puntos. La integral definida de una función f(x) desde a hasta b se denota como:"
                  : "The fundamental concept in integral calculus is the definite integral, which represents the area under a curve between two points. The definite integral of a function f(x) from a to b is denoted as:"}
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="\int_{a}^{b} f(x) \, dx" />
              </div>
              <p>
                {language === "es"
                  ? "El Teorema Fundamental del Cálculo establece la relación entre diferenciación e integración:"
                  : "The Fundamental Theorem of Calculus establishes the relationship between differentiation and integration:"}
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="\int_{a}^{b} f(x) \, dx = F(b) - F(a)" />
              </div>
              <p>
                {language === "es"
                  ? "Donde F(x) es una antiderivada de f(x), lo que significa que F'(x) = f(x). Este poderoso teorema nos permite evaluar integrales definidas encontrando antiderivadas."
                  : "Where F(x) is an antiderivative of f(x), meaning that F'(x) = f(x). This powerful theorem allows us to evaluate definite integrals by finding antiderivatives."}
              </p>
            </div>
          </section>

          {/* Methods of Integration Section */}
          <section>
            <h2 id="methods" className="text-2xl font-bold mb-6 scroll-mt-16">
              {t("integral.methods")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Integration by Parts */}
              <Card id="integration-by-parts" className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{t("integration.by_parts")}</CardTitle>
                  <CardDescription>{t("integration.by_parts_desc")}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\int u \, dv = uv - \int v \, du" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Se utiliza para integrales donde el integrando puede expresarse como un producto de dos funciones, especialmente cuando una función se vuelve más simple al diferenciarse."
                      : "Used for integrals where the integrand can be expressed as a product of two functions, especially when one function becomes simpler when differentiated."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link
                      href="/topics/mathematics/integral-calculus/integration-methods/integration-by-parts"
                      className="w-full"
                    >
                      {t("common.learn_more")}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Integration by Substitution */}
              <Card id="integration-by-substitution" className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{t("integration.by_substitution")}</CardTitle>
                  <CardDescription>{t("integration.by_substitution_desc")}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\int f(g(x))g'(x) \, dx = \int f(u) \, du" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Útil cuando el integrando contiene una función compuesta, permitiéndonos simplificar la integral sustituyendo una nueva variable."
                      : "Useful when the integrand contains a composite function, allowing us to simplify the integral by substituting a new variable."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link
                      href="/topics/mathematics/integral-calculus/integration-methods/integration-by-substitution"
                      className="w-full"
                    >
                      {t("common.learn_more")}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Integration by Trigonometric Substitution */}
              <Card id="trigonometric-substitution" className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{t("integration.trigonometric")}</CardTitle>
                  <CardDescription>{t("integration.trigonometric_desc")}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\int \sqrt{a^2 - x^2} \, dx \quad \text{let} \quad x = a\sin\theta" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Efectiva para integrales que involucran expresiones como √(a² - x²), √(a² + x²), o √(x² - a²), que pueden transformarse usando sustituciones trigonométricas."
                      : "Effective for integrals involving expressions like √(a² - x²), √(a² + x²), or √(x² - a²), which can be transformed using trigonometric substitutions."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link
                      href="/topics/mathematics/integral-calculus/integration-methods/trigonometric-substitution"
                      className="w-full"
                    >
                      {t("common.learn_more")}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Integration by Universal Substitution */}
              <Card id="universal-substitution" className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{t("integration.universal")}</CardTitle>
                  <CardDescription>{t("integration.universal_desc")}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\int R(\sin x, \cos x) \, dx \quad \text{let} \quad t = \tan\frac{x}{2}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Una técnica poderosa para integrar funciones racionales de seno y coseno, convirtiéndolas en funciones racionales de una nueva variable."
                      : "A powerful technique for integrating rational functions of sine and cosine, converting them to rational functions of a new variable."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link
                      href="/topics/mathematics/integral-calculus/integration-methods/universal-substitution"
                      className="w-full"
                    >
                      {t("common.learn_more")}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Integral Formulas Section */}
          <section>
            <h2 id="formulas" className="text-2xl font-bold mb-6 scroll-mt-16">
              {t("integral.formulas")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Formulas */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Fórmulas Básicas" : "Basic Formulas"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Fórmulas fundamentales de integración para funciones comunes"
                      : "Fundamental integration formulas for common functions"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Fórmulas esenciales de integración que incluyen funciones de potencia, exponenciales, logarítmicas y trigonométricas básicas."
                      : "Essential integration formulas including power, exponential, logarithmic, and basic trigonometric functions."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/integral-calculus/basic-formulas" className="w-full">
                      {language === "es" ? "Ver Fórmulas" : "View Formulas"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Algebraic Integrals */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Integrales Algebraicas" : "Algebraic Integrals"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Fórmulas para integrar expresiones algebraicas"
                      : "Formulas for integrating algebraic expressions"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\int \frac{1}{a^2 + x^2} \, dx = \frac{1}{a} \arctan\left(\frac{x}{a}\right) + C" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Fórmulas de integración para funciones racionales, radicales y otras expresiones algebraicas."
                      : "Integration formulas for rational functions, radicals, and other algebraic expressions."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/integral-calculus/algebraic-integrals" className="w-full">
                      {language === "es" ? "Ver Fórmulas" : "View Formulas"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Trigonometric Integrals */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Integrales Trigonométricas" : "Trigonometric Integrals"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Fórmulas para integrar funciones trigonométricas"
                      : "Formulas for integrating trigonometric functions"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\int \sin^2(x) \, dx = \frac{x}{2} - \frac{\sin(2x)}{4} + C" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Fórmulas de integración para funciones trigonométricas y sus productos, potencias y combinaciones."
                      : "Integration formulas for trigonometric functions and their products, powers, and combinations."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/integral-calculus/trigonometric-integrals" className="w-full">
                      {language === "es" ? "Ver Fórmulas" : "View Formulas"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Formula Database */}
              <Card className="hover:shadow-md transition-shadow bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900 h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2 text-primary" />
                    {t("common.formula_database")}
                  </CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Colección completa de fórmulas de integración"
                      : "Comprehensive collection of integration formulas"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Accede a nuestra base de datos completa de fórmulas de integración, con búsqueda por tipo, complejidad y función. Incluye fórmulas para todas las integrales estándar y funciones especiales."
                      : "Access our complete database of integration formulas, searchable by type, complexity, and function. Includes formulas for all standard integrals and special functions."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/resources/tools/formula-database" className="w-full">
                      {t("common.explore_database")}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Applications Section */}
          <section>
            <h2 id="applications" className="text-2xl font-bold mb-4 scroll-mt-16">
              {t("integral.applications")}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "El cálculo integral tiene numerosas aplicaciones en ingeniería y ciencia:"
                  : "Integral calculus has numerous applications in engineering and science:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Cálculo de Áreas:" : "Area Calculation:"}</strong>{" "}
                  {language === "es"
                    ? "Encontrar el área bajo curvas o entre curvas."
                    : "Finding the area under curves or between curves."}
                </li>
                <li>
                  <strong>{language === "es" ? "Cálculo de Volúmenes:" : "Volume Calculation:"}</strong>{" "}
                  {language === "es"
                    ? "Determinar volúmenes de sólidos de revolución o sólidos con secciones transversales conocidas."
                    : "Determining volumes of solids of revolution or solids with known cross-sections."}
                </li>
                <li>
                  <strong>{language === "es" ? "Trabajo y Energía:" : "Work and Energy:"}</strong>{" "}
                  {language === "es"
                    ? "Calcular el trabajo realizado por una fuerza variable o la energía en sistemas físicos."
                    : "Calculating work done by a variable force or energy in physical systems."}
                </li>
                <li>
                  <strong>{language === "es" ? "Centro de Masa:" : "Center of Mass:"}</strong>{" "}
                  {language === "es"
                    ? "Encontrar el centro de masa de objetos con densidad variable."
                    : "Finding the center of mass of objects with variable density."}
                </li>
                <li>
                  <strong>{language === "es" ? "Probabilidad:" : "Probability:"}</strong>{" "}
                  {language === "es"
                    ? "Calcular probabilidades en distribuciones de probabilidad continuas."
                    : "Computing probabilities in continuous probability distributions."}
                </li>
                <li>
                  <strong>{language === "es" ? "Procesamiento de Señales:" : "Signal Processing:"}</strong>{" "}
                  {language === "es"
                    ? "Analizar y procesar señales continuas en ingeniería eléctrica."
                    : "Analyzing and processing continuous signals in electrical engineering."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "En ingeniería, el cálculo integral es esencial para analizar sistemas físicos, diseñar estructuras y resolver problemas que involucran acumulación y efecto total."
                  : "In engineering, integral calculus is essential for analyzing physical systems, designing structures, and solving problems involving accumulation and total effect."}
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
                  <a href="#methods" className="text-muted-foreground group-hover:text-primary">
                    {t("integral.methods")}
                  </a>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#methods" className="text-muted-foreground group-hover:text-primary">
                        {t("integration.by_parts")}
                      </a>
                    </li>
                    <li>
                      <a href="#methods" className="text-muted-foreground group-hover:text-primary">
                        {t("integration.by_substitution")}
                      </a>
                    </li>
                    <li>
                      <a href="#methods" className="text-muted-foreground group-hover:text-primary">
                        {t("integration.trigonometric")}
                      </a>
                    </li>
                    <li>
                      <a href="#methods" className="text-muted-foreground group-hover:text-primary">
                        {t("integration.universal")}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#formulas" className="text-muted-foreground hover:text-primary">
                    {t("integral.formulas")}
                  </a>
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
                  <Link
                    href="/topics/mathematics/differential-calculus"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {t("math.differential_calculus")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-equations"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {t("math.differential_equations")}
                  </Link>
                </li>
                <li>
                  <Link
                    //href="/topics/mathematics/multivariable-calculus"
                    href="/The-Engineering-Compendium/under-development"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Cálculo Multivariable" : "Multivariable Calculus"}
                  </Link>
                </li>
                <li>
                  <Link
                    //href="/topics/physics/mechanics"
                    href="/The-Engineering-Compendium/under-development"
                    className="text-primary hover:underline flex items-center"
                  >
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
                      //href="/resources/solved-problems?topic=integral-calculus"
                      href="/The-Engineering-Compendium/under-development"
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
                        ? "Libros y artículos sobre cálculo integral"
                        : "Books and articles on integral calculus"}
                    </p>
                    <Link
                      href="/resources/bibliography?topic=integral-calculus"
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
                      {language === "es" ? "Calculadora de Integración" : "Integration Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta interactiva para calcular integrales"
                        : "Interactive tool for calculating integrals"}
                    </p>
                    <Link
                      //href="/resources/tools/integration-calculator" shall not happen
                      href="https://www.integral-calculator.com/"
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
                src="/The-Engineering-Compendium/integral.png?height=200&width=400"
                alt="Integration visualization"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-center text-muted-foreground">
                {language === "es"
                  ? "Visualización de una función (azul) y su integral (verde)"
                  : "Visualization of a function (blue) and its integral (green)"}
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
                  ? "Accede a nuestra colección completa de fórmulas matemáticas, incluyendo fórmulas de integración y técnicas."
                  : "Access our comprehensive collection of mathematical formulas, including integration formulas and techniques."}
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
                <Link
                  href="/topics/mathematics/differential-equations"
                  className="text-primary hover:underline text-lg"
                >
                  {t("math.differential_equations")}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende sobre ecuaciones que involucran derivadas y sus aplicaciones"
                    : "Learn about equations involving derivatives and their applications"}
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
                <Link href="/topics/physics/mechanics" className="text-primary hover:underline text-lg">
                  {language === "es" ? "Mecánica" : "Mechanics"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Observa cómo se aplica el cálculo integral en física e ingeniería"
                    : "See how integral calculus is applied in physics and engineering"}
                </p>
              </div>
            </div>
          </Card> */}
        </div>
      </section>
    </div>
  )
}
