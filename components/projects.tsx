"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const projects = [
  {
    id: "lung-cancer-eda-2024",
    title: "Lung Cancer EDA and Prediction",
    date: "06/2024",
    description: "Streamlit Web Application",
    details: [
      "Conducted Exploratory Data Analysis (EDA) on lung cancer dataset, identifying key factors and their relationships.",
      "Developed machine learning models to predict lung cancer risk, utilizing naive bayes, clustering, and PCA.",
      "Created a Streamlit web application for interactive data visualization and risk prediction, improving accessibility for users.",
    ],
    technologies: ["Python", "Streamlit", "Machine Learning", "EDA"],
  },
  {
    id: "kpmg-coffee-shop-2023",
    title: "Data Analytics Challenge",
    date: "04/2023",
    description: "KPMG",
    details: [
      "Conducted case study for opening a coffee shop, utilizing socio-economic and rental cost data from Istanbul.",
      "Provided strategic recommendations for coffee shop placement, contributing to business planning and decision-making.",
    ],
    technologies: ["Data Analytics", "Geospatial Analysis", "Business Strategy"],
  },
  {
    id: "istanbul-solar-2023",
    title: "Istanbul Solar Panel Data",
    date: "01/2023",
    description: "Time Series Analysis",
    details: [
      "Analyzed Istanbul solar panel data using advanced statistical techniques such as seasonal decomposition, regression, and ARIMA models, enabling accurate forecasting of energy generation.",
      "Applied data analysis and model development skills to enhance predictive accuracy and computational efficiency.",
    ],
    technologies: ["Time Series Analysis", "ARIMA", "Regression", "Energy Forecasting"],
  },
  {
    id: "covid-viz-2022",
    title: "Data Visualization For COVID Data",
    date: "05/2022",
    description: "Shiny Web Application",
    details: [
      "Developed a web application for visualizing Covid-19 data, providing an interactive platform for data exploration and analysis.",
      "Implemented features including four different ggplot2 plots with variable selectors and data tables for different continents, enhancing the comprehensiveness and versatility of the application.",
    ],
    technologies: ["R", "Shiny", "ggplot2", "Data Visualization"],
  },
]

const Projects = () => {
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
    <section id="projects" className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32">
      <motion.h2 
        className="mb-8 text-3xl font-bold gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Projects
      </motion.h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 + index * 0.2 }}
          >
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </div>
                  <CardDescription>{project.date}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  {project.details.map((detail, dIndex) => (
                    <motion.li
                      key={dIndex}
                      variants={listItemVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.2 + dIndex * 0.1 }}
                      className="text-sm text-primary"
                    >
                      {detail}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, tIndex) => (
                    <motion.div
                      key={`${project.id}-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                      variants={techBadgeVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.2 + tIndex * 0.1 }}
                    >
                      <Badge variant="outline">{tech}</Badge>
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

export default Projects
