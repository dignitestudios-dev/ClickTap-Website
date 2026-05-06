"use client";
import Image from "next/image";
import { useState } from "react";
import { NavLink } from "@/types";

const navLinks: NavLink[] = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "Case Studies", href: "#" },
  { label: "About Us", href: "#about" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="w-full   h-[91px] flex items-center justify-between px-20 sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <img src="/images/logo.png" className=" h-8" alt="Logo" />
      </div>

      {/* Center nav links */}
      <div className="hidden md:flex items-center h-[58px] gap-10 bg-[#F1F1F1] rounded-2xl px-8 py-5">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="flex items-center gap-1 text-[#00161D] text-[15px] font-normal hover:text-[#01C2FE] transition-colors"
          >
            {link.label}
            {link.hasDropdown && (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 6l4 4 4-4"
                  stroke="#00161D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </a>
        ))}
      </div>

      {/* CTA Button */}
      <button className="hidden md:flex items-center justify-center bg-[#A9C921] text-[#1E2600] text-[15px] font-semibold rounded-2xl px-5 py-2 h-[61px] hover:opacity-90 transition-opacity">
        Contact Us
      </button>

      {/* Mobile hamburger */}
      <button
        className="md:hidden text-[#00161D]"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path
            d="M4 6h16M4 12h16M4 18h16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[91px] left-0 right-0 bg-white shadow-lg p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[#00161D] text-[15px] font-normal py-2 border-b border-gray-100"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button className="bg-[#A9C921] text-[#1E2600] text-[15px] font-semibold rounded-2xl px-5 py-3 mt-2">
            Contact Us
          </button>
        </div>
      )}
    </nav>
  );
}
