import type { Metadata } from "next"
import SubmitBlogClient from "./SubmitBlogClient"

export const metadata: Metadata = {
  title: "Latest Cricket News & Player Stats | Best Cricket Blog | Cricaismus",
  description:
    "Stay updated with the latest cricket news, match previews, ICC rankings, player stats, and expert analysis. Explore T20, ODI, and test cricket updates on Cricaismus.",
  keywords:
    "cricket news, player stats, ICC rankings, T20 updates, ODI highlights, PSL news, test match commentary, live scores, Cricaismus blog",
}

export default function SubmitBlogPage() {
  return <SubmitBlogClient />
}
