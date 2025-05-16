"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "@/components/language-provider"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { BookOpen, Search, Filter, SlidersHorizontal, X, ChevronUp } from "lucide-react"
import { BookCard } from "./components/book-card"
import { books } from "./data/books"

export default function BibliographyPage() {
  const { language } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")
  const [filteredBooks, setFilteredBooks] = useState(books)
  const [showFilters, setShowFilters] = useState(false)
  const [difficultyRange, setDifficultyRange] = useState([1, 5])
  const [yearRange, setYearRange] = useState([1950, 2023])
  const [showScrollTop, setShowScrollTop] = useState(false)

  // Categories for the tabs
  const categories = [
    { id: "all", name: { en: "All Books", es: "Todos los Libros" } },
    { id: "mathematics", name: { en: "Mathematics", es: "Matemáticas" } },
    { id: "physics", name: { en: "Physics", es: "Física" } },
    { id: "engineering", name: { en: "Engineering", es: "Ingeniería" } },
    { id: "computer-science", name: { en: "Computer Science", es: "Informática" } },
    { id: "reference", name: { en: "Reference", es: "Referencia" } },
  ]

  // Filter books based on search query and selected category
  useEffect(() => {
    let filtered = books

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (book) =>
          book.title.toLowerCase().includes(query) ||
          book.author.toLowerCase().includes(query) ||
          book.description[language as "en" | "es"].toLowerCase().includes(query) ||
          book.tags.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    // Filter by category
    if (activeCategory !== "all") {
      filtered = filtered.filter((book) => book.category === activeCategory)
    }

    // Filter by difficulty
    filtered = filtered.filter((book) => book.difficulty >= difficultyRange[0] && book.difficulty <= difficultyRange[1])

    // Filter by year
    filtered = filtered.filter((book) => book.year >= yearRange[0] && book.year <= yearRange[1])

    setFilteredBooks(filtered)
  }, [searchQuery, activeCategory, difficultyRange, yearRange, language])

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  // Show scroll to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Reset filters
  const resetFilters = () => {
    setSearchQuery("")
    setActiveCategory("all")
    setDifficultyRange([1, 5])
    setYearRange([1950, 2023])
  }

  return (
    <div className="container py-8 relative">
      <div className="space-y-6">
        <div className="text-center space-y-2 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight">
            {language === "en" ? "Engineering Compendium Bibliography" : "Bibliografía del Compendio de Ingeniería"}
          </h1>
          <p className="text-muted-foreground">
            {language === "en"
              ? "A curated collection of essential books for engineering and science students and professionals."
              : "Una colección seleccionada de libros esenciales para estudiantes y profesionales de ingeniería y ciencias."}
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-muted/50 p-6 rounded-lg space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder={language === "es" ? "Buscar libros..." : "Search books..."}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              {searchQuery && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-6 w-6"
                  onClick={() => setSearchQuery("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <Button variant="outline" className="flex items-center gap-2" onClick={() => setShowFilters(!showFilters)}>
              <SlidersHorizontal className="h-4 w-4" />
              {language === "es" ? "Filtros" : "Filters"}
            </Button>
          </div>

          {showFilters && (
            <div className="space-y-4 pt-2 border-t">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">
                    {language === "es" ? "Nivel de Dificultad" : "Difficulty Level"}
                  </h3>
                  <Slider
                    defaultValue={difficultyRange}
                    min={1}
                    max={5}
                    step={1}
                    onValueChange={(value) => setDifficultyRange(value as [number, number])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>{language === "es" ? "Principiante" : "Beginner"}</span>
                    <span>{language === "es" ? "Intermedio" : "Intermediate"}</span>
                    <span>{language === "es" ? "Avanzado" : "Advanced"}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">
                    {language === "es" ? "Año de Publicación" : "Publication Year"}
                  </h3>
                  <Slider
                    defaultValue={yearRange}
                    min={1950}
                    max={2023}
                    step={1}
                    onValueChange={(value) => setYearRange(value as [number, number])}
                    className="py-4"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>1950</span>
                    <span>1980</span>
                    <span>2000</span>
                    <span>2023</span>
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <Button variant="outline" size="sm" onClick={resetFilters}>
                  {language === "es" ? "Restablecer Filtros" : "Reset Filters"}
                </Button>
              </div>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm font-medium">{language === "es" ? "Categorías:" : "Categories:"}</span>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className="cursor-pointer hover:bg-primary/10"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name[language as "en" | "es"]}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Books Section */}
        <Tabs defaultValue="grid" className="w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              {filteredBooks.length}{" "}
              {filteredBooks.length === 1
                ? language === "es"
                  ? "Libro"
                  : "Book"
                : language === "es"
                  ? "Libros"
                  : "Books"}{" "}
              {language === "es" ? "Encontrados" : "Found"}
            </h2>
            <TabsList>
              <TabsTrigger value="grid">{language === "es" ? "Cuadrícula" : "Grid"}</TabsTrigger>
              <TabsTrigger value="list">{language === "es" ? "Lista" : "List"}</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="grid" className="mt-0">
            {filteredBooks.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} viewType="grid" />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">
                  {language === "es" ? "No se encontraron libros" : "No books found"}
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {language === "es"
                    ? "Intenta ajustar tus filtros o buscar con términos diferentes."
                    : "Try adjusting your filters or searching with different terms."}
                </p>
                <Button variant="outline" className="mt-4" onClick={resetFilters}>
                  {language === "es" ? "Restablecer Filtros" : "Reset Filters"}
                </Button>
              </div>
            )}
          </TabsContent>

          <TabsContent value="list" className="mt-0">
            {filteredBooks.length > 0 ? (
              <div className="space-y-4">
                {filteredBooks.map((book) => (
                  <BookCard key={book.id} book={book} viewType="list" />
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-lg">
                <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-medium mb-2">
                  {language === "es" ? "No se encontraron libros" : "No books found"}
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  {language === "es"
                    ? "Intenta ajustar tus filtros o buscar con términos diferentes."
                    : "Try adjusting your filters or searching with different terms."}
                </p>
                <Button variant="outline" className="mt-4" onClick={resetFilters}>
                  {language === "es" ? "Restablecer Filtros" : "Reset Filters"}
                </Button>
              </div>
            )}
          </TabsContent>
        </Tabs>
      </div>

      {/* Scroll to top button */}
      {showScrollTop && (
        <Button
          variant="outline"
          size="icon"
          className="fixed bottom-6 right-6 rounded-full shadow-md"
          onClick={scrollToTop}
        >
          <ChevronUp className="h-5 w-5" />
        </Button>
      )}
    </div>
  )
}
