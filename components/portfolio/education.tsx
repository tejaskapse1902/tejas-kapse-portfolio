"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar, Award } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Savitribai Phule Pune University",
    period: "2023 - 2025",
    description: "Specialized in Advanced Software Development, Machine Learning, and Database Management Systems",
  },
  {
    degree: "Bachelor of Science in Information Technology",
    institution: "Rashtrasant Tukadoji Maharaj Nagpur University",
    period: "2020 - 2023",
    description: "Foundation in Programming, Web Development, and Computer Science fundamentals",
  },
]

export function Education() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section id="education" ref={ref} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">Academic background and qualifications</p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
                {/* Accent Bar */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary group-hover:w-2 transition-all duration-300" />

                <CardContent className="p-8 pl-10">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors mt-1">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-2 text-balance">{edu.degree}</h3>
                          <div className="flex items-center gap-2 text-primary font-semibold mb-2">
                            <Award className="h-4 w-4" />
                            <span className="text-balance">{edu.institution}</span>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                            <Calendar className="h-4 w-4" />
                            <span>{edu.period}</span>
                          </div>
                          <p className="text-muted-foreground text-balance leading-relaxed">{edu.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
