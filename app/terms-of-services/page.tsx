"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Footer } from "@/components/mainfooter";

export default function TermsOfService() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  const navItems = [
    { name: "Home", href: "/#" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about-us" },
    { name: "Trainers", href: "/trainers" },
    { name: "Calendar", href: "/calendar" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* ✅ Header (navbar unchanged) */}
      <header className="bg-white dark:bg-[#212121] border-b border-gray-200 px-4 py-0">
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image
                src="/images/EC_logo-1.png"
                alt="Event Core"
                width={150}
                height={150}
                className="rounded-lg"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-12">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-[14px] font-medium transition-colors text-gray-700 dark:text-white hover:text-[#D19537] dark:hover:text-[#D19537]"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={() => {
                  setTheme(resolvedTheme === "light" ? "dark" : "light");
                }}
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="h-4 w-4" />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="h-4 w-4" />
                    Light Mode
                  </>
                )}
              </Button>
            </div>

            {/* Mobile Icons */}
            <div className="flex md:hidden items-center space-x-4">
              <Button
                onClick={() => {
                  setTheme(resolvedTheme === "light" ? "dark" : "light");
                }}
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="h-4 w-4" />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="h-4 w-4" />
                    Light Mode
                  </>
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
                  className="block text-gray-700 dark:text-gray-300 hover:text-[#D19537]"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* ✅ Main Content (matches PDF layout/style) */}
      <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <div className="inline-flex items-center space-x-2 mb-8 rounded-full outline px-3 py-2">
          <div className="w-2 h-2 rounded-full bg-[#D19537]"></div>
          <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
            Terms of Service
          </span>
        </div>
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-black dark:text-white mb-4">
            Terms of <span className="text-[#D19537]">Service</span>
          </h1>
        </div>

        {/* Last Updated */}
        <p className="mt-4 text-base sm:text-lg text-black dark:text-gray-200">
          <span className="font-bold">Last Updated:</span> January 2026
        </p>

        {/* Intro */}
        <div className="mt-8 space-y-5 text-[15px] sm:text-base leading-relaxed text-black/90 dark:text-gray-200">
          <p>
            Welcome to Eventcore Solutions ("Eventcore," "we," "us," or "our").
            These Terms of Service ("Terms") govern your access to and use of
            the Eventcore Solutions platform, including all websites,
            applications, tools, ticketing systems, membership systems, and
            related services (collectively, the "Services").
          </p>
          <p>
            By accessing or using the Services, you agree to be bound by these
            Terms. If you do not agree, you may not use the Services.
          </p>
        </div>

        {/* Divider */}
        <hr className="my-10 border-gray-300 dark:border-gray-700" />

        {/* Sections */}
        <div className="space-y-10 text-black dark:text-gray-200">
          {/* 1 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              1. Eligibility &amp; Account Registration
            </h2>
            <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-relaxed">
              <p>
                You must be at least 18 years old to create an account or use
                the Services. You agree to provide accurate, current, and
                complete information during registration and to keep your
                account information updated.
              </p>
              <p>
                You are responsible for maintaining the confidentiality of your
                login credentials and for all activities conducted under your
                account.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 2 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              2. Platform Role &amp; Responsibilities
            </h2>
            <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-relaxed">
              <p>
                Eventcore Solutions provides a{" "}
                <span className="font-bold">technology platform</span> for event
                ticketing, memberships, registrations, and access control.
              </p>

              <ul className="mt-3 list-disc pl-6 space-y-2">
                <li>
                  Eventcore is{" "}
                  <span className="font-bold">not the event organizer</span>,
                  promoter, or host unless explicitly stated.
                </li>
                <li>
                  Event organizers are solely responsible for event content,
                  execution, pricing, refunds, cancellations, and compliance
                  with applicable laws.
                </li>
                <li>
                  Eventcore acts as a{" "}
                  <span className="font-bold">
                    service provider and data processor
                  </span>{" "}
                  for organizers and a{" "}
                  <span className="font-bold">
                    platform operator and controller
                  </span>{" "}
                  for system-level data.
                </li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 3 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              3. Tickets, Memberships &amp; Access
            </h2>

            <div className="mt-5 space-y-6 text-[15px] sm:text-base leading-relaxed">
              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  A. Ticket Purchases
                </h3>
                <p className="mt-2">
                  All ticket purchases are final unless otherwise stated by the
                  event organizer. Ticket availability, pricing, seating, and
                  benefits are determined by the organizer.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold">B. Memberships</h3>
                <p className="mt-2">
                  Memberships may provide access to special pricing, exclusive
                  events, or benefits. Membership terms, duration, renewal, and
                  cancellation rules are disclosed at the time of purchase.
                </p>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  C. Digital Credentials &amp; Access Control
                </h3>
                <p className="mt-2">
                  Eventcore may issue digital tickets, QR codes, badges, or
                  other credentials. You agree not to duplicate, manipulate, or
                  misuse access credentials.
                </p>
                <p className="mt-3">
                  Unauthorized access, resale, or misuse may result in
                  revocation without refund.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 4 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              4. Transfers, Resale &amp; Refunds
            </h2>
            <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-relaxed">
              <p>
                Ticket transfers, upgrades, downgrades, or resale are permitted
                only if explicitly allowed by the event organizer.
              </p>
              <p>
                Refunds, exchanges, or credits are governed by the organizer’s
                stated policies. Eventcore does not independently issue refunds
                unless required by law.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 5 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              5. Payments &amp; Fees
            </h2>
            <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-relaxed">
              <p>
                Payments are processed through third-party, PCI-compliant
                payment processors such as Stripe.
              </p>
              <p>
                Eventcore does not store full credit card numbers. Transaction
                fees, service fees, and applicable taxes may apply and will be
                disclosed prior to purchase.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 6 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              6. Acceptable Use
            </h2>
            <div className="mt-4 text-[15px] sm:text-base leading-relaxed">
              <p className="mb-3">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Interfere with platform security or functionality</li>
                <li>
                  Attempt unauthorized access to accounts, systems, or data
                </li>
                <li>Use the Services for fraudulent or deceptive purposes</li>
                <li>Circumvent ticketing, pricing, or access controls</li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 7 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              7. Event Entry, Scanning &amp; Attendance
            </h2>
            <div className="mt-4 text-[15px] sm:text-base leading-relaxed">
              <p className="mb-3">
                By attending an event using Eventcore-issued credentials, you
                consent to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Electronic ticket scanning and attendance verification</li>
                <li>Recording of entry times and access points</li>
                <li>
                  Sharing attendance data with event organizers for operational
                  and security purposes
                </li>
              </ul>
              <p className="mt-4">
                Duplicate or invalid scans may result in denied entry.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 8 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              8. Intellectual Property
            </h2>
            <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-relaxed">
              <p>
                All platform software, designs, logos, and content provided by
                Eventcore are owned by or licensed to Eventcore Solutions and
                are protected by intellectual property laws.
              </p>
              <p>
                You may not copy, modify, distribute, or reverse engineer any
                part of the Services without prior written consent.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 9 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              9. Suspension &amp; Termination
            </h2>
            <div className="mt-4 text-[15px] sm:text-base leading-relaxed">
              <p className="mb-3">
                Eventcore reserves the right to suspend or terminate accounts
                that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate these Terms</li>
                <li>Engage in fraud, abuse, or misuse</li>
                <li>Pose security or legal risks</li>
              </ul>
              <p className="mt-4">
                Termination may result in loss of access without refund.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 10 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              10. Disclaimers
            </h2>
            <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-relaxed">
              <p>
                The Services are provided on an "AS IS" and "AS AVAILABLE"
                basis. Eventcore makes no guarantees regarding event quality,
                attendance, outcomes, or organizer performance.
              </p>
              <p>
                Eventcore is not responsible for cancellations, schedule
                changes, venue issues, travel disruptions, or acts of third
                parties.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 11 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              11. Limitation of Liability
            </h2>
            <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-relaxed">
              <p>
                To the maximum extent permitted by law, Eventcore Solutions
                shall not be liable for any indirect, incidental, consequential,
                or punitive damages arising from use of the Services.
              </p>
              <p>
                Eventcore’s total liability shall not exceed the amount paid to
                Eventcore for the specific transaction giving rise to the claim.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 12 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              12. Indemnification
            </h2>
            <div className="mt-4 text-[15px] sm:text-base leading-relaxed">
              <p className="mb-3">
                You agree to indemnify and hold harmless Eventcore Solutions
                from claims, damages, losses, or expenses arising from:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your misuse of the Services</li>
                <li>Violation of these Terms</li>
                <li>Violation of laws or third-party rights</li>
              </ul>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 13 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              13. Governing Law &amp; Dispute Resolution
            </h2>
            <div className="mt-4 space-y-4 text-[15px] sm:text-base leading-relaxed">
              <p>
                These Terms are governed by the laws of the State of{" "}
                <span className="font-semibold">USA</span>, without
                regard to conflict of law principles.
              </p>
              <p>
                Any disputes shall be resolved exclusively in the courts located
                within that jurisdiction unless otherwise required by law.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 14 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              14. Changes to These Terms
            </h2>
            <div className="mt-4 text-[15px] sm:text-base leading-relaxed">
              <p>
                We may update these Terms from time to time. Continued use of
                the Services after changes constitutes acceptance of the revised
                Terms.
              </p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* 15 */}
          <section>
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              15. Contact Information
            </h2>

            <div className="mt-4 text-[15px] sm:text-base leading-relaxed">
              <p className="font-bold">Eventcore Solutions</p>
              <p>Email: support@eventcoresolutions.com</p>
            </div>
          </section>

          <hr className="border-gray-300 dark:border-gray-700" />

          {/* Footer note (italic) */}
          {/* <p className="text-[14px] sm:text-sm italic text-black/80 dark:text-gray-300 leading-relaxed">
            These Terms of Service are provided for general informational
            purposes and do not constitute legal advice. Consult legal counsel
            to ensure compliance with applicable laws.
          </p> */}
        </div>
      </main>

      {/* ✅ Footer */}
      <Footer />
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { useTheme } from "next-themes";
// import { Moon, Sun, X, Menu } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import Image from "next/image";
// import { Footer } from "@/components/mainfooter";

