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
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });

  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    if (!element) return;

    const offset = 80;
    const top =
      element.getBoundingClientRect().top + window.pageYOffset - offset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section id="about" ref={ref} className="py-14 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.4 }}
          className="text-center mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Python-focused developer building scalable backend and full-stack solutions
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Card className="mb-12 border-none shadow-lg">
              <CardContent className="p-5 sm:p-6 md:p-8 max-w-4xl mx-auto">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  I’m a{" "}
                  <span className="text-primary font-semibold">
                    Master of Computer Applications (MCA) student
                  </span>{" "}
                  at Savitribai Phule Pune University with a strong focus on{" "}
                  <span className="text-primary font-semibold">
                    Python development and backend engineering
                  </span>
                  . I enjoy building scalable and reliable software using clean,
                  maintainable code.
                </p>

                <p className="mt-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  I have hands-on experience with{" "}
                  <span className="text-primary font-semibold">
                    Python, Java, React, REST APIs, and modern web technologies
                  </span>
                  , and I’ve built full-stack and machine-learning-based solutions
                  focused on real-world usability.
                </p>

                <div className="my-6 h-px bg-border/60" />

                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  During my internship at{" "}
                  <span className="text-primary font-semibold">
                    Hasten Solution
                  </span>
                  , I worked on ASP.NET MVC applications, optimized SQL Server
                  databases, and collaborated using Git.
                </p>

                {/* Current Focus */}
                <div className="mt-6 flex gap-4 rounded-lg bg-primary/5 p-4">
                  <Target className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-1">Current Focus</h4>
                    <p className="text-sm text-muted-foreground">
                      Python backend APIs, scalable system design, and practical ML use cases.
                    </p>
                  </div>
                </div>

                {/* Quick Facts */}
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="h-4 w-4 text-primary" />
                    MCA Student (SPPU)
                  </div>
                  <div className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4 text-primary" />
                    Open to Full-Time & Internship Roles
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-primary" />
                    Pune, India
                  </div>
                </div>

                {/* CTA Buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.25 }}
                  className="mt-8 flex flex-col sm:flex-row gap-3 sm:justify-center lg:justify-start"
                >
                  <Button
                    size="sm"
                    onClick={() => handleScroll("#projects")}
                    className="w-full sm:w-auto bg-primary text-primary-foreground"
                  >
                    <FolderGit2 className="mr-2 h-4 w-4" />
                    Projects
                  </Button>

                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() =>
                      window.open("/documents/TejasKapse_Resume.pdf", "_blank")
                    }
                    className="w-full sm:w-auto"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>

                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleScroll("#contact")}
                    className="w-full sm:w-auto"
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Contact
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.35, delay: 0.2 + index * 0.08 }}
              >
                <Card className="border-none shadow-md hover:shadow-xl transition-all h-full">
                  <CardContent className="p-5 sm:p-6">
                    <div className="flex gap-4">
                      <div>
                        <div className="p-3 bg-primary/10 rounded-lg">
                        <item.icon className="h-5 w-5 text-primary" />
                      </div>
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
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
