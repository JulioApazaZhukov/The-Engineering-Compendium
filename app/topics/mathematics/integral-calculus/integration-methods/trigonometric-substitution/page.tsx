"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function TrigonometricSubstitutionPage() {
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
        <span className="text-foreground font-medium">Trigonometric Substitution</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Trigonometric Substitution</h1>
          <p className="text-muted-foreground">
            A specialized technique for integrals involving certain radical expressions
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
            <h2 className="text-2xl font-bold mb-4">Introduction to Trigonometric Substitution</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Trigonometric substitution is a specialized integration technique used to evaluate integrals containing
                certain radical expressions. This method involves substituting a trigonometric function for a variable
                to simplify the integrand, particularly when dealing with expressions of the form{" "}
                <MathDisplay math="\sqrt{a^2 - x^2}" display={false} />,{" "}
                <MathDisplay math="\sqrt{a^2 + x^2}" display={false} />, or{" "}
                <MathDisplay math="\sqrt{x^2 - a^2}" display={false} />.
              </p>

              <p>
                The power of this technique comes from the fundamental trigonometric identities, which allow us to
                convert complex radical expressions into simpler trigonometric expressions.
              </p>
            </div>
          </section>

          {/* Key Substitutions Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Trigonometric Substitutions</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>There are three main trigonometric substitutions, each designed for a specific form of radical:</p>

              <div className="overflow-x-auto my-6">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="border p-2 text-left">Radical Form</th>
                      <th className="border p-2 text-left">Substitution</th>
                      <th className="border p-2 text-left">Identity Used</th>
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

              <p>When using these substitutions, we also need to express dx in terms of dθ:</p>

              <ul>
                <li>
                  For <MathDisplay math="x = a\sin\theta" display={false} />:{" "}
                  <MathDisplay math="dx = a\cos\theta \, d\theta" display={false} />
                </li>
                <li>
                  For <MathDisplay math="x = a\tan\theta" display={false} />:{" "}
                  <MathDisplay math="dx = a\sec^2\theta \, d\theta" display={false} />
                </li>
                <li>
                  For <MathDisplay math="x = a\sec\theta" display={false} />:{" "}
                  <MathDisplay math="dx = a\sec\theta\tan\theta \, d\theta" display={false} />
                </li>
              </ul>

              <p>
                After making the substitution and evaluating the integral in terms of θ, we need to convert back to the
                original variable x. This often involves using right triangle relationships or inverse trigonometric
                functions.
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
                  <h3 className="font-medium">Example 1: Integral with √(a² - x²)</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Evaluate <MathDisplay math="\int \frac{x^2}{\sqrt{4 - x^2}} \, dx" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>
                        This integral contains <MathDisplay math="\sqrt{4 - x^2}" display={false} />, which matches the
                        form <MathDisplay math="\sqrt{a^2 - x^2}" display={false} /> with a = 2.
                      </p>

                      <p>
                        Step 1: Use the substitution <MathDisplay math="x = 2\sin\theta" display={false} />
                      </p>

                      <p>Step 2: Find dx:</p>
                      <div className="my-2">
                        <MathDisplay math="dx = 2\cos\theta \, d\theta" />
                      </div>

                      <p>Step 3: Express the radical in terms of θ:</p>
                      <div className="my-2">
                        <MathDisplay math="\sqrt{4 - x^2} = \sqrt{4 - 4\sin^2\theta} = \sqrt{4(1 - \sin^2\theta)} = \sqrt{4\cos^2\theta} = 2\cos\theta" />
                      </div>

                      <p>Step 4: Substitute into the original integral:</p>
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
                        Step 5: Use the identity{" "}
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

                      <p>Step 6: Convert back to the original variable x:</p>
                      <p>
                        Since <MathDisplay math="x = 2\sin\theta" display={false} />, we have{" "}
                        <MathDisplay math="\sin\theta = \frac{x}{2}" display={false} />
                      </p>
                      <p>
                        Also, <MathDisplay math="\theta = \arcsin\left(\frac{x}{2}\right)" display={false} />
                      </p>

                      <p>
                        For the term <MathDisplay math="\sin(2\theta)" display={false} />, we can use the double angle
                        formula:
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\sin(2\theta) = 2\sin\theta\cos\theta = 2 \cdot \frac{x}{2} \cdot \frac{\sqrt{4-x^2}}{2} = \frac{x\sqrt{4-x^2}}{2}" />
                      </div>

                      <p>Therefore:</p>
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
                  <h3 className="font-medium">Example 2: Integral with √(a² + x²)</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Evaluate <MathDisplay math="\int \frac{1}{(1+x^2)^{3/2}} \, dx" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>
                        This integral contains <MathDisplay math="(1+x^2)^{3/2}" display={false} />, which involves{" "}
                        <MathDisplay math="\sqrt{1 + x^2}" display={false} />. This matches the form{" "}
                        <MathDisplay math="\sqrt{a^2 + x^2}" display={false} /> with a = 1.
                      </p>

                      <p>
                        Step 1: Use the substitution <MathDisplay math="x = \tan\theta" display={false} />
                      </p>

                      <p>Step 2: Find dx:</p>
                      <div className="my-2">
                        <MathDisplay math="dx = \sec^2\theta \, d\theta" />
                      </div>

                      <p>Step 3: Express the denominator in terms of θ:</p>
                      <div className="my-2">
                        <MathDisplay math="(1+x^2)^{3/2} = (1+\tan^2\theta)^{3/2} = (\sec^2\theta)^{3/2} = \sec^3\theta" />
                      </div>

                      <p>Step 4: Substitute into the original integral:</p>
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

                      <p>Step 5: Convert back to the original variable x:</p>
                      <p>
                        Since <MathDisplay math="x = \tan\theta" display={false} />, we have{" "}
                        <MathDisplay math="\tan\theta = x" display={false} />
                      </p>
                      <p>
                        In a right triangle with angle θ, if the opposite side is x and the adjacent side is 1, then:
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\sin\theta = \frac{x}{\sqrt{1+x^2}}" />
                      </div>

                      <p>Therefore:</p>
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
                  <h3 className="font-medium">Example 3: Integral with √(x² - a²)</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Evaluate <MathDisplay math="\int \frac{x^2}{\sqrt{x^2 - 9}} \, dx" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>
                        This integral contains <MathDisplay math="\sqrt{x^2 - 9}" display={false} />, which matches the
                        form <MathDisplay math="\sqrt{x^2 - a^2}" display={false} /> with a = 3.
                      </p>

                      <p>
                        Step 1: Use the substitution <MathDisplay math="x = 3\sec\theta" display={false} />
                      </p>

                      <p>Step 2: Find dx:</p>
                      <div className="my-2">
                        <MathDisplay math="dx = 3\sec\theta\tan\theta \, d\theta" />
                      </div>

                      <p>Step 3: Express the radical in terms of θ:</p>
                      <div className="my-2">
                        <MathDisplay math="\sqrt{x^2 - 9} = \sqrt{9\sec^2\theta - 9} = \sqrt{9(\sec^2\theta - 1)} = \sqrt{9\tan^2\theta} = 3\tan\theta" />
                      </div>

                      <p>Step 4: Substitute into the original integral:</p>
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
                        Step 5: Evaluate the integral of <MathDisplay math="\sec^3\theta" display={false} />:
                      </p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\int \sec^3\theta \, d\theta = \int \sec\theta \cdot \sec^2\theta \, d\theta" />
                        </div>
                      </div>

                      <p>
                        This is a standard integral that can be evaluated using integration by parts or a reduction
                        formula. The result is:
                      </p>
                      <div className="my-2">
                        <MathDisplay math="\int \sec^3\theta \, d\theta = \frac{1}{2}\sec\theta\tan\theta + \frac{1}{2}\ln|\sec\theta + \tan\theta| + C" />
                      </div>

                      <p>Therefore:</p>
                      <div className="my-2">
                        <MathDisplay math="9\int \sec^3\theta \, d\theta = \frac{9}{2}\sec\theta\tan\theta + \frac{9}{2}\ln|\sec\theta + \tan\theta| + C" />
                      </div>

                      <p>Step 6: Convert back to the original variable x:</p>
                      <p>
                        Since <MathDisplay math="x = 3\sec\theta" display={false} />, we have{" "}
                        <MathDisplay math="\sec\theta = \frac{x}{3}" display={false} />
                      </p>
                      <p>
                        Also, <MathDisplay math="\tan\theta = \frac{\sqrt{x^2 - 9}}{3}" display={false} />
                      </p>

                      <p>Substituting these expressions:</p>
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
            <h2 className="text-2xl font-bold mb-4">Tips for Trigonometric Substitution</h2>
            <div className="prose dark:prose-invert max-w-none">
              <ol>
                <li>
                  <strong>Identify the appropriate substitution:</strong> Look at the form of the radical to determine
                  which trigonometric substitution to use.
                </li>
                <li>
                  <strong>Draw a reference triangle:</strong> When converting back to the original variable, drawing a
                  right triangle can be very helpful.
                </li>
                <li>
                  <strong>Use trigonometric identities:</strong> Familiarize yourself with common identities like{" "}
                  <MathDisplay math="\sin^2\theta + \cos^2\theta = 1" display={false} /> and{" "}
                  <MathDisplay math="\sec^2\theta - \tan^2\theta = 1" display={false} />.
                </li>
                <li>
                  <strong>Check domain restrictions:</strong> Be aware of domain restrictions when making substitutions
                  and converting back.
                </li>
                <li>
                  <strong>Simplify before substituting:</strong> Sometimes it's beneficial to simplify the integrand
                  before applying the substitution.
                </li>
              </ol>
            </div>
          </section>

          {/* Practice Problems */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Practice Problems</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int \frac{x^2}{\sqrt{25 - x^2}} \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Show Solution
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int \frac{1}{x^2\sqrt{x^2 - 4}} \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Show Solution
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int \sqrt{4 + 9x^2} \, dx" display={false} />
                  </p>
                  <Button variant="outline" className="w-full mt-2">
                    Show Solution
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <p className="mb-2">
                    Evaluate <MathDisplay math="\int \frac{x^2}{\sqrt{x^2 + 16}} \, dx" display={false} />
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
                    Key Trigonometric Substitutions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Tips for Trigonometric Substitution
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
                    href="/topics/mathematics/integral-calculus/integration-methods/integration-by-substitution"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Integration by Substitution
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
              <h3 className="font-semibold mb-3">Key Substitutions</h3>
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
                Remember to draw a reference triangle when converting back to the original variable.
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
                      href="/resources/solved-problems?topic=trigonometric-substitution"
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
                  href="/topics/mathematics/integral-calculus/integration-methods/universal-substitution"
                  className="text-primary hover:underline text-lg"
                >
                  Universal Substitution
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  Learn about the Weierstrass substitution for rational functions of sine and cosine
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
