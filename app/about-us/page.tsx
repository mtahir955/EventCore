"use client";

import Image from "next/image";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Moon, Sun, X, Menu, Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePathname } from "next/navigation";

export default function AboutPage() {
  const pathname = usePathname(); // ⬅️ Detect current route
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  // ✅ Modal + Email API states
  const [showModal, setShowModal] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setFormData({ name: "", company: "", phone: "", email: "", message: "" });
      setShowModal(false);
      setIsPopupOpen(true);
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about-us" },
    { name: "Trainers", href: "/trainers" },
    { name: "Calendar", href: "/calendar" },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header Navigation */}
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

      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/conference-group.jpg"
            alt="Conference group"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div className="max-w-4xl px-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              At the Core of every{" "}
              <span className="text-[#D19537] italic">Great Event</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Discover the essential solutions that power every successful
              event, from planning to unforgettable experiences.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50 dark:bg-black">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center mb-6 rounded-full outline px-2 py-2">
                <div className="w-3 h-3 bg-[#D19537] rounded-full mr-3"></div>
                <span className="text-gray-600 dark:text-gray-300 font-medium">
                  About Us
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
                About{" "}
                <span className="text-[#D19537] italic">
                  Event Core Solution
                </span>
              </h2>
              <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                  varius faucibus massa sollicitudin amet augue. Nibh metus a
                  semper purus mauris duis. Lorem eu neque, tristique quis duis.
                  Nibh scelerisque ac adipiscing velit non nulla in amet
                  pellentesque. Sit turpis pretium eget maecenas. Vestibulum
                  dolor mattis consectetur eget commodo vitae.
                </p>
                <p>
                  Amet pellentesque sit pulvinar lorem mi a, euismod risus
                  rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget
                  dictum quis est sed egestas tellus, a lectus. Quam ullamcorper
                  in fringilla arcu aliquet fames arcu. Lacinia eget faucibus
                  urna, nam risus nec elementum cras porta. Sed elementum, sed
                  dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit
                  sagittis in eleifend dignissim. Natoque mauris cras molestie
                  velit. Maecenas eget adipiscing quisque viverra lectus arcu,
                  tincidunt ultrices pellentesque.
                </p>
              </div>
              <Button
                onClick={() => setShowModal(true)}
                className="mt-8 bg-[#D19537] hover:bg-[#B8832F] text-white px-8 py-6 rounded-full font-medium"
              >
                Get Started
              </Button>
            </div>
            <div className="relative">
              <Image
                src="/images/team-discussion.jpg"
                alt="Team discussion"
                width={600}
                height={500}
                className="rounded-2xl object-cover w-full h-[500px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-[#212121] rounded-3xl shadow-lg p-8 w-full max-w-2xl relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex justify-start mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-800">
                <div className="w-2 h-2 rounded-full bg-[#D19537]" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Get Started
                </span>
              </div>
            </div>
            <div className="mb-8">
              <h1 className="text-4xl font-bold leading-tight">
                <span className="text-[#D19537]">Get in touch</span>{" "}
                <span className="text-black dark:text-white">with us.</span>
              </h1>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-2">
                We're here to assist you.
              </h2>
            </div>
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <Input
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Company Name
                  </label>
                  <Input
                    name="company"
                    placeholder="Enter Your Company Name"
                    value={formData.company}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <Input
                    name="phone"
                    placeholder="Enter Your Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Start Typing Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={6}
                  required
                />
              </div>
              <div className="pt-4">
                <Button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 rounded-full text-white bg-[#D19537] hover:bg-[#B8832F]"
                >
                  {loading ? "Sending..." : "Leave us a Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-[#212121] rounded-2xl shadow-xl relative w-full max-w-md">
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 text-gray-600 dark:text-gray-300"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col items-center justify-center h-full px-8 py-10">
              <div
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#D19537" }}
              >
                <Mail size={32} color="white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Message Sent
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
                Thank you for contacting us. We’ll get back to you soon.
              </p>
              <Button
                onClick={() => setIsPopupOpen(false)}
                className="w-full py-3 px-6 rounded-xl text-white font-medium"
                style={{ backgroundColor: "#D19537" }}
              >
                Done
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Testimonial Section */}
      <section className="py-20 bg-white dark:bg-[#212121]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-[#D19537] text-2xl">
                ★
              </span>
            ))}
          </div>
          <blockquote className="text-2xl md:text-2xl font-medium text-black dark:text-white mb-12 leading-relaxed">
            "Event Core Solution made our conference seamless and stress-free.
            Everything was perfectly organized, and our guests loved the
            experience!"
          </blockquote>
          <div className="flex items-center justify-center space-x-6">
            <div className="w-16 h-16 rounded-full bg-[#D19537] flex items-center justify-center">
              <span className="text-white text-xl font-bold">O</span>
            </div>
            <div className="text-left">
              <div className="font-bold text-black dark:text-white text-lg">
                Olivia Grant
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Mindset & Growth Expert
              </div>
            </div>
            <div className="ml-8">
              <div className="font-bold text-black dark:text-white text-xl">
                Webflow
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-[#212121] border-t border-gray-100 dark:border-gray-700 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12">
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

      {/* Copyright Bar */}
      <div className="bg-[#D19537] py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white">©2025 Visgo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
