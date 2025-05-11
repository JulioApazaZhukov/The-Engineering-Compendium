"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function ProbabilityStatisticsPage() {
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
          {language === "es" ? "Probabilidad y Estadística" : "Probability & Statistics"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Probabilidad y Estadística" : "Probability & Statistics"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "El estudio de la incertidumbre, datos y toma de decisiones"
              : "The study of uncertainty, data, and decision making"}
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
                ? "Introducción a la Probabilidad y Estadística"
                : "Introduction to Probability & Statistics"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La probabilidad y la estadística son ramas de las matemáticas que se ocupan del análisis de fenómenos aleatorios, la recopilación, análisis, interpretación y presentación de datos, y la toma de decisiones en condiciones de incertidumbre. Estas disciplinas son fundamentales en ingeniería, ciencia, economía, y muchos otros campos."
                  : "Probability and statistics are branches of mathematics that deal with the analysis of random phenomena, the collection, analysis, interpretation, and presentation of data, and decision-making under uncertainty. These disciplines are fundamental in engineering, science, economics, and many other fields."}
              </p>
              <p>
                {language === "es"
                  ? "La probabilidad proporciona el marco teórico para modelar la incertidumbre y la aleatoriedad, mientras que la estadística ofrece métodos para recopilar, analizar e interpretar datos para hacer inferencias y tomar decisiones."
                  : "Probability provides the theoretical framework for modeling uncertainty and randomness, while statistics offers methods for collecting, analyzing, and interpreting data to make inferences and decisions."}
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}" />
              </div>
              <p>
                {language === "es"
                  ? "Esta es la fórmula del teorema de Bayes, un principio fundamental en probabilidad que relaciona la probabilidad condicional de un evento dado otro evento. Es ampliamente utilizado en ingeniería, aprendizaje automático y análisis de datos."
                  : "This is the formula for Bayes' theorem, a fundamental principle in probability that relates the conditional probability of an event given another event. It is widely used in engineering, machine learning, and data analysis."}
              </p>
            </div>
          </section>

          {/* Key Topics Section */}
          <section>
            <h2 id="key-topics" className="text-2xl font-bold mb-6 scroll-mt-16">
              {language === "es" ? "Temas Principales" : "Key Topics"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Probability Theory */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Teoría de la Probabilidad" : "Probability Theory"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Fundamentos de la probabilidad y eventos aleatorios"
                      : "Fundamentals of probability and random events"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="P(A \cup B) = P(A) + P(B) - P(A \cap B)" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Axiomas de probabilidad, probabilidad condicional, independencia, variables aleatorias y distribuciones."
                      : "Probability axioms, conditional probability, independence, random variables, and distributions."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/probability-statistics/probability-theory" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Descriptive Statistics */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Estadística Descriptiva" : "Descriptive Statistics"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Métodos para resumir y visualizar datos"
                      : "Methods for summarizing and visualizing data"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Medidas de tendencia central, dispersión, visualización de datos y análisis exploratorio."
                      : "Measures of central tendency, dispersion, data visualization, and exploratory analysis."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/probability-statistics/descriptive-statistics" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Probability Distributions */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es" ? "Distribuciones de Probabilidad" : "Probability Distributions"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Modelos matemáticos para variables aleatorias"
                      : "Mathematical models for random variables"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="f(x) = \frac{1}{\sigma\sqrt{2\pi}}e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Distribuciones discretas y continuas, propiedades y aplicaciones en ingeniería."
                      : "Discrete and continuous distributions, properties, and applications in engineering."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/probability-statistics/distributions" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Statistical Inference */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Inferencia Estadística" : "Statistical Inference"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Métodos para hacer conclusiones a partir de datos"
                      : "Methods for drawing conclusions from data"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\hat{\theta} = \arg\max_{\theta} L(\theta|x)" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Estimación puntual, intervalos de confianza, pruebas de hipótesis y métodos bayesianos."
                      : "Point estimation, confidence intervals, hypothesis testing, and Bayesian methods."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/probability-statistics/inference" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Regression Analysis */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Análisis de Regresión" : "Regression Analysis"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Modelado de relaciones entre variables"
                      : "Modeling relationships between variables"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="y = \beta_0 + \beta_1 x + \varepsilon" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Regresión lineal simple y múltiple, evaluación de modelos y predicción."
                      : "Simple and multiple linear regression, model evaluation, and prediction."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/probability-statistics/regression" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Experimental Design */}
              <Card className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Diseño Experimental" : "Experimental Design"}</CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Planificación de experimentos para obtener datos válidos"
                      : "Planning experiments to obtain valid data"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="y_{ijk} = \mu + \alpha_i + \beta_j + (\alpha\beta)_{ij} + \varepsilon_{ijk}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Principios de diseño, ANOVA, diseños factoriales y optimización de experimentos."
                      : "Design principles, ANOVA, factorial designs, and experiment optimization."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/probability-statistics/experimental-design" className="w-full">
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
                  ? "La probabilidad y la estadística tienen numerosas aplicaciones en ingeniería y ciencia:"
                  : "Probability and statistics have numerous applications in engineering and science:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Control de Calidad:" : "Quality Control:"}</strong>{" "}
                  {language === "es"
                    ? "Muestreo, gráficos de control y análisis de capacidad de procesos."
                    : "Sampling, control charts, and process capability analysis."}
                </li>
                <li>
                  <strong>{language === "es" ? "Fiabilidad:" : "Reliability:"}</strong>{" "}
                  {language === "es"
                    ? "Análisis de fallos, tiempo medio entre fallos y mantenimiento predictivo."
                    : "Failure analysis, mean time between failures, and predictive maintenance."}
                </li>
                <li>
                  <strong>{language === "es" ? "Análisis de Datos:" : "Data Analysis:"}</strong>{" "}
                  {language === "es"
                    ? "Minería de datos, aprendizaje automático y análisis predictivo."
                    : "Data mining, machine learning, and predictive analytics."}
                </li>
                <li>
                  <strong>{language === "es" ? "Investigación de Operaciones:" : "Operations Research:"}</strong>{" "}
                  {language === "es"
                    ? "Teoría de colas, simulación y optimización estocástica."
                    : "Queueing theory, simulation, and stochastic optimization."}
                </li>
                <li>
                  <strong>{language === "es" ? "Ingeniería Financiera:" : "Financial Engineering:"}</strong>{" "}
                  {language === "es"
                    ? "Gestión de riesgos, valoración de opciones y análisis de inversiones."
                    : "Risk management, option pricing, and investment analysis."}
                </li>
                <li>
                  <strong>{language === "es" ? "Bioestadística:" : "Biostatistics:"}</strong>{" "}
                  {language === "es"
                    ? "Diseño de ensayos clínicos, epidemiología y análisis de supervivencia."
                    : "Clinical trial design, epidemiology, and survival analysis."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "En ingeniería, la probabilidad y la estadística son esenciales para la toma de decisiones basada en datos, la cuantificación de la incertidumbre y la optimización de sistemas y procesos."
                  : "In engineering, probability and statistics are essential for data-driven decision making, quantifying uncertainty, and optimizing systems and processes."}
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
                        {language === "es" ? "Teoría de la Probabilidad" : "Probability Theory"}
                      </a>
                    </li>
                    <li>
                      <a href="#key-topics" className="text-muted-foreground group-hover:text-primary">
                        {language === "es" ? "Estadística Descriptiva" : "Descriptive Statistics"}
                      </a>
                    </li>
                    <li>
                      <a href="#key-topics" className="text-muted-foreground group-hover:text-primary">
                        {language === "es" ? "Inferencia Estadística" : "Statistical Inference"}
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
                    href="/topics/mathematics/numerical-methods"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Métodos Numéricos" : "Numerical Methods"}
                  </Link>
                </li>
                <li>
                  <Link href="/topics/software/data-science" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Ciencia de Datos" : "Data Science"}
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
                      //href="/resources/solved-problems?topic=probability-statistics"
                      href="../../../../under-development"
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
                        ? "Libros y artículos sobre probabilidad y estadística"
                        : "Books and articles on probability and statistics"}
                    </p>
                    <Link
                      href="/resources/bibliography?topic=probability-statistics"
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
                      {language === "es" ? "Calculadora Estadística" : "Statistical Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta interactiva para cálculos estadísticos"
                        : "Interactive tool for statistical calculations"}
                    </p>
                    <Link
                      href="/resources/tools/statistical-calculator"
                      className="text-xs text-primary hover:underline"
                    >
                      {t("common.use_calculator")}
                    </Link>
                  </div>
                </div> */}
              </div>
            </CardContent>
          </Card>

          {/* Visual Aid: Not now
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Normal distribution visualization"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-center text-muted-foreground">
                {language === "es"
                  ? "Visualización de la distribución normal y sus propiedades"
                  : "Visualization of the normal distribution and its properties"}
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
                  ? "Accede a nuestra colección completa de fórmulas matemáticas, incluyendo fórmulas de probabilidad y estadística."
                  : "Access our comprehensive collection of mathematical formulas, including probability and statistics formulas."}
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

          {/* <Card className="overflow-hidden">
            <div className="p-6 flex items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 p-3 rounded-lg">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">
                  {language === "es" ? "Aplicación Relacionada" : "Related Application"}
                </h3>
                <Link href="/topics/industrial/quality-control" className="text-primary hover:underline text-lg">
                  {language === "es" ? "Control de Calidad" : "Quality Control"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Observa cómo se aplican la probabilidad y la estadística en ingeniería industrial"
                    : "See how probability and statistics are applied in industrial engineering"}
                </p>
              </div>
            </div>
          </Card> */}
        </div>
      </section>
    </div>
  )
}
