"use client";

import { useEffect, useRef, useState } from "react";
import { MarqueeSection } from "./MarqueeSection";

const wireframes = [
    { id: 12 },
    { id: 13 },
    { id: 14 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
    { id: 11 },
    { id: 12 },
    { id: 13 },
    { id: 14 },
];

type ProductOutcomesProps = {
    title: React.ReactNode;
    description: string;
    stats: { label: string; value: string }[];
};

const ProductOutcomes = ({
    title,
    description,
    stats,
}: ProductOutcomesProps) => {
    const images = wireframes.map(
        (frame) => `/images/s${frame.id}.webp`
    );

    return (
        <section className="bg-white py-20 px-4 md:px-0 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="grid grid-cols-12 gap-0 mb-16">
                    <h2 className="text-[clamp(1.75rem,5vw,3rem)] col-span-12 md:col-span-4 leading-tight text-gray-900 mb-6 md:mb-0">
                        {title}
                    </h2>

                    <p className="text-[#00161D] col-span-12 md:col-span-8 text-[15px] leading-relaxed pt-2">
                        {description}
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 overflow-hidden border border-[#714927] rounded-[16px] bg-[#FFFDF9] md:grid-cols-3 mb-20">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            count={stat.value}
                            label={stat.label}
                            isLast={index === stats.length - 1}
                        />
                    ))}
                </div>
            </div>

            <MarqueeSection images={images} />
        </section>
    );
};

const StatCard = ({
    count,
    label,
    isLast,
}: {
    count: string;
    label: string;
    isLast?: boolean;
}) => {
    const [displayValue, setDisplayValue] = useState(0);

    const ref = useRef<HTMLDivElement | null>(null);
    const animated = useRef(false);

    const numericValue = parseInt(count.replace(/\D/g, ""));
    const suffix = count.replace(/[0-9]/g, "");

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated.current) {
                    animated.current = true;

                    let start = 0;

                    const duration = 2000;
                    const stepTime = 16;
                    const increment =
                        numericValue / (duration / stepTime);

                    const timer = setInterval(() => {
                        start += increment;

                        if (start >= numericValue) {
                            setDisplayValue(numericValue);
                            clearInterval(timer);
                        } else {
                            setDisplayValue(Math.floor(start));
                        }
                    }, stepTime);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [numericValue]);

    return (
        <div
            ref={ref}
            className={`p-10 flex flex-col justify-center bg-[#FFFDF9]
            ${!isLast ? "border-r border-[#714927]" : ""}
            `}
        >
            <h3 className="text-5xl font-bold text-[#8B5E3C] mb-4">
                {displayValue}
                {suffix}
            </h3>

            <p className="text-gray-500 text-sm font-medium">
                {label}
            </p>
        </div>
    );
};

export default ProductOutcomes;