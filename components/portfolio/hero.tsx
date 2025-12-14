"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import profile from "../../public/images/profile.png"

export function Hero() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen pt-12 lg:pt-0 flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-8 items-center max-w-4xl mx-auto">
          <div className="lg:col-span-5 flex items-center justify-center lg:justify-start mt-4 sm:mt-6 lg:mt-0">
            <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
              <div className="rounded-full p-1 bg-gradient-to-tr from-primary via-purple-500 to-pink-500 shadow-xl transition-shadow duration-300 group-hover:shadow-2xl">
                <div className="overflow-hidden rounded-full w-40 h-40 sm:w-48 sm:h-48 md:w-72 md:h-72 bg-transparent">
                  <Image
                    src={profile}
                    alt="Tejas Kapse"
                    width={288}
                    height={288}
                    sizes="(max-width: 768px) 180px, 288px"
                    className="object-cover w-full h-full rounded-full transform transition-transform duration-300 group-hover:scale-105"
                    priority={true}
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-black/6 dark:bg-white/6 backdrop-blur-sm px-4 lg:px-3 py-1 rounded-full text-sm text-foreground dark:text-muted-foreground shadow-sm ring-1 ring-black/6 dark:ring-white/8 whitespace-nowrap min-w-max">Python Developer</div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-3 md:mb-6">
              <span className="text-primary font-medium text-lg">Hello, I'm</span>
            </motion.div>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 md:mb-6 text-balance leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">Tejas Kapse</span>
            </motion.h1>
            <div className="text-sm text-muted-foreground mt-2 mb-3 md:mt-3 md:mb-4">MCA Student | Open to Full-Time & Internship Opportunities</div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-2 md:mb-4">
              <p className="text-xl md:text-2xl font-semibold text-foreground mb-2">Python & Backend Engineer • Full Stack Developer </p>
              <p className="text-lg text-muted-foreground max-w-2xl text-balance">Building scalable full-stack applications and practical AI/ML solutions that solve real-world problems.</p>
            </motion.div>


            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6">
              <Button
                size="lg"
                onClick={() => handleScroll("#projects")}
                className="bg-primary hover:bg-primary/95 text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="View Projects"
              >
                View Projects
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => handleScroll("#contact") }
                aria-label="Contact Me"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => window.open("/TejasKapse_Resume.pdf", "_blank") }
                aria-label="Download Resume"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.45 }} className="flex items-center gap-3 justify-center lg:justify-start mt-1 md:mt-2">
              <a href="https://github.com/tejaskapse1902" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full p-1"><Github className="h-6 w-6" /></a>
              <a href="https://www.linkedin.com/in/tejas-kapse/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full p-1"><Linkedin className="h-6 w-6" /></a>
              <a href="mailto:tejaskapse19@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-transform transform hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full p-1"><Mail className="h-6 w-6" /></a>
            </motion.div>
          </div>

          {/* Mobile: inline arrow placed in flow to avoid overlapping icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="block lg:hidden mt-6 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer"
              onClick={() => handleScroll("#about") }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleScroll('#about') }}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>

          {/* Desktop: absolute arrow centered at bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-10"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="cursor-pointer"
              onClick={() => handleScroll("#about") }
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleScroll('#about') }}
            >
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}