import type { Metadata } from "next"
import BlogGrid from "@/components/blog-grid"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Cricket News & Record |cricaismus",
  description: "Latest cricket news, match updates, player profiles, and analysis",
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
}

export default async function CricketPage() {
  const posts = await getAllPosts()
  const cricketPosts = posts.filter((post) => post.category === "cricket")

  return (
   <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
    <div className="relative rounded-xl overflow-hidden mb-12 shadow-xl">
  {/* Dark transparent gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-800/60 to-black/80 z-10 backdrop-blur-sm"></div>

  {/* Background image with better visibility */}
  <div className="absolute inset-0 bg-[url('/cricket-bg.jpg')] bg-cover bg-center opacity-60 z-0"></div>

  {/* Content */}
  <div className="relative z-20 py-16 px-6 md:px-12 text-center text-white">
    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
      Cricket News & Records
    </h1>
    <p className="text-xl max-w-3xl mx-auto font-medium text-white/85 drop-shadow">
       Welcome to <strong>Cricket News Hub</strong> — your go-to place for all things cricket.
        Catch every second from the cricket world — from breaking news and match highlights to 
        in-depth player profiles, team news, and expert analysis.   
    </p>
  </div>
</div>

      <BlogGrid posts={cricketPosts} />
    </div>
  )
}
