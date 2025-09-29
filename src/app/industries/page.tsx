import Link from "next/link";
import {
  Heart,
  Factory,
  ShoppingCart,
  Building2,
  GraduationCap,
  Wrench,
  Car,
  Theater,
  CheckCircle,
  ArrowRight,
  Shield,
  Award,
  Zap,
  Target,
} from "lucide-react";

export const metadata = {
  title: "Industries We Serve - CPT | Label Solutions Across Multiple Sectors",
  description:
    "CPT serves Healthcare, Manufacturing, Retail, Banking, Education, Automotive and more industries with specialized labeling solutions.",
};

export default function Industries() {
  const industries = [
    {
      name: "Healthcare",
      icon: Heart,
      description:
        "Medical-grade labels for hospitals, clinics, and pharmaceutical companies requiring compliance with stringent regulations.",
      products: [
        "Medical Device Labels",
        "Pharmaceutical Labels",
        "Patient ID Bands",
        "Laboratory Labels",
        "Sterilization Indicators",
      ],
      benefits: [
        "FDA Compliant",
        "Biocompatible Materials",
        "Sterilization Compatible",
        "Tamper Evident",
      ],
      applications: [
        "Medical Devices",
        "Drug Packaging",
        "Patient Records",
        "Laboratory Samples",
      ],
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      accentColor: "border-red-500",
    },
    {
      name: "Manufacturing",
      icon: Factory,
      description:
        "Industrial-strength labels designed to withstand harsh manufacturing environments and processes.",
      products: [
        "Asset Tags",
        "Inventory Labels",
        "Safety Labels",
        "Process Control Labels",
        "Quality Control Labels",
      ],
      benefits: [
        "Chemical Resistance",
        "High Temperature Tolerance",
        "Durable Adhesives",
        "Machine Readable",
      ],
      applications: [
        "Equipment Identification",
        "Work-in-Process Tracking",
        "Quality Control",
        "Safety Compliance",
      ],
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600",
      accentColor: "border-blue-500",
    },
    {
      name: "Retail",
      icon: ShoppingCart,
      description:
        "Eye-catching retail labels that enhance product presentation and improve customer experience.",
      products: [
        "Price Labels",
        "Promotional Stickers",
        "Product Labels",
        "Brand Labels",
        "Shelf Labels",
      ],
      benefits: [
        "Attractive Designs",
        "Easy Application",
        "Cost Effective",
        "Brand Enhancement",
      ],
      applications: [
        "Product Pricing",
        "Promotions",
        "Brand Identity",
        "Inventory Management",
      ],
      bgColor: "bg-green-50",
      iconColor: "text-green-600",
      accentColor: "border-green-500",
    },
    {
      name: "Banking",
      icon: Building2,
      description:
        "Secure labeling solutions for financial institutions requiring high security and professional appearance.",
      products: [
        "Security Labels",
        "Document Labels",
        "Asset Tags",
        "Tamper Evident Labels",
        "Card Labels",
      ],
      benefits: [
        "High Security",
        "Professional Appearance",
        "Tamper Evidence",
        "Regulatory Compliance",
      ],
      applications: [
        "Document Security",
        "Asset Protection",
        "Card Production",
        "Branch Identification",
      ],
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600",
      accentColor: "border-purple-500",
    },
    {
      name: "Education",
      icon: GraduationCap,
      description:
        "Educational labels for schools, universities, and training institutions to organize and identify resources.",
      products: [
        "Student ID Labels",
        "Asset Labels",
        "Library Labels",
        "Equipment Tags",
        "Safety Signs",
      ],
      benefits: [
        "Cost Effective",
        "Easy Application",
        "Durable",
        "Child Safe Materials",
      ],
      applications: [
        "Student Identification",
        "Asset Management",
        "Library Systems",
        "Safety Signage",
      ],
      bgColor: "bg-yellow-50",
      iconColor: "text-yellow-600",
      accentColor: "border-yellow-500",
    },
    {
      name: "Service Center",
      icon: Wrench,
      description:
        "Service and repair labels for tracking maintenance, warranty, and service history of equipment.",
      products: [
        "Service Labels",
        "Maintenance Tags",
        "Warranty Labels",
        "Repair History Labels",
        "QR Code Labels",
      ],
      benefits: [
        "Trackable",
        "Weather Resistant",
        "Sequential Numbering",
        "Scannable Codes",
      ],
      applications: [
        "Service Tracking",
        "Maintenance Schedules",
        "Warranty Management",
        "Repair Documentation",
      ],
      bgColor: "bg-gray-50",
      iconColor: "text-gray-600",
      accentColor: "border-gray-500",
    },
    {
      name: "Automotive",
      icon: Car,
      description:
        "Automotive-grade labels meeting OEM standards for vehicle manufacturing and aftermarket applications.",
      products: [
        "VIN Labels",
        "Engine Bay Labels",
        "Interior Labels",
        "Tire Labels",
        "Parts Identification",
      ],
      benefits: [
        "OEM Approved",
        "Temperature Cycling",
        "Chemical Resistance",
        "Long-term Durability",
      ],
      applications: [
        "Vehicle Identification",
        "Parts Tracking",
        "Safety Compliance",
        "Service Information",
      ],
      bgColor: "bg-red-50",
      iconColor: "text-red-600",
      accentColor: "border-red-500",
    },
    {
      name: "Entertainment",
      icon: Theater,
      description:
        "Creative labeling solutions for entertainment venues, events, and media production facilities.",
      products: [
        "Event Labels",
        "Admission Stickers",
        "Equipment Tags",
        "Brand Labels",
        "Promotional Labels",
      ],
      benefits: [
        "Creative Designs",
        "Custom Shapes",
        "Vibrant Colors",
        "Special Effects",
      ],
      applications: [
        "Event Management",
        "Equipment Identification",
        "Brand Promotion",
        "Access Control",
      ],
      bgColor: "bg-pink-50",
      iconColor: "text-pink-600",
      accentColor: "border-pink-500",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="relative bg-[#04499C] py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#F4A405] rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#F4A405] rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#F4A405] rounded-full"></div>
          <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-[#F4A405] rounded-full"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="text-[#F4A405]">Industries</span> We Serve
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Specialized labeling solutions engineered to meet the unique
            requirements and
            <strong className="text-white"> regulatory standards</strong> of
            diverse industries worldwide.
          </p>

          {/* Industry Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-[#F4A405] mb-2">8+</div>
              <div className="text-blue-100 font-medium">Industries</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-[#F4A405] mb-2">200+</div>
              <div className="text-blue-100 font-medium">Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-[#F4A405] mb-2">
                99.9%
              </div>
              <div className="text-blue-100 font-medium">Compliance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl font-bold text-[#F4A405] mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] mb-6 tracking-tight">
              Trusted Across{" "}
              <span className="text-[#F4A405]">Multiple Sectors</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our expertise spans various industries, each with unique
              challenges requiring
              <strong className="text-[#04499C]">
                {" "}
                specialized solutions and regulatory compliance
              </strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  className={`group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 ${industry.accentColor}/20 hover:${industry.accentColor}/40 hover:-translate-y-1`}
                >
                  <div
                    className={`w-20 h-20 ${industry.bgColor} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <IconComponent
                      className={`w-10 h-10 ${industry.iconColor}`}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-[#04499C] group-hover:text-[#F4A405] transition-colors duration-300">
                    {industry.name}
                  </h3>
                  <div
                    className={`mt-4 w-16 h-1 ${industry.accentColor} rounded-full mx-auto`}
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Detailed Industry Sections */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <div
                  key={index}
                  id={industry.name.toLowerCase()}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="flex items-center mb-8">
                      <div
                        className={`w-16 h-16 ${industry.bgColor} rounded-2xl flex items-center justify-center mr-6`}
                      >
                        <IconComponent
                          className={`w-8 h-8 ${industry.iconColor}`}
                        />
                      </div>
                      <div>
                        <h3 className="text-4xl font-bold text-[#04499C]">
                          {industry.name}
                        </h3>
                        <div
                          className={`w-24 h-1 ${industry.accentColor} rounded-full mt-3`}
                        ></div>
                      </div>
                    </div>

                    <p className="text-xl text-gray-700 mb-10 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                      <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#04499C]">
                        <h4 className="text-lg font-bold text-[#04499C] mb-4 flex items-center">
                          <Target className="w-5 h-5 mr-2" />
                          Key Products
                        </h4>
                        <ul className="space-y-3">
                          {industry.products.map((product, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-700"
                            >
                              <CheckCircle className="w-5 h-5 text-[#F4A405] mr-3 mt-0.5 flex-shrink-0" />
                              {product}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-[#F4A405]">
                        <h4 className="text-lg font-bold text-[#04499C] mb-4 flex items-center">
                          <Award className="w-5 h-5 mr-2" />
                          Key Benefits
                        </h4>
                        <ul className="space-y-3">
                          {industry.benefits.map((benefit, idx) => (
                            <li
                              key={idx}
                              className="flex items-start text-gray-700"
                            >
                              <Shield className="w-5 h-5 text-[#04499C] mr-3 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center px-8 py-4 bg-[#04499C] hover:bg-[#033875] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                      Get Industry-Specific Quote
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>

                  <div
                    className={`bg-white p-8 rounded-2xl shadow-xl border-2 border-gray-100 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="flex items-center mb-8">
                      <Zap className="w-6 h-6 text-[#F4A405] mr-3" />
                      <h4 className="text-2xl font-bold text-[#04499C]">
                        Applications in {industry.name}
                      </h4>
                    </div>
                    <div className="space-y-6">
                      {industry.applications.map((app, idx) => (
                        <div
                          key={idx}
                          className={`flex items-start space-x-4 p-6 ${industry.bgColor} rounded-xl border-2 ${industry.accentColor}/20`}
                        >
                          <div
                            className={`w-10 h-10 bg-[#04499C] rounded-xl flex items-center justify-center flex-shrink-0`}
                          >
                            <span className="text-white font-bold">
                              {idx + 1}
                            </span>
                          </div>
                          <div>
                            <div className="font-semibold text-[#04499C] text-lg">
                              {app}
                            </div>
                            <p className="text-gray-600 text-sm mt-1">
                              Professional-grade solutions for industry
                              compliance
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industry Expertise Section */}
      <section className="py-24 bg-[#04499C] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Industry <span className="text-[#F4A405]">Expertise</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              Delivering specialized solutions that exceed industry standards
              and
              <strong className="text-white">
                {" "}
                regulatory requirements
              </strong>{" "}
              across all sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-[#F4A405] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#F4A405] mb-2">8+</div>
              <div className="text-blue-100 font-medium">Industries Served</div>
              <div className="text-sm text-blue-200 mt-2">
                Specialized Solutions
              </div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#F4A405]" />
              </div>
              <div className="text-4xl font-bold text-[#F4A405] mb-2">200+</div>
              <div className="text-blue-100 font-medium">Clients Worldwide</div>
              <div className="text-sm text-blue-200 mt-2">Trusted Partners</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-[#F4A405] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl font-bold text-[#F4A405] mb-2">
                99.9%
              </div>
              <div className="text-blue-100 font-medium">
                Quality Compliance
              </div>
              <div className="text-sm text-blue-200 mt-2">Industry Leader</div>
            </div>
            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-[#F4A405]" />
              </div>
              <div className="text-4xl font-bold text-[#F4A405] mb-2">24/7</div>
              <div className="text-blue-100 font-medium">Expert Support</div>
              <div className="text-sm text-blue-200 mt-2">Always Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA Section - White Background */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] mb-6 tracking-tight">
            Ready to Transform Your{" "}
            <span className="text-[#F4A405]">Industry Operations</span>?
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Contact our industry specialists to discuss how CPT's specialized
            labeling solutions can address your specific regulatory challenges
            and operational requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-[#04499C] hover:bg-[#033875] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Speak with an Expert
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-10 py-4 border-2 border-[#F4A405] text-[#F4A405] hover:bg-[#F4A405] hover:text-white font-semibold rounded-xl transition-all duration-300"
            >
              Browse Products
            </Link>
          </div>

          {/* Industry Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#04499C] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#04499C] mb-2">
                Regulatory Compliance
              </h3>
              <p className="text-gray-600">
                FDA, OSHA, and industry-specific certifications guaranteed
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4A405] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#04499C] mb-2">
                Industry Expertise
              </h3>
              <p className="text-gray-600">
                Industry Leader since 2017 across all sectors
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#04499C] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#04499C] mb-2">
                Custom Solutions
              </h3>
              <p className="text-gray-600">
                Tailored designs meeting unique industry requirements
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
