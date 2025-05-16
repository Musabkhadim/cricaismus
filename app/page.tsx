import HeroSection from "@/components/hero-section"
import BlogGrid from "@/components/blog-grid"
import NewsletterCTA from "@/components/newsletter-cta"
import { getAllPosts } from "@/lib/posts"

export default async function Home() {
  const posts = await getAllPosts()

  return (
    <div className="container mx-auto px-4 py-8">
      <HeroSection />

      <section className="my-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Latest Articles</h2>
          <a href="/all" className="text-blue-600 dark:text-blue-400 hover:underline">
            
          </a>
        </div>

        <BlogGrid posts={posts} />
      </section>

      {/* <div className="my-16 p-6 bg-gray-100 dark:bg-gray-800 rounded-lg">
        <div className="text-center mb-4">
          <h3 className="text-xl font-semibold">Advertisement</h3>
        </div>
        <div className="h-[250px] bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
          <p className="text-gray-500 dark:text-gray-400">Ad Space</p>
        </div>
      </div> */}

      <section className="my-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Cricket News</h2>
          <a href="/cricket" className="text-blue-600 dark:text-blue-400 hover:underline">
            View All
          </a>
        </div>

        <BlogGrid posts={posts.filter((post) => post.category === "cricket")} />
      </section>


      <NewsletterCTA />
    </div>
  )
}
