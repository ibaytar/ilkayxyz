import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "@/styles/globals.css";
import { DM_Sans } from "next/font/google";
import type React from "react";
import { Toaster } from "sonner";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "İlkay Şafak Baytar - Portfolio",
  description: "Data Analyst Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={dmSans.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {children}
          <Toaster richColors position="top-center" />
        </ThemeProvider>
      </body>
    </html>
  );
}
