import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent } from "../components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { ArrowRight, CheckCircle, ChevronRight, Award, Settings, Zap, Clock, Shield, Users } from "lucide-react";
import { motion } from "framer-motion";
import AnimatedCounter from "../components/animated-counter";
import SectionHeading from "../components/section-heading";

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const products = [
  {
    id: 1,
    name: "Bench-Type MPI Machine",
    description:
      "High-performance bench-mounted magnetic particle inspection system for detecting surface and near-surface defects.",
    image: "/placeholder.svg?height=300&width=400",
    category: "bench-type",
  },
  {
    id: 2,
    name: "Coil-Type MPI System",
    description:
      "Advanced coil-type magnetic particle inspection system for circular magnetization of cylindrical components.",
    image: "/placeholder.svg?height=300&width=400",
    category: "coil-type",
  },
  {
    id: 3,
    name: "Portable MPI Kit",
    description:
      "Compact and versatile portable magnetic particle inspection kit for field inspections and remote testing.",
    image: "/placeholder.svg?height=300&width=400",
    category: "portable",
  },
];

const timelineEvents = [
  {
    year: "2010",
    title: "Company Founded",
    description: "Hymech NDT Equipments was established with a focus on quality inspection equipment.",
  },
  {
    year: "2010",
    title: "First MPI Machine",
    description: "Developed and launched our first magnetic particle inspection machine.",
  },
  {
    year: "2024",
    title: "ISO Certification",
    description: "Achieved ISO 9001 certification for our quality management system.",
  },
  {
    year: "2015",
    title: "Global Expansion",
    description: "Expanded operations to serve international markets across 15+ States.",
  },
  {
    year: "2018",
    title: "Advanced R&D Center",
    description: "Opened state-of-the-art research and development facility.",
  },
  {
    year: "2023",
    title: "Industry 4.0 Integration",
    description: "Launched smart MPI machines with IoT connectivity and data analytics.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-16">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-industrial-800/90 to-industrial-900/90"></div>
          <img
            src="assets/images/hero/hero-background.svg"
            alt="Industrial machinery background"
            className="object-cover w-full h-full"
          />
        </div>
        <div className="container relative z-10 py-20">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl text-white space-y-6"
          >
            <motion.span
              variants={fadeIn}
              className="inline-block bg-safety-500 text-white px-4 py-1 rounded-md font-medium text-sm shadow-md"
            >
              Industry Leaders in NDT Equipment
            </motion.span>
            <motion.h1
              variants={fadeIn}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
            >
              Advanced Magnetic <span className="text-safety-400">Particle Inspection</span> Solutions
            </motion.h1>
            <motion.p variants={fadeIn} className="text-lg md:text-xl text-gray-200 max-w-2xl">
              Precision-engineered MPI machines with in-house assembly for superior quality control and customization
              capabilities.
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="gap-2 bg-safety-500 hover:bg-safety-600 text-white shadow-lg">
                <Link to="/products">
                  Explore Products
                  <ArrowRight size={16} />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 shadow-lg"
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              repeatDelay: 0.5,
            }}
            className="text-safety-400"
          >
            <ChevronRight size={40} className="rotate-90" />
          </motion.div>
        </div>
      </section>

      {/* USP Grid Section */}
      <section className="section-padding bg-tech-gray flex flex-col items-center justify-center min-h-screen">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="flex flex-col items-center"
          >
            <SectionHeading
              title={<span>Industry <span className="text-safety-500">Excellence</span></span>}
              subtitle="Setting the standard in magnetic particle inspection technology with precision-engineered solutions."
              centered
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mx-auto">
              <motion.div variants={fadeIn}>
                <Card className="border-none shadow-xl h-full hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white group">
                  <div className="h-2 bg-steel-600 w-full"></div>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="h-20 w-20 rounded-full bg-steel-100 flex items-center justify-center mb-6 group-hover:bg-steel-200 transition-colors">
                      <Award size={36} className="text-steel-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-steel-600 transition-colors">
                      <AnimatedCounter value={1000} suffix="+" /> Machines
                    </h3>
                    <p className="text-muted-foreground">
                      Successfully delivered and installed worldwide, serving diverse industries with reliable
                      inspection solutions.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="border-none shadow-xl h-full hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white group">
                  <div className="h-2 bg-safety-500 w-full"></div>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="h-20 w-20 rounded-full bg-safety-100 flex items-center justify-center mb-6 group-hover:bg-safety-200 transition-colors">
                      <Users size={36} className="text-safety-500" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-safety-500 transition-colors">
                      <AnimatedCounter value={15} suffix="+" /> states
                    </h3>
                    <p className="text-muted-foreground">
                      Global presence with customers in over 15 states, supported by local service teams and technical experts.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div variants={fadeIn}>
                <Card className="border-none shadow-xl h-full hover:shadow-2xl transition-shadow duration-300 overflow-hidden bg-white group">
                  <div className="h-2 bg-industrial-600 w-full"></div>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="h-20 w-20 rounded-full bg-industrial-100 flex items-center justify-center mb-6 group-hover:bg-industrial-200 transition-colors">
                      <Shield size={36} className="text-industrial-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-industrial-600 transition-colors">
                      <AnimatedCounter value={99} suffix=".9%" /> Accuracy
                    </h3>
                    <p className="text-muted-foreground">
                      Industry-leading detection precision with our advanced MPI technology, ensuring critical defects are never missed.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Rest of the content would be added similarly */}
    </>
  );
} 