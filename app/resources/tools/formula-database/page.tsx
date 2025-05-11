"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BookOpen } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import type { Formula } from "./types"
import { formulas } from "./data/formulas"
import { subcategories } from "./data/categories"
import { FormulaCard } from "./components/formula-card"
import { FormulaModal } from "./components/formula-modal"
import { SearchFilters } from "./components/search-filters"

export default function FormulaDatabase() {
  const { t, language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [activeSubcategory, setActiveSubcategory] = useState("all")
  const [filteredFormulas, setFilteredFormulas] = useState<Formula[]>([])
  const [availableSubcategories, setAvailableSubcategories] = useState(subcategories.calculus)
  const [selectedFormula, setSelectedFormula] = useState<Formula | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Update subcategories when category changes
  useEffect(() => {
    if (activeCategory === "all") {
      setAvailableSubcategories([
        {
          value: "all",
          label: {
            en: "All Subcategories",
            es: "Todas las Subcategorías",
          },
        },
      ])
    } else {
      setAvailableSubcategories(subcategories[activeCategory as keyof typeof subcategories] || [])
    }
    setActiveSubcategory("all")
  }, [activeCategory])

  // Filter formulas based on search query and selected category/subcategory
  useEffect(() => {
    let filtered = formulas

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (formula) =>
          formula.title.en.toLowerCase().includes(query) ||
          formula.title.es.toLowerCase().includes(query) ||
          formula.description.en.toLowerCase().includes(query) ||
          formula.description.es.toLowerCase().includes(query) ||
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

  // Initialize filtered formulas
  useEffect(() => {
    setFilteredFormulas(formulas)
  }, [])

  // Handle formula card click
  const handleFormulaClick = (formula: Formula) => {
    setSelectedFormula(formula)
    setIsModalOpen(true)
  }

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">{t("formula.title")}</h1>
          <p className="text-muted-foreground">{t("formula.subtitle")}</p>
        </div>

        {/* Search and Filter Section */}
        <SearchFilters
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          activeSubcategory={activeSubcategory}
          setActiveSubcategory={setActiveSubcategory}
          availableSubcategories={availableSubcategories}
        />

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
          </div>

          {filteredFormulas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFormulas.map((formula) => (
                <FormulaCard key={formula.id} formula={formula} onClick={() => handleFormulaClick(formula)} />
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

        {/* Formula Modal */}
        <FormulaModal formula={selectedFormula} isOpen={isModalOpen} onClose={handleCloseModal} />

        {/* Suggestion Section */}
        {/* <div className="bg-muted/50 p-6 rounded-lg text-center">
          <h3 className="text-lg font-medium mb-2">{t("formula.suggest")}</h3>
          <p className="text-muted-foreground mb-4">{t("formula.suggest_desc")}</p>
          <Button>{t("formula.suggest_button")}</Button>
        </div> */}
      </div>
    </div>
  )
}
