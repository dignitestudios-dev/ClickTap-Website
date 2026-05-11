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
    <section className="relative w-full min-h-[600px] md:min-h-[1000px] bg-white overflow-hidden flex flex-col items-center">

      {/* Background Grid Image */}
      <div className="w-full absolute top-10 z-0 h-[400px] md:h-[650px]">
        <Image
          src="/images/grid-frame.png"
          alt="grid-frame"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mt-10 mx-auto px-4 flex flex-col items-center text-center gap-6">

        {/* Trust Badges Container */}
        {/* <div className="flex items-center gap-6 border border-[#F5F5F5] px-6 py-3 rounded-2xl mb-4 backdrop-blur-sm bg-white/20">
          <div className="flex items-center gap-2">
            <Image src="/images/trust-pilot.png" alt="trust-pilot.png" width={22} height={22} />
            <Image src="/images/clutch logo.png" alt="Clutch" width={18} height={18} />
          </div>

          <div className="w-[1px] h-6 bg-gray-200"></div>

          <div className="flex items-center gap-2">
            <Image src="/images/material-icon-theme_google.png" alt="Google" width={18} height={18} />
            <span className="font-bold text-[14px] text-[#00161D]">4.8</span>
          </div>

          <div className="w-[1px] h-6 bg-gray-200"></div>

          <div className="flex items-center gap-2">
            <span className="font-bold text-[14px] text-[#00161D]">
              200+ Apps Delivered
            </span>
          </div>
        </div> */}

        {/* Main Title */}
        <div className="max-w-[1200px]">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-bold text-[#00161D] leading-[1.1] md:leading-[0.95] tracking-tight">
            {title}
          </h1>
        </div>

        {/* Description */}
        <div className="max-w-[850px] mb-8">
          <p className="text-[16px] md:text-[18px] text-[#00161D] leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* CTA */}
        <button className="group bg-secondary hover:bg-[#01ace0] text-white pl-5 pr-3 py-3 rounded-[8px] flex items-center gap-6 transition-all active:scale-95 shadow-lg">
          <span className="font-semibold text-[15px]">{ctaText}</span>

          <Image
            src="/images/cta-button.png"
            alt="Arrow Right"
            width={30}
            height={30}
          />
        </button>

        {/* Hero Image */}
        <div className="relative z-10 w-full max-w-[300px] sm:max-w-[500px] md:max-w-[932px] px-4">
          <Image
            src="/images/mobile-app-dev-hero.png"
            alt="mobile-app-dev-hero.png"
            width={932}
            height={774}
            className="w-full h-auto"
          />
        </div>
      </div>
      {/* Bottom Blend Effect */}
      <div className="absolute bottom-0  left-0 w-full h-[30px] z-20 pointer-events-none">

        {/* Blur Layer */}
        <div className="absolute inset-0 backdrop-blur-[50px]" />

        {/* White Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1FCFF]/70 to-[#F1FCFF] backdrop-blur-md mix-blend-overlay" />
      </div>
    </section>
  );
}
