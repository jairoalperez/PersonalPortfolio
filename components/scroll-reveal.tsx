"use client"

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion"
import type { ReactNode } from "react"

const easeOut = [0.22, 1, 0.36, 1] as const

export function ScrollReveal({
  children,
  className,
  delay = 0,
  y = 28,
  ...props
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
} & Omit<HTMLMotionProps<"div">, "children" | "initial" | "whileInView" | "viewport">) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.55, delay, ease: easeOut }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.07,
}: {
  children: ReactNode
  className?: string
  stagger?: number
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.05 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const reduce = useReducedMotion()
  if (reduce) {
    return <div className={className}>{children}</div>
  }
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: easeOut },
        },
      }}
    >
      {children}
    </motion.div>
  )
}
