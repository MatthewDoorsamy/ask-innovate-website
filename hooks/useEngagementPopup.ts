"use client"

import { useState, useEffect, useRef } from "react"

export function useEngagementPopup() {
  const [showEngagementPrompt, setShowEngagementPrompt] = useState(false)
  const [userEngaged, setUserEngaged] = useState(false)
  const [timeOnPage, setTimeOnPage] = useState(0)
  const [popupDismissed, setPopupDismissed] = useState(false)
  const [popupTriggered, setPopupTriggered] = useState(false)
  
  // Use refs to avoid stale closures
  const startTimeRef = useRef<number>(Date.now())
  const hasScrolledRef = useRef<boolean>(false)
  const timersRef = useRef<{
    timeSpentTimer?: NodeJS.Timeout
    engagementTimer?: NodeJS.Timeout
  }>({})

  // Initialize popup state from session storage
  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem("engagementPopupDismissed")
      const triggered = sessionStorage.getItem("engagementPopupTriggered")

      console.log("📱 Popup initialization:", { dismissed, triggered })

      if (dismissed === "true") {
        setPopupDismissed(true)
        setShowEngagementPrompt(false)
      } else if (triggered === "true") {
        setPopupTriggered(true)
        setShowEngagementPrompt(true)
      }
    } catch (error) {
      console.error("SessionStorage error:", error)
    }
  }, [])

  // Main engagement tracking
  useEffect(() => {
    // Reset start time for this page load
    startTimeRef.current = Date.now()
    
    console.log("🚀 Setting up engagement tracking", {
      popupDismissed,
      popupTriggered
    })

    // Don't set up tracking if popup already dismissed
    if (popupDismissed) {
      console.log("❌ Skipping tracking - popup dismissed")
      return
    }

    // If popup was already triggered, show it immediately
    if (popupTriggered) {
      console.log("✅ Showing already triggered popup")
      setShowEngagementPrompt(true)
      return
    }

    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop
      
      if (scrollY > 300 && !hasScrolledRef.current) {
        hasScrolledRef.current = true
        setUserEngaged(true)
        console.log("📜 User scrolled! Starting engagement timer...")

        // Start the engagement timer
        timersRef.current.engagementTimer = setTimeout(() => {
          console.log("⏰ 10 seconds passed since scroll - triggering popup!")
          
          if (!popupDismissed && !popupTriggered) {
            setShowEngagementPrompt(true)
            setPopupTriggered(true)
            try {
              sessionStorage.setItem("engagementPopupTriggered", "true")
            } catch (error) {
              console.error("SessionStorage error:", error)
            }
          }
        }, 10000) // 10 seconds after scroll
      }
    }

    const updateTimeOnPage = () => {
      const currentTime = Math.floor((Date.now() - startTimeRef.current) / 1000)
      setTimeOnPage(currentTime)
    }

    // Set up event listeners and timers
    timersRef.current.timeSpentTimer = setInterval(updateTimeOnPage, 1000)
    window.addEventListener("scroll", handleScroll, { passive: true })

    // Cleanup function
    return () => {
      console.log("🧹 Cleaning up engagement tracking")
      window.removeEventListener("scroll", handleScroll)
      
      if (timersRef.current.engagementTimer) {
        clearTimeout(timersRef.current.engagementTimer)
      }
      if (timersRef.current.timeSpentTimer) {
        clearInterval(timersRef.current.timeSpentTimer)
      }
    }
  }, [popupDismissed, popupTriggered]) // Keep dependencies minimal

  const handlePopupDismiss = () => {
    console.log("🚫 Dismissing popup")
    
    setShowEngagementPrompt(false)
    setPopupDismissed(true)
    setPopupTriggered(false)
    
    try {
      sessionStorage.setItem("engagementPopupDismissed", "true")
      sessionStorage.removeItem("engagementPopupTriggered")
    } catch (error) {
      console.error("SessionStorage error:", error)
    }

    // Clear any running timers
    if (timersRef.current.engagementTimer) {
      clearTimeout(timersRef.current.engagementTimer)
    }
  }

  return {
    showEngagementPrompt,
    userEngaged,
    timeOnPage,
    popupDismissed,
    popupTriggered,
    handlePopupDismiss,
  }
}