// export default function TermsOfService() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const { resolvedTheme, theme, setTheme } = useTheme();

//   const navItems = [
//     { name: "Home", href: "/#", active: true },
//     { name: "Events", href: "/events" },
//     { name: "About", href: "/about-us" },
//     { name: "Trainers", href: "/trainers" },
//     { name: "Calendar", href: "/calendar" },
//   ];

//   return (
//     <div className="min-h-screen bg-white dark:bg-black">
//       {/* ✅ Header (navbar unchanged) */}
//       <header className="bg-white dark:bg-[#212121] border-b border-gray-200 px-4 py-0">
//         <div className="max-w-7xl mx-auto px-6 py-3">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <Image
//                 src="/images/EC_logo-1.png"
//                 alt="Event Core"
//                 width={150}
//                 height={150}
//                 className="rounded-lg"
//               />
//             </div>

//             {/* Desktop Nav */}
//             <nav className="hidden md:flex items-center space-x-12">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`text-[14px] font-medium transition-colors ${
//                     item.active
//                       ? "text-[#D19537] border-b-2 border-[#D19537] pb-1"
//                       : "text-gray-700 dark:text-white hover:text-[#D19537] dark:hover:text-[#D19537]"
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//             </nav>

//             {/* Right Desktop */}
//             <div className="hidden md:flex items-center space-x-4">
//               <Button
//                 onClick={() => {
//                   setTheme(resolvedTheme === "light" ? "dark" : "light");
//                 }}
//                 variant="ghost"
//                 size="sm"
//                 className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
//               >
//                 {theme === "light" ? (
//                   <>
//                     <Moon className="h-4 w-4" />
//                     Dark Mode
//                   </>
//                 ) : (
//                   <>
//                     <Sun className="h-4 w-4" />
//                     Light Mode
//                   </>
//                 )}
//               </Button>

