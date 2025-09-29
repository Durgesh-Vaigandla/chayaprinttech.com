import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  CheckCircle,
  Star,
  Award,
  Shield,
  Zap,
  ArrowRight,
} from "lucide-react";
import { findProduct } from "@/lib/products";

interface Props {
  params: { slug: string };
}

export function generateMetadata({ params }: Props) {
  const product = findProduct(params.slug);
  if (!product) return { title: "Product Not Found - CPT" };
  return {
    title: `${product.name} | CPT Industrial & Commercial Print Solutions`,
    description: product.short,
  };
}

export default function ProductDetail({ params }: Props) {
  const product = findProduct(params.slug);
  if (!product) return notFound();

  const isIndustrial = product.category === "Industrial";

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Hero Section */}
      <div className="bg-[#04499C] py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#F4A405] rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-[#F4A405] rounded-full"></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#F4A405] rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="mb-8">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Products
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className={`inline-flex items-center px-4 py-2 rounded-lg text-sm font-bold mb-6 ${
                  isIndustrial
                    ? "bg-[#04499C] border-2 border-white"
                    : "bg-[#F4A405] text-white"
                }`}
              >
                {product.category}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                {product.name}
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-8">
                {product.short}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#F4A405] hover:bg-[#e6940a] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg"
                >
                  Request Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-[#04499C] font-semibold rounded-xl transition-all duration-300"
                >
                  Get Sample
                </Link>
              </div>
            </div>

            {/* Hero Product Image */}
            {product.images.length > 0 && (
              <div className="relative">
                <div className="relative h-96 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    sizes="(max-width:1200px) 100vw, 50vw"
                    className="object-contain p-8"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Product Gallery Section */}
      {product.images.length > 1 && (
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#04499C] mb-4">
                Product Gallery
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Detailed views and applications of our{" "}
                {product.name.toLowerCase()}
              </p>
            </div>
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {product.images.slice(1).map((src, i) => (
                <div
                  key={i}
                  className="relative h-72 rounded-2xl overflow-hidden group bg-white shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-[#04499C]/20"
                >
                  <Image
                    src={src}
                    alt={`${product.name} image ${i + 2}`}
                    fill
                    sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Product Overview Section */}
        <section className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-[#04499C]">
              <h2 className="text-3xl font-bold text-[#04499C] mb-6">
                Product Overview
              </h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* Key Features Card */}
            {product.features && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#04499C]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#04499C] rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#04499C]">
                    Key Features
                  </h3>
                </div>
                <ul className="space-y-3">
                  {product.features.map((f) => (
                    <li key={f} className="flex gap-3 items-start">
                      <CheckCircle className="w-5 h-5 text-[#F4A405] flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Applications Card */}
            {product.applications && (
              <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#F4A405]/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-[#F4A405] rounded-lg flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#04499C]">
                    Applications
                  </h3>
                </div>
                <ul className="space-y-3">
                  {product.applications.map((a) => (
                    <li key={a} className="flex gap-3 items-start">
                      <div className="w-2 h-2 rounded-full bg-[#04499C] flex-shrink-0 mt-2"></div>
                      <span className="text-gray-700 leading-relaxed">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quality Assurance Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-[#04499C]/10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#04499C] rounded-lg flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-[#04499C]">
                  Quality Assurance
                </h3>
              </div>
              <ul className="space-y-3">
                <li className="flex gap-3 items-center">
                  <Award className="w-5 h-5 text-[#F4A405]" />
                  <span className="text-gray-700">
                    Quality Assurance Certified
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <Award className="w-5 h-5 text-[#F4A405]" />
                  <span className="text-gray-700">FDA Approved Materials</span>
                </li>
                <li className="flex gap-3 items-center">
                  <Award className="w-5 h-5 text-[#F4A405]" />
                  <span className="text-gray-700">OSHA Compliant</span>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Bottom CTA Section - White Background */}
      <section className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] mb-6 tracking-tight">
            Ready to Order {product.name}?
          </h2>
          <p className="text-xl text-gray-700 mb-12 leading-relaxed">
            Get a personalized quote or request a sample to experience the
            quality and performance of our {product.name.toLowerCase()}{" "}
            solution.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 bg-[#04499C] hover:bg-[#033875] text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Request Custom Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-10 py-4 border-2 border-[#F4A405] text-[#F4A405] hover:bg-[#F4A405] hover:text-white font-semibold rounded-xl transition-all duration-300"
            >
              Get Free Sample
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center px-10 py-4 border-2 border-gray-300 text-gray-700 hover:border-[#04499C] hover:text-[#04499C] font-semibold rounded-xl transition-all duration-300"
            >
              Browse More Products
            </Link>
          </div>

          {/* Product Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 border-t border-gray-200">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#04499C] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#04499C] mb-2">
                Quality Guaranteed
              </h3>
              <p className="text-gray-600">
                Premium materials with industry-leading durability standards
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#F4A405] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#04499C] mb-2">
                Fast Delivery
              </h3>
              <p className="text-gray-600">
                Quick turnaround times to keep your operations running
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#04499C] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#04499C] mb-2">
                Expert Support
              </h3>
              <p className="text-gray-600">
                Professional guidance from our experienced team
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
