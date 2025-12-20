"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Code2,
  Database,
  Brain,
  Server,
  Target,
  GraduationCap,
  MapPin,
  Briefcase,
  Mail,
  Download,
  FolderGit2,
} from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building responsive and scalable web applications using modern frameworks",
  },
  {
    icon: Server,
    title: "Backend Engineering",
    description:
      "Designing APIs and backend systems with Python and scalable architectures",
  },
  {
    icon: Brain,
    title: "Machine Learning",
    description:
      "Developing practical ML solutions using TensorFlow and real-world datasets",
  },
  {
    icon: Database,
    title: "Database Design",
    description:
      "Designing schemas and optimizing SQL queries for performance",
  },
];

export function About() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({ top: offsetPosition, behavior: "smooth" })
    }
  }
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <section id="about" ref={ref} className="py-7 md:py-15 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Python-focused developer building scalable backend and full-stack
            solutions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="mb-12 border-none shadow-lg leading-relaxed tracking-normal">
              <CardContent className="p-8 max-w-4xl mx-auto">
                <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                  I’m a{" "}
                  <span className="text-primary font-semibold">
                    Master of Computer Applications (MCA) student
                  </span>{" "}
                  at Savitribai Phule Pune University with a strong focus on{" "}
                  <span className="text-primary font-semibold">
                    Python development and backend engineering
                  </span>
                  . I enjoy building{" "}
                  <span className="text-primary font-semibold">
                    scalable, reliable software applications
                  </span>{" "}
                  using clean code and modern development practices.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-balance">
                  I have hands-on experience working with{" "}
                  <span className="text-primary font-semibold">
                    Python, Java, React, REST APIs, and modern web technologies
                  </span>
                  . I’ve developed projects ranging from full-stack web
                  applications to{" "}
                  <span className="text-primary font-semibold">
                    machine learning–based solutions
                  </span>
                  , focusing on performance, clarity, and real-world usability.
                </p>

                <div className="my-6 h-px bg-border/60" />

                <p className="text-lg text-muted-foreground leading-relaxed text-balance">
                  During my internship at{" "}
                  <span className="text-primary font-semibold">
                    Hasten Solution
                  </span>
                  , I worked on{" "}
                  <span className="text-primary font-semibold">
                    ASP.NET MVC applications
                  </span>
                  , optimized{" "}
                  <span className="text-primary font-semibold">
                    SQL Server databases
                  </span>
                  , and collaborated with teams using{" "}
                  <span className="text-primary font-semibold">Git</span>. This
                  experience strengthened my understanding of backend systems,
                  database optimization, and professional software development
                  workflows.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed mt-4 text-balance">
                  I’m currently focused on advancing my skills in{" "}
                  <span className="text-primary font-semibold">
                    Python backend development, API design, database performance,
                    and production-ready machine learning use cases
                  </span>
                  .
                </p>

                {/* Current Focus */}
                <div className="mt-8 flex items-start gap-4 rounded-lg bg-primary/5 p-4">
                  <Target className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      Current Focus
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Backend APIs with Python, scalable system design, and
                      real-world ML integrations.
                    </p>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="mt-8 flex gap-4">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    MCA Student (SPPU)
                  </div>
                  <span className="mx-2">|</span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Briefcase className="h-4 w-4 text-primary" />
                    Open to Full-Time & Internship Roles
                  </div>
                  <span className="mx-2">|</span>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" />
                    Pune, India
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                  <motion.div  initial={{ opacity: 0, y: 10 }}
  animate={isInView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.4, delay: 0.25 }} className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mb-4 lg:mb-6">
              <Button
                size="sm"
                variant="secondary"
                onClick={() => handleScroll("#projects")}
                className="bg-primary hover:bg-primary/95 text-primary-foreground focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="View Projects"
              >
                <FolderGit2 className="mr-2 h-4 w-4" />
                Projects
              </Button>
              <Button
                size="sm"
                variant="outline"
                onClick={() => window.open("/documents/TejasKapse_Resume.pdf", "_blank") }
                aria-label="Download Resume"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => handleScroll("#contact") }
                aria-label="Contact Me"
                className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </Button>
            </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 12 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
              >
                <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 h-full hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <highlight.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-2">
                          {highlight.title}
                        </h3>
                        <p className="text-sm text-muted-foreground text-balance">
                          {highlight.description}
                        </p>
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
  );
}
