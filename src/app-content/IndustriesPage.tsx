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

const industries = [
  {
    name: "Aerospace",
    description: "Ensuring the safety and reliability of critical aircraft components through advanced magnetic particle inspection technology.",
    image: "placeholder.svg?height=400&width=600",
    applications: [
      "Engine components",
      "Landing gear assemblies",
      "Structural elements",
      "Turbine blades",
      "Fasteners and connectors"
    ]
  },
  {
    name: "Automotive",
    description: "Supporting quality control in automotive manufacturing with high-throughput magnetic particle inspection systems.",
    image: "placeholder.svg?height=400&width=600",
    applications: [
      "Engine blocks and crankshafts",
      "Transmission components",
      "Suspension systems",
      "Safety-critical castings",
      "Drivetrain parts"
    ]
  },
  {
    name: "Oil & Gas",
    description: "Providing reliable NDT solutions for critical components in drilling, extraction, and refining operations.",
    image: "placeholder.svg?height=400&width=600",
    applications: [
      "Pipeline welds and joints",
      "Drilling equipment",
      "Pressure vessels",
      "Valves and flanges",
      "Offshore platform components"
    ]
  },
  {
    name: "Power Generation",
    description: "Ensuring the integrity of turbines, generators, and critical infrastructure in power plants.",
    image: "placeholder.svg?height=400&width=600",
    applications: [
      "Turbine components",
      "Generator shafts",
      "Boiler and pressure parts",
      "Nuclear facility components",
      "Structural supports"
    ]
  },
  {
    name: "Railway",
    description: "Supporting safety and reliability in rail transport through comprehensive inspection of critical components.",
    image: "placeholder.svg?height=400&width=600",
    applications: [
      "Wheel sets and axles",
      "Rail sections and welds",
      "Brake components",
      "Bogie frames",
      "Coupling mechanisms"
    ]
  },
  {
    name: "Heavy Equipment",
    description: "Enabling quality assurance for large-scale machinery used in construction, mining, and agriculture.",
    image: "placeholder.svg?height=400&width=600",
    applications: [
      "Excavator components",
      "Bulldozer tracks and frames",
      "Crane hooks and cables",
      "Mining equipment",
      "Agricultural machinery"
    ]
  }
];

const IndustriesPageContent = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary to-primary/80" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              Industries We Serve
            </h1>
            <p className="text-lg md:text-xl text-white/80">
              Supporting quality and safety across critical industries with specialized magnetic particle inspection solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-md font-medium text-sm mb-4">
              Our Expertise
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Specialized Solutions for Diverse Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our magnetic particle inspection systems are designed to meet the unique requirements of various industrial sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg overflow-hidden shadow-sm border border-border h-full"
              >
                <div className="aspect-video relative bg-muted">
                  {industry.name === "Aerospace" && (
                    <img 
                      src="assets/images/industries/aerospace.jpg" 
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {industry.name === "Automotive" && (
                    <img 
                      src="assets/images/industries/automotive.jpg" 
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {industry.name === "Oil & Gas" && (
                    <img 
                      src="assets/images/industries/oil-gas.jpg" 
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {industry.name === "Power Generation" && (
                    <img 
                      src="assets/images/industries/power-generation.jpg" 
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {industry.name === "Railway" && (
                    <img 
                      src="assets/images/industries/railway.jpg" 
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {industry.name === "Heavy Equipment" && (
                    <img 
                      src="assets/images/industries/heavy-equipment.jpg" 
                      alt={industry.name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{industry.name}</h3>
                  <p className="text-muted-foreground mb-4">{industry.description}</p>
                  
                  <h4 className="font-medium text-sm mb-2">KEY APPLICATIONS:</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    {industry.applications.map((app, idx) => (
                      <li key={idx}>{app}</li>
                    ))}
                  </ul>
                  
                  <button className="mt-6 inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 text-sm">
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Approach */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-80 md:h-[500px] rounded-lg overflow-hidden"
            >
              <img 
                src="assets/images/industries/solution-approach.jpg" 
                alt="Industry-Specific MPI Solutions"
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6"
            >
              <motion.div variants={fadeIn}>
                <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-md font-medium text-sm mb-4">
                  Our Approach
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Industry-Specific Expertise
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  At Hymech NDT Equipments, we understand that each industry faces unique challenges in quality control and non-destructive testing.
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-accent">1</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Industry-Specific Configurations</h3>
                      <p className="text-sm text-muted-foreground">Our MPI machines are configured to meet the specific requirements of different industry applications.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-accent">2</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Compliance with Industry Standards</h3>
                      <p className="text-sm text-muted-foreground">All our systems are designed to comply with relevant industry specifications and standards.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-accent">3</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Specialized Training</h3>
                      <p className="text-sm text-muted-foreground">We provide industry-specific training programs to help your operators get the most out of our equipment.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-3">
                    <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <span className="font-bold text-accent">4</span>
                    </div>
                    <div>
                      <h3 className="font-medium">Ongoing Support</h3>
                      <p className="text-sm text-muted-foreground">Our industry specialists provide ongoing technical support tailored to your specific application needs.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">
              Find the Right Solution for Your Industry
            </h2>
            <p className="text-lg text-primary-foreground/80">
              Our team of industry specialists can help you select the perfect MPI system for your specific inspection requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-accent hover:bg-accent/90 text-primary rounded-md font-medium">
                Contact Our Team
              </button>
              <button className="px-6 py-3 bg-transparent hover:bg-white/10 text-white border border-white/30 rounded-md font-medium">
                Explore Products
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default IndustriesPageContent; 