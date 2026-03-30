"use client"

import { motion } from "framer-motion"

const easeInOut = [0.45, 0, 0.55, 1] as const

const orbs = [
  {
    className:
      "left-[-20%] top-[8%] h-[min(85vw,520px)] w-[min(85vw,520px)] rounded-full bg-primary/25 blur-[100px] md:left-[-10%]",
    x: [0, 48, -32, 18, 0],
    y: [0, 28, 52, 12, 0],
    duration: 42,
  },
  {
    className:
      "right-[-15%] top-[25%] h-[min(70vw,420px)] w-[min(70vw,420px)] rounded-full bg-primary/15 blur-[90px] md:right-[-8%]",
    x: [0, -42, 28, -18, 0],
    y: [0, 45, -28, 38, 0],
    duration: 48,
  },
  {
    className:
      "bottom-[-10%] left-[20%] h-[min(90vw,560px)] w-[min(90vw,560px)] rounded-full bg-[hsl(250_45%_40%/0.12)] blur-[110px]",
    x: [0, 62, -48, 35, 0],
    y: [0, -36, 32, -22, 0],
    duration: 55,
  },
  {
    className:
      "left-[35%] top-[45%] h-[min(55vw,320px)] w-[min(55vw,320px)] -translate-x-1/2 rounded-full bg-[hsl(195_40%_35%/0.08)] blur-[80px]",
    x: [0, -38, 42, -24, 0],
    y: [0, 40, -32, 28, 0],
    duration: 36,
  },
]

export default function AnimatedSiteBackground() {
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
          className={`absolute ${orb.className}`}
          initial={false}
          animate={{
            x: orb.x,
            y: orb.y,
          }}
          transition={{
            duration: orb.duration,
            repeat: Infinity,
            ease: easeInOut,
            repeatType: "loop",
          }}
        />
      ))}

      <div
        className="absolute inset-0 opacity-[0.04] mix-blend-soft-light"
        style={{
          backgroundImage: `repeating-radial-gradient(circle at 25% 25%, transparent 0, hsl(0 0% 100% / 0.03) 1px, transparent 2px)`,
          backgroundSize: "3px 3px",
        }}
      />
    </div>
  )
}
