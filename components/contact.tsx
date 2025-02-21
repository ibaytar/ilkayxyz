"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    onRecaptchaVerify: ((token: string) => void) | null;
    grecaptcha: {
      reset: () => void;
    };
  }
}

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [recaptchaToken, setRecaptchaToken] = useState<string>("");

  useEffect(() => {
    window.onRecaptchaVerify = (token: string) => {
      setRecaptchaToken(token);
    };

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      window.onRecaptchaVerify = null;
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA verification");
      return;
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        }
      );

      console.log("Email sent successfully");
      form.current.reset();
      window.grecaptcha.reset();
      setRecaptchaToken("");
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error("Failed to send email");
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32"
    >
      <h2 className="mb-8 text-3xl font-bold gradient-text">Get in Touch</h2>
      <Card>
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Me</h3>
              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="from_name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="from_email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    required
                    className="min-h-[120px]"
                  />
                </div>
                <div
                  className="g-recaptcha mb-4"
                  data-sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                  data-callback="onRecaptchaVerify"
                />
                <Button type="submit" disabled={!recaptchaToken}>
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Mail className="h-5 w-5" />
                  <a href="mailto:ilkaybaytar@gmail.com">
                    <span>ilkaybaytar@gmail.com</span>
                  </a>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-5 w-5" />
                  <span>Istanbul, Turkey</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Linkedin className="h-5 w-5" />
                    <a
                      href="https://linkedin.com/in/ilkaybaytar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Github className="h-5 w-5" />
                    <a
                      href="https://github.com/ibaytar"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default Contact;
