"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function IntegrationBySubstitutionPage() {
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
        <span className="text-foreground font-medium">Integration by Substitution</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Integration by Substitution</h1>
          <p className="text-muted-foreground">
            A technique for simplifying complex integrals using variable substitution
          </p>
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
            <h2 className="text-2xl font-bold mb-4">Introduction to Integration by Substitution</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Integration by substitution, also known as u-substitution, is a technique used to simplify integrals by
                substituting a new variable for a part of the integrand. This method is based on the chain rule of
                differentiation and is particularly useful for integrals containing composite functions.
              </p>

              <p>
                The basic idea is to make a substitution <MathDisplay math="u = g(x)" display={false} /> that transforms
                the integral into a simpler form. The formula for integration by substitution is:
              </p>

              <div className="my-4 text-center">
                <MathDisplay math="\int f(g(x))g'(x) \, dx = \int f(u) \, du" />
              </div>

              <p>
                Where <MathDisplay math="u = g(x)" display={false} /> and{" "}
                <MathDisplay math="du = g'(x) \, dx" display={false} />.
              </p>

              <p>This technique is essentially the reverse of the chain rule for differentiation:</p>

              <div className="my-4 text-center">
                <MathDisplay math="\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)" />
              </div>
            </div>
          </section>

          {/* When to Use Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">When to Use Integration by Substitution</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Integration by substitution is particularly useful in the following situations:</p>

              <ul>
                <li>
                  When the integrand contains a composite function, such as{" "}
                  <MathDisplay math="\int \sin(x^2) \cdot 2x \, dx" display={false} />
                </li>
                <li>
                  When the integrand has a function and its derivative, like{" "}
                  <MathDisplay math="\int \frac{1}{x} \cdot \ln(x) \, dx" display={false} />
                </li>
                <li>
                  When the integrand can be rewritten in the form{" "}
                  <MathDisplay math="f(g(x)) \cdot g'(x)" display={false} />
                </li>
              </ul>

              <p>
                The key to successfully applying this method is recognizing which part of the integrand should be
                substituted with a new variable. Look for:
              </p>

              <ul>
                <li>An "inner function" that appears as part of a composite function</li>
                <li>A function whose derivative (or a multiple of its derivative) also appears in the integrand</li>
              </ul>
            </div>
          </section>

          {/* Steps for Integration by Substitution */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Steps for Integration by Substitution</h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>Identify the substitution:</strong> Choose a part of the integrand to substitute with a new
                  variable u.
                </li>
                <li>
                  <strong>Find the differential:</strong> Calculate du by differentiating u with respect to x.
                </li>
                <li>
                  <strong>Express dx in terms of du:</strong> Solve for dx from the differential equation.
                </li>
                <li>
                  <strong>Substitute into the integral:</strong> Replace the chosen part with u and dx with the
                  expression in terms of du.
                </li>
                <li>
                  <strong>Evaluate the new integral:</strong> Integrate with respect to u.
                </li>
                <li>
                  <strong>Back-substitute:</strong> Replace u with the original expression in terms of x.
                </li>
              </ol>
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
                  <h3 className="font-medium">Example 1: Basic Substitution</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Evaluate <MathDisplay math="\int \sin(x^2) \cdot 2x \, dx" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>Let's apply the substitution method:</p>

                      <p>
                        Step 1: Let <MathDisplay math="u = x^2" display={false} />
                      </p>

                      <p>Step 2: Find du by differentiating u with respect to x:</p>

                      <div className="my-2">
                        <MathDisplay math="du = \frac{d}{dx}[x^2] \, dx = 2x \, dx" />
                      </div>

                      <p>Step 3: Solve for dx:</p>
                      <div className="my-2">
                        <MathDisplay math="dx = \frac{du}{2x}" />
                      </div>

                      <p>Step 4: Substitute into the original integral:</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \sin(x^2) \cdot 2x \, dx = \int \sin(u) \cdot 2x \cdot \frac{du}{2x}" />
                        </div>
                        <div>
                          <MathDisplay math="= \int \sin(u) \, du" />
                        </div>
                      </div>

                      <p>Step 5: Evaluate the new integral:</p>
                      <div className="my-2">
                        <MathDisplay math="\int \sin(u) \, du = -\cos(u) + C" />
                      </div>

                      <p>Step 6: Back-substitute u = x²:</p>
                      <div className="my-2">
                        <MathDisplay math="-\cos(u) + C = -\cos(x^2) + C" />
                      </div>

                      <p>Therefore:</p>
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
                  <h3 className="font-medium">Example 2: Logarithmic Function</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Evaluate <MathDisplay math="\int \frac{1}{x} \ln(x) \, dx" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>Let's apply the substitution method:</p>

                      <p>
                        Step 1: Let <MathDisplay math="u = \ln(x)" display={false} />
                      </p>

                      <p>Step 2: Find du:</p>
                      <div className="my-2">
                        <MathDisplay math="du = \frac{d}{dx}[\ln(x)] \, dx = \frac{1}{x} \, dx" />
                      </div>

                      <p>Step 3: Solve for dx:</p>
                      <div className="my-2">
                        <MathDisplay math="dx = x \, du" />
                      </div>

                      <p>Step 4: Substitute into the original integral:</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \frac{1}{x} \ln(x) \, dx = \int \frac{1}{x} \cdot u \cdot x \, du" />
                        </div>
                        <div>
                          <MathDisplay math="= \int u \, du" />
                        </div>
                      </div>

                      <p>Step 5: Evaluate the new integral:</p>
                      <div className="my-2">
                        <MathDisplay math="\int u \, du = \frac{u^2}{2} + C" />
                      </div>

                      <p>Step 6: Back-substitute u = ln(x):</p>
                      <div className="my-2">
                        <MathDisplay math="\frac{u^2}{2} + C = \frac{[\ln(x)]^2}{2} + C" />
                      </div>

                      <p>Therefore:</p>
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
                  <h3 className="font-medium">Example 3: Exponential Function</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Evaluate <MathDisplay math="\int e^{3x} \, dx" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>Let's apply the substitution method:</p>

                      <p>
                        Step 1: Let <MathDisplay math="u = 3x" display={false} />
                      </p>

                      <p>Step 2: Find du:</p>
                      <div className="my-2">
                        <MathDisplay math="du = \frac{d}{dx}[3x] \, dx = 3 \, dx" />
                      </div>

                      <p>Step 3: Solve for dx:</p>
                      <div className="my-2">
                        <MathDisplay math="dx = \frac{du}{3}" />
                      </div>

                      <p>Step 4: Substitute into the original integral:</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int e^{3x} \, dx = \int e^u \cdot \frac{du}{3}" />
                        </div>
                        <div>
                          <MathDisplay math="= \frac{1}{3} \int e^u \, du" />
                        </div>
                      </div>

                      <p>Step 5: Evaluate the new integral:</p>
                      <div className="my-2">
                        <MathDisplay math="\frac{1}{3} \int e^u \, du = \frac{1}{3} e^u + C" />
                      </div>

                      <p>Step 6: Back-substitute u = 3x:</p>
                      <div className="my-2">
                        <MathDisplay math="\frac{1}{3} e^u + C = \frac{1}{3} e^{3x} + C" />
                      </div>

                      <p>Therefore:</p>
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
            <h2 className="text-2xl font-bold mb-4">Common Substitutions</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>Here are some common substitutions that are useful in various integration problems:</p>

              <div className="overflow-x-auto my-4">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 text-left">Integral Form</th>
                      <th className="border p-2 text-left">Suggested Substitution</th>
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

          {/* Practice Problems */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Practice Problems</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int x \sqrt{x^2 + 1} \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Show Solution
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int \frac{e^x}{1 + e^x} \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Show Solution
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int \cos^2(x) \sin(x) \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Show Solution
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int \frac{x}{x^2 + 4} \, dx" display={false} />
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
                    When to Use Integration by Substitution
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Steps for Integration by Substitution
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Common Substitutions
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
                    href="/topics/mathematics/integral-calculus/integration-methods/integration-by-parts"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Integration by Parts
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
                <MathDisplay math="\int f(g(x))g'(x) \, dx = \int f(u) \, du" />
                <p className="text-sm mt-2 text-center">
                  where <MathDisplay math="u = g(x)" display={false} />
                </p>
              </div>
              <p className="text-sm mt-3 text-muted-foreground">
                This formula is the foundation of the substitution method and is based on the chain rule of
                differentiation.
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
                      href="/resources/solved-problems?topic=integration-by-substitution"
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
                  href="/topics/mathematics/integral-calculus/integration-methods/trigonometric-substitution"
                  className="text-primary hover:underline text-lg"
                >
                  Trigonometric Substitution
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  Learn how to use trigonometric substitutions for specific integral forms
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
