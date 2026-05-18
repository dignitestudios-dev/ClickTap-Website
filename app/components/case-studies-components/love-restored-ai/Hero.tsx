"use client";

import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";

type DetailItem = {
  label: string;
  value: string;
  imageSrc: string;
};

type Props = {
  title: string | React.ReactNode;
  description: string;
  details?: DetailItem[];
};

export default function Hero({ title, description, details }: Props) {
  return (
    <section className="relative w-full flex flex-col items-center pt-10 md:pt-16 lg:pt-20 pb-12 overflow-hidden">

      {/* Upper Content Wrapper */}
      <div className="relative z-10 w-full   flex flex-col items-center text-center">

        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <Image
            src="/images/love-stored-logo.png"
            width={80}
            height={80}
            alt="Logo"
            className="object-contain md:w-[100px] md:h-[100px]"
          />
        </div>

        {/* Main Title */}
        <h1 className="max-w-[1000px] text-[32px] sm:text-4xl md:text-6xl lg:text-[72px] font-extrabold text-[#0D1B2A] leading-[1.1] tracking-tight mb-6 px-2">
          {title}
        </h1>

        {/* Subtitle / Description */}
        <p className="max-w-[800px] text-sm sm:text-base md:text-lg text-[#4A5568] leading-[1.6] font-normal mb-8 md:mb-10 px-4">
          {description}
        </p>

        {/* Action Buttons (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {/* iOS App Store Button */}
          <Image src="/images/apple-button.png" alt="Apple" width={231} height={48} className="cursor-pointer active:scale-95 transition-all" />

          {/* Android Play Store Button */}
          <button className="h-[52px] w-full px-3 sm:w-[220px] bg-white border border-[#E2E8F0] text-[#101D2D] rounded-[16px] flex items-center justify-center gap-3 font-medium text-[15px] hover:bg-gray-50 active:scale-95 transition-all shadow-md cursor-pointer">
            <FaGooglePlay size={22} color="#101D2D" />
            <span>Download for Android</span>
          </button>
        </div>

        {/* Central Phone Mockup Showcase */}
        <div className="relative mt-10 md:mt-0 w-full  mx-auto  px-2">
          <Image
            src="/images/love-stored-hero.png"
            alt="Mobile App Preview"
            width={900}
            height={900}
            className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.08)]"
            priority
          />
        </div>

        {details && details.length > 0 && (
          <div className="relative w-full -mt-6 md:-mt-15 z-10 bg-[#0A0A0A]/5  backdrop-blur-[10px] border border-dashed border-[#B37C26] ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full divide-x divide-dashed divide-[rgba(179,124,38,0.6)]">
              {details.map((detail, index) => (
                <div
                  key={index}
                  className="px-8 py-6 md:px-10 md:py-7 flex flex-col gap-2 text-left"
                >
                  <span className="text-[11px] md:text-[12px] font-medium uppercase tracking-widest text-[#00161D]">
                    {detail.label}
                  </span>
                  <span className="text-[15px] md:text-[16px] font-bold leading-snug text-[#00161D]">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
