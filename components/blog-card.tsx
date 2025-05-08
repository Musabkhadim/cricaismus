import Link from "next/link"
import { CalendarIcon, Clock } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { formatDate } from "@/lib/utils"
import type { Post } from "@/lib/types"

interface BlogCardProps {
  post: Post
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link href={`/blog/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
        <img
          src={post.featuredImage || "/placeholder.svg?height=300&width=500"}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-4 left-4" variant="secondary">
          {post.category}
        </Badge>
      </Link>

      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3 space-x-4">
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-3 w-3" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-3 w-3" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {post.title}
          </h2>
        </Link>

        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">{post.excerpt}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={post.author.avatar || "/placeholder.svg?height=40&width=40"}
              alt={post.author.name}
              className="w-8 h-8 rounded-full mr-2"
            />
            <span className="text-sm font-medium">{post.author.name}</span>
          </div>

          <Button asChild variant="ghost" size="sm">
            <Link href={`/blog/${post.slug}`}>Read More</Link>
          </Button>
        </div>
      </div>
    </article>
  )
}
