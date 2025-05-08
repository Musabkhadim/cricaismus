import type { Metadata } from "next"
import SubmitBlogClient from "./SubmitBlogClient"

export const metadata: Metadata = {
  title: "Submit Blog | Daily Urdu News Network",
  description: "Submit your blog to Daily Urdu News Network",
}

export default function SubmitBlogPage() {
  return <SubmitBlogClient />
}
