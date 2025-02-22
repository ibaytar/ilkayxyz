"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const About = () => {
  const skills = [
    "SQL",
    "Python",
    "R",
    "Apache NiFi",
    "ClickHouse",
    "Kafka",
    "Podman",
    "ETL",
    "Data Visualization",
    "Machine Learning",
    "Statistical Modeling",
  ]

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }

  return (
    <section id="about" className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32">
      <motion.h2 
        className="mb-8 text-3xl font-bold gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        About Me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
        className="h-full"
      >
        <Card className="h-full flex flex-col">
          <CardContent className="pt-6 flex-grow">
            <motion.p 
              className="mb-6 text-lg text-primary"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
            >
              As a statistics graduate with a strong technical background in data engineering, data analytics, and machine
              learning, I specialize in large-scale data processing, ETL pipelines, data visualization, and modeling. I
              actively work with technologies such as SQL, Python, Apache NiFi, ClickHouse, Kafka, and Podman to develop
              solutions for data management and analytics. Passionate about enhancing data-driven decision-making
              processes and creating value for businesses, I continuously improve my expertise in data engineering and
              data science. In the long run, I aim to specialize as a Machine Learning Engineer or Data Scientist,
              focusing on deep learning, statistical modeling, and big data analytics.
            </motion.p>
            <motion.h3 
              className="mb-4 text-xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
            >
              Skills
            </motion.h3>
            <motion.div 
              className="flex flex-wrap gap-2 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.toLowerCase().replace(/\s+/g, '-')}
                  variants={badgeVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Badge variant="secondary">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
            <motion.h3 
              className="mb-4 text-xl font-semibold"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.7 }}
            >
              Education
            </motion.h3>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
            >
              <div>
                <h4 className="text-lg font-medium">Hacettepe University</h4>
                <p className="text-sm text-muted-foreground">Ankara, Turkey</p>
                <p className="text-sm">
                  B.Sc. in Statistics; <span className="font-semibold text-emerald-500">GPA: 2.83/4.00</span>
                </p>
                <p className="text-sm text-muted-foreground">Sep 2019 - Jun 2024</p>
              </div>
              <ul className="list-disc pl-5 space-y-2">
                <li>Developed strong foundation in statistical analysis, probability theory, and data modeling</li>
                <li>Gained practical experience in data analysis using R and Python</li>
                <li>Completed coursework in machine learning, time series analysis, and statistical computing</li>
              </ul>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}

export default About
