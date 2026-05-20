"use client";

import Image from "next/image";

type Props = {
  tagline: string;
  title: string | React.ReactNode;
  description: string;
  cta: any;
  details?: { label: string; value: string }[];
  children?: React.ReactNode;
};

export default function Hero({ title, description, details }: Props) {
 
  return (
    <section className="relative bg-white w-full flex flex-col items-center  overflow-hidden">
      {/* Hero Content */}
      <div className="relative z-10  mx-auto px-4 flex flex-col items-center text-center gap-4 mt-15">
        <Image
          src={"/images/chubs-army-logo.webp"}
          width={100}
          height={100}
          alt="Chubs Army Logo"
        />
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

        {/* Project Details (Timeline, Sector, Scope) */}
        {/* {details && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1100px] my-8 py-8 border-y border-gray-100">
            {details.map((detail, index) => (
              <div key={index} className="flex flex-col gap-2">
                <span className="text-[12px] font-bold uppercase tracking-widest text-[#7D4F28]">{detail.label}</span>
                <span className="text-[15px] font-medium text-[#00161D]">{detail.value}</span>
              </div>
            ))}
          </div>
        )} */}

        {/* CTA Button */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button
            onClick={() =>
              window.open(
                "https://apps.apple.com/us/app/chubbs-army/id6756720892",
                "_blank",
              )
            }
            className="h-[48px] w-[231px] group bg-[#7D4F28] justify-center text-white rounded-[16px] flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-lg"
          >
            <Image
              src="/images/apple.webp"
              alt="Apple"
              width={16}
              height={16}
            />
            <span className="font-medium text-[16px]">Download for Iphone</span>
          </button>

          <button
            onClick={() =>
              window.open(
                "https://play.google.com/store/apps/details?id=com.cts.chubbsarmy",
                "_blank",
              )
            }
            className="h-[48px] w-[231px] group border border-[#7D4F28] justify-center text-[#7D4F28] rounded-[16px] flex items-center gap-2 cursor-pointer transition-all active:scale-95 shadow-lg"
          >
            <Image
              src="/images/andriod.webp"
              alt="Android"
              width={16}
              height={16}
            />
            <span className="font-medium text-[16px]">
              Download for Android
            </span>
          </button>
        </div>
        <div className="relative">
          <Image
            src="/images/chubs-army-hero.webp"
            alt="web-app-dev.png"
            width={1300}
            height={600}
            className="relative z-[1] mt-4 mx-auto"
          />
        </div>
      </div>
    </section>
  );
}
