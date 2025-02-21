"use client"

import { useEffect, useRef } from "react"

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
  const widgetIdRef = useRef<number>()

  useEffect(() => {
    const loadReCaptcha = () => {
      if (!window.grecaptcha) {
        console.error("reCAPTCHA not loaded yet")
        return
      }

      const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY
      if (!siteKey) {
        console.error("NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set")
        return
      }

      try {
        if (containerRef.current && !widgetIdRef.current) {
          console.log("Rendering reCAPTCHA with site key:", siteKey)
          widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
            sitekey: siteKey,
            callback: onVerifyAction,
            theme,
            size,
          })
        }
      } catch (error) {
        console.error("Error rendering reCAPTCHA:", error)
      }
    }

    // Try to load immediately if grecaptcha is already available
    if (window.grecaptcha && window.grecaptcha.render) {
      loadReCaptcha()
    }

    // Also listen for the load event
    window.addEventListener("recaptchaLoaded", loadReCaptcha)
    return () => {
      window.removeEventListener("recaptchaLoaded", loadReCaptcha)
    }
  }, [onVerifyAction, theme, size])

  return (
    <div 
      ref={containerRef} 
      className="g-recaptcha"
      style={{ minHeight: '78px' }}
    />
  )
}
