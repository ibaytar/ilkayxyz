"use client"

import { useEffect, useRef } from "react"

interface ReCaptchaProps {
  onVerify: (token: string) => void;
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

export function ReCaptcha({ onVerify, theme = 'light', size = 'normal' }: ReCaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const loadReCaptcha = () => {
      if (!window.grecaptcha) {
        console.error("reCAPTCHA not loaded")
        return
      }

      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      if (!siteKey) {
        console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set")
        return
      }

      try {
        if (containerRef.current) {
          window.grecaptcha.render(containerRef.current, {
            sitekey: siteKey,
            callback: onVerify,
            theme,
            size,
          })
        }
      } catch (error) {
        console.error("Error rendering reCAPTCHA:", error)
      }
    }

    if (window.grecaptcha) {
      loadReCaptcha()
    } else {
      window.addEventListener("recaptchaLoaded", loadReCaptcha)
      return () => window.removeEventListener("recaptchaLoaded", loadReCaptcha)
    }
  }, [onVerify, theme, size])

  return <div ref={containerRef} />
}
