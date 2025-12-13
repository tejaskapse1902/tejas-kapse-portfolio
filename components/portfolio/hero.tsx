"use client"

import { motion } from "framer-motion"
import { ArrowDown, Download, Mail, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <motion.div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
        <motion.div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }} transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-4xl mx-auto">
          <div className="lg:col-span-7 text-center lg:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mb-6">
              <span className="text-primary font-medium text-lg">Hello, I'm</span>
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="text-5xl md:text-7xl font-extrabold mb-6 text-balance leading-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-500 to-pink-500">Tejas Kapse</span>
            </motion.h1>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="mb-8">
              <p className="text-xl md:text-2xl text-muted-foreground mb-2 text-balance">Full Stack Developer | Python Developer | Backend Engineer</p>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">Crafting scalable web applications and intelligent ML solutions with modern technologies</p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-wrap items-center justify-center gap-4 mb-12">
              <Button size="lg" onClick={() => handleScroll("#projects")} className="bg-primary hover:bg-primary/90 text-primary-foreground">View Projects</Button>
              <Button size="lg" variant="outline" onClick={() => window.open("/TejasKapse_Resume.pdf", "_blank") }>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" onClick={() => handleScroll("#contact") }>
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="flex items-center gap-4">
              <a href="https://github.com/tejaskapse1902" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Github className="h-6 w-6" /></a>
              <a href="https://www.linkedin.com/in/tejas-kapse/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors"><Linkedin className="h-6 w-6" /></a>
              <a href="mailto:tejaskapse19@gmail.com" className="text-muted-foreground hover:text-primary transition-colors"><Mail className="h-6 w-6" /></a>
            </motion.div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 h-56 md:w-72 md:h-72 rounded-full p-1 bg-gradient-to-tr from-primary via-purple-500 to-pink-500 shadow-xl">
                <img src="/images/profile.svg" alt="Tejas Kapse" className="w-full h-full rounded-full object-cover bg-transparent" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/6 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-muted-foreground shadow-sm">Full Stack Developer</div>
            </div>
          </div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.6 }} className="absolute bottom-10">
            <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} className="cursor-pointer" onClick={() => handleScroll("#about") }>
              <ArrowDown className="h-6 w-6 text-muted-foreground" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}