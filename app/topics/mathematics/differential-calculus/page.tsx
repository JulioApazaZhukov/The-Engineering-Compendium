"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { ArrowLeft, BookOpen, Calculator, FileText, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function DifferentialCalculusPage() {
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
        <span className="text-foreground font-medium">Differential Calculus</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Differential Calculus</h1>
          <p className="text-muted-foreground">The study of rates of change and slopes of curves</p>
        </div>
        <Button variant="outline" size="sm" asChild>
          <Link href="/topics/mathematics" className="flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Mathematics
          </Link>
        </Button>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Column */}
        <div className="lg:col-span-2 space-y-8">
          {/* Introduction Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Introduction to Differential Calculus</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Differential calculus is a branch of calculus that studies rates of change and slopes of curves. It
                focuses on the concept of the derivative, which represents an instantaneous rate of change. The
                derivative of a function at a specific point measures the rate at which the function's value changes as
                its input changes.
              </p>
              <p>
                The fundamental concept in differential calculus is the limit. The derivative is defined as a limit of
                the difference quotient:
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}" />
              </div>
              <p>
                This limit, if it exists, gives us the derivative of the function f at the point x. The derivative
                represents the slope of the tangent line to the graph of f at the point (x, f(x)).
              </p>
            </div>
          </section>

          {/* Key Concepts Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Key Concepts</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">The Derivative</h3>
                <div className="prose dark:prose-invert max-w-none">
                  <p>
                    The derivative of a function f with respect to x is denoted by f'(x) or{" "}
                    <MathDisplay math="\frac{df}{dx}" display={false} />. It represents the instantaneous rate of change
                    of f with respect to x.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Basic Differentiation Rules</h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div>
                        <p className="font-medium">Constant Rule:</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}[c] = 0" />
                        </div>
                        <p className="text-sm text-muted-foreground">The derivative of a constant is zero.</p>
                      </div>

                      <div>
                        <p className="font-medium">Power Rule:</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}[x^n] = nx^{n-1}" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          For any real number n, the derivative of x^n is n times x^(n-1).
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Sum Rule:</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}[f(x) + g(x)] = \frac{d}{dx}[f(x)] + \frac{d}{dx}[g(x)]" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          The derivative of a sum is the sum of the derivatives.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Product Rule:</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}[f(x) \cdot g(x)] = f(x) \cdot \frac{d}{dx}[g(x)] + g(x) \cdot \frac{d}{dx}[f(x)]" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          The derivative of a product is the first function times the derivative of the second, plus the
                          second function times the derivative of the first.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Quotient Rule:</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{g(x) \cdot \frac{d}{dx}[f(x)] - f(x) \cdot \frac{d}{dx}[g(x)]}{[g(x)]^2}" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          The derivative of a quotient follows this formula where the denominator is squared.
                        </p>
                      </div>

                      <div>
                        <p className="font-medium">Chain Rule:</p>
                        <div className="my-2 text-center">
                          <MathDisplay math="\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)" />
                        </div>
                        <p className="text-sm text-muted-foreground">
                          The derivative of a composite function is the derivative of the outer function evaluated at
                          the inner function, multiplied by the derivative of the inner function.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Common Derivatives</h3>
                <Card>
                  <CardContent className="pt-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <p className="font-medium">Trigonometric Functions:</p>
                        <div className="space-y-2 mt-2">
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[\sin(x)] = \cos(x)" />
                          </div>
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[\cos(x)] = -\sin(x)" />
                          </div>
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[\tan(x)] = \sec^2(x)" />
                          </div>
                        </div>
                      </div>

                      <div>
                        <p className="font-medium">Exponential and Logarithmic:</p>
                        <div className="space-y-2 mt-2">
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[e^x] = e^x" />
                          </div>
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[a^x] = a^x \ln(a)" />
                          </div>
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[\ln(x)] = \frac{1}{x}" />
                          </div>
                          <div className="text-center">
                            <MathDisplay math="\frac{d}{dx}[\log_a(x)] = \frac{1}{x \ln(a)}" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
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
                  <h3 className="font-medium">Example 1: Power Rule</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 1 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 1 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Find the derivative of <MathDisplay math="f(x) = 3x^4 - 2x^2 + 5x - 7" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>We can apply the power rule and the sum rule:</p>

                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{d}{dx}[3x^4] = 3 \cdot \frac{d}{dx}[x^4] = 3 \cdot 4x^3 = 12x^3" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[-2x^2] = -2 \cdot \frac{d}{dx}[x^2] = -2 \cdot 2x = -4x" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[5x] = 5 \cdot \frac{d}{dx}[x] = 5 \cdot 1 = 5" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[-7] = 0" />
                        </div>
                      </div>

                      <p>Now, we add all these derivatives:</p>
                      <div>
                        <MathDisplay math="f'(x) = 12x^3 - 4x + 5" />
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
                  <h3 className="font-medium">Example 2: Product Rule</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 2 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 2 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Find the derivative of <MathDisplay math="f(x) = x^2 \cdot \sin(x)" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>We need to use the product rule:</p>
                      <div>
                        <MathDisplay math="\frac{d}{dx}[f(x) \cdot g(x)] = f(x) \cdot \frac{d}{dx}[g(x)] + g(x) \cdot \frac{d}{dx}[f(x)]" />
                      </div>

                      <p>
                        Let <MathDisplay math="f(x) = x^2" display={false} /> and{" "}
                        <MathDisplay math="g(x) = \sin(x)" display={false} />
                      </p>

                      <p>We know:</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{d}{dx}[x^2] = 2x" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[\sin(x)] = \cos(x)" />
                        </div>
                      </div>

                      <p>Applying the product rule:</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{d}{dx}[x^2 \cdot \sin(x)] = x^2 \cdot \frac{d}{dx}[\sin(x)] + \sin(x) \cdot \frac{d}{dx}[x^2]" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[x^2 \cdot \sin(x)] = x^2 \cdot \cos(x) + \sin(x) \cdot 2x" />
                        </div>
                        <div>
                          <MathDisplay math="\frac{d}{dx}[x^2 \cdot \sin(x)] = x^2\cos(x) + 2x\sin(x)" />
                        </div>
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
                  <h3 className="font-medium">Example 3: Chain Rule</h3>
                  <ChevronRight className={`h-5 w-5 transition-transform ${activeExample === 3 ? "rotate-90" : ""}`} />
                </div>

                {activeExample === 3 && (
                  <CardContent className="pt-4">
                    <div className="prose dark:prose-invert max-w-none">
                      <p>
                        Find the derivative of <MathDisplay math="f(x) = \sin(x^2)" display={false} />
                      </p>

                      <p>
                        <strong>Solution:</strong>
                      </p>
                      <p>We need to use the chain rule:</p>
                      <div>
                        <MathDisplay math="\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)" />
                      </div>

                      <p>
                        Let <MathDisplay math="f(u) = \sin(u)" display={false} /> and{" "}
                        <MathDisplay math="g(x) = x^2" display={false} />, so{" "}
                        <MathDisplay math="f(g(x)) = \sin(x^2)" display={false} />
                      </p>

                      <p>We know:</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="f'(u) = \frac{d}{du}[\sin(u)] = \cos(u)" />
                        </div>
                        <div>
                          <MathDisplay math="g'(x) = \frac{d}{dx}[x^2] = 2x" />
                        </div>
                      </div>

                      <p>Applying the chain rule:</p>
                      <div className="space-y-2">
                        <div>
                          <MathDisplay math="\frac{d}{dx}[\sin(x^2)] = f'(g(x)) \cdot g'(x) = \cos(x^2) \cdot 2x = 2x\cos(x^2)" />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </section>

          {/* Applications Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Applications</h2>

            <div className="prose dark:prose-invert max-w-none">
              <p>Differential calculus has numerous applications in engineering and science:</p>

              <ul>
                <li>
                  <strong>Rate of Change Analysis:</strong> Determining how quickly quantities change with respect to
                  time or other variables.
                </li>
                <li>
                  <strong>Optimization Problems:</strong> Finding maximum or minimum values of functions to optimize
                  designs or processes.
                </li>
                <li>
                  <strong>Motion Analysis:</strong> Calculating velocity and acceleration from position functions.
                </li>
                <li>
                  <strong>Curve Sketching:</strong> Analyzing the behavior of functions to sketch their graphs.
                </li>
                <li>
                  <strong>Approximation Methods:</strong> Using linear approximation and differentials to estimate
                  function values.
                </li>
              </ul>

              <p>
                In engineering, differential calculus is essential for analyzing rates of change in physical systems,
                optimizing designs, and modeling dynamic behavior.
              </p>
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
                    Key Concepts
                  </a>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary">
                        The Derivative
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary">
                        Basic Differentiation Rules
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary">
                        Common Derivatives
                      </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">
                    Applications
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>

          {/* Related Topics */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-3">Related Topics</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/topics/mathematics/integral-calculus"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Integral Calculus
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/mathematics/differential-equations"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Differential Equations
                  </Link>
                </li>
                <li>
                  <Link href="/topics/mathematics/limits" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Limits and Continuity
                  </Link>
                </li>
                <li>
                  <Link
                    href="/topics/physics/classical-mechanics"
                    className="text-primary hover:underline flex items-center"
                  >
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Classical Mechanics
                  </Link>
                </li>
              </ul>
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
                    <p className="text-xs text-muted-foreground mb-1">Practice with step-by-step solutions</p>
                    <Link
                      href="/resources/solved-problems?topic=differential-calculus"
                      className="text-xs text-primary hover:underline"
                    >
                      View problems
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Recommended Reading</h4>
                    <p className="text-xs text-muted-foreground mb-1">Books and articles on differential calculus</p>
                    <Link
                      href="/resources/bibliography?topic=differential-calculus"
                      className="text-xs text-primary hover:underline"
                    >
                      View bibliography
                    </Link>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-md">
                    <Calculator className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Derivative Calculator</h4>
                    <p className="text-xs text-muted-foreground mb-1">Interactive tool for calculating derivatives</p>
                    <Link
                      href="/resources/tools/derivative-calculator"
                      className="text-xs text-primary hover:underline"
                    >
                      Use calculator
                    </Link>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Visual Aid */}
          <Card className="overflow-hidden">
            <div className="relative h-48">
              <Image
                src="/placeholder.svg?height=200&width=400"
                alt="Derivative visualization"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-center text-muted-foreground">
                Visualization of a function (blue) and its derivative (red)
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Interactive Practice Section */}
      <section className="mt-12 bg-muted/50 p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Interactive Practice</h2>

        <Tabs defaultValue="basic" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="basic">Basic Derivatives</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediate</TabsTrigger>
            <TabsTrigger value="advanced">Advanced</TabsTrigger>
          </TabsList>

          <TabsContent value="basic" className="p-4">
            <div className="space-y-4">
              <p className="font-medium">Practice finding derivatives of basic functions:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      Find the derivative of <MathDisplay math="f(x) = 5x^3 - 2x + 7" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      Show Solution
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      Find the derivative of <MathDisplay math="f(x) = \sin(x) + \cos(x)" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      Show Solution
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="intermediate" className="p-4">
            <div className="space-y-4">
              <p className="font-medium">Practice with product and quotient rules:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      Find the derivative of <MathDisplay math="f(x) = x^2e^x" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      Show Solution
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      Find the derivative of <MathDisplay math="f(x) = \frac{x^2 + 1}{x - 3}" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      Show Solution
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced" className="p-4">
            <div className="space-y-4">
              <p className="font-medium">Practice with chain rule and implicit differentiation:</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      Find the derivative of <MathDisplay math="f(x) = \ln(\sin(x^2 + 1))" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      Show Solution
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <p className="mb-2">
                      Find <MathDisplay math="\frac{dy}{dx}" display={false} /> if{" "}
                      <MathDisplay math="x^2 + y^2 = 25" display={false} />
                    </p>
                    <Button variant="outline" className="w-full mt-2">
                      Show Solution
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </section>

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
                <h3 className="font-semibold mb-1">Next Topic</h3>
                <Link href="/topics/mathematics/integral-calculus" className="text-primary hover:underline text-lg">
                  Integral Calculus
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  Learn about antiderivatives and the definite integral
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
                <h3 className="font-semibold mb-1">Related Application</h3>
                <Link href="/topics/physics/classical-mechanics" className="text-primary hover:underline text-lg">
                  Classical Mechanics
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  See how differential calculus is applied in physics
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}

