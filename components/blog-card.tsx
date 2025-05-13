import Link from "next/link"
import { CalendarIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="relative rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-800/60 to-black/80 backdrop-blur-sm z-0 rounded-lg"></div>

      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('/cricket-bg.jpg')] bg-cover bg-center opacity-60 z-0 rounded-lg"></div>

      {/* Content Layer */}
      <div className="relative z-10">
        <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden rounded-t-lg">
          <img
            src={post.featuredImage || "/placeholder.svg?height=300&width=500"}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge className="absolute top-4 left-4" variant="secondary">
            {post.category}
          </Badge>
        </Link>

        <div className="p-5 text-white">
          <div className="flex items-center text-sm text-gray-300 mb-3 space-x-4">
            <div className="flex items-center">
              <CalendarIcon className="mr-1 h-3 w-3" />
              <time dateTime={post.date}>{formatDate(post.date)}</time>
            </div>
          </div>

          <Link href={`/blog/${post.slug}`}>
            <h2 className="text-xl font-bold mb-2 hover:text-blue-300 transition-colors">
              {post.title}
            </h2>
          </Link>

          <p className="text-gray-200 mb-4 line-clamp-3">{post.excerpt}</p>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={post.author.avatar || "/placeholder.svg?height=40&width=40"}
                alt={post.author.name}
                className="w-8 h-8 rounded-full mr-2"
              />
              <span className="text-sm font-medium text-white">{post.author.name}</span>
            </div>

            <Button asChild variant="ghost" size="sm" className="text-blue-200 hover:text-white">
              <Link href={`/blog/${post.slug}`}>Read More</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  )
}
