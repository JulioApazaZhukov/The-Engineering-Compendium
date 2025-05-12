"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function LeibnizDerivativeRulePage() {
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
          {language === "es" ? "Regla de Derivación de Leibniz" : "Leibniz Derivative Rule"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Regla de Derivación de Leibniz" : "Leibniz Derivative Rule"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Diferenciación de integrales con límites variables"
              : "Differentiation of integrals with variable limits"}
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
              {language === "es" ? "Introducción a la Regla de Leibniz" : "Introduction to Leibniz's Rule"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La regla de derivación de Leibniz, nombrada en honor al matemático Gottfried Wilhelm Leibniz, es una fórmula que permite calcular la derivada de una integral definida cuyos límites de integración son funciones de la variable de diferenciación. Esta regla es una herramienta poderosa en cálculo avanzado y tiene numerosas aplicaciones en física, ingeniería y matemáticas aplicadas."
                  : "Leibniz's derivative rule, named after mathematician Gottfried Wilhelm Leibniz, is a formula that allows calculating the derivative of a definite integral whose limits of integration are functions of the differentiation variable. This rule is a powerful tool in advanced calculus and has numerous applications in physics, engineering, and applied mathematics."}
              </p>
              <p>
                {language === "es"
                  ? "La regla de Leibniz nos permite calcular derivadas de expresiones como:"
                  : "Leibniz's rule allows us to calculate derivatives of expressions such as:"}
              </p>
              <div className="my-4">
                <MathDisplay math="\frac{d}{dx}\left(\int_{a(x)}^{b(x)} f(t, x) \, dt\right)" />
              </div>
              <p>
                {language === "es"
                  ? "donde tanto los límites de integración a(x) y b(x) como el integrando f(t, x) pueden depender de la variable x."
                  : "where both the limits of integration a(x) and b(x) and the integrand f(t, x) may depend on the variable x."}
              </p>
            </div>
          </section>

          {/* The Theorem Section */}
          <section>
            <h2 id="theorem" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "El Teorema" : "The Theorem"}
            </h2>

            <div className="bg-muted p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-3">
                {language === "es" ? "Regla de Derivación de Leibniz" : "Leibniz Derivative Rule"}
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  {language === "es"
                    ? "Si f(t, x) es una función continua y tiene derivada parcial continua ∂f/∂x en el rectángulo R definido por α ≤ t ≤ β y a ≤ x ≤ b, y si a(x) y b(x) son funciones diferenciables de x en [a, b], entonces:"
                    : "If f(t, x) is a continuous function and has continuous partial derivative ∂f/∂x in the rectangle R defined by α ≤ t ≤ β and a ≤ x ≤ b, and if a(x) and b(x) are differentiable functions of x in [a, b], then:"}
                </p>
                <div className="my-4">
                  <MathDisplay math="\frac{d}{dx}\left(\int_{a(x)}^{b(x)} f(t, x) \, dt\right) = f(b(x), x) \cdot b'(x) - f(a(x), x) \cdot a'(x) + \int_{a(x)}^{b(x)} \frac{\partial f}{\partial x}(t, x) \, dt" />
                </div>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es" ? "La fórmula consta de tres términos:" : "The formula consists of three terms:"}
              </p>
              <ol>
                <li>
                  {language === "es"
                    ? "El primer término, f(b(x), x) · b'(x), representa la contribución del límite superior."
                    : "The first term, f(b(x), x) · b'(x), represents the contribution from the upper limit."}
                </li>
                <li>
                  {language === "es"
                    ? "El segundo término, -f(a(x), x) · a'(x), representa la contribución del límite inferior."
                    : "The second term, -f(a(x), x) · a'(x), represents the contribution from the lower limit."}
                </li>
                <li>
                  {language === "es"
                    ? "El tercer término, la integral de ∂f/∂x, representa la contribución de la dependencia explícita de f en x."
                    : "The third term, the integral of ∂f/∂x, represents the contribution from the explicit dependence of f on x."}
                </li>
              </ol>
            </div>
          </section>

          {/* Special Cases Section */}
          <section>
            <h2 id="special-cases" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Casos Especiales" : "Special Cases"}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Hay varios casos especiales importantes de la regla de Leibniz:"
                  : "There are several important special cases of Leibniz's rule:"}
              </p>

              <h3 className="text-lg font-semibold mt-4 mb-2">
                {language === "es"
                  ? "Caso 1: Solo el integrando depende de x"
                  : "Case 1: Only the integrand depends on x"}
              </h3>
              <p>
                {language === "es"
                  ? "Si los límites de integración son constantes (a(x) = a y b(x) = b), entonces:"
                  : "If the limits of integration are constants (a(x) = a and b(x) = b), then:"}
              </p>
              <div className="my-4">
                <MathDisplay math="\frac{d}{dx}\left(\int_{a}^{b} f(t, x) \, dt\right) = \int_{a}^{b} \frac{\partial f}{\partial x}(t, x) \, dt" />
              </div>

              <h3 className="text-lg font-semibold mt-4 mb-2">
                {language === "es" ? "Caso 2: Solo los límites dependen de x" : "Case 2: Only the limits depend on x"}
              </h3>
              <p>
                {language === "es"
                  ? "Si el integrando no depende explícitamente de x (f(t, x) = f(t)), entonces:"
                  : "If the integrand does not explicitly depend on x (f(t, x) = f(t)), then:"}
              </p>
              <div className="my-4">
                <MathDisplay math="\frac{d}{dx}\left(\int_{a(x)}^{b(x)} f(t) \, dt\right) = f(b(x)) \cdot b'(x) - f(a(x)) \cdot a'(x)" />
              </div>

              <h3 className="text-lg font-semibold mt-4 mb-2">
                {language === "es"
                  ? "Caso 3: Límite superior variable, límite inferior constante"
                  : "Case 3: Variable upper limit, constant lower limit"}
              </h3>
              <p>
                {language === "es"
                  ? "Si a(x) = a (constante) y solo el límite superior varía:"
                  : "If a(x) = a (constant) and only the upper limit varies:"}
              </p>
              <div className="my-4">
                <MathDisplay math="\frac{d}{dx}\left(\int_{a}^{b(x)} f(t, x) \, dt\right) = f(b(x), x) \cdot b'(x) + \int_{a}^{b(x)} \frac{\partial f}{\partial x}(t, x) \, dt" />
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
                      ? "Ejemplo 1: Límites Variables, Integrando Independiente de x"
                      : "Example 1: Variable Limits, Integrand Independent of x"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Calcular:" : "Calculate:"}</strong>
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{d}{dx}\left(\int_{x}^{x^2} t^3 \, dt\right)" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "En este caso, f(t, x) = t³ no depende explícitamente de x, pero los límites de integración sí: a(x) = x y b(x) = x². Por lo tanto, aplicamos el caso 2 de la regla de Leibniz:"
                          : "In this case, f(t, x) = t³ does not explicitly depend on x, but the limits of integration do: a(x) = x and b(x) = x². Therefore, we apply case 2 of Leibniz's rule:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{d}{dx}\left(\int_{a(x)}^{b(x)} f(t) \, dt\right) = f(b(x)) \cdot b'(x) - f(a(x)) \cdot a'(x)" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Calculamos las derivadas de los límites:"
                          : "We calculate the derivatives of the limits:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="a'(x) = \frac{d}{dx}(x) = 1" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="b'(x) = \frac{d}{dx}(x^2) = 2x" />
                      </div>

                      <p>
                        {language === "es" ? "Ahora sustituimos en la fórmula:" : "Now we substitute into the formula:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{d}{dx}\left(\int_{x}^{x^2} t^3 \, dt\right) = (x^2)^3 \cdot 2x - x^3 \cdot 1 = 2x \cdot x^6 - x^3 = 2x^7 - x^3 = x^3(2x^4 - 1)" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Verificación:" : "Verification:"}</strong>{" "}
                        {language === "es"
                          ? "Podemos verificar este resultado calculando primero la integral y luego derivando:"
                          : "We can verify this result by first calculating the integral and then differentiating:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\int t^3 \, dt = \frac{t^4}{4} + C" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="\int_{x}^{x^2} t^3 \, dt = \left[ \frac{t^4}{4} \right]_{x}^{x^2} = \frac{(x^2)^4}{4} - \frac{x^4}{4} = \frac{x^8}{4} - \frac{x^4}{4} = \frac{x^4(x^4 - 1)}{4}" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="\frac{d}{dx}\left(\frac{x^4(x^4 - 1)}{4}\right) = \frac{1}{4} \cdot \frac{d}{dx}(x^8 - x^4) = \frac{1}{4}(8x^7 - 4x^3) = 2x^7 - x^3 = x^3(2x^4 - 1)" />
                      </div>
                      <p>
                        {language === "es"
                          ? "Lo cual coincide con nuestro resultado anterior."
                          : "Which matches our previous result."}
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
                      ? "Ejemplo 2: Integrando Dependiente de x, Límites Constantes"
                      : "Example 2: Integrand Dependent on x, Constant Limits"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Calcular:" : "Calculate:"}</strong>
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{d}{dx}\left(\int_{0}^{1} t \cdot e^{xt} \, dt\right)" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "En este caso, f(t, x) = t · e^(xt) depende explícitamente de x, pero los límites de integración son constantes: a(x) = 0 y b(x) = 1. Por lo tanto, aplicamos el caso 1 de la regla de Leibniz:"
                          : "In this case, f(t, x) = t · e^(xt) explicitly depends on x, but the limits of integration are constants: a(x) = 0 and b(x) = 1. Therefore, we apply case 1 of Leibniz's rule:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{d}{dx}\left(\int_{a}^{b} f(t, x) \, dt\right) = \int_{a}^{b} \frac{\partial f}{\partial x}(t, x) \, dt" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Calculamos la derivada parcial de f con respecto a x:"
                          : "We calculate the partial derivative of f with respect to x:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{\partial f}{\partial x}(t, x) = \frac{\partial}{\partial x}(t \cdot e^{xt}) = t \cdot \frac{\partial}{\partial x}(e^{xt}) = t \cdot t \cdot e^{xt} = t^2 \cdot e^{xt}" />
                      </div>

                      <p>
                        {language === "es" ? "Ahora sustituimos en la fórmula:" : "Now we substitute into the formula:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{d}{dx}\left(\int_{0}^{1} t \cdot e^{xt} \, dt\right) = \int_{0}^{1} t^2 \cdot e^{xt} \, dt" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Este es nuestro resultado. Podemos calcular esta integral para valores específicos de x, pero la expresión general es la integral mostrada."
                          : "This is our result. We can calculate this integral for specific values of x, but the general expression is the integral shown."}
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
                    {language === "es" ? "Ejemplo 3: Caso General" : "Example 3: General Case"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Calcular:" : "Calculate:"}</strong>
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{d}{dx}\left(\int_{x}^{2x} \sin(xt) \, dt\right)" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "En este caso, tanto f(t, x) = sin(xt) como los límites de integración a(x) = x y b(x) = 2x dependen de x. Por lo tanto, aplicamos la regla general de Leibniz:"
                          : "In this case, both f(t, x) = sin(xt) and the limits of integration a(x) = x and b(x) = 2x depend on x. Therefore, we apply the general Leibniz rule:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{d}{dx}\left(\int_{a(x)}^{b(x)} f(t, x) \, dt\right) = f(b(x), x) \cdot b'(x) - f(a(x), x) \cdot a'(x) + \int_{a(x)}^{b(x)} \frac{\partial f}{\partial x}(t, x) \, dt" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Calculamos las derivadas de los límites:"
                          : "We calculate the derivatives of the limits:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="a'(x) = \frac{d}{dx}(x) = 1" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="b'(x) = \frac{d}{dx}(2x) = 2" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Calculamos la derivada parcial de f con respecto a x:"
                          : "We calculate the partial derivative of f with respect to x:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{\partial f}{\partial x}(t, x) = \frac{\partial}{\partial x}(\sin(xt)) = t \cdot \cos(xt)" />
                      </div>

                      <p>
                        {language === "es" ? "Ahora sustituimos en la fórmula:" : "Now we substitute into the formula:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay
                          math="\begin{align*}
\frac{d}{dx}\left(\int_{x}^{2x} \sin(xt) \, dt\right) &= \sin(x \cdot 2x) \cdot 2 - \sin(x \cdot x) \cdot 1 + \int_{x}^{2x} t \cdot \cos(xt) \, dt \\
&= 2\sin(2x^2) - \sin(x^2) + \int_{x}^{2x} t \cdot \cos(xt) \, dt
\end{align*}"
                        />
                      </div>

                      <p>
                        {language === "es"
                          ? "Este es nuestro resultado final, que incluye tanto términos de evaluación en los límites como una integral."
                          : "This is our final result, which includes both boundary evaluation terms and an integral."}
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
                  ? "La regla de derivación de Leibniz tiene numerosas aplicaciones en matemáticas y ciencias:"
                  : "Leibniz's derivative rule has numerous applications in mathematics and sciences:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Ecuaciones Diferenciales:" : "Differential Equations:"}</strong>{" "}
                  {language === "es"
                    ? "En la resolución de ecuaciones diferenciales parciales y en la teoría de sistemas dinámicos."
                    : "In solving partial differential equations and in the theory of dynamical systems."}
                </li>
                <li>
                  <strong>{language === "es" ? "Física:" : "Physics:"}</strong>{" "}
                  {language === "es"
                    ? "En mecánica, termodinámica y electromagnetismo, donde las cantidades físicas a menudo se expresan como integrales."
                    : "In mechanics, thermodynamics, and electromagnetism, where physical quantities are often expressed as integrals."}
                </li>
                <li>
                  <strong>{language === "es" ? "Teoría de Probabilidad:" : "Probability Theory:"}</strong>{" "}
                  {language === "es"
                    ? "En el cálculo de momentos y funciones características de variables aleatorias."
                    : "In calculating moments and characteristic functions of random variables."}
                </li>
                <li>
                  <strong>{language === "es" ? "Cálculo de Variaciones:" : "Calculus of Variations:"}</strong>{" "}
                  {language === "es"
                    ? "En problemas de optimización donde se busca extremizar funcionales."
                    : "In optimization problems where one seeks to extremize functionals."}
                </li>
                <li>
                  <strong>{language === "es" ? "Análisis Numérico:" : "Numerical Analysis:"}</strong>{" "}
                  {language === "es"
                    ? "En métodos numéricos para resolver ecuaciones diferenciales e integrales."
                    : "In numerical methods for solving differential and integral equations."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "La capacidad de diferenciar integrales con límites variables es una herramienta poderosa que permite abordar problemas complejos en diversas áreas de la ciencia y la ingeniería."
                  : "The ability to differentiate integrals with variable limits is a powerful tool that allows addressing complex problems in various areas of science and engineering."}
              </p>
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
                  ? "Al aplicar la regla de Leibniz, es importante evitar estos errores comunes:"
                  : "When applying Leibniz's rule, it's important to avoid these common mistakes:"}
              </p>

              <ul>
                <li>
                  <strong>
                    {language === "es" ? "Olvidar alguno de los términos:" : "Forgetting one of the terms:"}
                  </strong>{" "}
                  {language === "es"
                    ? "La regla completa tiene tres componentes: los dos términos de evaluación en los límites y la integral de la derivada parcial."
                    : "The complete rule has three components: the two boundary evaluation terms and the integral of the partial derivative."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Confundir derivadas parciales y totales:"
                      : "Confusing partial and total derivatives:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Es crucial distinguir entre ∂f/∂x (derivada parcial) y df/dx (derivada total)."
                    : "It's crucial to distinguish between ∂f/∂x (partial derivative) and df/dx (total derivative)."}
                </li>
                <li>
                  <strong>
                    {language === "es" ? "Aplicar incorrectamente los signos:" : "Incorrectly applying the signs:"}
                  </strong>{" "}
                  {language === "es"
                    ? "El término del límite inferior lleva un signo negativo, mientras que el del límite superior es positivo."
                    : "The lower limit term carries a negative sign, while the upper limit term is positive."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "No verificar las condiciones de aplicabilidad:"
                      : "Not checking the conditions of applicability:"}
                  </strong>{" "}
                  {language === "es"
                    ? "La regla requiere que f y ∂f/∂x sean continuas en la región de interés."
                    : "The rule requires that f and ∂f/∂x be continuous in the region of interest."}
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
                  <a href="#theorem" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "El Teorema" : "The Theorem"}
                  </a>
                </li>
                <li>
                  <a href="#special-cases" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Casos Especiales" : "Special Cases"}
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
                    href="/topics/mathematics/integral-calculus"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Cálculo Integral" : "Integral Calculus"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-calculus/partial-derivatives"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Derivadas Parciales" : "Partial Derivatives"}
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
                      //href="/resources/solved-problems?topic=leibniz-rule"
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
                        ? "Libros y artículos sobre la regla de Leibniz"
                        : "Books and articles on Leibniz's rule"}
                    </p>
                    <Link
                      //href="/resources/bibliography?topic=leibniz-rule"
                      href="/The-Engineering-Compendium/under-development"
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
                      {language === "es" ? "Calculadora Interactiva" : "Interactive Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta para aplicar la regla de Leibniz"
                        : "Tool for applying Leibniz's rule"}
                    </p>
                    <Link
                      href="/resources/tools/leibniz-rule-calculator"
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

      {/* Practice Problems Section
      <section className="mt-12 bg-muted/50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">{language === "es" ? "Problemas de Práctica" : "Practice Problems"}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="pt-6">
              <p className="mb-2">
                <strong>{language === "es" ? "Problema 1:" : "Problem 1:"}</strong>{" "}
                {language === "es"
                  ? "Calcula la derivada de la siguiente expresión:"
                  : "Calculate the derivative of the following expression:"}
              </p>
              <div className="my-4">
                <MathDisplay math="\frac{d}{dx}\left(\int_{0}^{x} \sqrt{1 + t^3} \, dt\right)" />
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
                  ? "Calcula la derivada de la siguiente expresión:"
                  : "Calculate the derivative of the following expression:"}
              </p>
              <div className="my-4">
                <MathDisplay math="\frac{d}{dx}\left(\int_{x}^{e^x} \frac{\sin(t)}{t} \, dt\right)" />
              </div>
              <Button variant="outline" className="w-full mt-4">
                {language === "es" ? "Mostrar Solución" : "Show Solution"}
              </Button>
            </CardContent>
          </Card>
        </div>
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
                  href="/topics/mathematics/differential-calculus-applications/newton-raphson"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Método de Newton-Raphson" : "Newton-Raphson Method"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende sobre este método iterativo para encontrar raíces de ecuaciones"
                    : "Learn about this iterative method for finding roots of equations"}
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
                <h3 className="font-semibold mb-1">{language === "es" ? "Tema Relacionado" : "Related Topic"}</h3>
                <Link
                  href="/topics/mathematics/calculus-of-variations"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Cálculo de Variaciones" : "Calculus of Variations"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Explora aplicaciones avanzadas de la regla de Leibniz"
                    : "Explore advanced applications of Leibniz's rule"}
                </p>
              </div>
            </div>
          </Card> */}
        </div>
      </section>
    </div>
  )
}
