"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function IntegrationByPartsPage() {
  const { language } = useLanguage()
  const [activeExample, setActiveExample] = useState<number | null>(null)

  const toggleExample = (index: number) => {
    setActiveExample(activeExample === index ? null : index)
  }

  // Add scroll margin to section headings
  useEffect(() => {
    const style = document.createElement("style")
    style.innerHTML = `
      section[id] {
        scroll-margin-top: 80px;
      }
    `
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

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
          {language === "es" ? "Integración por Partes" : "Integration by Parts"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Integración por Partes" : "Integration by Parts"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Una técnica para integrar productos de funciones"
              : "A technique for integrating products of functions"}
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
          <section id="introduction">
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Introducción a la Integración por Partes" : "Introduction to Integration by Parts"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La integración por partes es una técnica utilizada para encontrar la integral de un producto de funciones. Se basa en la regla del producto de la diferenciación y es particularmente útil cuando la integración directa es difícil o imposible."
                  : "Integration by parts is a technique used to find the integral of a product of functions. It is based on the product rule of differentiation and is particularly useful when direct integration is difficult or impossible."}
              </p>
              <p>
                {language === "es"
                  ? "La fórmula para la integración por partes es:"
                  : "The formula for integration by parts is:"}
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="\int u(x) \, v'(x) \, dx = u(x)v(x) - \int v(x) \, u'(x) \, dx" />
              </div>
              <p>
                {language === "es"
                  ? "Esto a menudo se escribe en la forma más compacta:"
                  : "This is often written in the more compact form:"}
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="\int u \, dv = uv - \int v \, du" />
              </div>
              <p>{language === "es" ? "Donde:" : "Where:"}</p>
              <ul>
                <li>
                  <MathDisplay math="u" display={false} />
                  {language === "es" ? " es la primera función que eliges" : " is the first function you choose"}
                </li>
                <li>
                  <MathDisplay math="dv" display={false} />
                  {language === "es"
                    ? " es el diferencial de la segunda función"
                    : " is the differential of the second function"}
                </li>
                <li>
                  <MathDisplay math="v" display={false} />
                  {language === "es" ? " es la integral de " : " is the integral of "}
                  <MathDisplay math="dv" display={false} />
                </li>
                <li>
                  <MathDisplay math="du" display={false} />
                  {language === "es" ? " es el diferencial de " : " is the differential of "}
                  <MathDisplay math="u" display={false} />
                </li>
              </ul>
            </div>
          </section>

          {/* When to Use Section */}
          <section id="when-to-use">
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Cuándo Usar la Integración por Partes" : "When to Use Integration by Parts"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La integración por partes es particularmente útil para integrales de las siguientes formas:"
                  : "Integration by parts is particularly useful for integrals of the following forms:"}
              </p>
              <ul>
                <li>
                  {language === "es"
                    ? "Productos de funciones algebraicas y trascendentales: "
                    : "Products of algebraic and transcendental functions: "}
                  <MathDisplay
                    math="\int x^n e^x \, dx, \int x^n \ln(x) \, dx, \int x^n \sin(x) \, dx"
                    display={false}
                  />
                </li>
                <li>
                  {language === "es"
                    ? "Productos de funciones logarítmicas y algebraicas: "
                    : "Products of logarithmic and algebraic functions: "}
                  <MathDisplay math="\int \ln(x) \, dx, \int x \ln(x) \, dx" display={false} />
                </li>
                <li>
                  {language === "es"
                    ? "Productos que involucran funciones trigonométricas inversas: "
                    : "Products involving inverse trigonometric functions: "}
                  <MathDisplay math="\int x \arctan(x) \, dx, \int \arcsin(x) \, dx" display={false} />
                </li>
              </ul>
              <p>
                {language === "es"
                  ? "La clave para aplicar con éxito la integración por partes es elegir las funciones correctas para "
                  : "The key to successfully applying integration by parts is choosing the right functions for "}
                <MathDisplay math="u" display={false} />
                {language === "es" ? " y " : " and "}
                <MathDisplay math="dv" display={false} />
                {language === "es"
                  ? ". Un recurso mnemotécnico útil para elegir "
                  : ". A helpful mnemonic for choosing "}
                <MathDisplay math="u" display={false} />
                {language === "es" ? ' es "LIATE":' : ' is "LIATE":'}
              </p>
              <ul>
                <li>
                  <strong>L</strong>
                  {language === "es"
                    ? ": Funciones logarítmicas (ln(x), log₁₀(x))"
                    : ": Logarithmic functions (ln(x), log₁₀(x))"}
                </li>
                <li>
                  <strong>I</strong>
                  {language === "es"
                    ? ": Funciones trigonométricas inversas (arcsin(x), arctan(x))"
                    : ": Inverse trigonometric functions (arcsin(x), arctan(x))"}
                </li>
                <li>
                  <strong>A</strong>
                  {language === "es" ? ": Funciones algebraicas (x, x², √x)" : ": Algebraic functions (x, x², √x)"}
                </li>
                <li>
                  <strong>T</strong>
                  {language === "es"
                    ? ": Funciones trigonométricas (sin(x), cos(x))"
                    : ": Trigonometric functions (sin(x), cos(x))"}
                </li>
                <li>
                  <strong>E</strong>
                  {language === "es" ? ": Funciones exponenciales (eˣ, aˣ)" : ": Exponential functions (eˣ, aˣ)"}
                </li>
              </ul>
              <p>
                {language === "es"
                  ? "Las funciones más altas en esta lista son generalmente mejores opciones para "
                  : "Functions higher in this list are generally better choices for "}
                <MathDisplay math="u" display={false} />
                {language === "es"
                  ? ", mientras que las funciones más bajas en la lista son mejores para "
                  : ", while functions lower in the list are better for "}
                <MathDisplay math="dv" display={false} />
                {language === "es" ? "." : "."}
              </p>
            </div>
          </section>

          {/* Examples Section */}
          <section id="examples">
            <h2 className="text-2xl font-bold mb-4">{language === "es" ? "Ejemplos" : "Examples"}</h2>

            <div className="space-y-4">
              {/* Example 1 */}
              <Card className="overflow-hidden">
                <div
                  className="p-4 bg-muted cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExample(1)}
                >
                  <h3 className="font-medium">
                    {language === "es"
                      ? "Ejemplo 1: Integración por Partes Básica"
                      : "Example 1: Basic Integration by Parts"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int x \sin(x) \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Apliquemos la fórmula de integración por partes:"
                          : "Let's apply the integration by parts formula:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\int u \, dv = uv - \int v \, du" />
                      </div>

                      <p>
                        {language === "es" ? "Necesitamos elegir " : "We need to choose "}
                        <MathDisplay math="u" display={false} />
                        {language === "es" ? " y " : " and "}
                        <MathDisplay math="dv" display={false} />
                        {language === "es" ? ":" : ":"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="u = x \quad \Rightarrow \quad du = dx" />
                        </div>
                        <div>
                          <MathDisplay math="dv = \sin(x) \, dx \quad \Rightarrow \quad v = \int \sin(x) \, dx = -\cos(x)" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Ahora sustituimos estos en la fórmula de integración por partes:"
                          : "Now we substitute these into the integration by parts formula:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int x \sin(x) \, dx = x \cdot (-\cos(x)) - \int (-\cos(x)) \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="= -x\cos(x) + \int \cos(x) \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="= -x\cos(x) + \sin(x) + C" />
                        </div>
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div>
                        <MathDisplay math="\int x \sin(x) \, dx = -x\cos(x) + \sin(x) + C" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Podemos verificar esto derivando el resultado:"
                          : "We can verify this by differentiating the result:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{d}{dx}[-x\cos(x) + \sin(x) + C]" />
                        </div>
                        <div>
                          <MathDisplay math="= -\cos(x) - x \cdot (-\sin(x)) + \cos(x)" />
                        </div>
                        <div>
                          <MathDisplay math="= -\cos(x) + x\sin(x) + \cos(x)" />
                        </div>
                        <div>
                          <MathDisplay math="= x\sin(x)" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Lo que confirma que nuestra respuesta es correcta."
                          : "Which confirms our answer is correct."}
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
                    {language === "es" ? "Ejemplo 2: Función Logarítmica" : "Example 2: Logarithmic Function"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \ln(x) \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Apliquemos la fórmula de integración por partes:"
                          : "Let&#39;s apply the integration by parts formula:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\int u \, dv = uv - \int v \, du" />{" "}
                      </div>

                      <p>
                        {language === "es" ? "Necesitamos elegir " : "We need to choose "}
                        <MathDisplay math="u" display={false} />
                        {language === "es" ? " y " : " and "}
                        <MathDisplay math="dv" display={false} />
                        {language === "es" ? ":" : ":"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="u = \ln(x) \quad \Rightarrow \quad du = \frac{1}{x} \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="dv = dx \quad \Rightarrow \quad v = \int dx = x" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Ahora sustituimos estos en la fórmula de integración por partes:"
                          : "Now we substitute these into the integration by parts formula:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \ln(x) \, dx = \ln(x) \cdot x - \int x \cdot \frac{1}{x} \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="= x\ln(x) - \int 1 \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="= x\ln(x) - x + C" />
                        </div>
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div>
                        <MathDisplay math="\int \ln(x) \, dx = x\ln(x) - x + C" />
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
                    {language === "es"
                      ? "Ejemplo 3: Integración por Partes Repetida"
                      : "Example 3: Repeated Integration by Parts"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int x^2 e^x \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Este ejemplo requiere aplicar la integración por partes dos veces. Comencemos con la primera aplicación:"
                          : "This example requires applying integration by parts twice. Let's start with the first application:"}
                      </p>

                      <p>{language === "es" ? "Primera aplicación:" : "First application:"}</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="u = x^2 \quad \Rightarrow \quad du = 2x \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="dv = e^x \, dx \quad \Rightarrow \quad v = e^x" />
                        </div>
                      </div>

                      <div className="my-2">
                        <MathDisplay math="\int x^2 e^x \, dx = x^2 e^x - \int e^x \cdot 2x \, dx" />
                      </div>
                      <div className="my-2">
                        <MathDisplay math="= x^2 e^x - 2\int x e^x \, dx" />
                      </div>

                      <p>
                        {language === "es" ? "Ahora necesitamos evaluar " : "Now we need to evaluate "}
                        <MathDisplay math="\int x e^x \, dx" display={false} />
                        {language === "es"
                          ? " usando integración por partes nuevamente:"
                          : " using integration by parts again:"}
                      </p>

                      <p>{language === "es" ? "Segunda aplicación:" : "Second application:"}</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="u = x \quad \Rightarrow \quad du = dx" />
                        </div>
                        <div>
                          <MathDisplay math="dv = e^x \, dx \quad \Rightarrow \quad v = e^x" />
                        </div>
                      </div>

                      <div className="my-2">
                        <MathDisplay math="\int x e^x \, dx = x e^x - \int e^x \, dx" />
                      </div>
                      <div className="my-2">
                        <MathDisplay math="= x e^x - e^x + C_1" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Ahora sustituimos este resultado en nuestra primera ecuación:"
                          : "Now we substitute this result back into our first equation:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int x^2 e^x \, dx = x^2 e^x - 2(x e^x - e^x + C_1)" />
                        </div>
                        <div>
                          <MathDisplay math="= x^2 e^x - 2x e^x + 2e^x - 2C_1" />
                        </div>
                        <div>
                          <MathDisplay math="= e^x(x^2 - 2x + 2) + C" />
                        </div>
                      </div>

                      <p>
                        {language === "es" ? "Donde " : "Where "}
                        <MathDisplay math="C = -2C_1" display={false} />
                        {language === "es"
                          ? " es nuestra constante de integración."
                          : " is our constant of integration."}
                      </p>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div>
                        <MathDisplay math="\int x^2 e^x \, dx = e^x(x^2 - 2x + 2) + C" />
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </section>

          {/* Tabular Method Section */}
          <section id="tabular-method">
            <h2 className="text-2xl font-bold mb-4">{language === "es" ? "Método Tabular" : "Tabular Method"}</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? 'Para integrales que requieren múltiples aplicaciones de integración por partes, el método tabular (también conocido como el método "DI") proporciona un enfoque más organizado.'
                  : 'For integrals requiring multiple applications of integration by parts, the tabular method (also known as the "DI" method) provides a more organized approach.'}
              </p>

              <p>{language === "es" ? "Para usar el método tabular:" : "To use the tabular method:"}</p>
              <ol>
                <li>
                  {language === "es"
                    ? "Crea una tabla con dos columnas etiquetadas D (derivadas) e I (integrales)"
                    : "Create a table with two columns labeled D (derivatives) and I (integrals)"}
                </li>
                <li>
                  {language === "es"
                    ? "En la columna D, escribe la primera función (u) y sus derivadas sucesivas hasta llegar a 0"
                    : "In the D column, write the first function (u) and its successive derivatives until you reach 0"}
                </li>
                <li>
                  {language === "es"
                    ? "En la columna I, escribe la integral de la segunda función (v) y sus integrales sucesivas"
                    : "In the I column, write the integral of the second function (v) and its successive integrals"}
                </li>
                <li>
                  {language === "es"
                    ? "Multiplica las entradas diagonalmente, alternando signos (+ - + - ...)"
                    : "Multiply entries diagonally, alternating signs (+ - + - ...)"}
                </li>
                <li>
                  {language === "es"
                    ? "Suma los productos para obtener el resultado final"
                    : "Sum the products to get the final result"}
                </li>
              </ol>

              <p>
                {language === "es" ? "Ejemplo: Evaluemos " : "Example: Let's evaluate "}
                <MathDisplay math="\int x^2 e^x \, dx" display={false} />
                {language === "es" ? " usando el método tabular:" : " using the tabular method:"}
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-[50%] border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 text-left">D</th>
                      <th className="border p-2 text-left">I</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">x²</td>
                      <td className="border p-2">e^x</td>
                    </tr>
                    <tr>
                      <td className="border p-2">2x</td>
                      <td className="border p-2">e^x</td>
                    </tr>
                    <tr>
                      <td className="border p-2">2</td>
                      <td className="border p-2">e^x</td>
                    </tr>
                    <tr>
                      <td className="border p-2">0</td>
                      <td className="border p-2">e^x</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                {language === "es"
                  ? "Ahora multiplicamos diagonalmente con signos alternantes:"
                  : "Now we multiply diagonally with alternating signs:"}
              </p>
              <div className="space-y-2">
                <div>
                  <MathDisplay math="\int x^2 e^x \, dx = (x^2 \cdot e^x) - (2x \cdot e^x) + (2 \cdot e^x) + C" />
                </div>
                <div>
                  <MathDisplay math="= e^x(x^2 - 2x + 2) + C" />
                </div>
              </div>

              <p>
                {language === "es"
                  ? "Esto nos da el mismo resultado que la aplicación repetida de integración por partes, pero de una manera más sistemática y menos propensa a errores."
                  : "This gives us the same result as the repeated application of integration by parts, but in a more systematic and less error-prone way."}
              </p>
            </div>
          </section>

          {/* Practice Problems */}
          <section id="practice-problems">
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Problemas de Práctica" : "Practice Problems"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    {language === "es" ? "Evalúa " : "Evaluate "}
                    <MathDisplay math="\int x \cos(x) \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    {language === "es" ? "Mostrar Solución" : "Show Solution"}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    {language === "es" ? "Evalúa " : "Evaluate "}
                    <MathDisplay math="\int x^2 \ln(x) \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    {language === "es" ? "Mostrar Solución" : "Show Solution"}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    {language === "es" ? "Evalúa " : "Evaluate "}
                    <MathDisplay math="\int e^x \sin(x) \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    {language === "es" ? "Mostrar Solución" : "Show Solution"}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    {language === "es" ? "Evalúa " : "Evaluate "}
                    <MathDisplay math="\int x \arctan(x) \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    {language === "es" ? "Mostrar Solución" : "Show Solution"}
                  </Button>
                </CardContent>
              </Card>
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
                  <a href="#when-to-use" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Cuándo Usar Integración por Partes" : "When to Use Integration by Parts"}
                  </a>
                </li>
                <li>
                  <a href="#examples" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Ejemplos" : "Examples"}
                  </a>
                </li>
                <li>
                  <a href="#tabular-method" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Método Tabular" : "Tabular Method"}
                  </a>
                </li>
                <li>
                  <a href="#practice-problems" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Problemas de Práctica" : "Practice Problems"}
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Related Topics */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">{language === "es" ? "Métodos Relacionados" : "Related Methods"}</h3>
              <ul className="space-y-2 text-sm">
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
                <li>
                  <Link
                    href="/topics/mathematics/integral-calculus/integration-methods/universal-substitution"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Sustitución Universal" : "Universal Substitution"}
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
                <MathDisplay math="\int u \, dv = uv - \int v \, du" />
              </div>
              <p className="text-sm mt-3 text-muted-foreground">
                {language === "es"
                  ? "Recuerda elegir u y dv estratégicamente. El recurso mnemotécnico LIATE puede ayudar con esta selección."
                  : "Remember to choose u and dv strategically. The LIATE mnemonic can help with this selection."}
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
                        ? "Más práctica con soluciones paso a paso"
                        : "More practice with step-by-step solutions"}
                    </p>
                    <Link
                      href="/resources/solved-problems?topic=integration-by-parts"
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
                <h3 className="font-semibold mb-1">{language === "es" ? "Siguiente Método" : "Next Method"}</h3>
                <Link
                  href="/topics/mathematics/integral-calculus/integration-methods/integration-by-substitution"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Integración por Sustitución" : "Integration by Substitution"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende otra poderosa técnica de integración"
                    : "Learn another powerful integration technique"}
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
