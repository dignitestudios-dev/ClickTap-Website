"use client";

import Image from "next/image";

type Props = {
  tagline: string;
  title: string | React.ReactNode;
  description: string;
  cta: any;
  children?: React.ReactNode;
}

export default function Hero({ title, description }: Props) {
  return (
    <section className="relative bg-white w-full flex flex-col items-center  overflow-hidden" >
      {/* Hero Content */}
      <div className="relative z-10  mx-auto px-4 flex flex-col items-center text-center gap-4 mt-15">
        <Image src={"/images/chubs-army-logo.webp"} width={100} height={100} alt="Chubs Army Logo" />
        {/* Main Title */}
        <div className="max-w-[1200px] ">
          <h1 className="text-3xl md:text-5xl lg:text-[80px] font-bold text-[#00161D] leading-[0.95] tracking-tight">

            {title}

          </h1>
        </div>

        {/* Mission Statement */}
        <div className="max-w-[950px] mb-3">
          <p className="text-[15px] text-[#00161D]  leading-relaxed font-medium">
            {description}
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-4">
          <button className="h-[48px] w-[231px] group bg-[#7D4F28] justify-center text-white rounded-[16px] flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-lg">
            <Image src="/images/apple.webp" alt="Arrow Right" width={16} height={16} />
            <span className="font-medium text-[16px]">Download for Iphone</span>
          </button>
          <button className="h-[48px] w-[231px] group border border-[#7D4F28]  justify-center text-[#7D4F28] rounded-[16px] flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-lg">
            <Image src="/images/andriod.webp" alt="Arrow Right" width={16} height={16} />
            <span className="font-medium text-[16px]">Download for Android</span>
          </button>

        </div>
        <div className="relative">
          <Image
            src="/images/chubs-army-hero.webp"
            alt="web-app-dev.png"
            width={1200}
            height={600}
            className="relative z-[1] mt-4 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
