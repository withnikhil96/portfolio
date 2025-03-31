"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import gsap from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import Image from "next/image"

export default function HeroSection() {
  const textRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
  // Track mouse position for the profile image effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      })
    }
    
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    gsap.registerPlugin(TextPlugin)

    const tl = gsap.timeline({ repeat: -1 })

    tl.to(textRef.current, {
      duration: 2,
      text: "Frontend Developer",
      ease: "none",
    })
      .to(textRef.current, {
        duration: 1,
        delay: 1,
        text: "",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 2,
        text: "UI/UX Designer",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1,
        delay: 1,
        text: "",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 2,
        text: "Creative Coder",
        ease: "none",
      })
      .to(textRef.current, {
        duration: 1,
        delay: 1,
        text: "",
        ease: "none",
      })

    return () => {
      tl.kill()
    }
  }, [])

  // Function to handle smooth scrolling to the next section
  const scrollToNextSection = () => {
    // Find the next section (likely the About or Projects section)
    const nextSection = document.getElementById('about') || document.getElementById('projects')
    
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    } else {
      // Fallback: scroll down by viewport height if no specific section found
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section className="min-h-screen flex flex-col justify-center relative pt-20">
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="max-w-3xl">
          <motion.h2
            className="text-xl md:text-2xl font-medium text-primary mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 glitch-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Nikhil Ranjan
          </motion.h1>

          <motion.div
            className="text-2xl md:text-4xl font-bold mb-6 h-10 md:h-14 flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="mr-2">I'm a</span>
            <span ref={textRef} className="text-primary"></span>
            <span className="animate-blink">|</span>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            I build exceptional and accessible digital experiences for the web. Focused on creating responsive,
            user-friendly interfaces with modern technologies.
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button 
              size="lg" 
              className="bg-primary p-3 hover:bg-primary/90 text-black font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5" 
              asChild
            >
              <Link href="/projects" className="flex items-center">
                View My Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 p-3 font-medium hover:bg-primary/10 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5" 
              asChild
            >
              <Link href="/contact">Contact Me</Link>
            </Button>
          </motion.div>
        </div>
        
        {/* Profile Image with Mouse Movement Effect */}
        <motion.div 
          className="hidden lg:flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20">
            <motion.div
              style={{
                x: mousePosition.x * 15,
                y: mousePosition.y * 15,
              }}
              transition={{ type: "spring", damping: 10, stiffness: 50 }}
              className="w-full h-full"
            >
              <Image
                src="/images/nik.jpg"
                alt="Nikhil Ranjan"
                fill
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover"
                priority
              />
            </motion.div>
          </div>
          
          {/* Decorative circle elements */}
          <div className="absolute w-32 h-32 rounded-full bg-primary/10 -left-10 -top-10 z-[-1]"></div>
          <div className="absolute w-24 h-24 rounded-full bg-primary/20 -right-5 -bottom-5 z-[-1]"></div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        onClick={scrollToNextSection}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        role="button"
        aria-label="Scroll down"
        tabIndex={0}
       
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1 hover:border-primary transition-colors">
            <motion.div
              className="w-1 h-1 bg-primary rounded-full"
              animate={{
                y: [0, 12, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}

