import { Mail, Linkedin, Instagram } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-2">
            <h3 className="text-xl font-bold mb-4">ASK Innovate Consulting (PTY) LTD</h3>
            <p className="text-blue-100 mb-4">You ASK, We Innovate.</p>
            <p className="text-blue-100">
              Forward-thinking marketing agency delivering exceptional results through creative strategies and
              data-driven insights.
            </p>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:info@askinnovate.co.za" 
                  className="text-blue-100 hover:text-white transition-colors break-all"
                >
                  info@askinnovate.co.za
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="sm:col-span-1 lg:col-span-1">
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/ask-innovate/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </Link>

              <Link
                href="https://www.facebook.com/share/1CPJrQmA62/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors transform hover:scale-110"
                aria-label="Facebook"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>

              <Link
                href="https://www.instagram.com/ask_innovatesa?igsh=MW5rMmVwYng3dDhrdw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-100 hover:text-white transition-colors transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
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