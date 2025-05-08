export interface Author {
  name: string
  avatar?: string
  bio?: string
}

export interface Post {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
  featuredImage?: string
  readingTime: number
  author: Author
}
