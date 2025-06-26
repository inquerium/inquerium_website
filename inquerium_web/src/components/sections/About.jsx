"use client"

import { Button } from "../ui/button"
import { motion } from "framer-motion"
import AggieLandImg from "../../assets/aggieland.jpeg"

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block rounded-full bg-background px-4 py-1.5 text-sm font-medium text-primary">
              About Inquerium
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              College Station's Premier Lead Generation Company
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">
                Founded in College Station, Inquerium has quickly established itself as the leading force in innovative
                lead generation. Our unique advantage comes from our deep connections to the vibrant entrepreneurial and
                technological ecosystem of College Station.
              </p>
              <p className="text-muted-foreground text-lg">
                With access to exceptional talent and cutting-edge methodologies, we deliver results that consistently
                exceed expectations. Our team combines industry expertise with fresh perspectives to create lead
                generation strategies that truly work.
              </p>
            </div>
            <div className="pt-4 flex flex-wrap gap-4">
              <Button variant="default" size="lg">
                Our Approach
              </Button>
              <Button variant="outline" size="lg" className="bg-background text-foreground" asChild>
                <a href="#story">Learn More</a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
              <img src={AggieLandImg} />
            </div>

            {/* Stats overlay */}
            <div className="absolute -bottom-6 -right-6 bg-background rounded-lg shadow-lg p-6 z-20">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Client Retention</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">1M+</p>
                  <p className="text-sm text-muted-foreground">Contacts Served</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
