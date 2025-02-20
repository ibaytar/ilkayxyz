import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const Experience = () => {
  const experiences = [
    {
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

  return (
    <section id="experience" className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32">
      <h2 className="mb-8 text-3xl font-bold gradient-text">Work Experience</h2>
      <div className="grid gap-6 md:grid-cols-2">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} - {exp.location}
              </CardDescription>
              <CardDescription>{exp.period}</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 mb-4">
                {exp.responsibilities.map((resp, respIndex) => (
                  <li key={respIndex} className="text-sm mb-1 text-primary">
                    {resp}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline">
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

export default Experience

