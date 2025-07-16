import { ArrowRight, Target, Users, TrendingUp, Lightbulb, BarChart, Palette } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  const services = [
    {
      icon: <Users className="h-8 w-8" />,
      title: "Social Media Management",
      description: "Comprehensive social media strategies to engage your audience and build brand loyalty.",
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: "Market Research",
      description: "Data-driven insights to understand your market and identify growth opportunities.",
    },
    {
      icon: <Target className="h-8 w-8" />,
      title: "IMC Drafting & Implementation",
      description: "Integrated marketing communications for consistent brand messaging across all channels.",
    },
    {
      icon: <TrendingUp className="h-8 w-8" />,
      title: "Promotional Strategy Development",
      description: "Strategic promotional campaigns designed to maximize ROI and drive conversions.",
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Marketing Activations",
      description: "Creative marketing activations that create memorable brand experiences.",
    },
    {
      icon: <Palette className="h-8 w-8" />,
      title: "Graphic Design",
      description: "Professional visual design services to enhance your brand identity and marketing materials.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <Image
                src="/ask-logo-banner.png"
                alt="You ASK, We Innovate"
                width={800}
                height={200}
                className="mx-auto mb-8 max-w-full h-auto"
                priority
              />
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-xl lg:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Forward-thinking marketing agency combining creative strategies with data-driven insights to deliver
                exceptional results.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <Link
                href="/quote"
                className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About ASK Innovate</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                ASK Innovate is a forward-thinking marketing agency, founded by three industry experts with a passion
                for innovation and growth. We combine creative strategies with data-driven insights to deliver
                exceptional results for our clients.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We specialise in understanding your business's marketing problem(s) and needs in order to create a
                tailored marketing solution. Our mission is to help businesses of all sizes navigate the complex digital
                landscape and achieve sustainable growth through strategic marketing solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach starts with a free consultation, where we spend time understanding your business and its
                needs. After the consultation, our team will spend time tailoring a unique marketing proposal
                specifically for your business.
              </p>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-blue-900 mb-6">Why Choose Us?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Industry experts with proven track record</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Data-driven strategies for measurable results</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Tailored solutions for every business</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-gray-700">Free consultation to understand your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive marketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Innovate Your Marketing?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve sustainable growth through strategic marketing
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/quote"
              className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/people"
              className="inline-flex items-center border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
