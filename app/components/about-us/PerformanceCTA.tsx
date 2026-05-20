import Image from 'next/image';
import React from 'react';

type PerformanceCTAProps = {
    title: string | React.ReactNode;
    description: string;
    buttonText: string;
};

export default function PerformanceCTA({ title, description, buttonText }: PerformanceCTAProps) {
    return (
        <section className="w-full bg-[#00161D] px-6 py-10 flex justify-center relative overflow-hidden rounded-[32px]">
            {/* Background Glow Image - Positioned absolutely to the right with full height */}
            <div className="absolute right-0 top-0 h-full w-full sm:w-[50%] pointer-events-none z-0">
                <Image
                    src="/images/glow-frame.png"
                    alt="About Us CTA Glow Background"
                    fill
                    priority
                    className="object-cover hidden lg:block object-right"
                />
            </div>

            {/* Main Container - Keeps z-10 to stay above the background image */}
            <div className="max-w-[800px] w-full text-center flex flex-col items-center relative z-10">

                {/* Main Heading */}
                <h2 className="text-white text-[40px] lg:text-[60px] font-normal leading-[1.25] tracking-tight mb-6">
                    {title}
                </h2>

                {/* Subtext Paragraph */}
                <p className="text-[#a2b4bc] text-[14px] md:text-[15px] leading-[1.7] max-w-[660px] mb-10 font-normal">
                    {description}
                </p>

                {/* Call to Action Button */}
                <button className="flex items-center gap-4 bg-white text-[#02131a] pl-6 pr-2 py-2 rounded-xl font-semibold text-[15px] transition-all duration-300 hover:bg-neutral-100 group shadow-lg">
                    <span>{buttonText}</span>
                    <div className="w-9 h-9 bg-[#00c3e3] rounded-lg flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-45">
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                    </div>
                </button>

            </div>
        </section>

    );
}

