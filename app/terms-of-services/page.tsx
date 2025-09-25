"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";

export default function TermsOfService() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "/#", active: true },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about-us" },
    { name: "Trainers", href: "/trainers" },
    { name: "Calendar", href: "/calendar" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* ✅ Header (navbar unchanged) */}
      <header className="bg-white dark:bg-[#212121] border-b border-gray-200 px-4 py-1">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/ec-logo.png"
                alt="Event Core"
                width={48}
                height={48}
                className="rounded-lg"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-[14px] font-medium transition-colors ${
                    item.active
                      ? "text-[#D19537] border-b-2 border-[#D19537] pb-1"
                      : "text-gray-700 dark:text-white hover:text-[#D19537] dark:hover:text-[#D19537]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={() =>
                  setTheme(resolvedTheme === "light" ? "dark" : "light")
                }
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-gray-300"
              >
                {theme === "light" ? (
                  <Moon className="h-4 w-4 mr-2" />
                ) : (
                  <Sun className="h-4 w-4 mr-2" />
                )}
                Dark Mode
              </Button>
              <Link href="/profile">
                <Button className="bg-transparent hover:bg-white dark:hover:bg-[#212121] flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src="/images/profile-photo.jpg"
                      alt="Profile"
                    />
                    <AvatarFallback>P</AvatarFallback>
                  </Avatar>
                  <span className="text-gray-900 dark:text-white font-medium">
                    Profile
                  </span>
                </Button>
              </Link>
            </div>

            {/* Mobile Icons */}
            <div className="flex md:hidden items-center space-x-4">
              <Button
                onClick={() =>
                  setTheme(resolvedTheme === "light" ? "dark" : "light")
                }
                variant="ghost"
                size="icon"
                className="text-gray-600 dark:text-gray-300"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-gray-300"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-gray-700 dark:text-gray-300 hover:text-[#D19537] ${
                    item.active ? "font-semibold text-[#D19537]" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Profile in mobile */}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Link href="/profile">
                  <Button className="bg-transparent hover:bg-gray-50 dark:hover:bg-[#212121] flex items-center space-x-2 w-full justify-start">
                    <Avatar className="h-8 w-8">
                      <AvatarImage
                        src="/images/profile-photo.jpg"
                        alt="Profile"
                      />
                      <AvatarFallback>P</AvatarFallback>
                    </Avatar>
                    <span className="text-gray-900 dark:text-white font-medium">
                      Profile
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* ✅ Main Content */}
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="inline-flex items-center space-x-2 mb-8 rounded-full outline px-3 py-2">
          <div className="w-2 h-2 rounded-full bg-[#D19537]"></div>
          <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Terms of Service
          </span>
        </div>

        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
            Terms of <span className="text-[#D19537]">Service</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Last Updated: August 30, 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-8">
            Welcome to Event Core. By accessing or using our website, mobile
            application, or services, you agree to comply with and be bound by
            the following Terms of Service. Please read these terms carefully
            before using our platform.
          </p>

          <div className="space-y-8">
            {/* 1 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                By creating an account, purchasing tickets, or using our
                platform, you confirm that you are at least 18 years old (or
                have parental/guardian consent) and agree to these Terms of
                Service and our Privacy Policy.
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                2. Services Provided
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                Event Core provides an online platform for browsing, booking,
                purchasing, and managing tickets for various events, including
                concerts, training sessions, motivational talks, trips, and
                other gatherings.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                3. Ticket Purchase & Pricing
              </h2>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  All ticket prices are displayed in the currency stated on the
                  event page.
                </li>
                <li>
                  Prices may include taxes, service fees, or additional charges.
                </li>
                <li>Tickets are only valid once payment is confirmed.</li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                4. Ticket Transfers
              </h2>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Tickets may be transferred to another person using the
                  Transfer Ticket feature in your Event Core account.
                </li>
                <li>
                  Once transferred, the ticket ownership changes and the
                  original holder no longer has access to it.
                </li>
                <li>
                  Event Core is not responsible for tickets transferred outside
                  of our official system.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                5. Cancellations & Refunds
              </h2>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  All sales are final unless otherwise stated by the event
                  organizer.
                </li>
                <li>
                  In the event of cancellation, refunds will be processed
                  according to the organizer's refund policy.
                </li>
                <li>No refunds will be provided for missed events.</li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                6. Event Changes
              </h2>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  Event details, including date, time, and location, may change
                  due to unforeseen circumstances.
                </li>
                <li>
                  We will notify ticket holders of any changes via email or
                  in-app notifications.
                </li>
              </ul>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                7. Code of Conduct
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                When attending events:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Follow the event's rules and guidelines.</li>
                <li>Respect other attendees and staff.</li>
                <li>
                  No disruptive, harmful, or illegal activities are allowed.
                </li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                8. Intellectual Property
              </h2>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>
                  All content on Event Core, including text, images, logos, and
                  videos, is owned by or licensed to us.
                </li>
                <li>
                  You may not copy, modify, or distribute any content without
                  our permission.
                </li>
              </ul>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                9. Limitation of Liability
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-3">
                Event Core is not responsible for:
              </p>
              <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>The actions or omissions of event organizers.</li>
                <li>Loss or damage arising from attending an event.</li>
                <li>Issues caused by third-party payment processors.</li>
              </ul>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                10. Termination
              </h2>
              <p className="text-gray-700 dark:text-gray-300">
                We reserve the right to suspend or terminate your account if you
                violate these terms or engage in fraudulent activity.
              </p>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
                12. Contact Us
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                For any questions about these Terms of Service, please contact
                us at:
              </p>
              <div className="space-y-2 text-gray-700 dark:text-gray-300">
                <p>📧 Email: support@eventcore.com</p>
                <p>📍 Address: 123 Event Street, Cityville, Country</p>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ✅ Footer */}
      <footer className="bg-white dark:bg-[#212121] border-t border-gray-100 dark:border-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                Event Core
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus
              </p>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6">
                Quick Link
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/#"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/about-us"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/events"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    href="/trainers"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Trainers
                  </a>
                </li>
                <li>
                  <a
                    href="/calendar"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Calendar
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6">
                Help
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/contact-us"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/terms-of-services"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-black dark:text-white mb-6">
                Follow Us
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
                  >
                    Youtube
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Copyright */}
      <div className="bg-[#D19537] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-white">©2025 Visgo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
