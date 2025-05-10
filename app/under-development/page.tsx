"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useLanguage } from "@/components/language-provider"
import { useRouter } from "next/navigation"
import { ArrowLeft, Construction } from "lucide-react"

export default function UnderDevelopmentPage() {
  const { language } = useLanguage()
  const router = useRouter()

  // Content in both languages
  const content = {
    en: {
      title: "Page Under Development",
      message: "We're working hard to bring you this content soon.",
      description: "This section is currently being developed. Please check back later for updates.",
      backButton: "Go Back",
    },
    es: {
      title: "Página En Desarrollo",
      message: "Estamos trabajando arduamente para traerte este contenido pronto.",
      description: "Esta sección está actualmente en desarrollo. Por favor, vuelve más tarde para ver actualizaciones.",
      backButton: "Volver",
    },
  }

  // Use the appropriate language
  const t = content[language as keyof typeof content] || content.en

  return (
    <div className="container py-12">
      <Button variant="ghost" className="mb-6 flex items-center gap-2" onClick={() => router.back()}>
        <ArrowLeft className="h-4 w-4" />
        {t.backButton}
      </Button>

      <Card className="max-w-3xl mx-auto">
        <CardContent className="pt-10 pb-12 px-8 text-center">
          <div className="flex justify-center mb-6">
            <Construction className="h-16 w-16 text-yellow-500" />
          </div>
          <h1 className="text-3xl font-bold mb-4">{t.title}</h1>
          <p className="text-xl mb-4">{t.message}</p>
          <p className="text-muted-foreground">{t.description}</p>
        </CardContent>
      </Card>
    </div>
  )
}
