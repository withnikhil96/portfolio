"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" disabled className="w-9 h-9">
        <Sun className="h-4 w-4" />
      </Button>
    )
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-9 h-9 relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
        style={{ transform: theme === "dark" ? "translateY(-100%)" : "translateY(0)" }}
      >
        <Sun className="h-4 w-4" />
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center transition-transform duration-500"
        style={{ transform: theme === "dark" ? "translateY(0)" : "translateY(100%)" }}
      >
        <Moon className="h-4 w-4" />
      </div>
    </Button>
  )
}

