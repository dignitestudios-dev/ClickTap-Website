"use client";
import { useState } from "react";
import { FAQItem } from "@/types";

const faqs: FAQItem[] = [
  {
    number: "01",
    question: "What type of projects does ClickTap Solutions take?",
    answer:
      "The projects can be of various types. They can range from early stage ideas to fully developed digital products. Some clients would just come with just a concept, while others projects need improvements to an existing one.",
    isOpen: true,
  },
  {
    number: "02",
    question: "What’s the entire process of getting started with ClickTap Solutions?",
    answer:
      "We would usually start with an initial conversation where you share your idea and expectations. Then the team would help clarify the scope and align everything before development begins.",
  },
  {
    number: "03",
    question: "Does ClickTap Solutions work with startups or just established companies?",
    answer:
      "Usually both. The team would work with early stage startups as well as established companies. The approach we use adapts based on your team size, experience, and internal processes.",
  },
  {
    number: "04",
    question: "How long does a project at your company usually take?",
    answer:
      "Project timelines literally depend on scope, complexity, and requirements. Once everything is clear, the team will provide you with a detailed timeline with key milestones so you can track progress more easily.",
  },
  {
    number: "05",
    question: "Do we need everything figured out before reaching out?",
    answer:
      "Of course not. Many projects start with open questions and a lot of confusion. A rough idea is enough to get started, and the rest, we’ll help you refine and shape the best solution.",
  },
];

function FAQItemComponent({ faq }: { faq: FAQItem }) {
  const [open, setOpen] = useState(faq.isOpen ?? false);

  return (
    <div
      className={`w-full rounded-3xl ${open ? "bg-white p-8 gap-3 flex flex-col" : "border-b border-[#DCDCDC] p-8"}`}
    >
      <div
        className="flex items-center gap-8 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[#00161D] font-medium text-[32px] leading-[100%] w-10 flex-shrink-0">
          {faq.number}
        </span>
        <div className="flex items-center justify-between flex-1 gap-4">
          <span className="text-[#00161D] font-medium text-lg leading-[22px]">
            {faq.question}
          </span>
          <div className="w-8 h-8 bg-white border border-[#F1F1F1] rounded-full flex items-center justify-center flex-shrink-0">
            {open ? (
              <div className="w-4 h-[2px] bg-[#A9C921]" />
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="#00161D" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            )}
          </div>
        </div>
      </div>
      {open && (
        <p className="text-[#00161D] font-light text-[15px] leading-[18px] ml-[72px]">
          {faq.answer}
        </p>
      )}
    </div>
  );
}

export default function FAQs() {
  return (
    <section id="faqs" className="w-full relative bg-[#F1FCFF] pt-20 pb-48  relative  isolate">
      {/* Decorative squares */}
      <div className="relative pointer-events-none">
        <img src="/images/faq-sqaure.png" alt="faq-sqaure.png" className="absolute -top-22 left-0 w-[450px]" />
      </div>

      <div className="grid grid-cols-2 px-20 ">
        {/* Left heading */}
        <div className="flex relative mt-20 z-10 flex-col gap-2 w-full  flex-shrink-0">
          <p className="text-[#00161D] text-[16px] font-semibold uppercase tracking-wider">Common Questions</p>
          <h2 className="text-[#00161D]  text-[50px] md:text-[66px] leading-tight">
            <span className="font-bold"> Questions</span> You Might <br /> Have in Your Mind
          </h2>
          <p className="text-[#00161D] text-[18px] leading-[28px] opacity-70 mt-4">
            We understand that starting a new project can be overwhelming. Here are some answers to common questions to help you get started.
          </p>
        </div>

        {/* Right FAQs */}
        <div className="flex-1 flex flex-col">
          {faqs.map((faq) => (
            <FAQItemComponent key={faq.number} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}
