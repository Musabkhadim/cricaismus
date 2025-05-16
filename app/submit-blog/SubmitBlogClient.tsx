"use client"
import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "../../firebaseconfig"
import { AlertCircle, CheckCircle2 } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SubmitBlogClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    category: "",
    content: "",
  })

  // Just keep a simple imageUrl state
  const [imageUrl, setImageUrl] = useState<string>("")
  const [previewUrl, setPreviewUrl] = useState<string>("")

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, category: value }))
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "") // Remove special characters
      .replace(/\s+/g, "-") // Replace spaces with dashes
  }

  // Handle image URL change and try to preview it
  const handleImageUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const url = e.target.value
    setImageUrl(url)

    // If it's a valid URL, set it as preview
    if (url.startsWith("http")) {
      setPreviewUrl(url)
    } else {
      setPreviewUrl("")
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const slug = generateSlug(formData.title)

    try {
      const blogRef = doc(db, "blogs", slug)
      const existingBlog = await getDoc(blogRef)

      if (existingBlog.exists()) {
        setError("A blog with this title already exists. Please change the title.")
        setIsSubmitting(false)
        return
      }

      // Create the blog document with all data including the image URL
      const blogData = {
        ...formData,
        featuredImage: imageUrl, // Use the URL directly
        createdAt: new Date(),
        updatedAt: new Date(),
      }

      console.log("Saving blog data to Firestore:", blogData)
      await setDoc(blogRef, blogData)
      console.log("Blog document written with ID:", slug)

      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        title: "",
        category: "",
        content: "",
      })
      setImageUrl("")
      setPreviewUrl("")
    } catch (err: any) {
      console.error("Submit Error:", err)
      setError(`Failed to submit blog: ${err.message || "Unknown error"}`)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Submit Your Blog</h1>

        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-sm">
          {isSuccess ? (
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-md text-green-800 dark:text-green-200">
              <div className="flex items-center mb-2">
                <CheckCircle2 className="h-5 w-5 mr-2" />
                <h3 className="text-xl font-medium">Blog Submitted!</h3>
              </div>
              <p>Thank you for submitting your blog. Our editorial team will review it and get back to you soon.</p>
              <Button className="mt-4" onClick={() => setIsSuccess(false)}>
                Submit Another Blog
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>

              <div>
                <label htmlFor="title" className="block text-sm font-medium mb-2">
                  Blog Title
                </label>
                <Input id="title" name="title" value={formData.title} onChange={handleChange} required />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium mb-2">
                  Category
                </label>
                <Select value={formData.category} onValueChange={handleSelectChange} required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="cricket">Cricket</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="imageUrl" className="block text-sm font-medium mb-2">
                  Featured Image URL
                </label>
                <Input
                  id="imageUrl"
                  placeholder="https://firebasestorage.googleapis.com/v0/b/example.jpg"
                  value={imageUrl}
                  onChange={handleImageUrlChange}
                />
                {previewUrl && (
                  <div className="mt-2">
                    <p className="text-sm text-gray-500 mb-1">Image Preview:</p>
                    <img
                      src={previewUrl || "/placeholder.svg"}
                      alt="Preview"
                      className="max-h-40 rounded-md"
                      onError={() => {
                        setError("Invalid image URL. Please provide a valid direct link to an image.")
                        setPreviewUrl("")
                      }}
                    />
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="content" className="block text-sm font-medium mb-2">
                  Blog Content
                </label>
                <Textarea
                  id="content"
                  name="content"
                  rows={10}
                  value={formData.content}
                  onChange={handleChange}
                  required
                />
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                {isSubmitting ? "Submitting..." : "Submit Blog"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
