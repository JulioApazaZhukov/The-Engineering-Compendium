"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function AlgebraicIntegralsPage() {
  const { language } = useLanguage()

  return (
    <div className="container py-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          {language === "es" ? "Inicio" : "Home"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics" className="hover:text-foreground">
          {language === "es" ? "Temas" : "Topics"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics/mathematics" className="hover:text-foreground">
          {language === "es" ? "Matemáticas" : "Mathematics"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics/mathematics/integral-calculus" className="hover:text-foreground">
          {language === "es" ? "Cálculo Integral" : "Integral Calculus"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">
          {language === "es" ? "Integrales Algebraicas" : "Algebraic Integrals"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Integrales Algebraicas" : "Algebraic Integrals"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Técnicas para integrar expresiones algebraicas"
              : "Techniques for integrating algebraic expressions"}
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/topics/mathematics/integral-calculus" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "es" ? "Volver a Cálculo Integral" : "Back to Integral Calculus"}
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
              {language === "es" ? "Introducción" : "Introduction"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Las integrales algebraicas involucran la integración de expresiones que contienen funciones algebraicas, como polinomios, funciones racionales (cocientes de polinomios), y expresiones con raíces. Estas integrales son fundamentales en cálculo y tienen numerosas aplicaciones en física, ingeniería y otras ciencias."
                  : "Algebraic integrals involve the integration of expressions containing algebraic functions, such as polynomials, rational functions (quotients of polynomials), and expressions with roots. These integrals are fundamental in calculus and have numerous applications in physics, engineering, and other sciences."}
              </p>
              <p>
                {language === "es"
                  ? "En esta página, presentamos técnicas y fórmulas para resolver varios tipos de integrales algebraicas, desde las más simples hasta las más complejas."
                  : "On this page, we present techniques and formulas for solving various types of algebraic integrals, from the simplest to the more complex ones."}
              </p>
            </div>
          </section>

          {/* Polynomial Integrals */}
          <section>
            <h2 id="polynomial" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Integrales de Polinomios" : "Polynomial Integrals"}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p>
                    {language === "es"
                      ? "Los polinomios son las expresiones algebraicas más simples de integrar. Aplicamos la regla de la potencia término por término."
                      : "Polynomials are the simplest algebraic expressions to integrate. We apply the power rule term by term."}
                  </p>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <div className="text-center">
                      <MathDisplay math="\int (a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0) \, dx = \frac{a_n x^{n+1}}{n+1} + \frac{a_{n-1} x^n}{n} + \ldots + \frac{a_1 x^2}{2} + a_0 x + C" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">{language === "es" ? "Ejemplo" : "Example"}</h3>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int (3x^4 - 2x^2 + 5x - 7) \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{3x^5}{5} - \frac{2x^3}{3} + \frac{5x^2}{2} - 7x + C" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{3x^5}{5} - \frac{2x^3}{3} + \frac{5x^2}{2} - 7x + C" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Rational Functions */}
          <section>
            <h2 id="rational" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Funciones Racionales" : "Rational Functions"}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p>
                    {language === "es"
                      ? "Una función racional es el cociente de dos polinomios. Para integrar funciones racionales, generalmente usamos la técnica de descomposición en fracciones parciales."
                      : "A rational function is the quotient of two polynomials. To integrate rational functions, we generally use the technique of partial fraction decomposition."}
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "es"
                        ? "Pasos para la Descomposición en Fracciones Parciales"
                        : "Steps for Partial Fraction Decomposition"}
                    </h3>
                    <ol className="list-decimal list-inside space-y-2 text-sm">
                      <li>
                        {language === "es"
                          ? "Asegúrate de que el grado del numerador sea menor que el grado del denominador. Si no, divide primero."
                          : "Ensure that the degree of the numerator is less than the degree of the denominator. If not, divide first."}
                      </li>
                      <li>
                        {language === "es"
                          ? "Factoriza el denominador en factores lineales y cuadráticos irreducibles."
                          : "Factor the denominator into linear and irreducible quadratic factors."}
                      </li>
                      <li>
                        {language === "es"
                          ? "Escribe la descomposición en fracciones parciales según los factores del denominador."
                          : "Write the partial fraction decomposition according to the factors of the denominator."}
                      </li>
                      <li>
                        {language === "es"
                          ? "Resuelve para los coeficientes desconocidos."
                          : "Solve for the unknown coefficients."}
                      </li>
                      <li>
                        {language === "es" ? "Integra cada término resultante." : "Integrate each resulting term."}
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "es" ? "Formas Comunes" : "Common Forms"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="text-center mb-2">
                          <MathDisplay math="\int \frac{1}{x-a} \, dx = \ln|x-a| + C" />
                        </div>
                      </div>
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="text-center mb-2">
                          <MathDisplay math="\int \frac{1}{(x-a)^n} \, dx = \frac{-1}{(n-1)(x-a)^{n-1}} + C, \quad n \neq 1" />
                        </div>
                      </div>
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="text-center mb-2">
                          <MathDisplay math="\int \frac{1}{x^2+a^2} \, dx = \frac{1}{a} \arctan\left(\frac{x}{a}\right) + C" />
                        </div>
                      </div>
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="text-center mb-2">
                          <MathDisplay math="\int \frac{1}{x^2-a^2} \, dx = \frac{1}{2a} \ln\left|\frac{x-a}{x+a}\right| + C" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">{language === "es" ? "Ejemplo" : "Example"}</h3>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \frac{5x+3}{x^2-4} \, dx" />
                        </div>
                        <p className="text-sm">
                          {language === "es"
                            ? "Primero, factorizamos el denominador: x² - 4 = (x-2)(x+2)"
                            : "First, we factor the denominator: x² - 4 = (x-2)(x+2)"}
                        </p>
                        <p className="text-sm">
                          {language === "es"
                            ? "Luego, escribimos la descomposición en fracciones parciales:"
                            : "Then, we write the partial fraction decomposition:"}
                        </p>
                        <div>
                          <MathDisplay math="\frac{5x+3}{(x-2)(x+2)} = \frac{A}{x-2} + \frac{B}{x+2}" />
                        </div>
                        <p className="text-sm">
                          {language === "es"
                            ? "Resolviendo para A y B, obtenemos A = 4, B = 1"
                            : "Solving for A and B, we get A = 4, B = 1"}
                        </p>
                        <div>
                          <MathDisplay math="\int \frac{5x+3}{x^2-4} \, dx = \int \left(\frac{4}{x-2} + \frac{1}{x+2}\right) \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="= 4\ln|x-2| + \ln|x+2| + C" />
                        </div>
                        <div>
                          <MathDisplay math="= \ln|(x-2)^4(x+2)| + C" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Integrals with Roots */}
          <section>
            <h2 id="roots" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Integrales con Raíces" : "Integrals with Roots"}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <p>
                    {language === "es"
                      ? "Las integrales que contienen expresiones con raíces a menudo requieren sustituciones específicas para simplificarlas."
                      : "Integrals containing expressions with roots often require specific substitutions to simplify them."}
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "es" ? "Formas Comunes" : "Common Forms"}
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="text-center mb-2">
                          <MathDisplay math="\int \sqrt{ax+b} \, dx = \frac{2(ax+b)^{3/2}}{3a} + C" />
                        </div>
                      </div>
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="text-center mb-2">
                          <MathDisplay math="\int \frac{1}{\sqrt{ax+b}} \, dx = \frac{2\sqrt{ax+b}}{a} + C" />
                        </div>
                      </div>
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="text-center mb-2">
                          <MathDisplay math="\int \sqrt{a^2-x^2} \, dx = \frac{x\sqrt{a^2-x^2}}{2} + \frac{a^2}{2}\arcsin\left(\frac{x}{a}\right) + C" />
                        </div>
                      </div>
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="text-center mb-2">
                          <MathDisplay math="\int \sqrt{x^2+a^2} \, dx = \frac{x\sqrt{x^2+a^2}}{2} + \frac{a^2}{2}\ln\left|x + \sqrt{x^2+a^2}\right| + C" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">{language === "es" ? "Ejemplo" : "Example"}</h3>
                    <div className="bg-muted/30 p-4 rounded-lg">
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int x\sqrt{2x+3} \, dx" />
                        </div>
                        <p className="text-sm">
                          {language === "es"
                            ? "Usamos la sustitución u = 2x+3, entonces x = (u-3)/2 y dx = du/2"
                            : "We use the substitution u = 2x+3, so x = (u-3)/2 and dx = du/2"}
                        </p>
                        <div>
                          <MathDisplay math="\int x\sqrt{2x+3} \, dx = \int \frac{u-3}{2} \cdot \sqrt{u} \cdot \frac{du}{2}" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{1}{4} \int (u-3)u^{1/2} \, du" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{1}{4} \int (u^{3/2} - 3u^{1/2}) \, du" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{1}{4} \left(\frac{2u^{5/2}}{5} - \frac{6u^{3/2}}{3}\right) + C" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{1}{4} \left(\frac{2u^{5/2}}{5} - 2u^{3/2}\right) + C" />
                        </div>
                        <p className="text-sm">
                          {language === "es" ? "Sustituyendo de vuelta u = 2x+3:" : "Substituting back u = 2x+3:"}
                        </p>
                        <div>
                          <MathDisplay math="= \frac{1}{4} \left(\frac{2(2x+3)^{5/2}}{5} - 2(2x+3)^{3/2}\right) + C" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{(2x+3)^{5/2}}{10} - \frac{(2x+3)^{3/2}}{2} + C" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>

        {/* Sidebar Column */}
        <div className="space-y-6">
          {/* Table of Contents */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">{language === "es" ? "En Esta Página" : "On This Page"}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#introduction" className="text-primary hover:underline">
                    {language === "es" ? "Introducción" : "Introduction"}
                  </a>
                </li>
                <li>
                  <a href="#polynomial" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Integrales de Polinomios" : "Polynomial Integrals"}
                  </a>
                </li>
                <li>
                  <a href="#rational" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Funciones Racionales" : "Rational Functions"}
                  </a>
                </li>
                <li>
                  <a href="#roots" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Integrales con Raíces" : "Integrals with Roots"}
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
                    href="/topics/mathematics/integral-calculus/basic-formulas"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Fórmulas Básicas" : "Basic Formulas"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/integral-calculus/trigonometric-integrals"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Integrales Trigonométricas" : "Trigonometric Integrals"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/integral-calculus/integration-methods/integration-by-substitution"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Integración por Sustitución" : "Integration by Substitution"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/integral-calculus/integration-methods/trigonometric-substitution"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Sustitución Trigonométrica" : "Trigonometric Substitution"}
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Formula Card */}
          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-100 dark:border-blue-900">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">{language === "es" ? "Fórmula Clave" : "Key Formula"}</h3>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-sm">
                <MathDisplay math="\int \frac{P(x)}{Q(x)} \, dx" />
                <p className="text-sm mt-2 text-center">
                  {language === "es"
                    ? "Usa descomposición en fracciones parciales"
                    : "Use partial fraction decomposition"}
                </p>
              </div>
              <p className="text-sm mt-3 text-muted-foreground">
                {language === "es"
                  ? "Para funciones racionales, la descomposición en fracciones parciales es una técnica poderosa que simplifica la integración."
                  : "For rational functions, partial fraction decomposition is a powerful technique that simplifies integration."}
              </p>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">
                {language === "es" ? "Recursos de Aprendizaje" : "Learning Resources"}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">
                      {language === "es" ? "Problemas Resueltos" : "Solved Problems"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Práctica con soluciones paso a paso"
                        : "Practice with step-by-step solutions"}
                    </p>
                    <Link
                      //href="/resources/solved-problems?topic=algebraic-integrals"
                      href="/under-development"
                      className="text-xs text-primary hover:underline"
                    >
                      {language === "es" ? "Ver problemas" : "View problems"}
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
                      //href="/resources/tools/integration-calculator"
                      href="https://www.integral-calculator.com/"
                      className="text-xs text-primary hover:underline"
                    >
                      {language === "es" ? "Usar calculadora" : "Use calculator"}
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Next Steps */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">{language === "es" ? "Continuar Aprendiendo" : "Continue Learning"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="p-6 flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 p-3 rounded-lg">
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{language === "es" ? "Siguiente Tema" : "Next Topic"}</h3>
                <Link
                  href="/topics/mathematics/integral-calculus/trigonometric-integrals"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Integrales Trigonométricas" : "Trigonometric Integrals"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende técnicas para integrar expresiones trigonométricas"
                    : "Learn techniques for integrating trigonometric expressions"}
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
                  {language === "es" ? "Base de Datos de Fórmulas" : "Formula Database"}
                </h3>
                <Link href="/resources/tools/formula-database" className="text-primary hover:underline text-lg">
                  {language === "es" ? "Fórmulas de Integración" : "Integration Formulas"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Accede a nuestra colección completa de fórmulas de integración"
                    : "Access our comprehensive collection of integration formulas"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
