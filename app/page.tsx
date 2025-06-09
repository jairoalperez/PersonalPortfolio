import { ArrowDown } from "lucide-react"
import Link from "next/link"
import ContactSection from "@/components/contact-section"
import ExperienceSection from "@/components/experience-section"
import Footer from "@/components/footer"
import Header from "@/components/header"
import IntroSection from "@/components/intro-section"
import SkillsSection from "@/components/skills-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8">
        <IntroSection />

        <div className="flex justify-center my-12">
          <Link
            href="#skills"
            className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span>Explore my skills</span>
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>

        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
