"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, ArrowRight, BookOpen, Calculator, FileText, ChevronRight, Database } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { MathDisplay } from "@/components/math-display"

export default function IntegralCalculusPage() {
  const { t } = useLanguage()

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
        <span className="text-foreground font-medium">Integral Calculus</span>
      </div>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Integral Calculus</h1>
          <p className="text-muted-foreground">
            The study of integration and its applications in engineering
          </p>
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
            <h2 className="text-2xl font-bold mb-4">Introduction to Integral Calculus</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Integral calculus is the study of integration, which can be thought of as the reverse process of differentiation. 
                It is used to find areas, volumes, central points, and many useful quantities. Integration helps us to understand 
                the accumulation of quantities and the relationships between a function and its rate of change.
              </p>
              <p>
                The fundamental concept in integral calculus is the definite integral, which represents the area under a curve 
                between two points. The definite integral of a function f(x) from a to b is denoted as:
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="\int_{a}^{b} f(x) \, dx" />
              </div>
              <p>
                The Fundamental Theorem of Calculus establishes the relationship between differentiation and integration:
              </p>
              <div className="my-4 text-center">
                <MathDisplay math="\int_{a}^{b} f(x) \, dx = F(b) - F(a)" />
              </div>
              <p>
                Where F(x) is an antiderivative of f(x), meaning that F'(x) = f(x). This powerful theorem allows us to 
                evaluate definite integrals by finding antiderivatives.
              </p>
            </div>
          </section>

          {/* Methods of Integration Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Methods of Integration</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Integration by Parts */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Integration by Parts</CardTitle>
                  <CardDescription>
                    A technique based on the product rule for differentiation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center my-4">
                    <MathDisplay math="\int u \, dv = uv - \int v \, du" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Used for integrals where the integrand can be expressed as a product of two functions, 
                    especially when one function becomes simpler when differentiated.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/integral-calculus/integration-methods/integration-by-parts" className="w-full">
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Integration by Substitution */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Integration by Substitution</CardTitle>
                  <CardDescription>
                    Also known as u-substitution, based on the chain rule
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center my-4">
                    <MathDisplay math="\int f(g(x))g'(x) \, dx = \int f(u) \, du" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Useful when the integrand contains a composite function, allowing us to simplify 
                    the integral by substituting a new variable.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/integral-calculus/integration-methods/integration-by-substitution" className="w-full">
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Integration by Trigonometric Substitution */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Trigonometric Substitution</CardTitle>
                  <CardDescription>
                    Using trigonometric identities to simplify integrals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center my-4">
                    <MathDisplay math="\int \sqrt{a^2 - x^2} \, dx \quad \text{let} \quad x = a\sin\theta" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Effective for integrals involving expressions like √(a² - x²), √(a² + x²), or √(x² - a²), 
                    which can be transformed using trigonometric substitutions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/integral-calculus/integration-methods/trigonometric-substitution" className="w-full">
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Integration by Universal Substitution */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Universal Substitution</CardTitle>
                  <CardDescription>
                    A general approach for rational functions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center my-4">
                    <MathDisplay math="\int R(\sin x, \cos x) \, dx \quad \text{let} \quad t = \tan\frac{x}{2}" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    A powerful technique for integrating rational functions of sine and cosine, 
                    converting them to rational functions of a new variable.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/integral-calculus/integration-methods/universal-substitution" className="w-full">
                      Learn More
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Integral Formulas Section */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Integral Formulas</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Formulas */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Basic Formulas</CardTitle>
                  <CardDescription>
                    Fundamental integration formulas for common functions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center my-4">
                    <MathDisplay math="\int x^n \, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Essential integration formulas including power, exponential, logarithmic, and basic trigonometric functions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/integral-calculus/basic-formulas" className="w-full">
                      View Formulas
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Algebraic Integrals */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Algebraic Integrals</CardTitle>
                  <CardDescription>
                    Formulas for integrating algebraic expressions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center my-4">
                    <MathDisplay math="\int \frac{1}{a^2 + x^2} \, dx = \frac{1}{a} \arctan\left(\frac{x}{a}\right) + C" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Integration formulas for rational functions, radicals, and other algebraic expressions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/integral-calculus/algebraic-integrals" className="w-full">
                      View Formulas
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Trigonometric Integrals */}
              <Card className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle>Trigonometric Integrals</CardTitle>
                  <CardDescription>
                    Formulas for integrating trigonometric functions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center my-4">
                    <MathDisplay math="\int \sin^2(x) \, dx = \frac{x}{2} - \frac{\sin(2x)}{4} + C" />
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Integration formulas for trigonometric functions and their products, powers, and combinations.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/topics/mathematics/integral-calculus/trigonometric-integrals" className="w-full">
                      View Formulas
                    </Link>
                  </Button>
                </CardFooter>
              </Card>

              {/* Formula Database */}
              <Card className="hover:shadow-md transition-shadow bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Database className="h-5 w-5 mr-2 text-primary" />
                    Formula Database
                  </CardTitle>
                  <CardDescription>
                    Comprehensive collection of integration formulas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Access our complete database of integration formulas, searchable by type, complexity, and function.
                    Includes formulas for all standard integrals and special functions.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button asChild>
                    <Link href="/resources/tools/formula-database" className="w-full">
                      Explore Database
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </section>

          {/* Applications Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4">Applications of Integration</h2>
            
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Integral calculus has numerous applications in engineering and science:
              </p>
              
              <ul>
                <li>
                  <strong>Area Calculation:</strong> Finding the area under curves or between curves.
                </li>
                <li>
                  <strong>Volume Calculation:</strong> Determining volumes of solids of revolution or solids with known cross-sections.
                </li>
                <li>
                  <strong>Work and Energy:</strong> Calculating work done by a variable force or energy in physical systems.
                </li>
                <li>
                  <strong>Center of Mass:</strong> Finding the center of mass of objects with variable density.
                </li>
                <li>
                  <strong>Probability:</strong> Computing probabilities in continuous probability distributions.
                </li>
                <li>
                  <strong>Signal Processing:</strong> Analyzing and processing continuous signals in electrical engineering.
                </li>
              </ul>
              
              <p>
                In engineering, integral calculus is essential for analyzing physical systems, designing structures, 
                and solving problems involving accumulation and total effect.
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
                  <a href="#" className="text-primary hover:underline">Introduction</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">Methods of Integration</a>
                  <ul className="pl-4 mt-1 space-y-1">
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary">Integration by Parts</a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary">Integration by Substitution</a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary">Trigonometric Substitution</a>
                    </li>
                    <li>
                      <a href="#" className="text-muted-foreground hover:text-primary">Universal Substitution</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">Integral Formulas</a>
                </li>
                <li>
                  <a href="#" className="text-muted-foreground hover:text-primary">Applications</a>
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
                  <Link href="/topics/mathematics/differential-calculus" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Differential Calculus
                  </Link>
                </li>
                <li>
                  <Link href="/topics/mathematics/differential-equations" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Differential Equations
                  </Link>
                </li>
                <li>
                  <Link href="/topics/mathematics/multivariable-calculus" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Multivariable Calculus
                  </Link>
                </li>
                <li>
                  <Link href="/topics/physics/mechanics" className="text-primary hover:underline flex items-center">
                    <ChevronRight className="h-3 w-3 mr-1" />
                    Mechanics
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
                    <Link href="/resources/solved-problems?topic=integral-calculus" className="text-xs text-primary hover:underline">
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
                    <p className="text-xs text-muted-foreground mb-1">Books and articles on integral calculus</p>
                    <Link href="/resources/bibliography?topic=integral-calculus" className="text-xs text-primary hover:underline">
                      View bibliography
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
                    <Link href="/resources/tools/integration-calculator" className="text-xs text-primary hover:underline">
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
                alt="Integration visualization"
                fill
                className="object-cover"
              />
            </div>
            <CardContent className="pt-4">
              <p className="text-sm text-center text-muted-foreground">
                Visualization of a function (blue) and its integral (green)
              </p>
            </CardContent>
          </Card>

          {/* Formula Database Promo */}
          <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 border-blue-100 dark:border-blue-900">
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-2 flex items-center">
                <FileText className="h-4 w-4 mr-2 text-primary" />
                Formula Database
              </h3>
              <p className="text-sm text-muted-foreground mb-3">
                Access our comprehensive collection of mathematical formulas, including integration formulas and techniques.
              </p>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/resources/tools/formula-database">
                  Explore Formulas
                </Link>
              </Button>
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
                <h3 className="font-semibold mb-1">Next Topic</h3>
                <Link href="/topics/mathematics/differential-equations" className="text-primary hover:underline text-lg">
                  Differential Equations
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  Learn about equations involving derivatives and their applications
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
                <Link href="/topics/physics/mechanics" className="text-primary hover:underline text-lg">
                  Mechanics
                </Link>
                <p className="text-sm text-muted-foreground mt-1">
                  See how integral calculus is applied in physics and engineering
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
// code to be reviewed and solved code alpha0001