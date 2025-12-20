"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, Calendar, Eye } from "lucide-react"

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Hasten Solution",
    period: "2023 - 2024",
    location: "In Office",
    description: [
      "Developed and maintained web applications using ASP.NET MVC framework",
      "Optimized SQL Server database queries improving performance by 30%",
      "Collaborated with team members using Git for version control",
      "Implemented RESTful APIs for seamless frontend-backend integration",
      "Participated in code reviews and agile development practices",
    ],
    technologies: ["ASP.NET MVC", "C#", "SQL Server", "Git", "REST API", "JavaScript", "HTML", "CSS", "Bootstrap", "AJAX", "jQuery"],
    certificateFile: "internship-certificate.pdf",
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="experience" ref={ref} className="py-7 md:py-15">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Work Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Professional journey and accomplishments
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.company}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                {/* Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-2 transition-all duration-300" />

                <CardContent className="p-8 pl-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2 text-balance">{experience.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                        <Briefcase className="h-4 w-4" />
                        <span>{experience.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground text-sm">
                        <Calendar className="h-4 w-4" />
                        <span>{experience.period}</span>
                        <span>•</span>
                        <span>{experience.location}</span>
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {experience.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-2 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="text-balance leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {experience.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {experience.certificateFile && (
                    <div className="mt-4">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => window.open(`/documents/${experience.certificateFile}`, '_blank')}
                        aria-label="View internship certificate"
                      >
                        <Eye className="mr-2 h-4 w-4" />
                        View Internship Certificate
                      </Button>
                    </div>
                  )}  
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
