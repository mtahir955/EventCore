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

  const navItems = [
    { id: "information", label: "1. Information We Collect" },
    { id: "use", label: "2. How We Use Your Information" },
    { id: "share", label: "3. How We Share Your Information" },
    { id: "security", label: "4. Data Security & Payment Processing" },
    { id: "retention", label: "5. Data Retention" },
    { id: "rights", label: "6. Your Privacy Rights" },
    {
      id: "ticketing",
      label: "7. Ticketing, Membership Transfers, Scanning & Access Technology",
    },
    { id: "thirdparty", label: "8. Third-Party Links" },
    { id: "children", label: "9. Children’s Privacy" },
    {
      id: "laws",
      label: "10. Data Protection Laws & Regional Rights (GDPR & CCPA)",
    },
    { id: "changes", label: "11. Changes to This Privacy Policy" },
    { id: "contact", label: "12. Contact Us" },
  ];

  // ✅ Scroll spy effect
  useEffect(() => {
    const handleScroll = () => {
      const ids = navItems.map((n) => n.id);
      let current = activeSection;

      for (const id of ids) {
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white dark:bg-black">
      {/* Breadcrumb */}
      <div className="inline-flex items-center mb-6 rounded-full outline px-4 py-2">
        <div className="w-2 h-2 rounded-full bg-[#D19537] mr-2"></div>
        <span className="text-gray-600 dark:text-gray-300">Privacy Policy</span>
      </div>

      {/* Page Heading */}
      <div className="mb-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
          Privacy <span className="text-[#D19537]">Policy</span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300">
          <span className="font-semibold text-black dark:text-white">
            Last Updated:
          </span>{" "}
          January 2026
        </p>
      </div>

      {/* Main Layout */}
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Sidebar */}
        <div className="w-full lg:w-72 flex-shrink-0">
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
          {/* Intro */}
          <section className="mb-12">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Eventcore Solutions ("Eventcore," "we," "us," or "our") respects
              your privacy and is committed to protecting it through this
              Privacy Policy. This policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website, use our platform, or interact with our services
              (collectively, the "Services").
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              By accessing or using Eventcore Solutions, you agree to the terms
              of this Privacy Policy.
            </p>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 1 */}
          <section id="information" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              1. Information We Collect
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  A. Personal Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  We may collect personal information that you voluntarily
                  provide, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing and payment information</li>
                  <li>Company or organization name</li>
                  <li>Event registration details</li>
                  <li>Account login credentials</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  B. Automatically Collected Information
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  When you access our Services, we may automatically collect:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Device information</li>
                  <li>Pages visited and usage data</li>
                  <li>Date and time of access</li>
                  <li>Referring URLs</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  C. Cookies and Tracking Technologies
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  We use cookies, web beacons, and similar technologies to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Improve platform functionality</li>
                  <li>Analyze usage and performance</li>
                  <li>Personalize user experience</li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                  You can control cookie preferences through your browser
                  settings.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 2 */}
          <section id="use" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We use the information we collect specifically to support{" "}
              <span className="font-semibold">
                {" "}
                event ticketing, membership management, and access control,
              </span>{" "}
              including to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>
                Create and manage user accounts, memberships, and access tiers
              </li>
              <li>
                Process event ticket purchases, refunds, transfers, and upgrades
              </li>
              <li>
                Issue digital tickets, QR codes, badges, and check-in
                credentials
              </li>
              <li>
                Verify eligibility for member only events, pricing, or benefits
              </li>
              <li>
                Manage on-site and virtual event access and attendance tracking
              </li>
              <li>
                Communicate event related updates, confirmations, changes, and
                alerts
              </li>
              <li>
                Provide customer support related to tickets, memberships, and
                events
              </li>
              <li>
                Improve platform performance, security, and user experience
              </li>
              <li>
                Detect, prevent, and investigate fraud, abuse, duplicate
                registrations, or unauthorized access
              </li>
              <li>Comply with legal, financial, and regulatory obligations</li>
            </ul>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 3 */}
          <section id="share" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              3. How We Share Your Information
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We do not sell your personal information. Information is shared
              only as necessary to operate an event ticketing and membership
              platform, including:
            </p>

            <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
              <div>
                <p className="font-semibold text-black dark:text-white">
                  Event Organizers &amp; Hosts:
                </p>
                <p>
                  We share limited registration and attendance data (such as
                  name, email, ticket type, membership status, and check-in
                  status) with event organizers to administer events.
                </p>
              </div>

              <div>
                <p className="font-semibold text-black dark:text-white">
                  Payment &amp; Fraud Prevention Providers:
                </p>
                <p>
                  Transaction and billing data is shared with PCI compliant
                  payment processors and fraud prevention services.
                </p>
              </div>

              <div>
                <p className="font-semibold text-black dark:text-white">
                  Technology &amp; Infrastructure Providers:
                </p>
                <p>
                  Hosting, analytics, email delivery, QR code generation, access
                  control, and customer support tools.
                </p>
              </div>

              <div>
                <p className="font-semibold text-black dark:text-white">
                  Legal &amp; Compliance Requirements:
                </p>
                <p>
                  When required by law, subpoena, court order, or regulatory
                  request.
                </p>
              </div>

              <div>
                <p className="font-semibold text-black dark:text-white">
                  Business Transfers:
                </p>
                <p>
                  In the event of a merger, acquisition, restructuring, or sale
                  of assets involving Eventcore Solutions.
                </p>
              </div>

              <p className="mt-3">
                All third parties are contractually required to safeguard your
                information and use it only for authorized purposes.
              </p>
            </div>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 4 */}
          <section id="security" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              4. Data Security &amp; Payment Processing
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We implement commercially reasonable technical and organizational
              safeguards to protect your information, including:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Secure cloud infrastructure and encrypted connections</li>
              <li>Role-based access controls</li>
              <li>Monitoring for unauthorized access and abuse</li>
              <li>
                Payment processing through PCI-DSS compliant providers such as
                Stripe
              </li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              Eventcore Solutions does not store full credit card numbers on its
              servers. All payment transactions are handled directly by
              certified payment processors.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              While we take strong measures to protect data, no system can be
              guaranteed 100% secure.
            </p>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 5 */}
          <section id="retention" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              5. Data Retention
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We retain personal information only as long as necessary to:
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Fulfill the purposes outlined in this policy</li>
              <li>Comply with legal, accounting, or reporting requirements</li>
            </ul>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              When no longer required, data is securely deleted or anonymized.
            </p>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 6 */}
          <section id="rights" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              6. Your Privacy Rights
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  Organizer vs. Attendee Data Roles
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Eventcore Solutions acts as:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed mt-3">
                  <li>
                    A <span className="font-semibold">data controller</span> for
                    platform-level user accounts, memberships, and system
                    operations
                  </li>
                  <li>
                    A <span className="font-semibold">data processor</span> on
                    behalf of event organizers for attendee registration,
                    ticketing, access control, and attendance data
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  Event organizers are responsible for how attendee data is used
                  outside of the Eventcore platform. Eventcore processes such
                  data only according to organizer instructions and applicable
                  law.
                </p>
              </div>

              <div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  Depending on your jurisdiction, you may have rights related to
                  your personal data, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>
                    The right to access and obtain a copy of your personal
                    information
                  </li>
                  <li>The right to correct inaccurate or incomplete data</li>
                  <li>
                    The right to request deletion of your data, subject to legal
                    and contractual retention requirements (such as completed
                    transactions or event records)
                  </li>
                  <li>
                    The right to object to or restrict certain data processing
                    activities
                  </li>
                  <li>The right to withdraw consent where applicable</li>
                </ul>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  Please note that certain information must be retained to
                  maintain ticket validity, membership integrity, fraud
                  prevention, financial reporting, and event audit trails.
                </p>

                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  To exercise your rights, contact us using the details below.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 7 */}
          <section id="ticketing" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              7. Ticketing, Membership Transfers, Scanning &amp; Access
              Technology
            </h2>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Eventcore Solutions may use QR codes, digital badges, wristbands,
              or similar technologies to manage event entry, attendance
              tracking, and membership verification.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  On-Site &amp; Digital Access Scanning
                </h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>
                    Ticket scans may record entry time, exit time, and access
                    points
                  </li>
                  <li>
                    Duplicate or invalid scans may be flagged automatically
                  </li>
                  <li>
                    Scan data may be shared with event organizers for security
                    and operational purposes
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  Transfers, Resale &amp; Credential Changes
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                  Where permitted by the event organizer, tickets or memberships
                  may be transferred, upgraded, downgraded, or reassigned.
                  Associated personal data may be updated to ensure accurate
                  access control.
                </p>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  Unauthorized duplication, resale, or misuse of tickets,
                  credentials, or access technology may result in suspension or
                  termination of access without refund.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 8 */}
          <section id="thirdparty" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              8. Third-Party Links
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our Services may contain links to third-party websites or
              services. We are not responsible for the privacy practices or
              content of those third parties. We encourage you to review their
              privacy policies.
            </p>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 9 */}
          <section id="children" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              9. Children’s Privacy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Eventcore Solutions does not knowingly collect personal
              information from individuals under the age of 13. If we become
              aware that such information has been collected, we will take steps
              to delete it.
            </p>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 10 */}
          <section id="laws" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              10. Data Protection Laws &amp; Regional Rights (GDPR &amp; CCPA)
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  A. California Privacy Rights (CCPA/CPRA)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  If you are a California resident, you have the right to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>
                    Know what categories of personal information we collect and
                    how it is used
                  </li>
                  <li>
                    Request access to or deletion of your personal information
                  </li>
                  <li>
                    Opt out of the sale or sharing of personal information
                    (Eventcore Solutions does not sell personal data)
                  </li>
                  <li>
                    Not be discriminated against for exercising your privacy
                    rights
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  Requests may be submitted via the contact information below.
                  We may need to verify your identity before fulfilling
                  requests.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-black dark:text-white mb-2">
                  B. European Economic Area &amp; UK Users (GDPR)
                </h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-3">
                  If you are located in the EEA or UK, you have rights under the
                  GDPR, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300 leading-relaxed">
                  <li>
                    The right to access, correct, or delete your personal data
                  </li>
                  <li>The right to restrict or object to processing</li>
                  <li>The right to data portability</li>
                  <li>
                    The right to lodge a complaint with a supervisory authority
                  </li>
                </ul>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
                  Our lawful bases for processing include contractual necessity,
                  legitimate interests, legal obligations, and consent where
                  applicable.
                </p>
              </div>
            </div>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 11 */}
          <section id="changes" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              11. Changes to This Privacy Policy
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes
              will be posted on this page with an updated "Last Updated" date.
              Continued use of the Services constitutes acceptance of the
              revised policy.
            </p>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* 12 */}
          <section id="contact" className="mb-12">
            <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
              12. Contact Us
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have questions or concerns about this Privacy Policy or our
              data practices, please contact:
            </p>

            <div className="space-y-2 text-gray-700 dark:text-gray-300">
              <p className="font-semibold text-black dark:text-white">
                Eventcore Solutions
              </p>
              <p>📧 Email: support@eventcoresolutions.com</p>
            </div>
          </section>

          {/* Divider */}
          <hr className="my-10 border-gray-300 dark:border-gray-700" />

          {/* Keep your quote style */}
          <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 sm:pl-6 py-4 mt-8 bg-gray-50 dark:bg-gray-800 rounded-r-lg">
            <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
              “One powerful platform to create, manage, and scale events with
              confidence.”
            </p>
          </blockquote>
        </div>
      </div>

      {/* Get Started Section (unchanged) */}
      <section className="mb-10 mt-10">
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

