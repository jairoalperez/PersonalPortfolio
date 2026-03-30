"use client"

import { motion, useReducedMotion } from "framer-motion"
import Link from "next/link"
import { ArrowDown } from "lucide-react"

export default function AnimatedExploreLink() {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="flex justify-center my-12"
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={reduce ? false : { opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href="#skills"
        className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        <span>Explore my skills</span>
        <motion.span
          aria-hidden
          animate={reduce ? undefined : { y: [0, 5, 0] }}
          transition={reduce ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-4 w-4" />
        </motion.span>
      </Link>
    </motion.div>
  )
}
