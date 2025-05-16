import { Button } from "@/components/ui/button"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cricaismus - Explore Cricket Analysis, Player History & Match Insights",
  description:
    "Your Trusted and Most Reliable Source for the Latest and  Original Cricket News from Pakistan and globally Stay Updated cricket  Breaking News Stories, and  Team News,  cricket blog for the fan, by the fan and Up-to-Date Match Previews and Opinions & Expert Analysis and drem11 prediction .",
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
  openGraph: {
    title: "Cricaismus - best Cricket News from Pakistan and Around the World",
    description:
      "Your Trusted and Most Reliable Source for the Latest and  Original Cricket News from Pakistan and globally Stay Updated cricket  Breaking News Stories, and  Team News, and Up-to-Date  Match Previews and Opinions & Expert Analysis.",
    url: "https://cricaismus.com",
    siteName: "Cricaismus",
    images: [
      {
        url: "/home.jpg",
        width: 1200,
        height: 630,
        alt: "Cricaismus - Cricket News Network",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricaismus - Latest Cricket News and Team Updates, Match Insights & Expert Views.",
    description:
      "Your Trusted and Most Reliable Source for the Latest and  Original Cricket News from Pakistan and globally Stay Updated cricket  Breaking News Stories, and  Team News, and Up-to-Date  Match Previews and Opinions & Expert Analysis.",
    images: ["/home.jpg"],
  },
}


export default function HeroSection() {
  return (
   
    <section className="pt-2 pb-12 md:pt-4 md:pb-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-black dark:text-white">
            Latest Cricket News  Scores & Updates<span className="text-blue-600 dark:text-blue-400"> Cricaismus</span>
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
            Welcome to cricaismus, your most reliable site for the most recent, original, and latest cricket news from
            Pakistan and globally
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/cricket">Cricket News</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <img src="/home.jpg" alt="Daily Urdu News Network" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="text-white">
              <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
              <h3 className="text-xl font-bold mt-2">Daily Cricket News and Updates With cricaismus</h3>
              <p className="text-gray-200 text-sm mt-1">
               Stay updated with the most recent cricket news from around the world  get featuring 
               breaking news, team update news, player injuries and state , match previews, score 
               reports, ICC rankings, and expert insights. From PSL to IPL, Asia Cup to World Cup,
                remain updated with all that is happening in the cricketing world
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
