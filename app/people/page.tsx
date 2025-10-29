"use client"

import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useEngagementPopup } from "../../hooks/useEngagementPopup"
import EngagementPopup from "../components/EngagementPopup"
import { useEffect } from "react"

export default function PeoplePage() {
  const { showEngagementPrompt, handlePopupDismiss, popupTriggered, popupDismissed } = useEngagementPopup()

  // Debug logging for popup state
  useEffect(() => {
    console.log("👥 People page - Popup state:", {
      showEngagementPrompt,
      popupTriggered,
      popupDismissed,
    })
  }, [showEngagementPrompt, popupTriggered, popupDismissed])

  const founders = [
    {
      name: "Adriaan Nel",
      title: "Director | Creative & Financial Strategist",
      email: "adriaann@askinnovate.co.za",
      linkedin: "https://www.linkedin.com/in/adriaan-nel-ab38a1245/",
      description:
        "Adriaan holds a BCom in Marketing Management from the University of Pretoria. He brings a strong foundation in creativity and innovative marketing to ASK Innovate. He is numbers-driven with a flair for costing and budgets. Coupled with his excellence in content creation, he creates marketing content that never misses.",
      image: "/Adriaan.jpg?height=300&width=300",
    },
    {
      name: "Shane Bezuidenhout",
      title: "Director | Brand & Social Media Strategist",
      email: "shaneb@askinnovate.co.za",
      linkedin: "https://www.linkedin.com/in/shane-bezuidenhout-6a489720a/",
      description:
        "Shane holds a BCom (Honours) in Marketing Management from the University of Pretoria. He works with a results-oriented approach to brand strategy and communication. A social media expert and a metrics master, Shane believes in strategic marketing with long-term growth in mind. At ASK Innovate, he focuses on building compelling marketing narratives and executing high-impact campaigns that drive engagement, loyalty, and growth for clients across various sectors.",
      image: "/Shane.jpg?height=300&width=300",
    },
    {
      name: "Kishan Hargovan",
      title: "Director | Client Services & Strategy Lead",
      email: "kishanh@askinnovate.co.za",
      linkedin: "https://www.linkedin.com/in/kishan-hargovan-b54685216/",
      description:
        "Kishan holds a BCom (Honours) in Marketing Management from the University of Pretoria. His background comprises of experience across several industries, resulting in invaluable business acumen. He specialises in developing tailored marketing solutions that align with client goals and market trends. Kishan focuses on client service excellence, striving to deliver exceptional and professional services to ASK Innovate's clients.",
      image: "/Kishan_New.jpg?height=300&width=300",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Conference Room Video */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 sm:py-20 overflow-hidden">
        {/* Background Video - People in a conference room for a business meeting */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => console.log("People page video error:", e)}
          >
            {/* Video by cottonbro studio from Pexels */}
            <source
              src="https://videos.pexels.com/video-files/3205624/3205624-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/3205624/3205624-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            <source src="https://videos.pexels.com/video-files/3205624/3205624-sd_640_360_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">Our People</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Meet the innovative minds behind ASK Innovate - three industry experts passionate about driving your
            business growth
          </p>
        </div>
      </section>

      {/* Founders Section - Mobile Responsive */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 sm:space-y-20">
            {founders.map((founder, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div
                  className={`animate-fade-in-${index % 2 === 0 ? "left" : "right"} ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 max-w-sm mx-auto lg:max-w-none">
                    <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                      <img
                        src={founder.image || "/placeholder.svg"}
                        alt={founder.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                      <p className="text-sm sm:text-base text-blue-600 font-medium mb-3">{founder.title}</p>
                      <div className="flex space-x-4 justify-center lg:justify-start">
                        <Link
                          href={`mailto:${founder.email}`}
                          className="text-blue-600 hover:text-blue-800 transition-colors p-2 hover:bg-blue-50 rounded-lg"
                        >
                          <Mail className="h-5 w-5" />
                        </Link>
                        <Link
                          href={founder.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 transition-colors p-2 hover:bg-blue-50 rounded-lg"
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
                  <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-lg">
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                    <p className="text-base sm:text-lg text-blue-600 font-semibold mb-4 sm:mb-6">{founder.title}</p>
                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">{founder.description}</p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                      <Link
                        href={`mailto:${founder.email}`}
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm sm:text-base break-all sm:break-normal"
                      >
                        <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                        <span className="truncate">{founder.email}</span>
                      </Link>
                      <Link
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors text-sm sm:text-base"
                      >
                        <Linkedin className="h-4 w-4 mr-2 flex-shrink-0" />
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

      {/* CTA Section - Mobile Responsive */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Work with Our Team?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's schedule a free consultation to discuss how we can help grow your business
          </p>
          <Link
            href="/quote"
            className="inline-flex items-center bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center max-w-xs mx-auto sm:max-w-none"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* Engagement Popup */}
      <EngagementPopup show={showEngagementPrompt} onDismiss={handlePopupDismiss} />
    </div>
  )
}