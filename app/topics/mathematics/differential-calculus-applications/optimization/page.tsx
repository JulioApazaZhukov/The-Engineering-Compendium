"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function OptimizationPage() {
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
          {language === "es" ? "Problemas de Optimización" : "Optimization Problems"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Problemas de Optimización" : "Optimization Problems"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Encontrando valores máximos y mínimos para resolver problemas prácticos"
              : "Finding maximum and minimum values to solve practical problems"}
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
              {language === "es" ? "Introducción a la Optimización" : "Introduction to Optimization"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La optimización es una de las aplicaciones más importantes del cálculo diferencial. Se utiliza para encontrar los valores máximos o mínimos de una función, lo que permite resolver una amplia variedad de problemas prácticos en ingeniería, economía, ciencias y muchos otros campos."
                  : "Optimization is one of the most important applications of differential calculus. It is used to find the maximum or minimum values of a function, which allows us to solve a wide variety of practical problems in engineering, economics, sciences, and many other fields."}
              </p>
              <p>
                {language === "es"
                  ? "En esencia, la optimización implica encontrar los puntos críticos de una función (donde la derivada es cero) y luego determinar si estos puntos representan máximos, mínimos o puntos de inflexión."
                  : "In essence, optimization involves finding the critical points of a function (where the derivative is zero) and then determining whether these points represent maximums, minimums, or inflection points."}
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
                <h3 id="critical-points" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Puntos Críticos" : "Critical Points"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "Un punto crítico de una función f(x) es un valor de x donde f'(x) = 0 o f'(x) no está definida. Los puntos críticos son candidatos a ser máximos o mínimos locales."
                      : "A critical point of a function f(x) is a value of x where f'(x) = 0 or f'(x) is undefined. Critical points are candidates for local maximums or minimums."}
                  </p>
                  <div className="my-4">
                    <MathDisplay math="f'(x) = 0 \quad \text{or} \quad f'(x) \text{ is undefined}" />
                  </div>
                </div>
              </div>

              <div>
                <h3 id="second-derivative-test" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Prueba de la Segunda Derivada" : "Second Derivative Test"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "La prueba de la segunda derivada nos ayuda a determinar si un punto crítico es un máximo local, un mínimo local o ninguno de los dos:"
                      : "The second derivative test helps us determine whether a critical point is a local maximum, a local minimum, or neither:"}
                  </p>
                  <ul>
                    <li>
                      {language === "es"
                        ? "Si f'(x) = 0 y f''(x) < 0, entonces f tiene un máximo local en x."
                        : "If f'(x) = 0 and f''(x) < 0, then f has a local maximum at x."}
                    </li>
                    <li>
                      {language === "es"
                        ? "Si f'(x) = 0 y f''(x) > 0, entonces f tiene un mínimo local en x."
                        : "If f'(x) = 0 and f''(x) > 0, then f has a local minimum at x."}
                    </li>
                    <li>
                      {language === "es"
                        ? "Si f'(x) = 0 y f''(x) = 0, la prueba no es concluyente y se necesitan pruebas adicionales."
                        : "If f'(x) = 0 and f''(x) = 0, the test is inconclusive and additional tests are needed."}
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 id="absolute-extrema" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Extremos Absolutos" : "Absolute Extrema"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "Para encontrar los valores máximos o mínimos absolutos de una función en un intervalo cerrado [a, b], debemos:"
                      : "To find the absolute maximum or minimum values of a function on a closed interval [a, b], we must:"}
                  </p>
                  <ol>
                    <li>
                      {language === "es"
                        ? "Encontrar todos los puntos críticos de f en el intervalo (a, b)."
                        : "Find all critical points of f in the interval (a, b)."}
                    </li>
                    <li>
                      {language === "es"
                        ? "Evaluar f en cada punto crítico y en los extremos del intervalo (a y b)."
                        : "Evaluate f at each critical point and at the endpoints of the interval (a and b)."}
                    </li>
                    <li>
                      {language === "es"
                        ? "El valor más grande de f es el máximo absoluto, y el valor más pequeño es el mínimo absoluto."
                        : "The largest value of f is the absolute maximum, and the smallest value is the absolute minimum."}
                    </li>
                  </ol>
                </div>
              </div>

              <div>
                <h3 id="constrained-optimization" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Optimización con Restricciones" : "Constrained Optimization"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "Muchos problemas prácticos implican optimizar una función sujeta a una o más restricciones. Estos problemas a menudo se resuelven utilizando:"
                      : "Many practical problems involve optimizing a function subject to one or more constraints. These problems are often solved using:"}
                  </p>
                  <ul>
                    <li>
                      {language === "es"
                        ? "Sustitución directa: Usar la restricción para eliminar una variable."
                        : "Direct substitution: Using the constraint to eliminate a variable."}
                    </li>
                    <li>
                      {language === "es"
                        ? "Multiplicadores de Lagrange: Un método más avanzado para problemas con múltiples restricciones."
                        : "Lagrange multipliers: A more advanced method for problems with multiple constraints."}
                    </li>
                  </ul>
                </div>
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
                      ? "Ejemplo 1: Maximizar el Área de un Rectángulo"
                      : "Example 1: Maximizing Rectangle Area"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Un granjero tiene 100 metros de cercado y quiere encerrar un área rectangular adyacente a un río. Si no se necesita cercado a lo largo del río, ¿qué dimensiones maximizarán el área encerrada?"
                          : "A farmer has 100 meters of fencing and wants to enclose a rectangular area adjacent to a river. If no fencing is needed along the river, what dimensions will maximize the enclosed area?"}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Sea x la longitud del lado paralelo al río e y la longitud de los lados perpendiculares al río."
                          : "Let x be the length of the side parallel to the river and y be the length of the sides perpendicular to the river."}
                      </p>

                      <div className="my-4 text-center">
                        <Image
                          src="/The-Engineering-Compendium/placeholder.svg?height=200&width=300"
                          alt={language === "es" ? "Rectángulo junto al río" : "Rectangle next to river"}
                          width={300}
                          height={200}
                          className="mx-auto"
                        />
                      </div>

                      <p>
                        {language === "es"
                          ? "La restricción del perímetro nos da:"
                          : "The perimeter constraint gives us:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="x + 2y = 100" />
                      </div>
                      <p>{language === "es" ? "Despejando y:" : "Solving for y:"}</p>
                      <div className="my-4">
                        <MathDisplay math="y = \frac{100 - x}{2}" />
                      </div>

                      <p>{language === "es" ? "El área del rectángulo es:" : "The area of the rectangle is:"}</p>
                      <div className="my-4">
                        <MathDisplay math="A = xy = x \cdot \frac{100 - x}{2} = \frac{100x - x^2}{2}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Para maximizar el área, encontramos donde A'(x) = 0:"
                          : "To maximize the area, we find where A'(x) = 0:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="A'(x) = \frac{100 - 2x}{2} = \frac{100 - 2x}{2} = 0" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="100 - 2x = 0" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="x = 50" />
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div className="my-4">
                        <MathDisplay math="y = \frac{100 - 50}{2} = 25" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Para confirmar que este es un máximo, calculamos la segunda derivada:"
                          : "To confirm this is a maximum, we calculate the second derivative:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="A''(x) = -\frac{2}{2} = -1 < 0" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Como A''(x) < 0, confirmamos que x = 50 da un máximo."
                          : "Since A''(x) < 0, we confirm that x = 50 gives a maximum."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es"
                          ? "Las dimensiones óptimas son 50m × 25m, dando un área máxima de 1250 metros cuadrados."
                          : "The optimal dimensions are 50m × 25m, giving a maximum area of 1250 square meters."}
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
                    {language === "es" ? "Ejemplo 2: Minimizar el Costo" : "Example 2: Minimizing Cost"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Una empresa fabrica x unidades de un producto con un costo total de C(x) = 2000 + 10x - 0.01x² + 0.0001x³ dólares. ¿Cuántas unidades deben producirse para minimizar el costo promedio por unidad?"
                          : "A company manufactures x units of a product with a total cost of C(x) = 2000 + 10x - 0.01x² + 0.0001x³ dollars. How many units should be produced to minimize the average cost per unit?"}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "El costo promedio por unidad es el costo total dividido por el número de unidades:"
                          : "The average cost per unit is the total cost divided by the number of units:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="A(x) = \frac{C(x)}{x} = \frac{2000 + 10x - 0.01x^2 + 0.0001x^3}{x} = \frac{2000}{x} + 10 - 0.01x + 0.0001x^2" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Para minimizar el costo promedio, encontramos donde A'(x) = 0:"
                          : "To minimize the average cost, we find where A'(x) = 0:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="A'(x) = -\frac{2000}{x^2} - 0.01 + 0.0002x = 0" />
                      </div>

                      <p>{language === "es" ? "Multiplicando por x²:" : "Multiplying by x²:"}</p>
                      <div className="my-4">
                        <MathDisplay math="-2000 - 0.01x^2 + 0.0002x^3 = 0" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="0.0002x^3 - 0.01x^2 - 2000 = 0" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Esta ecuación cúbica se puede resolver numéricamente. La solución es aproximadamente x ≈ 200."
                          : "This cubic equation can be solved numerically. The solution is approximately x ≈ 200."}
                      </p>

                      <p>
                        {language === "es"
                          ? "Para verificar que este es un mínimo, podemos calcular A''(x) y comprobar que es positiva en x = 200:"
                          : "To verify this is a minimum, we can calculate A''(x) and check that it's positive at x = 200:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="A''(x) = \frac{4000}{x^3} + 0.0002 > 0 \text{ for } x = 200" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es"
                          ? "La empresa debe producir aproximadamente 200 unidades para minimizar el costo promedio por unidad."
                          : "The company should produce approximately 200 units to minimize the average cost per unit."}
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
                    {language === "es" ? "Ejemplo 3: Distancia Mínima" : "Example 3: Minimum Distance"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Encuentra el punto en la parábola y = x² que está más cercano al punto (3, 0)."
                          : "Find the point on the parabola y = x² that is closest to the point (3, 0)."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "La distancia desde un punto (x, y) en la parábola al punto (3, 0) está dada por:"
                          : "The distance from a point (x, y) on the parabola to the point (3, 0) is given by:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="d = \sqrt{(x-3)^2 + (y-0)^2} = \sqrt{(x-3)^2 + y^2}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Como el punto está en la parábola, sabemos que y = x². Sustituyendo:"
                          : "Since the point is on the parabola, we know that y = x². Substituting:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="d = \sqrt{(x-3)^2 + (x^2)^2} = \sqrt{(x-3)^2 + x^4}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Para minimizar la distancia, podemos minimizar el cuadrado de la distancia (que es más fácil de trabajar):"
                          : "To minimize the distance, we can minimize the square of the distance (which is easier to work with):"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="f(x) = d^2 = (x-3)^2 + x^4" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Derivamos e igualamos a cero:"
                          : "We differentiate and set equal to zero:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="f'(x) = 2(x-3) + 4x^3 = 2x - 6 + 4x^3 = 0" />
                      </div>

                      <p>{language === "es" ? "Reordenando:" : "Rearranging:"}</p>
                      <div className="my-4">
                        <MathDisplay math="4x^3 + 2x - 6 = 0" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Esta ecuación cúbica se puede resolver numéricamente. La solución es aproximadamente x ≈ 1.14."
                          : "This cubic equation can be solved numerically. The solution is approximately x ≈ 1.14."}
                      </p>

                      <p>
                        {language === "es"
                          ? "Por lo tanto, y = x² ≈ (1.14)² ≈ 1.30."
                          : "Therefore, y = x² ≈ (1.14)² ≈ 1.30."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es"
                          ? "El punto en la parábola más cercano a (3, 0) es aproximadamente (1.14, 1.30)."
                          : "The point on the parabola closest to (3, 0) is approximately (1.14, 1.30)."}
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
                  ? "Los problemas de optimización tienen numerosas aplicaciones en el mundo real:"
                  : "Optimization problems have numerous real-world applications:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Ingeniería:" : "Engineering:"}</strong>{" "}
                  {language === "es"
                    ? "Diseño de estructuras para maximizar la resistencia y minimizar el costo, optimización de circuitos eléctricos, diseño de sistemas de control."
                    : "Designing structures to maximize strength and minimize cost, optimizing electrical circuits, designing control systems."}
                </li>
                <li>
                  <strong>{language === "es" ? "Economía y Negocios:" : "Economics and Business:"}</strong>{" "}
                  {language === "es"
                    ? "Maximizar ganancias, minimizar costos, optimizar la producción, análisis de punto de equilibrio."
                    : "Maximizing profits, minimizing costs, optimizing production, break-even analysis."}
                </li>
                <li>
                  <strong>{language === "es" ? "Física:" : "Physics:"}</strong>{" "}
                  {language === "es"
                    ? "Encontrar trayectorias de mínima energía, principios de mínima acción, problemas de mecánica."
                    : "Finding minimum energy paths, principles of least action, mechanics problems."}
                </li>
                <li>
                  <strong>{language === "es" ? "Ciencias de la Computación:" : "Computer Science:"}</strong>{" "}
                  {language === "es"
                    ? "Algoritmos de optimización, aprendizaje automático, redes neuronales, compresión de datos."
                    : "Optimization algorithms, machine learning, neural networks, data compression."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "La capacidad de formular y resolver problemas de optimización es una habilidad esencial en muchas disciplinas científicas y de ingeniería."
                  : "The ability to formulate and solve optimization problems is an essential skill in many scientific and engineering disciplines."}
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
                      <a href="#critical-points" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Puntos Críticos" : "Critical Points"}
                      </a>
                    </li>
                    <li>
                      <a href="#second-derivative-test" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Prueba de la Segunda Derivada" : "Second Derivative Test"}
                      </a>
                    </li>
                    <li>
                      <a href="#absolute-extrema" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Extremos Absolutos" : "Absolute Extrema"}
                      </a>
                    </li>
                    <li>
                      <a href="#constrained-optimization" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Optimización con Restricciones" : "Constrained Optimization"}
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
                    href="/topics/mathematics/differential-calculus"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Cálculo Diferencial" : "Differential Calculus"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-calculus-applications/lhopitals-rule"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Regla de L'Hôpital" : "L'Hôpital's Rule"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/industrial/optimization"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Optimización Industrial" : "Industrial Optimization"}
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
                      //href="/resources/solved-problems?topic=optimization"
                      href="/under-development"
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
                        ? "Libros y artículos sobre optimización"
                        : "Books and articles on optimization"}
                    </p>
                    <Link
                      href="/resources/tools/bibliography"
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
                      {language === "es" ? "Calculadora de Optimización" : "Optimization Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta interactiva para resolver problemas de optimización"
                        : "Interactive tool for solving optimization problems"}
                    </p>
                    <Link
                      href="/resources/tools/optimization-calculator"
                      className="text-xs text-primary hover:underline"
                    >
                      {language === "es" ? "Usar calculadora" : "Use calculator"}
                    </Link>
                  </div>
                </div> */}
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
                  ? "Encuentra las dimensiones del rectángulo de área máxima que puede inscribirse en un círculo de radio 5 unidades."
                  : "Find the dimensions of the rectangle with maximum area that can be inscribed in a circle of radius 5 units."}
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
                  ? "Una caja rectangular sin tapa debe tener un volumen de 32 metros cúbicos. Encuentra las dimensiones que minimizarán la cantidad de material utilizado."
                  : "A rectangular box with no top is to have a volume of 32 cubic meters. Find the dimensions that will minimize the amount of material used."}
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
                  href="/topics/mathematics/differential-calculus-applications/lhopitals-rule"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Regla de L'Hôpital" : "L'Hôpital's Rule"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende a evaluar límites indeterminados usando derivadas"
                    : "Learn to evaluate indeterminate limits using derivatives"}
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
                <Link href="/topics/industrial/optimization" className="text-primary hover:underline text-lg">
                  {language === "es" ? "Optimización Industrial" : "Industrial Optimization"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Explora cómo se aplica la optimización en entornos industriales"
                    : "Explore how optimization is applied in industrial settings"}
                </p>
              </div>
            </div>
          </Card> */}
        </div>
      </section>
    </div>
  )
}