// "use client";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { X, Mail } from "lucide-react";

// export function PrivacyPolicyContent() {
//   const [showModal, setShowModal] = useState(false);
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     company: "",
//     phone: "",
//     email: "",
//     message: "",
//   });

//   // ✅ Active section state
//   const [activeSection, setActiveSection] = useState("information");

//   // ✅ Scroll spy effect
//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = ["information", "usage", "sharing", "cookies"];
//       let current = activeSection;
//       for (const id of sections) {
//         const el = document.getElementById(id);
//         if (el) {
//           const rect = el.getBoundingClientRect();
//           if (rect.top <= 120 && rect.bottom >= 120) {
//             current = id;
//             break;
//           }
//         }
//       }
//       setActiveSection(current);
//     };

//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [activeSection]);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       setFormData({ name: "", company: "", phone: "", email: "", message: "" });
//       setShowModal(false);
//       setIsPopupOpen(true);
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("❌ Something went wrong.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const navItems = [
//     { id: "information", label: "Information We Collect" },
//     { id: "usage", label: "How Event Core Uses Your Information" },
//     { id: "sharing", label: "Sharing Your Information" },
//     { id: "cookies", label: "Cookies and Tracking Technologies" },
//   ];

//   return (
//     <div className="px-4 sm:px-6 lg:px-8 py-8 bg-white dark:bg-black">
// {/* Breadcrumb */}
// <div className="inline-flex items-center mb-6 rounded-full outline px-4 py-2">
//   <div className="w-2 h-2 rounded-full bg-[#D19537] mr-2"></div>
//   <span className="text-gray-600 dark:text-gray-300">Privacy Policy</span>
// </div>

//       {/* Page Heading */}
//       <div className="mb-8">
//         <h1 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-4">
//           Privacy Policy
//         </h1>
//       </div>

//       {/* Main Layout */}
//       <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
//         {/* Sidebar */}
//         <div className="w-full lg:w-64 flex-shrink-0">
//           <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 sticky top-24">
//             <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
//               Table of contents
//             </h3>
//             <nav className="space-y-3">
//               {navItems.map((item) => (
//                 <a
//                   key={item.id}
//                   href={`#${item.id}`}
//                   className={`block font-medium transition-colors ${
//                     activeSection === item.id
//                       ? "text-[#D19537] underline"
//                       : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
//                   }`}
//                   onClick={(e) => {
//                     e.preventDefault();
//                     document
//                       .getElementById(item.id)
//                       ?.scrollIntoView({ behavior: "smooth" });
//                     setActiveSection(item.id);
//                   }}
//                 >
//                   {item.label}
//                 </a>
//               ))}
//             </nav>
//           </div>
//         </div>

//         {/* Main Content */}
//         <div className="flex-1">
//           <section id="information" className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
//               Information We Collect
//             </h2>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//               Event Core collects information necessary to provide and improve our services,
//               including personal details such as name, email address, payment-related information,
//               and event data. We may also collect technical information like IP address, device type,
//               and usage behavior to enhance platform performance and security. Information is collected
//               when users register, create events, purchase tickets, or interact with the platform.
//             </p>
//           </section>

//           <section id="usage" className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
//               How Event Core Uses Your Information
//             </h2>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
//               We use collected information to operate, maintain, and improve Event Core’s services,
//               including event management, ticket processing, customer support, and platform analytics.
//               Your data helps us personalize user experiences, process secure payments, prevent fraud,
//               and communicate important updates related to events or accounts. We may also use aggregated
//               data for performance monitoring and feature enhancements.
//             </p>
//           </section>

//           <section id="sharing" className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
//               Sharing Your Information
//             </h2>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
//              Event Core does not sell or rent your personal information to third parties.
//              Information may be shared only with trusted service providers such as payment gateways,
//              hosting services, and analytics tools strictly for operational purposes. We may also disclose
//              information if required by law or to protect the rights, safety, and security of Event Core
//              and its users.
//             </p>
//           </section>

//           <section id="cookies" className="mb-12">
//             <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-6">
//               Cookies and Tracking Technologies
//             </h2>
//             <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
//               Event Core uses cookies and similar tracking technologies to improve website functionality,
//               enhance user experience, and analyze platform usage. These technologies help us remember user
//               preferences, maintain secure sessions, and optimize performance. Users can control or disable
//               cookies through their browser settings, though some features may be affected.
//             </p>
//             <blockquote className="border-l-4 border-gray-300 dark:border-gray-600 pl-4 sm:pl-6 py-4 mb-8 bg-gray-50 dark:bg-gray-800 rounded-r-lg">
//               <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
//                 “One powerful platform to create, manage, and scale events with confidence.”
//               </p>
//             </blockquote>
//           </section>
//         </div>
//       </div>

//       {/* Get Started Section */}
//       <section className="mb-16">
//         <h2 className="text-xl sm:text-2xl font-bold text-black dark:text-white mb-4">
//           Get Started Now
//         </h2>
//         <p className="text-gray-700 dark:text-gray-300 mb-6">
//           Reach out to us today and take the first step toward your goals.
//         </p>
//         <Button
//           onClick={() => setShowModal(true)}
//           className="bg-[#D19537] hover:bg-[#B8832F] text-white px-6 py-6 rounded-full font-medium"
//         >
//           Get Started
//         </Button>
//       </section>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//           <div className="bg-white dark:bg-[#212121] rounded-3xl shadow-lg p-8 w-full max-w-2xl relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4 text-gray-500 hover:text-black dark:text-gray-300 dark:hover:text-white"
//             >
//               <X className="w-6 h-6" />
//             </button>
//             <div className="mb-8">
//               <h1 className="text-4xl font-bold leading-tight">
//                 <span className="text-[#D19537]">Get in touch</span>{" "}
//                 <span className="text-black dark:text-white">with us.</span>
//               </h1>
//               <h2 className="text-2xl font-bold text-black dark:text-white mt-2">
//                 We're here to assist you.
//               </h2>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-2 gap-4">
//                 <Input
//                   name="name"
//                   placeholder="Full Name"
//                   value={formData.name}
//                   onChange={handleInputChange}
//                   required
//                 />
//                 <Input
//                   name="company"
//                   placeholder="Company"
//                   value={formData.company}
//                   onChange={handleInputChange}
//                 />
//               </div>
//               <div className="grid grid-cols-2 gap-4">
//                 <Input
//                   name="phone"
//                   placeholder="Phone Number"
//                   value={formData.phone}
//                   onChange={handleInputChange}
//                 />
//                 <Input
//                   name="email"
//                   type="email"
//                   placeholder="Email"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   required
//                 />
//               </div>
//               <Textarea
//                 name="message"
//                 placeholder="Your Message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 rows={6}
//                 required
//               />
//               <Button
//                 type="submit"
//                 disabled={loading}
//                 className="px-8 py-3 rounded-full text-white bg-[#D19537] hover:bg-[#B8832F]"
//               >
//                 {loading ? "Sending..." : "Leave us a Message"}
//               </Button>
//             </form>
//           </div>
//         </div>
//       )}

//       {/* Success Popup */}
//       {isPopupOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
//           <div className="bg-white dark:bg-[#212121] rounded-2xl shadow-xl relative w-full max-w-md">
//             <button
//               onClick={() => setIsPopupOpen(false)}
//               className="absolute top-4 right-4 text-gray-600 dark:text-gray-300"
//             >
//               <X size={24} />
//             </button>
//             <div className="flex flex-col items-center justify-center h-full px-8 py-10">
//               <div
//                 className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
//                 style={{ backgroundColor: "#D19537" }}
//               >
//                 <Mail size={32} color="white" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
//                 Message Sent
//               </h2>
//               <p className="text-gray-600 dark:text-gray-300 text-center mb-8">
//                 Thank you for contacting us. We’ll get back to you soon.
//               </p>
//               <Button
//                 onClick={() => setIsPopupOpen(false)}
//                 className="w-full py-3 px-6 rounded-xl text-white font-medium"
//                 style={{ backgroundColor: "#D19537" }}
//               >
//                 Done
//               </Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
