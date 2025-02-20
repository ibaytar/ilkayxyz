"use client"

import Script from "next/script"

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
    onRecaptchaLoad: () => void;
    grecaptcha: ReCaptchaInstance;
  }
}

export function RecaptchaScript() {
  return (
    <Script
      src="https://www.google.com/recaptcha/api.js"
      onLoad={() => {
        console.log("reCAPTCHA script loaded")
        window.dispatchEvent(new Event("recaptchaLoaded"))
      }}
      strategy="afterInteractive"
    />
  )
}
