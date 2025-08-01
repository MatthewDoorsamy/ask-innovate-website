"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Send, CheckCircle, AlertCircle } from "lucide-react"
import { initEmailJS, sendEmail } from "../../lib/emailjs"

// Define the form data type
interface FormData {
  name: string
  email: string
  company: string
  phone: string
  industry: string
  services: string[]
  otherService: string
  budget: string
  timeline: string
  description: string
  currentMarketing: string
  goals: string
}

export default function QuotePage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    phone: "",
    industry: "",
    services: [] as string[],
    otherService: "",
    budget: "",
    timeline: "",
    description: "",
    currentMarketing: "",
    goals: "",
  })

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

  const services = [
    "Social Media Management",
    "Market Research",
    "IMC Drafting & Implementation",
    "Promotional Strategy Development",
    "Marketing Activations",
    "Web Development",
    "Other",
  ]

  const budgetRanges = ["Under R5,000", "R5,000 - R10,000", "R10,000 - R25,000", "R25,000 - R50,000", "Over R50,000"]

  const timelines = ["ASAP", "1-2 weeks", "1 month", "2-3 months", "3+ months", "Continuous basis"]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")

    try {
      // Prepare services list including other service if specified
      const servicesList = formData.services.filter((s) => s !== "Other")
      if (formData.services.includes("Other") && formData.otherService.trim()) {
        servicesList.push(`Other: ${formData.otherService}`)
      }

      // Prepare email template parameters
      const templateParams = {
        to_email: "info@askinnovate.co.za",
        from_name: formData.name,
        from_email: formData.email,
        company: formData.company,
        phone: formData.phone,
        industry: formData.industry,
        services: servicesList.join(", "),
        budget: formData.budget,
        timeline: formData.timeline,
        description: formData.description,
        current_marketing: formData.currentMarketing,
        goals: formData.goals || "Not specified", // Provide default if empty
        subject: `New Quote Request from ${formData.name} - ${formData.company}`,
      }

      const result = await sendEmail(templateParams)

      if (result.success) {
        setStatus("success")
        setMessage(
          "Thank you! Your quote request has been submitted successfully. We'll get back to you within 24 hours.",
        )

        // Reset form
        setFormData({
          name: "",
          email: "",
          company: "",
          phone: "",
          industry: "",
          services: [] as string[],
          otherService: "",
          budget: "",
          timeline: "",
          description: "",
          currentMarketing: "",
          goals: "",
        })
      } else {
        throw new Error("Failed to send email")
      }
    } catch (error) {
      setStatus("error")
      setMessage(
        "Sorry, there was an error submitting your request. Please try again or contact us directly at info@askinnovate.co.za",
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Collaboration Video */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16 sm:py-20 overflow-hidden">
        {/* Background Video - A woman working on a laptop gets assistance by a co-worker seated besides her */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="w-full h-full object-cover opacity-40"
            onError={(e) => console.log("Quote page video error:", e)}
          >
            {/* Video by cottonbro studio from Pexels */}
            <source
              src="https://videos.pexels.com/video-files/3205618/3205618-uhd_2560_1440_25fps.mp4"
              type="video/mp4"
            />
            <source
              src="https://videos.pexels.com/video-files/3205618/3205618-hd_1920_1080_25fps.mp4"
              type="video/mp4"
            />
            <source src="https://videos.pexels.com/video-files/3205618/3205618-sd_640_360_25fps.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 to-blue-700/70"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 animate-fade-in-up">Get Your Quote</h1>
          <div className="w-24 h-1 bg-white mx-auto mb-6 sm:mb-8"></div>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Ready to transform your marketing? Fill out the form below and we'll provide you with a customized proposal
            within 24 hours.
          </p>
        </div>
      </section>

      {/* Quote Form - Improved Mobile Responsiveness */}
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 lg:p-12">
            {status === "success" && (
              <div className="mb-6 sm:mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-green-800 text-sm sm:text-base">{message}</p>
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 sm:mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start">
                <AlertCircle className="h-5 w-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                <p className="text-red-800 text-sm sm:text-base">{message}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
              {/* Contact Information */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="industry" className="block text-sm font-medium text-gray-700 mb-2">
                      Industry *
                    </label>
                    <input
                      type="text"
                      id="industry"
                      name="industry"
                      required
                      value={formData.industry}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="e.g., Technology, Healthcare, Retail, etc."
                    />
                  </div>
                </div>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Services Needed</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  {services.map((service) => (
                    <label
                      key={service}
                      className="flex items-center p-3 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer transition-all"
                    >
                      <input
                        type="checkbox"
                        checked={formData.services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded flex-shrink-0"
                      />
                      <span className="ml-3 text-gray-700 text-sm sm:text-base">{service}</span>
                    </label>
                  ))}
                </div>

                {/* Other Service Input */}
                {formData.services.includes("Other") && (
                  <div className="mt-4">
                    <label htmlFor="otherService" className="block text-sm font-medium text-gray-700 mb-2">
                      Please specify the other service:
                    </label>
                    <input
                      type="text"
                      id="otherService"
                      name="otherService"
                      value={formData.otherService}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Describe the service you need..."
                    />
                  </div>
                )}
              </div>

              {/* Project Details */}
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Project Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-2">
                      Budget Range *
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline *
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      required
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((timeline) => (
                        <option key={timeline} value={timeline}>
                          {timeline}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
                      Project Description *
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={4}
                      value={formData.description}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Please describe your project, challenges, and what you're looking to achieve..."
                    />
                  </div>

                  <div>
                    <label htmlFor="currentMarketing" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Marketing Efforts
                    </label>
                    <textarea
                      id="currentMarketing"
                      name="currentMarketing"
                      rows={3}
                      value={formData.currentMarketing}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="Tell us about your current marketing activities, what's working, and what isn't..."
                    />
                  </div>

                  <div>
                    <label htmlFor="goals" className="block text-sm font-medium text-gray-700 mb-2">
                      Goals & Objectives
                      <span className="text-gray-500 text-sm ml-1">(Optional)</span>
                    </label>
                    <textarea
                      id="goals"
                      name="goals"
                      rows={3}
                      value={formData.goals}
                      onChange={handleInputChange}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm sm:text-base"
                      placeholder="What are your main goals? What success looks like for your business?"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base w-full sm:w-auto justify-center"
                >
                  {status === "sending" ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                      Submit Quote Request
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">Prefer to Talk Directly?</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
            We're here to help! Reach out to us directly for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="mailto:info@askinnovate.co.za"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              Email Us
            </a>
            <a
              href="https://www.linkedin.com/company/ask-innovate/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-sm sm:text-base w-full sm:w-auto justify-center"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* NO ENGAGEMENT POPUP ON QUOTE PAGE */}
    </div>
  )
}