"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function RelatedRatesPage() {
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
          {language === "es" ? "Razones Relacionadas" : "Related Rates of Change"}
        </span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">
            {language === "es" ? "Razones Relacionadas" : "Related Rates of Change"}
          </h1>
          <p className="text-muted-foreground">
            {language === "es"
              ? "Analizando cómo las tasas de cambio de diferentes cantidades están relacionadas"
              : "Analyzing how rates of change of different quantities are related"}
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
              {language === "es" ? "Introducción a las Razones Relacionadas" : "Introduction to Related Rates"}
            </h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                {language === "es"
                  ? "Las razones relacionadas es una aplicación del cálculo diferencial que nos permite analizar cómo las tasas de cambio de diferentes cantidades están relacionadas entre sí. Este concepto es fundamental en muchas áreas de la ciencia y la ingeniería, donde las cantidades cambian con respecto al tiempo u otras variables."
                  : "Related rates is an application of differential calculus that allows us to analyze how the rates of change of different quantities are related to each other. This concept is fundamental in many areas of science and engineering, where quantities change with respect to time or other variables."}
              </p>
              <p>
                {language === "es"
                  ? "En esencia, los problemas de razones relacionadas involucran encontrar la tasa de cambio de una variable con respecto al tiempo cuando conocemos la tasa de cambio de otra variable relacionada. La clave para resolver estos problemas es la regla de la cadena del cálculo diferencial."
                  : "In essence, related rates problems involve finding the rate of change of one variable with respect to time when we know the rate of change of another related variable. The key to solving these problems is the chain rule from differential calculus."}
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
                <h3 id="chain-rule" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "La Regla de la Cadena" : "The Chain Rule"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "La regla de la cadena es fundamental para los problemas de razones relacionadas. Si tenemos dos variables x e y que dependen del tiempo t, y están relacionadas por alguna ecuación, entonces:"
                      : "The chain rule is fundamental to related rates problems. If we have two variables x and y that depend on time t, and they are related by some equation, then:"}
                  </p>
                  <div className="my-4">
                    <MathDisplay math="\frac{dy}{dt} = \frac{dy}{dx} \cdot \frac{dx}{dt}" />
                  </div>
                  <p>
                    {language === "es"
                      ? "Esta fórmula nos permite encontrar la tasa de cambio de y con respecto al tiempo si conocemos la tasa de cambio de x con respecto al tiempo y la relación entre x e y."
                      : "This formula allows us to find the rate of change of y with respect to time if we know the rate of change of x with respect to time and the relationship between x and y."}
                  </p>
                </div>
              </div>

              <div>
                <h3 id="implicit-differentiation" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es" ? "Diferenciación Implícita" : "Implicit Differentiation"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "En muchos problemas de razones relacionadas, las variables están relacionadas por una ecuación implícita. La diferenciación implícita nos permite encontrar las relaciones entre las tasas de cambio sin tener que resolver explícitamente para una variable."
                      : "In many related rates problems, the variables are related by an implicit equation. Implicit differentiation allows us to find the relationships between rates of change without having to solve explicitly for one variable."}
                  </p>
                  <p>
                    {language === "es"
                      ? "Por ejemplo, si tenemos una ecuación F(x, y) = 0 donde x e y dependen del tiempo t, podemos diferenciar implícitamente con respecto a t:"
                      : "For example, if we have an equation F(x, y) = 0 where x and y depend on time t, we can differentiate implicitly with respect to t:"}
                  </p>
                  <div className="my-4">
                    <MathDisplay math="\frac{\partial F}{\partial x} \cdot \frac{dx}{dt} + \frac{\partial F}{\partial y} \cdot \frac{dy}{dt} = 0" />
                  </div>
                </div>
              </div>

              <div>
                <h3 id="general-approach" className="text-xl font-semibold mb-2 scroll-mt-16">
                  {language === "es"
                    ? "Enfoque General para Resolver Problemas"
                    : "General Approach to Solving Problems"}
                </h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    {language === "es"
                      ? "Para resolver problemas de razones relacionadas, generalmente seguimos estos pasos:"
                      : "To solve related rates problems, we generally follow these steps:"}
                  </p>
                  <ol>
                    <li>
                      {language === "es"
                        ? "Identificar todas las variables y qué tasas de cambio son conocidas y cuáles son desconocidas."
                        : "Identify all variables and which rates of change are known and which are unknown."}
                    </li>
                    <li>
                      {language === "es"
                        ? "Encontrar una ecuación que relacione las variables involucradas."
                        : "Find an equation that relates the variables involved."}
                    </li>
                    <li>
                      {language === "es"
                        ? "Diferenciar implícitamente la ecuación con respecto al tiempo."
                        : "Implicitly differentiate the equation with respect to time."}
                    </li>
                    <li>
                      {language === "es"
                        ? "Sustituir los valores conocidos y resolver para la tasa de cambio desconocida."
                        : "Substitute the known values and solve for the unknown rate of change."}
                    </li>
                  </ol>
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
                    {language === "es" ? "Ejemplo 1: Problema del Cono de Agua" : "Example 1: Water Cone Problem"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "El agua se está vertiendo en un recipiente cónico a razón de 5 cm³/s. El cono tiene una altura de 20 cm y un radio de base de 10 cm. ¿A qué velocidad está subiendo el nivel del agua cuando la altura del agua es de 8 cm?"
                          : "Water is being poured into a conical container at a rate of 5 cm³/s. The cone has a height of 20 cm and a base radius of 10 cm. How fast is the water level rising when the water height is 8 cm?"}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Paso 1: Identificar las variables y tasas de cambio."
                          : "Step 1: Identify the variables and rates of change."}
                      </p>
                      <ul>
                        <li>
                          {language === "es" ? "V = volumen del agua en el cono" : "V = volume of water in the cone"}
                        </li>
                        <li>{language === "es" ? "h = altura del agua" : "h = height of the water"}</li>
                        <li>
                          {language === "es"
                            ? "r = radio de la superficie del agua"
                            : "r = radius of the water surface"}
                        </li>
                        <li>{language === "es" ? "dV/dt = 5 cm³/s (conocida)" : "dV/dt = 5 cm³/s (known)"}</li>
                        <li>{language === "es" ? "dh/dt = ? (desconocida)" : "dh/dt = ? (unknown)"}</li>
                      </ul>

                      <p>
                        {language === "es"
                          ? "Paso 2: Encontrar una ecuación que relacione las variables."
                          : "Step 2: Find an equation that relates the variables."}
                      </p>
                      <p>
                        {language === "es"
                          ? "El volumen de un cono es V = (1/3)πr²h. Necesitamos expresar r en términos de h usando semejanza de triángulos:"
                          : "The volume of a cone is V = (1/3)πr²h. We need to express r in terms of h using similar triangles:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{r}{h} = \frac{10}{20} = \frac{1}{2}" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="r = \frac{h}{2}" />
                      </div>
                      <p>
                        {language === "es"
                          ? "Sustituyendo en la fórmula del volumen:"
                          : "Substituting into the volume formula:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="V = \frac{1}{3}\pi\left(\frac{h}{2}\right)^2h = \frac{\pi h^3}{12}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 3: Diferenciar implícitamente con respecto al tiempo."
                          : "Step 3: Implicitly differentiate with respect to time."}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{dV}{dt} = \frac{\pi}{12} \cdot 3h^2 \cdot \frac{dh}{dt} = \frac{\pi h^2}{4} \cdot \frac{dh}{dt}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituir los valores conocidos y resolver."
                          : "Step 4: Substitute the known values and solve."}
                      </p>
                      <p>{language === "es" ? "Cuando h = 8 cm, tenemos:" : "When h = 8 cm, we have:"}</p>
                      <div className="my-4">
                        <MathDisplay math="5 = \frac{\pi (8)^2}{4} \cdot \frac{dh}{dt} = \frac{16\pi}{4} \cdot \frac{dh}{dt} = 4\pi \cdot \frac{dh}{dt}" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="\frac{dh}{dt} = \frac{5}{4\pi} \approx 0.398 \text{ cm/s}" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es"
                          ? "El nivel del agua está subiendo aproximadamente a 0.398 cm/s cuando la altura del agua es de 8 cm."
                          : "The water level is rising at approximately 0.398 cm/s when the water height is 8 cm."}
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
                      ? "Ejemplo 2: Problema de la Escalera Deslizante"
                      : "Example 2: Sliding Ladder Problem"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Una escalera de 10 metros de longitud está apoyada contra una pared. La base de la escalera se desliza alejándose de la pared a una velocidad de 0.5 metros por segundo. ¿A qué velocidad está descendiendo el extremo superior de la escalera cuando la base está a 6 metros de la pared?"
                          : "A 10-meter ladder is leaning against a wall. The bottom of the ladder is sliding away from the wall at a rate of 0.5 meters per second. How fast is the top of the ladder sliding down the wall when the bottom of the ladder is 6 meters from the wall?"}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Paso 1: Identificar las variables y tasas de cambio."
                          : "Step 1: Identify the variables and rates of change."}
                      </p>
                      <ul>
                        <li>
                          {language === "es"
                            ? "x = distancia desde la base de la escalera hasta la pared"
                            : "x = distance from the bottom of the ladder to the wall"}
                        </li>
                        <li>
                          {language === "es"
                            ? "y = altura del extremo superior de la escalera"
                            : "y = height of the top of the ladder"}
                        </li>
                        <li>{language === "es" ? "dx/dt = 0.5 m/s (conocida)" : "dx/dt = 0.5 m/s (known)"}</li>
                        <li>{language === "es" ? "dy/dt = ? (desconocida)" : "dy/dt = ? (unknown)"}</li>
                      </ul>

                      <p>
                        {language === "es"
                          ? "Paso 2: Encontrar una ecuación que relacione las variables."
                          : "Step 2: Find an equation that relates the variables."}
                      </p>
                      <p>
                        {language === "es"
                          ? "Podemos usar el teorema de Pitágoras, ya que la escalera forma un triángulo rectángulo con la pared y el suelo:"
                          : "We can use the Pythagorean theorem, since the ladder forms a right triangle with the wall and the ground:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="x^2 + y^2 = 10^2 = 100" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 3: Diferenciar implícitamente con respecto al tiempo."
                          : "Step 3: Implicitly differentiate with respect to time."}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="2x \cdot \frac{dx}{dt} + 2y \cdot \frac{dy}{dt} = 0" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="y \cdot \frac{dy}{dt} = -x \cdot \frac{dx}{dt}" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="\frac{dy}{dt} = -\frac{x}{y} \cdot \frac{dx}{dt}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituir los valores conocidos y resolver."
                          : "Step 4: Substitute the known values and solve."}
                      </p>
                      <p>
                        {language === "es"
                          ? "Cuando x = 6 m, necesitamos encontrar y usando la ecuación del paso 2:"
                          : "When x = 6 m, we need to find y using the equation from step 2:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="6^2 + y^2 = 100" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="y^2 = 100 - 36 = 64" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="y = 8 \text{ m}" />
                      </div>
                      <p>{language === "es" ? "Ahora podemos calcular dy/dt:" : "Now we can calculate dy/dt:"}</p>
                      <div className="my-4">
                        <MathDisplay math="\frac{dy}{dt} = -\frac{6}{8} \cdot 0.5 = -\frac{3}{8} = -0.375 \text{ m/s}" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es"
                          ? "El extremo superior de la escalera está descendiendo a una velocidad de 0.375 metros por segundo cuando la base está a 6 metros de la pared. El signo negativo indica que la altura está disminuyendo."
                          : "The top of the ladder is sliding down at a rate of 0.375 meters per second when the bottom is 6 meters from the wall. The negative sign indicates that the height is decreasing."}
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
                    {language === "es" ? "Ejemplo 3: Problema de la Sombra" : "Example 3: Shadow Problem"}
                  </h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        <strong>{language === "es" ? "Problema:" : "Problem:"}</strong>{" "}
                        {language === "es"
                          ? "Una persona de 1.8 metros de altura camina alejándose de una farola a una velocidad de 1.5 metros por segundo. La farola está a 5 metros sobre el suelo. ¿A qué velocidad está creciendo la longitud de la sombra de la persona cuando está a 10 metros de la farola?"
                          : "A person who is 1.8 meters tall walks away from a streetlight at a rate of 1.5 meters per second. The streetlight is 5 meters above the ground. How fast is the length of the person's shadow growing when the person is 10 meters from the streetlight?"}
                      </p>

                      <p>
                        <strong>{language === "es" ? "Solución:" : "Solution:"}</strong>
                      </p>

                      <p>
                        {language === "es"
                          ? "Paso 1: Identificar las variables y tasas de cambio."
                          : "Step 1: Identify the variables and rates of change."}
                      </p>
                      <ul>
                        <li>
                          {language === "es"
                            ? "x = distancia de la persona a la farola"
                            : "x = distance of the person from the streetlight"}
                        </li>
                        <li>{language === "es" ? "s = longitud de la sombra" : "s = length of the shadow"}</li>
                        <li>{language === "es" ? "dx/dt = 1.5 m/s (conocida)" : "dx/dt = 1.5 m/s (known)"}</li>
                        <li>{language === "es" ? "ds/dt = ? (desconocida)" : "ds/dt = ? (unknown)"}</li>
                      </ul>

                      <p>
                        {language === "es"
                          ? "Paso 2: Encontrar una ecuación que relacione las variables."
                          : "Step 2: Find an equation that relates the variables."}
                      </p>
                      <p>
                        {language === "es"
                          ? "Usando semejanza de triángulos, podemos establecer:"
                          : "Using similar triangles, we can establish:"}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{s}{1.8} = \frac{x + s}{5}" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="5s = 1.8(x + s)" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="5s = 1.8x + 1.8s" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="3.2s = 1.8x" />
                      </div>
                      <div className="my-4">
                        <MathDisplay math="s = \frac{1.8x}{3.2} = \frac{9x}{16}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 3: Diferenciar implícitamente con respecto al tiempo."
                          : "Step 3: Implicitly differentiate with respect to time."}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{ds}{dt} = \frac{9}{16} \cdot \frac{dx}{dt}" />
                      </div>

                      <p>
                        {language === "es"
                          ? "Paso 4: Sustituir los valores conocidos y resolver."
                          : "Step 4: Substitute the known values and solve."}
                      </p>
                      <div className="my-4">
                        <MathDisplay math="\frac{ds}{dt} = \frac{9}{16} \cdot 1.5 = \frac{27}{32} = 0.84375 \text{ m/s}" />
                      </div>

                      <p>
                        <strong>{language === "es" ? "Conclusión:" : "Conclusion:"}</strong>{" "}
                        {language === "es"
                          ? "La sombra está creciendo a una velocidad de aproximadamente 0.84 metros por segundo cuando la persona está a 10 metros de la farola."
                          : "The shadow is growing at a rate of approximately 0.84 meters per second when the person is 10 meters from the streetlight."}
                      </p>
                    </div>
                  </CardContent>
                )}
              </Card>
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
                  ? "Al resolver problemas de razones relacionadas, es importante evitar estos errores comunes:"
                  : "When solving related rates problems, it's important to avoid these common mistakes:"}
              </p>

              <ul>
                <li>
                  <strong>
                    {language === "es"
                      ? "Olvidar evaluar las variables en el momento correcto:"
                      : "Forgetting to evaluate variables at the correct time:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Asegúrate de sustituir los valores de las variables en el momento específico para el que estás calculando la tasa de cambio."
                    : "Make sure to substitute the values of the variables at the specific time for which you are calculating the rate of change."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Confundir qué variables dependen del tiempo:"
                      : "Confusing which variables depend on time:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Identifica claramente qué cantidades están cambiando con el tiempo y cuáles son constantes."
                    : "Clearly identify which quantities are changing with time and which are constant."}
                </li>
                <li>
                  <strong>
                    {language === "es"
                      ? "Errores en la diferenciación implícita:"
                      : "Errors in implicit differentiation:"}
                  </strong>{" "}
                  {language === "es"
                    ? "Aplica correctamente la regla de la cadena al diferenciar con respecto al tiempo."
                    : "Correctly apply the chain rule when differentiating with respect to time."}
                </li>
                <li>
                  <strong>{language === "es" ? "No dibujar un diagrama:" : "Not drawing a diagram:"}</strong>{" "}
                  {language === "es"
                    ? "Un diagrama claro puede ayudar a visualizar el problema y establecer las relaciones correctas entre las variables."
                    : "A clear diagram can help visualize the problem and establish the correct relationships between variables."}
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
                  ? "Los problemas de razones relacionadas tienen numerosas aplicaciones en el mundo real:"
                  : "Related rates problems have numerous real-world applications:"}
              </p>

              <ul>
                <li>
                  <strong>{language === "es" ? "Física:" : "Physics:"}</strong>{" "}
                  {language === "es"
                    ? "Análisis de movimiento, cambios en presión y volumen, propagación del calor."
                    : "Analysis of motion, changes in pressure and volume, heat propagation."}
                </li>
                <li>
                  <strong>{language === "es" ? "Ingeniería:" : "Engineering:"}</strong>{" "}
                  {language === "es"
                    ? "Diseño de sistemas dinámicos, análisis de fluidos, control de procesos."
                    : "Design of dynamic systems, fluid analysis, process control."}
                </li>
                <li>
                  <strong>{language === "es" ? "Economía:" : "Economics:"}</strong>{" "}
                  {language === "es"
                    ? "Análisis de tasas de crecimiento, elasticidad de la demanda, modelos de producción."
                    : "Analysis of growth rates, elasticity of demand, production models."}
                </li>
                <li>
                  <strong>{language === "es" ? "Medicina:" : "Medicine:"}</strong>{" "}
                  {language === "es"
                    ? "Propagación de enfermedades, tasas de absorción de medicamentos, dinámica de poblaciones."
                    : "Disease propagation, drug absorption rates, population dynamics."}
                </li>
                <li>
                  <strong>{language === "es" ? "Ciencias Ambientales:" : "Environmental Sciences:"}</strong>{" "}
                  {language === "es"
                    ? "Modelos climáticos, tasas de contaminación, dinámica de ecosistemas."
                    : "Climate models, pollution rates, ecosystem dynamics."}
                </li>
              </ul>

              <p>
                {language === "es"
                  ? "La capacidad de analizar cómo las tasas de cambio están relacionadas es una habilidad fundamental en muchas disciplinas científicas y de ingeniería."
                  : "The ability to analyze how rates of change are related is a fundamental skill in many scientific and engineering disciplines."}
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
                      <a href="#chain-rule" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "La Regla de la Cadena" : "The Chain Rule"}
                      </a>
                    </li>
                    <li>
                      <a href="#implicit-differentiation" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Diferenciación Implícita" : "Implicit Differentiation"}
                      </a>
                    </li>
                    <li>
                      <a href="#general-approach" className="text-muted-foreground hover:text-primary">
                        {language === "es" ? "Enfoque General" : "General Approach"}
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
                    href="/topics/mathematics/differential-calculus/chain-rule"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Regla de la Cadena" : "Chain Rule"}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-calculus/implicit-differentiation"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    {language === "es" ? "Diferenciación Implícita" : "Implicit Differentiation"}
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
                      href="/resources/solved-problems?topic=related-rates"
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
                        ? "Libros y artículos sobre razones relacionadas"
                        : "Books and articles on related rates"}
                    </p>
                    <Link
                      href="/resources/bibliography?topic=related-rates"
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
                        ? "Herramienta para resolver problemas de razones relacionadas"
                        : "Tool for solving related rates problems"}
                    </p>
                    <Link
                      href="/resources/tools/related-rates-calculator"
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
                  ? "Un globo esférico se está inflando a razón de 10 cm³/s. ¿A qué velocidad está aumentando el radio cuando el radio es de 5 cm?"
                  : "A spherical balloon is being inflated at a rate of 10 cm³/s. How fast is the radius increasing when the radius is 5 cm?"}
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
                  ? "Un avión vuela horizontalmente a una altitud de 1 km y pasa directamente sobre un observador en tierra. Si el avión vuela a 200 km/h, ¿a qué velocidad está cambiando el ángulo de elevación cuando el avión está a 2 km de distancia horizontal del observador?"
                  : "An airplane flies horizontally at an altitude of 1 km and passes directly over an observer on the ground. If the plane flies at 200 km/h, how fast is the angle of elevation changing when the plane is 2 km of horizontal distance from the observer?"}
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
                  href="/topics/mathematics/differential-calculus-applications/leibniz-derivative-rule"
                  className="text-primary hover:underline text-lg"
                >
                  {language === "es" ? "Regla de Derivación de Leibniz" : "Leibniz Derivative Rule"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Aprende a diferenciar integrales con límites variables"
                    : "Learn to differentiate integrals with variable limits"}
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
                <Link href="/topics/physics/kinematics" className="text-primary hover:underline text-lg">
                  {language === "es" ? "Cinemática" : "Kinematics"}
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === "es"
                    ? "Explora aplicaciones de razones relacionadas en física"
                    : "Explore applications of related rates in physics"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
