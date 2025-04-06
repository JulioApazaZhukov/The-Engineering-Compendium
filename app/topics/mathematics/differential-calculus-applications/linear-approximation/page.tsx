"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function LinearApproximationPage() {
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
        <Link href="/topics/mathematics/differential-calculus-applications" className="hover:text-foreground">
          {language === "es" ? "Aplicaciones del Cálculo Diferencial" : "Applications of Differential Calculus"}
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">
          {language === "es" ? "Aproximación Lineal" : "Linear Approximation"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Aproximación Lineal" : "Linear Approximation"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Aproximando funciones usando rectas tangentes"
              : "Approximating functions using tangent lines"}
          </p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/topics/mathematics/differential-calculus-applications" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            {language === "es" ? "Volver a Aplicaciones" : "Back to Applications"}
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
              {language === "es" ? "Introducción a la Aproximación Lineal" : "Introduction to Linear Approximation"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La aproximación lineal, también conocida como aproximación por recta tangente o diferencial, es un método utilizado para aproximar una función cerca de un punto dado utilizando una función lineal. Se basa en la idea de que una función diferenciable se parece a su recta tangente cuando se amplía lo suficiente cerca de un punto."
                  : "Linear approximation, also known as the tangent line approximation or the differential, is a method used to approximate a function near a given point using a linear function. It's based on the idea that a differentiable function looks like its tangent line when zoomed in sufficiently close to a point."}
              </p>
              <p>
                {language === "es"
                  ? "Esta técnica es fundamental en cálculo y tiene numerosas aplicaciones en ciencias e ingeniería, especialmente cuando necesitamos estimar valores de funciones complejas o analizar pequeños cambios en sistemas físicos."
                  : "This technique is fundamental in calculus and has numerous applications in science and engineering, especially when we need to estimate values of complex functions or analyze small changes in physical systems."}
              </p>
            </div>
          </section>

          {/* Definition Section */}
          <section>
            <h2 id="definition" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Definición" : "Definition"}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Si f es una función diferenciable en x = a, entonces la aproximación lineal L(x) de f en a viene dada por:"
                  : "If f is a differentiable function at x = a, then the linear approximation L(x) of f at a is given by:"}
              </p>
              <div className="my-4">
                <MathDisplay math="L(x) = f(a) + f'(a)(x - a)" />
              </div>
              <p>
                {language === "es"
                  ? "Esta fórmula representa la ecuación de la recta tangente a la gráfica de f en el punto (a, f(a)). El término f'(a) es la pendiente de esta recta tangente, y el término (x - a) representa la distancia horizontal desde el punto de tangencia."
                  : "This formula represents the equation of the tangent line to the graph of f at the point (a, f(a)). The term f'(a) is the slope of this tangent line, and the term (x - a) represents the horizontal distance from the point of tangency."}
              </p>
            </div>
          </section>

          {/* Geometric Interpretation Section */}
          <section>
            <h2 id="geometric-interpretation" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Interpretación Geométrica" : "Geometric Interpretation"}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La aproximación lineal es simplemente la ecuación de la recta tangente a la función en el punto (a, f(a)). Esta recta tangente tiene:"
                  : "The linear approximation is simply the equation of the tangent line to the function at the point (a, f(a)). This tangent line has:"}
              </p>
              <ul>
                <li>{language === "es" ? "Pendiente = f'(a)" : "Slope = f'(a)"}</li>
                <li>{language === "es" ? "Ordenada al origen = f(a) - f'(a)a" : "y-intercept = f(a) - f'(a)a"}</li>
              </ul>
              <p>
                {language === "es"
                  ? "Visualmente, cuando nos acercamos lo suficiente al punto de tangencia, la función y su aproximación lineal se vuelven casi indistinguibles. Esta propiedad es lo que hace que la aproximación lineal sea tan útil para estimar valores de funciones cerca de puntos conocidos."
                  : "Visually, when we zoom in close enough to the point of tangency, the function and its linear approximation become nearly indistinguishable. This property is what makes linear approximation so useful for estimating function values near known points."}
              </p>
            </div>
          </section>

          {/* Error Analysis Section */}
          <section>
            <h2 id="error-analysis" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Análisis del Error" : "Error Analysis"}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "El error en la aproximación lineal es la diferencia entre el valor real de la función y el valor aproximado:"
                  : "The error in linear approximation is the difference between the actual function value and the approximated value:"}
              </p>
              <div className="my-4">
                <MathDisplay math="Error = f(x) - L(x)" />
              </div>
              <p>
                {language === "es"
                  ? "Para una función con segunda derivada continua, el error puede acotarse usando el teorema de Taylor:"
                  : "For a function with a continuous second derivative, the error can be bounded using Taylor's theorem:"}
              </p>
              <div className="my-4">
                <MathDisplay math="|Error| \leq \frac{M}{2}|x-a|^2" />
              </div>
              <p>
                {language === "es"
                  ? "donde M es el valor máximo de |f''(t)| para t entre a y x. Esta cota de error nos muestra que:"
                  : "where M is the maximum value of |f''(t)| for t between a and x. This error bound shows us that:"}
              </p>
              <ul>
                <li>
                  {language === "es"
                    ? "El error crece cuadráticamente con la distancia desde el punto de tangencia"
                    : "The error grows quadratically with the distance from the point of tangency"}
                </li>
                <li>
                  {language === "es"
                    ? "Funciones con grandes segundas derivadas (muy curvadas) tendrán mayores errores"
                    : "Functions with large second derivatives (highly curved) will have larger errors"}
                </li>
              </ul>
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
                      ? "Ejemplo 1: Aproximación Lineal Básica"
                      : "Example 1: Basic Linear Approximation"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Encuentra la aproximación lineal de f(x) = √x en a = 4, y úsala para aproximar √4.1."
                          : "Find the linear approximation of f(x) = √x at a = 4, and use it to approximate √4.1."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Primero, calculamos f(4) y f'(4):"
                          : "First, we calculate f(4) and f'(4):"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="f(4) = \sqrt{4} = 2" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="f'(x) = \frac{1}{2\sqrt{x}}, \text{ so } f'(4) = \frac{1}{2\sqrt{4}} = \frac{1}{4}" />
                      </div>

                      <p>{language === "es" ? "La aproximación lineal es:" : "The linear approximation is:"}</p>
                      <div className="my-4">
                        <MathDisplay math="L(x) = f(4) + f'(4)(x - 4) = 2 + \frac{1}{4}(x - 4)" />
                      </div>

                      <p>{language === "es" ? "Para aproximar √4.1:" : "To approximate √4.1:"}</p>
                      <div className="my-4">
                        <MathDisplay math="L(4.1) = 2 + \frac{1}{4}(4.1 - 4) = 2 + \frac{1}{4}(0.1) = 2 + 0.025 = 2.025" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Verificación:" : "Verification:"}</strong>{" "}
                        {language === "es"
                          ? "El valor real de √4.1 ≈ 2.02485..., así que nuestra aproximación es muy cercana."
                          : "The actual value of √4.1 ≈ 2.02485..., so our approximation is very close."}
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
                    {language === "es" ? "Ejemplo 2: Análisis de Error" : "Example 2: Error Analysis"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Estima el error al usar la aproximación lineal de f(x) = sin(x) en a = 0 para aproximar sin(0.1)."
                          : "Estimate the error in using the linear approximation of f(x) = sin(x) at a = 0 to approximate sin(0.1)."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Primero, encontremos la aproximación lineal:"
                          : "First, let's find the linear approximation:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="f(0) = \sin(0) = 0" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="f'(x) = \cos(x), \text{ so } f'(0) = \cos(0) = 1" />
                      </div>

                      <p>{language === "es" ? "La aproximación lineal es:" : "The linear approximation is:"}</p>
                      <div className="my-4">
                        <MathDisplay math="L(x) = f(0) + f'(0)(x - 0) = 0 + 1 \cdot x = x" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Para estimar el error, necesitamos encontrar el valor máximo de |f''(t)| para t entre 0 y 0.1."
                          : "To estimate the error, we need to find the maximum value of |f''(t)| for t between 0 and 0.1."}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="f''(x) = -\sin(x), \text{ so } |f''(x)| = |\sin(x)|" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Para x ∈ [0, 0.1], el valor máximo de |sin(x)| es |sin(0.1)| ≈ 0.0998..."
                          : "For x ∈ [0, 0.1], the maximum value of |sin(x)| is |sin(0.1)| ≈ 0.0998..."}
                      </p>

                      <p>
                        {language === "es" ? "Usando la fórmula de cota de error:" : "Using the error bound formula:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="|Error| \leq \frac{M}{2}|x-a|^2 \approx \frac{0.0998}{2}(0.1)^2 \approx 0.000499" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Verificación:" : "Verification:"}</strong>{" "}
                        {language === "es"
                          ? "El error real es |sin(0.1) - 0.1| ≈ |0.09983 - 0.1| ≈ 0.00017, que efectivamente es menor que nuestra cota."
                          : "The actual error is |sin(0.1) - 0.1| ≈ |0.09983 - 0.1| ≈ 0.00017, which is indeed less than our bound."}
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
                    {language === "es" ? "Ejemplo 3: Aplicación en Ingeniería" : "Example 3: Engineering Application"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Un tanque cilíndrico tiene radio de 5 metros y altura de 10 metros. Si el radio aumenta en 0.1 metros debido a la expansión térmica, ¿aproximadamente cuánto aumenta el volumen?"
                          : "A cylindrical tank has radius 5 meters and height 10 meters. If the radius increases by 0.1 meters due to thermal expansion, approximately how much does the volume increase?"}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "El volumen de un tanque cilíndrico es V = πr²h."
                          : "The volume of a cylindrical tank is V = πr²h."}
                      </p>

                      <p>
                        {language === "es"
                          ? "Queremos aproximar el cambio en el volumen cuando r cambia de 5 a 5.1 metros."
                          : "We want to approximate the change in volume when r changes from 5 to 5.1 meters."}
                      </p>

                      <p>{language === "es" ? "Usando la aproximación lineal:" : "Using linear approximation:"}</p>
                      <div className="my-4">
                        <MathDisplay math="\Delta V \approx \frac{dV}{dr}\Delta r" />
                      </div>

                      <p>{language === "es" ? "Calculamos la derivada:" : "We calculate the derivative:"}</p>
                      <div className="my-4">
                        <MathDisplay math="\frac{dV}{dr} = 2\pi rh = 2\pi(5)(10) = 100\pi" />
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div className="my-4">
                        <MathDisplay math="\Delta V \approx 100\pi(0.1) = 10\pi \approx 31.4 \text{ cubic meters}" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Verificación:" : "Verification:"}</strong>{" "}
                        {language === "es"
                          ? "El cambio exacto sería: V(5.1) - V(5) = π(5.1)²(10) - π(5)²(10) = 10π(5.1² - 5²) = 10π(26.01 - 25) = 10.1π ≈ 31.7 metros cúbicos. Nuestra aproximación es muy cercana al valor exacto."
                          : "The exact change would be: V(5.1) - V(5) = π(5.1)²(10) - π(5)²(10) = 10π(5.1² - 5²) = 10π(26.01 - 25) = 10.1π ≈ 31.7 cubic meters. Our approximation is very close to the exact value."}
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
                  ? "La aproximación lineal tiene numerosas aplicaciones en ingeniería, física y análisis numérico:"
                  : "Linear approximation has numerous applications in engineering, physics, and numerical analysis:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Cálculos Aproximados:" : "Approximate Calculations:"}</strong>{" "}
                  {language === "es"
                    ? "Estimar valores de funciones complicadas sin necesidad de cálculos exactos."
                    : "Estimating values of complicated functions without the need for exact calculations."}
                </li>
                <li>
                  <strong>{language === "es" ? "Física:" : "Physics:"}</strong>{" "}
                  {language === "es"
                    ? "Analizar pequeños cambios en sistemas físicos, como en la teoría de perturbaciones."
                    : "Analyzing small changes in physical systems, such as in perturbation theory."}
                </li>
                <li>
                  <strong>{language === "es" ? "Ingeniería:" : "Engineering:"}</strong>{" "}
                  {language === "es"
                    ? "Estimar cambios en variables dependientes cuando las variables independientes cambian ligeramente."
                    : "Estimating changes in dependent variables when independent variables change slightly."}
                </li>
                <li>
                  <strong>{language === "es" ? "Métodos Numéricos:" : "Numerical Methods:"}</strong>{" "}
                  {language === "es"
                    ? "Base para algoritmos como el método de Newton-Raphson para encontrar raíces de ecuaciones."
                    : "Foundation for algorithms like the Newton-Raphson method for finding roots of equations."}
                </li>
                <li>
                  <strong>{language === "es" ? "Economía:" : "Economics:"}</strong>{" "}
                  {language === "es"
                    ? "Análisis marginal para estimar cambios en costos, ingresos o utilidades."
                    : "Marginal analysis to estimate changes in costs, revenues, or profits."}
                </li>
              </ul>
            </div>
          </section>

          {/* Common Mistakes Section */}
          <section>
            <h2 id="common-mistakes" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Errores Comunes" : "Common Mistakes"}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Al trabajar con aproximaciones lineales, es importante evitar estos errores comunes:"
                  : "When working with linear approximations, it's important to avoid these common mistakes:"}
              </p>

              <ul>
                <li>
                  <strong>
                    {language === "es"
                      ? "Usar la aproximación demasiado lejos del punto de tangencia:"
                      : "Using the approximation too far from the point of tangency:"}
                  </strong>{" "}
                  {language === "es"
                    ? "La precisión disminuye rápidamente a medida que nos alejamos del punto a."
                    : "Accuracy decreases rapidly as we move away from the point a."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Olvidar evaluar la derivada en el punto correcto:"
                      : "Forgetting to evaluate the derivative at the correct point:"}
                  </strong>{" "}
                  {language === "es"
                    ? "La derivada debe evaluarse en x = a, no en el punto donde queremos la aproximación."
                    : "The derivative must be evaluated at x = a, not at the point where we want the approximation."}
                </li>
                <li>
                  <strong>
                    {language === "es" ? "No considerar las cotas de error:" : "Not considering error bounds:"}
                  </strong>{" "}
                  {language === "es"
                    ? "En aplicaciones críticas, es esencial estimar el error máximo posible."
                    : "In critical applications, it's essential to estimate the maximum possible error."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Aplicar la técnica a funciones no diferenciables:"
                      : "Applying the technique to non-differentiable functions:"}
                  </strong>{" "}
                  {language === "es"
                    ? "La aproximación lineal requiere que la función sea diferenciable en el punto a."
                    : "Linear approximation requires that the function be differentiable at the point a."}
                </li>
              </ul>
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
                  <a href="#definition" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Definición" : "Definition"}
                  </a>
                </li>
                <li>
                  <a href="#geometric-interpretation" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Interpretación Geométrica" : "Geometric Interpretation"}
                  </a>
                </li>
                <li>
                  <a href="#error-analysis" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Análisis del Error" : "Error Analysis"}
                  </a>
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
                <li>
                  <a href="#common-mistakes" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Errores Comunes" : "Common Mistakes"}
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
                    {language === "es" ? "Cálculo Diferencial" : "Differential Calculus"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-calculus/taylor-series"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Series de Taylor" : "Taylor Series"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-calculus-applications/optimization"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Problemas de Optimización" : "Optimization Problems"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-calculus-applications/newton-raphson"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Método de Newton-Raphson" : "Newton-Raphson Method"}
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
                      href="/resources/solved-problems?topic=linear-approximation"
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
                        ? "Libros y artículos sobre aproximación lineal"
                        : "Books and articles on linear approximation"}
                    </p>
                    <Link
                      href="/resources/bibliography?topic=linear-approximation"
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
                      {language === "es" ? "Calculadora de Aproximación" : "Approximation Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta interactiva para aproximaciones lineales"
                        : "Interactive tool for linear approximations"}
                    </p>
                    <Link
                      href="/resources/tools/approximation-calculator"
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

      {/* Practice Problems Section */}
      <section className="mt-12 bg-muted/50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{language === "es" ? "Problemas de Práctica" : "Practice Problems"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2">
                <strong>{language === "es" ? "Problema 1:" : "Problem 1:"}</strong>{" "}
                {language === "es"
                  ? "Encuentra la aproximación lineal de f(x) = e^x en a = 0, y úsala para aproximar e^{0.2}."
                  : "Find the linear approximation of f(x) = e^x at a = 0, and use it to approximate e^{0.2}."}
              </p>
              <Button variant="outline" className="w-full mt-4">
                {language === "es" ? "Mostrar Solución" : "Show Solution"}
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <p className="mb-2">
                <strong>{language === "es" ? "Problema 2:" : "Problem 2:"}</strong>{" "}
                {language === "es"
                  ? "Usa la aproximación lineal para estimar \\sqrt[3]{27.5}."
                  : "Use linear approximation to estimate \\sqrt[3]{27.5}."}
              </p>
              <Button variant="outline" className="w-full mt-4">
                {language === "es" ? "Mostrar Solución" : "Show Solution"}
              </Button>
            </CardContent>
          </Card>
        </div>
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
                <Link
                  href="/topics/mathematics/differential-calculus-applications/related-rates"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Razones Relacionadas" : "Related Rates of Change"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende a analizar cómo las tasas de cambio de diferentes cantidades están relacionadas"
                    : "Learn to analyze how rates of change of different quantities are related"}
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
                <h3 className="font-semibold mb-1">{language === "es" ? "Tema Relacionado" : "Related Topic"}</h3>
                <Link
                  href="/topics/mathematics/differential-calculus/taylor-series"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Series de Taylor" : "Taylor Series"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Explora aproximaciones polinómicas de mayor orden"
                    : "Explore higher-order polynomial approximations"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
