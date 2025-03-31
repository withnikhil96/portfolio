"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { useState } from "react"
import confetti from "canvas-confetti"

export default function ResumePage() {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownload = () => {
    setIsDownloading(true)

    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false)

      // Trigger confetti effect
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      })
    }, 2000)
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Resume
      </motion.h1>

      <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-between items-start mb-8">
            <div>
              <h2 className="text-3xl font-bold">John Doe</h2>
              <p className="text-xl text-muted-foreground">Frontend Developer</p>
            </div>
            <Button onClick={handleDownload} disabled={isDownloading} className="relative overflow-hidden">
              {isDownloading ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Downloading...
                </span>
              ) : (
                <span className="flex items-center">
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </span>
              )}
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold mb-2 border-b pb-1">Summary</h3>
            <p className="text-muted-foreground">
              Passionate frontend developer with 5+ years of experience creating responsive, user-friendly web
              applications. Specialized in React, Next.js, and modern CSS frameworks.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold mb-2 border-b pb-1">Experience</h3>

            <div className="space-y-4">
              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Senior Frontend Developer</h4>
                  <span className="text-sm text-muted-foreground">2020 - Present</span>
                </div>
                <p className="text-sm text-muted-foreground">Tech Company Inc.</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Led the frontend development of the company's flagship product</li>
                  <li>Implemented responsive designs and animations using modern CSS techniques</li>
                  <li>Optimized application performance and accessibility</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between">
                  <h4 className="font-medium">Frontend Developer</h4>
                  <span className="text-sm text-muted-foreground">2018 - 2020</span>
                </div>
                <p className="text-sm text-muted-foreground">Web Agency Ltd.</p>
                <ul className="list-disc list-inside text-sm text-muted-foreground mt-2">
                  <li>Developed responsive websites for various clients</li>
                  <li>Collaborated with designers to implement pixel-perfect UIs</li>
                  <li>Maintained and improved existing web applications</li>
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-8"
          >
            <h3 className="text-xl font-semibold mb-2 border-b pb-1">Education</h3>

            <div>
              <div className="flex justify-between">
                <h4 className="font-medium">Bachelor of Science in Computer Science</h4>
                <span className="text-sm text-muted-foreground">2014 - 2018</span>
              </div>
              <p className="text-sm text-muted-foreground">University of Technology</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-2 border-b pb-1">Skills</h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {[
                "HTML/CSS",
                "JavaScript",
                "React",
                "Next.js",
                "Tailwind CSS",
                "TypeScript",
                "Git",
                "Responsive Design",
                "UI/UX",
                "Performance Optimization",
                "Accessibility",
                "Testing",
              ].map((skill) => (
                <div key={skill} className="bg-primary/10 text-primary rounded-full px-3 py-1 text-sm text-center">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

