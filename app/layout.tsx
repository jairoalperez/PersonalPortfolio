import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import type { Metadata } from "next"
import AnimatedSiteBackground from "@/components/animated-site-background"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Jairo Pérez | Software Engineer",
  description:
    "Personal portfolio of Jairo Pérez, Software Engineer with expertise in full-stack development, cloud technologies, and various programming languages.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark" suppressHydrationWarning>
      <body className={`${inter.className} relative min-h-screen bg-background`}>
        <AnimatedSiteBackground />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  )
}
