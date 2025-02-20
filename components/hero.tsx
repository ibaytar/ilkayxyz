"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

const Hero = () => {
  return (
    <section className="container mx-auto max-w-5xl flex flex-col items-center justify-center gap-6 pb-8 pt-24 md:pt-32">
      <motion.h1
        className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        İlkay Şafak Baytar
      </motion.h1>
      <motion.h2
        className="text-xl sm:text-2xl text-center relative inline-block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <span className="relative z-10 text-primary">Statistician</span>
        <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 blur-lg -z-10"></span>
      </motion.h2>
      <motion.p
        className="max-w-[700px] text-center text-lg text-muted-foreground"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Specializing in data engineering, analytics, and machine learning
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="#contact" scroll={false}>
          <Button
            size="lg"
            onClick={() => {
              const contactSection = document.getElementById("contact")
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Get in Touch
          </Button>
        </Link>
      </motion.div>
    </section>
  )
}

export default Hero

