import type { Post } from "./types"
import { collection, getDocs, doc, getDoc, query, orderBy, where } from "firebase/firestore"
import { db } from "../firebaseconfig"

export async function getAllPosts(): Promise<Post[]> {
  try {
    const postsRef = collection(db, "blogs")
    const postsQuery = query(postsRef, orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(postsQuery)

    const posts: Post[] = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      
      // Log the data to see what's coming from Firestore
      console.log(`Blog data for ${doc.id}:`, data)
      
      posts.push({
        slug: doc.id,
        title: data.title || "",
        date: data.createdAt ? new Date(data.createdAt.toDate()).toISOString().split("T")[0] : "",
        category: data.category || "",
        excerpt: data.content ? data.content.substring(0, 150) + "..." : "",
        content: data.content || "",
        // Use the featuredImage directly from the data
        featuredImage: data.featuredImage || "/placeholder.svg?height=500&width=900",
        readingTime: Math.ceil(data.content?.length / 1000) || 5,
        author: {
          name: data.name || "",
          // Use the name field as the author name if no specific author field exists
          avatar: "/musab.png", // Default avatar
          bio: "8 years of expertise in writing impactful cricket blogs.", // Default bio
        },
      })
    })

    // Log all posts to verify data
    console.log("All posts retrieved:", posts.length)
    
    return posts
  } catch (error) {
    console.error("Error fetching posts:", error)
    return []
  }
}

export async function getPostBySlug(slug: string): Promise<Post | undefined> {
  try {
    const docRef = doc(db, "blogs", slug)
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {
      const data = docSnap.data()
      
      // Log the data to see what's coming from Firestore
      console.log(`Blog data for slug ${slug}:`, data)
      
      return {
        slug: docSnap.id,
        title: data.title || "",
        date: data.createdAt ? new Date(data.createdAt.toDate()).toISOString().split("T")[0] : "",
        category: data.category || "",
        excerpt: data.content ? data.content.substring(0, 150) + "..." : "",
        content: data.content || "",
        // Use the featuredImage directly from the data
        featuredImage: data.featuredImage || "/placeholder.svg?height=500&width=900",
        readingTime: Math.ceil(data.content?.length / 1000) || 5,
        author: {
          name: data.name || "",
          avatar: "/musab.png", // Default avatar
          bio: "8 years of expertise in writing impactful cricket blogs.", // Default bio
        },
      }
    } else {
      return undefined
    }
  } catch (error) {
    console.error("Error fetching post by slug:", error)
    return undefined
  }
}

export async function getPostsByCategory(category: string): Promise<Post[]> {
  try {
    const postsRef = collection(db, "blogs")
    const postsQuery = query(postsRef, where("category", "==", category), orderBy("createdAt", "desc"))
    const querySnapshot = await getDocs(postsQuery)

    const posts: Post[] = []
    querySnapshot.forEach((doc) => {
      const data = doc.data()
      
      // Log the data to see what's coming from Firestore
      console.log(`Blog data for ${doc.id} in category ${category}:`, data)
      
      posts.push({
        slug: doc.id,
        title: data.title || "",
        date: data.createdAt ? new Date(data.createdAt.toDate()).toISOString().split("T")[0] : "",
        category: data.category || "",
        excerpt: data.content ? data.content.substring(0, 150) + "..." : "",
        content: data.content || "",
        // Use the featuredImage directly from the data
        featuredImage: data.featuredImage || "/placeholder.svg?height=500&width=900",
        readingTime: Math.ceil(data.content?.length / 1000) || 5,
        author: {
          name: data.name || "",
          avatar: "/musab.png", // Default avatar
          bio: "8 years of expertise in writing impactful cricket blogs.", // Default bio
        },
      })
    })

    // Log all posts to verify data
    console.log(`Posts retrieved for category ${category}:`, posts.length)
    
    return posts
  } catch (error) {
    console.error(`Error fetching posts for category ${category}:`, error)
    return []
  }
}
