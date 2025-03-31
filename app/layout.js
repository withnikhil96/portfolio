import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import CursorEffect from "@/components/cursor-effect"
import SidePopup from "@/components/side-popup"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Portfolio | Creative Developer",
  description: "Personal portfolio showcasing my work as a frontend developer",
  openGraph: {
    title: "Portfolio | Creative Developer",
    description: "Personal portfolio showcasing my work as a frontend developer",
    url: "https://portfolio.dev",
    siteName: "Developer Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Developer Portfolio",
      },
    ],
    locale: "en-US",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CursorEffect />
          <Navbar />
          <main>{children}</main>
          <SidePopup />
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'