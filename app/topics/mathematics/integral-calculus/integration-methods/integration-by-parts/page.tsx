"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function IntegrationByPartsPage() {
  const { t } = useLanguage()
  const [activeExample, setActiveExample] = useState<number | null>(null)

  const toggleExample = (index: number) => {
    setActiveExample(activeExample === index ? null : index)
  }

  return (
    <div className="container py-12">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:text-foreground">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics" className="hover:text-foreground">
          Topics
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics/mathematics" className="hover:text-foreground">
          Mathematics
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <Link href="/topics/mathematics/integral-calculus" className="hover:text-foreground">
          Integral Calculus
        </Link>
        <ChevronRight className="h-4 w-4 mx-1" />
        <span className="text-foreground font-medium">Integration by Parts</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Integration by Parts</h1>
          <p className="text-muted-foreground">A technique for integrating products of functions</p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/topics/mathematics/integral-calculus" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Integral Calculus
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction to Integration by Parts</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Integration by parts is a technique used to find the integral of a product of functions. It is based on
                the product rule of differentiation and is particularly useful when direct integration is difficult or
                impossible.
              </p>
              <p>The formula for integration by parts is:</p>
              <div className="my-4 text-center">
                <MathDisplay math="\int u(x) \, v'(x) \, dx = u(x)v(x) - \int v(x) \, u'(x) \, dx" />
              </div>
              <p>This is often written in the more compact form:</p>
              <div className="my-4 text-center">
                <MathDisplay math="\int u \, dv = uv - \int v \, du" />
              </div>
              <p>Where:</p>
              <ul>
                <li>
                  <MathDisplay math="u" display={false} /> is the first function you choose
                </li>
                <li>
                  <MathDisplay math="dv" display={false} /> is the differential of the second function
                </li>
                <li>
                  <MathDisplay math="v" display={false} /> is the integral of <MathDisplay math="dv" display={false} />
                </li>
                <li>
                  <MathDisplay math="du" display={false} /> is the differential of{" "}
                  <MathDisplay math="u" display={false} />
                </li>
              </ul>
            </div>
          </section>

          {/* When to Use Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">When to Use Integration by Parts</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Integration by parts is particularly useful for integrals of the following forms:</p>
              <ul>
                <li>
                  Products of algebraic and transcendental functions:{" "}
                  <MathDisplay
                    math="\int x^n e^x \, dx, \int x^n \ln(x) \, dx, \int x^n \sin(x) \, dx"
                    display={false}
                  />
                </li>
                <li>
                  Products of logarithmic and algebraic functions:{" "}
                  <MathDisplay math="\int \ln(x) \, dx, \int x \ln(x) \, dx" display={false} />
                </li>
                <li>
                  Products involving inverse trigonometric functions:{" "}
                  <MathDisplay math="\int x \arctan(x) \, dx, \int \arcsin(x) \, dx" display={false} />
                </li>
              </ul>
              <p>
                The key to successfully applying integration by parts is choosing the right functions for{" "}
                <MathDisplay math="u" display={false} /> and <MathDisplay math="dv" display={false} />. A helpful
                mnemonic for choosing <MathDisplay math="u" display={false} /> is "LIATE":
              </p>
              <ul>
                <li>
                  <strong>L</strong>: Logarithmic functions (ln(x), log₁₀(x))
                </li>
                <li>
                  <strong>I</strong>: Inverse trigonometric functions (arcsin(x), arctan(x))
                </li>
                <li>
                  <strong>A</strong>: Algebraic functions (x, x², √x)
                </li>
                <li>
                  <strong>T</strong>: Trigonometric functions (sin(x), cos(x))
                </li>
                <li>
                  <strong>E</strong>: Exponential functions (eˣ, aˣ)
                </li>
              </ul>
              <p>
                Functions higher in this list are generally better choices for <MathDisplay math="u" display={false} />,
                while functions lower in the list are better for <MathDisplay math="dv" display={false} />.
              </p>
            </div>
          </section>

          {/* Examples Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Examples</h2>

            <div className="space-y-4">
              {/* Example 1 */}
              <Card className="overflow-hidden">
                <div
                  className="p-4 bg-muted cursor-pointer flex justify-between items-center"
                  onClick={() => toggleExample(1)}
                >
                  <h3 className="font-medium">Example 1: Basic Integration by Parts</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Evaluate <MathDisplay math="\int x \sin(x) \, dx" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>Let's apply the integration by parts formula:</p>
                      <div className="my-2">
                        <MathDisplay math="\int u \, dv = uv - \int v \, du" />
                      </div>

                      <p>
                        We need to choose <MathDisplay math="u" display={false} /> and{" "}
                        <MathDisplay math="dv" display={false} />:
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="u = x \quad \Rightarrow \quad du = dx" />
                        </div>
                        <div>
                          <MathDisplay math="dv = \sin(x) \, dx \quad \Rightarrow \quad v = \int \sin(x) \, dx = -\cos(x)" />
                        </div>
                      </div>

                      <p>Now we substitute these into the integration by parts formula:</p>
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

                      <p>Therefore:</p>
                      <div>
                        <MathDisplay math="\int x \sin(x) \, dx = -x\cos(x) + \sin(x) + C" />
                      </div>

                      <p>We can verify this by differentiating the result:</p>
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

                      <p>Which confirms our answer is correct.</p>
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
                  <h3 className="font-medium">Example 2: Logarithmic Function</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Evaluate <MathDisplay math="\int \ln(x) \, dx" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>Let's apply the integration by parts formula:</p>
                      <div className="my-2">
                        <MathDisplay math="\int u \, dv = uv - \int v \, du" />
                      </div>

                      <p>
                        We need to choose <MathDisplay math="u" display={false} /> and{" "}
                        <MathDisplay math="dv" display={false} />:
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="u = \ln(x) \quad \Rightarrow \quad du = \frac{1}{x} \, dx" />
                        </div>
                        <div>
                          <MathDisplay math="dv = dx \quad \Rightarrow \quad v = \int dx = x" />
                        </div>
                      </div>

                      <p>Now we substitute these into the integration by parts formula:</p>
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

                      <p>Therefore:</p>
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
                  <h3 className="font-medium">Example 3: Repeated Integration by Parts</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Evaluate <MathDisplay math="\int x^2 e^x \, dx" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>
                        This example requires applying integration by parts twice. Let's start with the first
                        application:
                      </p>

                      <p>First application:</p>
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
                        Now we need to evaluate <MathDisplay math="\int x e^x \, dx" display={false} /> using
                        integration by parts again:
                      </p>

                      <p>Second application:</p>
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

                      <p>Now we substitute this result back into our first equation:</p>
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
                        Where <MathDisplay math="C = -2C_1" display={false} /> is our constant of integration.
                      </p>

                      <p>Therefore:</p>
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
          <section>
            <h2 className="text-2xl font-bold mb-4">Tabular Method</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                For integrals requiring multiple applications of integration by parts, the tabular method (also known as
                the "DI" method) provides a more organized approach.
              </p>

              <p>To use the tabular method:</p>
              <ol>
                <li>Create a table with two columns labeled D (derivatives) and I (integrals)</li>
                <li>In the D column, write the first function (u) and its successive derivatives until you reach 0</li>
                <li>In the I column, write the integral of the second function (v) and its successive integrals</li>
                <li>Multiply entries diagonally, alternating signs (+ - + - ...)</li>
                <li>Sum the products to get the final result</li>
              </ol>

              <p>
                Example: Let's evaluate <MathDisplay math="\int x^2 e^x \, dx" display={false} /> using the tabular
                method:
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

              <p>Now we multiply diagonally with alternating signs:</p>
              <div className="space-y-2">
                <div>
                  <MathDisplay math="\int x^2 e^x \, dx = (x^2 \cdot e^x) - (2x \cdot e^x) + (2 \cdot e^x) + C" />
                </div>
                <div>
                  <MathDisplay math="= e^x(x^2 - 2x + 2) + C" />
                </div>
              </div>

              <p>
                This gives us the same result as the repeated application of integration by parts, but in a more
                systematic and less error-prone way.
              </p>
            </div>
          </section>

          {/* Practice Problems */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Practice Problems</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int x \cos(x) \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Show Solution
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int x^2 \ln(x) \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Show Solution
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int e^x \sin(x) \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Show Solution
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int x \arctan(x) \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Show Solution
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
              <h3 className="font-semibold mb-3">On This Page</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="text-primary hover:underline">
                    Introduction
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    When to Use Integration by Parts
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Tabular Method
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Practice Problems
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Related Topics */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Related Methods</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/topics/mathematics/integral-calculus/integration-methods/integration-by-substitution"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Integration by Substitution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/integral-calculus/integration-methods/trigonometric-substitution"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Trigonometric Substitution
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/integral-calculus/integration-methods/universal-substitution"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Universal Substitution
                  </Link>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Formula Card */}
          <Card className="bg-blue-50 dark:bg-blue-950 border-blue-100 dark:border-blue-900">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Key Formula</h3>
              <div className="bg-white dark:bg-gray-900 p-4 rounded-md shadow-sm">
                <MathDisplay math="\int u \, dv = uv - \int v \, du" />
              </div>
              <p className="text-sm mt-3 text-muted-foreground">
                Remember to choose u and dv strategically. The LIATE mnemonic can help with this selection.
              </p>
            </CardContent>
          </Card>

          {/* Resources */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Learning Resources</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Solved Problems</h4>
                    <p className="text-xs text-muted-foreground mb-1">More practice with step-by-step solutions</p>
                    <Link
                      href="/resources/solved-problems?topic=integration-by-parts"
                      className="text-xs text-primary hover:underline"
                    >
                      View problems
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Calculator className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Integration Calculator</h4>
                    <p className="text-xs text-muted-foreground mb-1">Interactive tool for calculating integrals</p>
                    <Link
                      href="/resources/tools/integration-calculator"
                      className="text-xs text-primary hover:underline"
                    >
                      Use calculator
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
        <h2 className="text-2xl font-bold mb-4">Continue Learning</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="p-6 flex items-center gap-4">
              <div className="bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100 p-3 rounded-lg">
                <Calculator className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Next Method</h3>
                <Link
                  href="/topics/mathematics/integral-calculus/integration-methods/integration-by-substitution"
                  className="text-primary hover:underline text-lg"
                >
                  Integration by Substitution
                </Link>
                <p className="text-sm text-muted-foreground mt-1">Learn another powerful integration technique</p>
              </div>
            </div>
          </Card>

          <Card className="overflow-hidden">
            <div className="p-6 flex items-center gap-4">
              <div className="bg-amber-100 dark:bg-amber-900 text-amber-900 dark:text-amber-100 p-3 rounded-lg">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Formula Database</h3>
                <Link href="/resources/tools/formula-database" className="text-primary hover:underline text-lg">
                  Integration Formulas
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  Access our comprehensive collection of integration formulas
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
