"use client";

import Image from "next/image";

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
      <div className="w-full absolute top-10 z-0">
        <img
          src="/images/grid-frame.png"
          alt="grid-frame"
          className="h-[650px] w-full"
        />
      </div>
      {/* Hero Content */}
      <div className="relative z-10  mx-auto px-4 flex flex-col items-center text-center gap-6">

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
        <div className="max-w-[1200px] mt-10 ">
          <h1 className="text-5xl md:text-7xl lg:text-[100px] font-bold text-[#00161D] leading-[0.95] tracking-tight">

            {title}

          </h1>
        </div>

        {/* Mission Statement */}
        <div className="max-w-[850px] mb-3">
          <p className="text-[18px] text-[#00161D]  leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <button className="group bg-secondary mb-10 hover:bg-[#01ace0] text-white pl-5 pr-3 py-3 rounded-[8px] flex items-center gap-6 transition-all active:scale-95 shadow-lg">
          <span className="font-semibold text-[15px]">{cta}</span>
          <Image src="/images/cta-button.png" alt="Arrow Right" width={30} height={30} />
        </button>

        <div >
          <Image src="/images/lead-mob-hero-overlay.png" alt="lead-mob-hero-overlay.png" width={1300} height={1300} className="w-[1300px] absolute  bottom-24 left-1/2 -translate-x-1/2" />
          <Image
            src="/images/lead-mob-bg.png"
            alt="leading-mobile-app.png"
            width={550}
            height={701}
            className="relative z-[1] bottom-10 mx-auto"
          />

        </div>
      </div>
      {/* Bottom Blend Effect */}
      <div className="absolute bottom-0  left-0 w-full h-[170px] z-20 pointer-events-none">

        {/* Blur Layer */}
        <div className="absolute inset-0 mix-blend-darken " />

        {/* White Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1FCFF]/120 to-[#F1FCFF] backdrop-blur-1xl    " />
      </div>

    </section>
  );
}
