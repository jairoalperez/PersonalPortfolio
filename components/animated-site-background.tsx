"use client"

import { motion, useReducedMotion } from "framer-motion"

const easeInOut = [0.45, 0, 0.55, 1] as const

// Orbs are drawn as radial gradients instead of solid circles with a CSS
// `filter: blur()`. Visually the result is almost identical but the cost is
// dramatically lower: large blur radii (80–110px) over big elements force the
// GPU to re-rasterize a blurred buffer every frame — especially punishing on
// iOS Safari and high-DPR mobile screens. Radial gradients are just a pixel
// shader fill and are effectively free to animate with transforms.
const orbs = [
  {
    size: "h-[min(85vw,520px)] w-[min(85vw,520px)]",
    position: "left-[-25%] top-[8%] md:left-[-10%]",
    color: "hsl(var(--primary) / 0.32)",
    x: [0, 48, -32, 18, 0],
    y: [0, 28, 52, 12, 0],
    duration: 42,
    hideOnMobile: false,
  },
  {
    size: "h-[min(70vw,420px)] w-[min(70vw,420px)]",
    position: "right-[-20%] top-[25%] md:right-[-8%]",
    color: "hsl(var(--primary) / 0.22)",
    x: [0, -42, 28, -18, 0],
    y: [0, 45, -28, 38, 0],
    duration: 48,
    hideOnMobile: false,
  },
  {
    size: "h-[min(90vw,560px)] w-[min(90vw,560px)]",
    position: "bottom-[-10%] left-[20%]",
    color: "hsl(250 55% 45% / 0.22)",
    x: [0, 62, -48, 35, 0],
    y: [0, -36, 32, -22, 0],
    duration: 55,
    hideOnMobile: true,
  },
  {
    size: "h-[min(55vw,320px)] w-[min(55vw,320px)]",
    position: "left-[35%] top-[45%] -translate-x-1/2",
    color: "hsl(195 55% 45% / 0.16)",
    x: [0, -38, 42, -24, 0],
    y: [0, 40, -32, 28, 0],
    duration: 36,
    hideOnMobile: true,
  },
]

export default function AnimatedSiteBackground() {
  const reduceMotion = useReducedMotion()

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,hsl(var(--primary)/0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_100%,hsl(250_30%_20%/0.15),transparent_50%)]" />

      {orbs.map((orb, i) => (
        <motion.div
          key={i}
          className={`absolute rounded-full ${orb.size} ${orb.position} ${
            orb.hideOnMobile ? "hidden md:block" : ""
          }`}
          style={{
            background: `radial-gradient(closest-side, ${orb.color}, transparent 72%)`,
            willChange: "transform",
            transform: "translateZ(0)",
          }}
          initial={false}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: orb.x,
                  y: orb.y,
                }
          }
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: easeInOut,
            repeatType: "loop",
          }}
        />
      ))}
    </div>
  )
}
