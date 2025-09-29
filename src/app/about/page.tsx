import Image from "next/image";
import Link from "next/link";
import {
  Award,
  Shield,
  Target,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Building2,
  Calendar,
  MapPin,
  User,
  Eye,
  Zap,
} from "lucide-react";

export const metadata = {
  title:
    "About Chaya Print Tech - Established 2017 | Leading Label Manufacturing Company in Bengaluru",
  description:
    "Incorporated in 2017 at Bengaluru, Chaya Print Tech is a Sole Proprietorship company manufacturing SS & Aluminum Name Plates, PC Labels, PVC Stickers, Blank Labels, Glass printing & more. Under Charan Sri Ram's leadership, we've gained name and fame in the business. Our vision: to be the most reliable label manufacturers. Our mission: innovative, reliable and cost-effective label solutions for all sectors.",
};

export default function About() {
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
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 text-white">
              <div className="inline-flex items-center px-4 py-2 bg-[#F4A405] text-[#04499C] rounded-full text-sm font-semibold mb-4">
                <Calendar className="w-4 h-4 mr-2" />
                Established 2017 • Bengaluru
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight tracking-tight">
                About <span className="text-[#F4A405]">Chaya Print Tech</span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
                Whether you're looking for a{" "}
                <strong className="text-white">machine</strong>, have a{" "}
                <strong className="text-white">support question</strong> or a{" "}
                <strong className="text-white">business query</strong> - get in
                touch.
              </p>

              {/* Company Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-[#F4A405]">8+</div>
                  <div className="text-blue-100 text-sm font-medium">Years</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-[#F4A405]">200+</div>
                  <div className="text-blue-100 text-sm font-medium">
                    Clients
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-[#F4A405]">30+</div>
                  <div className="text-blue-100 text-sm font-medium">
                    Products
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="text-2xl font-bold text-[#F4A405]">24/7</div>
                  <div className="text-blue-100 text-sm font-medium">
                    Support
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#F4A405] rounded-2xl transform rotate-6 opacity-20"></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <Image
                    src="/CPT.png"
                    alt="Chaya Print Tech Logo"
                    width={300}
                    height={300}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#04499C] rounded-2xl flex items-center justify-center">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] tracking-tight">
                    About{" "}
                    <span className="text-[#F4A405]">Chaya Print Tech</span>
                  </h2>
                  <div className="w-24 h-1 bg-[#F4A405] rounded-full mt-3"></div>
                </div>
              </div>

              {/* Company Details */}
              <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-[#04499C]">
                <div className="flex items-center mb-4">
                  <Calendar className="w-5 h-5 text-[#04499C] mr-2" />
                  <span className="font-semibold text-[#04499C]">
                    Incorporated in 2017
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <MapPin className="w-5 h-5 text-[#04499C] mr-2" />
                  <span className="font-semibold text-[#04499C]">
                    Located in Bengaluru
                  </span>
                </div>
                <div className="flex items-center mb-4">
                  <User className="w-5 h-5 text-[#04499C] mr-2" />
                  <span className="font-semibold text-[#04499C]">
                    Proprietor: Charan Sri Ram
                  </span>
                </div>
                <div className="flex items-center">
                  <Award className="w-5 h-5 text-[#04499C] mr-2" />
                  <span className="font-semibold text-[#04499C]">
                    Sole Proprietorship Company
                  </span>
                </div>
              </div>

              <p className="text-xl text-gray-700 leading-relaxed">
                We{" "}
                <strong className="text-[#04499C]">"Chaya Print Tech"</strong>{" "}
                are a Sole Proprietorship based company, engaged as the{" "}
                <strong className="text-[#04499C]">manufacturer</strong> of SS
                and Aluminum Name Plate, PC Labels, PVC Sticker, Blank Labels,
                Glass printing, Duplex Box Printing, No Parking Boards and many
                more.
              </p>

              <p className="text-xl text-gray-700 leading-relaxed">
                By using{" "}
                <strong className="text-[#F4A405]">latest technology</strong>,
                we are also engaged in rendering Printing Service and Acrylic
                Printing Service. Under the supervision of our mentor{" "}
                <strong className="text-[#04499C]">
                  "Charan Sri Ram (Proprietor)"
                </strong>
                we have gained name and fame in the business.
              </p>

              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-6 bg-white border-2 border-[#04499C] rounded-2xl">
                  <div className="text-4xl font-bold text-[#04499C] mb-2">
                    200+
                  </div>
                  <div className="text-gray-700 font-medium">Happy Clients</div>
                </div>
                <div className="text-center p-6 bg-white border-2 border-[#F4A405] rounded-2xl">
                  <div className="text-4xl font-bold text-[#F4A405] mb-2">
                    8+
                  </div>
                  <div className="text-gray-700 font-medium">
                    Product Categories
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-[#04499C] rounded-2xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-16 h-16 text-[#04499C]" />
                </div>
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-[#F4A405] rounded-2xl flex items-center justify-center shadow-lg">
                  <Zap className="w-12 h-12 text-[#F4A405]" />
                </div>
              </div>
              <div className="space-y-6 mt-8">
                <div className="h-32 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-400 rounded-2xl flex items-center justify-center shadow-lg">
                  <Target className="w-12 h-12 text-gray-600" />
                </div>
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-[#F4A405] rounded-2xl flex items-center justify-center shadow-lg">
                  <Star className="w-16 h-16 text-[#F4A405]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] mb-6 tracking-tight">
              Our Mission & <span className="text-[#F4A405]">Vision</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Driving excellence in label manufacturing with clear purpose and
              ambitious goals
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Vision */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-[#F4A405] hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-[#F4A405] rounded-2xl flex items-center justify-center mr-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#04499C]">
                    Our Vision
                  </h3>
                  <div className="w-20 h-1 bg-[#F4A405] rounded-full mt-2"></div>
                </div>
              </div>
              <div className="bg-[#F4A405]/10 p-6 rounded-xl mb-6">
                <p className="text-lg font-semibold text-[#04499C] leading-relaxed">
                  "To be the most reliable and top label manufacturers of all
                  types of labels and to become customers first choice."
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We envision becoming the industry benchmark for reliability,
                quality, and customer satisfaction in label manufacturing across
                all sectors.
              </p>
            </div>

            {/* Mission */}
            <div className="bg-white p-10 rounded-2xl shadow-xl border-l-4 border-[#04499C] hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-[#04499C] rounded-2xl flex items-center justify-center mr-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-[#04499C]">
                    Our Mission
                  </h3>
                  <div className="w-20 h-1 bg-[#04499C] rounded-full mt-2"></div>
                </div>
              </div>
              <div className="bg-[#04499C]/10 p-6 rounded-xl mb-6">
                <p className="text-lg font-semibold text-[#04499C] leading-relaxed">
                  "Our mission is to provide innovative, reliable and cost
                  effective label solutions for all types of sectors."
                </p>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We are committed to delivering cutting-edge labeling solutions
                that combine innovation, reliability, and cost-effectiveness for
                every industry we serve.
              </p>
            </div>
          </div>

          {/* Mission Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#04499C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#04499C] mb-4">
                Innovative Solutions
              </h4>
              <p className="text-gray-600">
                Cutting-edge technology and creative approaches to meet evolving
                market needs
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#F4A405] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#04499C] mb-4">
                Reliable Quality
              </h4>
              <p className="text-gray-600">
                Consistent quality standards ensuring dependable performance
                across all products
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-lg">
              <div className="w-16 h-16 bg-[#04499C] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-[#04499C] mb-4">
                Cost Effective
              </h4>
              <p className="text-gray-600">
                Optimal pricing strategies delivering maximum value without
                compromising quality
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] mb-6 tracking-tight">
              Our Products & <span className="text-[#F4A405]">Services</span>
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Comprehensive manufacturing and printing solutions using the
              latest technology
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Shield,
                title: "SS & Aluminum Name Plates",
                description:
                  "Durable metal name plates for industrial and commercial applications",
                color: "bg-[#04499C]",
              },
              {
                icon: Target,
                title: "PC Labels & PVC Stickers",
                description:
                  "High-quality plastic labels and stickers for various purposes",
                color: "bg-[#F4A405]",
              },
              {
                icon: Award,
                title: "Blank Labels",
                description:
                  "Customizable blank labels ready for printing and application",
                color: "bg-[#04499C]",
              },
              {
                icon: Star,
                title: "Glass Printing",
                description:
                  "Professional glass printing services for signage and displays",
                color: "bg-[#F4A405]",
              },
              {
                icon: CheckCircle,
                title: "Duplex Box Printing",
                description:
                  "High-quality packaging and box printing solutions",
                color: "bg-[#04499C]",
              },
              {
                icon: Zap,
                title: "No Parking Boards",
                description:
                  "Weather-resistant signage boards for traffic and parking control",
                color: "bg-[#F4A405]",
              },
            ].map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={index}
                  className="bg-gray-50 p-8 rounded-2xl hover:shadow-lg transition-all duration-300 group border-2 border-transparent hover:border-[#F4A405]/20"
                >
                  <div
                    className={`w-16 h-16 ${product.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#04499C] mb-4 group-hover:text-[#F4A405] transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Services */}
          <div className="bg-gradient-to-br from-[#04499C] to-blue-700 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Professional{" "}
                <span className="text-[#F4A405]">Printing Services</span>
              </h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Advanced printing solutions powered by cutting-edge technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#F4A405] rounded-xl flex items-center justify-center mr-4">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold">Printing Services</h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Comprehensive printing solutions using state-of-the-art
                  equipment and latest technology for superior results.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <Star className="w-6 h-6 text-[#F4A405]" />
                  </div>
                  <h4 className="text-2xl font-bold">
                    Acrylic Printing Services
                  </h4>
                </div>
                <p className="text-blue-100 leading-relaxed">
                  Specialized acrylic printing services for premium displays,
                  signage, and decorative applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Leadership */}
            <div className="space-y-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-16 h-16 bg-[#04499C] rounded-2xl flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-[#04499C] tracking-tight">
                    Under Expert{" "}
                    <span className="text-[#F4A405]">Leadership</span>
                  </h2>
                  <div className="w-24 h-1 bg-[#F4A405] rounded-full mt-3"></div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-[#F4A405]">
                <div className="flex items-center mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#04499C] to-blue-600 rounded-2xl flex items-center justify-center mr-6">
                    <User className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#04499C]">
                      Charan Sri Ram
                    </h3>
                    <p className="text-[#F4A405] font-semibold text-lg">
                      Proprietor & Mentor
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Under the supervision of our experienced mentor{" "}
                  <strong className="text-[#04499C]">Charan Sri Ram</strong>,
                  Chaya Print Tech has gained significant name and fame in the
                  business. His leadership and vision have guided our company to
                  become a trusted partner for businesses across multiple
                  industries.
                </p>
              </div>

              {/* Key Achievements */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    icon: Award,
                    title: "Industry Recognition",
                    description: "Gained name and fame in the business",
                  },
                  {
                    icon: Users,
                    title: "Expert Leadership",
                    description: "Under experienced mentorship",
                  },
                  {
                    icon: Shield,
                    title: "Quality Assurance",
                    description: "Latest technology implementation",
                  },
                  {
                    icon: Target,
                    title: "Customer Focus",
                    description: "Sole proprietorship dedication",
                  },
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white p-6 rounded-xl shadow-lg text-center"
                    >
                      <div className="w-12 h-12 bg-[#F4A405] rounded-xl flex items-center justify-center mx-auto mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-bold text-[#04499C] mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-br from-[#04499C] to-blue-700 p-12 rounded-2xl text-white shadow-2xl">
              <h3 className="text-4xl font-bold mb-6">
                Ready to Work <span className="text-[#F4A405]">Together</span>?
              </h3>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Whether you're looking for a machine, have a support question or
                a business query -
                <strong className="text-white"> get in touch</strong> with our
                expert team today.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F4A405]" />
                  <span className="text-blue-100">
                    Expert consultation available
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F4A405]" />
                  <span className="text-blue-100">
                    Custom solutions for all industries
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F4A405]" />
                  <span className="text-blue-100">
                    Latest technology implementation
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-[#F4A405]" />
                  <span className="text-blue-100">
                    Established reputation since 2017
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center w-full bg-[#F4A405] hover:bg-yellow-500 text-[#04499C] text-center px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 justify-center"
                >
                  Get In Touch Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  href="/products"
                  className="inline-flex items-center w-full border-2 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-[#04499C] text-center px-8 py-4 rounded-xl font-bold transition-all duration-300 justify-center"
                >
                  View Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
