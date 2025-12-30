"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, Moon, Sun, X, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export default function ContactPage() {
  const pathname = usePathname(); // ⬅️ Detect current route
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupType, setPopupType] = useState<"success" | "error">("success");
  const [popupMsg, setPopupMsg] = useState("");

  const [form, setForm] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (data.success) {
        setPopupType("success");
        setPopupMsg(
          "Thank you for contacting us. We've received your message and will respond as soon as possible."
        );
        setForm({ name: "", company: "", phone: "", email: "", message: "" });
      } else {
        setPopupType("error");
        setPopupMsg("Oops! Something went wrong. Please try again later.");
      }
    } catch (err) {
      console.error(err);
      setPopupType("error");
      setPopupMsg("Server error. Please try again.");
    } finally {
      setLoading(false);
      setIsPopupOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
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
      <div className="inline-flex outline items-center mt-8 sm:ml-16 ml-5 py-2 px-4 space-x-2 rounded-full">
        <div className="w-2 h-2 rounded-full bg-[#D19537]"></div>
        <span className="text-gray-600 dark:text-gray-300">Contact Us</span>
      </div>

      {/* Main Content */}
      <main className="px-4 sm:px-6 lg:px-16 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-8">
              <span className="text-[#D19537] italic">Get in touch</span> with
              us. We're here to assist you.
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Enter Your Name"
                  className="h-12 border-gray-200 rounded-lg"
                />
                <Input
                  value={form.company}
                  onChange={(e) =>
                    setForm({ ...form, company: e.target.value })
                  }
                  placeholder="Enter Your Company Name"
                  className="h-12 border-gray-200 rounded-lg"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Input
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="Enter Your Number"
                  className="h-12 border-gray-200 rounded-lg"
                />
                <Input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Enter Your Email"
                  className="h-12 border-gray-200 rounded-lg"
                />
              </div>

              <Textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Start Typing Your Message"
                className="min-h-[120px] border-gray-200 rounded-lg resize-none"
              />

              <Button
                type="submit"
                disabled={loading}
                className="bg-[#D19537] hover:bg-[#B8832F] text-white px-8 py-6 rounded-full sm:w-full mr-32 md:w-auto"
              >
                {loading ? "Sending..." : "Leave us a Message"}
              </Button>
            </form>
          </div>

          {/* Popup */}
          {isPopupOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
              <div className="bg-white dark:bg-[#212121] rounded-2xl shadow-xl relative w-full max-w-md">
                <button
                  onClick={() => setIsPopupOpen(false)}
                  className="absolute top-4 right-4 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
                >
                  <X size={24} />
                </button>
                <div className="flex flex-col items-center justify-center h-full px-8 py-10">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 ${
                      popupType === "success" ? "bg-[#D19537]" : "bg-red-500"
                    }`}
                  >
                    <Mail size={32} color="white" />
                  </div>
                  <h2
                    className={`text-2xl font-bold mb-4 text-center ${
                      popupType === "success"
                        ? "text-gray-900 dark:text-white"
                        : "text-red-600 dark:text-red-400"
                    }`}
                  >
                    {popupType === "success" ? "Message Sent" : "Error"}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-8">
                    {popupMsg}
                  </p>
                  <button
                    onClick={() => setIsPopupOpen(false)}
                    className="w-full py-3 px-6 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
                    style={{
                      backgroundColor:
                        popupType === "success" ? "#D19537" : "#DC2626",
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Location Section */}
          {/* <div>
            <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
              Our Location
            </h3>
            <div className="rounded-lg overflow-hidden mb-6 w-auto h-auto">
              <Image
                src="/images/map-location.png"
                alt="Map showing our location"
                width={600}
                height={300}
                className="w-full h-[250px] sm:h-[300px] object-cover"
              />
            </div>
            <h4 className="text-xl font-bold text-black dark:text-white mb-2">
              Dream world wide in jakarta
            </h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Dummy location generation model by RSU ... Our approach generates
              more realistic dummy locations
            </p>
          </div> */}
          {/* Phone + Email */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-1 gap-8">
            <div className="flex items-center space-x-4 bg-white dark:bg-[#212121] p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-[#D19537] rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white text-lg">
                  Phone
                </h4>
                <p className="text-gray-600 dark:text-gray-300 underline">
                  +1 (555) 000-0000
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-white dark:bg-[#212121] p-6 rounded-lg border border-gray-100 dark:border-gray-700">
              <div className="w-12 h-12 bg-[#D19537] rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-semibold text-black dark:text-white text-lg">
                  Email
                </h4>
                <p className="text-gray-600 dark:text-gray-300 underline">
                  email@example.com
                </p>
              </div>
            </div>
          </div>
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
          <p className="text-white">©2025 Event Core. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
