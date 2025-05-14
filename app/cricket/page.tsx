import type { Metadata } from "next"
import BlogGrid from "@/components/blog-grid"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Cricket News & Record | Daily Urdu News Network",
  description: "Latest cricket news, match updates, player profiles, and analysis",
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
       Welcome to <strong>Cricket News Hub</strong> — your one-stop destination for everything cricket. 
  Catch every moment from the world of cricket — from breaking news and match highlights to in-depth player stories, 
  team updates, and expert insights.
    </p>
  </div>
</div>

      <BlogGrid posts={cricketPosts} />
    </div>
  )
}
