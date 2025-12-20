"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Code2, Database, Brain, Server } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description: "Building complete web applications with modern frameworks",
  },
  {
    icon: Database,
    title: "Backend Engineering",
    description: "Designing scalable server architectures and APIs",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description: "Implementing intelligent solutions with TensorFlow and CNNs",
  },
  {
    icon: Server,
    title: "Database Design",
    description: "Optimizing data structures and query performance",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="about" ref={ref} className="py-7 md:py-15 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Passionate developer focused on creating impactful solutions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="mb-12 border-none shadow-lg">
              <CardContent className="p-8">
                <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                  I'm a{" "}
                  <span className="text-primary font-semibold">Master of Computer Applications (MCA) student</span> at
                  Savitribai Phule Pune University with a strong foundation in full-stack development and backend
                  engineering. My expertise spans across{" "}
                  <span className="text-primary font-semibold">Python, Java, React, and modern web technologies</span>,
                  with hands-on experience in building scalable applications and implementing machine learning
                  solutions.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-balance">
                  During my internship at <span className="text-primary font-semibold">Hasten Solution</span>, I gained
                  valuable experience in ASP.NET MVC development, SQL Server optimization, and collaborative software
                  development using Git. I'm passionate about leveraging technology to solve real-world problems and
                  continuously expanding my skill set in emerging technologies.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 h-full group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">{highlight.title}</h3>
                        <p className="text-sm text-muted-foreground text-balance">{highlight.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
