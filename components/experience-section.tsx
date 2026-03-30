"use client"

import { useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Calendar, MapPin, ChevronDown } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"
import FeaturedProjectsShowcase from "@/components/featured-projects-showcase"

const ease = [0.22, 1, 0.36, 1] as const

const EXPERIENCES = [
  {
    id: "freecast",
    title: "Software Engineer",
    company: "Freecast Inc.",
    location: "Orlando, FL",
    period: "February 2024 - Present",
    responsibilities: [
      "Led the development of multiple high-performance web applications for streaming and eCommerce platforms using Next.js (frontend), .NET (backend), and AWS (RDS, ECS, Fargate, ECR, S3), enabling scalable and reliable service delivery across different business domains.",
      "Designed and implemented a scalable data ingestion pipeline for streaming content, aggregating data from 50+ external services and enriching it with metadata from TMDB and IMDb. Built serverless scraping workflows using AWS Lambda with scheduled executions every 48 hours, storing processed data in a centralized database and exposing it via a high-performance REST API.",
      "Led the development of an internal analytics platform to query, export, and analyze company data, incorporating LLM-based summarization to generate insights and improve data-driven decision-making.",
      "Drove adoption of AI-assisted development by standardizing Cursor, integrating Claude Code via CLI, and enabling automated GitHub code reviews, improving development velocity and code quality.",
    ],
  },
  {
    id: "snva",
    title: "Software Developer",
    company: "SNVA Technologies",
    location: "Orlando, FL (Remote)",
    period: "December 2021 - January 2024",
    responsibilities: [
      "Developed and optimized different websites and eCommerce services using .NET and Nest for backend, and Next.js for frontend, delivering high-quality, scalable solutions.",
      "Leveraged Docker, Kubernetes, and AWS to streamline deployment processes, enhance scalability, and ensure smooth, efficient operation in cloud environments.",
      "Played a key role in improving application performance, reducing downtime, and enhancing the overall user experience, contributing to the success of critical projects.",
    ],
  },
  {
    id: "nv",
    title: "Software Engineer",
    company: "N&V Consultores C.A",
    location: "Orlando, FL (Remote)",
    period: "September 2020 - December 2021",
    responsibilities: [
      "Leveraged ASP.NET Core, React.js, and PostgreSQL to design and implement full-stack applications for efficient employee/project time tracking and streamlined service order and inventory management.",
      "Built and deployed scalable, high-performance applications, improving workflow and reducing operational bottlenecks.",
      "Architected and optimized the database structure to ensure data integrity, scalability, and smooth integration between frontend and backend systems.",
    ],
  },
] as const

