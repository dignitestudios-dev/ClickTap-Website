"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface CaseStudy {
    id: number;
    title: string;
    subtitle: string;
    description: string;
    tag: string;
    bgColor: string;
    accentColor: string;
    image: string;
    mockBg: string;
    link?: string;
}

const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "Chubb's Army",
        subtitle: "EdTech · Mobile App",
        description: "A calm, creative audio world for kids.",
        tag: "UX Design",
        bgColor: "from-slate-800 via-slate-700 to-slate-900",
        accentColor: "#f97316",
        image: "/images/chubbss.webp",
        mockBg: "bg-gradient-to-br from-purple-900 via-indigo-800 to-slate-900",
        link: "/case-studies/chubss-army"
    },
    {
        id: 2,
        title: "WingX",
        subtitle: "Dating · Social",
        description: "Redefining dating through friend-powered matchmaking.",
        tag: "Product Design",
        bgColor: "from-sky-300 via-blue-200 to-sky-400",
        accentColor: "#0ea5e9",
        image: "/wingx-mockup.png",
        mockBg: "bg-gradient-to-br from-sky-300 via-blue-200 to-cyan-300",
    },
    {
        id: 3,
        title: "FinFlow",
        subtitle: "Fintech · Dashboard",
        description: "Intelligent personal finance at a glance.",
        tag: "UI Design",
        bgColor: "from-emerald-800 via-teal-700 to-emerald-900",
        accentColor: "#10b981",
        image: "/finflow-mockup.png",
        mockBg: "bg-gradient-to-br from-emerald-700 via-teal-600 to-green-900",
    },
    {
        id: 4,
        title: "Orbitly",
        subtitle: "SaaS · Web App",
        description: "Simplifying team collaboration across time zones.",
        tag: "Branding",
        bgColor: "from-violet-900 via-purple-800 to-fuchsia-900",
        accentColor: "#a855f7",
        image: "/orbitly-mockup.png",
        mockBg: "bg-gradient-to-br from-violet-800 via-purple-700 to-fuchsia-800",
    },
];



export default function CaseStudiesCard() {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    return (
        <section className="min-h-screen py-24  font-sans">
            {/* Decorative blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-0 -right-40 w-96 h-96 rounded-full bg-[#01C2FE]/40 blur-[80px]" />
                <div className="absolute top-60 -left-20 w-72 h-72 rounded-full bg-[#01C2FE]/50 blur-[80px]" />
            </div>

            <div className="relative  mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-sm font-semibold tracking-[0.2em] uppercase text-[#A9C921] mb-3">
                        Portfolio
                    </p>
                    <h2
                        className="text-6xl md:text-7xl font-black text-slate-900 leading-none tracking-tight"
                        style={{ fontFamily: "'Georgia', serif" }}
                    >
                        Case Studies
                    </h2>
                    <div className="mt-4 w-16 h-1 bg-[#A9C921] mx-auto rounded-full" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {caseStudies.map((study) => {
                        const isHovered = hoveredId === study.id;

                        return (
                            <article
                                key={study.id}
                                className="group relative rounded-3xl overflow-hidden cursor-pointer"
                                style={{
                                    boxShadow: isHovered
                                        ? `0 32px 64px -12px ${study.accentColor}40`
                                        : "0 8px 32px -8px rgba(0,0,0,0.12)",
                                    transition: "box-shadow 0.5s ease",
                                }}
                                onMouseEnter={() => setHoveredId(study.id)}
                                onMouseLeave={() => setHoveredId(null)}
                            >
                                {/* Card image area */}
                                <div
                                    className={`relative h-80 bg-gradient-to-br ${study.bgColor} overflow-hidden flex items-center justify-center`}
                                >
                                    {/* Zoom overlay tint on hover */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-500 z-10" />

                                    {/* Background texture */}
                                    <div
                                        className="absolute inset-0 opacity-10"
                                        style={{
                                            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px),
                        radial-gradient(circle at 80% 20%, white 1px, transparent 1px)`,
                                            backgroundSize: "40px 40px",
                                        }}
                                    />

                                    {/* Phone mockup */}
                                    <div
                                        className="relative z-20 flex items-center justify-center w-full h-full"
                                        style={{
                                            transform: isHovered
                                                ? "scale(1.1)"
                                                : "scale(1)",
                                            transition:
                                                "transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1)",
                                        }}
                                    >
                                        <Image
                                            src={study.image}
                                            width={950}
                                            height={950}
                                            alt="image"
                                            className="w-[95%] max-w-[500px] object-contain"
                                        />
                                    </div>

                                    {/* Tag badge */}
                                    <div className="absolute top-4 right-4 z-30">
                                        <span
                                            className="text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full backdrop-blur-sm"
                                            style={{
                                                backgroundColor: `${study.accentColor}22`,
                                                color: study.id === 2 ? "#0369a1" : "white",
                                                border: `1px solid ${study.accentColor}44`,
                                            }}
                                        >
                                            {study.tag}
                                        </span>
                                    </div>
                                </div>

                                {/* Card footer */}
                                <div className="bg-white px-6 py-5 flex items-center justify-between">
                                    <div>
                                        <div className="flex items-center gap-2 mb-0.5">
                                            <h3 className="text-base font-black text-slate-900 tracking-tight">
                                                {study.title}
                                            </h3>
                                            <span className="text-[10px] text-slate-400 font-medium">
                                                · {study.subtitle}
                                            </span>
                                        </div>
                                        <p className="text-sm text-slate-500">
                                            {study.description}
                                        </p>
                                    </div>

                                    <Link
                                        href={study?.link || "#"}
                                        className="flex-shrink-0 ml-4 flex items-center gap-2 text-sm font-semibold group/btn"
                                        style={{ color: study.accentColor }}
                                    >
                                        <span className="group-hover/btn:underline underline-offset-2 transition-all">
                                            View Now
                                        </span>

                                        <span
                                            className="inline-flex items-center justify-center w-7 h-7 rounded-full text-white text-xs transition-transform group-hover/btn:translate-x-1"
                                            style={{ backgroundColor: study.accentColor }}
                                        >
                                            →
                                        </span>
                                    </Link>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-14">
                    <a
                        href="#"
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#A9C921] text-white rounded-full font-semibold text-sm tracking-wide hover:bg-slate-700 transition-colors duration-300"
                    >
                        View All Case Studies
                        <span className="text-lg">→</span>
                    </a>
                </div>
            </div>
        </section>
    );
}