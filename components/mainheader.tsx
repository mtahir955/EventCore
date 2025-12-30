"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Moon, Menu, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { resolvedTheme, theme, setTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-[#212121] border-b border-gray-100 dark:border-gray-800 px-6 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
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

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link
            href="/#"
            className="text-[#D19537] font-medium text-[14px] border-b-2 border-[#D19537] pb-1 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="text-gray-700 dark:text-white hover:text-[#D19537] text-[14px] dark:hover:text-[#D19537] font-medium transition-colors"
          >
            Events
          </Link>
          <Link
            href="/about-us"
            className="text-gray-700 dark:text-white hover:text-[#D19537] text-[14px] dark:hover:text-[#D19537] font-medium transition-colors"
          >
            About
          </Link>
          <Link
            href="/trainers"
            className="text-gray-700 dark:text-white hover:text-[#D19537] text-[14px] dark:hover:text-[#D19537] font-medium transition-colors"
          >
            Trainers
          </Link>
          <Link
            href="/calendar"
            className="text-gray-700 dark:text-white hover:text-[#D19537] text-[14px] dark:hover:text-[#D19537] font-medium transition-colors"
          >
            Calendar
          </Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-6">
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

          {/* <Link
            href="/sign-up"
            className="bg-white text-[#D19537] outline px-8 py-2 rounded-full font-medium"
          >
            Login
          </Link>
          <Link
            href="/sign-up"
            className="bg-[#D19537] hover:bg-[#B8832F] text-white px-8 py-2 rounded-full font-medium"
          >
            Start Now
          </Link> */}
        </div>

        {/* Mobile Right Section */}
        <div className="flex md:hidden items-center space-x-4">
          {/* Theme toggle icon */}
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

          {/* Hamburger Menu */}
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-6 py-4 space-y-4 border-t border-gray-100 dark:border-gray-800">
          <Link
            href="/#"
            className="block text-[#D19537] font-medium text-[14px] border-b-2 border-[#D19537] pb-1"
          >
            Home
          </Link>
          <Link
            href="/events"
            className="block text-gray-700 dark:text-white hover:text-[#D19537] font-medium text-[14px]"
          >
            Events
          </Link>
          <Link
            href="/about-us"
            className="block text-gray-700 dark:text-white hover:text-[#D19537] font-medium text-[14px]"
          >
            About
          </Link>
          <Link
            href="/trainers"
            className="block text-gray-700 dark:text-white hover:text-[#D19537] font-medium text-[14px]"
          >
            Trainers
          </Link>
          <Link
            href="/calendar"
            className="block text-gray-700 dark:text-white hover:text-[#D19537] font-medium text-[14px]"
          >
            Calendar
          </Link>

          {/* <div className="flex flex-col space-y-3 pt-3 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/sign-up"
              className="bg-white text-[#D19537] outline px-6 py-2 rounded-full font-medium text-center"
            >
              Login
            </Link>
            <Link href="/sign-up">
              <Button className="bg-[#D19537] hover:bg-[#B8832F] text-white px-6 py-2 rounded-full font-medium w-full">
                Start Now
              </Button>
            </Link>
          </div> */}
        </div>
      )}
    </header>
  );
}
