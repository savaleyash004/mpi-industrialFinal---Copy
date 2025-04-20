import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl mb-4">Hymech NDT Equipments</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Leading manufacturer of high-quality Magnetic Particle Inspection (MPI) machines with in-house assembly and customization capabilities.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-accent">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg mb-3">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products/bench-type" className="text-sm text-primary-foreground/80 hover:text-accent">Bench-Type MPI</Link></li>
              <li><Link to="/products/coil-type" className="text-sm text-primary-foreground/80 hover:text-accent">Coil-Type MPI</Link></li>
              <li><Link to="/products/portable" className="text-sm text-primary-foreground/80 hover:text-accent">Portable MPI</Link></li>
              <li><Link to="/products/accessories" className="text-sm text-primary-foreground/80 hover:text-accent">MPI Accessories</Link></li>
              <li><Link to="/comparison" className="text-sm text-primary-foreground/80 hover:text-accent">Machine Comparison</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-3">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-primary-foreground/80 hover:text-accent">About Us</Link></li>
              <li><Link to="/manufacturing" className="text-sm text-primary-foreground/80 hover:text-accent">Manufacturing</Link></li>
              <li><Link to="/industries" className="text-sm text-primary-foreground/80 hover:text-accent">Industries</Link></li>
              <li><Link to="/case-studies" className="text-sm text-primary-foreground/80 hover:text-accent">Case Studies</Link></li>
              <li><Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg mb-3">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80"> Narayan Dhawade Marg Gulve vasahat Bhosari Midc </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">+91 974408675</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">hymech.ndt@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Hymech NDT Equipments. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent">Privacy Policy</a>
            <a href="#" className="text-sm text-primary-foreground/60 hover:text-accent">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
} 