import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import ContactSection from "@/components/contact-section"
import ParticlesBackground from "@/components/particles-background"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <div className="container mx-auto px-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  )
}

