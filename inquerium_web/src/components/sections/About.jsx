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
              Your Strategic Logistics Partner
            </h2>
            <div className="space-y-4">
              <p className="text-muted-foreground text-lg">
                Founded in College Station, Inquerium has established itself as a comprehensive logistics corporation 
                that helps businesses optimize their operations from end to end. We specialize in connecting businesses 
                with clients, manufacturers, and strategic partners.
              </p>
              <p className="text-muted-foreground text-lg">
                Our expertise spans client acquisition, manufacturer negotiations, revenue stream creation, strategic planning, 
                CRM development, digital presence creation, cost analysis, and logistical operations. We deliver measurable 
                results that drive business growth and operational efficiency.
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
                  <p className="text-3xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Cost Reduction</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary">500+</p>
                  <p className="text-sm text-muted-foreground">Partnerships</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
