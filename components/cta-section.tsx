"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X, Mail } from "lucide-react";

export function CTASection() {
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
      // ✅ Send API request
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // ✅ Reset + show success popup
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
      });
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
    <section className="relative py-32 bg-black dark:bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70 z-10" />
        <img
          src="/images/smiling-man.jpg"
          alt="Professional background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Achieve balance, growth,
            <br />
            and mastery in life
          </h2>

          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Close the gap between where you are and where you want to be through
            inspiring, life-changing speaking.
          </p>

          <Button
            onClick={() => setShowModal(true)}
            className="bg-white text-black hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-semibold"
          >
            Get Started
          </Button>
        </div>
      </div>

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
    </section>
  );
}
