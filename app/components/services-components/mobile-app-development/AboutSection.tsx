"use client"
import React, { useEffect, useRef } from 'react';

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

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

const Counter = ({ value }: { value: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));

    useEffect(() => {
        if (isInView) {
            const numericValue = parseInt(value.replace(/[^0-9]/g, '')) || 0;
            const controls = animate(count, numericValue, {
                duration: 5,
                ease: "easeOut"
            });
            return controls.stop;
        }
    }, [isInView, count, value]);

    const suffix = value.replace(/[0-9]/g, '');

    return (
        <span ref={ref}>
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    );
};

type Stat = {
    value: string;
    label: string;
    color: 'blue' | 'light' | 'white';
    image?: string;
};

type Props = {
    tagline: string;
    heading: React.ReactNode;
    paragraphs: React.ReactNode[];
    ctaText: string;
    stats: Stat[];
}

const AboutSection: React.FC<Props> = ({ tagline, heading, paragraphs, ctaText, stats }) => {
    return (
        <section className="overflow-hidden bg-[#F3FBFD] px-5 py-16 md:px-10 lg:px-20 lg:py-24">
            <div className="mx-auto flex w-full  flex-col items-center justify-between gap-10 lg:gap-14 lg:flex-row lg:items-start">

                {/* LEFT CONTENT */}
                <div className="w-full lg:flex-1  pt-4">
                    <span className="text-[16px] font-medium text-[#00161D]">
                        {tagline}
                    </span>

                    <h2 className="mt-5 text-3xl md:text-[36px] leading-[1.1] text-[#00161D]">
                        {heading}
                    </h2>

                    {paragraphs.map((p, i) => (
                        <p key={i} className="mt-8 text-[17px] leading-[1.9] text-[#00161D]/80">
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
                <div className="w-full lg:flex-shrink-0 lg:w-[55%] xl:w-[760px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:h-[650px]">
                        {stats.map((stat, index) => {
                            const isBlue = stat.color === 'blue';
                            const isLight = stat.color === 'light';
                            const isMiddle = index === 1;
                            const isLast = index === stats.length - 1;

                            return (
                                <div
                                    key={index}
                                    className={[
                                        'flex flex-col gap-4 sm:gap-5',
                                        isLast ? 'sm:col-span-2 lg:col-span-1' : '',
                                        'lg:h-full',
                                    ].join(' ')}
                                >
                                    {/* STAT CARD */}
                                    <div
                                        className={[
                                            'relative rounded-[24px] sm:rounded-[30px] p-5 sm:p-7',
                                            isMiddle
                                                ? 'h-[200px] sm:h-[220px] lg:h-auto lg:flex-1 lg:order-2'
                                                : 'h-[240px] sm:h-[320px] lg:h-[400px] lg:order-1',
                                            isBlue
                                                ? 'bg-[#01C2FE]'
                                                : isLight
                                                    ? 'bg-[#DBF7FF]'
                                                    : 'border border-[#00161D]/20 bg-white',
                                        ].join(' ')}
                                    >
                                        <h3
                                            className={[
                                                'font-bold leading-none',
                                                'text-[44px] sm:text-5xl lg:text-[68px]',
                                                isBlue ? 'text-white' : 'text-[#00161D]',
                                            ].join(' ')}
                                        >
                                            <Counter value={stat.value} />
                                        </h3>
                                        <p
                                            className={[
                                                'absolute bottom-5 sm:bottom-7 left-5 sm:left-7 font-medium',
                                                'text-base sm:text-[18px] lg:text-[20px]',
                                                isBlue ? 'text-white' : 'text-[#00161D]',
                                            ].join(' ')}
                                        >
                                            {stat.label}
                                        </p>
                                    </div>

                                    {/* IMAGE */}
                                    {stat.image && (
                                        <div
                                            className={[
                                                'relative overflow-hidden rounded-[24px] sm:rounded-[30px]',
                                                isMiddle
                                                    ? 'h-[180px] sm:h-[220px] lg:h-[260px] lg:order-1'
                                                    : 'h-[160px] sm:h-[200px] lg:h-[230px] lg:order-2',
                                            ].join(' ')}
                                        >
                                            <img
                                                src={stat.image}
                                                alt={stat.label}
                                                className="object-cover w-full h-full"
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