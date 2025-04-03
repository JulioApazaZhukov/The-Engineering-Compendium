"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MathDisplay } from "@/components/math-display"
import { useLanguage } from "@/components/language-provider"
import type { Formula } from "../types"
import { categories } from "../data/categories"

interface FormulaCardProps {
  formula: Formula
  onClick: () => void
}

export function FormulaCard({ formula, onClick }: FormulaCardProps) {
  const { language } = useLanguage()

  // Find the category label in the current language
  const categoryLabel =
    categories.find((c) => c.value === formula.category)?.label[language as "en" | "es"] || formula.category

  return (
    <Card
      className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg">{formula.title[language as "en" | "es"]}</CardTitle>
        </div>
        <div className="flex flex-wrap gap-1 mt-1">
          <Badge variant="secondary" className="text-xs">
            {categoryLabel}
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
        <CardDescription className="text-sm mt-2">{formula.description[language as "en" | "es"]}</CardDescription>
      </CardContent>
    </Card>
  )
}
