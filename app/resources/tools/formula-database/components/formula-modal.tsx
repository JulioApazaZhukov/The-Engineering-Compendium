"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy } from "lucide-react"
import { MathDisplay } from "@/components/math-display"
import { useLanguage } from "@/components/language-provider"
import type { Formula } from "../types"
import { categories } from "../data/categories"

interface FormulaModalProps {
  formula: Formula | null
  isOpen: boolean
  onClose: () => void
}

export function FormulaModal({ formula, isOpen, onClose }: FormulaModalProps) {
  const { language } = useLanguage()

  if (!formula) return null

  // Find the category label in the current language
  const categoryLabel =
    categories.find((c) => c.value === formula.category)?.label[language as "en" | "es"] || formula.category

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
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <DialogTitle className="text-xl">{formula.title[language as "en" | "es"]}</DialogTitle>
            <Button variant="ghost" size="icon" onClick={() => copyToClipboard(formula.formula)}>
              <Copy className="h-4 w-4" />
              <span className="sr-only">{language === "es" ? "Copiar fórmula" : "Copy formula"}</span>
            </Button>
          </div>
          <div className="flex flex-wrap gap-1 mt-1">
            <Badge variant="secondary">{categoryLabel}</Badge>
            <Badge variant="outline">{formula.subcategory}</Badge>
          </div>
        </DialogHeader>

        <div className="bg-muted/50 p-4 rounded-md my-4 overflow-x-auto">
          <div className="flex justify-center">
            <MathDisplay math={formula.formula} />
          </div>
        </div>

        <DialogDescription className="text-base mt-4">{formula.description[language as "en" | "es"]}</DialogDescription>

        {formula.example && (
          <div className="mt-4">
            <h4 className="font-medium mb-2">{language === "es" ? "Ejemplo:" : "Example:"}</h4>
            <div className="bg-muted/30 p-3 rounded-md overflow-x-auto">
              <MathDisplay math={formula.example} />
            </div>
          </div>
        )}

        {formula.notes && (
          <div className="mt-4">
            <h4 className="font-medium mb-2">{language === "es" ? "Notas:" : "Notes:"}</h4>
            <p className="text-sm text-muted-foreground">{formula.notes[language as "en" | "es"]}</p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
