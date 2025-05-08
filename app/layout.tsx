import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import Preloader from "@/components/preloader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daily Urdu News Network",
  description: "Latest news on Cricket, Technology, and Business",
  openGraph: {
    title: "Daily Urdu News Network",
    description: "Latest news on Cricket, Technology, and Business",
    url: "https://dailyurdunews.com",
    siteName: "Daily Urdu News Network",
    images: [
      {
        url: "https://dailyurdunews.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Daily Urdu News Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daily Urdu News Network",
    description: "Latest news on Cricket, Technology, and Business",
    creator: "@dailyurdunews",
    images: ["https://dailyurdunews.com/twitter-image.jpg"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Preloader />
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  )
}
