"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function LHopitalsRulePage() {
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
          {language === "es" ? "Regla de L'Hôpital" : "L'Hôpital's Rule"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Regla de L'Hôpital" : "L'Hôpital's Rule"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Evaluando límites indeterminados usando derivadas"
              : "Evaluating indeterminate limits using derivatives"}
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
              {language === "es" ? "Introducción a la Regla de L'Hôpital" : "Introduction to L'Hôpital's Rule"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La regla de L'Hôpital es una poderosa herramienta del cálculo que nos permite evaluar límites que inicialmente dan formas indeterminadas. Nombrada en honor al matemático francés Guillaume de l'Hôpital, esta regla proporciona un método sistemático para resolver límites que de otro modo serían difíciles de calcular."
                  : "L'Hôpital's Rule is a powerful calculus tool that allows us to evaluate limits that initially yield indeterminate forms. Named after French mathematician Guillaume de l'Hôpital, this rule provides a systematic method for solving limits that would otherwise be difficult to calculate."}
              </p>
              <p>
                {language === "es"
                  ? "Las formas indeterminadas más comunes que encontramos en cálculo son:"
                  : "The most common indeterminate forms we encounter in calculus are:"}
              </p>
              <div className="my-4">
                <MathDisplay math="\frac{0}{0}, \frac{\infty}{\infty}, 0 \cdot \infty, \infty - \infty, 0^0, 1^{\infty}, \infty^0" />
              </div>
              <p>
                {language === "es"
                  ? "Estas formas se llaman 'indeterminadas' porque no podemos determinar inmediatamente su valor simplemente sustituyendo el valor límite."
                  : "These forms are called 'indeterminate' because we cannot immediately determine their value by simply substituting the limit value."}
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
                {language === "es" ? "Regla de L'Hôpital" : "L'Hôpital's Rule"}
              </h3>
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  {language === "es"
                    ? "Si el límite de f(x)/g(x) cuando x tiende a a tiene la forma indeterminada 0/0 o ∞/∞, entonces:"
                    : "If the limit of f(x)/g(x) as x approaches a has the indeterminate form 0/0 or ∞/∞, then:"}
                </p>
                <div className="my-4">
                  <MathDisplay math="\lim_{x \to a} \frac{f(x)}{g(x)} = \lim_{x \to a} \frac{f'(x)}{g'(x)}" />
                </div>
                <p>
                  {language === "es"
                    ? "siempre que el límite de la derecha exista o sea infinito."
                    : "provided that the limit on the right exists or is infinite."}
                </p>
              </div>
            </div>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "La regla también se aplica a límites cuando x tiende a ±∞, así como a límites unilaterales (x → a⁺ o x → a⁻)."
                  : "The rule also applies to limits as x approaches ±∞, as well as one-sided limits (x → a⁺ or x → a⁻)."}
              </p>
              <p>
                {language === "es"
                  ? "Es importante destacar que la regla de L'Hôpital solo se aplica a las formas indeterminadas 0/0 y ∞/∞. Para otras formas indeterminadas, primero debemos manipular la expresión para obtener una de estas dos formas."
                  : "It's important to note that L'Hôpital's Rule only applies to the indeterminate forms 0/0 and ∞/∞. For other indeterminate forms, we must first manipulate the expression to obtain one of these two forms."}
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
                  <h3 className="font-medium">{language === "es" ? "Ejemplo 1: Forma 0/0" : "Example 1: 0/0 Form"}</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Evaluar:" : "Evaluate:"}</strong>
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\lim_{x \to 0} \frac{\sin x}{x}" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Al sustituir x = 0, obtenemos la forma indeterminada 0/0:"
                          : "Substituting x = 0, we get the indeterminate form 0/0:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{\sin 0}{0} = \frac{0}{0}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Aplicando la regla de L'Hôpital, derivamos el numerador y el denominador por separado:"
                          : "Applying L'Hôpital's Rule, we differentiate the numerator and denominator separately:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\frac{d}{dx}[\sin x]}{\frac{d}{dx}[x]} = \lim_{x \to 0} \frac{\cos x}{1} = \cos 0 = 1" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es" ? "El límite es igual a 1." : "The limit equals 1."}
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
                  <h3 className="font-medium">{language === "es" ? "Ejemplo 2: Forma ∞/∞" : "Example 2: ∞/∞ Form"}</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Evaluar:" : "Evaluate:"}</strong>
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\lim_{x \to \infty} \frac{x^2}{e^x}" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Al sustituir x = ∞, obtenemos la forma indeterminada ∞/∞:"
                          : "Substituting x = ∞, we get the indeterminate form ∞/∞:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{\infty}{\infty}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Aplicando la regla de L'Hôpital, derivamos el numerador y el denominador:"
                          : "Applying L'Hôpital's Rule, we differentiate the numerator and denominator:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\lim_{x \to \infty} \frac{x^2}{e^x} = \lim_{x \to \infty} \frac{2x}{e^x}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Todavía tenemos la forma indeterminada ∞/∞, así que aplicamos la regla de L'Hôpital nuevamente:"
                          : "We still have the indeterminate form ∞/∞, so we apply L'Hôpital's Rule again:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\lim_{x \to \infty} \frac{2x}{e^x} = \lim_{x \to \infty} \frac{2}{e^x} = \frac{2}{\infty} = 0" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es" ? "El límite es igual a 0." : "The limit equals 0."}
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
                    {language === "es" ? "Ejemplo 3: Aplicación Repetida" : "Example 3: Repeated Application"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Evaluar:" : "Evaluate:"}</strong>
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\lim_{x \to 0} \frac{e^x - 1 - x}{x^2}" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Al sustituir x = 0, obtenemos la forma indeterminada 0/0:"
                          : "Substituting x = 0, we get the indeterminate form 0/0:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{e^0 - 1 - 0}{0^2} = \frac{1 - 1 - 0}{0} = \frac{0}{0}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Aplicando la regla de L'Hôpital, derivamos el numerador y el denominador:"
                          : "Applying L'Hôpital's Rule, we differentiate the numerator and denominator:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\lim_{x \to 0} \frac{e^x - 1 - x}{x^2} = \lim_{x \to 0} \frac{e^x - 1}{2x}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Todavía tenemos la forma indeterminada 0/0, así que aplicamos la regla de L'Hôpital nuevamente:"
                          : "We still have the indeterminate form 0/0, so we apply L'Hôpital's Rule again:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\lim_{x \to 0} \frac{e^x - 1}{2x} = \lim_{x \to 0} \frac{e^x}{2} = \frac{e^0}{2} = \frac{1}{2}" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es" ? "El límite es igual a 1/2." : "The limit equals 1/2."}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </section>

          {/* Other Indeterminate Forms Section */}
          <section>
            <h2 id="other-forms" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Otras Formas Indeterminadas" : "Other Indeterminate Forms"}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Para aplicar la regla de L'Hôpital a otras formas indeterminadas, primero debemos transformarlas en la forma 0/0 o ∞/∞."
                  : "To apply L'Hôpital's Rule to other indeterminate forms, we must first transform them into the form 0/0 or ∞/∞."}
              </p>

              <div className="space-y-6 mt-4">
                <div>
                  <h3 id="product-form" className="text-xl font-semibold mb-2 scroll-mt-16">
                    {language === "es" ? "Forma de Producto (0 · ∞)" : "Product Form (0 · ∞)"}
                  </h3>
                  <p>
                    {language === "es"
                      ? "Para la forma indeterminada 0 · ∞, reescribimos el producto como una fracción:"
                      : "For the indeterminate form 0 · ∞, we rewrite the product as a fraction:"}
                  </p>
                  <div className="my-4">
                    <MathDisplay math="\lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} \frac{f(x)}{\frac{1}{g(x)}}" />
                  </div>
                  <p>{language === "es" ? "o alternativamente:" : "or alternatively:"}</p>
                  <div className="my-4">
                    <MathDisplay math="\lim_{x \to a} [f(x) \cdot g(x)] = \lim_{x \to a} \frac{g(x)}{\frac{1}{f(x)}}" />
                  </div>
                </div>

                <div>
                  <h3 id="difference-form" className="text-xl font-semibold mb-2 scroll-mt-16">
                    {language === "es" ? "Forma de Diferencia (∞ - ∞)" : "Difference Form (∞ - ∞)"}
                  </h3>
                  <p>
                    {language === "es"
                      ? "Para la forma indeterminada ∞ - ∞, buscamos un denominador común o usamos manipulación algebraica:"
                      : "For the indeterminate form ∞ - ∞, we look for a common denominator or use algebraic manipulation:"}
                  </p>
                  <div className="my-4">
                    <MathDisplay math="\lim_{x \to a} [f(x) - g(x)] = \lim_{x \to a} \frac{f(x) \cdot h(x) - g(x) \cdot h(x)}{h(x)}" />
                  </div>
                </div>

                <div>
                  <h3 id="exponential-forms" className="text-xl font-semibold mb-2 scroll-mt-16">
                    {language === "es" ? "Formas Exponenciales (0^0, 1^∞, ∞^0)" : "Exponential Forms (0^0, 1^∞, ∞^0)"}
                  </h3>
                  <p>
                    {language === "es"
                      ? "Para formas indeterminadas exponenciales, tomamos el logaritmo natural:"
                      : "For exponential indeterminate forms, we take the natural logarithm:"}
                  </p>
                  <div className="my-4">
                    <MathDisplay math="\lim_{x \to a} [f(x)]^{g(x)} = e^{\lim_{x \to a} g(x) \ln f(x)}" />
                  </div>
                  <p>
                    {language === "es"
                      ? "Luego evaluamos el límite del exponente, que a menudo requiere la regla de L'Hôpital."
                      : "Then we evaluate the limit of the exponent, which often requires L'Hôpital's Rule."}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Example with Exponential Form */}
          <section>
            <h2 id="exponential-example" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Ejemplo con Forma Exponencial" : "Example with Exponential Form"}
            </h2>

            <Card className="overflow-hidden">
              <div
                className="p-4 bg-muted cursor-pointer flex justify-between items-center"
                onClick={() => toggleExample(4)}
              >
                <h3 className="font-medium">{language === "es" ? "Ejemplo 4: Forma 0^0" : "Example 4: 0^0 Form"}</h3>
                <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 4 ? "rotate-90" : ""}`} />
              </div>

              {activeExample === 4 && (
                <CardContent className="pt-4">
                  <div className="prose dark:prose-invert max-w-none">
                    <p>
                      <strong>{language === "es" ? "Evaluar:" : "Evaluate:"}</strong>
                    </p>
                    <div className="my-4">
                      <MathDisplay math="\lim_{x \to 0^+} x^x" />
                    </div>

                    <p>
                      <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                    </p>

                    <p>
                      {language === "es"
                        ? "Al sustituir x = 0, obtenemos la forma indeterminada 0^0."
                        : "Substituting x = 0, we get the indeterminate form 0^0."}
                    </p>

                    <p>
                      {language === "es"
                        ? "Tomamos el logaritmo natural de la expresión:"
                        : "We take the natural logarithm of the expression:"}
                    </p>
                    <div className="my-4">
                      <MathDisplay math="\ln(x^x) = x \ln(x)" />
                    </div>

                    <p>
                      {language === "es"
                        ? "Ahora evaluamos el límite de x ln(x) cuando x → 0+:"
                        : "Now we evaluate the limit of x ln(x) as x → 0+:"}
                    </p>
                    <div className="my-4">
                      <MathDisplay math="\lim_{x \to 0^+} x \ln(x)" />
                    </div>

                    <p>
                      {language === "es"
                        ? "Esta es la forma indeterminada 0 · (-∞), que podemos reescribir como:"
                        : "This is the indeterminate form 0 · (-∞), which we can rewrite as:"}
                    </p>
                    <div className="my-4">
                      <MathDisplay math="\lim_{x \to 0^+} \frac{\ln(x)}{\frac{1}{x}}" />
                    </div>

                    <p>
                      {language === "es"
                        ? "Ahora tenemos la forma indeterminada -∞/∞, así que aplicamos la regla de L'Hôpital:"
                        : "Now we have the indeterminate form -∞/∞, so we apply L'Hôpital's Rule:"}
                    </p>
                    <div className="my-4">
                      <MathDisplay math="\lim_{x \to 0^+} \frac{\frac{1}{x}}{-\frac{1}{x^2}} = \lim_{x \to 0^+} \frac{1}{-\frac{1}{x}} = \lim_{x \to 0^+} -x = 0" />
                    </div>

                    <p>{language === "es" ? "Por lo tanto:" : "Therefore:"}</p>
                    <div className="my-4">
                      <MathDisplay math="\lim_{x \to 0^+} x^x = e^{\lim_{x \to 0^+} x \ln(x)} = e^0 = 1" />
                    </div>

                    <p>
                      <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                      {language === "es" ? "El límite es igual a 1." : "The limit equals 1."}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          </section>

          {/* Common Mistakes Section */}
          <section>
            <h2 id="common-mistakes" className="text-2xl font-bold mb-4 scroll-mt-16">
              {language === "es" ? "Errores Comunes" : "Common Mistakes"}
            </h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Al aplicar la regla de L'Hôpital, es importante evitar estos errores comunes:"
                  : "When applying L'Hôpital's Rule, it's important to avoid these common mistakes:"}
              </p>

              <ul>
                <li>
                  <strong>
                    {language === "es"
                      ? "Aplicar la regla cuando no es necesario:"
                      : "Applying the rule when not necessary:"}
                  </strong>{" "}
                  {language === "es"
                    ? "La regla solo se aplica a formas indeterminadas (0/0, ∞/∞, etc.). No la uses cuando el límite se puede evaluar directamente."
                    : "The rule only applies to indeterminate forms (0/0, ∞/∞, etc.). Don't use it when the limit can be evaluated directly."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Derivar el numerador y denominador juntos:"
                      : "Differentiating the numerator and denominator together:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Debes derivar el numerador y el denominador por separado, no la fracción completa."
                    : "You must differentiate the numerator and denominator separately, not the entire fraction."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Olvidar verificar si todavía hay una forma indeterminada:"
                      : "Forgetting to check if there's still an indeterminate form:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Después de aplicar la regla una vez, verifica si el resultado sigue siendo indeterminado. Puede ser necesario aplicar la regla varias veces."
                    : "After applying the rule once, check if the result is still indeterminate. You may need to apply the rule multiple times."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Aplicar la regla a formas no indeterminadas:"
                      : "Applying the rule to non-indeterminate forms:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Formas como 0/∞, ∞/0, etc., no son indeterminadas y no requieren la regla de L'Hôpital."
                    : "Forms like 0/∞, ∞/0, etc., are not indeterminate and don't require L'Hôpital's Rule."}
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
                  ? "La regla de L'Hôpital tiene numerosas aplicaciones en matemáticas y ciencias:"
                  : "L'Hôpital's Rule has numerous applications in mathematics and sciences:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Series de Taylor:" : "Taylor Series:"}</strong>{" "}
                  {language === "es"
                    ? "Para encontrar los coeficientes en expansiones de series."
                    : "For finding coefficients in series expansions."}
                </li>
                <li>
                  <strong>{language === "es" ? "Física:" : "Physics:"}</strong>{" "}
                  {language === "es"
                    ? "En el análisis de comportamientos asintóticos de sistemas físicos."
                    : "In analyzing asymptotic behaviors of physical systems."}
                </li>
                <li>
                  <strong>{language === "es" ? "Economía:" : "Economics:"}</strong>{" "}
                  {language === "es"
                    ? "Para analizar tasas marginales y elasticidades en el límite."
                    : "For analyzing marginal rates and elasticities at the limit."}
                </li>
                <li>
                  <strong>{language === "es" ? "Probabilidad y Estadística:" : "Probability and Statistics:"}</strong>{" "}
                  {language === "es"
                    ? "En el estudio de distribuciones de probabilidad y sus límites."
                    : "In studying probability distributions and their limits."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "La capacidad de evaluar límites indeterminados es una habilidad fundamental en el análisis matemático avanzado y sus aplicaciones."
                  : "The ability to evaluate indeterminate limits is a fundamental skill in advanced mathematical analysis and its applications."}
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
                  <a href="#theorem" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "El Teorema" : "The Theorem"}
                  </a>
                </li>
                <li>
                  <a href="#examples" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Ejemplos" : "Examples"}
                  </a>
                </li>
                <li>
                  <a href="#other-forms" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Otras Formas Indeterminadas" : "Other Indeterminate Forms"}
                  </a>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#product-form" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Forma de Producto" : "Product Form"}
                      </a>
                    </li>
                    <li>
                      <a href="#difference-form" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Forma de Diferencia" : "Difference Form"}
                      </a>
                    </li>
                    <li>
                      <a href="#exponential-forms" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Formas Exponenciales" : "Exponential Forms"}
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#exponential-example" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Ejemplo con Forma Exponencial" : "Example with Exponential Form"}
                  </a>
                </li>
                <li>
                  <a href="#common-mistakes" className="text-muted-foreground hover:text-primary">
                    {language === "es" ? "Errores Comunes" : "Common Mistakes"}
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
                    href="/topics/mathematics/differential-calculus-applications/optimization"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Problemas de Optimización" : "Optimization Problems"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-calculus/limits"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Límites y Continuidad" : "Limits and Continuity"}
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
                      //href="/resources/solved-problems?topic=lhopitals-rule"
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
                        ? "Libros y artículos sobre la regla de L'Hôpital"
                        : "Books and articles on L'Hôpital's Rule"}
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
                      {language === "es" ? "Calculadora de Límites" : "Limits Calculator"}
                    </h4>
                    <p className="text-xs text-muted-foreground mb-1">
                      {language === "es"
                        ? "Herramienta interactiva para evaluar límites"
                        : "Interactive tool for evaluating limits"}
                    </p>
                    <Link href="/resources/tools/limits-calculator" className="text-xs text-primary hover:underline">
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
                {language === "es" ? "Evalúa el siguiente límite:" : "Evaluate the following limit:"}
              </p>
              <div className="my-4">
                <MathDisplay math="\lim_{x \to 0} \frac{\tan x - x}{x^3}" />
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
                {language === "es" ? "Evalúa el siguiente límite:" : "Evaluate the following limit:"}
              </p>
              <div className="my-4">
                <MathDisplay math="\lim_{x \to 0} \frac{\ln(1+x) - x}{x^2}" />
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
                  href="/topics/mathematics/differential-calculus-applications/linear-approximation"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Aproximación Lineal" : "Linear Approximation"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende a aproximar funciones usando derivadas"
                    : "Learn to approximate functions using derivatives"}
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
                  href="/topics/mathematics/differential-calculus/limits"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Límites y Continuidad" : "Limits and Continuity"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Explora los fundamentos de los límites en cálculo"
                    : "Explore the foundations of limits in calculus"}
                </p>
              </div>
            </div>
          </Card> */}
        </div>
      </section>
    </div>
  )
}
