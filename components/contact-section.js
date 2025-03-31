"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import Link from "next/link"
import { ArrowRight, Mail, MapPin, Phone, Check, AlertCircle } from "lucide-react"
import confetti from "canvas-confetti"


export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  
  // Add state for form handling
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })

  const [status, setStatus] = useState("idle") // idle, loading, success, error

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.id]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus("loading")

    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.2) { // 80% chance of success
        setStatus("success")
        setFormState({ name: "", email: "", message: "" })
        
        // Trigger confetti effect directly
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
      } else {
        setStatus("error")
      }
    }, 2000)
  }

  return (
    <section id="contact" className="py-20" ref={ref}>
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Email</h4>
                <p className="text-muted-foreground">john@example.com</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Phone</h4>
                <p className="text-muted-foreground">+1 (123) 456-7890</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium mb-1">Location</h4>
                <p className="text-muted-foreground">New York, USA</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h4 className="font-medium mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>

              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>

              <a
                href="#"
                className="bg-primary/10 p-3 rounded-full text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <Input 
                id="name" 
                placeholder="Your name" 
                value={formState.name}
                onChange={handleChange}
                required
                disabled={status === "loading" || status === "success"}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="Your email" 
                value={formState.email}
                onChange={handleChange}
                required
                disabled={status === "loading" || status === "success"}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea 
                id="message" 
                placeholder="Your message" 
                className="min-h-[150px]"
                value={formState.message}
                onChange={handleChange}
                required
                disabled={status === "loading" || status === "success"}
              />
            </div>

            <Button 
              type="submit"
              disabled={status === "loading" || status === "success"}
              className={` transition-all flex items-center justify-center duration-300 text-sm hover:scale-105 ${status === "error" ? "bg-red-500 hover:bg-red-600" : ""}`}
            >
              {status === "idle" && (
                <>
                  Send Message <ArrowRight className="ml-1 h-3 w-3" />
                </>
              )}

              {status === "loading" && (
                <>
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
                  Sending...
                </>
              )}

              {status === "success" && (
                <>
                  <Check className="mr-2 h-4 w-4" />
                  Sent Successfully!
                </>
              )}

              {status === "error" && (
                <>
                  <AlertCircle className="mr-2 h-4 w-4" />
                  Error! Try Again
                </>
              )}
            </Button>
            
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-md flex items-center"
              >
                <Check className="h-5 w-5 mr-2" />
                Your message has been sent successfully! I'll get back to you soon.
              </motion.div>
            )}

            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-md flex items-center"
              >
                <AlertCircle className="h-5 w-5 mr-2" />
                There was an error sending your message. Please try again.
              </motion.div>
            )}
          </form>

          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Want to see more details?{" "}
              <Link href="/contact" className="text-primary hover:underline">
                Visit the contact page
              </Link>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

