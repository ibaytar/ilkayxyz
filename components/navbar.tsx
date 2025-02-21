"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

export function Navbar() {
  const { setTheme, theme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const showControls = !isMobile || (isMobile && !isScrolled)

  return (
    <>
      <motion.nav
        ref={navRef}
        className={cn(
          "fixed left-0 right-0 z-50 mx-auto w-[95%] max-w-6xl",
          "flex items-center justify-center rounded-full px-6 shadow-lg backdrop-blur-md border border-border transition-all duration-300 ease-in-out",
          isScrolled ? "bg-background/20" : "bg-background/20",
          "light:bg-white/70 light:backdrop-blur-md light:border-white/20",
        )}
        animate={{
          width: isScrolled ? (isMobile ? "40%" : "40%") : "95%",
          padding: isScrolled ? (isMobile ? "0.25rem 0.75rem" : "0.5rem 1.5rem") : "0.5rem 1.5rem",
          top: isScrolled ? (isMobile ? "0.25rem" : "1rem") : "1rem",
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex items-center justify-between w-full">
          <Link href="/" className={cn("text-xl font-bold glow", isScrolled && isMobile && "text-base")}>
            ilkay.xyz
          </Link>

          {showControls && (
            <div className="flex items-center gap-2">
              <Link
                href="https://blog.ilkay.xyz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:text-primary hidden lg:block"
              >
                Blog
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="hover:bg-primary/10 hover:text-primary rounded-full"
              >
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </div>
          )}

          <div className="flex items-center space-x-4 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMenuOpen(!menuOpen)}
              className="hover:bg-primary/10 hover:text-primary rounded-full"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: menuOpen ? 90 : 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  role="img"
                >
                  <title>Menu Icon</title>
                  <desc>Toggle navigation menu</desc>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </motion.div>
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="fixed left-0 right-0 mx-auto w-[90%] bg-background/90 rounded-lg shadow-lg p-4 border border-border z-40"
            style={{
              top: navRef.current ? navRef.current.offsetHeight + navRef.current.offsetTop + 10 : "4rem",
            }}
          >
            <div className="grid gap-2">
              <motion.div
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ delay: 0.1, type: "spring" }}
                className="p-2"
              >
                <Link
                  href="https://blog.ilkay.xyz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center text-sm font-medium hover:text-primary"
                >
                  Blog
                </Link>
              </motion.div>
              {isMobile && isScrolled && (
                <motion.div
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="p-2"
                >
                  <Button
                    variant="ghost"
                    className="w-full hover:text-primary"
                    onClick={() => {
                      setTheme(theme === "light" ? "dark" : "light")
                      setMenuOpen(false)
                    }}
                  >
                    {theme === "light" ? "Dark" : "Light"} Theme
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
