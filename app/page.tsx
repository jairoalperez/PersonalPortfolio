import AnimatedExploreLink from "@/components/animated-explore-link"
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

        <AnimatedExploreLink />

        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
