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
      <div className="relative z-10 w-full max-w-[1200px] px-4 sm:px-6 md:px-8 flex flex-col items-center text-center">

        {/* Logo */}
        <div className="mb-6 md:mb-8">
          <Image
            src="/images/consultant-rs.png"
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
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12 md:mb-16">
          {/* iOS App Store Button */}
          <button className="h-[52px] w-full px-3 sm:w-[220px] bg-[#0A1128] text-white rounded-full flex items-center justify-center gap-3 font-medium text-[15px] hover:bg-opacity-90 active:scale-95 transition-all shadow-md cursor-pointer">
            <Image src="/images/apple.webp" alt="Apple" width={18} height={18} className="brightness-100" />
            <span>Download for iPhone</span>
          </button>

          {/* Android Play Store Button */}
          <button className="h-[52px] w-full px-3 sm:w-[220px] bg-white border border-[#E2E8F0] text-[#101D2D] rounded-full flex items-center justify-center gap-3 font-medium text-[15px] hover:bg-gray-50 active:scale-95 transition-all shadow-md cursor-pointer">
            <FaGooglePlay size={22} color="#101D2D" />
            <span>Download for Android</span>
          </button>
        </div>

        {/* Central Phone Mockup Showcase */}
        <div className="relative w-full max-w-[1120px] mx-auto  px-2">
          <Image
            src="/images/consultant-rus-hero.png"
            alt="Mobile App Preview"
            width={1120}
            height={520}
            className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.08)]"
            priority
          />
        </div>

        {/* Bottom Cards Row (Timeline, Scope, Sector) */}
        {details && details.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-[1100px]">
            {details.map((detail, index) => (
              <div
                key={index}
                className="bg-[#F8F9FA] rounded-[24px] p-5 md:p-6 flex items-center gap-4 text-left border border-[#E9ECEF] hover:shadow-md transition-shadow duration-300"
              >
                {/* Visual Anchor Mini-Thumbnail */}
                <div className="relative w-14 h-14 md:w-16 md:h-16 rounded-[16px] overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-100">
                  <Image
                    src={detail.imageSrc}
                    alt={detail.label}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Meta Labels Block */}
                <div className="flex flex-col min-w-0">
                  <span className="text-[10px] md:text-[11px] font-semibold uppercase tracking-wider text-[#6C757D] mb-1">
                    {detail.label}
                  </span>
                  <span className="text-[15px] md:text-[16px] font-bold text-[#212529] leading-tight line-clamp-2">
                    {detail.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
