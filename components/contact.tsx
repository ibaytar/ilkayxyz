"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Linkedin, Github, AlertCircle } from "lucide-react"
import emailjs from "@emailjs/browser"
import { ReCaptcha } from "./recaptcha"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState("")
  const [recaptchaToken, setRecaptchaToken] = useState<string>("")
  const form = useRef<HTMLFormElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleRecaptchaVerify = useCallback((token: string) => {
    console.log("reCAPTCHA verified with token:", token)
    setRecaptchaToken(token)
    setError("")
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!recaptchaToken) {
      setError("Please complete the reCAPTCHA verification before sending the message.")
      return
    }

    setIsSubmitting(true)
    setError("")

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      )

      console.log("SUCCESS!", result.text)
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (error) {
      console.error("FAILED...", error)
      setError("Failed to send message. Please try again later.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32">
      <h2 className="mb-8 text-3xl font-bold gradient-text">Get in Touch</h2>
      <Card>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
              {isSubmitted ? (
                <div
                  className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
                  role="alert"
                >
                  <strong className="font-bold">Thank you! </strong>
                  <span className="block sm:inline">Your message has been sent successfully.</span>
                </div>
              ) : (
                <form ref={form} onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="mb-4">
                    <p className="text-sm text-muted-foreground mb-2">Please complete the reCAPTCHA verification:</p>
                    <ReCaptcha onVerify={handleRecaptchaVerify} />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                  {(error || !recaptchaToken) && (
                    <div className="flex items-center space-x-2 text-amber-500 mt-2">
                      <AlertCircle size={16} />
                      <span>{error || "Please complete the reCAPTCHA verification before sending."}</span>
                    </div>
                  )}
                </form>
              )}
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail size={20} className="text-primary" />
                  <a href="mailto:ilkaybaytar@gmail.com" className="hover:underline text-primary">
                    ilkaybaytar@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin size={20} className="text-primary" />
                  <span className="text-primary">İstanbul, Turkey</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Linkedin size={20} className="text-primary" />
                  <a
                    href="https://www.linkedin.com/in/ilkay-baytar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-primary"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <Github size={20} className="text-primary" />
                  <a
                    href="https://github.com/ibaytar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-primary"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

export default Contact

