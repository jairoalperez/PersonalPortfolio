"use client"

import { useState } from "react"
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Github, ExternalLink } from "lucide-react"
import projects from "../projects.json"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Professional Experience</h2>

        <div className="space-y-6 max-w-4xl mx-auto">
          <ExperienceCard
            title="Software Engineer"
            company="Freecast Inc."
            location="Orlando, FL"
            period="February 2024 - Present"
            responsibilities={[
              "Engineered a REST API using ASP.NET Core and MariaDB, hosted on GCP, to manage and integrate streaming service data with metadata from TMDB and IMDb, ensuring seamless data retrieval and scalability.",
              "Worked on the development and management of a Node.js API for web scraping data from over 50 streaming services, efficiently uploading to AWS S3, optimizing data flow and storage.",
              "Participated in the development of high-performance web applications using Next.js for the streaming platform and eCommerce store, and ASP.NET Core for the backend, and SQL Server on AWS RDS for the database, used Docker and Kubernetes for streamlined deployment and scalability.",
            ]}
          />

          <ExperienceCard
            title="Software Developer"
            company="SNVA Technologies (Staffing)"
            location="United States (Remote)"
            period="December 2021 - January 2024"
            responsibilities={[
              "Developed and optimized different healthcare and eCommerce applications using ASP.NET Core, Ruby on Rails, NestJS, Java Spring Boot for backend, and React.js and Angular for frontend, delivering high-quality, scalable solutions.",
              "Leveraged Docker, Kubernetes, and AWS to streamline deployment processes, enhance scalability, and ensure smooth, efficient operation in cloud environments.",
              "Played a key role in improving application performance, reducing downtime, and enhancing the overall user experience, contributing to the success of critical projects.",
            ]}
          />

          <ExperienceCard
            title="Software Engineer"
            company="N&V Consultores C.A"
            location="Maracaibo, Venezuela"
            period="September 2020 - December 2021"
            responsibilities={[
              "Leveraged ASP.NET Core, React.js, and PostgreSQL to design and implement full-stack applications for efficient employee/project time tracking and streamlined service order and inventory management.",
              "Built and deployed scalable, high-performance applications, improving workflow and reducing operational bottlenecks.",
              "Architected and optimized the database structure to ensure data integrity, scalability, and smooth integration between frontend and backend systems.",
            ]}
          />
        </div>


        {/* Projects Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center mt-12">Featured Projects</h3>
          <div className="max-w-4xl mx-auto">
            <Carousel className="w-full">
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2">
                      <Card className="overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                            <Button size="sm" variant="secondary" asChild>
                              <Link href={project.repo ?? "#"} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-1" />
                                Code
                              </Link>
                            </Button>
                            <Button size="sm" variant="secondary" asChild>
                              <Link href={project.url ?? "#"} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Live
                              </Link>
                            </Button>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <h4 className="font-semibold text-lg line-clamp-1">{project.title}</h4>
                          <div className="flex gap-2 sm:hidden">
                            <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                              <Link href={project.repo ?? "#"} target="_blank" rel="noopener noreferrer">
                                <Github className="w-4 h-4 mr-1" />
                                Code
                              </Link>
                            </Button>
                            <Button size="sm" variant="outline" className="flex-1 bg-transparent" asChild>
                              <Link href={project.url ?? "#"} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 mr-1" />
                                Live
                              </Link>
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex" />
              <CarouselNext className="hidden sm:flex" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({
  title,
  company,
  location,
  period,
  responsibilities,
}: {
  title: string
  company: string
  location: string
  period: string
  responsibilities: string[]
}) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-gradient-to-br from-card to-card/50 p-6 rounded-lg shadow-lg border border-border/50 experience-card backdrop-blur-sm">
      <div className="cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-1 h-12 bg-gradient-to-b from-primary to-primary/60 rounded-full transition-all duration-200 hover:from-primary/80 hover:to-primary/40 hover:w-2"></div>
              <div>
                <h3 className="text-xl font-bold hover:text-primary transition-colors duration-200 bg-gradient-to-r from-foreground to-primary bg-clip-text">
                  {title}
                </h3>
                <h4 className="text-lg font-semibold text-primary hover:text-primary/80 transition-colors duration-200">
                  {company}
                </h4>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 ml-4 text-muted-foreground">
              <div className="flex items-center hover:text-primary transition-colors duration-200">
                <MapPin className="h-4 w-4 mr-1" />
                <span>{location}</span>
              </div>
              <div className="flex items-center hover:text-primary transition-colors duration-200">
                <Calendar className="h-4 w-4 mr-1" />
                <span>{period}</span>
              </div>
            </div>
          </div>

          <div className="ml-4 flex-shrink-0">
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110" />
            ) : (
              <ChevronDown className="h-5 w-5 text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-110" />
            )}
          </div>
        </div>
      </div>

      {isExpanded && (
        <div className="mt-6 ml-4 animate-in slide-in-from-top-2 duration-200">
          <h5 className="font-semibold mb-3 text-primary">Key Responsibilities:</h5>
          <ul className="list-disc pl-5 space-y-2">
            {responsibilities.map((responsibility, index) => (
              <li
                key={index}
                className="text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-200"
              >
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
