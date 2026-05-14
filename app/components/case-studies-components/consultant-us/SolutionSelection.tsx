"use client";
import React, { useState } from 'react';
import { CONSULTANT_US_CONTENT } from '@/app/constants/content';

export default function SolutionSection() {
    // Default state me koi card hovered nahi hai (sab light background me hain)
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);
    const solutions = CONSULTANT_US_CONTENT.solutions.items;

    return (
        <section className="flex w-full flex-col items-center gap-12 md:gap-16 bg-white px-6 md:px-12 lg:px-20 py-20 md:py-32">
            {/* Main Section Title */}
            <h2 className="font-['Inter_Tight'] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[66px] font-bold capitalize leading-tight text-[#00161D] text-center">
                The solution
            </h2>

            {/* Grid Container for Cards */}
            <div className="flex w-full flex-col lg:flex-row gap-6 md:gap-8 items-stretch justify-center max-w-[1280px] mx-auto">

                {/* Card 1: Structured Professional Profiles */}
                <div
                    onMouseEnter={() => setHoveredCard(1)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative isolate flex min-h-[400px] md:min-h-[450px] w-full flex-col items-center justify-between p-8 md:p-10 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${hoveredCard === 1 ? 'bg-[#101D2D] scale-[1.02] shadow-xl' : 'bg-[#F8F9FA] border border-gray-100'
                        }`}
                >
                    {/* Decorative Background Glow Vector */}
                    {hoveredCard === 1 && (
                        <div className="absolute left-[-42px] top-[197px] z-0 h-[349px] w-[191px] rounded-[30px] bg-[#01C2FE] opacity-30 blur-[75px]" />
                    )}

                    {/* Profile Dots Illustration Area */}
                    <div className="z-10 mx-auto flex h-[100px] w-[100px] items-center justify-center mb-8">
                        <div className="grid h-[80px] w-[80px] grid-cols-2 gap-2">
                            <div className="h-[36px] w-[36px] rounded-full bg-[#C19A4D]" />
                            <div className={`h-[36px] w-[36px] rounded-full transition-colors duration-300 ${hoveredCard === 1 ? 'bg-[#295386]' : 'bg-[#E9ECEF]'}`} />
                            <div className={`h-[36px] w-[36px] rounded-full transition-colors duration-300 ${hoveredCard === 1 ? 'bg-[#295386]' : 'bg-[#E9ECEF]'}`} />
                            <div className={`h-[36px] w-[36px] rounded-full transition-colors duration-300 ${hoveredCard === 1 ? 'bg-[#295386]' : 'bg-[#E9ECEF]'}`} />
                        </div>
                    </div>

                    {/* Card Text Content */}
                    <div className="z-20 w-full flex flex-col gap-4 text-center lg:text-left">
                        <h3 className={`font-['Inter_Tight'] text-[22px] md:text-2xl font-bold capitalize leading-tight transition-colors duration-300 ${hoveredCard === 1 ? 'text-white' : 'text-[#00161D]'
                            }`}>
                            {solutions[0].title}
                        </h3>
                        <p className={`font-['Inter_Tight'] text-sm md:text-base font-normal leading-relaxed transition-colors duration-300 ${hoveredCard === 1 ? 'text-gray-300' : 'text-[#4A5568]'
                            }`}>
                            {solutions[0].description}
                        </p>
                    </div>
                </div>

                {/* Card 2: Advanced Talent Filtering System */}
                <div
                    onMouseEnter={() => setHoveredCard(2)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative isolate flex min-h-[400px] md:min-h-[450px] w-full flex-col items-center justify-between p-8 md:p-10 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${hoveredCard === 2 ? 'bg-[#101D2D] scale-[1.02] shadow-xl' : 'bg-[#F8F9FA] border border-gray-100'
                        }`}
                >
                    {/* Decorative Background Glow Vector */}
                    {hoveredCard === 2 && (
                        <div className="absolute left-[-42px] top-[197px] z-0 h-[349px] w-[191px] rounded-[30px] bg-[#01C2FE] opacity-30 blur-[75px]" />
                    )}

                    {/* Dual Interface System Bars Graphic */}
                    <div className="z-10 mx-auto flex h-[100px] flex-row items-center gap-1.5 mb-8">
                        <div className="h-[80px] w-2.5 bg-[#C19A4D] rounded-full" />
                        <div className="h-[80px] w-2.5 bg-[#C19A4D] rounded-full" />
                        <div className="h-[80px] w-2.5 bg-[#C19A4D] rounded-full" />
                        <div className={`h-[80px] w-2.5 rounded-full transition-colors duration-300 ${hoveredCard === 2 ? 'bg-[#295386]' : 'bg-[#E9ECEF]'}`} />
                        <div className={`h-[80px] w-2.5 rounded-full transition-colors duration-300 ${hoveredCard === 2 ? 'bg-[#295386]' : 'bg-[#E9ECEF]'}`} />
                        <div className={`h-[80px] w-2.5 rounded-full transition-colors duration-300 ${hoveredCard === 2 ? 'bg-[#295386]' : 'bg-[#E9ECEF]'}`} />
                    </div>

                    {/* Card Text Content */}
                    <div className="z-20 w-full flex flex-col gap-4 text-center lg:text-left">
                        <h3 className={`font-['Inter_Tight'] text-[22px] md:text-2xl font-bold capitalize leading-tight transition-colors duration-300 ${hoveredCard === 2 ? 'text-white' : 'text-[#00161D]'
                            }`}>
                            {solutions[1].title}
                        </h3>
                        <p className={`font-['Inter_Tight'] text-sm md:text-base font-normal leading-relaxed transition-colors duration-300 ${hoveredCard === 2 ? 'text-gray-300' : 'text-[#4A5568]'
                            }`}>
                            {solutions[1].description}
                        </p>
                    </div>
                </div>

                {/* Card 3: Balanced UX with Dual Interfaces */}
                <div
                    onMouseEnter={() => setHoveredCard(3)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`relative isolate flex min-h-[400px] md:min-h-[450px] w-full flex-col items-center justify-between p-8 md:p-10 rounded-3xl overflow-hidden transition-all duration-500 cursor-pointer ${hoveredCard === 3 ? 'bg-[#101D2D] scale-[1.02] shadow-xl' : 'bg-[#F8F9FA] border border-gray-100'
                        }`}
                >
                    {/* Decorative Background Glow Vector */}
                    {hoveredCard === 3 && (
                        <div className="absolute left-[-42px] top-[197px] z-0 h-[349px] w-[191px] rounded-[30px] bg-[#01C2FE] opacity-30 blur-[75px]" />
                    )}

                    {/* Ring Filter Graphic */}
                    <div className="z-10 mx-auto h-[100px] w-[100px] mb-8">
                        <svg className="h-full w-full" viewBox="0 0 108 108">
                            <circle
                                cx="54" cy="54" r="46" fill="transparent"
                                stroke={hoveredCard === 3 ? '#295386' : '#E9ECEF'}
                                strokeWidth="10" className="transition-colors duration-300"
                            />
                            <circle
                                cx="54" cy="54" r="46" fill="transparent" stroke="#C19A4D" strokeWidth="10"
                                strokeDasharray="289" strokeDashoffset="216" strokeLinecap="round"
                                className="rotate-[-90deg] origin-center"
                            />
                        </svg>
                    </div>

                    {/* Card Text Content */}
                    <div className="z-20 w-full flex flex-col gap-4 text-center lg:text-left">
                        <h3 className={`font-['Inter_Tight'] text-[22px] md:text-2xl font-bold capitalize leading-tight transition-colors duration-300 ${hoveredCard === 3 ? 'text-white' : 'text-[#00161D]'
                            }`}>
                            {solutions[2].title}
                        </h3>
                        <p className={`font-['Inter_Tight'] text-sm md:text-base font-normal leading-relaxed transition-colors duration-300 ${hoveredCard === 3 ? 'text-gray-300' : 'text-[#4A5568]'
                            }`}>
                            {solutions[2].description}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}
