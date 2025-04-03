"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MathDisplay } from "@/components/math-display"
import { useLanguage } from "@/components/language-provider"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ChevronRight, FileText, Calculator } from "lucide-react"
import Link from "next/link"

export default function BasicFormulasPage() {
  const { language } = useLanguage()
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId === activeSection ? null : sectionId)
  }

  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("basic")

  // Function to handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value)

    // Add a small delay to ensure the DOM has updated
    setTimeout(() => {
      // Check if there's a hash in the URL and scroll to that element
      if (window.location.hash) {
        const id = window.location.hash.substring(1)
        const element = document.getElementById(id)
        if (element) {
          // Scroll to the element with offset for the navbar
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 100,
            behavior: "smooth",
          })
        }
      }
    }, 100)
  }

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
        <span className="text-foreground font-medium">{language === "es" ? "Fórmulas Básicas" : "Basic Formulas"}</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Fórmulas Básicas de Integración" : "Basic Integration Formulas"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Fórmulas fundamentales para calcular integrales"
              : "Fundamental formulas for calculating integrals"}
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
                  ? "Las fórmulas básicas de integración son fundamentales para resolver problemas de cálculo integral. Estas fórmulas proporcionan soluciones directas para integrales comunes y sirven como bloques de construcción para resolver integrales más complejas. Dominar estas fórmulas es esencial para cualquier estudiante de cálculo o ingeniero."
                  : "Basic integration formulas are fundamental to solving integral calculus problems. These formulas provide direct solutions for common integrals and serve as building blocks for solving more complex integrals. Mastering these formulas is essential for any calculus student or engineer."}
              </p>
              <p>
                {language === "es"
                  ? "En esta página, presentamos las fórmulas de integración más importantes, organizadas por categorías para facilitar su referencia. Cada fórmula incluye una breve explicación y, en algunos casos, condiciones o restricciones importantes."
                  : "On this page, we present the most important integration formulas, organized by categories for easy reference. Each formula includes a brief explanation and, in some cases, important conditions or restrictions."}
              </p>
            </div>
          </section>

          {/* Basic Power Rule Section */}
          <section>
            <h2 id="power-rule" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Regla de la Potencia" : "Power Rule"}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "es" ? "Fórmula General" : "General Formula"}
                    </h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {language === "es"
                        ? "Esta fórmula se aplica a cualquier potencia de x, excepto cuando n = -1 (que corresponde a la integral de 1/x)."
                        : "This formula applies to any power of x, except when n = -1 (which corresponds to the integral of 1/x)."}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "es" ? "Caso Especial: n = -1" : "Special Case: n = -1"}
                    </h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \frac{1}{x} \, dx = \ln|x| + C" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {language === "es"
                        ? "Esta es la fórmula para la integral de 1/x. El valor absoluto es importante para asegurar que la fórmula sea válida tanto para x positivo como negativo."
                        : "This is the formula for the integral of 1/x. The absolute value is important to ensure the formula is valid for both positive and negative x."}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">{language === "es" ? "Ejemplos" : "Examples"}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="text-center mb-2">
                          <MathDisplay math="\int x^2 \, dx = \frac{x^3}{3} + C" />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {language === "es" ? "Integral de x²" : "Integral of x²"}
                        </p>
                      </div>
                      <div className="bg-muted/30 p-3 rounded-lg">
                        <div className="text-center mb-2">
                          <MathDisplay math="\int \sqrt{x} \, dx = \int x^{1/2} \, dx = \frac{x^{3/2}}{3/2} = \frac{2x^{3/2}}{3} + C" />
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {language === "es" ? "Integral de la raíz cuadrada de x" : "Integral of square root of x"}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Exponential and Logarithmic Functions */}
          <section>
            <h2 id="exponential-logarithmic" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Funciones Exponenciales y Logarítmicas" : "Exponential and Logarithmic Functions"}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "es" ? "Función Exponencial" : "Exponential Function"}
                    </h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int e^x \, dx = e^x + C" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {language === "es"
                        ? "La función exponencial natural e^x es su propia derivada, por lo que su integral también es e^x."
                        : "The natural exponential function e^x is its own derivative, so its integral is also e^x."}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "es" ? "Función Exponencial General" : "General Exponential Function"}
                    </h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int a^x \, dx = \frac{a^x}{\ln a} + C, \quad a > 0, a \neq 1" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {language === "es"
                        ? "Para cualquier base positiva a (excepto a = 1), esta fórmula proporciona la integral de a^x."
                        : "For any positive base a (except a = 1), this formula provides the integral of a^x."}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "es" ? "Función Logarítmica" : "Logarithmic Function"}
                    </h3>
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \ln x \, dx = x \ln x - x + C" />
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      {language === "es"
                        ? "Esta fórmula se deriva utilizando integración por partes y es fundamental para muchas aplicaciones."
                        : "This formula is derived using integration by parts and is fundamental for many applications."}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Trigonometric Functions */}
          <section>
            <h2 id="trigonometric" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Funciones Trigonométricas" : "Trigonometric Functions"}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "es" ? "Funciones Trigonométricas Básicas" : "Basic Trigonometric Functions"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-center">
                          <MathDisplay math="\int \sin x \, dx = -\cos x + C" />
                        </div>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-center">
                          <MathDisplay math="\int \cos x \, dx = \sin x + C" />
                        </div>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-center">
                          <MathDisplay math="\int \tan x \, dx = -\ln|\cos x| + C = \ln|\sec x| + C" />
                        </div>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-center">
                          <MathDisplay math="\int \cot x \, dx = \ln|\sin x| + C" />
                        </div>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-center">
                          <MathDisplay math="\int \sec x \, dx = \ln|\sec x + \tan x| + C" />
                        </div>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-center">
                          <MathDisplay math="\int \csc x \, dx = \ln|\csc x - \cot x| + C" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      {language === "es"
                        ? "Potencias de Funciones Trigonométricas"
                        : "Powers of Trigonometric Functions"}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-center">
                          <MathDisplay math="\int \sin^2 x \, dx = \frac{x}{2} - \frac{\sin(2x)}{4} + C" />
                        </div>
                      </div>
                      <div className="bg-muted/50 p-3 rounded-lg">
                        <div className="text-center">
                          <MathDisplay math="\int \cos^2 x \, dx = \frac{x}{2} + \frac{\sin(2x)}{4} + C" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Inverse Trigonometric Functions */}
          <section>
            <h2 id="inverse-trigonometric" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Funciones Trigonométricas Inversas" : "Inverse Trigonometric Functions"}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \frac{1}{\sqrt{1-x^2}} \, dx = \arcsin x + C" />
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \frac{1}{1+x^2} \, dx = \arctan x + C" />
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \frac{1}{x\sqrt{x^2-1}} \, dx = \arccos\frac{1}{x} + C = \operatorname{arcsec} x + C" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Estas fórmulas son particularmente útiles cuando se trabaja con sustituciones trigonométricas y aparecen en muchas aplicaciones físicas y de ingeniería."
                      : "These formulas are particularly useful when working with trigonometric substitutions and appear in many physical and engineering applications."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Hyperbolic Functions */}
          <section>
            <h2 id="hyperbolic" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Funciones Hiperbólicas" : "Hyperbolic Functions"}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \sinh x \, dx = \cosh x + C" />
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \cosh x \, dx = \sinh x + C" />
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \tanh x \, dx = \ln(\cosh x) + C" />
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \coth x \, dx = \ln|\sinh x| + C" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Las funciones hiperbólicas aparecen en muchos problemas de física e ingeniería, como en el estudio de campos electromagnéticos y mecánica de fluidos."
                      : "Hyperbolic functions appear in many physics and engineering problems, such as in the study of electromagnetic fields and fluid mechanics."}
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Special Forms */}
          <section>
            <h2 id="special-forms" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Formas Especiales" : "Special Forms"}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \frac{1}{a^2 + x^2} \, dx = \frac{1}{a} \arctan\left(\frac{x}{a}\right) + C, \quad a > 0" />
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \frac{1}{a^2 - x^2} \, dx = \frac{1}{2a} \ln\left|\frac{a+x}{a-x}\right| + C, \quad |x| < a" />
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \frac{1}{\sqrt{a^2 - x^2}} \, dx = \arcsin\left(\frac{x}{a}\right) + C, \quad |x| < a" />
                      </div>
                    </div>
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-center">
                        <MathDisplay math="\int \frac{1}{\sqrt{x^2 + a^2}} \, dx = \ln\left|x + \sqrt{x^2 + a^2}\right| + C" />
                      </div>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {language === "es"
                      ? "Estas formas especiales aparecen frecuentemente en aplicaciones y son útiles para resolver integrales mediante sustituciones."
                      : "These special forms frequently appear in applications and are useful for solving integrals through substitutions."}
                  </p>
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
                  <a href="#power-rule" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Regla de la Potencia" : "Power Rule"}
                  </a>
                </li>
                <li>
                  <a href="#exponential-logarithmic" className="text-muted-foreground hover:text-primary">
                    {language === "es"
                      ? "Funciones Exponenciales y Logarítmicas"
                      : "Exponential and Logarithmic Functions"}
                  </a>
                </li>
                <li>
                  <a href="#trigonometric" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Funciones Trigonométricas" : "Trigonometric Functions"}
                  </a>
                </li>
                <li>
                  <a href="#inverse-trigonometric" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Funciones Trigonométricas Inversas" : "Inverse Trigonometric Functions"}
                  </a>
                </li>
                <li>
                  <a href="#hyperbolic" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Funciones Hiperbólicas" : "Hyperbolic Functions"}
                  </a>
                </li>
                <li>
                  <a href="#special-forms" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Formas Especiales" : "Special Forms"}
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
                    href="/topics/mathematics/integral-calculus/algebraic-integrals"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Integrales Algebraicas" : "Algebraic Integrals"}
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
                    href="/topics/mathematics/integral-calculus/integration-methods/integration-by-parts"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Integración por Partes" : "Integration by Parts"}
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Formula Card */}
          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-100 dark:border-blue-900">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">
                {language === "es" ? "Fórmula Fundamental" : "Fundamental Formula"}
              </h3>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-sm">
                <MathDisplay math="\int f(x) \, dx = F(x) + C" />
                <p className="text-sm mt-2 text-center">
                  {language === "es" ? "donde " : "where "}
                  <MathDisplay math="F'(x) = f(x)" display={false} />
                </p>
              </div>
              <p className="text-sm mt-3 text-muted-foreground">
                {language === "es"
                  ? "Esta es la fórmula fundamental del cálculo integral, que establece que la integral de una función es su antiderivada más una constante."
                  : "This is the fundamental formula of integral calculus, stating that the integral of a function is its antiderivative plus a constant."}
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
                      href="/resources/solved-problems?topic=basic-integration"
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
                      href="/resources/tools/integration-calculator"
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
                  href="/topics/mathematics/integral-calculus/algebraic-integrals"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Integrales Algebraicas" : "Algebraic Integrals"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende técnicas para integrar expresiones algebraicas"
                    : "Learn techniques for integrating algebraic expressions"}
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
