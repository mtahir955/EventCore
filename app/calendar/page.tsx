"use client";

import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MapPin,
  Clock,
  Heart,
  X,
  Menu,
  Moon,
  Sun,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import { API_BASE_URL } from "@/config/apiConfig";

/* ───────────────── TYPES ───────────────── */

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  date: string; // YYYY-MM-DD
  displayDate: string;
  time: string;
  location: string;
  price: string;
  image: string;
  mode: "In Person" | "Virtual";
  status: "Upcoming" | "Previous";
}

interface CalendarDay {
  date: string; // YYYY-MM-DD
  events: {
    id: string;
    title: string;
    type: "In Person" | "Virtual";
  }[];
}

/* ───────────────── COMPONENT ───────────────── */

export default function EventCalendarPage() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());

  const [calendarDaysData, setCalendarDaysData] = useState<CalendarDay[]>([]);
  const [calendarEvents, setCalendarEvents] = useState<CalendarEvent[]>([]);
  const [calendarLoading, setCalendarLoading] = useState(true);

  const now = new Date();

  const monthLabel = currentDate.toLocaleString("default", {
    month: "long",
    year: "numeric",
  });

  const goToPreviousMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const goToNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  const [viewMode, setViewMode] = useState<"In Person" | "Virtual">(
    "In Person"
  );
  const [activeTab, setActiveTab] = useState<
    "Upcoming Event" | "Previous Event"
  >("Upcoming Event");

  /* Pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 2;

  /* Theme */
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

  /* ───────────────── FILTER EVENTS ───────────────── */

  const events = calendarEvents.filter((e) => {
    const eventDate = new Date(e.date);

    if (activeTab === "Upcoming Event") {
      return e.mode === viewMode && eventDate >= now;
    }

    if (activeTab === "Previous Event") {
      return e.mode === viewMode && eventDate < now;
    }

    return false;
  });

  const totalPages = Math.ceil(events.length / eventsPerPage);
  const startIndex = (currentPage - 1) * eventsPerPage;
  const currentEvents = events.slice(startIndex, startIndex + eventsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  /* ───────────────── CALENDAR GRID GENERATOR ───────────────── */

  const generateCalendar = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    const daysInMonth = lastDayOfMonth.getDate();
    const startDay = (firstDayOfMonth.getDay() + 6) % 7;

    const weeks: { date: number | null }[][] = [];
    let currentWeek: { date: number | null }[] = [];

    for (let i = 0; i < startDay; i++) currentWeek.push({ date: null });

    for (let day = 1; day <= daysInMonth; day++) {
      currentWeek.push({ date: day });
      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }
    }

    while (currentWeek.length < 7) currentWeek.push({ date: null });
    weeks.push(currentWeek);

    return weeks;
  };

  const calendarWeeks = generateCalendar(currentDate);

  /* ───────────────── FETCH CALENDAR API ───────────────── */

  useEffect(() => {
    const fetchCalendarEvents = async () => {
      try {
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, "0");

        const res = await fetch(
          `${API_BASE_URL}/events/calendar?month=${year}-${month}&page=1&limit=10`
        );
        const json = await res.json();

        /* Calendar boxes */
        const days: CalendarDay[] = json?.data?.calendar?.days || [];
        setCalendarDaysData(days);

        /* Event cards */
        const items = json?.data?.events?.items || [];

        const normalized: CalendarEvent[] = items.map((e: any) => ({
          id: e.id,
          title: e.title,
          description: e.description,
          date: e.displayDate, // ✅ user-friendly date
          displayDate: e.displayDate,
          time: e.time || "", // ✅ plain string
          location: e.location || "", // ✅ plain string
          price: e.price || "", // ✅ plain string
          image: e.image,
          mode: e.mode === "Virtual" ? "Virtual" : "In Person",
          status: "Upcoming",
        }));

        setCalendarEvents(normalized);
      } catch (err) {
        console.error("Failed to load calendar events", err);
        setCalendarDaysData([]);
        setCalendarEvents([]);
      } finally {
        setCalendarLoading(false);
      }
    };

    fetchCalendarEvents();
  }, [currentDate]);

  if (!mounted) return null;

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

              {/* <Link href="/profile">
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
              </Link> */}
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
              {/* <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
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
              </div> */}
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
              <button onClick={goToPreviousMonth}>
                <ChevronLeft className="w-6 h-6 text-gray-400" />
              </button>

              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold dark:text-white">
                {monthLabel}
              </h2>

              <button onClick={goToNextMonth}>
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
          <div className="bg-white dark:bg-[#212121] border rounded-lg overflow-hidden">
            <div className="grid grid-cols-7 bg-gray-50 dark:bg-black">
              {calendarDays.map((day) => (
                <div key={day} className="p-4 text-center">
                  {day}
                </div>
              ))}
            </div>

            {calendarWeeks.map((week, wi) => (
              <div key={wi} className="grid grid-cols-7 border-t">
                {week.map((day, di) => {
                  if (!day.date)
                    return <div key={di} className="h-24 border-r" />;

                  const dayKey = `${currentDate.getFullYear()}-${String(
                    currentDate.getMonth() + 1
                  ).padStart(2, "0")}-${String(day.date).padStart(2, "0")}`;

                  const dayData = calendarDaysData.find(
                    (d) => d.date === dayKey
                  );

                  return (
                    <div
                      key={di}
                      className="h-24 p-1 border-r flex flex-col overflow-hidden"
                    >
                      <div className="text-sm font-medium">{day.date}</div>
                      {(() => {
                        const eventsForDay =
                          dayData?.events.filter((e) => e.type === viewMode) ||
                          [];

                        const visibleEvents = eventsForDay.slice(0, 2);
                        const remainingCount =
                          eventsForDay.length - visibleEvents.length;

                        return (
                          <>
                            {visibleEvents.map((e) => (
                              <div
                                key={e.id}
                                className="mt-1 bg-[#D19537] text-white text-[10px] px-2 py-1 rounded truncate"
                              >
                                {e.title}
                              </div>
                            ))}

                            {remainingCount > 0 && (
                              <div className="mt-1 text-[10px] text-gray-600 dark:text-gray-300">
                                +{remainingCount} more
                              </div>
                            )}
                          </>
                        );
                      })()}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-6 sm:space-x-8 border-b border-gray-200 dark:border-gray-700">
            <button
              onClick={() => {
                setActiveTab("Upcoming Event");
                setCurrentPage(1);
              }}
              className={`pb-3 sm:pb-4 text-base sm:text-lg font-medium ${
                activeTab === "Upcoming Event"
                  ? "text-[#D19537] border-b-2 border-[#D19537]"
                  : "text-gray-600 dark:text-gray-300"
              }`}
            >
              Upcoming Event
            </button>
            <button
              onClick={() => {
                setActiveTab("Previous Event");
                setCurrentPage(1);
              }}
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

        {/* Event Cards with Pagination */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16">
          {currentEvents.map((event) => (
            <Card
              key={event.id}
              className="overflow-hidden relative bg-white dark:bg-[#212121] border border-gray-200 dark:border-gray-700 rounded-xl flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={event.title}
                  className="w-full h-36 sm:h-44 md:h-48 object-cover"
                />

                <div className="absolute top-3 right-3 bg-white dark:bg-black px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-black dark:text-white">
                  {event.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold mb-2 text-black dark:text-white">
                  {event.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 sm:line-clamp-4">
                  {event.description}
                </p>

                {/* Meta */}
                <div className="mt-auto flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-300">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{event.location}</span>
                  </div>

                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{event.time}</span>
                  </div>

                  <div className="text-xs sm:text-sm">{event.date}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* ✅ Pagination Section */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center space-x-2 mb-16">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              className="w-8 h-8 rounded text-gray-600 dark:text-gray-300"
            >
              ‹
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={page === currentPage ? "default" : "outline"}
                size="sm"
                onClick={() => handlePageChange(page)}
                className={`w-8 h-8 rounded ${
                  page === currentPage
                    ? "bg-[#D19537] text-white"
                    : "bg-gray-100 dark:bg-[#212121] text-gray-600 dark:text-gray-300"
                }`}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              className="w-8 h-8 rounded text-gray-600 dark:text-gray-300"
            >
              ›
            </Button>
          </div>
        )}
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
          <p className="text-white">©2025 Event Core. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
