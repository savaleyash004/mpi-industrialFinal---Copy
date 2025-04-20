import React from 'react';
import { motion } from 'framer-motion';
import { Award, CheckCircle, BarChart, Cog, Wrench, Truck, FlaskConical, PieChart } from 'lucide-react';

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

const ManufacturingPage = () => {
  const manufacturingSteps = [
    {
      title: "Engineering & Design",
      description: "Our engineers develop detailed designs for each MPI machine, optimizing for both performance and manufacturability.",
      icon: <Cog className="h-8 w-8 text-accent" />,
    },
    {
      title: "Component Procurement",
      description: "We source high-quality components from trusted suppliers, with rigorous quality control at every step.",
      icon: <Truck className="h-8 w-8 text-accent" />,
    },
    {
      title: "Precision Machining",
      description: "Our in-house machinists create custom parts with tight tolerances for optimal performance and reliability.",
      icon: <Wrench className="h-8 w-8 text-accent" />,
    },
    {
      title: "Assembly",
      description: "Skilled technicians assemble each machine following detailed procedures to ensure consistent quality.",
      icon: <Cog className="h-8 w-8 text-accent" />,
    },
    {
      title: "Quality Testing",
      description: "Every machine undergoes comprehensive performance testing before shipment to verify it meets our exacting standards.",
      icon: <FlaskConical className="h-8 w-8 text-accent" />,
    },
    {
      title: "Final Inspection",
      description: "Our quality assurance team performs a thorough final inspection, documenting all performance metrics.",
      icon: <CheckCircle className="h-8 w-8 text-accent" />,
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary to-primary/80" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Manufacturing Excellence</h1>
            <p className="text-lg md:text-xl text-white/80">
              Our precision engineering and meticulous manufacturing process ensures every MPI machine delivers superior performance and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Manufacturing Overview */}
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
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  In-House Manufacturing
                </h2>
                <p className="text-lg text-muted-foreground">
                  At Hymech NDT Equipments, we maintain control over the entire manufacturing process, from design to final assembly, ensuring unmatched quality and customization capabilities.
                </p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <p>
                  Our 50,000 square foot facility houses state-of-the-art manufacturing equipment and a team of skilled engineers, machinists, and technicians dedicated to producing the industry's finest magnetic particle inspection equipment.
                </p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  <div className="bg-accent/5 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">100%</div>
                    <div className="text-sm">Quality Testing</div>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">50k</div>
                    <div className="text-sm">Sq. Ft. Facility</div>
                  </div>
                  <div className="bg-accent/5 p-4 rounded-lg text-center">
                    <div className="text-3xl font-bold text-accent">15+</div>
                    <div className="text-sm">Years Experience</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-80 md:h-[500px] rounded-lg overflow-hidden bg-gray-100"
            >
              <img
                src="/assets/images/manufacturing/manufacturing-facility.jpg"
                alt="Hymech NDT Manufacturing Facility"
                className="object-cover w-full h-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-md font-medium text-sm mb-4">
              From Design to Delivery
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Manufacturing Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Every Hymech NDT Equipments MPI machine undergoes a rigorous six-step manufacturing process to ensure the highest quality and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {manufacturingSteps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-6 shadow-sm border"
              >
                <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Control */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative h-80 md:h-[500px] rounded-lg overflow-hidden bg-gray-100 order-2 lg:order-1"
            >
              <img
                src="/assets/images/manufacturing/quality-control.jpg"
                alt="Quality Control Process at Hymech NDT"
                className="object-cover w-full h-full"
              />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="space-y-6 order-1 lg:order-2"
            >
              <motion.div variants={fadeIn}>
                <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-md font-medium text-sm mb-4">
                  Quality Assurance
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Uncompromising Quality Standards
                </h2>
                <p className="text-lg text-muted-foreground">
                  Our quality control process involves multiple inspection points, with each machine subjected to rigorous performance testing before approval for shipment.
                </p>
              </motion.div>
              <motion.div variants={fadeIn}>
                <div className="space-y-4 mt-6">
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">ISO 9001:2024 Certified</h3>
                      <p className="text-sm text-muted-foreground">Our manufacturing processes adhere to the highest international quality management standards.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">100% Function Testing</h3>
                      <p className="text-sm text-muted-foreground">Every machine undergoes complete function testing to verify all systems operate to specification.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Performance Verification</h3>
                      <p className="text-sm text-muted-foreground">Using standardized test pieces, we verify each machine meets or exceeds detection requirements.</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <h3 className="font-medium">Detailed Documentation</h3>
                      <p className="text-sm text-muted-foreground">Each machine ships with comprehensive documentation of all tests and performance metrics.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Experience Our Manufacturing Excellence</h2>
            <p className="text-lg text-white/80">
              Schedule a tour of our manufacturing facility or request a virtual demonstration of our production processes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-primary text-lg font-medium rounded-md transition-colors"
              >
                Schedule a Tour
              </a>
              <a 
                href="/products" 
                className="px-6 py-3 border border-white/30 hover:bg-white/10 text-white text-lg font-medium rounded-md transition-colors"
              >
                Explore Our Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ManufacturingPage; 