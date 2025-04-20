import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Factory, PlaneTakeoff, Ship, Cog, BarChart } from 'lucide-react';

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

const caseStudies = [
  {
    id: 1,
    title: "Automotive Manufacturing Quality Improvement",
    client: "Global Automotive Manufacturer",
    industry: "Automotive",
    icon: <Factory className="h-10 w-10 text-accent" />,
    challenge: "A leading automotive manufacturer was experiencing high rejection rates in their transmission components due to undetected surface defects during the inspection process.",
    solution: "Implementation of Hymech NDT Equipments MT-1500 Advanced Bench MPI systems with automated reporting and integrated UV lighting across their quality control department.",
    results: [
      "87% improvement in defect detection rates",
      "63% reduction in component rejection at final assembly",
      "Annual savings of ₹1.2M through reduced warranty claims",
      "ROI achieved in under 8 months"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 2,
    title: "Aerospace Component Safety Enhancement",
    client: "Major Aircraft Manufacturer",
    industry: "Aerospace",
    icon: <PlaneTakeoff className="h-10 w-10 text-accent" />,
    challenge: "An aircraft manufacturer needed to enhance their safety protocols for critical engine components by implementing more reliable inspection processes.",
    solution: "Custom-configured Hymech NDT Equipments MT-2000 Coil-Type MPI Systems with specialized fixtures for turbine blade inspection and digital documentation capabilities.",
    results: [
      "100% compliance with enhanced FAA safety requirements",
      "95% reduction in inspection time through automated processes",
      "Zero safety incidents related to component failure over 3 years",
      "Ability to trace inspection history for each component"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    id: 3,
    title: "Oil & Gas Pipeline Integrity Program",
    client: "International Energy Corporation",
    industry: "Oil & Gas",
    icon: <Ship className="h-10 w-10 text-accent" />,
    challenge: "An energy corporation needed to improve their pipeline integrity inspection procedures at remote locations under challenging environmental conditions.",
    solution: "Deployment of Hymech NDT Equipments MT-3500 Field Inspection Kits with ruggedized components and specialized training for field technicians.",
    results: [
      "73% increase in field inspection capacity",
      "Ability to operate reliably in extreme temperatures (-40°C to +55°C)",
      "50% reduction in inspection downtime",
      "Enhanced early detection of potential failure points"
    ],
    image: "/placeholder.svg?height=400&width=600"
  },
  {
    title: "Aerospace Manufacturer Improves Defect Detection Rate by 35%",
    industry: "Aerospace",
    challenge: "A leading aerospace components manufacturer was struggling with inconsistent defect detection in their quality control process, leading to potential safety risks and costly rework.",
    solution: "Implementation of Hymech NDT Equipments MT-1500 Advanced Bench MPI systems with automated reporting and integrated UV lighting across their quality control department.",
    results: [
      "35% improvement in defect detection rate",
      "47% reduction in quality-related customer complaints",
      "22% decrease in overall inspection time",
      "Standardized inspection process across all facilities"
    ],
    testimonial: {
      quote: "The implementation of Hymech NDT Equipments's MPI systems transformed our quality control process. The precision and reliability of their equipment has significantly reduced our defect escape rate.",
      author: "James Wilson",
      title: "Quality Assurance Director"
    },
    image: "assets/images/case-studies/aerospace.jpg"
  },
  {
    title: "Power Generation Company Saves ₹1.2M in Preventive Maintenance",
    industry: "Power Generation",
    challenge: "A power generation company needed to improve their turbine component inspection process to prevent catastrophic failures and extend equipment lifespan.",
    solution: "Custom-configured Hymech NDT Equipments MT-2000 Coil-Type MPI Systems with specialized fixtures for turbine blade inspection and digital documentation capabilities.",
    results: [
      "₹1.2M saved in preventive maintenance costs",
      "Zero turbine blade failures over 18-month period",
      "43% reduction in maintenance downtime",
      "Extended turbine lifecycle by approximately 15%"
    ],
    testimonial: {
      quote: "The return on investment we've seen with Hymech NDT Equipments's inspection systems has exceeded our expectations. Not only have we improved quality, but the efficiency gains have been remarkable.",
      author: "Maria Rodriguez",
      title: "Maintenance Operations Manager"
    },
    image: "assets/images/case-studies/power-generation.jpg"
  },
  {
    title: "Pipeline Operator Revolutionizes Field Inspection Capabilities",
    industry: "Oil & Gas",
    challenge: "A major pipeline operator needed reliable field inspection capabilities for remote locations with limited access to power and challenging environmental conditions.",
    solution: "Deployment of Hymech NDT Equipments MT-3500 Field Inspection Kits with ruggedized components and specialized training for field technicians.",
    results: [
      "89% increase in field inspection coverage",
      "62% improvement in defect identification in remote areas",
      "4-hour average reduction in inspection time per site",
      "Significant decrease in travel costs for inspection teams"
    ],
    image: "/placeholder.svg?height=400&width=600"
  }
];

const testimonials = [
  {
    quote: "The implementation of Hymech NDT Equipments's MPI systems transformed our quality control process. The precision and reliability of their equipment has significantly reduced our defect escape rate.",
    author: "Rahul Kumar",
    position: "Quality Assurance Director",
    company: "Global Aerospace Components"
  },
  {
    quote: "As a maintenance supervisor responsible for critical infrastructure, I rely on equipment that delivers consistent results in challenging environments.",
    author: "Rajesh Kumar",
    position: "Maintenance Supervisor",
    company: "Pacific Pipeline Systems"
  },
  {
    quote: "The return on investment we've seen with Hymech NDT Equipments's inspection systems has exceeded our expectations. Not only have we improved quality, but the efficiency gains have been remarkable.",
    author: "Rajesh Sonar",
    position: "Operations Manager",
    company: "Precision Auto Components"
  }
];

const CaseStudiesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 md:pb-24">
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-primary to-primary/80" />
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">Success Stories</h1>
            <p className="text-lg md:text-xl text-white/80">
              Discover how our magnetic particle inspection solutions have helped companies across various industries improve quality, safety, and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-md font-medium text-sm mb-4">
              Client Success
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Real-World Applications
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore how our MPI technology has helped organizations solve complex inspection challenges and achieve measurable results.
            </p>
          </div>

          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={`space-y-6 ₹{index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                      {study.icon}
                    </div>
                    <span className="text-sm font-medium text-accent">{study.industry}</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{study.title}</h3>
                  <p className="text-muted-foreground">Client: {study.client}</p>
                  
                  <div className="space-y-4 mt-6">
                    <div>
                      <h4 className="font-medium text-lg">Challenge</h4>
                      <p>{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg">Solution</h4>
                      <p>{study.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-lg">Results</h4>
                      <ul className="list-disc pl-5 space-y-1 mt-2">
                        {study.results.map((result, idx) => (
                          <li key={idx}>{result}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="pt-4">
                    <button className="inline-flex items-center text-accent font-medium">
                      Read Full Case Study
                      <ArrowRight size={16} className="ml-2" />
                    </button>
                  </div>
                </div>
                
                <div className={`relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 ₹{index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  {study.industry === "Automotive" && (
                    <img 
                      src="/assets/images/case-studies/automotive.jpg" 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {study.industry === "Aerospace" && (
                    <img 
                      src="/assets/images/case-studies/aerospace.jpg" 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {study.industry === "Oil & Gas" && (
                    <img 
                      src="/assets/images/case-studies/oil-gas.jpg" 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {study.industry === "Power Generation" && (
                    <img 
                      src="/assets/images/case-studies/power-generation.jpg" 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {study.industry === "Railway" && (
                    <img 
                      src="/assets/images/case-studies/railway.jpg" 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  {study.industry === "Heavy Equipment" && (
                    <img 
                      src="/assets/images/case-studies/heavy-equipment.jpg" 
                      alt={study.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Overview */}
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-md font-medium text-sm mb-4">
              Measurable Impact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Proven Results Across Industries
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our clients consistently report significant improvements in key performance metrics after implementing Hymech NDT Equipments MPI solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background rounded-lg p-6 text-center shadow-sm border"
            >
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <BarChart className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">78%</div>
              <h3 className="text-lg font-medium mb-2">Average Defect Detection Improvement</h3>
              <p className="text-sm text-muted-foreground">Increased sensitivity and reliability of our systems leads to significantly better detection rates.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background rounded-lg p-6 text-center shadow-sm border"
            >
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Cog className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">55%</div>
              <h3 className="text-lg font-medium mb-2">Average Inspection Time Reduction</h3>
              <p className="text-sm text-muted-foreground">Streamlined workflows and automated processes significantly reduce inspection cycle times.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background rounded-lg p-6 text-center shadow-sm border"
            >
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Building2 className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">43%</div>
              <h3 className="text-lg font-medium mb-2">Average Cost Savings</h3>
              <p className="text-sm text-muted-foreground">Reduced rework, warranty claims, and operational efficiencies deliver substantial cost benefits.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-background rounded-lg p-6 text-center shadow-sm border"
            >
              <div className="h-14 w-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Factory className="h-8 w-8 text-accent" />
              </div>
              <div className="text-4xl font-bold text-accent mb-2">9</div>
              <h3 className="text-lg font-medium mb-2">Months Average ROI</h3>
              <p className="text-sm text-muted-foreground">Most clients achieve full return on investment within the first year of implementation.</p>
            </motion.div>
          </div>
        </div>
      </section>

      Testimonials
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="inline-block bg-accent/10 text-accent px-4 py-1 rounded-md font-medium text-sm mb-4">
              Client Feedback
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear directly from the professionals who rely on our MPI technology for their critical inspection needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-lg p-8 shadow-sm border relative"
              >
                <div className="text-5xl text-accent/20 absolute top-4 left-4">"</div>
                <div className="relative z-10">
                  <p className="italic text-lg mb-6">{testimonial.quote}</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full overflow-hidden">
                      <img 
                        src={`/assets/images/testimonials/person${index + 1}.jpg`} 
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Discuss Your Inspection Challenges?</h2>
            <p className="text-lg text-white/80">
              Our team of MPI specialists can help you find the perfect solution for your specific industry requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/contact" 
                className="px-6 py-3 bg-accent hover:bg-accent/90 text-primary text-lg font-medium rounded-md transition-colors"
              >
                Schedule a Consultation
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

export default CaseStudiesPage; 