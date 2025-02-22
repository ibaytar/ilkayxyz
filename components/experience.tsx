"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const Experience = () => {
  const experiences = [
    {
      id: "burgan-bank-2024",
      title: "Data Engineer Intern",
      company: "Burgan Bank",
      location: "Istanbul, Turkey",
      period: "Sep 2024 - Current",
      responsibilities: [
        "Developed and maintained ETL pipelines using Apache NiFi",
        "Designed and containerized data processing workflows using Podman & Docker",
        "Optimized ClickHouse queries for large-scale analytics",
        "Integrated Flask-based APIs with internal data infrastructure",
        "Conducted data validation, schema enforcement, and transformation",
        "Collaborated with cross-functional teams for data-driven insights",
      ],
      technologies: ["Apache NiFi", "ClickHouse", "Podman", "Docker", "Flask", "SQL"],
    },
    {
      id: "arcelik-2023",
      title: "Data Analytics Intern",
      company: "Arçelik Global A.Ş.",
      location: "Istanbul, Turkey",
      period: "Nov 2023 - Mar 2024",
      responsibilities: [
        "Assisted in data preprocessing and ETL pipeline development",
        "Developed interactive dashboards using Power BI",
        "Conducted SQL-based data extraction and transformation",
        "Supported data pipeline automation",
        "Utilized Python (Pandas, NumPy) and R for data visualization and statistical analysis",
      ],
      technologies: ["Power BI", "SQL", "Python", "Pandas", "NumPy", "R"],
    },
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  }

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="experience" className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32">
      <motion.h2 
        className="mb-8 text-3xl font-bold gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Work Experience
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 + index * 0.2 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col">
              <CardHeader>
                <CardTitle>{exp.title}</CardTitle>
                <CardDescription>
                  {exp.company} - {exp.location}
                </CardDescription>
                <CardDescription>{exp.period}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="list-disc pl-5 space-y-2">
                  {exp.responsibilities.map((responsibility, rIndex) => (
                    <motion.li
                      key={rIndex}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + rIndex * 0.1 }}
                      className="text-sm"
                    >
                      {responsibility}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, tIndex) => (
                    <motion.div
                      key={tIndex}
                      variants={techBadgeVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + tIndex * 0.1 }}
                    >
                      <Badge variant="secondary">{tech}</Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience
