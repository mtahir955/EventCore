"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, User, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname(); // ⬅️ Detect current route
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // ✅ Dark mode setup
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

  return (
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
                pathname === item.href || pathname.startsWith(item.href + "/");
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
                  <AvatarImage src="/images/profile-photo.jpg" alt="Profile" />
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
                pathname === item.href || pathname.startsWith(item.href + "/");
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
  );
}
