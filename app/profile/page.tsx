"use client";

import { useState, useEffect } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Moon, Sun, ChevronRight, X, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function ProfilePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Dark mode integration
  const { resolvedTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

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
      <header className="bg-white dark:bg-[#212121] border-b border-gray-200 dark:border-gray-700 px-4 py-1">
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

            {/* Right side */}
            <div className="hidden md:flex items-center space-x-4">
              {mounted && (
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
              )}
              <Button className="bg-transparent hover:bg-white dark:hover:bg-black flex items-center space-x-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/images/profile-photo.jpg" alt="Profile" />
                  <AvatarFallback>P</AvatarFallback>
                </Avatar>
                <span className="text-gray-900 dark:text-white font-medium">
                  Profile
                </span>
              </Button>
            </div>

            {/* Mobile Hamburger */}
            <div className="flex md:hidden items-center space-x-4">
              {mounted && (
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
              )}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 dark:text-white"
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
                  className={`block text-gray-700 dark:text-white hover:text-[#D19537] ${
                    item.active ? "font-semibold text-[#D19537]" : ""
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
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
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="inline-flex items-center space-x-2 mb-8 rounded-full outline px-3 py-2">
          <div className="w-2 h-2 bg-[#D19537] rounded-full"></div>
          <span className="text-gray-600 dark:text-gray-300">My Profile</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-12 text-black dark:text-white">
          My <span className="text-[#D19537]">Profile</span>
        </h1>

        {/* Profile Photo */}
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
            Profile Photo
          </h2>
          <Avatar className="w-32 h-32 mx-auto">
            <AvatarImage src="/images/profile-photo.jpg" alt="Profile Photo" />
            <AvatarFallback className="text-2xl">JM</AvatarFallback>
          </Avatar>
        </div>

        {/* Basic Info */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
            Basic Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                First Name:
              </Label>
              <Input
                value="Jasmine"
                readOnly
                className="bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-black dark:text-white"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Last Name:
              </Label>
              <Input
                value="Marina"
                readOnly
                className="bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-black dark:text-white"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Gender:
              </Label>
              <Input
                value="Female"
                readOnly
                className="bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-black dark:text-white"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Email:
              </Label>
              <Input
                value="jasmine@gmail.com"
                readOnly
                className="bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-black dark:text-white"
              />
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-8">
            Contact Details
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Phone Number:
              </Label>
              <div className="flex">
                <div className="flex items-center px-3 bg-gray-50 dark:bg-[#212121] border border-r-0 border-gray-200 dark:border-gray-700 rounded-l-md">
                  <span className="text-sm text-black dark:text-white">+1</span>
                  <span className="ml-1 text-xs">🇺🇸</span>
                  <ChevronRight className="h-3 w-3 ml-1 text-gray-400 dark:text-gray-500" />
                </div>
                <Input
                  value="125-559-8852"
                  readOnly
                  className="bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-black dark:text-white rounded-l-none flex-1"
                />
              </div>
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                City/Town:
              </Label>
              <Input
                value="California"
                readOnly
                className="bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-black dark:text-white"
              />
            </div>
            <div>
              <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                Pincode:
              </Label>
              <Input
                value="78080"
                readOnly
                className="bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-black dark:text-white"
              />
            </div>
          </div>
          <div className="mb-6">
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
              Address:
            </Label>
            <Input
              value="245 Event Street, Downtown Cityview, NY 10016, USA"
              readOnly
              className="bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-black dark:text-white"
            />
          </div>
          <div>
            <Label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
              Website(Optional):
            </Label>
            <Input
              value="https://viagoevents.com/"
              readOnly
              className="bg-gray-50 dark:bg-[#212121] border-gray-200 dark:border-gray-700 text-black dark:text-white"
            />
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
          <p className="text-white">©2025 Visgo. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}
