"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, ExternalLink, Star, StarHalf } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import type { Book } from "../data/books"

interface BookCardProps {
  book: Book
  viewType: "grid" | "list"
}

export function BookCard({ book, viewType }: BookCardProps) {
  const { language } = useLanguage()
  const [expanded, setExpanded] = useState(false)

  // Function to render stars based on rating
  const renderRating = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-primary text-primary" />)
    }

    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-primary text-primary" />)
    }

    const emptyStars = 5 - stars.length
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-muted-foreground" />)
    }

    return stars
  }

  // Function to render difficulty level
  const renderDifficulty = (level: number) => {
    const difficultyText = {
      1: { en: "Beginner", es: "Principiante" },
      2: { en: "Beginner-Intermediate", es: "Principiante-Intermedio" },
      3: { en: "Intermediate", es: "Intermedio" },
      4: { en: "Intermediate-Advanced", es: "Intermedio-Avanzado" },
      5: { en: "Advanced", es: "Avanzado" },
    }

    return difficultyText[level as keyof typeof difficultyText][language as "en" | "es"]
  }

  if (viewType === "grid") {
    return (
      <Card className="overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
        <div className="relative aspect-[3/4] bg-muted">
          <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
        </div>
        <CardContent className="flex-grow flex flex-col p-4">
          <div className="space-y-2 mb-3">
            <div className="flex justify-between items-start gap-2">
              <h3 className="font-semibold line-clamp-2">{book.title}</h3>
              <Badge variant="outline" className="shrink-0">
                {book.year}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{book.author}</p>
            <div className="flex items-center gap-1">{renderRating(book.rating)}</div>
          </div>

          <div className="mt-auto space-y-3">
            <div className="text-sm">
              {expanded ? (
                <div>
                  <p className="mb-2">{book.description[language as "en" | "es"]}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto font-normal text-muted-foreground"
                    onClick={() => setExpanded(false)}
                  >
                    <ChevronUp className="h-4 w-4 mr-1" />
                    {language === "es" ? "Mostrar menos" : "Show less"}
                  </Button>
                </div>
              ) : (
                <div>
                  <p className="line-clamp-2">{book.description[language as "en" | "es"]}</p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="p-0 h-auto font-normal text-muted-foreground"
                    onClick={() => setExpanded(true)}
                  >
                    <ChevronDown className="h-4 w-4 mr-1" />
                    {language === "es" ? "Mostrar más" : "Show more"}
                  </Button>
                </div>
              )}
            </div>

            <div className="flex flex-wrap gap-1">
              {book.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {book.tags.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{book.tags.length - 3}
                </Badge>
              )}
            </div>

            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>
                {book.pages} {language === "es" ? "páginas" : "pages"}
              </span>
              <span>{renderDifficulty(book.difficulty)}</span>
            </div>

            {book.link && (
              <Button className="w-full mt-2" size="sm">
                {language === "es" ? "Ver Detalles" : "View Details"}
                <ExternalLink className="h-3.5 w-3.5 ml-1" />
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    )
  }

  // List view
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex flex-col sm:flex-row">
        <div className="relative w-full sm:w-[120px] aspect-[3/4] sm:aspect-auto bg-muted">
          <Image src={book.coverImage || "/placeholder.svg"} alt={book.title} fill className="object-cover" />
        </div>
        <CardContent className="flex-grow p-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow space-y-2">
              <div className="flex justify-between items-start gap-2">
                <h3 className="font-semibold">{book.title}</h3>
                <Badge variant="outline" className="shrink-0">
                  {book.year}
                </Badge>
              </div>
              <p className="text-sm text-muted-foreground">{book.author}</p>
              <div className="flex items-center gap-1">{renderRating(book.rating)}</div>

              <div className="text-sm">
                {expanded ? (
                  <div>
                    <p className="mb-2">{book.description[language as "en" | "es"]}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-normal text-muted-foreground"
                      onClick={() => setExpanded(false)}
                    >
                      <ChevronUp className="h-4 w-4 mr-1" />
                      {language === "es" ? "Mostrar menos" : "Show less"}
                    </Button>
                  </div>
                ) : (
                  <div>
                    <p className="line-clamp-2">{book.description[language as "en" | "es"]}</p>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="p-0 h-auto font-normal text-muted-foreground"
                      onClick={() => setExpanded(true)}
                    >
                      <ChevronDown className="h-4 w-4 mr-1" />
                      {language === "es" ? "Mostrar más" : "Show more"}
                    </Button>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1">
                {book.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-row sm:flex-col justify-between sm:justify-start items-end gap-4">
              <div className="text-xs text-muted-foreground space-y-1">
                <div className="text-right">
                  {book.pages} {language === "es" ? "páginas" : "pages"}
                </div>
                <div className="text-right">{renderDifficulty(book.difficulty)}</div>
              </div>

              {book.link && (
                <Button size="sm">
                  {language === "es" ? "Ver Detalles" : "View Details"}
                  <ExternalLink className="h-3.5 w-3.5 ml-1" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
