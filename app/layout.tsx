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
  title: "Latest Cricket News & Player Stats | Best Cricket Blog | Cricaismus",
  description:
    "Stay updated with the latest cricket news, match previews, ICC rankings, player stats, and expert analysis. Explore T20, ODI, and test cricket updates on Cricaismus.",
   keywords: [
    "cricket news",
    "pakistan cricket news today",
    "cricket players analysis",
    "match previews",
    "Live cricket score",
    "PSL 2024 updates",
    "cricket history",
    "cricket blogs",
    "T20 World Cup 2025",
    "Asia Cup schedule",
    "Cricket match prediction",
    "ODI rankings",
    "Today T20 World Cup squad announcements",
    "in-depth cricket insights and previews",
    "cricket player history and records",
    "pakistan team updates and match reviews",
    "Best bowling figures in Test cricket 2024",
    "Pakistan cricket team injury reports today",
    "best fantasy cricket team for world cup",
    "Cricket pitch report",
    "Women’s T20 World Cup",
    "cricket breaking news today",
    "match previews for upcoming cricket games",
    "cricket blog posts",
    "historical cricket matches",
    "player performance stats",
    "icc cricket news",
    "t20 world cup analysis",
    "odi match previews",
    "pakistan super league news",
    "international cricket updates"
  ],
  generator: "Next.js",
  authors: [{ name: "Cricaismus Team" }],
  category: "Cricket Latest News Blog",
  metadataBase: new URL("https://cricaismus.com"),
  alternates: {
    canonical: "https://cricaismus.com",
    languages: {
      "en-US": "/en-US",
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
    google: "your-google-site-verification-code", // Replace with your actual code
  },
  icons: {
    icon: [
      { url: "/image.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/image.png", sizes: "180x180" },
    shortcut: { url: "/image.png" },
  },
  openGraph: {
    title: "Latest Cricket News & Player Stats | Best Cricket Blog | Cricaismus",
    description: "Stay updated with the latest cricket news, match previews, ICC rankings, player stats, and expert analysis on Cricaismus.",
    url: "https://cricaismus.com",
    siteName: "Cricaismus",
    images: [
      {
        url: "https://cricaismus.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cricaismus Logo and Cricket Highlights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Latest Cricket News & Player Stats | Best Cricket Blog | Cricaismus",
    description: "Stay updated with the latest cricket news, match previews, ICC rankings, player stats, and expert analysis on Cricaismus.",
    creator: "@cricaismus",
    images: ["https://cricaismus.com/twitter-image.jpg"],
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
        <meta name="author" content="Musab Khadim" />
        <meta name="language" content="en" />
        <meta httpEquiv="Content-Language" content="en" />
        <link rel="canonical" href="https://cricaismus.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Structured Data for SEO */}
        <Script
          id="ld-json"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": " Cricket Blog",
              name: "Cricaismus",
              url: "https://cricaismus.com",
              logo: {
                "@type": "ImageObject",
                url: "https://cricaismus.com/icon.png",
              },
              publisher: {
                "@type": "Organization",
                name: "Cricaismus",
                logo: {
                  "@type": "ImageObject",
                  url: "https://cricaismus.com/icon.png",
                },
              },
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
