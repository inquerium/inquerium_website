// Remove 'use client' directive for Vite compatibility

import Navbar from "../components/Navbar"
import Hero from "../components/sections/Hero"
import Services from "../components/sections/Services"
import About from "../components/sections/About"
import Story from "../components/sections/Story"
import Team from "../components/sections/Team"
import Advisors from "../components/sections/Advisors"
import Advantage from "../components/sections/Advantage"
import Testimonials from "../components/sections/Testimonials"
import Contact from "../components/sections/Contact"
import Footer from "../components/Footer"
import { useEffect } from "react"
import { useToast } from "../components/ui/use-toast"
import lonebullImg from "../assets/lonebull.png"

export default function Home() {
  const { toast } = useToast()

  useEffect(() => {
    // Show welcome toast after a short delay
    const timer = setTimeout(() => {
      toast({
        title: "Welcome to Inquerium",
        description: "College Station's premier lead generation company",
        duration: 5000,
      })
    }, 2000)

    return () => clearTimeout(timer)
  }, [toast])

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Services />
        <About />
        <Story />
        <Team />
        <Advisors />
        <Advantage />
        <section className="w-full py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5 border-y-4 border-primary shadow-xl">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
            <img src={lonebullImg} alt="Lonebull USA" className="w-72 h-72 object-cover rounded-2xl shadow-2xl border-4 border-primary/30" />
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary drop-shadow mb-2">Client Spotlight: Lonebull USA</h2>
              <blockquote className="italic text-2xl md:text-3xl text-foreground font-semibold border-l-8 border-primary pl-6 py-4 bg-background/80 rounded-lg shadow-lg relative">
                <span className="text-5xl text-primary font-bold absolute -left-8 -top-4">“</span>
                Inquerium didn't just help us grow, they made the impossible possible. Their team connected us with our audience, built our digital presence from the ground up, and opened doors to manufacturers we never thought we'd reach. If you want to turn your vision into reality, Inquerium is the only partner you need.
                <span className="block mt-4 font-bold text-primary">— Carter Nelson, Cofounder</span>
              </blockquote>
              <div className="flex gap-6 mt-6">
                <a href="https://lonebullusa.com/" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold text-lg">Visit Website</a>
                <a href="https://instagram.com/lonebullusa" target="_blank" rel="noopener noreferrer" className="text-primary underline font-semibold text-lg">Instagram @lonebullusa</a>
              </div>
              <div className="mt-8 w-full h-48 bg-primary/10 border-2 border-dashed border-primary rounded-xl flex items-center justify-center text-primary-foreground text-lg font-medium">
                [Video testimonial coming soon]
              </div>
            </div>
          </div>
        </section>
        <Testimonials />
        <Contact />
        <section className="w-full py-12 bg-primary/10 mt-8">
          <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
            <h2 className="text-2xl md:text-3xl font-bold">Are you a Texas A&M student looking to get involved?</h2>
            <p className="text-lg text-muted-foreground">Apply today and join our innovative team!</p>
            <a href="/careers" className="inline-block mt-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold shadow hover:bg-primary/90 transition">View Careers</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
