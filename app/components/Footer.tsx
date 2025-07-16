import { Mail, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ASK Innovate Consulting (PTY) LTD</h3>
            <p className="text-blue-100 mb-4">You ASK, We Innovate.</p>
            <p className="text-blue-100">
              Forward-thinking marketing agency delivering exceptional results through creative strategies and
              data-driven insights.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:info@askinnovate.co.za" className="text-blue-100 hover:text-white transition-colors">
                  info@askinnovate.co.za
                </a>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/ask-innovate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-600 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © {new Date().getFullYear()} ASK Innovate Consulting (PTY) LTD. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
