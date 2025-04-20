import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import components
import ThemeProvider from './components/theme-provider';
import Header from './components/header';
import Footer from './components/footer';
import WhatsAppButton from './components/whatsapp-button';

// Import pages
import HomePage from './pages/Home';
import { 
  AboutPage,
  ContactPage,
  ProductsPage,
  CaseStudiesPage,
  IndustriesPage,
  ManufacturingPage,
  ComparisonPage
} from './pages/placeholder';

function App() {
  return (
    <ThemeProvider defaultTheme="light">
      <Header />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/bench-type" element={<ProductsPage />} />
          <Route path="/products/coil-type" element={<ProductsPage />} />
          <Route path="/products/portable" element={<ProductsPage />} />
          <Route path="/products/accessories" element={<ProductsPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/manufacturing" element={<ManufacturingPage />} />
          <Route path="/comparison" element={<ComparisonPage />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppButton />
    </ThemeProvider>
  );
}

export default App; 