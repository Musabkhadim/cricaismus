"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setIsSuccess(true)
      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (err) {
      setError("Failed to send message. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Email Card */}
          <div className="relative rounded-lg shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-800/60 to-black/80 backdrop-blur-sm z-0 rounded-lg"></div>
            <div className="absolute inset-0 bg-[url('/cricket-bg.jpg')] bg-cover bg-center opacity-60 z-0 rounded-lg"></div>
            <div className="relative z-10 p-6 flex flex-col items-center text-center text-white">
              <Mail className="h-10 w-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">Email</h3>
              <p>
                awaiszKIR787@gmail.com<br />musabkhadim363@gmail.com
              </p>
            </div>
          </div>

          {/* Phone Card */}
          <div className="relative rounded-lg shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-800/60 to-black/80 backdrop-blur-sm z-0 rounded-lg"></div>
            <div className="absolute inset-0 bg-[url('/cricket-bg.jpg')] bg-cover bg-center opacity-60 z-0 rounded-lg"></div>
            <div className="relative z-10 p-6 flex flex-col items-center text-center text-white">
              <Phone className="h-10 w-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">Phone</h3>
              <p>
                +92 3495009145<br />+92 347 0458847<br />+92 312 5266834
              </p>
            </div>
          </div>

          {/* Address Card */}
          <div className="relative rounded-lg shadow-sm">
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-800/60 to-black/80 backdrop-blur-sm z-0 rounded-lg"></div>
            <div className="absolute inset-0 bg-[url('/cricket-bg.jpg')] bg-cover bg-center opacity-60 z-0 rounded-lg"></div>
            <div className="relative z-10 p-6 flex flex-col items-center text-center text-white">
              <MapPin className="h-10 w-10 text-blue-300 mb-4" />
              <h3 className="text-xl font-medium mb-2">Address</h3>
              <p>
                Offic 3/15,<br />5th Floor,Silkcenter,<br />Rehmanabad,Murree Road,Rawalpindi
              </p>
            </div>
          </div>
        </div>

        {/* Message Form Card */}
        <div className="relative rounded-lg shadow-sm">
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-800/60 to-black/80 backdrop-blur-sm z-0 rounded-lg"></div>
          <div className="absolute inset-0 bg-[url('/cricket-bg.jpg')] bg-cover bg-center opacity-60 z-0 rounded-lg"></div>
          <div className="relative z-10 p-8 text-white">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>

            {isSuccess ? (
              <div className="bg-green-900/20 p-6 rounded-md text-green-200">
                <h3 className="text-xl font-medium mb-2">Message Sent!</h3>
                <p>Thank you for contacting us. We'll get back to you as soon as possible.</p>
                <Button className="mt-4" onClick={() => setIsSuccess(false)}>
                  Send Another Message
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
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {error && <div className="text-red-300">{error}</div>}

                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
