"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail, MapPin, Loader2 } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

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
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    if (!form.current) return;

    if (!recaptchaToken) {
      toast.error("Please complete the reCAPTCHA verification");
      setIsLoading(false);
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
      toast.success("Your message has been sent successfully!");
    } catch (error) {
      console.error("Failed to send email");
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="container mx-auto max-w-5xl py-12 md:py-24 lg:py-32"
    >
      <motion.h2 
        className="mb-8 text-3xl font-bold gradient-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        Get in Touch
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <Card>
          <CardContent className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              >
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
                  <Button 
                    type="submit" 
                    disabled={!recaptchaToken || isLoading}
                    className="w-full"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
              >
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 group">
                    <Mail className="h-5 w-5 transition-all duration-500 ease-in-out group-hover:text-primary" />
                    <a 
                      href="mailto:ilkaybaytar@gmail.com"
                      className="transition-all duration-500 ease-in-out hover:text-primary hover:glow"
                    >
                      <span>ilkaybaytar@gmail.com</span>
                    </a>
                  </div>
                  <div className="flex items-center space-x-2 group">
                    <MapPin className="h-5 w-5 transition-all duration-500 ease-in-out group-hover:text-primary" />
                    <span className="transition-all duration-500 ease-in-out group-hover:text-primary group-hover:glow">Istanbul, Turkey</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2 group">
                      <Linkedin className="h-5 w-5 transition-all duration-500 ease-in-out group-hover:text-primary" />
                      <a
                        href="https://linkedin.com/in/ilkay-baytar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-500 ease-in-out hover:text-primary hover:glow"
                      >
                        LinkedIn
                      </a>
                    </div>
                    <div className="flex items-center space-x-2 group">
                      <Github className="h-5 w-5 transition-all duration-500 ease-in-out group-hover:text-primary" />
                      <a
                        href="https://github.com/ibaytar"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-500 ease-in-out hover:text-primary hover:glow"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
};

export default Contact;
