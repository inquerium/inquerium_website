"use client"

import { Card, CardContent } from "../ui/card"
import { motion } from "framer-motion"

export default function Story() {
  const storyPoints = [
    {
      title: "A Vision Forged in Business Operations",
      content:
        "In the heart of a thriving academic and entrepreneurial community, two leaders recognized the complex challenges businesses face in logistics and operations. Their shared drive for efficiency and strategic thinking led to a partnership that would redefine how businesses manage their supply chains and customer relationships.",
    },
    {
      title: "From Campus Innovation to Logistics Leadership",
      content:
        "What began as a collaboration on business optimization quickly evolved into a comprehensive logistics corporation. Their approach blended operational expertise with deep understanding of manufacturer relationships, client acquisition, and digital transformation to create end-to-end solutions.",
    },
    {
      title: "Building a Culture of Operational Excellence",
      content:
        "With a team drawn from the region's brightest minds, Inquerium cultivated a culture where efficiency, strategic partnerships, and measurable results are more than values—they are daily practice. Every client relationship is a testament to our commitment to streamlining operations and driving growth.",
    },
    {
      title: "A Legacy of Strategic Partnerships and Growth",
      content:
        "Today, Inquerium stands as a trusted logistics partner to organizations seeking not just operational efficiency, but strategic advantages in client acquisition, manufacturer relationships, and digital presence. Our story is written in the success of our clients and the strength of our partnerships.",
    },
  ]

  return (
    <section id="story" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Story
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">A Tradition of Operational Excellence, A Future of Strategic Growth</h2>
          <p className="text-muted-foreground text-lg">
            Inquerium's journey is a testament to the power of strategic thinking, operational efficiency, and a relentless pursuit of business optimization.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/20 hidden md:block"></div>

          <div className="space-y-12">
            {storyPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                <div className={`md:flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary hidden md:block"></div>

                  {/* Content */}
                  <div className="md:w-1/2 md:px-8">
                    <Card className="overflow-hidden shadow-lg">
                      <div className="h-2 bg-primary"></div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3">{point.title}</h3>
                        <p className="text-muted-foreground">{point.content}</p>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Year/milestone marker */}
                  <div className={`hidden md:block md:w-1/2 md:px-8 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
                      Phase {index + 1}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
