"use client";

import Image from "next/image";
import Lines from "../global/Lines";

type Props = {
  tagline: string;
  title: string | React.ReactNode;
  description: string;
  cta: string;
  children?: React.ReactNode;
}

export default function Hero({ tagline, title, description, cta, children }: Props) {
  return (
    <section className="relative w-full flex flex-col items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg-1.webp"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      {/* Hero Content */}
      <div className="relative z-10 mt-10  mx-auto px-4 flex flex-col items-center text-center gap-4">

        {/* Trust Badges Container */}
        {/* <div className="flex items-center gap-2 border bg-transparent border-[#F5F5F5] px-6 py-3 rounded-2xl  mb-4">
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
        </div> */}

        {/* Small Tagline */}
        <div className="bg-[#DBF7FF] px-6 md:px-10 py-2 md:py-3 mt-6 md:mt-10 rounded-full ">
          <span className="text-[16px] md:text-[20px] font-bold text-[#00161D]">  {tagline}</span>
        </div>

        {/* Main Title */}
        <div className="max-w-[1200px] ">
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] font-bold text-[#00161D] leading-[1.1] md:leading-[0.95] tracking-tight">

            {title}

          </h1>
        </div>

        {/* Mission Statement */}
        <div className="max-w-[850px] mb-8">
          <p className="text-[16px] md:text-[18px] text-[#00161D] leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <button className="group bg-secondary hover:bg-[#01ace0] text-white pl-5 pr-3 py-3 rounded-[8px] flex items-center gap-6 transition-all active:scale-95 shadow-lg">
          <span className="font-semibold text-[15px]">{cta}</span>
          <Image src="/images/cta-button.png" alt="Arrow Right" width={30} height={30} />
        </button>

        {children}

        {/* Line Animation Integration */}
        <div className="w-[330px] -mt-10 md:mt-0 md:w-full max-w-[400px] md:max-w-[500px] lg:max-w-[900px]  pointer-events-none">
          <Lines />
        </div>

        <div className="mb-4" >
          <Image src="/images/logo-icon.png" alt="logo-icon" width={32} height={32} />
        </div>
        <div className="absolute -bottom-1  left-0 w-full h-[30px] z-20 pointer-events-none">

          {/* Blur Layer */}
          <div className="absolute inset-0 backdrop-blur-[60px]" />

          {/* White Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1FCFF]/70 to-[#F1FCFF] backdrop-blur-md mix-blend-overlay" />
        </div>
      </div>


    </section>
  );
}
