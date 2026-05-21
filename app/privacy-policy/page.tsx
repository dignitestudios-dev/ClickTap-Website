import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../components/global/Navbar";
import PrivacyPolicyContent from "../components/privacy-policy/PrivacyPolicyContent";

const Footer = dynamic(() => import("../components/global/Footer"), { ssr: true });

export const metadata: Metadata = {
  title: "Privacy Policy | ClickTap Solutions",
  description: "Learn about how ClickTap Solutions protects your privacy and handles your personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden bg-[#F1FCFF]">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <PrivacyPolicyContent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
