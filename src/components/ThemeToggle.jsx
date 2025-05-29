"use client"

import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    }
  }, [])

  const toggle = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
      setIsDarkMode(true)
    }
  }

  return (
    <button
      onClick={toggle}
      className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full duration-300",
        "focus:outline-none bg-card border border-border hover:bg-primary/10",
        "flex items-center justify-center w-10 h-10",
      )}
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        {isDarkMode ? (
          <Sun key="sun" className="h-6 w-6 text-yellow-400 animate-in spin-in-180 duration-300" />
        ) : (
          <Moon key="moon" className="h-6 w-6 text-blue-600 animate-in spin-in-180 duration-300" />
        )}
      </div>
    </button>
  )
}