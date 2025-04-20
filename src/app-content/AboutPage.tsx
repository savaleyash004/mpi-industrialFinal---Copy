import React from 'react';
import { motion } from "framer-motion";

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

const teamMembers = [
  {
    name: "David Chen",
    position: "Chief Executive Officer",
    bio: "With over 25 years of experience in NDT equipment manufacturing, David leads Hymech NDT Equipments's strategic vision and global expansion.",
    image: "placeholder.svg?height=300&width=300",
  },
  {
    name: "Sarah Johnson",
    position: "Chief Technology Officer",
    bio: "Sarah oversees Hymech NDT Equipments's R&D department, driving innovation in magnetic particle inspection technology and digital integration.",
    image: "placeholder.svg?height=300&width=300",
  },
  {
    name: "Michael Rodriguez",
    position: "Head of Engineering",
    bio: "Michael leads our engineering team, ensuring all MPI machines meet the highest standards of quality, reliability, and performance.",
    image: "placeholder.svg?height=300&width=300",
  },
  {
    name: "Jennifer Lee",
    position: "Global Sales Director",
    bio: "Jennifer manages our worldwide sales network, helping clients find the perfect MPI solution for their specific inspection needs.",
    image: "placeholder.svg?height=300&width=300",
  },
];

const AboutPageContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary to-primary/80" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              About Hymech NDT Equipments
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Leading the industry in magnetic particle inspection technology with over 15 years of expertise and innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeIn}>
                <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-md font-medium text-sm mb-4">
                  Our Story
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Pioneering Excellence in NDT Technology
                </h2>
                <p className="text-lg text-muted-foreground">
                  Founded in 2010, Hymech NDT Equipments has grown from a small workshop to a global leader in magnetic particle inspection systems with customers in over 70 countries.
                </p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <p>
                  Our commitment to innovation, quality, and customer satisfaction has made us the trusted partner for industries where safety and reliability are paramount.
                </p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                  <div className="bg-accent/5 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">10+</div>
                    <div className="text-sm">States Served</div>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">1000+</div>
                    <div className="text-sm">Systems Deployed</div>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">98%</div>
                    <div className="text-sm">Customer Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-auto min-h-[650px] lg:min-h-[700px] rounded-lg overflow-hidden bg-gradient-to-br from-white to-gray-50 p-6 shadow-sm"
            >
              <h3 className="text-xl font-bold mb-8 text-primary">Our Journey</h3>
              
              {/* Timeline component */}
              <div className="relative h-full">
                {/* Vertical line */}
                <div className="absolute left-4 top-6 bottom-10 w-1 bg-gradient-to-b from-primary via-blue-500 to-accent rounded-full z-0"></div>

                {/* Timeline items */}
                <div className="space-y-16">
                  {/* 1985 - Founding */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white font-medium z-10 shadow-lg border-2 border-white">
                      <div className="h-3 w-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute left-4 top-4 w-10 h-0.5 bg-primary"></div>
                    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-primary text-xl">Company Founded</h4>
                        <span className="font-bold text-lg bg-primary/10 text-primary px-3 py-1 rounded-full">2010</span>
                      </div>
                      <p className="text-gray-600">Hymech NDT Equipments was founded by Sagar  with a vision to revolutionize non-destructive testing in manufacturing.</p>
                    </div>
                  </motion.div>

                  {/* 1995 - Expansion */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white font-medium z-10 shadow-lg border-2 border-white">
                      <div className="h-3 w-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute left-4 top-4 w-10 h-0.5 bg-primary"></div>
                    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-primary text-xl">National Expansion</h4>
                        <span className="font-bold text-lg bg-primary/10 text-primary px-3 py-1 rounded-full">2015</span>
                      </div>
                      <p className="text-gray-600"></p>
                    </div>
                  </motion.div>

                  {/* 2005 - Innovation */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 w-9 h-9 rounded-full bg-gradient-to-br from-primary to-blue-700 flex items-center justify-center text-white font-medium z-10 shadow-lg border-2 border-white">
                      <div className="h-3 w-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute left-4 top-4 w-10 h-0.5 bg-primary"></div>
                    <div className="bg-white p-5 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-primary text-xl">Digital Revolution</h4>
                        <span className="font-bold text-lg bg-primary/10 text-primary px-3 py-1 rounded-full">2020</span>
                      </div>
                      <p className="text-gray-600">Launched the industry's first digital MPI system with integrated reporting capabilities, setting new standards for inspection technology.</p>
                    </div>
                  </motion.div>

                  {/* 2020 - Present */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="relative pl-16"
                  >
                    <div className="absolute left-0 w-9 h-9 rounded-full bg-gradient-to-br from-accent to-accent-foreground flex items-center justify-center text-white font-medium z-10 shadow-lg border-2 border-white">
                      <div className="h-3 w-3 bg-white rounded-full animate-pulse"></div>
                    </div>
                    <div className="absolute left-4 top-4 w-10 h-0.5 bg-accent"></div>
                    <div className="bg-white p-5 rounded-lg shadow-md border-l-4 border-accent border-t border-r border-b hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-center mb-2">
                        <h4 className="font-bold text-accent text-xl">Industry Leadership</h4>
                        <span className="font-bold text-lg bg-accent/10 text-accent px-3 py-1 rounded-full">Today</span>
                      </div>
                      <p className="text-gray-600">Today, Hymech NDT Equipments is recognized as the global leader in MPI technology with operations in over 15 states and continued commitment to innovation.</p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
     

      {/* Mission & Values */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-md font-medium text-sm mb-4">
              Our Purpose
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Mission & Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Guiding principles that define our company culture and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="bg-background p-8 rounded-lg border"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-muted-foreground">
                To advance safety and quality in industrial manufacturing through innovative magnetic particle inspection technology that enables reliable defect detection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-8 rounded-lg border"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the global leader in non-destructive testing solutions, continuously pushing the boundaries of what's possible in defect detection technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background p-8 rounded-lg border"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center text-accent mb-6">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <ul className="text-muted-foreground space-y-2">
                <li>• Innovation in every solution we develop</li>
                <li>• Quality that exceeds industry standards</li>
                <li>• Integrity in all business relationships</li>
                <li>• Customer success as our ultimate goal</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPageContent; 