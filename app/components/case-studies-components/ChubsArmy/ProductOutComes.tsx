"use client";

import { useEffect, useRef, useState } from "react";
import { MarqueeSection as MarqueeSectionChubsArmy } from "./MarqueeSection";
import { MarqueeSection as MarqueeSectionLoveRestored } from "../love-stored/MarqueeSection";

type ProductOutcomesProps = {
    title: React.ReactNode;
    description: string;
    stats: { label: string; value: string, statsBg?: string, statsColor?: string, labelColor?: string, borderColor?: string }[];
    wireframes: any,
    loveRestored?: boolean
};

const ProductOutcomes = ({
    title,
    description,
    stats,
    wireframes,
    loveRestored
}: ProductOutcomesProps) => {
    const images = wireframes.map(
        (frame: any) => `/images/s${frame.id}.webp`
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
                <div className="grid grid-cols-1 overflow-hidden border-2 border-dashed border-[#B8832D] rounded-[16px] bg-[#FFFDF9] md:grid-cols-3 mb-20">
                    {stats.map((stat, index) => (
                        <StatCard
                            key={index}
                            count={stat.value}
                            label={stat.label}
                            isLast={index === stats.length - 1}
                            statsColor={stat?.statsColor}
                            statsBg={stat?.statsBg}
                            labelColor={stat?.labelColor}
                            borderColor={stat?.borderColor}
                        />
                    ))}
                </div>
            </div>

            {loveRestored ? <MarqueeSectionLoveRestored images={wireframes} /> : <MarqueeSectionChubsArmy images={images} />}
        </section>
    );
};

const StatCard = ({
    count,
    label,
    isLast,
    statsColor,
    statsBg,
    labelColor,
    borderColor,
}: {
    count: string;
    label: string;
    isLast?: boolean;
    statsColor?: string;
    statsBg?: string;
    labelColor?: string;
    borderColor?: string;
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
            className={`p-10 flex flex-col justify-center ${statsBg}
            ${!isLast ? `border-r ${borderColor}` : ""}
            `}
        >
            <h3 className={`text-5xl font-bold ${statsColor} mb-4`}>
                {displayValue}
                {suffix}
            </h3>

            <p className={`text-sm font-medium ${labelColor}`}>
                {label}
            </p>
        </div>
    );
};

export default ProductOutcomes;