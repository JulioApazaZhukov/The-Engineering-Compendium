"use client"

import { useEffect, useRef } from "react"

interface MathDisplayProps {
  math: string
  display?: boolean
}

declare global {
  interface Window {
    katex: any
  }
}

export function MathDisplay({ math, display = true }: MathDisplayProps) {
  const containerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    // Load KaTeX if it's not already loaded
    if (!window.katex) {
      const script = document.createElement("script")
      script.src = "https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"
      script.integrity = "sha384-cpW21h6RZv/phavutF+AuVYrr+dA8xD9zs6FwLpaCct6O9ctzYFfFr4dgmgccOTx"
      script.crossOrigin = "anonymous"
      script.async = true
      script.onload = () => renderMath()
      document.head.appendChild(script)
    } else {
      renderMath()
    }

    function renderMath() {
      if (containerRef.current && window.katex) {
        try {
          window.katex.render(math, containerRef.current, {
            displayMode: display,
            throwOnError: false,
          })
        } catch (error) {
          console.error("KaTeX rendering error:", error)
        }
      }
    }
  }, [math, display])

  return <span ref={containerRef} className={display ? "block my-4" : "inline-block"} />
}
