"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function TrigonometricIntegralsPage() {
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
          {language === "es" ? "Integrales Trigonométricas" : "Trigonometric Integrals"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Integrales Trigonométricas" : "Trigonometric Integrals"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Técnicas para integrar funciones trigonométricas"
              : "Techniques for integrating trigonometric functions"}
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
              {language === "es"
                ? "Introducción a las Integrales Trigonométricas"
                : "Introduction to Trigonometric Integrals"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Las integrales trigonométricas involucran la integración de funciones que contienen funciones trigonométricas como seno, coseno, tangente, cotangente, secante y cosecante. Estas integrales a menudo requieren técnicas específicas e identidades para resolverse."
                  : "Trigonometric integrals involve integrating functions that contain trigonometric functions such as sine, cosine, tangent, cotangent, secant, and cosecant. These integrals often require specific techniques and identities to solve."}
              </p>
              <p>
                {language === "es"
                  ? "Dominar las integrales trigonométricas es esencial para resolver una amplia variedad de problemas en física, ingeniería y matemáticas aplicadas, especialmente aquellos que involucran movimiento periódico, ondas y oscilaciones."
                  : "Mastering trigonometric integrals is essential for solving a wide variety of problems in physics, engineering, and applied mathematics, especially those involving periodic motion, waves, and oscillations."}
              </p>
            </div>
          </section>

          {/* Basic Integrals Section */}
          <section id="basic-integrals">
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Integrales Trigonométricas Básicas" : "Basic Trigonometric Integrals"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Aquí hay algunas integrales trigonométricas básicas que debes memorizar:"
                  : "Here are some basic trigonometric integrals that you should memorize:"}
              </p>
              <div className="space-y-2 my-4">
                <div>
                  <MathDisplay math="\int \sin(x) \, dx = -\cos(x) + C" />
                </div>
                <div>
                  <MathDisplay math="\int \cos(x) \, dx = \sin(x) + C" />
                </div>
                <div>
                  <MathDisplay math="\int \tan(x) \, dx = -\ln|\cos(x)| + C = \ln|\sec(x)| + C" />
                </div>
                <div>
                  <MathDisplay math="\int \cot(x) \, dx = \ln|\sin(x)| + C" />
                </div>
                <div>
                  <MathDisplay math="\int \sec(x) \, dx = \ln|\sec(x) + \tan(x)| + C" />
                </div>
                <div>
                  <MathDisplay math="\int \csc(x) \, dx = \ln|\csc(x) - \cot(x)| + C" />
                </div>
                <div>
                  <MathDisplay math="\int \sec^2(x) \, dx = \tan(x) + C" />
                </div>
                <div>
                  <MathDisplay math="\int \csc^2(x) \, dx = -\cot(x) + C" />
                </div>
                <div>
                  <MathDisplay math="\int \sec(x)\tan(x) \, dx = \sec(x) + C" />
                </div>
                <div>
                  <MathDisplay math="\int \csc(x)\cot(x) \, dx = -\csc(x) + C" />
                </div>
              </div>
              <p>
                {language === "es"
                  ? "Estas fórmulas básicas son los bloques de construcción para resolver integrales trigonométricas más complejas."
                  : "These basic formulas are the building blocks for solving more complex trigonometric integrals."}
              </p>
            </div>
          </section>

          {/* Integration Techniques Section */}
          <section id="integration-techniques">
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Técnicas de Integración" : "Integration Techniques"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Varias técnicas son útiles para resolver integrales trigonométricas:"
                  : "Several techniques are useful for solving trigonometric integrals:"}
              </p>
              <ul>
                <li>
                  <strong>{language === "es" ? "Sustitución:" : "Substitution:"}</strong>{" "}
                  {language === "es"
                    ? "Usa la sustitución cuando puedes identificar una función y su derivada dentro de la integral."
                    : "Use substitution when you can identify a function and its derivative within the integral."}
                </li>
                <li>
                  <strong>{language === "es" ? "Integración por Partes:" : "Integration by Parts:"}</strong>{" "}
                  {language === "es"
                    ? "Útil para integrales de la forma ∫ u dv."
                    : "Useful for integrals of the form ∫ u dv."}
                </li>
                <li>
                  <strong>{language === "es" ? "Identidades Trigonométricas:" : "Trigonometric Identities:"}</strong>{" "}
                  {language === "es"
                    ? "Emplea identidades trigonométricas para simplificar el integrando."
                    : "Employ trigonometric identities to simplify the integrand."}
                </li>
                <li>
                  <strong>{language === "es" ? "Fórmulas de Reducción:" : "Reduction Formulas:"}</strong>{" "}
                  {language === "es"
                    ? "Aplica fórmulas de reducción para reducir la potencia de funciones trigonométricas."
                    : "Apply reduction formulas to reduce the power of trigonometric functions."}
                </li>
              </ul>
              <p>
                {language === "es"
                  ? "Las identidades trigonométricas son particularmente importantes para simplificar integrales complejas. Algunas identidades clave incluyen:"
                  : "Trigonometric identities are particularly important for simplifying complex integrals. Some key identities include:"}
              </p>
              <div className="space-y-2 my-4">
                <div>
                  <MathDisplay math="\sin^2(x) = \frac{1 - \cos(2x)}{2}" />
                </div>
                <div>
                  <MathDisplay math="\cos^2(x) = \frac{1 + \cos(2x)}{2}" />
                </div>
                <div>
                  <MathDisplay math="\sin(x)\cos(x) = \frac{\sin(2x)}{2}" />
                </div>
              </div>
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
                      ? "Ejemplo 1: Integración de Potencias de Seno y Coseno"
                      : "Example 1: Integrating Powers of Sine and Cosine"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \sin^3(x) \cos(x) \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Podemos usar la sustitución u = sin(x), lo que significa que du = cos(x) dx:"
                          : "We can use the substitution u = sin(x), which means du = cos(x) dx:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="u = \sin(x) \quad \Rightarrow \quad du = \cos(x) \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="\int \sin^3(x) \cos(x) \, dx = \int u^3 \, du" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{u^4}{4} + C" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{\sin^4(x)}{4} + C" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Esta sustitución funciona bien porque podemos identificar sin(x) y su derivada cos(x) en la integral."
                          : "This substitution works well because we can identify sin(x) and its derivative cos(x) in the integral."}
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
                      ? "Ejemplo 2: Usando Identidades Trigonométricas"
                      : "Example 2: Using Trigonometric Identities"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \cos^2(x) \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Usamos la identidad trigonométrica cos²(x) = (1 + cos(2x))/2:"
                          : "We use the trigonometric identity cos²(x) = (1 + cos(2x))/2:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \cos^2(x) \, dx = \int \frac{1 + \cos(2x)}{2} \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{1}{2} \int 1 \, dx + \frac{1}{2} \int \cos(2x) \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{x}{2} + \frac{1}{2} \cdot \frac{\sin(2x)}{2} + C" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{x}{2} + \frac{\sin(2x)}{4} + C" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Esta técnica de usar identidades trigonométricas es muy útil para integrales que contienen potencias de funciones trigonométricas."
                          : "This technique of using trigonometric identities is very useful for integrals containing powers of trigonometric functions."}
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
                      ? "Ejemplo 3: Integrales con Tangente y Secante"
                      : "Example 3: Integrals with Tangent and Secant"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        {language === "es" ? "Evalúa " : "Evaluate "}
                        <MathDisplay math="\int \tan^2(x) \, dx" display={false} />
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>
                      <p>
                        {language === "es"
                          ? "Usamos la identidad tan²(x) = sec²(x) - 1:"
                          : "We use the identity tan²(x) = sec²(x) - 1:"}
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \tan^2(x) \, dx = \int (\sec^2(x) - 1) \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="= \int \sec^2(x) \, dx - \int 1 \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="= \tan(x) - x + C" />
                        </div>
                      </div>

                      <p>
                        {language === "es"
                          ? "Esta técnica de reescribir en términos de otras funciones trigonométricas puede simplificar significativamente la integración."
                          : "This technique of rewriting in terms of other trigonometric functions can significantly simplify integration."}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </section>

          {/* Advanced Techniques Section */}
          <section id="advanced-techniques">
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Técnicas Avanzadas" : "Advanced Techniques"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Para integrales trigonométricas más complejas, a menudo necesitamos técnicas más avanzadas:"
                  : "For more complex trigonometric integrals, we often need more advanced techniques:"}
              </p>
              <h3 className="font-semibold mt-4">
                {language === "es" ? "Integrales de la forma " : "Integrals of the form "}
                <MathDisplay math="\int \sin^m(x) \cos^n(x) \, dx" display={false} />
              </h3>
              <p>
                {language === "es"
                  ? "Para estas integrales, seguimos diferentes estrategias dependiendo de si m y n son pares o impares:"
                  : "For these integrals, we follow different strategies depending on whether m and n are even or odd:"}
              </p>
              <ul>
                <li>
                  {language === "es" ? "Si " : "If "}
                  <MathDisplay math="m" display={false} />
                  {language === "es" ? " es impar, factoriza " : " is odd, factor out "}
                  <MathDisplay math="\sin(x)" display={false} />
                  {language === "es" ? " y usa " : " and use "}
                  <MathDisplay math="\sin^2(x) = 1 - \cos^2(x)" display={false} />
                </li>
                <li>
                  {language === "es" ? "Si " : "If "}
                  <MathDisplay math="n" display={false} />
                  {language === "es" ? " es impar, factoriza " : " is odd, factor out "}
                  <MathDisplay math="\cos(x)" display={false} />
                  {language === "es" ? " y usa " : " and use "}
                  <MathDisplay math="\cos^2(x) = 1 - \sin^2(x)" display={false} />
                </li>
                <li>
                  {language === "es"
                    ? "Si ambos son pares, usa las identidades de ángulo doble"
                    : "If both are even, use the double angle identities"}
                </li>
              </ul>

              <h3 className="font-semibold mt-4">
                {language === "es" ? "Sustituciones Trigonométricas" : "Trigonometric Substitutions"}
              </h3>
              <p>
                {language === "es"
                  ? "Para integrales que contienen expresiones como √(a² - x²), √(a² + x²), o √(x² - a²), podemos usar sustituciones trigonométricas:"
                  : "For integrals containing expressions like √(a² - x²), √(a² + x²), or √(x² - a²), we can use trigonometric substitutions:"}
              </p>
              <ul>
                <li>
                  {language === "es" ? "Para " : "For "}
                  <MathDisplay math="\sqrt{a^2 - x^2}" display={false} />
                  {language === "es" ? ", usa " : ", use "}
                  <MathDisplay math="x = a\sin(\theta)" display={false} />
                </li>
                <li>
                  {language === "es" ? "Para " : "For "}
                  <MathDisplay math="\sqrt{a^2 + x^2}" display={false} />
                  {language === "es" ? ", usa " : ", use "}
                  <MathDisplay math="x = a\tan(\theta)" display={false} />
                </li>
                <li>
                  {language === "es" ? "Para " : "For "}
                  <MathDisplay math="\sqrt{x^2 - a^2}" display={false} />
                  {language === "es" ? ", usa " : ", use "}
                  <MathDisplay math="x = a\sec(\theta)" display={false} />
                </li>
              </ul>
            </div>
          </section>

          {/* Practice Problems
          <section id="practice-problems">
            <h2 className="text-2xl font-bold mb-4">
              {language === "es" ? "Problemas de Práctica" : "Practice Problems"}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    {language === "es" ? "Evalúa " : "Evaluate "}
                    <MathDisplay math="\int \tan(x) \, dx" display={false} />
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
                    <MathDisplay math="\int \sec(x) \, dx" display={false} />
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
                    <MathDisplay math="\int \sin^2(x)\cos^3(x) \, dx" display={false} />
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
                    <MathDisplay math="\int \frac{dx}{\sin(x)\cos(x)} \, dx" display={false} />
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
                  <a href="#basic-integrals" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Integrales Básicas" : "Basic Integrals"}
                  </a>
                </li>
                <li>
                  <a href="#integration-techniques" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Técnicas de Integración" : "Integration Techniques"}
                  </a>
                </li>
                <li>
                  <a href="#examples" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Ejemplos" : "Examples"}
                  </a>
                </li>
                <li>
                  <a href="#advanced-techniques" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Técnicas Avanzadas" : "Advanced Techniques"}
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
              <h3 className="font-semibold mb-3">{language === "es" ? "Temas Relacionados" : "Related Topics"}</h3>
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
                    href="/topics/mathematics/integral-calculus/algebraic-integrals"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Integrales Algebraicas" : "Algebraic Integrals"}
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
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-sm">
                <MathDisplay math="\sin^2(x) = \frac{1 - \cos(2x)}{2}" />
                <MathDisplay math="\cos^2(x) = \frac{1 + \cos(2x)}{2}" />
                <MathDisplay math="\tan^2(x) = \sec^2(x) - 1" />
              </div>
              <p className="text-sm mt-3 text-muted-foreground">
                {language === "es"
                  ? "Estas identidades son fundamentales para simplificar integrales trigonométricas."
                  : "These identities are fundamental for simplifying trigonometric integrals."}
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
                      {language === "es" ? "Tabla de Integrales" : "Table of Integrals"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Referencia completa de fórmulas de integración"
                        : "Comprehensive reference of integration formulas"}
                    </p>
                    <Link href="/resources/tools/formula-database" className="text-xs text-primary hover:underline">
                      {language === "es" ? "Ver tabla" : "View table"}
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
                <h3 className="font-semibold mb-1">{language === "es" ? "Siguiente Tema" : "Next Topic"}</h3>
                <Link
                  href="/topics/mathematics/integral-calculus/integration-methods/trigonometric-substitution"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Sustitución Trigonométrica" : "Trigonometric Substitution"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende a usar sustituciones trigonométricas para resolver integrales complejas"
                    : "Learn to use trigonometric substitutions to solve complex integrals"}
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
                  {language === "es" ? "Fórmulas Trigonométricas" : "Trigonometric Formulas"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Accede a nuestra colección completa de fórmulas trigonométricas"
                    : "Access our comprehensive collection of trigonometric formulas"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
