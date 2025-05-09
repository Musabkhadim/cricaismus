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
  description:
    "Latest news on Cricket, Technology, and Business. Learn about the latest developments in technology, business trends, and cricket matches from around the world.",
  keywords:
    "Urdu news, cricket news, technology news, business news, Pakistan news, sports updates, tech trends, business insights, cricket matches, Daily Urdu News Network",
  generator: "v0.dev",
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" }, // optional fallback
    ],
    apple: { url: "/icon.png", sizes: "180x180" }, // for iPhone/iPad homescreen
    shortcut: { url: "/icon.png" }, // general shortcut
  },
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
  authors: [{ name: "Daily Urdu News Network Team" }],
  category: "News",
  metadataBase: new URL("https://dailyurdunews.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ur-PK": "/ur-PK",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code", // Replace with your actual verification code
  },
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
