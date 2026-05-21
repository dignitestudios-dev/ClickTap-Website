import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../components/global/Navbar";
import TermsAndConditionsContent from "../components/privacy-policy/TermsAndConditionsContent";

const Footer = dynamic(() => import("../components/global/Footer"), { ssr: true });

export const metadata: Metadata = {
  title: "Terms and Conditions | ClickTap Solutions",
  description: "Read the terms and conditions that govern your use of ClickTap Solutions website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#F1FCFF]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <TermsAndConditionsContent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
