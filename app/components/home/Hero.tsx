"use client";

import Image from "next/image";
import Lines from "../global/Lines";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[1000px] flex flex-col items-center py-10 pb-20 overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-6">

        {/* Trust Badges Container */}
        <div className="flex items-center gap-6 border bg-transparent border-[#F5F5F5] px-6 py-3 rounded-2xl  mb-4">
          <div className="flex items-center gap-2">
            <Image src="/images/trust-pilot.png" alt="trust-pilot.png" width={22} height={22} />
            <Image src="/images/clutch logo.png" alt="Clutch" width={18} height={18} />
            <Image src="/images/Vector (3).svg" alt="Star" width={12} height={12} className="hidden" />

          </div>
          <div className="w-[1px] h-6 bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <Image src="/images/material-icon-theme_google.png" alt="Google" width={18} height={18} />
            <span className="font-bold text-[14px] text-[#00161D]">4.8</span>
          </div>
          <div className="w-[1px] h-6 bg-gray-200"></div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-[14px] text-[#00161D]">200+ Apps Delivered</span>
          </div>
        </div>

        {/* Small Tagline */}
        <div className="bg-[#DBF7FF] px-10 py-3 rounded-full mb-2">
          <span className="text-[20px] font-bold text-[#00161D]">  Ready to build your mobile app?</span>
        </div>

        {/* Main Title */}
        <div className="max-w-[1200px] ">
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-[#00161D] leading-[0.95] tracking-tight">

            You’ve found the right development team.

          </h1>
        </div>

        {/* Mission Statement */}
        <div className="max-w-[850px] mb-8">
          <p className="text-[18px] text-[#00161D]  leading-relaxed font-medium">
            We are the team that focuses on creating smooth mobile experiences that feel fast and reliable. Every swipe and interaction is built with purpose because a great mobile app feels effortless and offer experiences that users remember.
          </p>
        </div>

        {/* CTA Button */}
        <button className="group bg-secondary hover:bg-[#01ace0] text-white pl-5 pr-3 py-3 rounded-[8px] flex items-center gap-6 transition-all active:scale-95 shadow-lg">
          <span className="font-semibold text-[15px]">Share Your Idea with us</span>
          <Image src="/images/cta-button.png" alt="Arrow Right" width={30} height={30} />
        </button>

        {/* Tech Stack Icons - Bottom of Hero */}
        <div className="flex items-center gap-14   mt-12  hover:grayscale-0 transition-all">
          <Image src="/images/andriod-icon.png" alt="Android" width={45} height={45} />
          <Image src="/images/mdi_react.png" alt="React" width={45} height={45} />
          <Image src="/images/akar-icons_node-fill.png" alt="Node" width={45} height={45} />
          <Image src="/images/fa6-brands_aws.png" alt="AWS" width={45} height={45} />
          <Image src="/images/material-symbols_flutter.png" alt="Flutter" width={45} height={45} />
          <Image src="/images/material-icon-theme_html.png" alt="HTML5" width={45} height={45} />
        </div>

        {/* Line Animation Integration */}
        <div className="w-full max-w-[900px] -mt-5 pointer-events-none">
          <Lines />
        </div>

        <div >
          <Image src="/images/logo-icon.png" alt="logo-icon" width={32} height={32} />
        </div>
      </div>


    </section>
  );
}
