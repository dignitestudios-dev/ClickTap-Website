"use client";

import { useState } from "react";
import Image from "next/image";
import { FAQItem } from "@/types";

type FAQ = {
  question: string;
  answer: string;
  number?: string;
};

type Props = {
  heading: React.ReactNode;
  description: string;
  faqs: FAQ[];
}

type FAQItemProps = {
  faq: FAQ;
  index: number;
  open: boolean;
  onToggle: () => void;
};

function FAQItemComponent({ faq, index, open, onToggle }: FAQItemProps) {
  const displayMobile = (index + 1).toString().padStart(2, "0");
  const displayNumber = faq.number || displayMobile;

  return (
    <div
      className={`w-full rounded-3xl transition-all duration-300 ${open
        ? "flex flex-col gap-3 bg-white p-8"
        : "border-b border-[#DCDCDC] p-8"
        }`}
    >
      <div
        className="flex cursor-pointer items-center gap-8"
        onClick={onToggle}
      >
        <span className="w-10 flex-shrink-0 text-[32px] font-medium leading-[100%] text-[#00161D]">
          {displayNumber}
        </span>

        <div className="flex flex-1 items-center justify-between gap-4">
          <span className="text-lg font-medium leading-[22px] text-[#00161D]">
            {faq.question}
          </span>

          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-[#F1F1F1] bg-white">
            {open ? (
              <div className="h-[2px] w-4 bg-[#A9C921]" />
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M8 3v10M3 8h10"
                  stroke="#00161D"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </div>
        </div>
      </div>

      {open && (
        <p className="ml-[72px] text-[15px] font-light leading-[28px] text-[#00161D] opacity-70">
          {faq.answer}
        </p>
      )}
    </div>
  );
}

export default function FAQs({ heading, description, faqs }: Props) {
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenFAQIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section
      id="faqs"
      className="relative isolate w-full bg-[#F1FCFF] pb-24 md:pb-48 pt-16 md:pt-20"
    >
      {/* Decorative squares */}
      <div className="pointer-events-none relative h-20">
        <Image
          src="/images/faq-sqaure.png"
          alt="faq-sqaure"
          width={450}
          height={450}
          className="absolute -top-22 left-0 w-[450px]"
        />
      </div>

      <div className="grid grid-cols-1 relative z-10 lg:grid-cols-2 gap-12 lg:gap-20 px-6 sm:px-10 md:px-20">
        {/* Left heading */}
        <div className=" mt-20 flex w-full flex-col gap-2">
          <p className="text-[16px] font-semibold uppercase tracking-wider text-[#00161D]">
            Common Questions
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-[66px] leading-tight text-[#00161D]">
            {heading}
          </h2>

          <p className="mt-4 text-[16px] md:text-[18px] leading-[28px] text-[#00161D] opacity-70">
            {description}
          </p>
        </div>

        {/* Right FAQs */}
        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItemComponent
              key={index}
              faq={faq}
              index={index}
              open={openFAQIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}