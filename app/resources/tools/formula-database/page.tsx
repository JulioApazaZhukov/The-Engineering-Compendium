"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter, Copy, BookOpen } from "lucide-react"
import { MathDisplay } from "@/components/math-display"
import { useLanguage } from "@/components/language-provider"

// Formula data structure
interface Formula {
  id: string
  title: string
  formula: string
  category: string
  subcategory: string
  description: string
  tags: string[]
}

// Sample formula data
const formulas: Formula[] = [
  {
    id: "diff-power-rule",
    title: "Power Rule",
    formula: "\\frac{d}{dx}[x^n] = nx^{n-1}",
    category: "calculus",
    subcategory: "differentiation",
    description: "The derivative of x raised to a power n is n times x raised to the power n-1.",
    tags: ["differentiation", "power", "basic"],
  },
  {
    id: "diff-product-rule",
    title: "Product Rule",
    formula: "\\frac{d}{dx}[f(x) \\cdot g(x)] = f(x) \\cdot \\frac{d}{dx}[g(x)] + g(x) \\cdot \\frac{d}{dx}[f(x)]",
    category: "calculus",
    subcategory: "differentiation",
    description:
      "The derivative of a product of two functions is the first function times the derivative of the second, plus the second function times the derivative of the first.",
    tags: ["differentiation", "product", "intermediate"],
  },
  {
    id: "diff-quotient-rule",
    title: "Quotient Rule",
    formula:
      "\\frac{d}{dx}\\left[\\frac{f(x)}{g(x)}\\right] = \\frac{g(x) \\cdot \\frac{d}{dx}[f(x)] - f(x) \\cdot \\frac{d}{dx}[g(x)]}{[g(x)]^2}",
    category: "calculus",
    subcategory: "differentiation",
    description: "The derivative of a quotient of two functions follows this formula where the denominator is squared.",
    tags: ["differentiation", "quotient", "intermediate"],
  },
  {
    id: "diff-chain-rule",
    title: "Chain Rule",
    formula: "\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)",
    category: "calculus",
    subcategory: "differentiation",
    description:
      "The derivative of a composite function is the derivative of the outer function evaluated at the inner function, multiplied by the derivative of the inner function.",
    tags: ["differentiation", "chain", "intermediate"],
  },
  {
    id: "int-basic",
    title: "Basic Integration",
    formula: "\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C, \\quad n \\neq -1",
    category: "calculus",
    subcategory: "integration",
    description:
      "The integral of x raised to a power n is x raised to the power n+1 divided by n+1, plus a constant of integration. This rule does not apply when n = -1.",
    tags: ["integration", "power", "basic"],
  },
  {
    id: "int-parts",
    title: "Integration by Parts",
    formula: "\\int u \\, dv = uv - \\int v \\, du",
    category: "calculus",
    subcategory: "integration",
    description: "A technique for integrating products of functions, based on the product rule for differentiation.",
    tags: ["integration", "parts", "intermediate"],
  },
  {
    id: "int-substitution",
    title: "Integration by Substitution",
    formula: "\\int f(g(x))g'(x) \\, dx = \\int f(u) \\, du, \\quad \\text{where} \\quad u = g(x)",
    category: "calculus",
    subcategory: "integration",
    description:
      "A method for simplifying integrals by substituting a new variable, based on the chain rule for differentiation.",
    tags: ["integration", "substitution", "intermediate"],
  },
  {
    id: "trig-pythagorean",
    title: "Pythagorean Identity",
    formula: "\\sin^2(x) + \\cos^2(x) = 1",
    category: "trigonometry",
    subcategory: "identities",
    description: "The fundamental trigonometric identity relating sine and cosine functions.",
    tags: ["trigonometry", "identity", "basic"],
  },
  {
    id: "trig-double-angle-sin",
    title: "Double Angle Formula (Sine)",
    formula: "\\sin(2x) = 2\\sin(x)\\cos(x)",
    category: "trigonometry",
    subcategory: "identities",
    description: "Formula for the sine of twice an angle in terms of the sine and cosine of the original angle.",
    tags: ["trigonometry", "identity", "double angle"],
  },
  {
    id: "trig-double-angle-cos",
    title: "Double Angle Formula (Cosine)",
    formula: "\\cos(2x) = \\cos^2(x) - \\sin^2(x) = 2\\cos^2(x) - 1 = 1 - 2\\sin^2(x)",
    category: "trigonometry",
    subcategory: "identities",
    description: "Formula for the cosine of twice an angle in terms of the sine and cosine of the original angle.",
    tags: ["trigonometry", "identity", "double angle"],
  },
  {
    id: "algebra-quadratic",
    title: "Quadratic Formula",
    formula: "x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}, \\quad \\text{for} \\quad ax^2 + bx + c = 0",
    category: "algebra",
    subcategory: "equations",
    description: "Formula for finding the roots of a quadratic equation.",
    tags: ["algebra", "quadratic", "basic"],
  },
  {
    id: "algebra-binomial",
    title: "Binomial Theorem",
    formula: "(a + b)^n = \\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k",
    category: "algebra",
    subcategory: "expansions",
    description: "Formula for expanding a binomial raised to a power.",
    tags: ["algebra", "binomial", "intermediate"],
  },
]

