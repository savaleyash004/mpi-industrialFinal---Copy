import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { cn } from "../lib/utils";

const navItems = [
  {
    title: "Products",
    href: "/products",
    submenu: [
      { title: "Bench-Type MPI", href: "/products/bench-type" },
      { title: "Coil-Type MPI", href: "/products/coil-type" },
      { title: "Portable MPI", href: "/products/portable" },
    ],
  },
  {
    title: "Manufacturing",
    href: "/manufacturing",
  },
  {
    title: "Industries",
    href: "/industries",
  },
  {
    title: "Case Studies",
    href: "/case-studies",
  },
  {
    title: "About",
    href: "/about",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50",
        "bg-white shadow-md py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden">
            <div className="absolute inset-0 bg-accent rounded-md"></div>
            <span className="absolute inset-0 flex items-center justify-center font-oswald text-xl font-bold text-primary">
              HE
            </span>
          </div>
          <span className="font-oswald text-xl font-bold">Hymech NDT Equipments</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          <NavigationMenu>
            <NavigationMenuList>
              {navItems.map((item) => (
                <NavigationMenuItem key={item.title}>
                  {item.submenu ? (
                    <>
                      <NavigationMenuTrigger className="font-medium">{item.title}</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4">
                          {item.submenu.map((subItem) => (
                            <li key={subItem.title}>
                              <NavigationMenuLink>
                                <Link
                                  to={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent-foreground focus:bg-accent/10 focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none">{subItem.title}</div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      className="font-medium px-3 py-2 text-sm transition-colors hover:text-accent"
                    >
                      {item.title}
                    </Link>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          <Button>
            <Link to="/contact" className="flex items-center gap-2">
              <Phone size={16} />
              <span>Get a Quote</span>
            </Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <div className="container py-4 flex flex-col gap-4">
              {navItems.map((item) => (
                <div key={item.title} className="border-b pb-2">
                  {item.submenu ? (
                    <details className="group">
                      <summary className="flex cursor-pointer items-center justify-between font-medium">
                        {item.title}
                        <ChevronDown size={16} className="transition-transform group-open:rotate-180" />
                      </summary>
                      <ul className="mt-2 space-y-1 pl-4">
                        {item.submenu.map((subItem) => (
                          <li key={subItem.title}>
                            <Link
                              to={subItem.href}
                              className="block py-2 text-sm hover:text-accent"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {subItem.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </details>
                  ) : (
                    <Link
                      to={item.href}
                      className="block py-2 font-medium hover:text-accent"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.title}
                    </Link>
                  )}
                </div>
              ))}
              <Button className="w-full mt-2">
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone size={16} />
                  <span>Get a Quote</span>
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 