"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    category: "Frontend",
    icon: Code2,
    skills: ["HTML", "CSS", "JavaScript", "React", "Bootstrap", "Tailwind CSS"],
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
    skills: ["TensorFlow", "Keras", "CNN", "Pandas", "NumPy", "Streamlit"],
  },
  {
    category: "Tools & Technologies",
    icon: Wrench,
    skills: ["Git", "GitHub", "Postman", "VS Code", "Eclipse", "Jupyter"],
  },
];

export function Skills() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="skills" ref={ref} className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            A comprehensive toolkit for building modern applications
          </p>
          <p className="text-sm text-primary font-medium mt-2">
            Primary focus: Python & Backend Development
          </p>
        </motion.div>

        {/* Flexbox Layout */}
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="w-full sm:w-[48%] lg:w-[31%]"
            >
              <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold text-foreground">
                      {category.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="cursor-default hover:bg-primary/10 hover:text-primary transition-all duration-200"
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
  );
}