// Categories and subcategories for filtering
const categories = [
  { value: "all", label: "All Categories" },
  { value: "calculus", label: "Calculus" },
  { value: "trigonometry", label: "Trigonometry" },
  { value: "algebra", label: "Algebra" },
  { value: "geometry", label: "Geometry" },
  { value: "statistics", label: "Statistics" },
]

const categoriesEs = [
  { value: "all", label: "Todas las Categorías" },
  { value: "calculus", label: "Cálculo" },
  { value: "trigonometry", label: "Trigonometría" },
  { value: "algebra", label: "Álgebra" },
  { value: "geometry", label: "Geometría" },
  { value: "statistics", label: "Estadística" },
]

const subcategories = {
  calculus: [
    { value: "all", label: "All Subcategories" },
    { value: "differentiation", label: "Differentiation" },
    { value: "integration", label: "Integration" },
    { value: "limits", label: "Limits" },
    { value: "series", label: "Series" },
  ],
  trigonometry: [
    { value: "all", label: "All Subcategories" },
    { value: "identities", label: "Identities" },
    { value: "functions", label: "Functions" },
    { value: "equations", label: "Equations" },
  ],
  algebra: [
    { value: "all", label: "All Subcategories" },
    { value: "equations", label: "Equations" },
    { value: "expansions", label: "Expansions" },
    { value: "factorization", label: "Factorization" },
  ],
  geometry: [
    { value: "all", label: "All Subcategories" },
    { value: "plane", label: "Plane Geometry" },
    { value: "solid", label: "Solid Geometry" },
    { value: "analytic", label: "Analytic Geometry" },
  ],
  statistics: [
    { value: "all", label: "All Subcategories" },
    { value: "descriptive", label: "Descriptive Statistics" },
    { value: "probability", label: "Probability" },
    { value: "distributions", label: "Distributions" },
  ],
}

const subcategoriesEs = {
  calculus: [
    { value: "all", label: "Todas las Subcategorías" },
    { value: "differentiation", label: "Diferenciación" },
    { value: "integration", label: "Integración" },
    { value: "limits", label: "Límites" },
    { value: "series", label: "Series" },
  ],
  trigonometry: [
    { value: "all", label: "Todas las Subcategorías" },
    { value: "identities", label: "Identidades" },
    { value: "functions", label: "Funciones" },
    { value: "equations", label: "Ecuaciones" },
  ],
  algebra: [
    { value: "all", label: "Todas las Subcategorías" },
    { value: "equations", label: "Ecuaciones" },
    { value: "expansions", label: "Expansiones" },
    { value: "factorization", label: "Factorización" },
  ],
  geometry: [
    { value: "all", label: "Todas las Subcategorías" },
    { value: "plane", label: "Geometría Plana" },
    { value: "solid", label: "Geometría Sólida" },
    { value: "analytic", label: "Geometría Analítica" },
  ],
  statistics: [
    { value: "all", label: "Todas las Subcategorías" },
    { value: "descriptive", label: "Estadística Descriptiva" },
    { value: "probability", label: "Probabilidad" },
    { value: "distributions", label: "Distribuciones" },
  ],
}

