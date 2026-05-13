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
    <section className="relative w-full  flex flex-col items-center pt-16 pb-12 overflow-hidden select-none">

      {/* Upper Content Wrapper */}
      <div className="relative z-10 w-full max-w-[1200px] px-4 flex flex-col items-center text-center">

        {/* Logo */}
        <div className="mb-6">
          <Image
            src="/images/consultant-rs.png"
            width={100}
            height={100}
            alt="Logo"
            className="object-contain"
          />
        </div>

        {/* Main Title */}
        <h1 className="max-w-[900px] text-4xl md:text-5xl lg:text-[64px] font-extrabold text-[#0D1B2A] leading-[1.1] tracking-tight mb-6">
          {title}
        </h1>

        {/* Subtitle / Description */}
        <p className="max-w-[780px] text-sm md:text-[15px] text-[#4A5568] leading-[1.6] font-normal mb-8 px-2">
          {description}
        </p>

        {/* Action Buttons (CTAs) */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-12">
          {/* iOS App Store Button */}
          <button className="h-[48px] w-[210px] bg-[#0A1128] text-white rounded-full flex items-center justify-center gap-2.5 font-medium text-[14px] hover:bg-opacity-90 active:scale-95 transition-all shadow-sm cursor-pointer">
            <Image src="/images/apple.webp" alt="Apple" width={16} height={16} className="brightness-100" />
            <span>Download for iPhone</span>
          </button>

          {/* Android Play Store Button */}
          <button className="h-[48px] w-[210px] bg-white border border-[#E2E8F0] text-[#101D2D] rounded-full flex items-center justify-center gap-2.5 font-medium text-[14px] hover:bg-gray-50 active:scale-95 transition-all shadow-sm cursor-pointer">
            <FaGooglePlay size={24} color="#101D2D" />
            <span>Download for Android</span>
          </button>
        </div>

        {/* Central Phone Mockup Showcase */}
        <div className="relative w-full -bottom-2 flex justify-center ">
          <Image
            src="/images/consultant-rus-hero.png"
            alt="Mobile App Preview"
            width={1120}
            height={520}
            className="object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.08)]"
            priority
          />
        </div>

        {/* Bottom Cards Row (Timeline, Scope, Sector) */}
        {details && details.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-[1100px]">
            {details.map((detail, index) => (
              <div
                key={index}
                className="bg-[#F1F3F5] rounded-[20px] p-5 flex items-center gap-4 text-left border border-[#E9ECEF]"
              >
                {/* Visual Anchor Mini-Thumbnail */}
                <div className="relative w-16 h-16 rounded-[12px] overflow-hidden flex-shrink-0 bg-gray-200">
                  <Image
                    src={detail.imageSrc}
                    alt={detail.label}
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Meta Labels Block */}
                <div className="flex flex-col min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6C757D] mb-0.5">
                    {detail.label}
                  </span>
                  <span className="text-[14px] font-bold text-[#212529] leading-tight line-clamp-2">
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
