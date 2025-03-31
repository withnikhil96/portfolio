"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Featured projects data
const featuredProjects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform built with Next.js and Tailwind CSS.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "Tailwind CSS", "Stripe"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A drag-and-drop task management application with real-time updates.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Firebase", "Framer Motion"],
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "A creative portfolio website with advanced animations and interactions.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["Next.js", "GSAP", "Three.js"],
  },
]

export default function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-20" ref={ref}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </motion.div>

      <div className="space-y-20">
        {featuredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className={`${index % 2 === 1 ? "md:order-2" : ""}`}>
              <div className="relative overflow-hidden rounded-lg group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="inline-block text-white border-white hover:bg-white/20 font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] px-3 py-1 text-xs"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </div>

            <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
              <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <Button 
               variant="outline" 
               size="sm"
               className="inline-block text-white border-white hover:bg-white/20 font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_10px_rgba(255,255,255,0.3)] px-3 py-1 text-xs"
              >
                <Link href={`/projects#${project.id}`} className="flex items-center">
                  View Details
                  <ArrowRight className="ml-1.5 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <Button asChild>
            <Link href="/projects">View All Projects</Link>
          </Button>
      </motion.div>
    </section>
  )
}

