"use client"

import { useEffect, useRef, useState } from "react"

interface ReCaptchaProps {
  onVerifyAction: (token: string) => void;
  theme?: 'light' | 'dark';
  size?: 'normal' | 'compact';
}

interface ReCaptchaInstance {
  render: (
    container: HTMLElement | string,
    parameters: {
      sitekey: string;
      callback?: (token: string) => void;
      expired?: () => void;
      error?: () => void;
      theme?: 'light' | 'dark';
      size?: 'normal' | 'compact';
    }
  ) => number;
  reset: (widgetId?: number) => void;
  getResponse: (widgetId?: number) => string;
  execute: (widgetId?: number) => void;
}

declare global {
  interface Window {
    grecaptcha: ReCaptchaInstance;
  }
}

export function ReCaptcha({ onVerifyAction, theme = 'light', size = 'normal' }: ReCaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const loadReCaptcha = () => {
      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      if (!siteKey) {
        console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set")
        return
      }

      if (!window.grecaptcha?.render) {
        console.error("reCAPTCHA not loaded yet")
        return
      }

      if (!containerRef.current || isLoaded) {
        return
      }

      try {
        window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          callback: onVerifyAction,
          theme,
          size,
        })
        setIsLoaded(true)
      } catch (error) {
        console.error("Error rendering reCAPTCHA:", error)
      }
    }

    const handleRecaptchaLoad = () => {
      if (typeof window !== 'undefined' && window.grecaptcha) {
        loadReCaptcha()
      }
    }

    // Try to load if already available
    handleRecaptchaLoad()

    // Listen for the load event
    window.addEventListener("recaptchaLoaded", handleRecaptchaLoad)
    return () => {
      window.removeEventListener("recaptchaLoaded", handleRecaptchaLoad)
    }
  }, [onVerifyAction, theme, size, isLoaded])

  return (
    <div 
      ref={containerRef} 
      className="g-recaptcha"
      style={{ minHeight: '78px' }}
    />
  )
}
