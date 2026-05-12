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
      <div className="w-full absolute top-10 z-0 h-[650px]">
        <Image
          src="/images/grid-frame.webp"
          alt="grid-frame"
          fill
          className="object-cover"
          priority
        />
      </div>
      {/* Hero Content */}
      <div className="relative z-10  mx-auto px-4 flex flex-col items-center text-center gap-4 mt-15">

        {/* Main Title */}
        <div className="max-w-[1200px] ">
          <h1 className="text-3xl md:text-5xl lg:text-[80px] font-bold text-[#00161D] leading-[1.2] tracking-tight">

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
        <button className="group bg-secondary hover:bg-[#01ace0] text-white pl-5 pr-3 py-3 rounded-[8px] flex items-center gap-6 transition-all active:scale-95 shadow-lg">
          <span className="font-semibold text-[15px]">{cta}</span>
          <Image src="/images/cta-button.png" alt="Arrow Right" width={30} height={30} />
        </button>

        <div >
          <Image src="/images/lead-mob-hero-overlay.png" alt="lead-mob-hero-overlay.png" width={1000} height={1000} className="w-[1000px] absolute  -bottom-10 left-1/2 -translate-x-1/2" />
          <Image
            src="/images/web-app-dev.webp"
            alt="web-app-dev.png"
            width={1100}
            height={800}
            className="relative z-[1]  mx-auto"
          />

        </div>
      </div>
      {/* Bottom Blend Effect */}
      <div className="absolute -bottom-5  left-0 w-full h-[50px] z-20 pointer-events-none">

        {/* Blur Layer */}
        <div className="absolute inset-0 mix-blend-darken " />

        {/* White Gradient Fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#F1FCFF]/70 to-[#F1FCFF] backdrop-blur-3xl    " />
      </div>

    </section>
  );
}
