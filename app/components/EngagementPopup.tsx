"use client"

import React, { useEffect } from "react"
import Link from "next/link"

interface EngagementPopupProps {
  show: boolean
  onDismiss: () => void
}

export default function EngagementPopup({ show, onDismiss }: EngagementPopupProps) {
  // Log when popup state changes
  useEffect(() => {
    console.log("🎯 Popup show state changed:", show)
  }, [show])

  if (!show) return null

  const handleQuoteClick = () => {
    console.log("📝 Quote button clicked")
    onDismiss()
  }

  const handleMaybeLaterClick = () => {
    console.log("⏰ Maybe Later clicked")
    onDismiss()
  }

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-20 z-40"
        onClick={onDismiss}
      />
      
      {/* Popup */}
      <div className="fixed bottom-6 right-6 z-50 max-w-sm">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 popup-animation">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-3 pulse-animation"></div>
              <h3 className="font-bold text-gray-900">Enjoying Our Website?</h3>
            </div>
            <button
              onClick={onDismiss}
              className="text-gray-400 hover:text-gray-600 transition-colors text-lg leading-none hover:bg-gray-100 rounded-full w-6 h-6 flex items-center justify-center"
              aria-label="Close popup"
            >
              ×
            </button>
          </div>
          <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            We also design stunning websites like this one. Let us build yours today and watch your business grow!
          </p>
          <div className="flex gap-3">
            <Link
              href="/quote"
              className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm"
              onClick={handleQuoteClick}
            >
              Get Free Quote
            </Link>
            <button
              onClick={handleMaybeLaterClick}
              className="flex-1 border border-gray-300 text-gray-700 text-center py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors text-sm"
            >
              Maybe Later
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUpBounce {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          60% {
            opacity: 1;
            transform: translateY(-5px) scale(1.02);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
        
        .popup-animation {
          animation: slideUpBounce 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .pulse-animation {
          animation: pulse 2s infinite;
        }
      `}</style>
    </>
  )
}