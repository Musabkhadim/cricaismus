import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarIcon, Clock, User, Facebook, Twitter, Linkedin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { getPostBySlug, getAllPosts } from "@/lib/posts"
import { formatDate } from "@/lib/utils"
import BlogGrid from "@/components/blog-grid"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found | Daily Urdu News Network",
      description: "The requested post could not be found.",
    }
  }

  return {
    title: `${post.title} | Daily Urdu News Network`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage || "/placeholder.svg?height=630&width=1200",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.featuredImage || "/placeholder.svg?height=630&width=1200"],
    },
  }
}

export async function generateStaticParams() {
  const posts = await getAllPosts()

  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = await getAllPosts()
  const filteredRelatedPosts = relatedPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 4)

  return (
    <div className="container mx-auto px-4 py-8">
      <article className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link
            href={`/${post.category}`}
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
          >
            <span className="mr-2">←</span> Back to {post.category.charAt(0).toUpperCase() + post.category.slice(1)}
          </Link>
        </div>

        <Badge className="mb-4">{post.category}</Badge>
        <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

        <div className="flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 mb-6 gap-4">
          <div className="flex items-center">
            <User className="mr-1 h-4 w-4" />
            <span>{post.author.name}</span>
          </div>
          <div className="flex items-center">
            <CalendarIcon className="mr-1 h-4 w-4" />
            <time dateTime={post.date}>{formatDate(post.date)}</time>
          </div>
          <div className="flex items-center">
            <Clock className="mr-1 h-4 w-4" />
            <span>{post.readingTime} min read</span>
          </div>
        </div>

        <div className="relative aspect-[16/9] mb-8 rounded-lg overflow-hidden">
          <img
            src={post.featuredImage || "/placeholder.svg?height=500&width=900"}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="blog-content mb-8">{post.content}</div>

        <div className="border-t border-b border-gray-200 dark:border-gray-800 py-6 my-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center">
              <img
                src={post.author.avatar || "/placeholder.svg?height=60&width=60"}
                alt={post.author.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-medium">{post.author.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {post.author.bio || "Writer at Daily Urdu News Network"}
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-sm font-medium mb-2 text-center sm:text-right">Share this article</h4>
              <div className="flex space-x-2">
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                      `https://dailyurdunews.com/blog/${post.slug}`,
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <Facebook className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                      `https://dailyurdunews.com/blog/${post.slug}`,
                    )}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Twitter"
                  >
                    <Twitter className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                      `https://dailyurdunews.com/blog/${post.slug}`,
                    )}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="my-16 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg max-w-4xl mx-auto">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold">Advertisement</h3>
        </div>
        <div className="h-[250px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Ad Space</p>
        </div>
      </div>

      {filteredRelatedPosts.length > 0 && (
        <section className="max-w-6xl mx-auto my-16">
          <h2 className="text-2xl font-bold mb-8">Related Articles</h2>
          <BlogGrid posts={filteredRelatedPosts} />
        </section>
      )}
    </div>
  )
}
