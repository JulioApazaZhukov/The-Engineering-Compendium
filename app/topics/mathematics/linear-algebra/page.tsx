"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function LinearAlgebraPage() {
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
        <span className="text-foreground font-medium">{language === "es" ? "Álgebra Lineal" : "Linear Algebra"}</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Álgebra Lineal" : "Linear Algebra"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "El estudio de vectores, matrices y transformaciones lineales"
              : "The study of vectors, matrices, and linear transformations"}
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
              {language === "es" ? "Introducción al Álgebra Lineal" : "Introduction to Linear Algebra"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "El álgebra lineal es una rama de las matemáticas que se ocupa de los espacios vectoriales, las transformaciones lineales, los sistemas de ecuaciones lineales y sus representaciones a través de matrices y determinantes. Es fundamental para la ingeniería, la física, la informática y muchas otras disciplinas."
                  : "Linear algebra is a branch of mathematics that deals with vector spaces, linear transformations, systems of linear equations, and their representations through matrices and determinants. It is fundamental to engineering, physics, computer science, and many other disciplines."}
              </p>
              <p>
                {language === "es"
                  ? "Los conceptos clave del álgebra lineal incluyen vectores, matrices, sistemas de ecuaciones lineales, espacios vectoriales, transformaciones lineales, valores propios y vectores propios. Estos conceptos proporcionan herramientas poderosas para modelar y resolver problemas en diversas áreas de la ciencia y la ingeniería."
                  : "Key concepts in linear algebra include vectors, matrices, systems of linear equations, vector spaces, linear transformations, eigenvalues, and eigenvectors. These concepts provide powerful tools for modeling and solving problems in various areas of science and engineering."}
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="A\vec{x} = \vec{b}" />
              </div>
              <p>
                {language === "es"
                  ? "Esta ecuación representa un sistema de ecuaciones lineales, donde A es una matriz de coeficientes, x es un vector de incógnitas, y b es un vector de términos constantes. Resolver este sistema es uno de los problemas fundamentales del álgebra lineal."
                  : "This equation represents a system of linear equations, where A is a coefficient matrix, x is a vector of unknowns, and b is a vector of constant terms. Solving this system is one of the fundamental problems in linear algebra."}
              </p>
            </div>
          </section>

          {/* Key Topics Section */}
          <section>
            <h2 id="key-topics" className="text-2xl font-bold mb-6 scroll-mt-16">
              {language === "es" ? "Temas Principales" : "Key Topics"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Vectors and Vector Spaces */}
              <Card id="vectors-and-spaces" className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es" ? "Vectores y Espacios Vectoriales" : "Vectors and Vector Spaces"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Fundamentos de vectores y sus propiedades"
                      : "Fundamentals of vectors and their properties"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\vec{v} = \begin{pmatrix} v_1 \\ v_2 \\ \vdots \\ v_n \end{pmatrix}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Estudio de vectores, operaciones vectoriales, espacios vectoriales, bases y dimensiones."
                      : "Study of vectors, vector operations, vector spaces, bases, and dimensions."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/linear-algebra/vectors-and-vector-spaces" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Matrices and Matrix Operations */}
              <Card id="matrices-and-operations" className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es" ? "Matrices y Operaciones Matriciales" : "Matrices and Matrix Operations"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Manipulación y operaciones con matrices"
                      : "Manipulation and operations with matrices"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Operaciones matriciales, propiedades, tipos especiales de matrices y aplicaciones."
                      : "Matrix operations, properties, special types of matrices, and applications."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/linear-algebra/matrices-and-operations" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Systems of Linear Equations */}
              <Card id="systems-of-equations" className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es" ? "Sistemas de Ecuaciones Lineales" : "Systems of Linear Equations"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Métodos para resolver sistemas de ecuaciones"
                      : "Methods for solving systems of equations"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\begin{cases} a_{11}x_1 + a_{12}x_2 + \cdots + a_{1n}x_n = b_1 \\ a_{21}x_1 + a_{22}x_2 + \cdots + a_{2n}x_n = b_2 \\ \vdots \\ a_{m1}x_1 + a_{m2}x_2 + \cdots + a_{mn}x_n = b_m \end{cases}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Métodos de eliminación de Gauss-Jordan, inversión de matrices y regla de Cramer."
                      : "Gauss-Jordan elimination methods, matrix inversion, and Cramer's rule."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/linear-algebra/systems-of-equations" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Linear Transformations */}
              <Card id="linear-transformations" className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>{language === "es" ? "Transformaciones Lineales" : "Linear Transformations"}</CardTitle>
                  <CardDescription>
                    {language === "es" ? "Funciones entre espacios vectoriales" : "Functions between vector spaces"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="T(\vec{v}) = A\vec{v}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Propiedades, representación matricial, núcleo e imagen de transformaciones lineales."
                      : "Properties, matrix representation, kernel, and image of linear transformations."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/linear-algebra/linear-transformations" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Eigenvalues and Eigenvectors */}
              <Card id="eigenvalues-eigenvectors" className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es" ? "Valores y Vectores Propios" : "Eigenvalues and Eigenvectors"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es"
                      ? "Análisis de valores y vectores característicos"
                      : "Analysis of characteristic values and vectors"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="A\vec{v} = \lambda\vec{v}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Cálculo de valores y vectores propios, diagonalización y aplicaciones."
                      : "Calculation of eigenvalues and eigenvectors, diagonalization, and applications."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/linear-algebra/eigenvalues-eigenvectors" className="w-full">
                      {language === "es" ? "Aprender Más" : "Learn More"}
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Orthogonality and Least Squares */}
              <Card id="orthogonality-least-squares" className="hover:shadow-md transition-shadow h-full flex flex-col">
                <CardHeader>
                  <CardTitle>
                    {language === "es" ? "Ortogonalidad y Mínimos Cuadrados" : "Orthogonality and Least Squares"}
                  </CardTitle>
                  <CardDescription>
                    {language === "es" ? "Proyecciones y aproximaciones" : "Projections and approximations"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-center my-4">
                    <MathDisplay math="\vec{u} \cdot \vec{v} = 0" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Espacios ortogonales, proyecciones, método de mínimos cuadrados y aplicaciones."
                      : "Orthogonal spaces, projections, least squares method, and applications."}
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/linear-algebra/orthogonality-least-squares" className="w-full">
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
                  ? "El álgebra lineal tiene numerosas aplicaciones en ingeniería y ciencia:"
                  : "Linear algebra has numerous applications in engineering and science:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Gráficos por Computadora:" : "Computer Graphics:"}</strong>{" "}
                  {language === "es"
                    ? "Transformaciones, rotaciones y proyecciones en 2D y 3D."
                    : "Transformations, rotations, and projections in 2D and 3D."}
                </li>
                <li>
                  <strong>{language === "es" ? "Análisis de Datos:" : "Data Analysis:"}</strong>{" "}
                  {language === "es"
                    ? "Reducción de dimensionalidad, análisis de componentes principales (PCA)."
                    : "Dimensionality reduction, principal component analysis (PCA)."}
                </li>
                <li>
                  <strong>{language === "es" ? "Aprendizaje Automático:" : "Machine Learning:"}</strong>{" "}
                  {language === "es"
                    ? "Regresión lineal, redes neuronales y algoritmos de clasificación."
                    : "Linear regression, neural networks, and classification algorithms."}
                </li>
                <li>
                  <strong>{language === "es" ? "Física:" : "Physics:"}</strong>{" "}
                  {language === "es"
                    ? "Mecánica cuántica, teoría de circuitos y mecánica de fluidos."
                    : "Quantum mechanics, circuit theory, and fluid mechanics."}
                </li>
                <li>
                  <strong>{language === "es" ? "Ingeniería Estructural:" : "Structural Engineering:"}</strong>{" "}
                  {language === "es"
                    ? "Análisis de estructuras, método de elementos finitos."
                    : "Structural analysis, finite element method."}
                </li>
                <li>
                  <strong>{language === "es" ? "Optimización:" : "Optimization:"}</strong>{" "}
                  {language === "es"
                    ? "Programación lineal y problemas de optimización."
                    : "Linear programming and optimization problems."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "En ingeniería, el álgebra lineal proporciona herramientas esenciales para modelar sistemas, analizar datos y resolver problemas complejos de manera eficiente."
                  : "In engineering, linear algebra provides essential tools for modeling systems, analyzing data, and solving complex problems efficiently."}
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
                        {language === "es" ? "Vectores y Espacios Vectoriales" : "Vectors and Vector Spaces"}
                      </a>
                    </li>
                    <li>
                      <a href="#key-topics" className="text-muted-foreground group-hover:text-primary">
                        {language === "es" ? "Matrices y Operaciones" : "Matrices and Operations"}
                      </a>
                    </li>
                    <li>
                      <a href="#key-topics" className="text-muted-foreground group-hover:text-primary">
                        {language === "es" ? "Sistemas de Ecuaciones" : "Systems of Equations"}
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
                  <Link
                    href="/topics/mathematics/differential-equations"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Ecuaciones Diferenciales" : "Differential Equations"}
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
                      //href="/resources/solved-problems?topic=linear-algebra"
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
                        ? "Libros y artículos sobre álgebra lineal"
                        : "Books and articles on linear algebra"}
                    </p>
                    <Link
                      href="/under-development"
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
                      {language === "es" ? "Calculadora Matricial" : "Matrix Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta interactiva para operaciones matriciales"
                        : "Interactive tool for matrix operations"}
                    </p>
                    <Link href="/resources/tools/matrix-calculator" className="text-xs text-primary hover:underline">
                      {t("common.use_calculator")}
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visual Aid: Easy but tedious to add
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Linear transformation visualization"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-center text-muted-foreground">
                {language === "es"
                  ? "Visualización de una transformación lineal en el plano"
                  : "Visualization of a linear transformation in the plane"}
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
                  ? "Accede a nuestra colección completa de fórmulas matemáticas, incluyendo fórmulas de álgebra lineal."
                  : "Access our comprehensive collection of mathematical formulas, including linear algebra formulas."}
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
                  {language === "es" ? "Ecuaciones Diferenciales" : "Differential Equations"}
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
                    ? "Observa cómo se aplica el álgebra lineal en física e ingeniería"
                    : "See how linear algebra is applied in physics and engineering"}
                </p>
              </div>
            </div>
          </Card> */}
        </div>
      </section>
    </div>
  )
}