export default function ExperienceSection() {
  const reduceMotion = useReducedMotion()
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-40"
        aria-hidden
      >
        <div className="absolute left-1/2 top-0 h-[min(70vh,520px)] w-[min(90vw,720px)] -translate-x-1/2 rounded-full bg-primary/10 blur-[100px]" />
      </div>

      <div className="container mx-auto">
        <ScrollReveal>
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-primary">Career</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Professional experience</h2>
          </div>
        </ScrollReveal>

        <div className="relative mx-auto max-w-3xl">
          <div
            className="absolute left-[15px] top-3 bottom-3 w-px bg-gradient-to-b from-primary/60 via-primary/25 to-transparent md:left-[19px]"
            aria-hidden
          />

          <StaggerContainer className="space-y-5" stagger={0.1}>
            {EXPERIENCES.map((job) => (
              <StaggerItem key={job.id}>
                <ExperienceTimelineCard
                  {...job}
                  isExpanded={openId === job.id}
                  onToggle={() => toggle(job.id)}
                  reduceMotion={!!reduceMotion}
                />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <div className="mt-20">
          <ScrollReveal>
            <h3 className="text-center text-xl font-semibold md:text-2xl">Featured projects</h3>
          </ScrollReveal>
          <ScrollReveal delay={0.08} className="mt-2">
            <FeaturedProjectsShowcase />
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}

function ExperienceTimelineCard({
  id,
  title,
  company,
  location,
  period,
  responsibilities,
  isExpanded,
  onToggle,
  reduceMotion,
}: {
  id: string
  title: string
  company: string
  location: string
  period: string
  responsibilities: readonly string[]
  isExpanded: boolean
  onToggle: () => void
  reduceMotion: boolean
}) {
  return (
    <motion.article
      className={`relative rounded-2xl border bg-card/80 shadow-sm backdrop-blur-sm transition-colors duration-300 md:ml-10 ${
        isExpanded
          ? "border-primary/50 shadow-lg shadow-primary/5 ring-1 ring-primary/20"
          : "border-border/60 hover:border-primary/25"
      }`}
    >
      <div
        className="absolute left-0 top-[1.35rem] z-10 flex h-8 w-8 -translate-x-[calc(50%+2px)] items-center justify-center md:top-[1.5rem] md:h-9 md:w-9 md:-translate-x-[calc(50%+6px)]"
        aria-hidden
      >
        <motion.span
          className="block h-3 w-3 rounded-full border-2 border-background bg-primary shadow-md md:h-3.5 md:w-3.5"
          animate={
            reduceMotion
              ? undefined
              : {
                  scale: isExpanded ? 1.15 : 1,
                  boxShadow: isExpanded
                    ? "0 0 0 6px hsl(var(--primary) / 0.2)"
                    : "0 0 0 0px hsl(var(--primary) / 0)",
                }
          }
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        />
      </div>

      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isExpanded}
        aria-controls={`experience-panel-${id}`}
        id={`experience-trigger-${id}`}
        className="flex w-full items-start gap-3 rounded-2xl p-5 text-left outline-none transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background md:gap-4 md:p-6"
      >
        <div className="min-w-0 flex-1 pt-0.5">
          <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
            <h3 className="text-lg font-bold md:text-xl">{title}</h3>
            <span className="text-primary">·</span>
            <h4 className="text-base font-semibold text-primary md:text-lg">{company}</h4>
          </div>
          <div className="mt-3 flex flex-col gap-2 text-sm text-muted-foreground sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-1">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0 text-primary/80" />
              {location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-4 w-4 shrink-0 text-primary/80" />
              {period}
            </span>
          </div>
        </div>

        <motion.span
          className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/80 bg-muted/30 text-muted-foreground"
          animate={reduceMotion ? undefined : { rotate: isExpanded ? 180 : 0 }}
          transition={{ type: "spring", stiffness: 320, damping: 24 }}
          aria-hidden
        >
          <ChevronDown className="h-5 w-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            id={`experience-panel-${id}`}
            role="region"
            aria-labelledby={`experience-trigger-${id}`}
            initial={reduceMotion ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
            transition={
              reduceMotion
                ? { duration: 0.15 }
                : {
                    height: { duration: 0.45, ease },
                    opacity: { duration: 0.28, ease },
                  }
            }
            style={{ overflow: "hidden" }}
            className="border-t border-border/50"
          >
            <div className="space-y-4 px-5 pb-6 pt-4 md:px-6 md:pb-7">
              <motion.div
                initial={reduceMotion ? { scaleX: 1 } : { scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.38,
                  ease,
                  delay: reduceMotion ? 0 : 0.08,
                }}
                className="h-px origin-left bg-gradient-to-r from-primary/50 to-transparent"
                aria-hidden
              />

              <h5 className="text-sm font-semibold uppercase tracking-wide text-primary">Key responsibilities</h5>

              <ul className="space-y-3">
                {responsibilities.map((line, index) => (
                  <motion.li
                    key={`${id}-${index}`}
                    className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.55em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-primary/70 md:text-[15px]"
                    initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: reduceMotion ? 0 : 0.4,
                      delay: reduceMotion ? 0 : 0.12 + index * 0.06,
                      ease,
                    }}
                  >
                    {line}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