export default function FormulaDatabase() {
  const { t, language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSubcategory, setActiveSubcategory] = useState("all")
  const [filteredFormulas, setFilteredFormulas] = useState<Formula[]>(formulas)
  const [availableSubcategories, setAvailableSubcategories] = useState(subcategories.calculus)

  // Update subcategories when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setAvailableSubcategories([
        { value: "all", label: language === "es" ? "Todas las Subcategorías" : "All Subcategories" },
      ])
    } else {
      setAvailableSubcategories(
        language === "es"
          ? subcategoriesEs[activeCategory as keyof typeof subcategoriesEs] || []
          : subcategories[activeCategory as keyof typeof subcategories] || [],
      )
    }
    setActiveSubcategory("all")
  }, [activeCategory, language])

  // Filter formulas based on search query and selected category/subcategory
  useEffect(() => {
    let filtered = formulas

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (formula) =>
          formula.title.toLowerCase().includes(query) ||
          formula.description.toLowerCase().includes(query) ||
          formula.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((formula) => formula.category === activeCategory)
    }

    // Filter by subcategory
    if (activeSubcategory !== "all") {
      filtered = filtered.filter((formula) => formula.subcategory === activeSubcategory)
    }

    setFilteredFormulas(filtered)
  }, [searchQuery, activeCategory, activeSubcategory])

  // Copy formula to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert(language === "es" ? "¡Fórmula copiada al portapapeles!" : "Formula copied to clipboard!")
      })
      .catch((err) => {
        console.error("Failed to copy formula: ", err)
      })
  }

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{t("formula.title")}</h1>
          <p className="text-muted-foreground">{t("formula.subtitle")}</p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-muted/50 p-6 rounded-lg space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={t("formula.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-2">
              <Select value={activeCategory} onValueChange={setActiveCategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder={language === "es" ? "Seleccionar Categoría" : "Select Category"} />
                </SelectTrigger>
                <SelectContent>
                  {(language === "es" ? categoriesEs : categories).map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={activeSubcategory} onValueChange={setActiveSubcategory}>
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder={language === "es" ? "Seleccionar Subcategoría" : "Select Subcategory"} />
                </SelectTrigger>
                <SelectContent>
                  {availableSubcategories.map((subcategory) => (
                    <SelectItem key={subcategory.value} value={subcategory.value}>
                      {subcategory.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{t("formula.filters")}</span>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => setActiveCategory("calculus")}
              >
                {language === "es" ? "Cálculo" : "Calculus"}
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => {
                  setActiveCategory("calculus")
                  setActiveSubcategory("differentiation")
                }}
              >
                {language === "es" ? "Diferenciación" : "Differentiation"}
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => {
                  setActiveCategory("calculus")
                  setActiveSubcategory("integration")
                }}
              >
                {language === "es" ? "Integración" : "Integration"}
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => setActiveCategory("trigonometry")}
              >
                {language === "es" ? "Trigonometría" : "Trigonometry"}
              </Badge>
              <Badge
                variant="outline"
                className="cursor-pointer hover:bg-primary/10"
                onClick={() => setActiveCategory("algebra")}
              >
                {language === "es" ? "Álgebra" : "Algebra"}
              </Badge>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {filteredFormulas.length}{" "}
              {filteredFormulas.length === 1
                ? language === "es"
                  ? "Fórmula"
                  : "Formula"
                : language === "es"
                  ? "Fórmulas"
                  : "Formulas"}{" "}
              {t("formula.results")}
            </h2>
            <Tabs defaultValue="grid" className="w-auto">
              <TabsList className="grid w-[120px] grid-cols-2">
                <TabsTrigger value="grid">{language === "es" ? "Tabla" : "Grid"}</TabsTrigger>
                <TabsTrigger value="list">{language === "es" ? "Lista" : "List"}</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          {filteredFormulas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFormulas.map((formula) => (
                <Card key={formula.id} className="overflow-hidden h-full flex flex-col">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{formula.title}</CardTitle>
                      <Button variant="ghost" size="icon" onClick={() => copyToClipboard(formula.formula)}>
                        <Copy className="h-4 w-4" />
                        <span className="sr-only">{language === "es" ? "Copiar fórmula" : "Copy formula"}</span>
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-1">
                      <Badge variant="secondary" className="text-xs">
                        {(language === "es" ? categoriesEs : categories).find((c) => c.value === formula.category)
                          ?.label || formula.category}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {formula.subcategory}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="bg-muted/50 p-3 rounded-md my-2 overflow-x-auto">
                      <MathDisplay math={formula.formula} />
                    </div>
                    <CardDescription className="text-sm mt-2">{formula.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-muted/30 rounded-lg">
              <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium mb-2">{t("formula.no_results")}</h3>
              <p className="text-muted-foreground max-w-md mx-auto">{t("formula.try_adjusting")}</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                  setActiveSubcategory("all")
                }}
              >
                {t("formula.reset")}
              </Button>
            </div>
          )}
        </div>

        {/* Suggestion Section */}
        <div className="bg-muted/50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-medium mb-2">{t("formula.suggest")}</h3>
          <p className="text-muted-foreground mb-4">{t("formula.suggest_desc")}</p>
          <Button>{t("formula.suggest_button")}</Button>
        </div>
      </div>
    </div>
  )
}

