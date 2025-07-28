"use client"

import { Card, CardContent } from "../ui/card"
import { motion } from "framer-motion"
import { Users, Building2, DollarSign, Database, Globe, Calculator, Truck, Target, TrendingUp, Lightbulb } from "lucide-react"

export default function Services() {
  const services = [
    {
      title: "Client Acquisition",
      description: "Strategic client finding and relationship building to expand your customer base and market reach.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Manufacturer Relations",
      description: "Connect with reliable manufacturers and establish strong partnerships for your supply chain needs.",
      icon: <Building2 className="h-6 w-6" />,
    },
    {
      title: "Price Negotiation",
      description: "Expert negotiation with manufacturers to secure the best pricing and terms for your business.",
      icon: <DollarSign className="h-6 w-6" />,
    },
    {
      title: "Revenue Streams",
      description: "Expert creation of new revenue streams and diversification strategies to maximize your business growth potential.",
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      title: "Strategic Planning",
      description: "Comprehensive business strategy development to optimize operations, market positioning, and long-term growth.",
      icon: <Lightbulb className="h-6 w-6" />,
    },
    {
      title: "CRM Development",
      description: "Custom CRM systems designed to streamline your customer relationships and sales processes.",
      icon: <Database className="h-6 w-6" />,
    },
    {
      title: "Digital Presence",
      description: "Complete digital transformation including websites, e-commerce platforms, and online marketing strategies.",
      icon: <Globe className="h-6 w-6" />,
    },
    {
      title: "Cost Analysis",
      description: "Comprehensive cost analysis and optimization strategies to maximize your profit margins.",
      icon: <Calculator className="h-6 w-6" />,
    },
    {
      title: "Logistical Operations",
      description: "End-to-end logistics management including shipping, warehousing, and supply chain optimization.",
      icon: <Truck className="h-6 w-6" />,
    },
    {
      title: "Product Sales",
      description: "Strategic product sales support and market penetration strategies across various channels.",
      icon: <Target className="h-6 w-6" />,
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Comprehensive Logistics & Business Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            We provide end-to-end logistics support and strategic business solutions to help businesses optimize operations, 
            create new revenue streams, and accelerate growth.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex flex-col items-center text-center h-full">
                  <div className="rounded-full bg-primary/10 p-3 mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
