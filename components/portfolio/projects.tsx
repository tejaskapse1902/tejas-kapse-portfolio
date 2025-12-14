"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Fruits & Vegetables Recognition",
    description:
      "ML-powered web application for identifying 36 types of fruits and vegetables using CNN with 98.5% accuracy. Built with TensorFlow, Keras, and deployed using Streamlit.",
    tech: ["Python", "TensorFlow", "Keras", "CNN", "Streamlit"],
    github: "#",
    demo: "#",
  },
  {
    title: "Programming Prep Web App",
    description:
      "Comprehensive learning platform featuring 100+ coding challenges, interview questions, and progress tracking. Implemented authentication with Clerk and real-time data sync with Firebase.",
    tech: ["React", "Firebase", "Clerk", "JavaScript", "CSS"],
    github: "#",
    demo: "#",
  },
  {
    title: "Daily Mess Service",
    description:
      "Desktop application for mess management with attendance tracking, meal planning, and billing. Built using Java Swing with MySQL database integration.",
    tech: ["Java", "Java Swing", "MySQL", "JDBC"],
    github: "#",
  },
  {
    title: "Currency Converter",
    description:
      "Real-time currency conversion tool with live exchange rates. Clean interface with support for multiple currencies and historical data visualization.",
    tech: ["JavaScript", "HTML", "CSS", "API Integration"],
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Application",
    description:
      "Dynamic weather forecast app providing real-time weather data, 7-day forecasts, and location-based services using OpenWeather API.",
    tech: ["JavaScript", "HTML", "CSS", "REST API"],
    github: "#",
    demo: "#",
  },
  {
    title: "Image Gallery",
    description:
      "Responsive image gallery with lazy loading, lightbox view, and filtering capabilities. Optimized for performance and mobile devices.",
    tech: ["JavaScript", "HTML", "CSS", "Responsive Design"],
    github: "#",
    demo: "#",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  const majorProjects = projects.slice(0, 3)
  const miniProjects = projects.slice(3)

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Showcasing my journey in building innovative solutions
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Major Projects */}
          <div className="mb-10">
            <h3 className="text-2xl font-semibold text-foreground mb-4">Major Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {majorProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col group overflow-hidden">
                    <div className="h-40 w-full overflow-hidden">
                      <img
                        src={`/images/project-${(index % 3) + 1}.svg`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 flex flex-col justify-between p-6">
                      <div>
                        <h3 className="text-xl font-semibold text-balance group-hover:text-primary transition-colors mb-2">
                          {project.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tech.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-transparent"
                          onClick={() => window.open(project.github, "_blank")}
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        {project.demo && (
                          <Button
                            size="sm"
                            className="flex-1 bg-primary hover:bg-primary/90"
                            onClick={() => window.open(project.demo, "_blank")}
                          >
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mini Projects */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-4">Mini Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {miniProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Card className="border-none shadow-md hover:shadow-lg transition-all duration-200 h-full flex flex-col group overflow-hidden">
                    <div className="h-32 w-full overflow-hidden">
                      <img
                        src={`/images/project-${((index + 3) % 3) + 1}.svg`}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="flex-1 flex flex-col justify-between p-4">
                      <div>
                        <h4 className="text-lg font-semibold text-balance group-hover:text-primary transition-colors mb-1">
                          {project.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-3">{project.description}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent" onClick={() => window.open(project.github, "_blank") }>
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                        {project.demo && (
                          <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" onClick={() => window.open(project.demo, "_blank") }>
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
