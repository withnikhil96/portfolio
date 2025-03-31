"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, FileText, Mail, ChevronRight, ChevronLeft } from "lucide-react"

export default function SidePopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ x: 300 }}
            animate={{ x: 0 }}
            exit={{ x: 300 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="bg-card border border-border shadow-lg rounded-l-lg p-5 w-[280px] md:w-[320px]"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-lg">Connect With Me</h3>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="hover:bg-muted"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="space-y-4">
              <Button 
                variant="outline" 
                className="w-full justify-start py-5 hover:bg-muted/50 transition-colors" 
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Github className="mr-3 h-5 w-5" />
                  <span className="font-medium">GitHub</span>
                </a>
              </Button>

              <Button 
                variant="outline" 
                className="w-full justify-start py-5 hover:bg-muted/50 transition-colors" 
                asChild
              >
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <Linkedin className="mr-3 h-5 w-5" />
                  <span className="font-medium">LinkedIn</span>
                </a>
              </Button>

              <Button 
                variant="outline" 
                className="w-full justify-start py-5 hover:bg-muted/50 transition-colors" 
                asChild
              >
                <a href="/resume" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  <FileText className="mr-3 h-5 w-5" />
                  <span className="font-medium">Resume</span>
                </a>
              </Button>

              <Button 
                variant="outline" 
                className="w-full justify-start py-5 hover:bg-muted/50 transition-colors" 
                asChild
              >
                <a href="/contact" className="flex items-center">
                  <Mail className="mr-3 h-5 w-5" />
                  <span className="font-medium">Contact Me</span>
                </a>
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            className="bg-primary text-primary-foreground rounded-l-lg shadow-lg p-3 cursor-pointer hover:bg-primary/90 transition-colors"
            onClick={() => setIsOpen(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

