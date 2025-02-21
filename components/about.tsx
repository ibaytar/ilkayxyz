import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

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

  return (
    <section id="about" className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32">
      <h2 className="mb-8 text-3xl font-bold gradient-text">About Me</h2>
      <Card>
        <CardContent className="pt-6">
          <p className="mb-6 text-lg text-primary">
            As a statistics graduate with a strong technical background in data engineering, data analytics, and machine
            learning, I specialize in large-scale data processing, ETL pipelines, data visualization, and modeling. I
            actively work with technologies such as SQL, Python, Apache NiFi, ClickHouse, Kafka, and Podman to develop
            solutions for data management and analytics. Passionate about enhancing data-driven decision-making
            processes and creating value for businesses, I continuously improve my expertise in data engineering and
            data science. In the long run, I aim to specialize as a Machine Learning Engineer or Data Scientist,
            focusing on deep learning, statistical modeling, and big data analytics.
          </p>
          <h3 className="mb-4 text-xl font-semibold">Skills</h3>
          <div className="flex flex-wrap gap-2 mb-8">
            {skills.map((skill) => (
              <Badge key={skill.toLowerCase().replace(/\s+/g, '-')} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
          <h3 className="mb-4 text-xl font-semibold">Education</h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-lg font-medium">Hacettepe University</h4>
              <p className="text-sm text-muted-foreground">Ankara, Turkey</p>
              <p className="text-sm">
                B.Sc. in Statistics; <span className="font-semibold text-emerald-500">GPA: 2.83/4.00</span>
              </p>
              <p className="text-sm text-muted-foreground">Sep 2019 - Jun 2024</p>
            </div>
            <ul className="list-disc pl-5 space-y-2">
              <li className="text-sm">
                Developed strong foundations in Database Management, focusing on SQL, relational databases, and query
                optimization.
              </li>
              <li className="text-sm">
                Completed coursework in Data Mining and Machine Learning, implementing predictive models using R and
                Python.
              </li>
              <li className="text-sm">
                Led a market trend prediction project using R & Shiny, improving forecast accuracy by 13% with using
                time series analysis.
              </li>
              <li className="text-sm">
                Applied statistical modeling and hypothesis testing to real-world datasets, enhancing decision-making
                processes through data-driven insights.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default About
