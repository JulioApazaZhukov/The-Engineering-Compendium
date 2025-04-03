"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Search, Filter } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { categories } from "../data/categories"

interface SearchFiltersProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
  activeCategory: string
  setActiveCategory: (category: string) => void
  activeSubcategory: string
  setActiveSubcategory: (subcategory: string) => void
  availableSubcategories: any[]
}

export function SearchFilters({
  searchQuery,
  setSearchQuery,
  activeCategory,
  setActiveCategory,
  activeSubcategory,
  setActiveSubcategory,
  availableSubcategories,
}: SearchFiltersProps) {
  const { language } = useLanguage()

  return (
    <div className="bg-muted/50 p-6 rounded-lg space-y-4">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder={language === "es" ? "Buscar fórmulas..." : "Search formulas..."}
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
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label[language as "en" | "es"]}
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
                  {subcategory.label[language as "en" | "es"]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-muted-foreground" />
        <span className="text-sm font-medium">{language === "es" ? "Filtros Rápidos:" : "Quick Filters:"}</span>
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
          {/* New category quick filters */}
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-primary/10"
            onClick={() => setActiveCategory("physics")}
          >
            {language === "es" ? "Física" : "Physics"}
          </Badge>
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-primary/10"
            onClick={() => setActiveCategory("statistics")}
          >
            {language === "es" ? "Estadística" : "Statistics"}
          </Badge>
          <Badge
            variant="outline"
            className="cursor-pointer hover:bg-primary/10"
            onClick={() => setActiveCategory("geometry")}
          >
            {language === "es" ? "Geometría" : "Geometry"}
          </Badge>
        </div>
      </div>
    </div>
  )
}
