"use client"

import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { motion, useReducedMotion } from "framer-motion"

const ease = [0.22, 1, 0.36, 1] as const

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.09, delayChildren: 0.06 },
  },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
}

function IntroCopy() {
  return (
    <>
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I&apos;m <span className="text-primary">Jairo Pérez</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-left">Software Engineer</h2>
      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
        Experienced full-stack developer with over 4 years of expertise in building scalable, high-performance
        applications. I specialize in modern web technologies including .NET Core, React.js, Next.js, and cloud
        platforms like AWS and GCP. My passion lies in creating efficient, user-centric solutions that solve real-world
        problems while maintaining clean, maintainable code.
      </p>
      <p className="text-muted-foreground mb-8 text-lg leading-relaxed">
        Throughout my career, I&apos;ve successfully delivered projects ranging from healthcare and eCommerce
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
    </>
  )
}

export default function IntroSection() {
  const reduce = useReducedMotion()

  return (
    <section id="intro" className="py-20 md:py-32">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1">
          {reduce ? (
            <IntroCopy />
          ) : (
            <motion.div variants={container} initial="hidden" animate="visible">
              <motion.h1 variants={item} className="text-4xl md:text-5xl font-bold mb-4">
                Hi, I&apos;m <span className="text-primary">Jairo Pérez</span>
              </motion.h1>
              <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold mb-6 text-left">
                Software Engineer
              </motion.h2>
              <motion.p variants={item} className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Experienced full-stack developer with over 4 years of expertise in building scalable, high-performance
                applications. I specialize in modern web technologies including .NET Core, React.js, Next.js, and cloud
                platforms like AWS and GCP. My passion lies in creating efficient, user-centric solutions that solve
                real-world problems while maintaining clean, maintainable code.
              </motion.p>
              <motion.p variants={item} className="text-muted-foreground mb-8 text-lg leading-relaxed">
                Throughout my career, I&apos;ve successfully delivered projects ranging from healthcare and eCommerce
                applications to streaming platforms, always focusing on performance optimization, scalability, and best
                development practices. I thrive in collaborative environments and enjoy mentoring fellow developers
                while continuously learning new technologies and methodologies.
              </motion.p>
              <motion.div variants={item} className="flex space-x-4">
                {[
                  { href: "https://github.com/jairoalperez", icon: Github, label: "GitHub" },
                  { href: "https://www.linkedin.com/in/jairo-perez-5aa445252/", icon: Linkedin, label: "LinkedIn" },
                  { href: "mailto:jairoalperezprof@gmail.com", icon: Mail, label: "Email", external: false },
                ].map(({ href, icon: Icon, label, external }) => (
                  <motion.div key={label} whileHover={{ scale: 1.08, y: -2 }} whileTap={{ scale: 0.97 }}>
                    <Link
                      href={href}
                      target={external === false ? undefined : "_blank"}
                      rel={external === false ? undefined : "noopener noreferrer"}
                      className="inline-flex p-2 bg-accent rounded-full social-link"
                    >
                      <Icon className="h-6 w-6" />
                      <span className="sr-only">{label}</span>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </div>

        <div className="order-1 md:order-2 flex justify-center">
          {reduce ? (
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary transition-all duration-300 hover:border-primary/80 hover:shadow-xl hover:shadow-primary/20">
              <Image
                src="https://i.imgur.com/MJyb1o9.jpeg"
                alt="Jairo Pérez"
                fill
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <motion.div
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary transition-all duration-300 hover:border-primary/80 hover:shadow-xl hover:shadow-primary/20"
              initial={{ opacity: 0, scale: 0.88, rotate: -4 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease, delay: 0.12 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                className="relative w-full h-full"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="https://i.imgur.com/MJyb1o9.jpeg"
                  alt="Jairo Pérez"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}
