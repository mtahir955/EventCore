"use client";

import { useState } from "react";
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
        <p className="text-gray-600 dark:text-gray-400">
          Effective date: August 31, 2025
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar */}
        <div className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
              Table of contents
            </h3>
            <nav className="space-y-3">
              <a
                href="#information"
                className="block text-[#D19537] font-medium hover:underline"
              >
                Information We Collect
              </a>
              <a
                href="#usage"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                How Event Core Uses Your Information
              </a>
              <a
                href="#sharing"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Sharing Your Information
              </a>
              <a
                href="#cookies"
                className="block text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Cookies and Tracking Technologies
              </a>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Sections */}
          <section id="information" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              Information We Collect
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat
              mollis at volutpat lectus velit, sed auctor...
            </p>
          </section>

          <section id="usage" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              How Event Core Uses Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Eget quis mi enim, leo lacinia pharetra, semper. Eget in
              volutpat...
            </p>
          </section>

          <section id="sharing" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              Sharing Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus...
            </p>
          </section>

          <section id="cookies" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              Cookies and Tracking Technologies
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Morbi sed imperdiet in ipsum, adipiscing elit dui lectus...
            </p>

            <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 sm:pl-6 py-4 mb-8 bg-gray-50 dark:bg-gray-800 rounded-r-lg">
              <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                "Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim
                mauris id..."
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
