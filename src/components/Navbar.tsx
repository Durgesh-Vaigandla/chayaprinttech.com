"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  ChevronDown,
  Menu,
  X,
  Factory,
  Package,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const productCategories = [
    {
      title: "Industrial Labels",
      description: "Heavy-duty labels for industrial applications",
      icon: Factory,
      products: [
        "Polycarbonate Labels (PC Stickers)",
        "High Temperature Labels",
        "ESD Labels",
        "Automotive Labels",
      ],
    },
    {
      title: "Commercial Labels",
      description: "Versatile labels for business and commercial use",
      icon: Package,
      products: [
        "Self Adhesive Labels",
        "Bar code Labels",
        "Roll Form Labels",
        "Key Pad Labels",
      ],
    },
  ];

  const navLinkVariants: Variants = {
    hidden: { y: -20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: { delay: i * 0.1, duration: 0.3, ease: "easeOut" },
    }),
  };

  const dropdownVariants: Variants = {
    hidden: { opacity: 0, y: -10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -10, scale: 0.95, transition: { duration: 0.15 } },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/CPT.png"
              alt="Chayaprinttech Logo"
              width={60}
              height={60}
              className="object-contain hover:scale-105 transition-transform duration-300"
            />
            <span className="font-bold text-xl text-[#04499C]">
              Chayaprinttech
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-10">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
            ].map((item, i) => (
              <motion.div
                key={item.href}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={navLinkVariants}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-[#04499C] font-medium text-base relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A405] group-hover:w-full transition-all duration-300"></span>
                </Link>
              </motion.div>
            ))}

            {/* Products Dropdown */}
            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
              onHoverStart={() => setIsProductsOpen(true)}
              onHoverEnd={() => setIsProductsOpen(false)}
              className="relative"
            >
              <button className="text-gray-700 hover:text-[#04499C] font-medium flex items-center gap-1 text-base group">
                <span className="font-semibold">Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isProductsOpen ? "rotate-180 text-[#04499C]" : ""
                  }`}
                />
              </button>

              {/* Dropdown */}
              <AnimatePresence>
                {isProductsOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 w-[400px] bg-white shadow-2xl rounded-xl border border-gray-100 p-6 mt-4"
                  >
                    <div className="space-y-4">
                      {productCategories.map((category, index) => {
                        const Icon = category.icon;
                        return (
                          <div
                            key={index}
                            className="border-b border-gray-100 last:border-b-0 pb-4 last:pb-0"
                          >
                            <Link
                              href={`/products?category=${category.title
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`}
                              className="flex items-center gap-3 mb-3 group hover:bg-gray-50 p-2 rounded-lg transition-all duration-200"
                            >
                              <div className="w-10 h-10 bg-[#04499C] rounded-lg flex items-center justify-center">
                                <Icon className="w-6 h-6 text-white" />
                              </div>
                              <div className="flex-1">
                                <h3 className="font-semibold text-gray-900 group-hover:text-[#04499C]">
                                  {category.title}
                                </h3>
                                <p className="text-xs text-gray-500">
                                  {category.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#04499C]" />
                            </Link>
                          </div>
                        );
                      })}

                      {/* View All Products Link */}
                      <div className="pt-2 border-t border-gray-100">
                        <Link
                          href="/products"
                          className="flex items-center justify-center gap-2 text-[#04499C] hover:text-[#F4A405] font-semibold py-2 px-4 bg-[#04499C]/5 hover:bg-[#F4A405]/10 rounded-lg transition-all duration-200"
                        >
                          View All Products
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              <Link
                href="/industries"
                className="text-gray-700 hover:text-[#04499C] font-medium text-base relative group"
              >
                Industries
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#F4A405] group-hover:w-full transition-all duration-300"></span>
              </Link>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={navLinkVariants}
            >
              <Link
                href="/contact"
                className="bg-[#04499C] text-white px-6 py-2.5 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 hover:bg-[#F4A405]"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#04499C]"
          >
            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="lg:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-2xl z-50"
          >
            <div className="flex items-center justify-between p-4 border-b bg-[#04499C] text-white">
              <span className="font-bold text-lg">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)}>
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-6">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#F4A405]"
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#F4A405]"
              >
                About
              </Link>
              <Link
                href="/products"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#F4A405]"
              >
                Products
              </Link>
              <Link
                href="/industries"
                onClick={() => setIsMobileMenuOpen(false)}
                className="hover:text-[#F4A405]"
              >
                Industries
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="bg-[#04499C] text-white px-5 py-3 rounded-full text-center font-medium hover:bg-[#F4A405] transition-colors duration-300"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
