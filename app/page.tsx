"use client"

import { ArrowRight, Target, Users, TrendingUp, Lightbulb, BarChart, Code } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEngagementPopup } from "../hooks/useEngagementPopup"
import EngagementPopup from "./components/EngagementPopup"
import { useEffect } from "react"

export default function Home() {
  const { showEngagementPrompt, handlePopupDismiss, popupTriggered, popupDismissed } = useEngagementPopup()

  // Debug logging for popup state
  useEffect(() => {
    console.log("🏠 Home page - Popup state:", {
      showEngagementPrompt,
      popupTriggered,
      popupDismissed,
    })
  }, [showEngagementPrompt, popupTriggered, popupDismissed])

  // Handle chunk load errors by forcing a page refresh
  useEffect(() => {
    const handleChunkError = (event: ErrorEvent) => {
      if (event.message.includes('Loading chunk') || event.message.includes('ChunkLoadError')) {
        console.log('🔄 Chunk load error detected, refreshing page...')
        window.location.reload()
      }
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (event.reason?.message?.includes('Loading chunk')) {
        console.log('🔄 Chunk load error detected in promise, refreshing page...')
        window.location.reload()
      }
    }

    window.addEventListener('error', handleChunkError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)

    return () => {
      window.removeEventListener('error', handleChunkError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
    }
  }, [])

  // Force popup initialization on mount
  useEffect(() => {
    // Trigger a small delay to ensure popup system initializes
    setTimeout(() => {
      console.log("🏠 Home page - Initializing popup system")
    }, 100)
  }, [])

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
      icon: <Code className="h-8 w-8" />,
      title: "Web Development",
      description: "Modern, responsive websites and web applications that drive engagement and conversions.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section with Office Video Background */}
      <section className="relative bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white overflow-hidden">
        {/* Background Video - Alternative sources */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => console.log("Home video error:", e)}
            onLoadStart={() => console.log("Home video loading started")}
            onCanPlay={() => console.log("Home video can play")}
          >
            {/* Pixabay office interior videos - more reliable for hotlinking */}
            <source
              src="https://videos.pexels.com/video-files/8347237/8347237-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/8347237/8347237-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            {/* Alternative office walkthrough */}
            <source
              src="https://videos.pexels.com/video-files/8347237/8347237-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            {/* Archive.org reliable fallback */}
            <source
              src="https://videos.pexels.com/video-files/8347237/8347237-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            {/* Final fallback: Use the same working video from people page */}
            <source
              src="https://videos.pexels.com/video-files/8347237/8347237-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
          </video>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-800/70 to-blue-700/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 z-10">
          <div className="text-center">
            <div className="animate-fade-in-up">
              <Image
                src="/ask-logo-banner.png"
                alt="You ASK, We Innovate"
                width={800}
                height={200}
                className="mx-auto mb-6 sm:mb-8 max-w-full h-auto px-4"
                priority
                style={{ width: "auto", height: "auto", maxWidth: "min(100%, 800px)" }}
              />
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <p className="text-lg sm:text-xl lg:text-2xl text-blue-100 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                Forward-thinking marketing agency combining creative strategies with data-driven insights to deliver
                exceptional results.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-400">
              <Link
                href="/quote"
                className="inline-flex items-center bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base touch-manipulation"
                role="button"
                aria-label="Get Your Free Consultation"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About ASK Innovate</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-fade-in-left">
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                ASK Innovate is a forward-thinking marketing agency, founded by three industry experts with a passion
                for innovation and growth. We combine creative strategies with data-driven insights to deliver
                exceptional results for our clients.
              </p>
              <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed">
                We specialise in understanding your business's marketing problem(s) and needs in order to create a
                tailored marketing solution. Our mission is to help businesses of all sizes navigate the complex digital
                landscape and achieve sustainable growth through strategic marketing solutions.
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Our approach starts with a free consultation, where we spend time understanding your business and its
                needs. After the consultation, our team will spend time tailoring a unique marketing proposal
                specifically for your business.
              </p>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 sm:p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-blue-900 mb-4 sm:mb-6">Why Choose Us?</h3>
                <ul className="space-y-3 sm:space-y-4">
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">Industry experts with proven track record</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">Data-driven strategies for measurable results</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">Tailored solutions for every business</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-blue-600 rounded-full p-1 mr-3 mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <span className="text-sm sm:text-base text-gray-700">Free consultation to understand your needs</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive marketing solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Innovate Your Marketing?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve sustainable growth through strategic marketing
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/quote"
              className="inline-flex items-center bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center touch-manipulation"
              role="button"
              aria-label="Get Free Consultation"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Link>
            <Link
              href="/people"
              className="inline-flex items-center border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 text-sm sm:text-base w-full sm:w-auto justify-center touch-manipulation"
              role="button"
              aria-label="Meet Our Team"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </section>

      {/* Engagement Popup */}
      <EngagementPopup show={showEngagementPrompt} onDismiss={handlePopupDismiss} />
    </div>
  )
}