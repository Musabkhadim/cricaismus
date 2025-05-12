import type { Metadata } from "next"
import BlogGrid from "@/components/blog-grid"
import { getAllPosts } from "@/lib/posts"

export const metadata: Metadata = {
  title: "Cricket News | Daily Urdu News Network",
  description: "Latest cricket news, match updates, player profiles, and analysis",
}

export default async function CricketPage() {
  const posts = await getAllPosts()
  const cricketPosts = posts.filter((post) => post.category === "cricket")

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Cricket News</h1>
        <p className="text-gray-600 dark:text-gray-400">
     Catch every moment from the world of cricket — from breaking news and match highlights to in-depth player stories, team updates, and expert insights. Everything a true cricket fan needs, all in one place.


        </p>
      </div>

      <BlogGrid posts={cricketPosts} />
    </div>
  )
}
