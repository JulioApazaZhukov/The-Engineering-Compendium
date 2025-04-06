"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function NewtonRaphsonPage() {
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
          {language === "es" ? "Método de Newton-Raphson" : "Newton-Raphson Method"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Método de Newton-Raphson" : "Newton-Raphson Method"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Un método iterativo para encontrar raíces de ecuaciones"
              : "An iterative method for finding roots of equations"}
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
              {language === "es" ? "Introducción al Método de Newton-Raphson" : "Introduction to Newton-Raphson Method"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "El método de Newton-Raphson, también conocido simplemente como método de Newton, es una técnica iterativa poderosa para encontrar aproximaciones a las raíces (o ceros) de una función real. Nombrado en honor a Isaac Newton y Joseph Raphson, este método utiliza la derivada de una función para encontrar mejores aproximaciones a sus raíces."
                  : "The Newton-Raphson method, also simply known as Newton's method, is a powerful iterative technique for finding approximations to the roots (or zeros) of a real-valued function. Named after Isaac Newton and Joseph Raphson, this method uses the derivative of a function to find better approximations to its roots."}
              </p>
              <p>
                {language === "es"
                  ? "La idea fundamental detrás del método es simple pero elegante: comenzamos con una estimación inicial de la raíz y luego iterativamente mejoramos esta estimación utilizando la información proporcionada por la tangente a la curva en el punto actual."
                  : "The fundamental idea behind the method is simple yet elegant: we start with an initial guess for the root and then iteratively improve this guess using the information provided by the tangent to the curve at the current point."}
              </p>
            </div>
          </section>

          {/* The Algorithm Section */}
          <section>
            <h2 id="algorithm" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "El Algoritmo" : "The Algorithm"}
            </h2>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">
                {language === "es" ? "Fórmula de Iteración de Newton-Raphson" : "Newton-Raphson Iteration Formula"}
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  {language === "es"
                    ? "Para encontrar una raíz de la ecuación f(x) = 0, el método de Newton-Raphson utiliza la siguiente fórmula de iteración:"
                    : "To find a root of the equation f(x) = 0, the Newton-Raphson method uses the following iteration formula:"}
                </p>
                <div className="my-4">
                  <MathDisplay math="x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}" />
                </div>
                <p>{language === "es" ? "donde:" : "where:"}</p>
                <ul>
                  <li>
                    {language === "es"
                      ? "x_n es la aproximación actual de la raíz"
                      : "x_n is the current approximation of the root"}
                  </li>
                  <li>
                    {language === "es" ? "x_{n+1} es la siguiente aproximación" : "x_{n+1} is the next approximation"}
                  </li>
                  <li>
                    {language === "es"
                      ? "f(x_n) es el valor de la función en la aproximación actual"
                      : "f(x_n) is the value of the function at the current approximation"}
                  </li>
                  <li>
                    {language === "es"
                      ? "f'(x_n) es el valor de la derivada de la función en la aproximación actual"
                      : "f'(x_n) is the value of the derivative of the function at the current approximation"}
                  </li>
                </ul>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-3">
                {language === "es" ? "Pasos del Algoritmo" : "Algorithm Steps"}
              </h3>
              <ol>
                <li>
                  {language === "es"
                    ? "Elegir una aproximación inicial x_0 cercana a la raíz."
                    : "Choose an initial approximation x_0 close to the root."}
                </li>
                <li>
                  {language === "es"
                    ? "Calcular la siguiente aproximación usando la fórmula de iteración."
                    : "Calculate the next approximation using the iteration formula."}
                </li>
                <li>
                  {language === "es"
                    ? "Repetir el paso 2 hasta que se alcance la precisión deseada o se cumpla un criterio de parada."
                    : "Repeat step 2 until the desired accuracy is reached or a stopping criterion is met."}
                </li>
              </ol>

              <h3 className="text-xl font-semibold mb-3 mt-6">
                {language === "es" ? "Criterios de Parada" : "Stopping Criteria"}
              </h3>
              <p>
                {language === "es"
                  ? "Comúnmente se utilizan los siguientes criterios para detener las iteraciones:"
                  : "The following criteria are commonly used to stop the iterations:"}
              </p>
              <ul>
                <li>
                  {language === "es"
                    ? "Cuando el valor absoluto de f(x_n) es menor que una tolerancia predefinida (|f(x_n)| < ε)."
                    : "When the absolute value of f(x_n) is less than a predefined tolerance (|f(x_n)| < ε)."}
                </li>
                <li>
                  {language === "es"
                    ? "Cuando la diferencia entre dos aproximaciones sucesivas es menor que una tolerancia (|x_{n+1} - x_n| < δ)."
                    : "When the difference between two successive approximations is less than a tolerance (|x_{n+1} - x_n| < δ)."}
                </li>
                <li>
                  {language === "es"
                    ? "Cuando se alcanza un número máximo de iteraciones."
                    : "When a maximum number of iterations is reached."}
                </li>
              </ul>
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
                  ? "El método de Newton-Raphson tiene una interpretación geométrica clara y elegante:"
                  : "The Newton-Raphson method has a clear and elegant geometric interpretation:"}
              </p>

              <ol>
                <li>
                  {language === "es"
                    ? "Comenzamos con un punto x_n en el eje x."
                    : "We start with a point x_n on the x-axis."}
                </li>
                <li>
                  {language === "es"
                    ? "Calculamos el valor de la función f(x_n) y su derivada f'(x_n) en este punto."
                    : "We calculate the value of the function f(x_n) and its derivative f'(x_n) at this point."}
                </li>
                <li>
                  {language === "es"
                    ? "Trazamos la recta tangente a la curva y = f(x) en el punto (x_n, f(x_n))."
                    : "We draw the tangent line to the curve y = f(x) at the point (x_n, f(x_n))."}
                </li>
                <li>
                  {language === "es"
                    ? "La ecuación de esta recta tangente es y = f(x_n) + f'(x_n)(x - x_n)."
                    : "The equation of this tangent line is y = f(x_n) + f'(x_n)(x - x_n)."}
                </li>
                <li>
                  {language === "es"
                    ? "Encontramos el punto donde esta recta tangente cruza el eje x (y = 0)."
                    : "We find the point where this tangent line crosses the x-axis (y = 0)."}
                </li>
                <li>
                  {language === "es"
                    ? "Este punto de intersección es nuestra siguiente aproximación x_{n+1}."
                    : "This intersection point is our next approximation x_{n+1}."}
                </li>
              </ol>

              <p>
                {language === "es"
                  ? "Resolviendo la ecuación de la recta tangente para y = 0, obtenemos:"
                  : "Solving the tangent line equation for y = 0, we get:"}
              </p>
              <div className="my-4">
                <MathDisplay
                  math="\begin{align*}
