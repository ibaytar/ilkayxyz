import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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
  return (
    <section id="projects" className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32">
      <h2 className="mb-8 text-3xl font-bold gradient-text">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>
                {project.description} - {project.date}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 mb-4">
                {project.details.map((detail) => (
                  <li 
                    key={`${project.id}-${detail.toLowerCase().slice(0, 20).replace(/\s+/g, '-')}`}
                    className="text-sm mb-1 text-primary"
                  >
                    {detail}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge 
                    key={`${project.id}-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    variant="outline"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects
