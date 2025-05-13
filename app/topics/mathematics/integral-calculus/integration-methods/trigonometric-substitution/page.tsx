"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function TrigonometricSubstitutionPage() {
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
          {language === "es" ? "Sustitución Trigonométrica" : "Trigonometric Substitution"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Sustitución Trigonométrica" : "Trigonometric Substitution"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Una técnica especializada para integrales que involucran ciertas expresiones radicales"
              : "A specialized technique for integrals involving certain radical expressions"}
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
                ? "Introducción a la Sustitución Trigonométrica"
                : "Introduction to Trigonometric Substitution"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La sustitución trigonométrica es una técnica especializada de integración utilizada para evaluar integrales que contienen ciertas expresiones radicales. Este método implica sustituir una función trigonométrica por una variable para simplificar el integrando, particularmente cuando se trata de expresiones de la forma "
                  : "Trigonometric substitution is a specialized integration technique used to evaluate integrals containing certain radical expressions. This method involves substituting a trigonometric function for a variable to simplify the integrand, particularly when dealing with expressions of the form "}
                <MathDisplay math="\sqrt{a^2 - x^2}" display={false} />,{" "}
                <MathDisplay math="\sqrt{a^2 + x^2}" display={false} />,{language === "es" ? " o " : " or "}
                <MathDisplay math="\sqrt{x^2 - a^2}" display={false} />.
              </p>

              <p>
                {language === "es"
                  ? "El poder de esta técnica proviene de las identidades trigonométricas fundamentales, que nos permiten convertir expresiones radicales complejas en expresiones trigonométricas más simples."
                  : "The power of this technique comes from the fundamental trigonometric identities, which allow us to convert complex radical expressions into simpler trigonometric expressions."}
              </p>
            </div>
          </section>

          {/* Key Substitutions Section */}
          <section>
            <h2 id="key-substitutions" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Sustituciones Trigonométricas Clave" : "Key Trigonometric Substitutions"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Hay tres sustituciones trigonométricas principales, cada una diseñada para una forma específica de radical:"
                  : "There are three main trigonometric substitutions, each designed for a specific form of radical:"}
              </p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 text-left">{language === "es" ? "Forma Radical" : "Radical Form"}</th>
                      <th className="border p-2 text-left">{language === "es" ? "Sustitución" : "Substitution"}</th>
                      <th className="border p-2 text-left">
                        {language === "es" ? "Identidad Utilizada" : "Identity Used"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">
                        <MathDisplay math="\sqrt{a^2 - x^2}" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="x = a\sin\theta" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="\sqrt{a^2 - a^2\sin^2\theta} = a\cos\theta" display={false} />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <MathDisplay math="\sqrt{a^2 + x^2}" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="x = a\tan\theta" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="\sqrt{a^2 + a^2\tan^2\theta} = a\sec\theta" display={false} />
                      </td>
                    </tr>
                    <tr>
                      <td className="border p-2">
                        <MathDisplay math="\sqrt{x^2 - a^2}" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="x = a\sec\theta" display={false} />
                      </td>
                      <td className="border p-2">
                        <MathDisplay math="\sqrt{a^2\sec^2\theta - a^2} = a\tan\theta" display={false} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <p>
                {language === "es"
                  ? "Al usar estas sustituciones, también necesitamos expresar dx en términos de dθ:"
                  : "When using these substitutions, we also need to express dx in terms of dθ:"}
              </p>

              <ul>
                <li>
                  {language === "es" ? "Para " : "For "}
                  <MathDisplay math="x = a\sin\theta" display={false} />:{" "}
                  <MathDisplay math="dx = a\cos\theta \, d\theta" display={false} />
                </li>
                <li>
                  {language === "es" ? "Para " : "For "}
                  <MathDisplay math="x = a\tan\theta" display={false} />:{" "}
                  <MathDisplay math="dx = a\sec^2\theta \, d\theta" display={false} />
                </li>
                <li>
                  {language === "es" ? "Para " : "For "}
                  <MathDisplay math="x = a\sec\theta" display={false} />:{" "}
                  <MathDisplay math="dx = a\sec\theta\tan\theta \, d\theta" display={false} />
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "Después de hacer la sustitución y evaluar la integral en términos de θ, necesitamos convertir de nuevo a la variable original x. Esto a menudo implica usar relaciones de triángulo rectángulo o funciones trigonométricas inversas."
                  : "After making the substitution and evaluating the integral in terms of θ, we need to convert back to the original variable x. This often involves using right triangle relationships or inverse trigonometric functions."}
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
                    {language === "es" ? "Ejemplo 1: Integral con √(a² - x²)" : "Example 1: Integral with √(a² - x²)"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \frac{x^2}{\sqrt{4 - x^2}} \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es" ? "Esta integral contiene " : "This integral contains "}
                        <MathDisplay math="\sqrt{4 - x^2}" display={false} />
                        {language === "es" ? ", que coincide con la forma " : ", which matches the form "}
                        <MathDisplay math="\sqrt{a^2 - x^2}" display={false} />
                        {language === "es" ? " con a = 2." : " with a = 2."}
                      </p>

                      <p>
                        {language === "es" ? "Paso 1: Usamos la sustitución " : "Step 1: Use the substitution "}
                        <MathDisplay math="x = 2\sin\theta" display={false} />
                      </p>

                      <p>{language === "es" ? "Paso 2: Encontramos dx:" : "Step 2: Find dx:"}</p>
                      <div className="my-2">
                        <MathDisplay math="dx = 2\cos\theta \, d\theta" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 3: Expresamos el radical en términos de θ:"
                          : "Step 3: Express the radical in terms of θ:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\sqrt{4 - x^2} = \sqrt{4 - 4\sin^2\theta} = \sqrt{4(1 - \sin^2\theta)} = \sqrt{4\cos^2\theta} = 2\cos\theta" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituimos en la integral original:"
                          : "Step 4: Substitute into the original integral:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \frac{x^2}{\sqrt{4 - x^2}} \, dx = \int \frac{(2\sin\theta)^2}{2\cos\theta} \cdot 2\cos\theta \, d\theta" />
                        </div>
                        <div>
                          <MathDisplay math="= \int 4\sin^2\theta \, d\theta" />
                        </div>
                        <div>
                          <MathDisplay math="= 4\int \sin^2\theta \, d\theta" />
                        </div>
                      </div>

                      <p>
                        {language === "es" ? "Paso 5: Usamos la identidad " : "Step 5: Use the identity "}
                        <MathDisplay math="\sin^2\theta = \frac{1 - \cos(2\theta)}{2}" display={false} />:
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="4\int \sin^2\theta \, d\theta = 4\int \frac{1 - \cos(2\theta)}{2} \, d\theta" />
                        </div>
                        <div>
                          <MathDisplay math="= 2\int (1 - \cos(2\theta)) \, d\theta" />
                        </div>
                        <div>
                          <MathDisplay math="= 2\theta - \sin(2\theta) + C" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 6: Convertimos de nuevo a la variable original x:"
                          : "Step 6: Convert back to the original variable x:"}
                      </p>
                      <p>
                        {language === "es" ? "Como " : "Since "}
                        <MathDisplay math="x = 2\sin\theta" display={false} />
                        {language === "es" ? ", tenemos " : ", we have "}
                        <MathDisplay math="\sin\theta = \frac{x}{2}" display={false} />
                      </p>
                      <p>
                        {language === "es" ? "También, " : "Also, "}
                        <MathDisplay math="\theta = \arcsin\left(\frac{x}{2}\right)" display={false} />
                      </p>

                      <p>
                        {language === "es" ? "Para el término " : "For the term "}
                        <MathDisplay math="\sin(2\theta)" display={false} />
                        {language === "es"
                          ? ", podemos usar la fórmula del ángulo doble:"
                          : ", we can use the double angle formula:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\sin(2\theta) = 2\sin\theta\cos\theta = 2 \cdot \frac{x}{2} \cdot \frac{\sqrt{4-x^2}}{2} = \frac{x\sqrt{4-x^2}}{2}" />
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div className="my-2">
                        <MathDisplay math="2\theta - \sin(2\theta) + C = 2\arcsin\left(\frac{x}{2}\right) - \frac{x\sqrt{4-x^2}}{2} + C" />
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
                    {language === "es" ? "Ejemplo 2: Integral con √(a² + x²)" : "Example 2: Integral with √(a² + x²)"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \frac{1}{(1+x^2)^{3/2}} \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es" ? "Esta integral contiene " : "This integral contains "}
                        <MathDisplay math="(1+x^2)^{3/2}" display={false} />
                        {language === "es" ? ", que involucra " : ", which involves "}
                        <MathDisplay math="\sqrt{1 + x^2}" display={false} />
                        {language === "es" ? ". Esto coincide con la forma " : ". This matches the form "}
                        <MathDisplay math="\sqrt{a^2 + x^2}" display={false} />
                        {language === "es" ? " con a = 1." : " with a = 1."}
                      </p>

                      <p>
                        {language === "es" ? "Paso 1: Usamos la sustitución " : "Step 1: Use the substitution "}
                        <MathDisplay math="x = \tan\theta" display={false} />
                      </p>

                      <p>{language === "es" ? "Paso 2: Encontramos dx:" : "Step 2: Find dx:"}</p>
                      <div className="my-2">
                        <MathDisplay math="dx = \sec^2\theta \, d\theta" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 3: Expresamos el denominador en términos de θ:"
                          : "Step 3: Express the denominator in terms of θ:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="(1+x^2)^{3/2} = (1+\tan^2\theta)^{3/2} = (\sec^2\theta)^{3/2} = \sec^3\theta" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituimos en la integral original:"
                          : "Step 4: Substitute into the original integral:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \frac{1}{(1+x^2)^{3/2}} \, dx = \int \frac{1}{\sec^3\theta} \cdot \sec^2\theta \, d\theta" />
                        </div>
                        <div>
                          <MathDisplay math="= \int \frac{\sec^2\theta}{\sec^3\theta} \, d\theta" />
                        </div>
                        <div>
                          <MathDisplay math="= \int \frac{1}{\sec\theta} \, d\theta" />
                        </div>
                        <div>
                          <MathDisplay math="= \int \cos\theta \, d\theta" />
                        </div>
                        <div>
                          <MathDisplay math="= \sin\theta + C" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 5: Convertimos de nuevo a la variable original x:"
                          : "Step 5: Convert back to the original variable x:"}
                      </p>
                      <p>
                        {language === "es" ? "Como " : "Since "}
                        <MathDisplay math="x = \tan\theta" display={false} />
                        {language === "es" ? ", tenemos " : ", we have "}
                        <MathDisplay math="\tan\theta = x" display={false} />
                      </p>
                      <p>
                        {language === "es"
                          ? "En un triángulo rectángulo con ángulo θ, si el lado opuesto es x y el lado adyacente es 1, entonces:"
                          : "In a right triangle with angle θ, if the opposite side is x and the adjacent side is 1, then:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\sin\theta = \frac{x}{\sqrt{1+x^2}}" />
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div className="my-2">
                        <MathDisplay math="\sin\theta + C = \frac{x}{\sqrt{1+x^2}} + C" />
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
                    {language === "es" ? "Ejemplo 3: Integral con √(x² - a²)" : "Example 3: Integral with √(x² - a²)"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \frac{x^2}{\sqrt{x^2 - 9}} \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es" ? "Esta integral contiene " : "This integral contains "}
                        <MathDisplay math="\sqrt{x^2 - 9}" display={false} />
                        {language === "es" ? ", que coincide con la forma " : ", which matches the form "}
                        <MathDisplay math="\sqrt{x^2 - a^2}" display={false} />
                        {language === "es" ? " con a = 3." : " with a = 3."}
                      </p>

                      <p>
                        {language === "es" ? "Paso 1: Usamos la sustitución " : "Step 1: Use the substitution "}
                        <MathDisplay math="x = 3\sec\theta" display={false} />
                      </p>

                      <p>{language === "es" ? "Paso 2: Encontramos dx:" : "Step 2: Find dx:"}</p>
                      <div className="my-2">
                        <MathDisplay math="dx = 3\sec\theta\tan\theta \, d\theta" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 3: Expresamos el radical en términos de θ:"
                          : "Step 3: Express the radical in terms of θ:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\sqrt{x^2 - 9} = \sqrt{9\sec^2\theta - 9} = \sqrt{9(\sec^2\theta - 1)} = \sqrt{9\tan^2\theta} = 3\tan\theta" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituimos en la integral original:"
                          : "Step 4: Substitute into the original integral:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \frac{x^2}{\sqrt{x^2 - 9}} \, dx = \int \frac{(3\sec\theta)^2}{3\tan\theta} \cdot 3\sec\theta\tan\theta \, d\theta" />
                        </div>
                        <div>
                          <MathDisplay math="= \int \frac{9\sec^2\theta \cdot 3\sec\theta\tan\theta}{3\tan\theta} \, d\theta" />
                        </div>
                        <div>
                          <MathDisplay math="= \int 9\sec^3\theta \, d\theta" />
                        </div>
                      </div>

                      <p>
                        {language === "es" ? "Paso 5: Evaluamos la integral de " : "Step 5: Evaluate the integral of "}
                        <MathDisplay math="\sec^3\theta" display={false} />:
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \sec^3\theta \, d\theta = \int \sec\theta \cdot \sec^2\theta \, d\theta" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Esta es una integral estándar que se puede evaluar usando integración por partes o una fórmula de reducción. El resultado es:"
                          : "This is a standard integral that can be evaluated using integration by parts or a reduction formula. The result is:"}
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\int \sec^3\theta \, d\theta = \frac{1}{2}\sec\theta\tan\theta + \frac{1}{2}\ln|\sec\theta + \tan\theta| + C" />
                      </div>

                      <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                      <div className="my-2">
                        <MathDisplay math="9\int \sec^3\theta \, d\theta = \frac{9}{2}\sec\theta\tan\theta + \frac{9}{2}\ln|\sec\theta + \tan\theta| + C" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 6: Convertimos de nuevo a la variable original x:"
                          : "Step 6: Convert back to the original variable x:"}
                      </p>
                      <p>
                        {language === "es" ? "Como " : "Since "}
                        <MathDisplay math="x = 3\sec\theta" display={false} />
                        {language === "es" ? ", tenemos " : ", we have "}
                        <MathDisplay math="\sec\theta = \frac{x}{3}" display={false} />
                      </p>
                      <p>
                        {language === "es" ? "También, " : "Also, "}
                        <MathDisplay math="\tan\theta = \frac{\sqrt{x^2 - 9}}{3}" display={false} />
                      </p>

                      <p>{language === "es" ? "Sustituyendo estas expresiones:" : "Substituting these expressions:"}</p>
                      <div className="my-2">
                        <MathDisplay math="\frac{9}{2}\sec\theta\tan\theta + \frac{9}{2}\ln|\sec\theta + \tan\theta| + C = \frac{9}{2} \cdot \frac{x}{3} \cdot \frac{\sqrt{x^2 - 9}}{3} + \frac{9}{2}\ln\left|\frac{x}{3} + \frac{\sqrt{x^2 - 9}}{3}\right| + C" />
                      </div>
                      <div className="my-2">
                        <MathDisplay math="= \frac{3x\sqrt{x^2 - 9}}{6} + \frac{9}{2}\ln\left|\frac{x + \sqrt{x^2 - 9}}{3}\right| + C" />
                      </div>
                      <div className="my-2">
                        <MathDisplay math="= \frac{x\sqrt{x^2 - 9}}{2} + \frac{9}{2}\ln\left|\frac{x + \sqrt{x^2 - 9}}{3}\right| + C" />
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </section>

          {/* Tips and Tricks Section */}
          <section>
            <h2 id="tips" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es"
                ? "Consejos para la Sustitución Trigonométrica"
                : "Tips for Trigonometric Substitution"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>
                    {language === "es"
                      ? "Identifica la sustitución apropiada:"
                      : "Identify the appropriate substitution:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Observa la forma del radical para determinar qué sustitución trigonométrica usar."
                    : "Look at the form of the radical to determine which trigonometric substitution to use."}
                </li>
                <li>
                  <strong>
                    {language === "es" ? "Dibuja un triángulo de referencia:" : "Draw a reference triangle:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Al convertir de nuevo a la variable original, dibujar un triángulo rectángulo puede ser muy útil."
                    : "When converting back to the original variable, drawing a right triangle can be very helpful."}
                </li>
                <li>
                  <strong>
                    {language === "es" ? "Usa identidades trigonométricas:" : "Use trigonometric identities:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Familiarízate con identidades comunes como "
                    : "Familiarize yourself with common identities like "}
                  <MathDisplay math="\sin^2\theta + \cos^2\theta = 1" display={false} />
                  {language === "es" ? " y " : " and "}
                  <MathDisplay math="\sec^2\theta - \tan^2\theta = 1" display={false} />.
                </li>
                <li>
                  <strong>
                    {language === "es" ? "Verifica restricciones de dominio:" : "Check domain restrictions:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Ten en cuenta las restricciones de dominio al hacer sustituciones y convertir de nuevo."
                    : "Be aware of domain restrictions when making substitutions and converting back."}
                </li>
                <li>
                  <strong>
                    {language === "es" ? "Simplifica antes de sustituir:" : "Simplify before substituting:"}
                  </strong>{" "}
                  {language === "es"
                    ? "A veces es beneficioso simplificar el integrando antes de aplicar la sustitución."
                    : "Sometimes it's beneficial to simplify the integrand before applying the substitution."}
                </li>
              </ol>
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
                    <MathDisplay math="\int \frac{x^2}{\sqrt{25 - x^2}} \, dx" display={false} />
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
                    <MathDisplay math="\int \frac{1}{x^2\sqrt{x^2 - 4}} \, dx" display={false} />
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
                    <MathDisplay math="\int \sqrt{4 + 9x^2} \, dx" display={false} />
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
                    <MathDisplay math="\int \frac{x^2}{\sqrt{x^2 + 16}} \, dx" display={false} />
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
                  <a href="#key-substitutions" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Sustituciones Trigonométricas Clave" : "Key Trigonometric Substitutions"}
                  </a>
                </li>
                <li>
                  <a href="#examples" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Ejemplos" : "Examples"}
                  </a>
                </li>
                <li>
                  <a href="#tips" className="text-muted-foreground hover:text-primary">
                    {language === "es"
                      ? "Consejos para la Sustitución Trigonométrica"
                      : "Tips for Trigonometric Substitution"}
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
                    href="/topics/mathematics/integral-calculus/integration-methods/integration-by-substitution"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Integración por Sustitución" : "Integration by Substitution"}
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
              <h3 className="font-semibold mb-3">{language === "es" ? "Sustituciones Clave" : "Key Substitutions"}</h3>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-sm space-y-2">
                <div>
                  <MathDisplay math="\sqrt{a^2 - x^2}: x = a\sin\theta" />
                </div>
                <div>
                  <MathDisplay math="\sqrt{a^2 + x^2}: x = a\tan\theta" />
                </div>
                <div>
                  <MathDisplay math="\sqrt{x^2 - a^2}: x = a\sec\theta" />
                </div>
              </div>
              <p className="text-sm mt-3 text-muted-foreground">
                {language === "es"
                  ? "Recuerda dibujar un triángulo de referencia al convertir de nuevo a la variable original."
                  : "Remember to draw a reference triangle when converting back to the original variable."}
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
                      //href="/resources/solved-problems?topic=trigonometric-substitution"
                      href="/under-development"
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
                  href="/topics/mathematics/integral-calculus/integration-methods/universal-substitution"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Sustitución Universal" : "Universal Substitution"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende sobre la sustitución de Weierstrass para funciones racionales de seno y coseno"
                    : "Learn about the Weierstrass substitution for rational functions of sine and cosine"}
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
