import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function PeoplePage() {
  const founders = [
    {
      name: "Shane Bezuidenhout",
      email: "shaneb@askinnovate.co.za",
      linkedin: "https://www.linkedin.com/in/shane-bezuidenhout-6a489720a/",
      description:
        "Shane brings extensive experience in strategic marketing and business development. With a keen eye for market trends and consumer behavior, he specializes in developing comprehensive marketing strategies that drive sustainable growth. His expertise in digital transformation and brand positioning has helped numerous businesses establish strong market presence and achieve their growth objectives.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Kishan Hargovan",
      email: "kishanh@askinnovate.co.za",
      linkedin: "https://www.linkedin.com/in/kishan-hargovan-b54685216/",
      description:
        "Kishan is our data analytics and digital marketing specialist. With a strong background in performance marketing and conversion optimization, he focuses on creating data-driven campaigns that deliver measurable results. His expertise in social media management, SEO, and digital advertising ensures that our clients' online presence is both engaging and effective in reaching their target audiences.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Adrian Nel",
      email: "adriaann@askinnovate.co.za",
      linkedin: "https://www.linkedin.com/in/adriaan-nel-ab38a1245/",
      description:
        "Adrian leads our creative and design initiatives, bringing innovative visual solutions to life. With extensive experience in graphic design, brand development, and creative campaign execution, he ensures that every marketing material reflects the client's brand identity while capturing audience attention. His creative approach combined with strategic thinking helps brands stand out in competitive markets.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4 animate-fade-in-up">Our People</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-8"></div>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Meet the innovative minds behind ASK Innovate - three industry experts passionate about driving your
            business growth
          </p>
        </div>
      </section>

      {/* Founders Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {founders.map((founder, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`animate-fade-in-${index % 2 === 0 ? "left" : "right"} ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <img
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                      <div className="flex space-x-4">
                        <Link
                          href={`mailto:${founder.email}`}
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Mail className="h-5 w-5" />
                        </Link>
                        <Link
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Linkedin className="h-5 w-5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className={`animate-fade-in-${index % 2 === 0 ? "right" : "left"} ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h3 className="text-3xl font-bold text-gray-900 mb-6">{founder.name}</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">{founder.description}</p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href={`mailto:${founder.email}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        <Mail className="h-4 w-4 mr-2" />
                        {founder.email}
                      </Link>
                      <Link
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                      >
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn Profile
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Work with Our Team?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Let's schedule a free consultation to discuss how we can help grow your business
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
