import BlogCard from "@/components/blog-card"
import BlogCardSkeleton from "@/components/blog-card-skeleton"
import type { Post } from "@/lib/types"

interface BlogGridProps {
  posts: Post[]
  isLoading?: boolean
}

export default function BlogGrid({ posts, isLoading = false }: BlogGridProps) {
  if (isLoading) {
    return (
      <div className="masonry-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <BlogCardSkeleton key={i} />
        ))}
      </div>
    )
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">No posts found</h3>
      </div>
    )
  }

  return (
    <div className="masonry-grid">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  )
}
