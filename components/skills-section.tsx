"use client"

import type React from "react"
import { Code, Database, Globe, Server, Cpu, Users } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/components/scroll-reveal"

const ease = [0.22, 1, 0.36, 1] as const

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 from-background via-background to-primary/5">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
        </ScrollReveal>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={0.09}>
          <StaggerItem>
            <SkillCard
              icon={<Code />}
              title="Programming Languages"
              skills={["TypeScript", "C#", "JavaScript", "Java", "Python", "RPG", "Ruby", "HTML", "CSS"]}
            />
          </StaggerItem>
          <StaggerItem>
            <SkillCard
              icon={<Globe />}
              title="Frontend Frameworks"
              skills={["React.js", "Next.js", "Angular", "Remix"]}
            />
          </StaggerItem>
          <StaggerItem>
            <SkillCard
              icon={<Server />}
              title="Backend Frameworks"
              skills={["ASP.NET Core", "Spring Boot", "NestJS", "Express.js", "Ruby on Rails"]}
            />
          </StaggerItem>
          <StaggerItem>
            <SkillCard
              icon={<Database />}
              title="Databases and Cloud"
              skills={["MySQL", "PostgreSQL", "MariaDB", "Oracle", "DB2", "MongoDB", "AWS", "GCP"]}
            />
          </StaggerItem>
          <StaggerItem>
            <SkillCard icon={<Cpu />} title="DevOps" skills={["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Git"]} />
          </StaggerItem>
          <StaggerItem>
            <SkillCard
              icon={<Users />}
              title="Other Skills"
              skills={["AI Implementation", "Web Scraping", "IBM i", "Scrum/Agile", "Data Analysis"]}
            />
          </StaggerItem>
        </StaggerContainer>

        <div className="mt-12">
          <ScrollReveal delay={0.08}>
            <h3 className="text-xl font-semibold mb-4 text-center">Languages</h3>
          </ScrollReveal>
          <StaggerContainer className="flex flex-wrap justify-center gap-4" stagger={0.06}>
            <StaggerItem>
              <LanguageBadge language="English" level="Fluent" />
            </StaggerItem>
            <StaggerItem>
              <LanguageBadge language="Spanish" level="Native" />
            </StaggerItem>
            <StaggerItem>
              <LanguageBadge language="Portuguese" level="Intermediate" />
            </StaggerItem>
            <StaggerItem>
              <LanguageBadge language="Catalan" level="Intermediate" />
            </StaggerItem>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className="bg-gradient-to-br from-card to-card/50 p-6 rounded-lg shadow-lg border border-border/50 skill-card backdrop-blur-sm h-full"
      whileHover={reduce ? undefined : { y: -6, transition: { duration: 0.25, ease } }}
    >
      <div className="flex items-center mb-4">
        <div className="p-3 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg text-primary mr-3 transition-all duration-200 hover:from-primary/30 hover:to-primary/20 hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-semibold bg-gradient-to-r from-foreground to-primary bg-clip-text">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gradient-to-r from-muted to-muted/80 text-muted-foreground text-sm rounded-full skill-badge cursor-default border border-border/30"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function LanguageBadge({ language, level }: { language: string; level: string }) {
  return (
    <div className="flex items-center bg-gradient-to-r from-card to-card/80 px-4 py-2 rounded-full shadow-lg border border-border/50 language-badge cursor-default backdrop-blur-sm">
      <span className="font-medium">{language}</span>
      <span className="mx-2 text-primary">•</span>
      <span className="text-muted-foreground text-sm">{level}</span>
    </div>
  )
}
