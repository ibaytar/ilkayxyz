import type React from "react"
import "@/styles/globals.css"
import { DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { RecaptchaScript } from "@/components/recaptcha-script"

const dmSans = DM_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "İlkay Şafak Baytar - Portfolio",
  description: "Full-Stack Developer Portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
        </ThemeProvider>
        <RecaptchaScript />
      </body>
    </html>
  )
}

