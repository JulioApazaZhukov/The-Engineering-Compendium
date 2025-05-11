"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function IntegrationBySubstitutionPage() {
  const { language } = useLanguage()
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
          {language === "es" ? "Integración por Sustitución" : "Integration by Substitution"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Integración por Sustitución" : "Integration by Substitution"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Una técnica para simplificar integrales complejas mediante sustitución de variables"
              : "A technique for simplifying complex integrals using variable substitution"}
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
                ? "Introducción a la Integración por Sustitución"
                : "Introduction to Integration by Substitution"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La integración por sustitución, también conocida como sustitución-u, es una técnica utilizada para simplificar integrales sustituyendo una nueva variable por una parte del integrando. Este método se basa en la regla de la cadena de la diferenciación y es particularmente útil para integrales que contienen funciones compuestas."
                  : "Integration by substitution, also known as u-substitution, is a technique used to simplify integrals by substituting a new variable for a part of the integrand. This method is based on the chain rule of differentiation and is particularly useful for integrals containing composite functions."}
              </p>

              <p>
                {language === "es"
                  ? "La idea básica es hacer una sustitución "
                  : "The basic idea is to make a substitution "}
                <MathDisplay math="u = g(x)" display={false} />
                {language === "es"
                  ? " que transforme la integral en una forma más simple. La fórmula para la integración por sustitución es:"
                  : " that transforms the integral into a simpler form. The formula for integration by substitution is:"}
              </p>

              <div className="my-4 text-center">
                <MathDisplay math="\int f(g(x))g'(x) \, dx = \int f(u) \, du" />
              </div>

              <p>
                {language === "es" ? "Donde " : "Where "}
                <MathDisplay math="u = g(x)" display={false} />
                {language === "es" ? " y " : " and "}
                <MathDisplay math="du = g'(x) \, dx" display={false} />.
              </p>

              <p>
                {language === "es"
                  ? "Esta técnica es esencialmente la inversa de la regla de la cadena para la diferenciación:"
                  : "This technique is essentially the reverse of the chain rule for differentiation:"}
              </p>

              <div className="my-4 text-center">
                <MathDisplay math="\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)" />
              </div>
            </div>
          </section>

          {/* When to Use Section */}
          <section>
            <h2 id="when-to-use" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es"
                ? "Cuándo Usar la Integración por Sustitución"
                : "When to Use Integration by Substitution"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La integración por sustitución es particularmente útil en las siguientes situaciones:"
                  : "Integration by substitution is particularly useful in the following situations:"}
              </p>

              <ul>
                <li>
                  {language === "es"
                    ? "Cuando el integrando contiene una función compuesta, como "
                    : "When the integrand contains a composite function, such as "}
                  <MathDisplay math="\int \sin(x^2) \cdot 2x \, dx" display={false} />
                </li>
                <li>
                  {language === "es"
                    ? "Cuando el integrando tiene una función y su derivada, como "
                    : "When the integrand has a function and its derivative, like "}
                  <MathDisplay math="\int \frac{1}{x} \cdot \ln(x) \, dx" display={false} />
                </li>
                <li>
                  {language === "es"
                    ? "Cuando el integrando puede reescribirse en la forma "
                    : "When the integrand can be rewritten in the form "}
                  <MathDisplay math="f(g(x)) \cdot g'(x)" display={false} />
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "La clave para aplicar con éxito este método es reconocer qué parte del integrando debe sustituirse con una nueva variable. Busca:"
                  : "The key to successfully applying this method is recognizing which part of the integrand should be substituted with a new variable. Look for:"}
              </p>

              <ul>
                <li>
                  {language === "es"
                    ? 'Una "función interna" que aparece como parte de una función compuesta'
                    : 'An "inner function" that appears as part of a composite function'}
                </li>
                <li>
                  {language === "es"
                    ? "Una función cuya derivada (o un múltiplo de su derivada) también aparece en el integrando"
                    : "A function whose derivative (or a multiple of its derivative) also appears in the integrand"}
                </li>
              </ul>
            </div>
          </section>

          {/* Steps for Integration by Substitution */}
          <section>
            <h2 id="steps" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es"
                ? "Pasos para la Integración por Sustitución"
                : "Steps for Integration by Substitution"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>{language === "es" ? "Identifica la sustitución:" : "Identify the substitution:"}</strong>{" "}
                  {language === "es"
                    ? "Elige una parte del integrando para sustituir con una nueva variable u."
                    : "Choose a part of the integrand to substitute with a new variable u."}
                </li>
                <li>
                  <strong>{language === "es" ? "Encuentra el diferencial:" : "Find the differential:"}</strong>{" "}
                  {language === "es"
                    ? "Calcula du diferenciando u con respecto a x."
                    : "Calculate du by differentiating u with respect to x."}
                </li>
                <li>
                  <strong>{language === "es" ? "Expresa dx en términos de du:" : "Express dx in terms of du:"}</strong>{" "}
                  {language === "es"
                    ? "Resuelve dx a partir de la ecuación diferencial."
                    : "Solve for dx from the differential equation."}
                </li>
                <li>
                  <strong>{language === "es" ? "Sustituye en la integral:" : "Substitute into the integral:"}</strong>{" "}
                  {language === "es"
                    ? "Reemplaza la parte elegida con u y dx con la expresión en términos de du."
                    : "Replace the chosen part with u and dx with the expression in terms of du."}
                </li>
                <li>
                  <strong>{language === "es" ? "Evalúa la nueva integral:" : "Evaluate the new integral:"}</strong>{" "}
                  {language === "es" ? "Integra con respecto a u." : "Integrate with respect to u."}
                </li>
                <li>
                  <strong>{language === "es" ? "Sustituye de vuelta:" : "Back-substitute:"}</strong>{" "}
                  {language === "es"
                    ? "Reemplaza u con la expresión original en términos de x."
                    : "Replace u with the original expression in terms of x."}
                </li>
              </ol>
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
                    {language === "es" ? "Ejemplo 1: Sustitución Básica" : "Example 1: Basic Substitution"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \sin(x^2) \cdot 2x \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Apliquemos el método de sustitución:"
                          : "Let's apply the substitution method:"}
                      </p>

                      <p>
                        {language === "es" ? "Paso 1: Sea " : "Step 1: Let "}
                        <MathDisplay math="u = x^2" display={false} />
                      </p>

                      <p>
                        {language === "es"
                          ? "Paso 2: Encuentra du diferenciando u con respecto a x:"
                          : "Step 2: Find du by differentiating u with respect to x:"}
                      </p>

                      <div className="my-2">
                        <MathDisplay math="du = \frac{d}{dx}[x^2] \, dx = 2x \, dx" />
                      </div>

                      <p>{language === "es" ? "Paso 3: Resuelve para dx:" : "Step 3: Solve for dx:"}</p>
                      <div className="my-2">
                        <MathDisplay math="dx = \frac{du}{2x}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituye en la integral original:"
                          : "Step 4: Substitute into the original integral:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \sin(x^2) \cdot 2x \, dx = \int \sin(u) \cdot 2x \cdot \frac{du}{2x}" />
                        </div>
                        <div>
                          <MathDisplay math="= \int \sin(u) \, du" />
                        </div>
                      </div>

                      <p>
                        {language === "es" ? "Paso 5: Evalúa la nueva integral:" : "Step 5: Evaluate the new integral:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\int \sin(u) \, du = -\cos(u) + C" />
                      </div>

                      <p>
                        {language === "es" ? "Paso 6: Sustituye de vuelta u = x²:" : "Step 6: Back-substitute u = x²:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="-\cos(u) + C = -\cos(x^2) + C" />
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div>
                        <MathDisplay math="\int \sin(x^2) \cdot 2x \, dx = -\cos(x^2) + C" />
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
                    {language === "es" ? "Ejemplo 2: Función Logarítmica" : "Example 2: Logarithmic Function"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \frac{1}{x} \ln(x) \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Apliquemos el método de sustitución:"
                          : "Let's apply the substitution method:"}
                      </p>

                      <p>
                        {language === "es" ? "Paso 1: Sea " : "Step 1: Let "}
                        <MathDisplay math="u = \ln(x)" display={false} />
                      </p>

                      <p>{language === "es" ? "Paso 2: Encuentra du:" : "Step 2: Find du:"}</p>
                      <div className="my-2">
                        <MathDisplay math="du = \frac{d}{dx}[\ln(x)] \, dx = \frac{1}{x} \, dx" />
                      </div>

                      <p>{language === "es" ? "Paso 3: Resuelve para dx:" : "Step 3: Solve for dx:"}</p>
                      <div className="my-2">
                        <MathDisplay math="dx = x \, du" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituye en la integral original:"
                          : "Step 4: Substitute into the original integral:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \frac{1}{x} \ln(x) \, dx = \int \frac{1}{x} \cdot u \cdot x \, du" />
                        </div>
                        <div>
                          <MathDisplay math="= \int u \, du" />
                        </div>
                      </div>

                      <p>
                        {language === "es" ? "Paso 5: Evalúa la nueva integral:" : "Step 5: Evaluate the new integral:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\int u \, du = \frac{u^2}{2} + C" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 6: Sustituye de vuelta u = ln(x):"
                          : "Step 6: Back-substitute u = ln(x):"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\frac{u^2}{2} + C = \frac{[\ln(x)]^2}{2} + C" />
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div>
                        <MathDisplay math="\int \frac{1}{x} \ln(x) \, dx = \frac{[\ln(x)]^2}{2} + C" />
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
                    {language === "es" ? "Ejemplo 3: Función Exponencial" : "Example 3: Exponential Function"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int e^{3x} \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Apliquemos el método de sustitución:"
                          : "Let's apply the substitution method:"}
                      </p>

                      <p>
                        {language === "es" ? "Paso 1: Sea " : "Step 1: Let "}
                        <MathDisplay math="u = 3x" display={false} />
                      </p>

                      <p>{language === "es" ? "Paso 2: Encuentra du:" : "Step 2: Find du:"}</p>
                      <div className="my-2">
                        <MathDisplay math="du = \frac{d}{dx}[3x] \, dx = 3 \, dx" />
                      </div>

                      <p>{language === "es" ? "Paso 3: Resuelve para dx:" : "Step 3: Solve for dx:"}</p>
                      <div className="my-2">
                        <MathDisplay math="dx = \frac{du}{3}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituye en la integral original:"
                          : "Step 4: Substitute into the original integral:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int e^{3x} \, dx = \int e^u \cdot \frac{du}{3}" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{1}{3} \int e^u \, du" />
                        </div>
                      </div>

                      <p>
                        {language === "es" ? "Paso 5: Evalúa la nueva integral:" : "Step 5: Evaluate the new integral:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\frac{1}{3} \int e^u \, du = \frac{1}{3} e^u + C" />
                      </div>

                      <p>
                        {language === "es" ? "Paso 6: Sustituye de vuelta u = 3x:" : "Step 6: Back-substitute u = 3x:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\frac{1}{3} e^u + C = \frac{1}{3} e^{3x} + C" />
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div>
                        <MathDisplay math="\int e^{3x} \, dx = \frac{1}{3} e^{3x} + C" />
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </section>

          {/* Common Substitutions */}
          <section>
            <h2 id="common-substitutions" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Sustituciones Comunes" : "Common Substitutions"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Aquí hay algunas sustituciones comunes que son útiles en varios problemas de integración:"
                  : "Here are some common substitutions that are useful in various integration problems:"}
              </p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 text-left">
                        {language === "es" ? "Forma de la Integral" : "Integral Form"}
                      </th>
                      <th className="border p-2 text-left">
                        {language === "es" ? "Sustitución Sugerida" : "Suggested Substitution"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">
                        <MathDisplay math="\int f(ax + b) \, dx" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="u = ax + b" display={false} />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <MathDisplay math="\int f(\sqrt{x}) \, dx" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="u = \sqrt{x}" display={false} />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <MathDisplay math="\int f(e^x) \, dx" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="u = e^x" display={false} />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <MathDisplay math="\int f(\ln(x)) \, dx" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="u = \ln(x)" display={false} />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <MathDisplay math="\int f(\sin(x)) \cos(x) \, dx" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="u = \sin(x)" display={false} />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <MathDisplay math="\int f(\cos(x)) \sin(x) \, dx" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="u = \cos(x)" display={false} />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <MathDisplay math="\int f(\tan(x)) \sec^2(x) \, dx" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="u = \tan(x)" display={false} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Practice Problems
          <section>
            <h2 id="practice-problems" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Problemas de Práctica" : "Practice Problems"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    {language === "es" ? "Evalúa " : "Evaluate "}
                    <MathDisplay math="\int x \sqrt{x^2 + 1} \, dx" display={false} />
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
                    <MathDisplay math="\int \frac{e^x}{1 + e^x} \, dx" display={false} />
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
                    <MathDisplay math="\int \cos^2(x) \sin(x) \, dx" display={false} />
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
                    <MathDisplay math="\int \frac{x}{x^2 + 4} \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    {language === "es" ? "Mostrar Solución" : "Show Solution"}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section> */}
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
                    {language === "es"
                      ? "Cuándo Usar Integración por Sustitución"
                      : "When to Use Integration by Substitution"}
                  </a>
                </li>
                <li>
                  <a href="#steps" className="text-muted-foreground hover:text-primary">
                    {language === "es"
                      ? "Pasos para la Integración por Sustitución"
                      : "Steps for Integration by Substitution"}
                  </a>
                </li>
                <li>
                  <a href="#examples" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Ejemplos" : "Examples"}
                  </a>
                </li>
                <li>
                  <a href="#common-substitutions" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Sustituciones Comunes" : "Common Substitutions"}
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
                    href="/topics/mathematics/integral-calculus/integration-methods/integration-by-parts"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Integración por Partes" : "Integration by Parts"}
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
                <MathDisplay math="\int f(g(x))g'(x) \, dx = \int f(u) \, du" />
                <p className="text-sm mt-2 text-center">
                  {language === "es" ? "donde " : "where "}
                  <MathDisplay math="u = g(x)" display={false} />
                </p>
              </div>
              <p className="text-sm mt-3 text-muted-foreground">
                {language === "es"
                  ? "Esta fórmula es la base del método de sustitución y se basa en la regla de la cadena de la diferenciación."
                  : "This formula is the foundation of the substitution method and is based on the chain rule of differentiation."}
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
                      //href="/resources/solved-problems?topic=integration-by-substitution"
                      href="../../../../../under-development"
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
                <h3 className="font-semibold mb-1">{language === "es" ? "Siguiente Método" : "Next Method"}</h3>
                <Link
                  href="/topics/mathematics/integral-calculus/integration-methods/trigonometric-substitution"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Sustitución Trigonométrica" : "Trigonometric Substitution"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende cómo usar sustituciones trigonométricas para formas específicas de integrales"
                    : "Learn how to use trigonometric substitutions for specific integral forms"}
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
