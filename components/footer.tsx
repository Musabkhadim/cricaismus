"use client"

import React, { useState } from "react"
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubscribed(true)
  }

  return (
    <footer className="relative border-t border-gray-800 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-800/60 to-black/80 backdrop-blur-sm z-0"></div>
      <div className="absolute inset-0 bg-[url('/cricket-bg.jpg')] bg-cover bg-center opacity-60 z-0"></div>

      {/* Actual Footer Content */}
      <div className="relative z-10">
        <div className="container mx-auto px-4 py-12 text-white">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Column 1: About */}
            <div>
              <h3 className="text-lg font-semibold mb-4">CRISAISMUS</h3>
              <p className="text-white/80 mb-4">
                Your go-to destination for all things Cricket.
                Stay updated with the latest Cricket news, only here.
                Your reliable source for Cricket updates and insights.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/profile.php?id=100083076459425"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-blue-400"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/musab-khadim-bb2310342/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-blue-400"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/awais_zakir_abbasi?igsh=bmJsZzV3Yzh6bmxv"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-pink-400"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/cricket" className="text-white/80 hover:text-blue-400">
                    Cricket
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/80 hover:text-blue-400">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/80 hover:text-blue-400">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/submit-blog" className="text-white/80 hover:text-blue-400">
                    Submit
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Newsletter */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-white/80 mb-4">
                Get cricket updates in your inbox!
              </p>

              {!subscribed ? (
                <form onSubmit={handleSubmit} className="flex">
                  <Input
                    type="email"
                    placeholder="Your email"
                    className="rounded-r-none text-black"
                    required
                  />
                  <Button type="submit" className="rounded-l-none">
                    Subscribe
                  </Button>
                </form>
              ) : (
                <p className="text-green-500 mt-2 font-semibold">✅ Thank you for subscribing!</p>
              )}
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="mt-8 pt-8 border-t border-white/20">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-white/70">
                &copy; {new Date().getFullYear()} cricaismus. All rights reserved.
              </p>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link
                  href="/privacy-policy"
                  className="text-sm text-white/70 hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-conditions"
                  className="text-sm text-white/70 hover:text-blue-400"
                >
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
