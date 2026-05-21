import Link from "next/link";
import React from "react";

export default function TermsAndConditionsContent() {
  return (
    <div className="w-full bg-[#F1FCFF]">
      {/* Hero Section */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-32">
        <div className=" mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#00161D] mb-6">
            Terms and Conditions
          </h1>
          <p className="text-lg md:text-xl text-[#00161D] opacity-80">
            These Terms and Conditions govern your access to and use of our website located at clicktapsolutions.com operated by ClickTap Solutions. By accessing or using our Website, you agree to be bound by these Terms.
          </p>
        </div>
      </section>

      {/* Content Sections */}
      <section className="w-full px-4 sm:px-6 md:px-12 lg:px-20 pb-20">
        <div className=" mx-auto space-y-16">
          {/* Acceptance of Terms */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#01C2FE] rounded-full"></span>
              Acceptance of Terms
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                By accessing our Website, you confirm that you are at least 18 years old and agree to comply with these Terms. If you do not agree with any part of these Terms, you must not use our Website.
              </p>
            </div>
          </div>

          {/* Purpose of the Website */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#A9C921] rounded-full"></span>
              Purpose of the Website
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                Our Website is designed to showcase our abilities, provide information about our services, and offer general information about our company to prospective and existing clients.
              </p>
            </div>
          </div>

          {/* User Information */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#01C2FE] rounded-full"></span>
              User Information
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                When you provide your name, email, and phone number through our Website, you consent to our collection, storage, and use of this information in accordance with our Privacy Policy.
              </p>
            </div>
          </div>

          {/* Privacy and Data Protection */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#A9C921] rounded-full"></span>
              Privacy and Data Protection
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF] space-y-6">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                We are committed to protecting your privacy. Any personal data you provide to us will be handled in compliance with the General Data Protection Regulation (GDPR), the California Consumer Privacy Act (CCPA), and the California Online Privacy Protection Act (CalOPPA).
              </p>
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                For more information on how we collect, use, and protect your personal data, please refer to our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#01C2FE] hover:text-[#A9C921] transition-colors font-semibold"
                >
                  Privacy Policy
                </Link>
                .
              </p>
            </div>
          </div>

          {/* Communications Consent */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#01C2FE] rounded-full"></span>
              Communications Consent
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                By providing your contact information, you consent to receiving text messages from our official company phone numbers, including but not limited to our toll-free number, and emails from our official email addresses regarding your project and promotional offers. You can opt-out of these communications at any time by following the instructions provided in the communication.
              </p>
            </div>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#A9C921] rounded-full"></span>
              Termination
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                We can suspend or terminate your access to our services at any time, for any reason. You can also stop using our services at any time.
              </p>
            </div>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#01C2FE] rounded-full"></span>
              Limitation of Liability
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                ClickTap Solutions will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising out of your use of, or inability to use, our Website. This includes any errors or omissions in the content provided.
              </p>
            </div>
          </div>

          {/* Changes to the Terms */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#A9C921] rounded-full"></span>
              Changes to the Terms
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                We reserve the right to modify these Terms at any time. Any changes will be effective immediately upon posting on our Website. Your continued use of the Website following the posting of revised Terms means that you accept and agree to the changes.
              </p>
            </div>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#00161D] mb-8 flex items-center gap-3">
              <span className="w-1 h-12 bg-[#01C2FE] rounded-full"></span>
              Governing Law
            </h2>
            <div className="bg-white rounded-xl p-8 md:p-12 shadow-sm border border-[#DBF7FF]">
              <p className="text-base md:text-lg text-[#00161D] leading-relaxed">
                These Terms are governed by and construed in accordance with the laws of USA/Texas. Any disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts of USA/Texas.
              </p>
            </div>
          </div>

          {/* Contact Us */}
          <div className="bg-gradient-to-r from-[#01C2FE]/10 to-[#A9C921]/10 rounded-xl p-8 md:p-12 border border-[#DBF7FF] text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-[#00161D] mb-4">
              Questions About Our Terms?
            </h3>
            <p className="text-base md:text-lg text-[#00161D] mb-6">
              If you have any questions about these Terms, please contact us:
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
