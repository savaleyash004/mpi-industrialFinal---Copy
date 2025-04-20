import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Globe, Users, Clock } from 'lucide-react';
import SectionHeading from '../components/section-heading';
import AboutPageContent from '../app-content/AboutPage';
import IndustriesPageContent from '../app-content/IndustriesPage';
import ProductsPageContent from '../app-content/ProductsPage';
import ManufacturingPageContent from '../app-content/ManufacturingPage';
import CaseStudiesPageContent from '../app-content/CaseStudiesPage';
import ContactPageContent from '../app-content/ContactPage';

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

// Create wrapper components to handle server components vs client components
// and provide any necessary context or props

export const AboutPage = () => {
  return <AboutPageContent />;
};

export const ContactPage = () => {
  return <ContactPageContent />;
};

export const ProductsPage = () => {
  return <ProductsPageContent />;
};

export const CaseStudiesPage = () => {
  return <CaseStudiesPageContent />;
};

export const IndustriesPage = () => {
  return <IndustriesPageContent />;
};

export const ManufacturingPage = () => {
  return <ManufacturingPageContent />;
};

export const ComparisonPage = () => {
  return (
    <div className="container py-20 mt-16">
      <h1 className="text-4xl font-bold mb-6">Machine Comparison</h1>
      <p>Comparison tool for different machine models would go here.</p>
    </div>
  );
}; 