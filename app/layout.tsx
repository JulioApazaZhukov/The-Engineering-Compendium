import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import { LanguageProvider } from "@/components/language-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "The Engineering Compendium",
  description: "A comprehensive resource for engineering education",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <footer className="border-t py-6 md:py-8">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                  <p className="text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} The Engineering Compendium. All rights reserved.
                  </p>
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-sm text-muted-foreground hover:underline">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-sm text-muted-foreground hover:underline">
                      Terms of Service
                    </a>
                    <a href="#" className="text-sm text-muted-foreground hover:underline">
                      Contact
                    </a>
                  </div>
                </div>
              </footer>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