//               {/* <Link href="/profile">
//                 <Button className="bg-transparent hover:bg-white dark:hover:bg-[#212121] flex items-center space-x-2">
//                   <Avatar className="h-8 w-8">
//                     <AvatarImage
//                       src="/images/profile-photo.jpg"
//                       alt="Profile"
//                     />
//                     <AvatarFallback>P</AvatarFallback>
//                   </Avatar>
//                   <span className="text-gray-900 dark:text-white font-medium">
//                     Profile
//                   </span>
//                 </Button>
//               </Link> */}
//             </div>

//             {/* Mobile Icons */}
//             <div className="flex md:hidden items-center space-x-4">
//               <Button
//                 onClick={() => {
//                   setTheme(resolvedTheme === "light" ? "dark" : "light");
//                 }}
//                 variant="ghost"
//                 size="sm"
//                 className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
//               >
//                 {theme === "light" ? (
//                   <>
//                     <Moon className="h-4 w-4" />
//                     Dark Mode
//                   </>
//                 ) : (
//                   <>
//                     <Sun className="h-4 w-4" />
//                     Light Mode
//                   </>
//                 )}
//               </Button>

//               <button
//                 onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//                 className="text-gray-700 dark:text-gray-300"
//               >
//                 {mobileMenuOpen ? (
//                   <X className="h-6 w-6" />
//                 ) : (
//                   <Menu className="h-6 w-6" />
//                 )}
//               </button>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {mobileMenuOpen && (
//             <div className="md:hidden mt-4 space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   href={item.href}
//                   className={`block text-gray-700 dark:text-gray-300 hover:text-[#D19537] ${
//                     item.active ? "font-semibold text-[#D19537]" : ""
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}

