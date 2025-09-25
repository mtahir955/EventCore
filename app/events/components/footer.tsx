"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#212121] border-t border-gray-100 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <span className="font-bold text-2xl text-gray-900 dark:text-white">
              Event Core
            </span>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed max-w-xs">
              Vivamus tristique odio sit amet velit semper, eu posuere turpis
              interdum. Cras egestas purus
            </p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">
              Quick Link
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/trainers"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Trainers
                </Link>
              </li>
              <li>
                <Link
                  href="/calendar"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Calendar
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">
              Help
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/contact-us"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-services"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-6 text-lg">
              Follow Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Instagram
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#D19537]"
                >
                  Youtube
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bg-[#D19537] py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white text-sm">
            ©2025 Viago. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
