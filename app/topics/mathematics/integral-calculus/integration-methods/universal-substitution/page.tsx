"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function UniversalSubstitutionPage() {
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
          {language === "es" ? "Sustitución Universal" : "Universal Substitution"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Sustitución Universal" : "Universal Substitution"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Un enfoque general para funciones racionales de seno y coseno"
              : "A general approach for rational functions of sine and cosine"}
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
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Introducción a la Sustitución Universal" : "Introduction to Universal Substitution"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La sustitución universal, también conocida como la sustitución de Weierstrass o sustitución tangente de medio ángulo, es una técnica poderosa para integrar funciones racionales de seno y coseno. Esta sustitución convierte cualquier integral que involucre funciones trigonométricas en una integral de una función racional, que puede resolverse utilizando métodos algebraicos."
                  : "Universal substitution, also known as the Weierstrass substitution or tangent half-angle substitution, is a powerful technique for integrating rational functions of sine and cosine. This substitution converts any integral involving trigonometric functions into an integral of a rational function, which can be solved using algebraic methods."}
              </p>

              <p>
                {language === "es"
                  ? "La idea principal es sustituir todas las funciones trigonométricas en términos de una nueva variable t, donde:"
                  : "The main idea is to substitute all trigonometric functions in terms of a new variable t, where:"}
              </p>

              <div className="my-4 text-center">
                <MathDisplay math="t = \tan\frac{x}{2}" />
              </div>

              <p>
                {language === "es"
                  ? "Esta sustitución conduce a las siguientes identidades fundamentales:"
                  : "This substitution leads to the following fundamental identities:"}
              </p>

              <div className="space-y-2 my-4">
                <div className="text-center">
                  <MathDisplay math="\sin x = \frac{2t}{1+t^2}" />
                </div>
                <div className="text-center">
                  <MathDisplay math="\cos x = \frac{1-t^2}{1+t^2}" />
                </div>
                <div className="text-center">
                  <MathDisplay math="\tan x = \frac{2t}{1-t^2}" />
                </div>
                <div className="text-center">
                  <MathDisplay math="dx = \frac{2}{1+t^2} \, dt" />
                </div>
              </div>

              <p>
                {language === "es"
                  ? "Usando estas identidades, podemos transformar cualquier integral que contenga funciones trigonométricas en una integral de una función racional de t, que puede resolverse mediante descomposición en fracciones parciales u otros métodos algebraicos."
                  : "Using these identities, we can transform any integral containing trigonometric functions into an integral of a rational function of t, which can be solved using partial fraction decomposition or other algebraic methods."}
              </p>
            </div>
          </section>

          {/* When to Use Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Cuándo Usar la Sustitución Universal" : "When to Use Universal Substitution"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La sustitución universal es particularmente útil en las siguientes situaciones:"
                  : "Universal substitution is particularly useful in the following situations:"}
              </p>

              <ul>
                <li>
                  {language === "es"
                    ? "Cuando el integrando es una función racional de seno y coseno, es decir, puede expresarse como:"
                    : "When the integrand is a rational function of sine and cosine, i.e., it can be expressed as:"}
                  <div className="my-2 text-center">
                    <MathDisplay math="\int R(\sin x, \cos x) \, dx" />
                  </div>
                  {language === "es"
                    ? "donde R es una función racional (cociente de polinomios)."
                    : "where R is a rational function (quotient of polynomials)."}
                </li>
                <li>
                  {language === "es"
                    ? "Cuando otros métodos de sustitución no funcionan o son demasiado complicados."
                    : "When other substitution methods don't work or are too complicated."}
                </li>
                <li>
                  {language === "es"
                    ? "Como un método general que siempre funciona para integrales trigonométricas, aunque no siempre es el más eficiente."
                    : "As a general method that always works for trigonometric integrals, although it's not always the most efficient."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "Aunque la sustitución universal es muy poderosa, a menudo conduce a cálculos algebraicos complejos. Por lo tanto, para integrales específicas, otros métodos como la sustitución trigonométrica o identidades trigonométricas pueden ser más eficientes."
                  : "While universal substitution is very powerful, it often leads to complex algebraic calculations. Therefore, for specific integrals, other methods like trigonometric substitution or trigonometric identities might be more efficient."}
              </p>
            </div>
          </section>

          {/* Steps for Universal Substitution */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Pasos para la Sustitución Universal" : "Steps for Universal Substitution"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>{language === "es" ? "Sustituir " : "Substitute "}</strong>
                  <MathDisplay math="t = \tan\frac{x}{2}" display={false} />
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Expresar seno y coseno en términos de t:"
                      : "Express sine and cosine in terms of t:"}
                  </strong>
                  <div className="space-y-1 my-2">
                    <div>
                      <MathDisplay math="\sin x = \frac{2t}{1+t^2}" />
                    </div>
                    <div>
                      <MathDisplay math="\cos x = \frac{1-t^2}{1+t^2}" />
                    </div>
                  </div>
                </li>
                <li>
                  <strong>{language === "es" ? "Expresar dx en términos de dt:" : "Express dx in terms of dt:"}</strong>
                  <div className="my-2">
                    <MathDisplay math="dx = \frac{2}{1+t^2} \, dt" />
                  </div>
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Sustituir en la integral original para obtener una integral racional en t:"
                      : "Substitute into the original integral to get a rational integral in t:"}
                  </strong>
                  <div className="my-2">
                    <MathDisplay math="\int R(\sin x, \cos x) \, dx = \int R\left(\frac{2t}{1+t^2}, \frac{1-t^2}{1+t^2}\right) \cdot \frac{2}{1+t^2} \, dt" />
                  </div>
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Resolver la integral racional resultante usando métodos algebraicos (como descomposición en fracciones parciales)."
                      : "Solve the resulting rational integral using algebraic methods (like partial fraction decomposition)."}
                  </strong>
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Sustituir de vuelta para expresar la respuesta en términos de x, si es necesario."
                      : "Back-substitute to express the answer in terms of x, if needed."}
                  </strong>
                </li>
              </ol>
            </div>
          </section>

          {/* Examples Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">{language === "es" ? "Ejemplos" : "Examples"}</h2>

            <div className="space-y-4">
              {/* Example 1 */}
              <Card className="overflow-hidden">
                <div
                  className="p-4 bg-muted cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExample(1)}
                >
                  <h3 className="font-medium">
                    {language === "es" ? "Ejemplo 1: Integral de sec(x)" : "Example 1: Integral of sec(x)"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \sec x \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Apliquemos la sustitución universal:"
                          : "Let's apply the universal substitution:"}
                      </p>

                      <p>
                        {language === "es" ? "Paso 1: Hacemos la sustitución " : "Step 1: Make the substitution "}
                        <MathDisplay math="t = \tan\frac{x}{2}" display={false} />
                      </p>

                      <p>
                        {language === "es"
                          ? "Paso 2: Expresamos sec(x) en términos de t:"
                          : "Step 2: Express sec(x) in terms of t:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\sec x = \frac{1}{\cos x} = \frac{1}{\frac{1-t^2}{1+t^2}} = \frac{1+t^2}{1-t^2}" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 3: Expresamos dx en términos de dt:"
                          : "Step 3: Express dx in terms of dt:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="dx = \frac{2}{1+t^2} \, dt" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituimos en la integral original:"
                          : "Step 4: Substitute into the original integral:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \sec x \, dx = \int \frac{1+t^2}{1-t^2} \cdot \frac{2}{1+t^2} \, dt" />
                        </div>
                        <div>
                          <MathDisplay math="= \int \frac{2}{1-t^2} \, dt" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 5: Resolvemos la integral racional resultante usando descomposición en fracciones parciales:"
                          : "Step 5: Solve the resulting rational integral using partial fraction decomposition:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{2}{1-t^2} = \frac{2}{(1-t)(1+t)} = \frac{A}{1-t} + \frac{B}{1+t}" />
                        </div>
                        <div>
                          <MathDisplay math="2 = A(1+t) + B(1-t)" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Sustituyendo t = 1 y t = -1, obtenemos A = 1 y B = 1. Por lo tanto:"
                          : "Substituting t = 1 and t = -1, we get A = 1 and B = 1. Therefore:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \frac{2}{1-t^2} \, dt = \int \left(\frac{1}{1-t} + \frac{1}{1+t}\right) \, dt" />
                        </div>
                        <div>
                          <MathDisplay math="= -\ln|1-t| + \ln|1+t| + C" />
                        </div>
                        <div>
                          <MathDisplay math="= \ln\left|\frac{1+t}{1-t}\right| + C" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 6: Sustituimos de vuelta t = tan(x/2):"
                          : "Step 6: Back-substitute t = tan(x/2):"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\int \sec x \, dx = \ln\left|\frac{1+\tan\frac{x}{2}}{1-\tan\frac{x}{2}}\right| + C" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Podemos simplificar esto usando identidades trigonométricas. Recordando que:"
                          : "We can simplify this using trigonometric identities. Recalling that:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\frac{1+\tan\frac{x}{2}}{1-\tan\frac{x}{2}} = \frac{\cos\frac{x}{2} + \sin\frac{x}{2}}{\cos\frac{x}{2} - \sin\frac{x}{2}} = \tan\left(\frac{\pi}{4} + \frac{x}{2}\right)" />
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div className="my-2">
                        <MathDisplay math="\int \sec x \, dx = \ln\left|\tan\left(\frac{\pi}{4} + \frac{x}{2}\right)\right| + C" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Esta es una de las formas estándar de la integral de la secante."
                          : "This is one of the standard forms of the integral of secant."}
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
                      ? "Ejemplo 2: Integral Racional de Seno y Coseno"
                      : "Example 2: Rational Integral of Sine and Cosine"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \frac{1}{1 + \sin x} \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Apliquemos la sustitución universal:"
                          : "Let's apply the universal substitution:"}
                      </p>

                      <p>
                        {language === "es" ? "Paso 1: Hacemos la sustitución " : "Step 1: Make the substitution "}
                        <MathDisplay math="t = \tan\frac{x}{2}" display={false} />
                      </p>

                      <p>
                        {language === "es"
                          ? "Paso 2: Expresamos sin(x) en términos de t:"
                          : "Step 2: Express sin(x) in terms of t:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\sin x = \frac{2t}{1+t^2}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 3: Expresamos dx en términos de dt:"
                          : "Step 3: Express dx in terms of dt:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="dx = \frac{2}{1+t^2} \, dt" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituimos en la integral original:"
                          : "Step 4: Substitute into the original integral:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \frac{1}{1 + \sin x} \, dx = \int \frac{1}{1 + \frac{2t}{1+t^2}} \cdot \frac{2}{1+t^2} \, dt" />
                        </div>
                        <div>
                          <MathDisplay math="= \int \frac{2}{1+t^2 + 2t} \, dt" />
                        </div>
                        <div>
                          <MathDisplay math="= \int \frac{2}{(1+t)^2} \, dt" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 5: Resolvemos la integral resultante:"
                          : "Step 5: Solve the resulting integral:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \frac{2}{(1+t)^2} \, dt = -\frac{2}{1+t} + C" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 6: Sustituimos de vuelta t = tan(x/2):"
                          : "Step 6: Back-substitute t = tan(x/2):"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="-\frac{2}{1+t} + C = -\frac{2}{1+\tan\frac{x}{2}} + C" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Podemos simplificar esto usando identidades trigonométricas:"
                          : "We can simplify this using trigonometric identities:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{1}{1+\tan\frac{x}{2}} = \frac{\cos\frac{x}{2}}{\cos\frac{x}{2} + \sin\frac{x}{2}}" />
                        </div>
                      </div>

                      <p>{language === "es" ? "Recordando que:" : "Recalling that:"}</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\cos\frac{x}{2} + \sin\frac{x}{2} = \sqrt{2}\sin\left(\frac{x}{2} + \frac{\pi}{4}\right)" />
                        </div>
                        <div>
                          <MathDisplay math="\cos\frac{x}{2} = \cos\frac{x}{2}" />
                        </div>
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div className="my-2">
                        <MathDisplay math="\int \frac{1}{1 + \sin x} \, dx = -\frac{2\cos\frac{x}{2}}{\cos\frac{x}{2} + \sin\frac{x}{2}} + C" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Esta es la forma final de nuestra integral."
                          : "This is the final form of our integral."}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </section>

          {/* Advantages and Limitations */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Ventajas y Limitaciones" : "Advantages and Limitations"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <h3 className="text-xl font-semibold mb-2">{language === "es" ? "Ventajas" : "Advantages"}</h3>
              <ul>
                <li>
                  {language === "es"
                    ? "Método universal que funciona para cualquier función racional de seno y coseno."
                    : "Universal method that works for any rational function of sine and cosine."}
                </li>
                <li>
                  {language === "es"
                    ? "Convierte integrales trigonométricas en integrales racionales, que tienen métodos sistemáticos de solución."
                    : "Converts trigonometric integrals into rational integrals, which have systematic methods of solution."}
                </li>
                <li>
                  {language === "es"
                    ? "Especialmente útil para integrales complejas donde otros métodos fallan."
                    : "Especially useful for complex integrals where other methods fail."}
                </li>
              </ul>

              <h3 className="text-xl font-semibold mb-2 mt-4">{language === "es" ? "Limitaciones" : "Limitations"}</h3>
              <ul>
                <li>
                  {language === "es"
                    ? "A menudo conduce a cálculos algebraicos complicados."
                    : "Often leads to complicated algebraic calculations."}
                </li>
                <li>
                  {language === "es"
                    ? "Para integrales simples, otros métodos pueden ser más eficientes."
                    : "For simple integrals, other methods may be more efficient."}
                </li>
                <li>
                  {language === "es"
                    ? "La sustitución de vuelta a la variable original puede ser complicada."
                    : "Back-substitution to the original variable can be complicated."}
                </li>
                <li>
                  {language === "es"
                    ? "No es tan intuitivo como otros métodos de integración."
                    : "Not as intuitive as other integration methods."}
                </li>
              </ul>
            </div>
          </section>

          {/* Practice Problems */}
          <section>
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Problemas de Práctica" : "Practice Problems"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    {language === "es" ? "Evalúa " : "Evaluate "}
                    <MathDisplay math="\int \frac{1}{1 + \cos x} \, dx" display={false} />
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
                    <MathDisplay math="\int \frac{\sin x}{2 + \cos x} \, dx" display={false} />
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
                    <MathDisplay math="\int \frac{1}{\sin x + \cos x} \, dx" display={false} />
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
                    <MathDisplay math="\int \tan^2 x \, dx" display={false} />
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
                  <a href="#" className="text-primary hover:underline">
                    {language === "es" ? "Introducción" : "Introduction"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Cuándo Usar la Sustitución Universal" : "When to Use Universal Substitution"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Pasos para la Sustitución Universal" : "Steps for Universal Substitution"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Ejemplos" : "Examples"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Ventajas y Limitaciones" : "Advantages and Limitations"}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
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
              <h3 className="font-semibold mb-3">{language === "es" ? "Fórmulas Clave" : "Key Formulas"}</h3>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-sm space-y-2">
                <div>
                  <MathDisplay math="t = \tan\frac{x}{2}" />
                </div>
                <div>
                  <MathDisplay math="\sin x = \frac{2t}{1+t^2}" />
                </div>
                <div>
                  <MathDisplay math="\cos x = \frac{1-t^2}{1+t^2}" />
                </div>
                <div>
                  <MathDisplay math="dx = \frac{2}{1+t^2} \, dt" />
                </div>
              </div>
              <p className="text-sm mt-3 text-muted-foreground">
                {language === "es"
                  ? "Estas fórmulas son la base de la sustitución universal y permiten transformar cualquier integral trigonométrica en una integral racional."
                  : "These formulas are the foundation of universal substitution and allow transforming any trigonometric integral into a rational integral."}
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
                      href="/resources/solved-problems?topic=universal-substitution"
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
                <h3 className="font-semibold mb-1">{language === "es" ? "Explorar Fórmulas" : "Explore Formulas"}</h3>
                <Link
                  href="/topics/mathematics/integral-calculus/basic-formulas"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Fórmulas Básicas de Integración" : "Basic Integration Formulas"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende las fórmulas fundamentales de integración"
                    : "Learn the fundamental integration formulas"}
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
