import type React from "react"
import type { Metadata } from "next/types"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CookieConsent from "@/components/cookie-consent"
import Preloader from "@/components/preloader"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Cricket News & Match Updates | Daily Urdu News Network",
  description:
    "Latest cricket news, match highlights, team news, ICC rankings & expert analysis – Daily Urdu News Network.",
  keywords:
    "Best computer institute in Rawalpindi, computer courses in rawalpindi, best php institute in rawalpindi islamabad, best web designing institute in rawalpindi islamabad pakistan, computer short courses, php academy in rawalpindi, web development institute in rawalpindi, computer course fee and duration, short courses fee in rawalpindi, computer short courses contents and duration and fee in rawalpindi islamabad, it courses in pakistan, Graphic designing course in rawalpindi, Programming courses in Rawalpinidi, IT courses in Rawalpindi, short courses in Rawalpindi, Urdu news, cricket news, technology news, business news, Pakistan news, sports updates, tech trends, business insights, cricket matches",
  generator: "Next.js",
  authors: [{ name: "Daily Urdu News Network Team" }],
  category: "News",
  metadataBase: new URL("https://dailyurdunews.com"),
  alternates: {
    canonical: "https://dailyurdunews.com",
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
    google: "google-site-verification-code", // <-- Replace with actual code
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/icon.png", sizes: "180x180" },
    shortcut: { url: "/icon.png" },
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* JSON-LD Structured Data for SEO */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "NewsMediaOrganization",
              name: "Daily Urdu News Network",
              url: "https://dailyurdunews.com",
              logo: "https://dailyurdunews.com/icon.png",
              sameAs: [
                "https://facebook.com/yourpage",
                "https://twitter.com/dailyurdunews",
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
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
