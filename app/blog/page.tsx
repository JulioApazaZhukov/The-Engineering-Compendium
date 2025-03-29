"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"
import Link from "next/link"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "Understanding Finite Element Analysis in Structural Engineering",
    excerpt: "An introduction to FEA methods and their applications in analyzing complex structures.",
    image: "/placeholder.svg?height=200&width=400",
    category: "mechanical",
    date: "March 15, 2023",
    author: "Dr. Sarah Johnson",
    readTime: "8 min read",
  },
  {
    id: 2,
    title: "Machine Learning Applications in Process Control Systems",
    excerpt: "How AI and machine learning are revolutionizing industrial process control and optimization.",
    image: "/placeholder.svg?height=200&width=400",
    category: "software",
    date: "February 28, 2023",
    author: "Prof. Michael Chen",
    readTime: "12 min read",
  },
  {
    id: 3,
    title: "Advances in Composite Materials for Aerospace Applications",
    excerpt: "Recent developments in lightweight, high-strength composite materials for aircraft and spacecraft.",
    image: "/placeholder.svg?height=200&width=400",
    category: "materials",
    date: "January 10, 2023",
    author: "Dr. Emily Rodriguez",
    readTime: "10 min read",
  },
  {
    id: 4,
    title: "Sustainable Energy Systems: Integrating Renewables into the Grid",
    excerpt: "Challenges and solutions for incorporating renewable energy sources into existing power grids.",
    image: "/placeholder.svg?height=200&width=400",
    category: "electrical",
    date: "December 5, 2022",
    author: "Prof. James Wilson",
    readTime: "15 min read",
  },
  {
    id: 5,
    title: "Numerical Methods for Solving Partial Differential Equations",
    excerpt: "A comprehensive guide to computational approaches for complex engineering problems.",
    image: "/placeholder.svg?height=200&width=400",
    category: "mathematics",
    date: "November 20, 2022",
    author: "Dr. Lisa Patel",
    readTime: "14 min read",
  },
  {
    id: 6,
    title: "Optimization Techniques in Supply Chain Management",
    excerpt: "Mathematical models and algorithms for efficient logistics and inventory control.",
    image: "/placeholder.svg?height=200&width=400",
    category: "industrial",
    date: "October 8, 2022",
    author: "Prof. Robert Kim",
    readTime: "9 min read",
  },
]

const categories = [
  { value: "all", label: "All Categories" },
  { value: "mathematics", label: "Mathematics" },
  { value: "physics", label: "Physics" },
  { value: "materials", label: "Materials" },
  { value: "mechanical", label: "Mechanical" },
  { value: "electrical", label: "Electrical" },
  { value: "software", label: "Software" },
  { value: "industrial", label: "Industrial" },
]

export default function BlogPage() {
  const { t } = useLanguage()
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Engineering Blog</h1>
          <p className="text-muted-foreground">
            Explore the latest articles, insights, and tutorials on engineering topics
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
          <div className="w-full md:w-auto">
            <Input
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-[300px]"
            />
          </div>

          <Tabs
            defaultValue="all"
            value={activeCategory}
            onValueChange={setActiveCategory}
            className="w-full md:w-auto"
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 h-auto">
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value} className="text-xs md:text-sm">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden flex flex-col h-full">
                <div className="relative h-48 w-full">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded bg-primary/10 text-primary">
                      {categories.find((c) => c.value === post.category)?.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{post.date}</span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{post.author}</span>
                    <span className="text-xs text-muted-foreground">•</span>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto" asChild>
                    <Link href={`/blog/${post.id}`} className="flex items-center text-primary">
                      Read article
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-2 h-4 w-4"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium mb-2">No articles found</h3>
            <p className="text-muted-foreground">
              Try adjusting your search or filter to find what you're looking for.
            </p>
          </div>
        )}

        <div className="flex justify-center mt-8">
          <Button variant="outline">Load More Articles</Button>
        </div>
      </div>
    </div>
  )
}

