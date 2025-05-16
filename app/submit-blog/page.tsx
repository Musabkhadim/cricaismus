import type { Metadata } from "next"
import SubmitBlogClient from "./SubmitBlogClient"

export const metadata: Metadata = {
  title: "Latest Cricket News & Player Stats | Best Cricket Blog | Cricaismus",
  description:
    "Stay updated with the latest cricket news, match previews, ICC rankings, player stats, and expert analysis. Explore T20, ODI, and test cricket updates on Cricaismus.",
  keywords: [
    "cricket news",
    "pakistan cricket news today",
    "cricket players analysis",
    "match previews",
    "Live cricket score",
    "PSL 2024 updates",
    "cricket history",
    "cricket blogs",
    "T20 World Cup 2025",
    "Asia Cup schedule",
    "Cricket match prediction",
    "ODI rankings",
    "Today T20 World Cup squad announcements",
    "in-depth cricket insights and previews",
    "cricket player history and records",
    "pakistan team updates and match reviews",
    "Best bowling figures in Test cricket 2024",
    "Pakistan cricket team injury reports today",
    "best fantasy cricket team for world cup",
    "Cricket pitch report",
    "Women’s T20 World Cup",
    "cricket breaking news today",
    "match previews for upcoming cricket games",
    "cricket blog posts",
    "historical cricket matches",
    "player performance stats",
    "icc cricket news",
    "t20 world cup analysis",
    "odi match previews",
    "pakistan super league news",
    "international cricket updates"
  ],
}

export default function SubmitBlogPage() {
  return <SubmitBlogClient />
}
