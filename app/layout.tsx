import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ASK Innovate - You ASK, We Innovate",
  description:
    "Forward-thinking marketing agency specializing in creative strategies and data-driven insights for sustainable business growth.",
  generator: 'v0.dev',
  icons: {
    icon: [
      { url: '/ask-logo-blue.png', sizes: 'any', type: 'image/png' },
      { url: '/ask-logo-blue.png', sizes: '32x32', type: 'image/png' },
      { url: '/ask-logo-blue.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: '/ask-logo-blue.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}