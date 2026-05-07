"use client";

import Image from "next/image";
import Lines from "../global/Lines";

type Props = {
    tagline: string;
    title: string;
    description: string;
    ctaText: string;
}

export default function Hero({ tagline, title, description, ctaText }: Props) {
  return (
    <section className="relative bg-white w-full min-h-[1000px] flex flex-col items-center py-10 pb-20 overflow-hidden">
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
          <span className="text-[20px] font-bold text-[#00161D]">{tagline}</span>
        </div>

        {/* Main Title */}
        <div className="max-w-[1200px] ">
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-[#00161D] leading-[0.95] tracking-tight">
            {title}
          </h1>
        </div>

        {/* Mission Statement */}
        <div className="max-w-[850px] mb-8">
          <p className="text-[18px] text-[#00161D]  leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <button className="group bg-secondary hover:bg-[#01ace0] text-white pl-5 pr-3 py-3 rounded-[8px] flex items-center gap-6 transition-all active:scale-95 shadow-lg">
          <span className="font-semibold text-[15px]">{ctaText}</span>
          <Image src="/images/cta-button.png" alt="Arrow Right" width={30} height={30} />
        </button>
        <div>
          <Image src="/images/mobile-app-dev-hero.png" alt="mobile-app-dev-hero.png" width={932} height={774} />
        </div>
      </div>


    </section>
  );
}
