"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Server, Database, Brain, Wrench } from "lucide-react"

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS", "Streamlit"],
  },
  {
    category: "Backend",
    icon: Server,
    skills: ["Python", "Java", "Node.js", "Express.js", "ASP.NET MVC"],
  },
  {
    category: "Database",
    icon: Database,
    skills: ["MySQL", "SQL Server", "Firebase"],
  },
  {
    category: "Machine Learning",
    icon: Brain,
    skills: ["TensorFlow", "Keras", "CNN", "Pandas", "NumPy"],
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Eclipse", "Jupyter"],
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" ref={ref} className="py-7 md:py-15">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive toolkit for building modern applications
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full group">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">{category.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
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
