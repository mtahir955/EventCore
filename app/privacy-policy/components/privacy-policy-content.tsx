"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Mail } from "lucide-react";

export function PrivacyPolicyContent() {
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

  // ✅ Active section state
  const [activeSection, setActiveSection] = useState("information");

  // ✅ Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["information", "usage", "sharing", "cookies"];
      let current = activeSection;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

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
    { id: "information", label: "Information We Collect" },
    { id: "usage", label: "How Event Core Uses Your Information" },
    { id: "sharing", label: "Sharing Your Information" },
    { id: "cookies", label: "Cookies and Tracking Technologies" },
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white dark:bg-black">
      {/* Breadcrumb */}
      <div className="inline-flex items-center mb-6 rounded-full outline px-4 py-2">
        <div className="w-2 h-2 rounded-full bg-[#D19537] mr-2"></div>
        <span className="text-gray-600 dark:text-gray-300">Privacy Policy</span>
      </div>

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
          Privacy Policy
        </h1>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-24">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Table of contents
            </h3>
            <nav className="space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`block font-medium transition-colors ${
                    activeSection === item.id
                      ? "text-[#D19537] underline"
                      : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({ behavior: "smooth" });
                    setActiveSection(item.id);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <section id="information" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Event Core collects information necessary to provide and improve our services, 
              including personal details such as name, email address, payment-related information, 
              and event data. We may also collect technical information like IP address, device type, 
              and usage behavior to enhance platform performance and security. Information is collected 
              when users register, create events, purchase tickets, or interact with the platform.
            </p>
          </section>

          <section id="usage" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              How Event Core Uses Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We use collected information to operate, maintain, and improve Event Core’s services, 
              including event management, ticket processing, customer support, and platform analytics. 
              Your data helps us personalize user experiences, process secure payments, prevent fraud, 
              and communicate important updates related to events or accounts. We may also use aggregated 
              data for performance monitoring and feature enhancements.
            </p>
          </section>

          <section id="sharing" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              Sharing Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
             Event Core does not sell or rent your personal information to third parties. 
             Information may be shared only with trusted service providers such as payment gateways, 
             hosting services, and analytics tools strictly for operational purposes. We may also disclose 
             information if required by law or to protect the rights, safety, and security of Event Core 
             and its users.
            </p>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Event Core uses cookies and similar tracking technologies to improve website functionality, 
              enhance user experience, and analyze platform usage. These technologies help us remember user
              preferences, maintain secure sessions, and optimize performance. Users can control or disable 
              cookies through their browser settings, though some features may be affected.
            </p>
            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 sm:pl-6 py-4 mb-8 bg-gray-50 dark:bg-gray-800 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                “One powerful platform to create, manage, and scale events with confidence.”
              </p>
            </blockquote>
          </section>
        </div>
      </div>

      {/* Get Started Section */}
      <section className="mb-16">
        <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
          Get Started Now
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          Reach out to us today and take the first step toward your goals.
        </p>
        <Button
          onClick={() => setShowModal(true)}
          className="bg-[#D19537] hover:bg-[#B8832F] text-white px-6 py-6 rounded-full font-medium"
        >
          Get Started
        </Button>
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
            <div className="mb-8">
              <h1 className="text-4xl font-bold leading-tight">
                <span className="text-[#D19537]">Get in touch</span>{" "}
                <span className="text-black dark:text-white">with us.</span>
              </h1>
              <h2 className="text-2xl font-bold text-black dark:text-white mt-2">
                We're here to assist you.
              </h2>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
                <Input
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleInputChange}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Input
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <Input
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleInputChange}
                rows={6}
                required
              />
              <Button
                type="submit"
                disabled={loading}
                className="px-8 py-3 rounded-full text-white bg-[#D19537] hover:bg-[#B8832F]"
              >
                {loading ? "Sending..." : "Leave us a Message"}
              </Button>
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
    </div>
  );
}
