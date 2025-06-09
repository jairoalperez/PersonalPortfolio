import type React from "react"
import { Code, Database, Globe, Server, Cpu, Users } from "lucide-react"

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 from-background via-background to-primary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard
            icon={<Code />}
            title="Programming Languages"
            skills={["TypeScript", "C#", "JavaScript", "Java", "Python", "Ruby", "HTML", "CSS"]}
          />

          <SkillCard
            icon={<Globe />}
            title="Frontend Frameworks"
            skills={["React.js", "Next.js", "Angular", "Remix"]}
          />

          <SkillCard
            icon={<Server />}
            title="Backend Frameworks"
            skills={["ASP.NET Core", "Spring Boot", "NestJS", "Express.js", "Ruby on Rails"]}
          />

          <SkillCard
            icon={<Database />}
            title="Databases and Cloud"
            skills={["MySQL", "PostgreSQL", "MariaDB", "Oracle", "MongoDB", "AWS", "GCP", "Azure"]}
          />

          <SkillCard
            icon={<Cpu />}
            title="DevOps"
            skills={["Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Jenkins", "Git"]}
          />

          <SkillCard
            icon={<Users />}
            title="Other Skills"
            skills={["AI Implementation", "Web Scraping", "Scrum/Agile", "Data Analysis", "Cybersecurity"]}
          />
        </div>

        <div className="mt-12">
          <h3 className="text-xl font-semibold mb-4 text-center">Languages</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <LanguageBadge language="English" level="Fluent" />
            <LanguageBadge language="Spanish" level="Native" />
            <LanguageBadge language="Portuguese" level="Intermediate" />
            <LanguageBadge language="Catalan" level="Intermediate" />
          </div>
        </div>
      </div>
    </section>
  )
}

function SkillCard({ icon, title, skills }: { icon: React.ReactNode; title: string; skills: string[] }) {
  return (
    <div className="bg-gradient-to-br from-card to-card/50 p-6 rounded-lg shadow-lg border border-border/50 skill-card backdrop-blur-sm">
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
    </div>
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
