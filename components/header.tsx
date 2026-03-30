"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, useReducedMotion } from "framer-motion"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const reduce = useReducedMotion()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b"
      initial={reduce ? false : { y: -20, opacity: 0 }}
      animate={reduce ? false : { y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            className="flex-shrink-0"
            initial={reduce ? false : { opacity: 0, x: -12 }}
            animate={reduce ? false : { opacity: 1, x: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" className="text-xl font-bold text-primary hover:text-primary/80 transition-colors">
              Jairo Pérez
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-200"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "#intro", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#contact", label: "Contact" },
            ].map((item, i) => (
              <motion.span
                key={item.href}
                initial={reduce ? false : { opacity: 0, y: -8 }}
                animate={reduce ? false : { opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i + 0.1, duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link href={item.href} className="text-muted-foreground hover:text-primary font-medium nav-link">
                  {item.label}
                </Link>
              </motion.span>
            ))}
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden overflow-hidden"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={reduce ? false : { height: "auto", opacity: 1 }}
            exit={reduce ? false : { height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-b">
              {[
                { href: "#intro", label: "About" },
                { href: "#skills", label: "Skills" },
                { href: "#experience", label: "Experience" },
                { href: "#contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