0 &= f(x_n) + f'(x_n)(x_{n+1} - x_n) \\
-f(x_n) &= f'(x_n)(x_{n+1} - x_n) \\
x_{n+1} - x_n &= -\frac{f(x_n)}{f'(x_n)} \\
x_{n+1} &= x_n - \frac{f(x_n)}{f'(x_n)}
\end{align*}"
                />
              </div>

              <p>
                {language === "es"
                  ? "Lo cual es exactamente la fórmula de iteración de Newton-Raphson."
                  : "Which is exactly the Newton-Raphson iteration formula."}
              </p>
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
                    {language === "es" ? "Ejemplo 1: Encontrar √2" : "Example 1: Finding √2"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Usar el método de Newton-Raphson para encontrar √2."
                          : "Use the Newton-Raphson method to find √2."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Podemos reformular este problema como encontrar la raíz de la función f(x) = x² - 2."
                          : "We can reformulate this problem as finding the root of the function f(x) = x² - 2."}
                      </p>

                      <p>
                        {language === "es"
                          ? "La derivada de esta función es f'(x) = 2x."
                          : "The derivative of this function is f'(x) = 2x."}
                      </p>

                      <p>
                        {language === "es"
                          ? "Usando la fórmula de iteración de Newton-Raphson:"
                          : "Using the Newton-Raphson iteration formula:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)} = x_n - \frac{x_n^2 - 2}{2x_n} = x_n - \frac{x_n - \frac{2}{x_n}}{2} = \frac{x_n + \frac{2}{x_n}}{2}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Comenzando con x_0 = 1.5 (una estimación inicial razonable):"
                          : "Starting with x_0 = 1.5 (a reasonable initial guess):"}
                      </p>
                      <div className="my-4">
                        <MathDisplay
                          math="\begin{align*}
x_1 &= \frac{1.5 + \frac{2}{1.5}}{2} = \frac{1.5 + 1.333...}{2} = 1.416... \\
x_2 &= \frac{1.416... + \frac{2}{1.416...}}{2} = 1.414... \\
x_3 &= \frac{1.414... + \frac{2}{1.414...}}{2} = 1.414213...
\end{align*}"
                        />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es"
                          ? "Después de solo 3 iteraciones, hemos obtenido una aproximación muy precisa de √2 ≈ 1.414213..."
                          : "After just 3 iterations, we have obtained a very accurate approximation of √2 ≈ 1.414213..."}
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
                    {language === "es" ? "Ejemplo 2: Ecuación Trascendental" : "Example 2: Transcendental Equation"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Encontrar una raíz de la ecuación f(x) = x - cos(x) = 0 en el intervalo [0, π/2]."
                          : "Find a root of the equation f(x) = x - cos(x) = 0 in the interval [0, π/2]."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Para esta función, f(x) = x - cos(x) y f'(x) = 1 + sin(x)."
                          : "For this function, f(x) = x - cos(x) and f'(x) = 1 + sin(x)."}
                      </p>

                      <p>
                        {language === "es"
                          ? "La fórmula de iteración de Newton-Raphson es:"
                          : "The Newton-Raphson iteration formula is:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="x_{n+1} = x_n - \frac{x_n - \cos(x_n)}{1 + \sin(x_n)}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Comenzando con x_0 = 0.5 (punto medio del intervalo):"
                          : "Starting with x_0 = 0.5 (midpoint of the interval):"}
                      </p>
                      <div className="my-4">
                        <MathDisplay
                          math="\begin{align*}
x_1 &= 0.5 - \frac{0.5 - \cos(0.5)}{1 + \sin(0.5)} = 0.5 - \frac{0.5 - 0.8776...}{1 + 0.4794...} = 0.5 - \frac{-0.3776...}{1.4794...} = 0.5 + 0.2553... = 0.7553... \\
x_2 &= 0.7553... - \frac{0.7553... - \cos(0.7553...)}{1 + \sin(0.7553...)} = 0.7391... \\
x_3 &= 0.7391... - \frac{0.7391... - \cos(0.7391...)}{1 + \sin(0.7391...)} = 0.7390851...
\end{align*}"
                        />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Verificación:" : "Verification:"}</strong>{" "}
                        {language === "es"
                          ? "Podemos verificar que x ≈ 0.7390851 es una buena aproximación calculando f(x):"
                          : "We can verify that x ≈ 0.7390851 is a good approximation by calculating f(x):"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="f(0.7390851) = 0.7390851 - \cos(0.7390851) \approx 0.7390851 - 0.7390851 = 0" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es"
                          ? "La raíz de la ecuación x - cos(x) = 0 en el intervalo [0, π/2] es aproximadamente x ≈ 0.7390851."
                          : "The root of the equation x - cos(x) = 0 in the interval [0, π/2] is approximately x ≈ 0.7390851."}
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
                    {language === "es" ? "Ejemplo 3: Ecuación Polinómica" : "Example 3: Polynomial Equation"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Encontrar una raíz real positiva de la ecuación f(x) = x³ - 5x² + 7x - 3 = 0."
                          : "Find a positive real root of the equation f(x) = x³ - 5x² + 7x - 3 = 0."}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Para esta función, f(x) = x³ - 5x² + 7x - 3 y f'(x) = 3x² - 10x + 7."
                          : "For this function, f(x) = x³ - 5x² + 7x - 3 and f'(x) = 3x² - 10x + 7."}
                      </p>

                      <p>
                        {language === "es"
                          ? "La fórmula de iteración de Newton-Raphson es:"
                          : "The Newton-Raphson iteration formula is:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="x_{n+1} = x_n - \frac{x_n^3 - 5x_n^2 + 7x_n - 3}{3x_n^2 - 10x_n + 7}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Por el teorema de Descartes, esta ecuación tiene al menos una raíz positiva. Comenzando con x_0 = 1:"
                          : "By Descartes' rule of signs, this equation has at least one positive root. Starting with x_0 = 1:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay
                          math="\begin{align*}
x_1 &= 1 - \frac{1^3 - 5 \cdot 1^2 + 7 \cdot 1 - 3}{3 \cdot 1^2 - 10 \cdot 1 + 7} = 1 - \frac{1 - 5 + 7 - 3}{3 - 10 + 7} = 1 - \frac{0}{0} \text{ (indeterminado)}
\end{align*}"
                        />
                      </div>

                      <p>
                        {language === "es"
                          ? "Parece que x = 1 es exactamente una raíz (o muy cercana). Verifiquemos:"
                          : "It appears that x = 1 is exactly a root (or very close). Let's verify:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="f(1) = 1^3 - 5 \cdot 1^2 + 7 \cdot 1 - 3 = 1 - 5 + 7 - 3 = 0" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es"
                          ? "¡Efectivamente, x = 1 es una raíz exacta de la ecuación!"
                          : "Indeed, x = 1 is an exact root of the equation!"}
                      </p>

                      <p>
                        {language === "es"
                          ? "Para encontrar las otras raíces, podríamos factorizar el polinomio como (x - 1)(x² - 4x + 3) = 0, lo que nos da las raíces adicionales x = 1, x = 3."
                          : "To find the other roots, we could factorize the polynomial as (x - 1)(x² - 4x + 3) = 0, which gives us the additional roots x = 1, x = 3."}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </section>

          {/* Convergence and Limitations Section */}
          <section>
            <h2 id="convergence" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Convergencia y Limitaciones" : "Convergence and Limitations"}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-3">{language === "es" ? "Convergencia" : "Convergence"}</h3>

              <p>
                {language === "es"
                  ? "El método de Newton-Raphson tiene las siguientes propiedades de convergencia:"
                  : "The Newton-Raphson method has the following convergence properties:"}
              </p>
              <ul>
                <li>
                  <strong>{language === "es" ? "Convergencia Local:" : "Local Convergence:"}</strong>{" "}
                  {language === "es"
                    ? "Si la derivada de la función no es cero en la raíz y la estimación inicial está suficientemente cerca de la raíz, el método converge cuadráticamente."
                    : "If the derivative of the function is not zero at the root and the initial guess is sufficiently close to the root, the method converges quadratically."}
                </li>
                <li>
                  <strong>{language === "es" ? "Convergencia Cuadrática:" : "Quadratic Convergence:"}</strong>{" "}
                  {language === "es"
                    ? "Una vez que estamos lo suficientemente cerca de la raíz, el número de dígitos correctos aproximadamente se duplica en cada iteración."
                    : "Once we are close enough to the root, the number of correct digits approximately doubles with each iteration."}
                </li>
                <li>
                  <strong>
                    {language === "es" ? "Sensibilidad a la Elección Inicial:" : "Sensitivity to Initial Choice:"}
                  </strong>{" "}
                  {language === "es"
                    ? "El método puede no converger o converger a una raíz diferente dependiendo de la estimación inicial."
                    : "The method may not converge or may converge to a different root depending on the initial guess."}
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 mt-6">{language === "es" ? "Limitaciones" : "Limitations"}</h3>

              <p>
                {language === "es"
                  ? "El método de Newton-Raphson presenta las siguientes limitaciones:"
                  : "The Newton-Raphson method has the following limitations:"}
              </p>
              <ul>
                <li>
                  <strong>{language === "es" ? "Derivada Nula:" : "Zero Derivative:"}</strong>{" "}
                  {language === "es"
                    ? "El método falla si la derivada f'(x_n) se hace cero o muy cercana a cero durante las iteraciones."
                    : "The method fails if the derivative f'(x_n) becomes zero or very close to zero during iterations."}
                </li>
                <li>
                  <strong>{language === "es" ? "Raíces Múltiples:" : "Multiple Roots:"}</strong>{" "}
                  {language === "es"
                    ? "La convergencia es más lenta (lineal en lugar de cuadrática) cuando se encuentra una raíz múltiple."
                    : "Convergence is slower (linear instead of quadratic) when encountering a multiple root."}
                </li>
                <li>
                  <strong>{language === "es" ? "Comportamiento Caótico:" : "Chaotic Behavior:"}</strong>{" "}
                  {language === "es"
                    ? "Para algunas funciones y valores iniciales, el método puede mostrar comportamiento caótico o diverger."
                    : "For some functions and initial values, the method may exhibit chaotic behavior or diverge."}
                </li>
                <li>
                  <strong>{language === "es" ? "Costo Computacional:" : "Computational Cost:"}</strong>{" "}
                  {language === "es"
                    ? "Requiere el cálculo de la derivada, lo que puede ser costoso para funciones complejas."
                    : "It requires calculating the derivative, which can be costly for complex functions."}
                </li>
              </ul>
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
                  ? "El método de Newton-Raphson tiene numerosas aplicaciones en matemáticas, ciencias e ingeniería:"
                  : "The Newton-Raphson method has numerous applications in mathematics, sciences, and engineering:"}
              </p>

              <ul>
                <li>
                  <strong>
                    {language === "es" ? "Solución de Ecuaciones No Lineales:" : "Solving Nonlinear Equations:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Su aplicación más directa, usada en numerosos problemas científicos y de ingeniería."
                    : "Its most direct application, used in numerous scientific and engineering problems."}
                </li>
                <li>
                  <strong>{language === "es" ? "Optimización:" : "Optimization:"}</strong>{" "}
                  {language === "es"
                    ? "Encontrar máximos y mínimos de funciones aplicando el método a la derivada de la función."
                    : "Finding maxima and minima of functions by applying the method to the derivative of the function."}
                </li>
                <li>
                  <strong>
                    {language === "es" ? "Sistemas de Ecuaciones No Lineales:" : "Systems of Nonlinear Equations:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Extendido a sistemas multivariable mediante el uso de la matriz Jacobiana."
                    : "Extended to multivariable systems using the Jacobian matrix."}
                </li>
                <li>
                  <strong>{language === "es" ? "Cálculo Numérico:" : "Numerical Computation:"}</strong>{" "}
                  {language === "es"
                    ? "Cálculo de funciones inversas, raíces cuadradas, y otras operaciones."
                    : "Computing inverse functions, square roots, and other operations."}
                </li>
                <li>
                  <strong>{language === "es" ? "Física Computacional:" : "Computational Physics:"}</strong>{" "}
                  {language === "es"
                    ? "Resolución de ecuaciones que modelan fenómenos físicos."
                    : "Solving equations that model physical phenomena."}
                </li>
                <li>
                  <strong>{language === "es" ? "Ingeniería Eléctrica:" : "Electrical Engineering:"}</strong>{" "}
                  {language === "es"
                    ? "Análisis de circuitos no lineales y sistemas de potencia."
                    : "Analyzing nonlinear circuits and power systems."}
                </li>
                <li>
                  <strong>{language === "es" ? "Economía:" : "Economics:"}</strong>{" "}
                  {language === "es"
                    ? "Cálculo de equilibrios en modelos económicos."
                    : "Computing equilibria in economic models."}
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
                  ? "Al aplicar el método de Newton-Raphson, es importante evitar estos errores comunes:"
                  : "When applying the Newton-Raphson method, it's important to avoid these common mistakes:"}
              </p>

              <ul>
                <li>
                  <strong>
                    {language === "es"
                      ? "Elegir una aproximación inicial inadecuada:"
                      : "Choosing an inappropriate initial approximation:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Puede llevar a divergencia o convergencia a una raíz no deseada."
                    : "Can lead to divergence or convergence to an undesired root."}
                </li>
                <li>
                  <strong>{language === "es" ? "No verificar que f'(x) ≠ 0:" : "Not checking that f'(x) ≠ 0:"}</strong>{" "}
                  {language === "es"
                    ? "Puede resultar en división por cero o inestabilidad numérica."
                    : "Can result in division by zero or numerical instability."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Ignorar problemas de convergencia lenta:"
                      : "Ignoring slow convergence issues:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Especialmente cerca de raíces múltiples o cuando la función es casi plana."
                    : "Especially near multiple roots or when the function is nearly flat."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "No establecer criterios de parada adecuados:"
                      : "Not setting appropriate stopping criteria:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Puede llevar a iteraciones innecesarias o parada prematura."
                    : "Can lead to unnecessary iterations or premature stopping."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Simplificar incorrectamente las expresiones:"
                      : "Incorrectly simplifying expressions:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Errores algebraicos al derivar la función pueden causar resultados erróneos."
                    : "Algebraic errors when deriving the function can cause erroneous results."}
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
                  <a href="#algorithm" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "El Algoritmo" : "The Algorithm"}
                  </a>
                </li>
                <li>
                  <a href="#geometric-interpretation" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Interpretación Geométrica" : "Geometric Interpretation"}
                  </a>
                </li>
                <li>
                  <a href="#examples" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Ejemplos" : "Examples"}
                  </a>
                </li>
                <li>
                  <a href="#convergence" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Convergencia y Limitaciones" : "Convergence and Limitations"}
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
                    href="/topics/mathematics/numerical-methods"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Métodos Numéricos" : "Numerical Methods"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-calculus-applications/optimization"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Optimización" : "Optimization"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-calculus-applications/linear-approximation"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Aproximación Lineal" : "Linear Approximation"}
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
                      href="/resources/solved-problems?topic=newton-raphson"
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
                        ? "Libros y artículos sobre el método de Newton-Raphson"
                        : "Books and articles on the Newton-Raphson method"}
                    </p>
                    <Link
                      href="/resources/bibliography?topic=newton-raphson"
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
                      {language === "es" ? "Calculadora Interactiva" : "Interactive Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta para aplicar el método de Newton-Raphson"
                        : "Tool for applying the Newton-Raphson method"}
                    </p>
                    <Link
                      href="/resources/tools/newton-raphson-calculator"
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
                  ? "Usa el método de Newton-Raphson para encontrar una raíz de la ecuación:"
                  : "Use the Newton-Raphson method to find a root of the equation:"}
              </p>
              <div className="my-4">
                <MathDisplay math="f(x) = e^x - 3x" />
              </div>
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
                  ? "Usa el método de Newton-Raphson para encontrar una aproximación de la raíz cúbica de 10 con precisión de 4 decimales."
                  : "Use the Newton-Raphson method to find an approximation of the cube root of 10 to 4 decimal places."}
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
                  {language === "es" ? "Razones de Cambio Relacionadas" : "Related Rates of Change"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende a analizar cómo se relacionan las tasas de cambio"
                    : "Learn to analyze how rates of change are related"}
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
                  href="/topics/mathematics/numerical-methods/iteration-methods"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Métodos Iterativos" : "Iteration Methods"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Explora otros métodos iterativos para resolver ecuaciones"
                    : "Explore other iterative methods for solving equations"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
