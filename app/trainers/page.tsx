"use client";

import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Moon, Sun, X, Menu, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin, Instagram } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function TrainersPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const { resolvedTheme, theme, setTheme } = useTheme();

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
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setIsPopupOpen(true);
        setShowModal(false);
        setFormData({
          name: "",
          company: "",
          phone: "",
          email: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      alert("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const navItems = [
    { name: "Home", href: "/#", active: true },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about-us" },
    { name: "Trainers", href: "/trainers" },
    { name: "Calendar", href: "/calendar" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black">
      {/* Header */}
      <header className="bg-white dark:bg-[#212121] border-b border-gray-100 dark:border-gray-800 px-6">
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

            {/* Right Side Desktop */}
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
                  className={`block text-gray-700 dark:text-gray-300 hover:text-[#D19537] ${
                    item.active ? "font-semibold text-[#D19537]" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Breadcrumb */}
        <div className="inline-flex outline items-center mb-6 space-x-2 rounded-full px-3 py-2">
          <div className="w-2 h-2 bg-[#D19537] rounded-full"></div>
          <span className="text-gray-600 dark:text-gray-300 text-sm">
            Trainers
          </span>
        </div>

        {/* Hero Section */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-black dark:text-white mb-4">
            Meet Our <span className="text-[#D19537]">Trainers</span>
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl">
            Meet our trainers and get inspired by the experts who lead with
            passion and experience.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {[
            {
              name: "Ethan Brooks",
              role: "Lead Motivational Coach",
              img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f8768ef3f78745594c938bf9a6fef7cb9901b437-kG5E41FN3SiWTZDTQjRU7f7NTuG8Tt.png",
            },
            {
              name: "Sophia Hayes",
              role: "Wellness & Lifestyle Mentor",
              img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/3a8781b84e4190fb95a41700165989f9815ebb63-qF9WDwVoDMFM593D62D6oPgEzthE17.png",
            },
            {
              name: "Olivia Grant",
              role: "Corporate Leadership Coach",
              img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/25b7cfe69d9510a7736c6d7ddab9ab9a49425fc2-6TXbeVKsOJLD9uxuC4G7EICBXcP6WC.png",
            },
            {
              name: "Daniel Carter",
              role: "Fitness & Performance Trainer",
              img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/166378978fd07021f2d7014ab91a2b2b97a33d6c-WFEzEHH6HRYSQD3p02I0ZoepqcH5MR.png",
            },
            {
              name: "Maya Collins",
              role: "Mindfulness & Meditation Coach",
              img: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/7f5b8dcf83a398ed2e4d3e7bc47fe5b342230b0a-1HcEQyf7Fdqcqul1dvlOu53DLleHRS.png",
            },
          ].map((trainer, idx) => (
            <Card
              key={idx}
              className="p-0 overflow-hidden bg-white dark:bg-[#212121] border-0 shadow-lg"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="w-full sm:w-48 h-64 relative flex-shrink-0">
                  <Image
                    src={trainer.img}
                    alt={trainer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 p-6">
                  <h3 className="text-2xl font-bold text-black dark:text-white mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-[#D19537] font-medium mb-4">
                    {trainer.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                    Inspires you with proven strategies and empowering sessions.
                    Every interaction leaves you motivated and ready for action.
                  </p>
                  <div className="flex space-x-3">
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                      <Linkedin className="w-5 h-5 text-black dark:text-white" />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                      <Image
                        src="/icons/Vector.png"
                        alt="Custom Icon"
                        width={18}
                        height={20}
                      />
                    </div>
                    <div className="w-8 h-8 bg-gray-100 dark:bg-gray-800 rounded flex items-center justify-center">
                      <Instagram className="w-5 h-5 text-black dark:text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Get Started Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-4">
            Get Started Now
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Reach out to us today and take the first step toward your goals.
          </p>
          <Button
            onClick={() => setShowModal(true)}
            className="bg-[#D19537] hover:bg-[#B8832F] text-white px-8 py-6 text-lg rounded-full"
          >
            Get in Touch
          </Button>
        </div>
      </main>

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

      <div className="bg-[#D19537] py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-white">©2025 Visgo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
