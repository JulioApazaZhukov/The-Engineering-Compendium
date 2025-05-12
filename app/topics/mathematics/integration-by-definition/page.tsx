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

export default function IntegrationByDefinitionPage() {
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
        <Link href="/topics/mathematics/integral-calculus" className="hover:text-foreground">
          {language === "es" ? "Cálculo Integral" : "Integral Calculus"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">
          {language === "es" ? "Integración por Definición" : "Integration by Definition"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Integración por Definición" : "Integration by Definition"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Aproximación del área bajo la curva y sumas de Riemann"
              : "Approximating area under the curve and Riemann sums"}
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
              {language === "es"
                ? "Introducción a la Integración por Definición"
                : "Introduction to Integration by Definition"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La integración por definición es un enfoque fundamental para calcular el área bajo una curva. Antes de la invención del cálculo, los matemáticos aproximaban estas áreas dividiendo la región en formas más simples, como rectángulos, y sumando sus áreas. Este método evolucionó hasta convertirse en lo que hoy conocemos como la integral definida."
                  : "Integration by definition is a fundamental approach to calculating the area under a curve. Before the invention of calculus, mathematicians approximated these areas by dividing the region into simpler shapes, such as rectangles, and summing their areas. This method evolved into what we now know as the definite integral."}
              </p>
              <p>
                {language === "es"
                  ? "La integral definida de una función f(x) desde a hasta b se define como el límite de una suma de Riemann cuando el número de subdivisiones tiende a infinito:"
                  : "The definite integral of a function f(x) from a to b is defined as the limit of a Riemann sum as the number of subdivisions approaches infinity:"}
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="\int_{a}^{b} f(x) \, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x" />
              </div>
              <p>
                {language === "es"
                  ? "Donde Δx = (b-a)/n es el ancho de cada subintervalo, y x_i* es un punto en el i-ésimo subintervalo."
                  : "Where Δx = (b-a)/n is the width of each subinterval, and x_i* is a point in the i-th subinterval."}
              </p>
            </div>
          </section>

          {/* Left and Right Sums Section */}
          <section>
            <h2 id="left-right-sums" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Sumas por la Izquierda y por la Derecha" : "Left and Right Sums"}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 id="left-sum" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Suma por la Izquierda" : "Left Sum"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "En la suma por la izquierda, tomamos el valor de la función en el extremo izquierdo de cada subintervalo:"
                      : "In the left sum, we take the function value at the left endpoint of each subinterval:"}
                  </p>
                  <div className="my-4 text-center">
                    <MathDisplay math="L_n = \sum_{i=1}^{n} f(x_{i-1}) \Delta x" />
                  </div>
                  <p>
                    {language === "es"
                      ? <>
                            Donde <MathDisplay math="x_{i-1} = a + (i-1)Δx" display={false} /> es el extremo izquierdo del i-ésimo subintervalo.
                        </>
                      : <>
                            Where <MathDisplay math="x_{i-1} = a + (i-1)Δx" display={false} /> is the left endpoint of the i-th subinterval.
                        </>}                    
                  </p>
                </div>
                <Card className="mt-4 overflow-hidden">
                  <div className="relative h-48 bg-muted">
                    <Image
                      src="/The-Engineering-Compendium/left-approximation.png?height=200&width=400"
                      alt={language === "es" ? "Suma por la izquierda" : "Left sum approximation"}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-center text-muted-foreground">
                      {language === "es"
                        ? "Aproximación del área bajo la curva usando la suma por la izquierda"
                        : "Approximation of the area under the curve using left sum"}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 id="right-sum" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Suma por la Derecha" : "Right Sum"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "En la suma por la derecha, tomamos el valor de la función en el extremo derecho de cada subintervalo:"
                      : "In the right sum, we take the function value at the right endpoint of each subinterval:"}
                  </p>
                  <div className="my-4 text-center">
                    <MathDisplay math="R_n = \sum_{i=1}^{n} f(x_i) \Delta x" />
                  </div>
                  <p>
                    {language === "es"
                      ? <>
                            Donde <MathDisplay math="x_i = a + iΔx" display={false} /> es el extremo derecho del i-ésimo subintervalo.
                        </>
                      : <>
                            Where <MathDisplay math="x_i = a + iΔx" display={false} /> is the right endpoint of the i-th subinterval.
                        </>}
                  </p>
                </div>
                <Card className="mt-4 overflow-hidden">
                  <div className="relative h-48 bg-muted">
                    <Image
                      src="/The-Engineering-Compendium/right-approximation.png?height=200&width=400"
                      alt={language === "es" ? "Suma por la derecha" : "Right sum approximation"}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-center text-muted-foreground">
                      {language === "es"
                        ? "Aproximación del área bajo la curva usando la suma por la derecha"
                        : "Approximation of the area under the curve using right sum"}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 id="comparison" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Comparación de Sumas" : "Comparison of Sums"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "Para una función creciente en [a, b], la suma por la izquierda subestima el área, mientras que la suma por la derecha la sobreestima. Para una función decreciente, ocurre lo contrario."
                      : "For an increasing function on [a, b], the left sum underestimates the area, while the right sum overestimates it. For a decreasing function, the opposite occurs."}
                  </p>
                  <p>
                    {language === "es"
                      ? "A medida que n aumenta, tanto la suma por la izquierda como la suma por la derecha se aproximan al valor real de la integral definida:"
                      : "As n increases, both the left sum and the right sum approach the actual value of the definite integral:"}
                  </p>
                  <div className="my-4 text-center">
                    <MathDisplay math="\int_{a}^{b} f(x) \, dx = \lim_{n \to \infty} L_n = \lim_{n \to \infty} R_n" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Riemann Sums Section */}
          <section>
            <h2 id="riemann-sums" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Sumas de Riemann" : "Riemann Sums"}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 id="general-riemann" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Suma de Riemann General" : "General Riemann Sum"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? <>Una suma de Riemann generaliza las sumas por la izquierda y por la derecha permitiendo que el punto de evaluación <MathDisplay math="x_i^*" display={false} /> sea cualquier punto dentro del i-ésimo subintervalo:</>
                      : <>A Riemann sum generalizes the left and right sums by allowing the evaluation point <MathDisplay math="x_i^*" display={false} /> to be any point within the i-th subinterval:</>}
                  </p>
                  <div className="my-4 text-center">
                    <MathDisplay math="S_n = \sum_{i=1}^{n} f(x_i^*) \Delta x" />
                  </div>
                  <p>
                    {language === "es"
                      ? <>Donde <MathDisplay math="x_i^*" display={false} /> es un punto en el intervalo <MathDisplay math="[x_{i-1}, x_i]" display={false} />.</>
                      : <>Where <MathDisplay math="x_i^*" display={false} /> is a point in the interval <MathDisplay math="[x_{i-1}, x_i]" display={false} />.</>}
                  </p>
                </div>
              </div>

              <div>
                <h3 id="midpoint-sum" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Suma del Punto Medio" : "Midpoint Sum"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? <>La suma del punto medio es un caso especial de la suma de Riemann donde <MathDisplay math="x_i^*" display={false} /> es el punto medio de cada subintervalo:</>
                      : <>The midpoint sum is a special case of the Riemann sum where <MathDisplay math="x_i^*" display={false} /> is the midpoint of each subinterval:</>}
                  </p>
                  <div className="my-4 text-center">
                    <MathDisplay math="M_n = \sum_{i=1}^{n} f\left(\frac{x_{i-1} + x_i}{2}\right) \Delta x" />
                  </div>
                  <p>
                    {language === "es"
                      ? "La suma del punto medio suele proporcionar una mejor aproximación que las sumas por la izquierda o por la derecha con el mismo número de subintervalos."
                      : "The midpoint sum typically provides a better approximation than the left or right sums with the same number of subintervals."}
                  </p>
                </div>
                <Card className="mt-4 overflow-hidden">
                  <div className="relative h-48 bg-muted">
                    <Image
                      src="/The-Engineering-Compendium/midpoint-approximation.png?height=200&width=400"
                      alt={language === "es" ? "Suma del punto medio" : "Midpoint sum approximation"}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-center text-muted-foreground">
                      {language === "es"
                        ? "Aproximación del área bajo la curva usando la suma del punto medio"
                        : "Approximation of the area under the curve using midpoint sum"}
                    </p>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 id="trapezoidal-sum" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Suma Trapezoidal" : "Trapezoidal Sum"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "La suma trapezoidal aproxima el área bajo la curva usando trapecios en lugar de rectángulos:"
                      : "The trapezoidal sum approximates the area under the curve using trapezoids instead of rectangles:"}
                  </p>
                  <div className="my-4 text-center">
                    <MathDisplay math="T_n = \frac{\Delta x}{2} \left[ f(x_0) + 2f(x_1) + 2f(x_2) + \ldots + 2f(x_{n-1}) + f(x_n) \right]" />
                  </div>
                  <p>
                    {language === "es"
                      ? "La suma trapezoidal puede verse como el promedio de las sumas por la izquierda y por la derecha:"
                      : "The trapezoidal sum can be viewed as the average of the left and right sums:"}
                  </p>
                  <div className="my-4 text-center">
                    <MathDisplay math="T_n = \frac{L_n + R_n}{2}" />
                  </div>
                </div>
                <Card className="mt-4 overflow-hidden">
                  <div className="relative h-48 bg-muted">
                    <Image
                      src="/The-Engineering-Compendium/trapezoidal-approximation.png?height=200&width=400"
                      alt={language === "es" ? "Suma trapezoidal" : "Trapezoidal sum approximation"}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-center text-muted-foreground">
                      {language === "es"
                        ? "Aproximación del área bajo la curva usando la suma trapezoidal"
                        : "Approximation of the area under the curve using trapezoidal sum"}
                    </p>
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
                    {language === "es"
                      ? "Ejemplo 1: Aproximación con Sumas por la Izquierda y por la Derecha"
                      : "Example 1: Approximation with Left and Right Sums"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es"
                          ? "Aproxima el área bajo la curva f(x) = x² en el intervalo [0, 2] usando sumas por la izquierda y por la derecha con n = 4 subintervalos."
                          : "Approximate the area under the curve f(x) = x² on the interval [0, 2] using left and right sums with n = 4 subintervals."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Primero, calculamos el ancho de cada subintervalo:"
                          : "First, we calculate the width of each subinterval:"}
                      </p>
                      <div>
                        <MathDisplay math="\Delta x = \frac{b - a}{n} = \frac{2 - 0}{4} = 0.5" />
                      </div>

                      <p>{language === "es" ? "Los puntos de subdivisión son:" : "The subdivision points are:"}</p>
                      <div>
                        <MathDisplay math="x_0 = 0, x_1 = 0.5, x_2 = 1, x_3 = 1.5, x_4 = 2" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Para la suma por la izquierda, evaluamos f(x) en los puntos x₀, x₁, x₂, x₃:"
                          : "For the left sum, we evaluate f(x) at the points x₀, x₁, x₂, x₃:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="L_4 = \sum_{i=1}^{4} f(x_{i-1}) \Delta x" />
                        </div>
                        <div>
                          <MathDisplay math="L_4 = [f(0) + f(0.5) + f(1) + f(1.5)] \cdot 0.5" />
                        </div>
                        <div>
                          <MathDisplay math="L_4 = [0 + 0.25 + 1 + 2.25] \cdot 0.5" />
                        </div>
                        <div>
                          <MathDisplay math="L_4 = 3.5 \cdot 0.5 = 1.75" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Para la suma por la derecha, evaluamos f(x) en los puntos x₁, x₂, x₃, x₄:"
                          : "For the right sum, we evaluate f(x) at the points x₁, x₂, x₃, x₄:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="R_4 = \sum_{i=1}^{4} f(x_i) \Delta x" />
                        </div>
                        <div>
                          <MathDisplay math="R_4 = [f(0.5) + f(1) + f(1.5) + f(2)] \cdot 0.5" />
                        </div>
                        <div>
                          <MathDisplay math="R_4 = [0.25 + 1 + 2.25 + 4] \cdot 0.5" />
                        </div>
                        <div>
                          <MathDisplay math="R_4 = 7.5 \cdot 0.5 = 3.75" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "El valor exacto de la integral es:"
                          : "The exact value of the integral is:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int_{0}^{2} x^2 \, dx = \left[ \frac{x^3}{3} \right]_{0}^{2} = \frac{2^3}{3} - \frac{0^3}{3} = \frac{8}{3} \approx 2.67" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Observamos que la suma por la izquierda (1.75) subestima el área, mientras que la suma por la derecha (3.75) la sobreestima, como era de esperar para una función creciente."
                          : "We observe that the left sum (1.75) underestimates the area, while the right sum (3.75) overestimates it, as expected for an increasing function."}
                      </p>
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
                    {language === "es"
                      ? "Ejemplo 2: Aproximación con la Suma del Punto Medio"
                      : "Example 2: Approximation with Midpoint Sum"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es"
                          ? "Aproxima el área bajo la curva f(x) = x² en el intervalo [0, 2] usando la suma del punto medio con n = 4 subintervalos."
                          : "Approximate the area under the curve f(x) = x² on the interval [0, 2] using the midpoint sum with n = 4 subintervals."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es" ? "El ancho de cada subintervalo es:" : "The width of each subinterval is:"}
                      </p>
                      <div>
                        <MathDisplay math="\Delta x = \frac{b - a}{n} = \frac{2 - 0}{4} = 0.5" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Los puntos medios de los subintervalos son:"
                          : "The midpoints of the subintervals are:"}
                      </p>
                      <div>
                        <MathDisplay math="m_1 = 0.25, m_2 = 0.75, m_3 = 1.25, m_4 = 1.75" />
                      </div>

                      <p>
                        {language === "es" ? "Calculamos la suma del punto medio:" : "We calculate the midpoint sum:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="M_4 = \sum_{i=1}^{4} f(m_i) \Delta x" />
                        </div>
                        <div>
                          <MathDisplay math="M_4 = [f(0.25) + f(0.75) + f(1.25) + f(1.75)] \cdot 0.5" />
                        </div>
                        <div>
                          <MathDisplay math="M_4 = [0.0625 + 0.5625 + 1.5625 + 3.0625] \cdot 0.5" />
                        </div>
                        <div>
                          <MathDisplay math="M_4 = 5.25 \cdot 0.5 = 2.625" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "El valor exacto de la integral es:"
                          : "The exact value of the integral is:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int_{0}^{2} x^2 \, dx = \frac{8}{3} \approx 2.67" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Observamos que la suma del punto medio (2.625) proporciona una aproximación mucho mejor que las sumas por la izquierda o por la derecha con el mismo número de subintervalos."
                          : "We observe that the midpoint sum (2.625) provides a much better approximation than the left or right sums with the same number of subintervals."}
                      </p>
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
                    {language === "es"
                      ? "Ejemplo 3: Aproximación con la Suma Trapezoidal"
                      : "Example 3: Approximation with Trapezoidal Sum"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es"
                          ? "Aproxima el área bajo la curva f(x) = x² en el intervalo [0, 2] usando la suma trapezoidal con n = 4 subintervalos."
                          : "Approximate the area under the curve f(x) = x² on the interval [0, 2] using the trapezoidal sum with n = 4 subintervals."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es" ? "Calculamos la suma trapezoidal:" : "We calculate the trapezoidal sum:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="T_4 = \frac{\Delta x}{2} \left[ f(x_0) + 2f(x_1) + 2f(x_2) + 2f(x_3) + f(x_4) \right]" />
                        </div>
                        <div>
                          <MathDisplay math="T_4 = \frac{0.5}{2} \left[ f(0) + 2f(0.5) + 2f(1) + 2f(1.5) + f(2) \right]" />
                        </div>
                        <div>
                          <MathDisplay math="T_4 = 0.25 \left[ 0 + 2(0.25) + 2(1) + 2(2.25) + 4 \right]" />
                        </div>
                        <div>
                          <MathDisplay math="T_4 = 0.25 \left[ 0 + 0.5 + 2 + 4.5 + 4 \right]" />
                        </div>
                        <div>
                          <MathDisplay math="T_4 = 0.25 \cdot 11 = 2.75" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "También podemos calcular la suma trapezoidal como el promedio de las sumas por la izquierda y por la derecha:"
                          : "We can also calculate the trapezoidal sum as the average of the left and right sums:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="T_4 = \frac{L_4 + R_4}{2} = \frac{1.75 + 3.75}{2} = 2.75" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "El valor exacto de la integral es:"
                          : "The exact value of the integral is:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int_{0}^{2} x^2 \, dx = \frac{8}{3} \approx 2.67" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "La suma trapezoidal (2.75) proporciona una buena aproximación, aunque en este caso la suma del punto medio es más precisa."
                          : "The trapezoidal sum (2.75) provides a good approximation, although in this case, the midpoint sum is more accurate."}
                      </p>
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
                  ? "La integración por definición tiene numerosas aplicaciones en ingeniería y ciencia:"
                  : "Integration by definition has numerous applications in engineering and science:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Métodos Numéricos:" : "Numerical Methods:"}</strong>{" "}
                  {language === "es"
                    ? "Cuando las integrales no pueden resolverse analíticamente, los métodos numéricos basados en sumas de Riemann proporcionan aproximaciones precisas."
                    : "When integrals cannot be solved analytically, numerical methods based on Riemann sums provide accurate approximations."}
                </li>
                <li>
                  <strong>{language === "es" ? "Física:" : "Physics:"}</strong>{" "}
                  {language === "es"
                    ? "Cálculo de trabajo, energía, centros de masa y momentos de inercia."
                    : "Calculation of work, energy, centers of mass, and moments of inertia."}
                </li>
                <li>
                  <strong>{language === "es" ? "Ingeniería:" : "Engineering:"}</strong>{" "}
                  {language === "es"
                    ? "Análisis de señales, cálculo de flujos y diseño de estructuras."
                    : "Signal analysis, flow calculations, and structural design."}
                </li>
                <li>
                  <strong>{language === "es" ? "Economía:" : "Economics:"}</strong>{" "}
                  {language === "es"
                    ? "Cálculo del excedente del consumidor y del productor."
                    : "Calculation of consumer and producer surplus."}
                </li>
                <li>
                  <strong>{language === "es" ? "Probabilidad y Estadística:" : "Probability and Statistics:"}</strong>{" "}
                  {language === "es"
                    ? "Cálculo de probabilidades y valores esperados."
                    : "Calculation of probabilities and expected values."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "Comprender la integración por definición proporciona una base sólida para el cálculo integral y sus aplicaciones en diversos campos."
                  : "Understanding integration by definition provides a solid foundation for integral calculus and its applications in various fields."}
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
                  <a href="#left-right-sums" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Sumas por la Izquierda y por la Derecha" : "Left and Right Sums"}
                  </a>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#left-sum" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Suma por la Izquierda" : "Left Sum"}
                      </a>
                    </li>
                    <li>
                      <a href="#right-sum" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Suma por la Derecha" : "Right Sum"}
                      </a>
                    </li>
                    <li>
                      <a href="#comparison" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Comparación de Sumas" : "Comparison of Sums"}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#riemann-sums" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Sumas de Riemann" : "Riemann Sums"}
                  </a>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#general-riemann" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Suma de Riemann General" : "General Riemann Sum"}
                      </a>
                    </li>
                    <li>
                      <a href="#midpoint-sum" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Suma del Punto Medio" : "Midpoint Sum"}
                      </a>
                    </li>
                    <li>
                      <a href="#trapezoidal-sum" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Suma Trapezoidal" : "Trapezoidal Sum"}
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
                    href="/topics/mathematics/integral-calculus/area-under-curve"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Área Bajo la Curva" : "Area Under the Curve"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/integral-calculus/basic-formulas"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Fórmulas Básicas de Integración" : "Basic Integration Formulas"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/numerical-methods/numerical-integration"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Integración Numérica" : "Numerical Integration"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-calculus"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Cálculo Diferencial" : "Differential Calculus"}
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
                      //href="/resources/solved-problems?topic=integration-by-definition"
                      href="/The-Engineering-Compendium/under-development"
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
                        ? "Libros y artículos sobre integración por definición"
                        : "Books and articles on integration by definition"}
                    </p>
                    <Link
                      //href="/resources/solved-problems?topic=integration-by-definition"
                      href="/The-Engineering-Compendium/under-development"
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
                      {language === "es" ? "Calculadora de Sumas de Riemann" : "Riemann Sum Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta interactiva para calcular sumas de Riemann"
                        : "Interactive tool for calculating Riemann sums"}
                    </p>
                    <Link
                      href="/resources/tools/riemann-sum-calculator"
                      className="text-xs text-primary hover:underline"
                    >
                      {language === "es" ? "Usar calculadora" : "Use calculator"}
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visual Aid Nop */ }
          {/* <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/The-Engineering-Compendium/riemann.png?height=200&width=400"
                alt={language === "es" ? "Visualización de sumas de Riemann" : "Riemann sums visualization"}
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-center text-muted-foreground">
                {language === "es"
                  ? "Comparación visual de diferentes métodos de aproximación"
                  : "Visual comparison of different approximation methods"}
              </p>
            </CardContent>
          </Card> */}
        </div>
      </div>

      {/* Interactive Practice Section: I won't do it */}
      {/* <section className="mt-12 bg-muted/50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">
          {language === "es" ? "Práctica Interactiva" : "Interactive Practice"}
        </h2>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">{language === "es" ? "Sumas Básicas" : "Basic Sums"}</TabsTrigger>
            <TabsTrigger value="intermediate">{language === "es" ? "Intermedio" : "Intermediate"}</TabsTrigger>
            <TabsTrigger value="advanced">{language === "es" ? "Avanzado" : "Advanced"}</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="p-4">
            <div className="space-y-4">
              <p className="font-medium">
                {language === "es"
                  ? "Practica calculando sumas por la izquierda y por la derecha:"
                  : "Practice calculating left and right sums:"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es"
                        ? "Calcula la suma por la izquierda para f(x) = x³ en [0, 1] con n = 5."
                        : "Calculate the left sum for f(x) = x³ on [0, 1] with n = 5."}
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      {language === "es" ? "Mostrar Solución" : "Show Solution"}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es"
                        ? "Calcula la suma por la derecha para f(x) = e^x en [0, 1] con n = 4."
                        : "Calculate the right sum for f(x) = e^x on [0, 1] with n = 4."}
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
                  ? "Practica con sumas del punto medio y trapezoidales:"
                  : "Practice with midpoint and trapezoidal sums:"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es"
                        ? "Calcula la suma del punto medio para f(x) = sin(x) en [0, π] con n = 6."
                        : "Calculate the midpoint sum for f(x) = sin(x) on [0, π] with n = 6."}
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      {language === "es" ? "Mostrar Solución" : "Show Solution"}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es"
                        ? "Calcula la suma trapezoidal para f(x) = 1/x en [1, 2] con n = 4."
                        : "Calculate the trapezoidal sum for f(x) = 1/x on [1, 2] with n = 4."}
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
                  ? "Practica con problemas de error y convergencia:"
                  : "Practice with error and convergence problems:"}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es"
                        ? "Determina el valor de n necesario para que la suma del punto medio para f(x) = x² en [0, 1] tenga un error menor que 0.001."
                        : "Determine the value of n needed for the midpoint sum for f(x) = x² on [0, 1] to have an error less than 0.001."}
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      {language === "es" ? "Mostrar Solución" : "Show Solution"}
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      {language === "es"
                        ? "Compara las tasas de convergencia de las sumas por la izquierda, por la derecha, del punto medio y trapezoidales para f(x) = e^(-x²) en [0, 1]."
                        : "Compare the convergence rates of left, right, midpoint, and trapezoidal sums for f(x) = e^(-x²) on [0, 1]."}
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
      </section> */}

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
                  href="/topics/mathematics/integral-calculus"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Cálculo Integral" : "Integral Calculus"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende a calcular integrales de funciones"
                    : "Learn to calculate integrals of functions"}
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
                  href="/topics/mathematics/numerical-methods/numerical-integration"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Integración Numérica" : "Numerical Integration"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Explora métodos numéricos avanzados para aproximar integrales"
                    : "Explore advanced numerical methods for approximating integrals"}
                </p>
              </div>
            </div>
          </Card> */}
        </div>
      </section>
    </div>
  )
}
