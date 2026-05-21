import Link from "next/link";
import React from "react";

export default function PrivacyPolicyContent() {
  return (
    <div className="w-full bg-[#F1FCFF]">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className=" mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00161D] mb-6">
            Privacy Policy
          </h1>
          <p className="text-lg md:text-xl text-[#00161D] opacity-80">
            ClickTap Solutions is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pb-20">
        <div className=" mx-auto space-y-16">
          {/* Introduction */}
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
            <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
              By using our services, you agree to the terms of this Privacy Policy. We encourage you to review this policy carefully to understand our practices regarding your personal information.
            </p>
          </div>

          {/* Company Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#01C2FE] rounded-full"></span>
              Company Information
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF] space-y-4">
              <div>
                <p className="text-sm font-semibold text-[#A9C921] uppercase tracking-wide mb-2">Company Name</p>
                <p className="text-lg text-[#00161D]">ClickTap Solutions</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#A9C921] uppercase tracking-wide mb-2">Location</p>
                <p className="text-lg text-[#00161D]">Three Sugar Creek Center, Sugar Land, TX 77478</p>
              </div>
              <div>
                <p className="text-sm font-semibold text-[#A9C921] uppercase tracking-wide mb-2">Contact Email</p>
                <a
                  href="mailto:info@clicktapsolutions.com"
                  className="text-lg text-[#01C2FE] hover:text-[#A9C921] transition-colors"
                >
                  info@clicktapsolutions.com
                </a>
              </div>
            </div>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#A9C921] rounded-full"></span>
              Information We Collect
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] mb-6">
                We may collect the following personal information from you:
              </p>
              <ul className="space-y-4">
                {["Name", "Email Address", "Phone Number"].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-base md:text-lg text-[#00161D]"
                  >
                    <span className="w-2 h-2 bg-[#01C2FE] rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Purpose of Data Collection */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#01C2FE] rounded-full"></span>
              Purpose of Data Collection
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] mb-6">
                We collect this information to:
              </p>
              <ul className="space-y-4">
                {[
                  "Contact you regarding our services",
                  "Provide and manage our services to you"
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-base md:text-lg text-[#00161D]"
                  >
                    <span className="w-2 h-2 bg-[#A9C921] rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#A9C921] rounded-full"></span>
              Data Sharing
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                We do not share your personal data with any third parties.
              </p>
            </div>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#01C2FE] rounded-full"></span>
              User Rights
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                While we do not offer specific rights beyond the basic use of your information for contacting you regarding our services, we ensure that your information is handled with care and in compliance with applicable privacy laws.
              </p>
            </div>
          </div>

          {/* Text Message Communications */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#A9C921] rounded-full"></span>
              Text Message Communications
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF] space-y-6">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                We use text messaging to communicate with you about your service. Normal messaging rates apply and the frequency of messages may vary. Mobile Carriers are not liable for delayed or undelivered messages.
              </p>
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                No mobile information will be shared with third parties/affiliates for marketing/promotional purposes. All other categories exclude text messaging originator opt-in data and consent; this information will not be shared with any third parties.
              </p>
              <div className="bg-[#F1FCFF] border-l-4 border-[#01C2FE] rounded-lg p-6 mt-6">
                <p className="font-semibold text-[#00161D] mb-3">Opt-out of text message communications</p>
                <p className="text-base text-[#00161D] leading-relaxed mb-3">
                  You may opt out of text messaging at any time by replying to any message with <span className="font-mono font-bold">STOP</span> or contacting us at{" "}
                  <a
                    href="mailto:info@clicktapsolutions.com"
                    className="text-[#01C2FE] hover:text-[#A9C921] transition-colors"
                  >
                    info@clicktapsolutions.com
                  </a>
                  . This will end the communications from that particular phone number.
                </p>
                <p className="text-base text-[#00161D] leading-relaxed">
                  You may continue to receive service-related and other non-marketing text messages from other phone numbers managed by Company, and you may opt out of those in a similar fashion.
                </p>
              </div>
            </div>
          </div>

          {/* Data Protection Measures */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#01C2FE] rounded-full"></span>
              Data Protection Measures
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                We use encryption to protect your personal data. We implement various security measures to ensure the safety of your personal information when you enter, submit, or access your personal information.
              </p>
            </div>
          </div>

          {/* Cookies and Tracking Technologies */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#A9C921] rounded-full"></span>
              Cookies and Tracking Technologies
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed mb-6">
                We use cookies and similar tracking technologies to track the activity on our website and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </div>
          </div>

          {/* Legal Compliance */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#01C2FE] rounded-full"></span>
              Legal Compliance
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] mb-6">
                We comply with the following privacy regulations:
              </p>
              <ul className="space-y-4">
                {[
                  "General Data Protection Regulation (GDPR)",
                  "California Consumer Privacy Act (CCPA)",
                  "California Online Privacy Protection Act (CalOPPA)"
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4 text-base md:text-lg text-[#00161D]"
                  >
                    <span className="w-2 h-2 bg-[#A9C921] rounded-full flex-shrink-0"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Changes to This Privacy Policy */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#A9C921] rounded-full"></span>
              Changes to This Privacy Policy
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                We may update our Privacy Policy from time to time. We will notify you of any changes by email. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-gradient-to-r from-[#01C2FE]/10 to-[#A9C921]/10 rounded-xl p-8 md:p-12 border border-[#DBF7FF] text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#00161D] mb-4">
              Questions About Our Privacy Policy?
            </h3>
            <p className="text-base md:text-lg text-[#00161D] mb-6">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#01C2FE] hover:bg-[#00A8D8] transition-colors text-white px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Contact Us
            </Link>
          </div>

        </div>
      </section>
    </div>
  );
}
