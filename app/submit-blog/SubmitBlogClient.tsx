"use client"
import type React from "react"
import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "../../firebaseconfig"
import { AlertCircle, CheckCircle2, X, ImageIcon } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function SubmitBlogClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    title: "",
    category: "",
    content: "",
  })

  // Add state for image upload
  const [image, setImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [imageFileName, setImageFileName] = useState<string>("")
  const [imageUrl, setImageUrl] = useState<string>("")
  const [isDragging, setIsDragging] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const fileInputRef = useRef<HTMLInputElement>(null)

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

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      handleImageFile(file)
    }
  }

  // Handle image file selection
  const handleImageFile = (file: File) => {
    // Check if file is an image
    if (!file.type.startsWith("image/")) {
      setError("Please select an image file (PNG, JPG, JPEG, etc.)")
      return
    }

    // Check file size (limit to 5MB)
    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB")
      return
    }

    setImage(file)
    setImageFileName(file.name)

    // Create preview URL
    const reader = new FileReader()
    reader.onload = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    setError("")
  }

  // Handle drag events
  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const file = e.dataTransfer.files?.[0]
    if (file) {
      handleImageFile(file)
    }
  }

  // Remove selected image
  const handleRemoveImage = () => {
    setImage(null)
    setImagePreview(null)
    setImageFileName("")
    setImageUrl("")
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Upload image to Firebase Storage
  const uploadImage = async (slug: string): Promise<string> => {
    if (!image) return ""

    try {
      // Create a unique filename using the slug and original filename
      const timestamp = new Date().getTime()
      const fileExtension = imageFileName.split(".").pop() || "jpg"
      const uniqueFilename = `${slug}-${timestamp}.${fileExtension}`

      // Create a reference to the file location in Firebase Storage
      const storageRef = ref(storage, `blog-images/${uniqueFilename}`)

      // Log the upload process
      console.log("Starting image upload to:", `blog-images/${uniqueFilename}`)

      // Upload the file
      const snapshot = await uploadBytes(storageRef, image)
      console.log("Image uploaded successfully")

      // Get the download URL
      const downloadURL = await getDownloadURL(snapshot.ref)
      console.log("Download URL obtained:", downloadURL)

      // Save the URL to state
      setImageUrl(downloadURL)

      return downloadURL
    } catch (error: any) {
      console.error("Error uploading image:", error)
      setError(`Image upload failed: ${error.message || "Unknown error"}`)
      throw error
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

      // Upload image if selected
      let featuredImage = ""
      if (image) {
        console.log("Uploading image for blog:", slug)
        featuredImage = await uploadImage(slug)
        console.log("Image uploaded successfully, URL:", featuredImage)
      }

      // Create the blog document with all data including the image URL
      const blogData = {
        ...formData,
        featuredImage,
        createdAt: new Date(),
        updatedAt: new Date(),
        imageFileName: imageFileName || null,
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
      setImage(null)
      setImagePreview(null)
      setImageFileName("")
      setImageUrl("")
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

              {/* Image Upload Section */}
              <div>
                <label className="block text-sm font-medium mb-2">Featured Image</label>
                <div
                  className={`border-2 border-dashed rounded-lg p-4 text-center ${
                    isDragging
                      ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  onDragEnter={handleDragEnter}
                  onDragLeave={handleDragLeave}
                  onDragOver={handleDragOver}
                  onDrop={handleDrop}
                >
                  <input
                    type="file"
                    id="image"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageChange}
                  />

                  {imagePreview ? (
                    <div className="relative">
                      <img
                        src={imagePreview || "/placeholder.svg"}
                        alt="Preview"
                        className="mx-auto max-h-64 rounded-lg"
                      />
                      {imageFileName && (
                        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 truncate">{imageFileName}</p>
                      )}
                      <button
                        type="button"
                        onClick={handleRemoveImage}
                        className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ) : (
                    <div className="py-8">
                      <ImageIcon className="mx-auto h-12 w-12 text-gray-400" />
                      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Drag and drop an image here, or{" "}
                        <button
                          type="button"
                          className="text-blue-500 hover:text-blue-600"
                          onClick={() => fileInputRef.current?.click()}
                        >
                          browse
                        </button>
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">PNG, JPG, JPEG up to 5MB</p>
                    </div>
                  )}
                </div>
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
