"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"

// Blog post data
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js",
    excerpt: "Learn how to build modern web applications with Next.js and React.",
    image: "/placeholder.svg?height=400&width=600",
    date: "March 15, 2023",
    readTime: "5 min read",
    author: "John Doe",
    slug: "getting-started-with-nextjs",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS",
    excerpt: "Tips and tricks for using Tailwind CSS effectively in your projects.",
    image: "/placeholder.svg?height=400&width=600",
    date: "April 22, 2023",
    readTime: "7 min read",
    author: "John Doe",
    slug: "mastering-tailwind-css",
  },
  {
    id: 3,
    title: "Creating Smooth Animations with Framer Motion",
    excerpt: "Learn how to add beautiful animations to your React applications.",
    image: "/placeholder.svg?height=400&width=600",
    date: "May 10, 2023",
    readTime: "6 min read",
    author: "John Doe",
    slug: "creating-smooth-animations",
  },
  {
    id: 4,
    title: "Optimizing Performance in Next.js",
    excerpt: "Best practices for improving the performance of your Next.js applications.",
    image: "/placeholder.svg?height=400&width=600",
    date: "June 5, 2023",
    readTime: "8 min read",
    author: "John Doe",
    slug: "optimizing-performance-nextjs",
  },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link href={`/blog/${post.slug}`} className="block h-full">
              <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-2 line-clamp-2">{post.title}</h2>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="px-6 pb-6 pt-0 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

