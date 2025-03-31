"use client"

import { motion } from "framer-motion"
import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Progress } from "@/components/ui/progress"

// Skills data
const skills = [
  { name: "HTML/CSS", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Next.js", level: 80 },
  { name: "Tailwind CSS", level: 90 },
  { name: "UI/UX Design", level: 75 },
]

export default function AboutPage() {
  const terminalRef = useRef(null)
  const skillsRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Terminal typing effect
    const terminal = terminalRef.current
    const text =
      "Hello, I'm a frontend developer with a passion for creating beautiful and interactive web experiences. I specialize in React, Next.js, and modern CSS frameworks like Tailwind."
    let i = 0

    const typeWriter = () => {
      if (i < text.length) {
        terminal.innerHTML += text.charAt(i)
        i++
        setTimeout(typeWriter, 30)
      }
    }

    typeWriter()

    // Skills animation
    const skillBars = skillsRef.current.querySelectorAll(".skill-bar")

    skillBars.forEach((bar, index) => {
      gsap.fromTo(
        bar,
        { width: 0 },
        {
          width: `${skills[index].level}%`,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: bar,
            start: "top 80%",
          },
        },
      )
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])

  return (
    <div className="container mx-auto px-4 py-20">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="w-64 h-64 mx-auto md:mx-0 relative">
            <Image
              src="/placeholder.svg?height=300&width=300"
              alt="Profile"
              width={300}
              height={300}
              className="rounded-full object-cover border-4 border-primary"
            />
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent animate-pulse"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-black/80 dark:bg-gray-800/80 rounded-lg p-4 font-mono text-green-400 h-64 overflow-auto">
            <div className="mb-2 text-white">$ whoami</div>
            <div ref={terminalRef} className="whitespace-pre-wrap"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div ref={skillsRef} className="max-w-2xl mx-auto space-y-6">
          {skills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="skill-bar h-2" />
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

