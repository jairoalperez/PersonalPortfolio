import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function IntroSection() {
  return (
    <section id="intro" className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Hi, I'm <span className="text-primary">Jairo Pérez</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-left">Software Engineer</h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Experienced full-stack developer with over 4 years of expertise in building scalable, high-performance
            applications. I specialize in modern web technologies including .NET Core, React.js, Next.js, and cloud
            platforms like AWS and GCP. My passion lies in creating efficient, user-centric solutions that solve
            real-world problems while maintaining clean, maintainable code.
          </p>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
            Throughout my career, I've successfully delivered projects ranging from healthcare and eCommerce
            applications to streaming platforms, always focusing on performance optimization, scalability, and best
            development practices. I thrive in collaborative environments and enjoy mentoring fellow developers while
            continuously learning new technologies and methodologies.
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://github.com/jairoalperez"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-accent rounded-full social-link"
            >
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/jairo-perez-5aa445252/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-accent rounded-full social-link"
            >
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link href="mailto:jairoalperezprof@gmail.com" className="p-2 bg-accent rounded-full social-link">
              <Mail className="h-6 w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary transition-all duration-300 hover:border-primary/80 hover:shadow-xl hover:shadow-primary/20">
            <Image
              src="https://i.imgur.com/MJyb1o9.jpeg"
              alt="Jairo Pérez"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