//               {/* Profile in mobile */}
//               {/* <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
//                 <Link href="/profile">
//                   <Button className="bg-transparent hover:bg-gray-50 dark:hover:bg-[#212121] flex items-center space-x-2 w-full justify-start">
//                     <Avatar className="h-8 w-8">
//                       <AvatarImage
//                         src="/images/profile-photo.jpg"
//                         alt="Profile"
//                       />
//                       <AvatarFallback>P</AvatarFallback>
//                     </Avatar>
//                     <span className="text-gray-900 dark:text-white font-medium">
//                       Profile
//                     </span>
//                   </Button>
//                 </Link>
//               </div> */}
//             </div>
//           )}
//         </div>
//       </header>

//       {/* ✅ Main Content */}
//       <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
// {/* Breadcrumb */}
// <div className="inline-flex items-center space-x-2 mb-8 rounded-full outline px-3 py-2">
//   <div className="w-2 h-2 rounded-full bg-[#D19537]"></div>
//   <span className="text-gray-600 dark:text-gray-300 text-sm sm:text-base">
//     Terms of Service
//   </span>
// </div>

//         {/* Page Title */}
        // <div className="mb-8">
        //   <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
        //     Terms of <span className="text-[#D19537]">Service</span>
        //   </h1>
        // </div>

//         {/* Content */}
//         <div className="prose prose-sm sm:prose lg:prose-lg max-w-none">
//           <p className="text-gray-700 dark:text-gray-300 mb-8">
//             Welcome to Event Core. By accessing or using our website, mobile
//             application, or services, you agree to comply with and be bound by
//             the following Terms of Service. Please read these terms carefully
//             before using our platform.
//           </p>

//           <div className="space-y-8">
//             {/* 1 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 1. Acceptance of Terms
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300">
//                 By creating an account, purchasing tickets, or using our
//                 platform, you confirm that you are at least 18 years old (or
//                 have parental/guardian consent) and agree to these Terms of
//                 Service and our Privacy Policy.
//               </p>
//             </section>

