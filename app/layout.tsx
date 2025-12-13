import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tejas Kapse - Full Stack Developer | Portfolio",
  description:
    "Portfolio of Tejas Kapse - Full Stack Developer, Python Developer, and Backend Engineer. Showcasing projects in React, Python, Machine Learning, and modern web technologies.",
  keywords: [
    "Full Stack Developer",
    "Python Developer",
    "Backend Engineer",
    "React",
    "Machine Learning",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Tejas Kapse" }],
  creator: "Tejas Kapse",
  openGraph: {
    type: "website",
    title: "Tejas Kapse - Full Stack Developer Portfolio",
    description: "Explore projects and experience in full-stack development, Python, and machine learning.",
    siteName: "Tejas Kapse Portfolio",
  },
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          enableColorScheme={false}
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
