import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Daily Urdu News Network</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-6">
          Welcome to Daily Urdu News Network, your most trusted destination for the latest, authentic, and up-to-date cricket news from Pakistan and around the world
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg">
              <Link href="/cricket">Cricket News</Link>
            </Button>
            
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden">
          <img
            src="/home.jpg"
            alt="Daily Urdu News Network"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
            <div className="text-white">
              <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">Featured</span>
              <h3 className="text-xl font-bold mt-2">Latest Cricket Match Results</h3>
              <p className="text-gray-200 text-sm mt-1">Comprehensive coverage of the latest cricket matches</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