//             {/* 2 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 2. Services Provided
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300">
//                 Event Core provides an online platform for browsing, booking,
//                 purchasing, and managing tickets for various events, including
//                 concerts, training sessions, motivational talks, trips, and
//                 other gatherings.
//               </p>
//             </section>

//             {/* 3 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 3. Ticket Purchase & Pricing
//               </h2>
//               <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
//                 <li>
//                   All ticket prices are displayed in the currency stated on the
//                   event page.
//                 </li>
//                 <li>
//                   Prices may include taxes, service fees, or additional charges.
//                 </li>
//                 <li>Tickets are only valid once payment is confirmed.</li>
//               </ul>
//             </section>

//             {/* 4 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 4. Ticket Transfers
//               </h2>
//               <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
//                 <li>
//                   Tickets may be transferred to another person using the
//                   Transfer Ticket feature in your Event Core account.
//                 </li>
//                 <li>
//                   Once transferred, the ticket ownership changes and the
//                   original holder no longer has access to it.
//                 </li>
//                 <li>
//                   Event Core is not responsible for tickets transferred outside
//                   of our official system.
//                 </li>
//               </ul>
//             </section>

//             {/* 5 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 5. Cancellations & Refunds
//               </h2>
//               <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
//                 <li>
//                   All sales are final unless otherwise stated by the event
//                   organizer.
//                 </li>
//                 <li>
//                   In the event of cancellation, refunds will be processed
//                   according to the organizer's refund policy.
//                 </li>
//                 <li>No refunds will be provided for missed events.</li>
//               </ul>
//             </section>

//             {/* 6 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 6. Event Changes
//               </h2>
//               <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
//                 <li>
//                   Event details, including date, time, and location, may change
//                   due to unforeseen circumstances.
//                 </li>
//                 <li>
//                   We will notify ticket holders of any changes via email or
//                   in-app notifications.
//                 </li>
//               </ul>
//             </section>

//             {/* 7 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 7. Code of Conduct
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300 mb-3">
//                 When attending events:
//               </p>
//               <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
//                 <li>Follow the event's rules and guidelines.</li>
//                 <li>Respect other attendees and staff.</li>
//                 <li>
//                   No disruptive, harmful, or illegal activities are allowed.
//                 </li>
//               </ul>
//             </section>

//             {/* 8 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 8. Intellectual Property
//               </h2>
//               <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
//                 <li>
//                   All content on Event Core, including text, images, logos, and
//                   videos, is owned by or licensed to us.
//                 </li>
//                 <li>
//                   You may not copy, modify, or distribute any content without
//                   our permission.
//                 </li>
//               </ul>
//             </section>

//             {/* 9 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 9. Limitation of Liability
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300 mb-3">
//                 Event Core is not responsible for:
//               </p>
//               <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 dark:text-gray-300">
//                 <li>The actions or omissions of event organizers.</li>
//                 <li>Loss or damage arising from attending an event.</li>
//                 <li>Issues caused by third-party payment processors.</li>
//               </ul>
//             </section>

//             {/* 10 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 10. Termination
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300">
//                 We reserve the right to suspend or terminate your account if you
//                 violate these terms or engage in fraudulent activity.
//               </p>
//             </section>

//             {/* 11 */}
//             <section>
//               <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//                 11. Contact Us
//               </h2>
//               <p className="text-gray-700 dark:text-gray-300 mb-4">
//                 For any questions about these Terms of Service, please contact
//                 us at:
//               </p>
//               <div className="space-y-2 text-gray-700 dark:text-gray-300">
//                 <p>📧 Email: support@eventcore.com</p>
//                 <p>📍 Address: 123 Event Street, Cityville, Country</p>
//               </div>
//             </section>
//           </div>
//         </div>
//       </main>

//       {/* ✅ Footer */}
//       <Footer />
//     </div>
//   );
// }
