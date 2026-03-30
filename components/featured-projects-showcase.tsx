"use client"

import { useCallback, useEffect, useMemo, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { motion, useReducedMotion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import projects from "../projects.json"

type Project = (typeof projects)[number]

export default function FeaturedProjectsShowcase() {
  const reduceMotion = useReducedMotion()
  const [api, setApi] = useState<CarouselApi>()
  const [selected, setSelected] = useState(0)

  const plugins = useMemo(
    () =>
      reduceMotion
        ? []
        : [
            Autoplay({
              delay: 3400,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
              stopOnInteraction: false,
              playOnInit: true,
            }),
          ],
    [reduceMotion]
  )

  const onSelect = useCallback((embla: CarouselApi) => {
    setSelected(embla.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on("select", onSelect)
    api.on("reInit", onSelect)
    return () => {
      api.off("select", onSelect)
      api.off("reInit", onSelect)
    }
  }, [api, onSelect])

  const scrollTo = (index: number) => api?.scrollTo(index)

  return (
    <div className="relative left-1/2 mt-10 w-screen max-w-[100vw] -translate-x-1/2">
      <div
        className="relative px-6 sm:px-10 md:px-14"
        style={{
          maskImage: "linear-gradient(90deg, transparent 0%, black 4%, black 96%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(90deg, transparent 0%, black 4%, black 96%, transparent 100%)",
        }}
      >
        <Carousel
          setApi={setApi}
          opts={{
            loop: true,
            align: "center",
            skipSnaps: false,
            duration: 26,
          }}
          plugins={plugins}
          className="mx-auto w-full max-w-6xl"
        >
          <CarouselContent
            className="-ml-3 md:-ml-5"
            viewportClassName="py-10 sm:py-12 -my-10 sm:-my-12 px-2 sm:px-3 -mx-2 sm:-mx-3"
          >
            {projects.map((project, index) => (
              <CarouselItem key={`${project.title}-${index}`} className="basis-[85%] pl-3 sm:basis-[70%] md:basis-[48%] md:pl-5 lg:basis-[38%]">
                <ProjectCard project={project} index={index} reduceMotion={!!reduceMotion} />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious
            className={cn(
              "left-2 sm:left-4 md:left-6 h-11 w-11 border-primary/20 bg-background/90 shadow-lg backdrop-blur-md",
              "hover:bg-background hover:border-primary/40"
            )}
          />
          <CarouselNext
            className={cn(
              "right-2 sm:right-4 md:right-6 h-11 w-11 border-primary/20 bg-background/90 shadow-lg backdrop-blur-md",
              "hover:bg-background hover:border-primary/40"
            )}
          />
        </Carousel>
      </div>

      <div className="mx-auto mt-8 max-w-6xl px-4">
        <div className="flex flex-wrap justify-center gap-2" role="tablist" aria-label="Project slides">
          {projects.map((_, i) => (
            <motion.button
              key={i}
              type="button"
              role="tab"
              aria-selected={selected === i}
              aria-label={`Go to project ${i + 1}`}
              onClick={() => scrollTo(i)}
              className={cn(
                "h-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                selected === i ? "bg-primary" : "bg-muted-foreground/40 hover:bg-muted-foreground/60"
              )}
              animate={{ width: selected === i ? 28 : 8 }}
              transition={{ type: "spring", stiffness: 400, damping: 32 }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  reduceMotion,
}: {
  project: Project
  index: number
  reduceMotion: boolean
}) {
  return (
    <motion.div
      className="origin-center pb-2 pt-1"
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
      whileHover={reduceMotion ? undefined : { scale: 1.02, y: -6 }}
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
    >
      <div
        className={cn(
          "group relative overflow-hidden rounded-2xl border border-border/50 bg-gradient-to-b from-card to-card/40 shadow-lg",
          "ring-0 ring-inset transition-[box-shadow,ring] duration-300",
          "hover:border-primary/45 hover:shadow-2xl hover:shadow-primary/10 hover:ring-2 hover:ring-primary/20"
        )}
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            sizes="(max-width:640px) 85vw, (max-width:768px) 70vw, (max-width:1024px) 48vw, 38vw"
            quality={92}
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
            priority={index < 2}
            placeholder="empty"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden
          />
          {(project.repo || project.url) && (
            <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <div className="flex translate-y-3 gap-2 transition-transform duration-300 group-hover:translate-y-0">
                {project.repo && (
                  <Button size="sm" variant="secondary" className="shadow-lg" asChild>
                    <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                )}
                {project.url && (
                  <Button size="sm" className="shadow-lg" asChild>
                    <Link href={project.url} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 h-4 w-4" />
                      Live
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          )}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <h4 className="text-center text-lg font-semibold tracking-tight text-foreground drop-shadow-sm md:text-xl">
              {project.title}
            </h4>
          </div>
        </div>

        <div className="flex justify-center gap-2 border-t border-border/40 p-3 sm:hidden">
          {project.repo && (
            <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
              <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                Code
              </Link>
            </Button>
          )}
          {project.url && (
            <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
              <Link href={project.url} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Live
              </Link>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  )
}
