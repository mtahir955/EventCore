"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#212121]">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Image src="/images/EC_logo-2.png" alt="Event Core" width={180} height={180} className="rounded-lg" />
              {/* <span className="font-bold text-2xl text-gray-900 dark:text-white">Event Core</span> */}
            </div>
            
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Quick Link</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/trainers" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Trainers
                </Link>
              </li>
              <li>
                <Link href="/calendar" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Help</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact-us" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="terms-of-services" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="privacy-policy" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">Follow Us</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="https://www.facebook.com" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Facebook
                </Link>
              </li>
              <li>
                <Link href="https://www.instagram.com" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Instagram
                </Link>
              </li>
              <li>
                <Link href="https://www.x.com" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="https://www.youtube.com" className="text-gray-600 dark:text-gray-300 hover:text-[#D19537] transition-colors">
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#D19537] py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white text-sm">©2026 Event Core. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
