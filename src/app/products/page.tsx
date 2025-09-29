import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Award,
  Truck,
  Clock,
  CheckCircle,
  Star,
} from "lucide-react";
import { commercialProducts, industrialProducts } from "@/lib/products";
import { ProductsClient } from "./ProductsClient";

const productHighlights = [
  {
    title: "Premium Materials",
    description:
      "Weather-resistant, fade-proof materials for long-lasting performance",
    icon: Shield,
  },
  {
    title: "Custom Solutions",
    description:
      "Tailored designs and sizes to meet your specific requirements",
    icon: Zap,
  },
  {
    title: "Fast Turnaround",
    description:
      "Quick production and delivery to keep your operations running",
    icon: Clock,
  },
  {
    title: "Industry Certified",
    description: "Compliant with FDA, OSHA, and industry-specific standards",
    icon: Award,
  },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative py-32 bg-[#04499C] overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#F4A405] rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#F4A405] rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#F4A405] rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-[#F4A405] rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div>
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-white">
                Professional <span className="text-[#F4A405]">Products</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
                Comprehensive range of high-quality labels and stickers
                engineered for
                <strong className="text-white">
                  {" "}
                  durability, compliance, and performance
                </strong>{" "}
                across diverse industries worldwide.
              </p>
            </div>
          </div>

          {/* Product Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
            {productHighlights.map((highlight, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#F4A405]"
              >
                <highlight.icon className="w-8 h-8 text-[#04499C] mb-4" />
                <h3 className="text-lg font-semibold text-[#04499C] mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Products Grid + Filters */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] mb-6 tracking-tight">
              Discover Our{" "}
              <span className="text-[#F4A405]">Complete Range</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Search, filter and explore premium labeling solutions engineered
              for
              <strong className="text-[#04499C]">
                {" "}
                durability, clarity and brand consistency
              </strong>{" "}
              across all industries.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-5xl mx-auto">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#04499C] text-center">
                <div className="w-12 h-12 bg-[#04499C] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#04499C] mb-2">
                  {industrialProducts.length + commercialProducts.length}+
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Product Categories
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#F4A405] text-center">
                <div className="w-12 h-12 bg-[#F4A405] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#F4A405] mb-2">
                  200+
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Custom Solutions
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#04499C] text-center">
                <div className="w-12 h-12 bg-[#04499C] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#04499C] mb-2">8+</div>
                <div className="text-sm font-medium text-gray-600">
                  Years Experience
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-l-4 border-[#F4A405] text-center">
                <div className="w-12 h-12 bg-[#F4A405] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl font-bold text-[#F4A405] mb-2">
                  99.9%
                </div>
                <div className="text-sm font-medium text-gray-600">
                  Quality Assurance
                </div>
              </div>
            </div>
          </div>
          <ProductsClient
            industrial={industrialProducts}
            commercial={commercialProducts}
          />
        </div>
      </section>

      {/* Enhanced Custom Solutions CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] mb-6 tracking-tight">
              Need Something <span className="text-[#F4A405]">Custom</span>?
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-12 leading-relaxed">
              Can't find exactly what you're looking for? Our team of experts
              can design and manufacture{" "}
              <strong className="text-[#04499C]">
                custom labeling solutions
              </strong>{" "}
              tailored to your specific requirements and industry standards.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#04499C]/10 hover:border-[#04499C]/30 transition-all duration-300">
                <div className="w-16 h-16 bg-[#04499C] rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#04499C] mb-3">
                  Compliance Guaranteed
                </h3>
                <p className="text-gray-600">
                  FDA, OSHA, UL certified materials and processes for complete
                  regulatory compliance
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#F4A405]/10 hover:border-[#F4A405]/30 transition-all duration-300">
                <div className="w-16 h-16 bg-[#F4A405] rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#04499C] mb-3">
                  Expert Engineering
                </h3>
                <p className="text-gray-600">
                  8+ years of custom solution development with proven industry
                  expertise
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-[#04499C]/10 hover:border-[#04499C]/30 transition-all duration-300">
                <div className="w-16 h-16 bg-[#04499C] rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#04499C] mb-3">
                  Rapid Prototyping
                </h3>
                <p className="text-gray-600">
                  Quick turnaround for samples and testing to accelerate your
                  project timeline
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section - White Background */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] mb-6 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Ready to discuss your labeling requirements? Our experts are
            standing by to help you find the perfect solution for your business
            needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-[#04499C] hover:bg-[#033875] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Get Expert Consultation
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center px-10 py-4 border-2 border-[#F4A405] text-[#F4A405] hover:bg-[#F4A405] hover:text-white font-semibold rounded-xl transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="text-2xl font-bold text-[#04499C] mb-1">
                Quality Assured
              </div>
              <div className="text-sm text-gray-600">Certified Processes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F4A405] mb-1">
                FDA Approved
              </div>
              <div className="text-sm text-gray-600">Materials & Processes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#04499C] mb-1">
                24/7 Support
              </div>
              <div className="text-sm text-gray-600">Expert Assistance</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-[#F4A405] mb-1">
                8+ Years
              </div>
              <div className="text-sm text-gray-600">Industry Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
