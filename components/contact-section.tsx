"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Mail } from "lucide-react";

export function ContactSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    company: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        setFormData({
          name: "",
          phone: "",
          company: "",
          email: "",
          message: "",
        });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-4 mb-12 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 rounded-full px-4 py-2 border">
            <div className="w-2 h-2 bg-[#D19537] rounded-full" />
            <span className="text-[#D19537] text-sm font-medium">
              Get Started
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-snug">
            <span className="text-[#D19537] italic">Get in touch</span> with us.
            We're here to assist you.
          </h2>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Row 1 */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Full Name
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Phone Number
              </label>
              <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter Your Number"
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Company Name
              </label>
              <Input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Enter Your Company Name"
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
                Email
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white"
                required
              />
            </div>
          </div>

          {/* Row 3 */}
          <div>
            <label className="block text-sm font-medium text-gray-900 dark:text-white mb-2">
              Message
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Start Typing Your Message"
              rows={6}
              className="bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center md:justify-start">
            <Button
              type="submit"
              disabled={loading}
              className="bg-[#D19537] hover:bg-[#B8832F] text-white px-8 py-6 rounded-full sm:w-full md:w-auto"
            >
              {loading ? "Sending..." : "Leave us a Message"}
            </Button>
          </div>
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
                className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                style={{ backgroundColor: "#D19537" }}
              >
                <Mail size={32} color="white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                Message Sent
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-center leading-relaxed mb-8">
                Thank you for contacting us. We've received your message and
                will respond as soon as possible.
              </p>
              <button
                onClick={() => setIsPopupOpen(false)}
                className="w-full py-3 px-6 rounded-xl text-white font-medium hover:opacity-90 transition-opacity"
                style={{ backgroundColor: "#D19537" }}
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
