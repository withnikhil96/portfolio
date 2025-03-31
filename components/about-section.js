"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20" ref={ref}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <div className="w-full h-80 md:h-96 relative rounded-lg overflow-hidden">
              <Image src="/placeholder.svg?height=400&width=300" alt="Profile" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary rounded-lg flex items-center justify-center">
              <div className="text-center text-primary-foreground">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Years of Experience</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-4">Frontend Developer & UI/UX Designer</h3>
          <p className="text-muted-foreground mb-6">
            I'm a passionate frontend developer with 5+ years of experience creating responsive, user-friendly web
            applications. I specialize in React, Next.js, and modern CSS frameworks like Tailwind CSS.
          </p>
          <p className="text-muted-foreground mb-6">
            My goal is to build applications that are not only functional but also provide an exceptional user
            experience. I'm constantly learning new technologies and techniques to improve my skills.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div>
              <h4 className="font-bold mb-2">Name:</h4>
              <p className="text-muted-foreground">John Doe</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Email:</h4>
              <p className="text-muted-foreground">john@example.com</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Location:</h4>
              <p className="text-muted-foreground">New York, USA</p>
            </div>
            <div>
              <h4 className="font-bold mb-2">Availability:</h4>
              <p className="text-muted-foreground">Freelance & Full-time</p>
            </div>
          </div>

          <Button asChild>
            <Link href="/about">More About Me</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

