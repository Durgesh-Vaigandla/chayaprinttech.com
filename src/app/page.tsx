"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Award,
  Users,
  CheckCircle,
  Zap,
  Clock,
  Target,
  Phone,
  Mail,
  FileText,
  Settings,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  const businessSolutions = [
    {
      title: "Industrial Manufacturing",
      subtitle: "Mission-Critical Labeling Solutions",
      image: "/Commercial/business_cards.jpg",
      description:
        "Engineered for harsh environments, regulatory compliance, and operational efficiency.",
      benefits: [
        "OSHA/ANSI Compliant",
        "High-Temperature Resistant",
        "Chemical Resistant",
        "Custom Engineering",
      ],
      industries: ["Automotive", "Aerospace", "Electronics", "Pharmaceutical"],
      cta: "Explore Industrial Solutions",
      link: "/products?category=industrial",
    },
    {
      title: "Commercial & Marketing",
      subtitle: "Professional Brand Materials",
      image: "/Commercial/brochures_big.jpg",
      description:
        "Premium print solutions that elevate your brand and drive business growth.",
      benefits: [
        "Premium Materials",
        "Full-Color Printing",
        "Custom Finishing",
        "Brand Consistency",
      ],
      industries: [
        "Healthcare",
        "Financial",
        "Retail",
        "Professional Services",
      ],
      cta: "View Commercial Options",
      link: "/products?category=commercial",
    },
  ];

  const trustIndicators = [
    {
      metric: "8+",
      label: "Years Serving Industry Leaders",
      icon: Award,
      description: "Established 2017",
    },
    {
      metric: "1000+",
      label: "Satisfied Business Clients",
      icon: Users,
      description: "Fortune 500 to SMBs",
    },
    {
      metric: "99.9%",
      label: "On-Time Delivery Rate",
      icon: Clock,
      description: "Performance guarantee",
    },
    {
      metric: "24-48hr",
      label: "Standard Turnaround",
      icon: Zap,
      description: "Rush available",
    },
  ];

  const competitiveAdvantages = [
    {
      icon: Target,
      title: "Custom Engineering Services",
      description:
        "Our technical team works directly with your engineers to develop labeling solutions that meet exact specifications and performance requirements.",
      businessValue: "Reduces R&D time and ensures regulatory compliance",
    },
    {
      icon: Shield,
      title: "Regulatory Compliance Expertise",
      description:
        "Deep knowledge of industry standards including OSHA, ANSI, UL, and FDA requirements across multiple sectors.",
      businessValue: "Mitigates compliance risk and ensures audit readiness",
    },
    {
      icon: Settings,
      title: "Supply Chain Integration",
      description:
        "Seamless integration with your procurement processes, including EDI, vendor-managed inventory, and just-in-time delivery.",
      businessValue:
        "Optimizes inventory costs and improves operational efficiency",
    },
    {
      icon: TrendingUp,
      title: "Quality Management System",
      description:
        "Rigorous quality processes with full traceability, documentation, and continuous improvement protocols.",
      businessValue:
        "Ensures consistent quality and supports your quality initiatives",
    },
  ];

  const clientTypes = [
    {
      type: "Manufacturing & Industrial",
      image: "/industriesWeServe/Manufacturing.jpg",
      challenges: [
        "Regulatory compliance",
        "Harsh environment durability",
        "Supply chain optimization",
      ],
      solutions: [
        "Custom engineered labels",
        "Regulatory documentation",
        "Vendor managed inventory",
      ],
    },
    {
      type: "Healthcare & Life Sciences",
      image: "/industriesWeServe/HealthCare.jpg",
      challenges: [
        "FDA compliance",
        "Patient safety",
        "Traceability requirements",
      ],
      solutions: [
        "Medical grade materials",
        "Serialization capability",
        "Validation documentation",
      ],
    },
    {
      type: "Automotive & Transportation",
      image: "/industriesWeServe/Automotive.jpg",
      challenges: [
        "OEM specifications",
        "Temperature extremes",
        "Long-term durability",
      ],
      solutions: [
        "TS 16949 processes",
        "High-temp materials",
        "Performance testing",
      ],
    },
    {
      type: "Technology & Electronics",
      image: "/industriesWeServe/Education.jpg",
      challenges: [
        "ESD protection",
        "Miniaturization",
        "Clean room requirements",
      ],
      solutions: [
        "ESD safe materials",
        "Precision die-cutting",
        "Clean room manufacturing",
      ],
    },
  ];

  return (
    <div className="bg-white">
      {/* Full Width Trust Bar */}
      <div className="w-full bg-[#04499C] text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center lg:justify-between text-sm">
            <div className="flex items-center space-x-6">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-2" />
                Quality Assured
              </span>
              <span className="flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Industry Leader Since 2017
              </span>
            </div>
            <div className="flex items-center space-x-4 mt-2 lg:mt-0">
              <span className="flex items-center">
                <Phone className="w-4 h-4 mr-1" />
                Chaya Print Tech: +919886677855
              </span>
              <span className="flex items-center">
                <Mail className="w-4 h-4 mr-1" />
                quotes@cpt.com
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Professional Hero Section */}
      <section className="relative bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gray-50 sm:pb-16 md:pb-20 lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-7 lg:text-left lg:mx-0">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
                      <span className="block">Professional Labeling</span>
                      <span className="block text-[#04499C]">
                        Solutions for Business
                      </span>
                    </h1>

                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                      Trusted by Fortune 500 companies for mission-critical
                      industrial labeling and premium commercial print
                      materials.
                      <strong className="text-gray-900">
                        {" "}
                        Custom engineered. Quality assured. On-time delivery.
                      </strong>
                    </p>

                    {/* Key Benefits */}
                    <div className="mt-8 space-y-3">
                      {[
                        "Same-day technical consultation & quotes",
                        "Custom engineering for unique requirements",
                        "Regulatory compliance expertise (OSHA, FDA, UL)",
                        "24-48 hour standard turnaround times",
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-[#04499C] mt-0.5 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                      <Link
                        href="/contact"
                        className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#04499C] hover:bg-[#033875] md:py-4 md:text-lg md:px-10 transition-colors duration-200 shadow-lg"
                      >
                        Request Custom Quote
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Link>
                      <Link
                        href="/products"
                        className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-[#04499C] text-base font-medium rounded-md text-[#04499C] bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
                      >
                        <FileText className="mr-2 w-5 h-5" />
                        Browse Catalog
                      </Link>
                    </div>
                  </motion.div>
                </div>

                <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-5 lg:flex lg:items-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                  >
                    {/* Product Showcase Grid - 6 Images: 4 Industrial, 2 Commercial */}
                    <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
                      {/* Industrial Products (4) */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#04499C]"
                      >
                        <Image
                          src="/industrial/Polycarbonate Labels (PC Stickers)/polycarbonate-labels-pc-stickers-1.jpg"
                          alt="Polycarbonate Labels"
                          width={200}
                          height={112}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-1 left-2 text-white text-xs font-semibold">
                          PC Labels
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="relative h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#04499C]"
                      >
                        <Image
                          src="/industrial/High Temperature Labels/high-temperature-labels-1.jpg"
                          alt="High Temperature Labels"
                          width={200}
                          height={112}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-1 left-2 text-white text-xs font-semibold">
                          High Temp
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="relative h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#04499C]"
                      >
                        <Image
                          src="/industrial/ESD Labels/esd-labels-isd-1.jpg"
                          alt="ESD Labels"
                          width={200}
                          height={112}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-1 left-2 text-white text-xs font-semibold">
                          ESD Labels
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="relative h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#04499C]"
                      >
                        <Image
                          src="/industrial/Automotive Labels/automotive-labels-1.jpg"
                          alt="Automotive Labels"
                          width={200}
                          height={112}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-1 left-2 text-white text-xs font-semibold">
                          Automotive
                        </div>
                      </motion.div>

                      {/* Commercial Products (2) */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                        className="relative h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#04499C]"
                      >
                        <Image
                          src="/Commercial/business_cards.jpg"
                          alt="Business Cards"
                          width={200}
                          height={112}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-1 left-2 text-white text-xs font-semibold">
                          Business Cards
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="relative h-28 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 bg-[#04499C]"
                      >
                        <Image
                          src="/Commercial/stickers.jpg"
                          alt="Stickers and Labels"
                          width={200}
                          height={112}
                          className="w-full h-full object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <div className="absolute bottom-1 left-2 text-white text-xs font-semibold">
                          Stickers
                        </div>
                      </motion.div>
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      className="absolute -top-4 -right-4 bg-[#F4A405] text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
                    >
                      30+ Products
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Trust Metrics */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustIndicators.map((indicator, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="flex justify-center mb-3">
                  <indicator.icon className="w-8 h-8 text-[#04499C]" />
                </div>
                <div className="text-3xl font-bold text-[#04499C] mb-1">
                  {indicator.metric}
                </div>
                <div className="text-sm font-medium text-gray-900 mb-1">
                  {indicator.label}
                </div>
                <div className="text-xs text-gray-500">
                  {indicator.description}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Business Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Tailored Solutions for Your Business
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Industry-specific expertise and custom engineering to meet your
              exact requirements
            </p>
          </motion.div>

          <div className="space-y-12">
            {businessSolutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index % 2 === 1 ? "lg:grid-flow-row-dense" : ""
                  }`}
                >
                  <div
                    className={`relative h-64 lg:h-auto ${
                      index % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div
                    className={`p-8 lg:p-12 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-lg text-[#04499C] font-medium">
                        {solution.subtitle}
                      </p>
                    </div>

                    <p className="text-gray-600 mb-6">{solution.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Key Benefits
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {solution.benefits.map((benefit, benefitIndex) => (
                          <div key={benefitIndex} className="flex items-center">
                            <CheckCircle className="w-4 h-4 text-[#F4A405] mr-2" />
                            <span className="text-sm text-gray-700">
                              {benefit}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                        Serving Industries
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {solution.industries.map((industry, industryIndex) => (
                          <span
                            key={industryIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                          >
                            {industry}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href={solution.link}
                      className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#04499C] hover:bg-[#033875] transition-colors duration-200"
                    >
                      {solution.cta}
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Why Leading Companies Choose CPT
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Strategic advantages that drive operational excellence and
              business results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {competitiveAdvantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#04499C] to-[#F4A405] rounded-lg flex items-center justify-center shadow-lg">
                      <advantage.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {advantage.description}
                    </p>
                    <div className="bg-gradient-to-r from-blue-50 to-yellow-50 border-l-4 border-[#F4A405] p-4 rounded-r-lg">
                      <p className="text-sm font-medium text-[#04499C]">
                        <strong className="text-[#F4A405]">
                          Business Value:
                        </strong>{" "}
                        {advantage.businessValue}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Success Stories by Industry */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
              Industry-Specific Expertise
            </h2>
            <p className="mt-4 max-w-3xl mx-auto text-xl text-gray-600">
              Deep understanding of sector challenges with proven solutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clientTypes.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 bg-gray-200">
                  <Image
                    src={client.image}
                    alt={client.type}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end">
                    <h3 className="text-white text-xl font-bold p-6">
                      {client.type}
                    </h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Common Challenges
                    </h4>
                    <ul className="space-y-2">
                      {client.challenges.map((challenge, challengeIndex) => (
                        <li
                          key={challengeIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
                      Our Solutions
                    </h4>
                    <ul className="space-y-2">
                      {client.solutions.map((solution, solutionIndex) => (
                        <li
                          key={solutionIndex}
                          className="flex items-center text-sm text-gray-600"
                        >
                          <CheckCircle className="w-4 h-4 text-[#F4A405] mr-2" />
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional CTA - White Background */}
      <section className="bg-white py-16 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Ready to Optimize Your Labeling Operations?
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Schedule a consultation with our technical experts. Get a custom
              quote in 24 hours.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-white bg-[#04499C] hover:bg-[#033875] transition-colors duration-200 shadow-lg"
              >
                <Phone className="mr-2 w-5 h-5" />
                Schedule Consultation
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center px-8 py-4 border-2 border-[#F4A405] text-lg font-medium rounded-md text-[#F4A405] bg-transparent hover:bg-[#F4A405] hover:text-white transition-colors duration-200"
              >
                <FileText className="mr-2 w-5 h-5" />
                Download Catalog
              </Link>
            </div>

            {/* Additional Contact Information */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Phone className="w-8 h-8 text-[#04499C] mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Call Us
                  </h3>
                  <p className="text-gray-600">+919886677855</p>
                  <p className="text-sm text-gray-500">Mon-Fri 8AM-6PM IST</p>
                </div>
                <div className="text-center">
                  <Mail className="w-8 h-8 text-[#04499C] mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Email Us
                  </h3>
                  <p className="text-gray-600">quotes@cpt.com</p>
                  <p className="text-sm text-gray-500">
                    24-hour response guaranteed
                  </p>
                </div>
                <div className="text-center">
                  <Clock className="w-8 h-8 text-[#04499C] mx-auto mb-2" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Quick Turnaround
                  </h3>
                  <p className="text-gray-600">24-48 Hours</p>
                  <p className="text-sm text-gray-500">
                    Standard delivery time
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
