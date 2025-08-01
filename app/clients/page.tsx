"use client"

import { useEngagementPopup } from "../../hooks/useEngagementPopup"
import EngagementPopup from "../components/EngagementPopup"

export default function ClientsPage() {
  const { showEngagementPrompt, handlePopupDismiss } = useEngagementPopup()

  const clients = [
    {
      name: "Lausanne Movement",
      shortDescription:
        "The Lausanne Movement is a global network connecting evangelical leaders across regions, generations, and sectors to advance world evangelization.",
      partnership:
        "ASK Innovate has been managing ALL social media platforms for Lausanne Movement since January 2025, handling content creation, scheduling, captioning, and monthly metrics reports. The organization's social media platforms have seen extensive growth throughout 2025, breaking record impressions and metrics across the board.",
      image: "/lausanne-logo.svg",
      industry: "Global Organization",
    },
    {
      name: "GamCo",
      shortDescription:
        "GamCo is a South African internet solutions provider founded in 1996, serving over 3,500 businesses with affordable, multilingual internet tools.",
      partnership:
        "ASK Innovate partnered with GamCo to run a Meta Ads Campaign that reached ground-breaking impressions, including a promotional reel that went viral on Facebook. Following this success, ASK Innovate now handles all marketing campaigns and social media platform management.",
      image: "/gamco_logo.png",
      industry: "Internet Solutions",
    },
    {
      name: "York Timbers x University of Pretoria",
      shortDescription:
        "York Timbers is South Africa's largest solid-wood processor, founded in 1916 and listed on the JSE.",
      partnership:
        "ASK Innovate Directors were selected as part of an exclusive marketing team led by Prof. Schalk Grobbelaar. The team is responsible for all social media content leading up to the Timber Construction Conference 2025 and Green Building Convention 2025, contributing significantly to successful marketing campaigns.",
      image: "/YT_logo.jpg",
      industry: "Timber & Education",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Group Discussion Video */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 sm:py-20 overflow-hidden">
        {/* Background Video - Group of people gathered around a table having discussions */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => console.log("Clients page video error:", e)}
          >
            {/* Video by Pressmaster from Pexels */}
            <source
              src="https://videos.pexels.com/video-files/3196062/3196062-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/3196062/3196062-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            <source src="https://videos.pexels.com/video-files/3196062/3196062-sd_640_360_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">Our Clients</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Discover how we've helped businesses across various industries achieve remarkable growth through innovative
            marketing solutions
          </p>
        </div>
      </section>

      {/* Clients Grid - Improved Mobile Layout */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
            {clients.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Clean white background for logos with hover effect */}
                <div className="aspect-video bg-white flex items-center justify-center p-4 sm:p-6 group-hover:bg-gray-50 transition-colors">
                  <div className="w-full h-full flex items-center justify-center">
                    <img
                      src={client.image || "/placeholder.svg"}
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain transition-transform group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src =
                          "/placeholder.svg?height=200&width=300&text=" + encodeURIComponent(client.name)
                      }}
                    />
                  </div>
                </div>
                <div className="p-4 sm:p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 gap-2">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900">{client.name}</h3>
                    <span className="text-xs sm:text-sm text-blue-600 bg-blue-100 px-2 sm:px-3 py-1 rounded-full font-medium w-fit">
                      {client.industry}
                    </span>
                  </div>
                  {/* Company Description */}
                  <div className="mb-4">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">{client.shortDescription}</p>
                  </div>
                  {/* Partnership Details */}
                  <div className="bg-blue-50 p-3 sm:p-4 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2 text-xs sm:text-sm">Our Partnership:</h4>
                    <p className="text-blue-800 text-xs sm:text-sm leading-relaxed">{client.partnership}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stats with Clean Background - Mobile Responsive */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-white via-blue-50/30 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Impact</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 sm:mb-8"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
            <div className="text-center animate-fade-in-up bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">500,000+</div>
              <div className="text-gray-600 text-sm sm:text-base">Impressions</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-100 bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">50%</div>
              <div className="text-gray-600 text-sm sm:text-base">Average Social Media Growth</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-200 bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">50+</div>
              <div className="text-gray-600 text-sm sm:text-base">Campaigns Launched</div>
            </div>
            <div className="text-center animate-fade-in-up animation-delay-300 bg-white rounded-lg p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all">
              <div className="text-2xl sm:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">99%</div>
              <div className="text-gray-600 text-sm sm:text-base">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Join Our Success Stories?</h2>
          <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help your business achieve similar remarkable results
          </p>
          <a
            href="/quote"
            className="inline-flex items-center bg-white text-blue-900 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base w-full sm:w-auto justify-center max-w-xs mx-auto sm:max-w-none"
          >
            Start Your Success Story
          </a>
        </div>
      </section>

      {/* Engagement Popup */}
      <EngagementPopup show={showEngagementPrompt} onDismiss={handlePopupDismiss} />
    </div>
  )
}