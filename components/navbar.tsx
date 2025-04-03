"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { useLanguage } from "./language-provider"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Moon, Sun, ChevronDown, Globe } from "lucide-react"
import { cn } from "@/lib/utils"

const topics = [
  {
    name: "Mathematics",
    href: "/topics/mathematics",
    subtopics: [
      "Differential Calculus",
      "Integral Calculus",
      "Linear Algebra",
      "Differential Equations",
      "Probability & Statistics",
      "Numerical Methods",
    ],
  },
  {
    name: "Physics",
    href: "/topics/physics",
    subtopics: ["Classical Mechanics", "Thermodynamics", "Electromagnetism", "Optics", "Modern Physics"],
  },
  {
    name: "Materials Engineering",
    href: "/topics/materials",
    subtopics: ["Material Properties", "Composite Materials", "Metallic & Ceramic Materials", "Polymers"],
  },
  {
    name: "Mechanical Engineering",
    href: "/topics/mechanical",
    subtopics: ["Machine Dynamics", "Heat Transfer", "Mechanical Design"],
  },
  {
    name: "Electrical & Electronics Engineering",
    href: "/topics/electrical",
    subtopics: ["Electrical Circuits", "Digital Electronics", "Control Systems", "Signals & Systems"],
  },
  {
    name: "Software Engineering",
    href: "/topics/software",
    subtopics: ["Algorithms & Data Structures", "Python Programming", "Databases", "Web Development"],
  },
  {
    name: "Industrial Engineering",
    href: "/topics/industrial",
    subtopics: ["Optimization", "Lean Manufacturing", "Logistics & Supply Chain", "Process Simulation"],
  },
]

const resources = [
  { name: "Tutorials", href: "/resources/tutorials" },
  { name: "Solved Problems", href: "/resources/solved-problems" },
  { name: "Recommended Bibliography", href: "/resources/bibliography" },
  { name: "Online Tools", href: "/resources/tools" },
]

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        isScrolled
          ? "border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
          : "bg-background",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight">The Engineering Compendium</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-2">
                  {t("nav.topics")}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {topics.map((topic) => (
                  <DropdownMenuItem key={topic.name} asChild>
                    <Link href={topic.href}>{topic.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 px-2">
                  {t("nav.resources")}
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                {resources.map((resource) => (
                  <DropdownMenuItem key={resource.name} asChild>
                    <Link href={resource.href}>{resource.name}</Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/blog" className="text-muted-foreground transition-colors hover:text-foreground">
              {t("nav.blog")}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-5 w-5" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>English {language === "en" && "✓"}</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("es")}>Español {language === "es" && "✓"}</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn("transition-transform", isMobileMenuOpen ? "rotate-90" : "rotate-0")}
            >
              {isMobileMenuOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="4" y1="12" x2="20" y2="12" />
                  <line x1="4" y1="6" x2="20" y2="6" />
                  <line x1="4" y1="18" x2="20" y2="18" />
                </>
              )}
            </svg>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t p-4">
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-2">{t("nav.topics")}</h3>
              <ul className="space-y-2 pl-2">
                {topics.map((topic) => (
                  <li key={topic.name}>
                    <Link
                      href={topic.href}
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {topic.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-2">{t("nav.resources")}</h3>
              <ul className="space-y-2 pl-2">
                {resources.map((resource) => (
                  <li key={resource.name}>
                    <Link
                      href={resource.href}
                      className="text-muted-foreground hover:text-foreground"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {resource.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t("nav.blog")}
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
