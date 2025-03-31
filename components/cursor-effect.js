"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

export default function CursorEffect() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isPointer, setIsPointer] = useState(false)
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const updatePointerStatus = () => {
      const hoveredElement = document.elementFromPoint(position.x, position.y)
      const isPointerElement =
        hoveredElement &&
        (hoveredElement.tagName === "BUTTON" ||
          hoveredElement.tagName === "A" ||
          hoveredElement.closest("button") ||
          hoveredElement.closest("a"))

      setIsPointer(!!isPointerElement)
    }

    window.addEventListener("mousemove", updatePosition)
    window.addEventListener("mousemove", updatePointerStatus)

    return () => {
      window.removeEventListener("mousemove", updatePosition)
      window.removeEventListener("mousemove", updatePointerStatus)
    }
  }, [position.x, position.y, isMobile])

  if (isMobile) return null

  return (
    <>
      {/* Main cursor */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-primary z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 16,
          y: position.y - 16,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 0.5,
        }}
      />

      {/* Cursor dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary z-[9999] pointer-events-none mix-blend-difference"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 50,
          stiffness: 400,
        }}
      />

      {/* Cursor trail */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="fixed top-0 left-0 w-2 h-2 rounded-full bg-primary/30 z-[9998] pointer-events-none mix-blend-difference"
          animate={{
            x: position.x - 4,
            y: position.y - 4,
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 100,
            mass: 0.5,
            delay: i * 0.02,
          }}
          style={{
            opacity: 1 - i * 0.15,
          }}
        />
      ))}
    </>
  )
}

