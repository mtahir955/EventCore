"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Users,
  Heart,
  X,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function EventCalendarPage() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentMonth, setCurrentMonth] = useState("June 2025");
  const [viewMode, setViewMode] = useState<"In Person" | "Virtual">(
    "In Person"
  );
  const [activeTab, setActiveTab] = useState<
    "Upcoming Event" | "Previous Event"
  >("Upcoming Event");

  // ✅ Hydration-safe dark mode
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about-us" },
    { name: "Trainers", href: "/trainers" },
    { name: "Calendar", href: "/calendar" },
  ];
  const calendarDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  // ✅ Calendar Data for Upcoming Events
  const calendarDataUpcoming = {
    "In Person": [
      [
        { date: "1", event: null },
        { date: "2", event: null },
        { date: "3", event: "Tech & Innovation Expo" },
        { date: "4", event: null },
        { date: "5", event: "Starry Nights Music Fest" },
        { date: "6", event: null },
        { date: "7", event: null },
      ],
      [
        { date: "8", event: null },
        { date: "9", event: null },
        { date: "10", event: null },
        { date: "11", event: null },
        { date: "12", event: "Fitness & Wellness Bootcamp" },
        { date: "13", event: null },
        { date: "14", event: null },
      ],
      [
        { date: "15", event: null },
        { date: "16", event: null },
        { date: "17", event: "Fitness & Wellness Bootcamp" },
        { date: "18", event: null },
        { date: "19", event: null },
        { date: "20", event: null },
        { date: "21", event: null },
      ],
      [
        { date: "22", event: null },
        { date: "23", event: null },
        { date: "24", event: "Fitness & Wellness Bootcamp" },
        { date: "25", event: null },
        { date: "26", event: null },
        { date: "27", event: null },
        { date: "28", event: null },
      ],
      [
        { date: "29", event: "Fitness & Wellness Bootcamp" },
        { date: "30", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
      ],
    ],
    Virtual: [
      [
        { date: "1", event: null },
        { date: "2", event: "Leadership Webinar" },
        { date: "3", event: null },
        { date: "4", event: null },
        { date: "5", event: null },
        { date: "6", event: "E-Commerce Growth Summit" },
        { date: "7", event: null },
      ],
      [
        { date: "8", event: "Digital Marketing Masterclass" },
        { date: "9", event: null },
        { date: "10", event: null },
        { date: "11", event: "Digital Marketing Masterclass" },
        { date: "12", event: null },
        { date: "13", event: null },
        { date: "14", event: null },
      ],
      [
        { date: "15", event: "Digital Marketing Masterclass" },
        { date: "16", event: null },
        { date: "17", event: null },
        { date: "18", event: null },
        { date: "19", event: null },
        { date: "20", event: "Digital Marketing Masterclass" },
        { date: "21", event: null },
      ],
      [
        { date: "22", event: null },
        { date: "23", event: null },
        { date: "24", event: null },
        { date: "25", event: "Digital Marketing Masterclass" },
        { date: "26", event: null },
        { date: "27", event: null },
        { date: "28", event: null },
      ],
      [
        { date: "29", event: "Digital Marketing Masterclass" },
        { date: "30", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
      ],
    ],
  };

  // ✅ Calendar Data for Previous Events
  const calendarDataPrevious = {
    "In Person": [
      [
        { date: "1", event: null },
        { date: "2", event: null },
        { date: "3", event: "Spring Wellness Retreat" },
        { date: "4", event: null },
        { date: "5", event: "Startup Pitch Night" },
        { date: "6", event: null },
        { date: "7", event: null },
      ],
      [
        { date: "8", event: "Art & Culture Fair" },
        { date: "9", event: null },
        { date: "10", event: "Art & Culture Fair" },
        { date: "11", event: null },
        { date: "12", event: null },
        { date: "13", event: null },
        { date: "14", event: null },
      ],
      [
        { date: "15", event: null },
        { date: "16", event: null },
        { date: "17", event: null },
        { date: "18", event: null },
        { date: "19", event: null },
        { date: "20", event: "Art & Culture Fair" },
        { date: "21", event: null },
      ],
      [
        { date: "22", event: null },
        { date: "23", event: null },
        { date: "24", event: null },
        { date: "25", event: "Art & Culture Fair" },
        { date: "26", event: null },
        { date: "27", event: null },
        { date: "28", event: null },
      ],
      [
        { date: "29", event: "Art & Culture Fair" },
        { date: "30", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
      ],
    ],
    Virtual: [
      [
        { date: "1", event: "Mindset Mastery Workshop" },
        { date: "2", event: null },
        { date: "3", event: "AI for Beginners" },
        { date: "4", event: null },
        { date: "5", event: null },
        { date: "6", event: null },
        { date: "7", event: null },
      ],
      [
        { date: "8", event: null },
        { date: "9", event: null },
        { date: "10", event: null },
        { date: "11", event: "Remote Work Best Practices" },
        { date: "12", event: null },
        { date: "13", event: null },
        { date: "14", event: null },
      ],
      [
        { date: "15", event: null },
        { date: "16", event: null },
        { date: "17", event: null },
        { date: "18", event: null },
        { date: "19", event: null },
        { date: "20", event: null },
        { date: "21", event: null },
      ],
      [
        { date: "22", event: null },
        { date: "23", event: null },
        { date: "24", event: null },
        { date: "25", event: null },
        { date: "26", event: "Remote Work Best Practices" },
        { date: "27", event: null },
        { date: "28", event: null },
      ],
      [
        { date: "29", event: null },
        { date: "30", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
        { date: "", event: null },
      ],
    ],
  };

  // ✅ Pick the right calendar data
  const calendarData =
    activeTab === "Upcoming Event"
      ? calendarDataUpcoming[viewMode]
      : calendarDataPrevious[viewMode];

  // ✅ Upcoming Events Dataset
  const upcomingEvents = {
    "In Person": [
      {
        id: 1,
        title: "Starry Nights Music Fest",
        host: "Eric Gryzbowski",
        description:
          "A magical evening under the stars with live bands, food stalls, and an eclectic crowd.",
        location: "California",
        date: "13 June 2025",
        audience: "150 Audience",
        time: "08:00 PM - 09:00 PM",
        price: "$99.99",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-euYFHvA0eiDFcPn5MvsxUJNeao6exk.jpeg",
      },
      {
        id: 5,
        title: "Tech & Innovation Expo",
        host: "Michael Lee",
        description:
          "Showcasing the latest innovations in AI, robotics, and startups.",
        location: "San Francisco",
        date: "18 June 2025",
        audience: "2,000 Audience",
        time: "10:00 AM - 06:00 PM",
        price: "$149.00",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-euYFHvA0eiDFcPn5MvsxUJNeao6exk.jpeg",
      },
      {
        id: 6,
        title: "Fitness & Wellness Bootcamp",
        host: "Anna Wilson",
        description:
          "A full-day in-person bootcamp designed to boost energy, fitness, and health.",
        location: "Chicago",
        date: "25 June 2025",
        audience: "300 Audience",
        time: "07:00 AM - 04:00 PM",
        price: "$59.00",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-euYFHvA0eiDFcPn5MvsxUJNeao6exk.jpeg",
      },
    ],
    Virtual: [
      {
        id: 2,
        title: "Leadership Webinar",
        host: "Sarah Johnson",
        description:
          "Join our exclusive online session on modern leadership skills.",
        location: "Online - Zoom",
        date: "20 June 2025",
        audience: "500 Audience",
        time: "06:00 PM - 07:30 PM",
        price: "Free",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7ff2ccd6179f4d0604a066b8fd23a5f4933e4077-kzHAP0yIAnHd4zKsQTx2169zhhLK4P.png",
      },
      {
        id: 7,
        title: "E-Commerce Growth Summit",
        host: "David Kim",
        description:
          "Learn advanced strategies to scale your e-commerce business worldwide.",
        location: "Online - Webinar",
        date: "22 June 2025",
        audience: "1,200 Audience",
        time: "05:00 PM - 08:00 PM",
        price: "$29.99",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-euYFHvA0eiDFcPn5MvsxUJNeao6exk.jpeg",
      },
      {
        id: 8,
        title: "Digital Marketing Masterclass",
        host: "Laura Green",
        description:
          "An intensive workshop covering SEO, social media, and paid ads.",
        location: "Online - Live",
        date: "27 June 2025",
        audience: "750 Audience",
        time: "03:00 PM - 07:00 PM",
        price: "$39.99",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-euYFHvA0eiDFcPn5MvsxUJNeao6exk.jpeg",
      },
    ],
  };

  // ✅ Previous Events Dataset
  const previousEvents = {
    "In Person": [
      {
        id: 3,
        title: "Spring Wellness Retreat",
        host: "John Smith",
        description: "An immersive retreat focused on health and mindfulness.",
        location: "New York",
        date: "12 March 2025",
        audience: "120 Audience",
        time: "09:00 AM - 05:00 PM",
        price: "$49.99",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b112e96ec04d346fcc66b1d1159b2a1e15f9c927-6NVfEMTykDajeRTeLDIPsuxf92SgG1.png",
      },
      {
        id: 9,
        title: "Startup Pitch Night",
        host: "Venture Capital Hub",
        description:
          "Early-stage startups pitched their ideas to investors and mentors.",
        location: "Austin",
        date: "10 February 2025",
        audience: "350 Audience",
        time: "06:00 PM - 09:00 PM",
        price: "Free",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-euYFHvA0eiDFcPn5MvsxUJNeao6exk.jpeg",
      },
      {
        id: 10,
        title: "Art & Culture Fair",
        host: "City Arts Council",
        description:
          "Celebrating diverse art, music, and cultural performances.",
        location: "Boston",
        date: "20 January 2025",
        audience: "1,000 Audience",
        time: "11:00 AM - 07:00 PM",
        price: "$10.00",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-euYFHvA0eiDFcPn5MvsxUJNeao6exk.jpeg",
      },
    ],
    Virtual: [
      {
        id: 4,
        title: "Mindset Mastery Online Workshop",
        host: "Emma Davis",
        description:
          "A recorded workshop teaching how to master your mindset for success.",
        location: "Online - Recorded",
        date: "10 April 2025",
        audience: "800 Audience",
        time: "Anytime (Recorded)",
        price: "$19.99",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/b58c2eee2dce26882ed2a1a5fce4c8580b6e521f.png-1tFyDRO2XhLNO0bDbKI7k5VtDMFlFM.jpeg",
      },
      {
        id: 11,
        title: "AI for Beginners",
        host: "Tech Academy",
        description:
          "An online course introducing artificial intelligence basics to non-techies.",
        location: "Online - Udemy",
        date: "15 March 2025",
        audience: "2,500 Audience",
        time: "Self-paced",
        price: "$14.99",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-euYFHvA0eiDFcPn5MvsxUJNeao6exk.jpeg",
      },
      {
        id: 12,
        title: "Remote Work Best Practices",
        host: "Global HR Forum",
        description:
          "Panel discussion on effective collaboration in distributed teams.",
        location: "Online - Live",
        date: "28 February 2025",
        audience: "1,800 Audience",
        time: "04:00 PM - 06:00 PM",
        price: "Free",
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/6045dd738fe45e727c1239fb3a7b66f91989e5b5.png-euYFHvA0eiDFcPn5MvsxUJNeao6exk.jpeg",
      },
    ],
  };
  // Choose dataset based on tab + viewMode
  const events =
    activeTab === "Upcoming Event"
      ? upcomingEvents[viewMode]
      : previousEvents[viewMode];

  return (
    <div className="min-h-screen bg-white dark:bg-black max-w-[1440px] mx-auto">
      {/* Header */}
      <header className="bg-white dark:bg-[#212121] border-b border-gray-200 dark:border-gray-700 px-4 py-1">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left: Logo */}
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
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-[14px] font-medium transition-colors ${
                      isActive
                        ? "text-[#D19537] border-b-2 border-[#D19537] pb-1"
                        : "text-gray-700 dark:text-white hover:text-[#D19537] dark:hover:text-[#D19537]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Side Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                onClick={() =>
                  setTheme(resolvedTheme === "light" ? "dark" : "light")
                }
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

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center space-x-4">
              <Button
                onClick={() =>
                  setTheme(resolvedTheme === "light" ? "dark" : "light")
                }
                variant="ghost"
                size="sm"
                className="text-gray-600 dark:text-gray-300 flex items-center gap-2"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="h-5 w-5" />
                    Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="h-5 w-5" />
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
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block text-[14px] transition-colors ${
                      isActive
                        ? "font-semibold text-[#D19537]"
                        : "text-gray-700 dark:text-gray-300 hover:text-[#D19537] dark:hover:text-[#D19537]"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}

              {/* Profile inside mobile menu */}
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

      {/* Breadcrumb */}
      <div className="px-4 sm:px-8 md:px-16 py-4">
        <div className="inline-flex items-center mb-6 rounded-full outline px-4 py-2">
          <div className="w-2 h-2 bg-[#D19537] rounded-full mr-2"></div>
          <span className="text-gray-600 dark:text-gray-300">Calendar</span>
        </div>
      </div>

      {/* Main */}
      <main className="px-4 sm:px-8 md:px-16 pb-16">
        {/* Title */}
        <div className="mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-black dark:text-white">
            Events <span className="text-[#D19537] italic">Calendar</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg max-w-4xl">
            Explore our upcoming motivational training events and workshops
            designed to inspire personal growth and leadership development.
          </p>
        </div>

        {/* Calendar */}
        <div className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
            <div className="flex items-center space-x-4">
              <button onClick={() => setCurrentMonth("May 2025")}>
                <ChevronLeft className="w-6 h-6 text-gray-400" />
              </button>
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold dark:text-white">
                {currentMonth}
              </h2>
              <button onClick={() => setCurrentMonth("July 2025")}>
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </button>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <button
                onClick={() => setViewMode("In Person")}
                className={`px-3 py-2 rounded-lg text-sm sm:text-base ${
                  viewMode === "In Person"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 dark:bg-[#212121] text-gray-600 dark:text-gray-300"
                }`}
              >
                In Person
              </button>
              <button
                onClick={() => setViewMode("Virtual")}
                className={`px-3 py-2 rounded-lg text-sm sm:text-base ${
                  viewMode === "Virtual"
                    ? "bg-gray-900 text-white"
                    : "bg-gray-100 dark:bg-[#212121] text-gray-600 dark:text-gray-300"
                }`}
              >
                Virtual
              </button>
            </div>
          </div>

          {/* Calendar Grid */}
          <div className="bg-white dark:bg-[#212121] border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 bg-gray-50 dark:bg-black text-xs sm:text-sm">
              {calendarDays.map((day) => (
                <div
                  key={day}
                  className="p-2 sm:p-4 text-center font-medium text-gray-600 dark:text-gray-300 border-r border-gray-200 dark:border-gray-700 last:border-r-0"
                >
                  {day}
                </div>
              ))}
            </div>
            {calendarData.map((week, weekIndex) => (
              <div
                key={weekIndex}
                className="grid grid-cols-7 border-t border-gray-200 dark:border-gray-700"
              >
                {week.map((day, dayIndex) => (
                  <div
                    key={dayIndex}
                    className="h-16 sm:h-20 md:h-24 p-1 sm:p-2 border-r border-gray-200 dark:border-gray-700 last:border-r-0 relative"
                  >
                    {day.date && (
                      <>
                        <div className="text-xs sm:text-sm text-gray-900 dark:text-white mb-1">
                          {day.date}
                        </div>
                        {day.event && (
                          <div className="bg-gray-800 text-white text-[10px] sm:text-xs px-1 sm:px-2 py-0.5 sm:py-1 rounded text-center">
                            {day.event}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-6 sm:space-x-8 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => setActiveTab("Upcoming Event")}
              className={`pb-3 sm:pb-4 text-base sm:text-lg font-medium ${
                activeTab === "Upcoming Event"
                  ? "text-[#D19537] border-b-2 border-[#D19537]"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Upcoming Event
            </button>
            <button
              onClick={() => setActiveTab("Previous Event")}
              className={`pb-3 sm:pb-4 text-base sm:text-lg font-medium ${
                activeTab === "Previous Event"
                  ? "text-[#D19537] border-b-2 border-[#D19537]"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Previous Event
            </button>
          </div>
        </div>

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {events.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden relative bg-white dark:bg-[#212121] border border-gray-200 dark:border-gray-700"
            >
              <div className="relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-48 sm:h-64 object-cover"
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white dark:bg-black px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-black dark:text-white">
                  {event.price}
                </div>
                <button className="absolute top-3 left-3 sm:top-4 sm:left-4 w-7 h-7 sm:w-8 sm:h-8 bg-white dark:bg-black rounded-full flex items-center justify-center">
                  <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-black dark:text-white" />
                </button>
              </div>
              <div className="p-4 sm:p-6">
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mb-2">
                  Host By: {event.host}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-black dark:text-white">
                  {event.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-3 sm:mb-4">
                  {event.description}
                </p>
                <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{event.location}</span>
                  </div>
                  <div>{event.date}</div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{event.audience}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span>{event.time}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center space-x-2 mb-16 text-sm sm:text-base">
          <button className="w-8 h-8 bg-[#D19537] text-white rounded flex items-center justify-center">
            1
          </button>
          <button className="w-8 h-8 bg-gray-100 dark:bg-[#212121] text-gray-600 dark:text-gray-300 rounded flex items-center justify-center">
            2
          </button>
          <button className="w-8 h-8 bg-gray-100 dark:bg-[#212121] text-gray-600 dark:text-gray-300 rounded flex items-center justify-center">
            3
          </button>
          <span className="flex items-center px-2">...</span>
          <button className="w-8 h-8 bg-gray-100 dark:bg-[#212121] text-gray-600 dark:text-gray-300 rounded flex items-center justify-center">
            67
          </button>
          <button className="w-8 h-8 bg-gray-100 dark:bg-[#212121] text-gray-600 dark:text-gray-300 rounded flex items-center justify-center">
            68
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-[#212121] border-t border-gray-100 dark:border-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
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
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white">©2025 Visgo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
