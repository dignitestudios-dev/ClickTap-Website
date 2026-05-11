"use client";

import Image from "next/image";
import Lines from "../global/Lines";

type Props = {
  tagline: string;
  title: string | React.ReactNode;
  description: string;
  cta: any;
  children?: React.ReactNode;
}

export default function Hero({ tagline, title, description, cta, children }: Props) {
  return (
    <section className="relative bg-white w-full flex flex-col items-center  overflow-hidden" >

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
      <div className="relative z-10  mx-auto px-4 flex flex-col items-center text-center gap-4 mt-15">

        {/* Trust Badges Container */}
        {/* <div className="flex items-center gap-6 border bg-transparent border-[#F5F5F5] px-6 py-3 rounded-2xl  mb-4">
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

        {/* Main Title */}
        <div className="max-w-[1200px] ">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[80px] font-bold text-[#00161D] leading-[1.1] md:leading-[0.95] tracking-tight px-4">

            {title}

          </h1>
        </div>

        {/* Mission Statement */}
        <div className="max-w-[850px] mb-3">
          <p className="text-[16px] md:text-[18px] text-[#00161D] leading-relaxed font-medium px-6">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <button className="group relative z-20 bg-secondary hover:bg-[#01ace0] text-white pl-5 pr-3 py-3 rounded-[8px] flex items-center gap-6 transition-all active:scale-95 shadow-lg">
          <span className="font-semibold text-[15px]">{cta}</span>
          <Image src="/images/cta-button.png" alt="Arrow Right" width={30} height={30} />
        </button>

        <div className="relative mt-10 md:mt-0 px-4">
          <Image src="/images/lead-mob-hero-overlay.png" alt="lead-mob-hero-overlay.png" width={1300} height={1300} className="w-full h-auto absolute bottom-0 left-1/2 -translate-x-1/2 opacity-50 md:opacity-100" />
          <Image
            src="/images/hero-lead-mob.webp"
            alt="leading-mobile-app.png"
            width={952}
            height={800}
            className="relative z-[1] mx-auto w-full max-w-[500px] sm:max-w-[500px] md:max-w-[952px]"
          />
        </div>
      </div>
      {/* Bottom Blend Effect */}
      <div className="absolute bottom-0  left-0 w-full h-[50px] md:h-[250px] z-20 pointer-events-none">

        {/* Blur Layer */}
        <div className="absolute inset-0 mix-blend-darken " />

        {/* White Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1FCFF]/120 to-[#F1FCFF] backdrop-blur-1xl    " />
      </div>

    </section>
  );
}
