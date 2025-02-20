import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen px-4 sm:px-6 lg:px-8 pt-20">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}

