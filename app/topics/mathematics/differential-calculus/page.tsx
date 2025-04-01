"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function DifferentialCalculusPage() {
  const { t, language } = useLanguage()
  const [activeExample, setActiveExample] = useState<number | null>(null)

  const toggleExample = (index: number) => {
    setActiveExample(activeExample === index ? null : index)
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
          {t("nav.topics")}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics/mathematics" className="hover:text-foreground">
          {t("math.title")}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">
          {language === "es" ? "Cálculo Diferencial" : "Differential Calculus"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Cálculo Diferencial" : "Differential Calculus"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "El estudio de las tasas de cambio y pendientes de curvas"
              : "The study of rates of change and slopes of curves"}
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/topics/mathematics" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "es" ? "Volver a Matemáticas" : "Back to Mathematics"}
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
              {language === "es" ? "Introducción al Cálculo Diferencial" : "Introduction to Differential Calculus"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "El cálculo diferencial es una rama del cálculo que estudia las tasas de cambio y las pendientes de curvas. Se centra en el concepto de la derivada, que representa una tasa instantánea de cambio. La derivada de una función en un punto específico mide la velocidad a la que cambia el valor de la función a medida que cambia su entrada."
                  : "Differential calculus is a branch of calculus that studies rates of change and slopes of curves. It focuses on the concept of the derivative, which represents an instantaneous rate of change. The derivative of a function at a specific point measures the rate at which the function's value changes as its input changes."}
              </p>
              <p>
                {language === "es"
                  ? "El concepto fundamental en el cálculo diferencial es el límite. La derivada se define como un límite del cociente de diferencias:"
                  : "The fundamental concept in differential calculus is the limit. The derivative is defined as a limit of the difference quotient:"}
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />
              </div>
              <p>
                {language === "es"
                  ? "Este límite, si existe, nos da la derivada de la función f en el punto x. La derivada representa la pendiente de la línea tangente a la gráfica de f en el punto (x, f(x))."
                  : "This limit, if it exists, gives us the derivative of the function f at the point x. The derivative represents the slope of the tangent line to the graph of f at the point (x, f(x))."}
              </p>
            </div>
          </section>

          {/* Key Concepts Section */}
          <section>
            <h2 id="key-concepts" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Conceptos Clave" : "Key Concepts"}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 id="the-derivative" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "La Derivada" : "The Derivative"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "La derivada de una función f con respecto a x se denota como f'(x) o "
                      : "The derivative of a function f with respect to x is denoted by f'(x) or "}
                    <MathDisplay math="\frac{df}{dx}" display={false} />
                    {language === "es"
                      ? ". Representa la tasa instantánea de cambio de f con respecto a x."
                      : ". It represents the instantaneous rate of change of f with respect to x."}
                  </p>
                </div>
              </div>

              <div>
                <h3 id="basic-differentiation-rules" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Reglas Básicas de Diferenciación" : "Basic Differentiation Rules"}
                </h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">{language === "es" ? "Regla de la Constante:" : "Constant Rule:"}</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}[c] = 0" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {language === "es"
                            ? "La derivada de una constante es cero."
                            : "The derivative of a constant is zero."}
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">{language === "es" ? "Regla de la Potencia:" : "Power Rule:"}</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}[x^n] = nx^{n-1}" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {language === "es"
                            ? "Para cualquier número real n, la derivada de x^n es n veces x^(n-1)."
                            : "For any real number n, the derivative of x^n is n times x^(n-1)."}
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">{language === "es" ? "Regla de la Suma:" : "Sum Rule:"}</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}[f(x) + g(x)] = \frac{d}{dx}[f(x)] + \frac{d}{dx}[g(x)]" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {language === "es"
                            ? "La derivada de una suma es la suma de las derivadas."
                            : "The derivative of a sum is the sum of the derivatives."}
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">{language === "es" ? "Regla del Producto:" : "Product Rule:"}</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}[f(x) \cdot g(x)] = f(x) \cdot \frac{d}{dx}[g(x)] + g(x) \cdot \frac{d}{dx}[f(x)]" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {language === "es"
                            ? "La derivada de un producto es la primera función por la derivada de la segunda, más la segunda función por la derivada de la primera."
                            : "The derivative of a product is the first function times the derivative of the second, plus the second function times the derivative of the first."}
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">{language === "es" ? "Regla del Cociente:" : "Quotient Rule:"}</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{g(x) \cdot \frac{d}{dx}[f(x)] - f(x) \cdot \frac{d}{dx}[g(x)]}{[g(x)]^2}" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {language === "es"
                            ? "La derivada de un cociente sigue esta fórmula donde el denominador está elevado al cuadrado."
                            : "The derivative of a quotient follows this formula where the denominator is squared."}
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">{language === "es" ? "Regla de la Cadena:" : "Chain Rule:"}</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          {language === "es"
                            ? "La derivada de una función compuesta es la derivada de la función externa evaluada en la función interna, multiplicada por la derivada de la función interna."
                            : "The derivative of a composite function is the derivative of the outer function evaluated at the inner function, multiplied by the derivative of the inner function."}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 id="common-derivatives" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Derivadas Comunes" : "Common Derivatives"}
                </h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">
                          {language === "es" ? "Funciones Trigonométricas:" : "Trigonometric Functions:"}
                        </p>
                        <div className="space-y-2 mt-2">
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[\sin(x)] = \cos(x)" />
                          </div>
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[\cos(x)] = -\sin(x)" />
                          </div>
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[\tan(x)] = \sec^2(x)" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-medium">
                          {language === "es" ? "Exponencial y Logarítmica:" : "Exponential and Logarithmic:"}
                        </p>
                        <div className="space-y-2 mt-2">
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[e^x] = e^x" />
                          </div>
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[a^x] = a^x \ln(a)" />
                          </div>
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[\ln(x)] = \frac{1}{x}" />
                          </div>
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[\log_a(x)] = \frac{1}{x \ln(a)}" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Examples Section */}
          <section>
            <h2 id="examples" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Ejemplos" : "Examples"}
            </h2>

            <div className="space-y-4">
              {/* Example 1 */}
              <Card className="overflow-hidden">
                <div
                  className="p-4 bg-muted cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExample(1)}
                >
                  <h3 className="font-medium">
                    {language === "es" ? "Ejemplo 1: Regla de la Potencia" : "Example 1: Power Rule"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Encuentra la derivada de " : "Find the derivative of "}
                        <MathDisplay math="f(x) = 3x^4 - 2x^2 + 5x - 7" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Podemos aplicar la regla de la potencia y la regla de la suma:"
                          : "We can apply the power rule and the sum rule:"}
                      </p>

                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{d}{dx}[3x^4] = 3 \cdot \frac{d}{dx}[x^4] = 3 \cdot 4x^3 = 12x^3" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[-2x^2] = -2 \cdot \frac{d}{dx}[x^2] = -2 \cdot 2x = -4x" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[5x] = 5 \cdot \frac{d}{dx}[x] = 5 \cdot 1 = 5" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[-7] = 0" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Ahora, sumamos todas estas derivadas:"
                          : "Now, we add all these derivatives:"}
                      </p>
                      <div>
                        <MathDisplay math="f'(x) = 12x^3 - 4x + 5" />
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Example 2 */}
              <Card className="overflow-hidden">
                <div
                  className="p-4 bg-muted cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExample(2)}
                >
                  <h3 className="font-medium">
                    {language === "es" ? "Ejemplo 2: Regla del Producto" : "Example 2: Product Rule"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Encuentra la derivada de " : "Find the derivative of "}
                        <MathDisplay math="f(x) = x^2 \cdot \sin(x)" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Necesitamos usar la regla del producto:"
                          : "We need to use the product rule:"}
                      </p>
                      <div>
                        <MathDisplay math="\frac{d}{dx}[f(x) \cdot g(x)] = f(x) \cdot \frac{d}{dx}[g(x)] + g(x) \cdot \frac{d}{dx}[f(x)]" />
                      </div>

                      <p>
                        {language === "es" ? "Sea " : "Let "}
                        <MathDisplay math="f(x) = x^2" display={false} />
                        {language === "es" ? " y " : " and "}
                        <MathDisplay math="g(x) = \sin(x)" display={false} />
                      </p>

                      <p>{language === "es" ? "Sabemos:" : "We know:"}</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{d}{dx}[x^2] = 2x" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[\sin(x)] = \cos(x)" />
                        </div>
                      </div>

                      <p>{language === "es" ? "Aplicando la regla del producto:" : "Applying the product rule:"}</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{d}{dx}[x^2 \cdot \sin(x)] = x^2 \cdot \frac{d}{dx}[\sin(x)] + \sin(x) \cdot \frac{d}{dx}[x^2]" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[x^2 \cdot \sin(x)] = x^2 \cdot \cos(x) + \sin(x) \cdot 2x" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[x^2 \cdot \sin(x)] = x^2\cos(x) + 2x\sin(x)" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>

              {/* Example 3 */}
              <Card className="overflow-hidden">
                <div
                  className="p-4 bg-muted cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExample(3)}
                >
                  <h3 className="font-medium">
                    {language === "es" ? "Ejemplo 3: Regla de la Cadena" : "Example 3: Chain Rule"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Encuentra la derivada de " : "Find the derivative of "}
                        <MathDisplay math="f(x) = \sin(x^2)" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Necesitamos usar la regla de la cadena:"
                          : "We need to use the chain rule:"}
                      </p>
                      <div>
                        <MathDisplay math="\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)" />
                      </div>

                      <p>
                        {language === "es" ? "Sea " : "Let "}
                        <MathDisplay math="f(u) = \sin(u)" display={false} />
                        {language === "es" ? " y " : " and "}
                        <MathDisplay math="g(x) = x^2" display={false} />
                        {language === "es" ? ", así que " : ", so "}
                        <MathDisplay math="f(g(x)) = \sin(x^2)" display={false} />
                      </p>

                      <p>{language === "es" ? "Sabemos:" : "We know:"}</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="f'(u) = \frac{d}{du}[\sin(u)] = \cos(u)" />
                        </div>
                        <div>
                          <MathDisplay math="g'(x) = \frac{d}{dx}[x^2] = 2x" />
                        </div>
                      </div>

                      <p>{language === "es" ? "Aplicando la regla de la cadena:" : "Applying the chain rule:"}</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{d}{dx}[\sin(x^2)] = f'(g(x)) \cdot g'(x) = \cos(x^2) \cdot 2x = 2x\cos(x^2)" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
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
                  ? "El cálculo diferencial tiene numerosas aplicaciones en ingeniería y ciencia:"
                  : "Differential calculus has numerous applications in engineering and science:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Análisis de Tasas de Cambio:" : "Rate of Change Analysis:"}</strong>{" "}
                  {language === "es"
                    ? "Determinar qué tan rápido cambian las cantidades con respecto al tiempo u otras variables."
                    : "Determining how quickly quantities change with respect to time or other variables."}
                </li>
                <li>
                  <strong>{language === "es" ? "Problemas de Optimización:" : "Optimization Problems:"}</strong>{" "}
                  {language === "es"
                    ? "Encontrar valores máximos o mínimos de funciones para optimizar diseños o procesos."
                    : "Finding maximum or minimum values of functions to optimize designs or processes."}
                </li>
                <li>
                  <strong>{language === "es" ? "Análisis de Movimiento:" : "Motion Analysis:"}</strong>{" "}
                  {language === "es"
                    ? "Calcular velocidad y aceleración a partir de funciones de posición."
                    : "Calculating velocity and acceleration from position functions."}
                </li>
                <li>
                  <strong>{language === "es" ? "Trazado de Curvas:" : "Curve Sketching:"}</strong>{" "}
                  {language === "es"
                    ? "Analizar el comportamiento de funciones para trazar sus gráficas."
                    : "Analyzing the behavior of functions to sketch their graphs."}
                </li>
                <li>
                  <strong>{language === "es" ? "Métodos de Aproximación:" : "Approximation Methods:"}</strong>{" "}
                  {language === "es"
                    ? "Usar aproximación lineal y diferenciales para estimar valores de funciones."
                    : "Using linear approximation and differentials to estimate function values."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "En ingeniería, el cálculo diferencial es esencial para analizar tasas de cambio en sistemas físicos, optimizar diseños y modelar comportamientos dinámicos."
                  : "In engineering, differential calculus is essential for analyzing rates of change in physical systems, optimizing designs, and modeling dynamic behavior."}
              </p>
            </div>
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
                  <a href="#key-concepts" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Conceptos Clave" : "Key Concepts"}
                  </a>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#the-derivative" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "La Derivada" : "The Derivative"}
                      </a>
                    </li>
                    <li>
                      <a href="#basic-differentiation-rules" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Reglas Básicas de Diferenciación" : "Basic Differentiation Rules"}
                      </a>
                    </li>
                    <li>
                      <a href="#common-derivatives" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Derivadas Comunes" : "Common Derivatives"}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#examples" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Ejemplos" : "Examples"}
                  </a>
                </li>
                <li>
                  <a href="#applications" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Aplicaciones" : "Applications"}
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
                    href="/topics/mathematics/integral-calculus"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Cálculo Integral" : "Integral Calculus"}
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
                  <Link href="/topics/mathematics/limits" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Límites y Continuidad" : "Limits and Continuity"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/physics/classical-mechanics"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Mecánica Clásica" : "Classical Mechanics"}
                  </Link>
                </li>
              </ul>
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
                        ? "Practica con soluciones paso a paso"
                        : "Practice with step-by-step solutions"}
                    </p>
                    <Link
                      href="/resources/solved-problems?topic=differential-calculus"
                      className="text-xs text-primary hover:underline"
                    >
                      {language === "es" ? "Ver problemas" : "View problems"}
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">
                      {language === "es" ? "Lecturas Recomendadas" : "Recommended Reading"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Libros y artículos sobre cálculo diferencial"
                        : "Books and articles on differential calculus"}
                    </p>
                    <Link
                      href="/resources/bibliography?topic=differential-calculus"
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
                      {language === "es" ? "Calculadora de Derivadas" : "Derivative Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta interactiva para calcular derivadas"
                        : "Interactive tool for calculating derivatives"}
                    </p>
                    <Link
                      href="/resources/tools/derivative-calculator"
                      className="text-xs text-primary hover:underline"
                    >
                      {language === "es" ? "Usar calculadora" : "Use calculator"}
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
                alt={language === "es" ? "Visualización de derivada" : "Derivative visualization"}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-center text-muted-foreground">
                {language === "es"
                  ? "Visualización de una función (azul) y su derivada (roja)"
                  : "Visualization of a function (blue) and its derivative (red)"}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive Practice Section */}
      <section className="mt-12 bg-muted/50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          {language === "es" ? "Práctica Interactiva" : "Interactive Practice"}
        </h2>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">{language === "es" ? "Derivadas Básicas" : "Basic Derivatives"}</TabsTrigger>
            <TabsTrigger value="intermediate">{language === "es" ? "Intermedio" : "Intermediate"}</TabsTrigger>
            <TabsTrigger value="advanced">{language === "es" ? "Avanzado" : "Advanced"}</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="p-4">
            <div className="space-y-4">
              <p className="font-medium">
                {language === "es"
                  ? "Practica encontrando derivadas de funciones básicas:"
                  : "Practice finding derivatives of basic functions:"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es" ? "Encuentra la derivada de " : "Find the derivative of "}
                      <MathDisplay math="f(x) = 5x^3 - 2x + 7" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      {language === "es" ? "Mostrar Solución" : "Show Solution"}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es" ? "Encuentra la derivada de " : "Find the derivative of "}
                      <MathDisplay math="f(x) = \sin(x) + \cos(x)" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      {language === "es" ? "Mostrar Solución" : "Show Solution"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="p-4">
            <div className="space-y-4">
              <p className="font-medium">
                {language === "es"
                  ? "Practica con reglas del producto y cociente:"
                  : "Practice with product and quotient rules:"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es" ? "Encuentra la derivada de " : "Find the derivative of "}
                      <MathDisplay math="f(x) = x^2e^x" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      {language === "es" ? "Mostrar Solución" : "Show Solution"}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es" ? "Encuentra la derivada de " : "Find the derivative of "}
                      <MathDisplay math="f(x) = \frac{x^2 + 1}{x - 3}" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      {language === "es" ? "Mostrar Solución" : "Show Solution"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="p-4">
            <div className="space-y-4">
              <p className="font-medium">
                {language === "es"
                  ? "Practica con regla de la cadena y diferenciación implícita:"
                  : "Practice with chain rule and implicit differentiation:"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es" ? "Encuentra la derivada de " : "Find the derivative of "}
                      <MathDisplay math="f(x) = \ln(\sin(x^2 + 1))" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      {language === "es" ? "Mostrar Solución" : "Show Solution"}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es" ? "Encuentra " : "Find "}
                      <MathDisplay math="\frac{dy}{dx}" display={false} />
                      {language === "es" ? " si " : " if "}
                      <MathDisplay math="x^2 + y^2 = 25" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      {language === "es" ? "Mostrar Solución" : "Show Solution"}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

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
                <Link href="/topics/mathematics/integral-calculus" className="text-primary hover:underline text-lg">
                  {language === "es" ? "Cálculo Integral" : "Integral Calculus"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende sobre antiderivadas y la integral definida"
                    : "Learn about antiderivatives and the definite integral"}
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
                <Link href="/topics/physics/classical-mechanics" className="text-primary hover:underline text-lg">
                  {language === "es" ? "Mecánica Clásica" : "Classical Mechanics"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Observa cómo se aplica el cálculo diferencial en física"
                    : "See how differential calculus is applied in physics"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
