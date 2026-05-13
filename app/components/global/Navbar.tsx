"use client";
import { useState } from "react";
import { NavLink } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "",
    hasDropdown: true,
    subLinks: [
      { label: "Mobile App Development", href: "/services/mobile-app-development" },
      { label: "iOS App Development", href: "/services/ios-app-development" },
      { label: "Android App Development", href: "/services/andriod-app-development" },
      { label: "PWA Development", href: "/services/progressive-web-app" },
      { label: "Web App Development", href: "/services/web-app-development" },
      { label: "AI App Development", href: "/services/ai-app-development" },
      { label: "Custom Software Development", href: "/services/custom-software-development" },
      { label: "MVP Development Services", href: "/services/mvp-development-services" },
      { label: "UI/UX Design", href: "/services/ui-ux" },
      { label: "Consultant", href: "/services/consultant" },
    ],
  },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="w-full h-[70px] md:h-[91px] flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20  top-0 z-50 ">
      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/images/logo.png" width={160} height={40} className="h-7 sm:h-8 md:h-10 w-auto" alt="Logo" priority />
      </Link>

      {/* Center nav links */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10">
        {navLinks.map((link) => (
          <div key={link.label} className="relative group">
            <Link
              href={link.href}
              className="flex items-center gap-1 text-dark text-[14px] lg:text-[15px] font-medium hover:text-primary transition-colors py-4"
            >
              {link.label}
              {link.hasDropdown && (
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:rotate-180 transition-transform duration-300"
                >
                  <path
                    d="M4 6l4 4 4-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </Link>

            {link.subLinks && (
              <div className="absolute w-[300px] lg:w-[350px] top-full left-0 invisible group-hover:visible opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 pt-2 z-50">
                <div className="bg-white shadow-[0_10px_30px_rgba(0,0,0,0.1)] rounded-xl min-w-[240px] py-3 border border-gray-100 overflow-hidden">
                  {link.subLinks.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="block px-6 py-3 text-[13px] lg:text-[14px] text-dark hover:bg-gray-50 hover:text-primary transition-all font-medium"
                    >
                      {sub.label}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* CTA Button */}
      {/* CTA Button */}
      <button className="hidden md:flex items-center justify-center bg-[#A9C921] text-[#1E2600] text-[13px] lg:text-[15px] font-semibold rounded-2xl px-4 lg:px-5 py-2 h-[50px] lg:h-[61px] hover:opacity-90 transition-opacity">
        Contact Us
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-dark p-2"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M6 18L18 6M6 6l12 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-[70px] md:top-[91px] left-0 right-0 bg-white shadow-2xl p-5 flex flex-col gap-2 md:hidden border-t border-gray-100 z-40 max-h-[80vh] overflow-y-auto"
          >
            {navLinks.map((link) => (
              <div key={link.label} className="flex flex-col">
                <div
                  className="flex items-center justify-between py-3 border-b border-gray-50"
                  onClick={() => link.hasDropdown ? setActiveDropdown(activeDropdown === link.label ? null : link.label) : setMobileOpen(false)}
                >
                  <Link
                    href={link.href}
                    className="text-dark text-[16px] font-medium"
                    onClick={(e) => {
                      if (link.hasDropdown) {
                        e.preventDefault();
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                  >
                    {link.label}
                  </Link>
                  {link.hasDropdown && (
                    <motion.svg
                      animate={{ rotate: activeDropdown === link.label ? 180 : 0 }}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M4 6l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  )}
                </div>

                <AnimatePresence>
                  {link.hasDropdown && activeDropdown === link.label && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="flex flex-col pl-4 bg-gray-50 rounded-lg mt-2">
                        {link.subLinks?.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="text-dark text-[13px] font-medium py-3 border-b border-gray-100 last:border-0"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            <button className="bg-accent text-[#1E2600] text-[15px] font-bold rounded-xl px-5 py-4 mt-4 shadow-lg shadow-accent/10">
              Contact Us
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
