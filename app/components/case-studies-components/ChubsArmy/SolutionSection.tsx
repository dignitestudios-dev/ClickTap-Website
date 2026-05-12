"use client";

import { useEffect, useRef, useState } from "react";

const solutions = [
    {
        title: "Social-First Experience",
        description:
            "Our Mission is to build unified general intelligence that can generate, understand, and operate in the physical world.",
        activeBg: "bg-[#5E2F08]",
        inactiveBg: "bg-[#2a1100]",
        titleColor: "text-white",
        descColor: "text-[#FFFFFF]",
        borderColor: "border-[#6b3310]",
    },
    {
        title: "Social-First Experience",
        description:
            "Our Mission is to build unified general intelligence that can generate, understand, and operate in the physical world.",
        activeBg: "bg-[#714927]",
        inactiveBg: "bg-[#3d2008]",
        titleColor: "text-white",
        descColor: "text-[#FFFFFF]",
        borderColor: "border-[#8b4f20]",
    },
    {
        title: "AR-Based Pet Filters",
        description:
            "Our Mission is to build unified general intelligence that can generate, understand, and operate in the physical world.",
        activeBg: "bg-[#7D5B3F]",
        inactiveBg: "bg-[#4d2d0f]",
        titleColor: "text-white",
        descColor: "text-[#FFFFFF]",
        borderColor: "border-[#a06530]",
    },
    {
        title: "Gamification Via Admin Controls",
        description:
            "We implemented a reward-based system through daily and weekly challenges managed via the admin panel to drive user engagement and retention.",
        activeBg: "bg-[#D5B482]",
        inactiveBg: "bg-[#7a6038]",
        titleColor: "text-[#714927]",
        descColor: "text-[#714927]",
        borderColor: "border-[#d4b070]",
    },
];

export default function SolutionsSection() {
    const [activeIndex, setActiveIndex] = useState<number>(-1);
    const rowRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observers: IntersectionObserver[] = [];

        rowRefs.current.forEach((ref, index) => {
            if (!ref) return;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActiveIndex((prev) => Math.max(prev, index));
                        }
                    });
                },
                {
                    threshold: 0.4,
                    rootMargin: "0px 0px -60px 0px",
                }
            );

            observer.observe(ref);
            observers.push(observer);
        });

        return () => observers.forEach((obs) => obs.disconnect());
    }, []);

    return (
        <section className="min-h-screen bg-white flex flex-col items-center justify-center py-20 px-20">
            {/* Heading */}
            <h2 className="text-[66px] md:text-5xl font-light text-[#1a1a1a] mb-12 text-center tracking-tight">
                The <span className="font-bold">Solutions</span> We Offered
            </h2>

            {/* Cards Container */}
            <div className="w-full rounded-[16px] overflow-hidden border border-[#6b3310]/20 shadow-xl">
                {solutions.map((solution, index) => {
                    const isActive = index <= activeIndex;

                    return (
                        <div
                            key={index}
                            ref={(el) => {
                                rowRefs.current[index] = el;
                            }}
                            className={[
                                "relative flex flex-col h-auto md:h-[160px]  md:flex-row items-start md:items-start ",
                                "px-4 md:px-8 py-5 ",
                                "transition-all duration-700 ease-in-out",
                                isActive ? solution.activeBg : solution.inactiveBg,
                                index < solutions.length - 1
                                    ? `border-b ${solution.borderColor}`
                                    : "",
                            ].join(" ")}
                            style={{
                                transitionDelay: `${index * 80}ms`,
                            }}
                        >
                            {/* Active indicator bar */}
                            <div
                                className={[
                                    "absolute left-0 top-0 bottom-0 w-1 rounded-l-none transition-all duration-700",
                                    isActive ? "opacity-100 bg-white/30" : "opacity-0",
                                ].join(" ")}
                                style={{ transitionDelay: `${index * 80 + 200}ms` }}
                            />

                            {/* Title */}
                            <h3
                                className={[
                                    "w-full md:w-[38%] shrink-0 text-xl md:text-[36px] font-bold leading-snug",
                                    "transition-all duration-700",
                                    solution.titleColor,
                                    isActive
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-40 -translate-x-3",
                                ].join(" ")}
                                style={{ transitionDelay: `${index * 80 + 100}ms` }}
                            >
                                {solution.title}
                            </h3>

                            {/* Description */}
                            <p
                                className={[
                                    "text-sm md:text-[14px]  md:w-[368px] leading-relaxed",
                                    "transition-all duration-700",
                                    solution.descColor,
                                    isActive
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-30 translate-x-3",
                                ].join(" ")}
                                style={{ transitionDelay: `${index * 80 + 160}ms` }}
                            >
                                {solution.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}