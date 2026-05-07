import React from 'react';
import Image from 'next/image';

const ArrowIcon = () => (
    <div className="flex h-7 w-7 items-center justify-center rounded-[12px] bg-[#01C2FE] text-white transition-transform group-hover/btn:-translate-y-1 group-hover/btn:translate-x-1">
        <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M5 19L19 5M19 5H9M19 5V15" />
        </svg>
    </div>
);

type Stat = {
    value: string;
    label: string;
    color: 'blue' | 'light' | 'white';
    image?: string;
};

type Props = {
    tagline: string;
    heading: React.ReactNode;
    paragraphs: string[];
    ctaText: string;
    stats: Stat[];
}

const AboutSection: React.FC<Props> = ({ tagline, heading, paragraphs, ctaText, stats }) => {
    return (
        <section className="overflow-hidden bg-[#F3FBFD] px-5 py-16 md:px-10 lg:px-20 lg:py-24">
            <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-14 lg:flex-row lg:items-start">

                {/* LEFT CONTENT */}
                <div className="w-full max-w-[540px] pt-4">
                    <span className="text-[16px] font-medium text-[#00161D]">
                        {tagline}
                    </span>

                    <h2 className="mt-5 text-[36px] leading-[1.1] text-[#00161D]">
                        {heading}
                    </h2>

                    {paragraphs.map((p, i) => (
                        <p key={i} className="mt-8 first:mt-8 mt-2 max-w-[520px] text-[17px] leading-[1.9] text-[#00161D]/80">
                            {p}
                        </p>
                    ))}


                    <button className="group/btn mt-5 flex items-center gap-6 rounded-[12px] border border-[#00161D] bg-white py-4 pl-6 pr-4 shadow-sm transition-all active:scale-95">
                        <span className="text-[16px] font-semibold text-[#00161D]">
                            {ctaText}
                        </span>

                        <ArrowIcon />
                    </button>
                </div>

                {/* RIGHT GRID */}
                <div className="w-full max-w-[760px]">
                    <div className="grid h-[650px] grid-cols-3 gap-5">
                        {stats.map((stat, index) => {
                            const isBlue = stat.color === 'blue';
                            const isLight = stat.color === 'light';
                            const isWhite = stat.color === 'white';

                            return (
                                <div key={index} className="flex flex-col gap-5">
                                    {/* STAT CARD */}
                                    <div className={`relative ${index === 1 ? 'flex-1 order-2' : 'h-[400px] order-1'} rounded-[30px] p-7 ${isBlue ? 'bg-[#01C2FE]' : isLight ? 'bg-[#DBF7FF]' : 'border border-[#00161D]/20 bg-white'}`}>
                                        <h3 className={`text-[68px] font-bold leading-none ${isBlue ? 'text-white' : 'text-[#00161D]'}`}>
                                            {stat.value}
                                        </h3>
                                        <p className={`absolute bottom-7 left-7 text-[20px] font-medium ${isBlue ? 'text-white' : 'text-[#00161D]'}`}>
                                            {stat.label}
                                        </p>
                                    </div>

                                    {/* IMAGE */}
                                    {stat.image && (
                                        <div className={`relative ${index === 1 ? 'h-[260px] order-1' : 'h-[230px] order-2'} overflow-hidden rounded-[30px]`}>
                                            <Image
                                                src={stat.image}
                                                alt={stat.label}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;