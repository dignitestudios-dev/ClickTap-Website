'use client';

import React, { useEffect, useRef, useState } from 'react';
import { LOVE_STORED_CONTENT } from '@/app/constants/content';
import Image from 'next/image';

interface WorkflowStep {
    id: number;
    stepNumber: number;
    phaseTitle: string;
    description: string;
    position: 'top' | 'bottom';
    heartPosition: 'top-left' | 'top-right' | 'bottom-right';
}

export default function WorkflowTimeline() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visibleCards, setVisibleCards] = useState<boolean[]>([false, false, false, false]);

    const steps: WorkflowStep[] = [
        {
            id: 1,
            stepNumber: 1,
            phaseTitle: LOVE_STORED_CONTENT.workflow.items[0].title,
            description: LOVE_STORED_CONTENT.workflow.items[0].description,
            position: 'top',
            heartPosition: 'top-left'
        },
        {
            id: 2,
            stepNumber: 2,
            phaseTitle: LOVE_STORED_CONTENT.workflow.items[1].title,
            description: LOVE_STORED_CONTENT.workflow.items[1].description,
            position: 'bottom',
            heartPosition: 'top-right'
        },
        {
            id: 3,
            stepNumber: 3,
            phaseTitle: LOVE_STORED_CONTENT.workflow.items[2].title,
            description: LOVE_STORED_CONTENT.workflow.items[2].description,
            position: 'top',
            heartPosition: 'top-left'
        },
        {
            id: 4,
            stepNumber: 4,
            phaseTitle: "Integration & Launch",
            description: "Connecting systems and optimizing performance for final deployment.",
            position: 'bottom',
            heartPosition: 'top-right'
        }
    ];

    const stepBgColors = ['bg-[#4F4F4F]', 'bg-[#393939]', 'bg-[#262626]', 'bg-black'];

    // Stagger delays per card (ms)
    const staggerDelays = [0, 200, 400, 600];

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Fire cards one by one with staggered timeouts
                        steps.forEach((_, i) => {
                            setTimeout(() => {
                                setVisibleCards((prev) => {
                                    const next = [...prev];
                                    next[i] = true;
                                    return next;
                                });
                            }, staggerDelays[i]);
                        });
                        // Once triggered, stop observing
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-white py-16 md:py-20 lg:py-[100px] px-4 sm:px-6 md:px-10 lg:px-[80px] w-full max-w-[1440px] mx-auto relative flex flex-col items-center gap-10 md:gap-12 lg:gap-[50px] overflow-hidden select-none"
        >
            {/* Section Title */}
            <h2 className="w-full max-w-[800px] font-['Inter_Tight',sans-serif] font-bold text-[32px] sm:text-[40px] md:text-[52px] lg:text-[66px] leading-tight text-center capitalize text-[#00161D] tracking-tight">
                {LOVE_STORED_CONTENT.workflow.title}
            </h2>

            {/* ─── MOBILE / TABLET: Vertical Stacked Layout (hidden on lg+) ─── */}
            <div className="flex flex-col w-full max-w-[600px] gap-0 lg:hidden">
                {steps.map((step, index) => (
                    <div key={step.id} className="flex flex-row items-stretch gap-4">

                        {/* Left: Step indicator + connector line */}
                        <div className="flex flex-col items-center flex-shrink-0">
                            {/* Step badge — slides in from left */}
                            <div
                                className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0 ${stepBgColors[index]}
                                    transition-all duration-500 ease-out
                                    ${visibleCards[index]
                                        ? 'opacity-100 translate-x-0'
                                        : 'opacity-0 -translate-x-6'
                                    }`}
                            >
                                <span className="font-['Inter_Tight',sans-serif] font-bold text-xs sm:text-sm text-white">
                                    {step.stepNumber}
                                </span>
                            </div>
                            {/* Vertical connector */}
                            {index < steps.length - 1 && (
                                <div className="w-[2px] flex-1 min-h-[24px] bg-gradient-to-b from-gray-400 to-gray-200 my-1" />
                            )}
                        </div>

                        {/* Right: Card — fades + slides up */}
                        <div
                            className={`relative flex-1 bg-[#fdfdfd] text-black p-4 sm:p-5 rounded-2xl border border-gray-100 shadow-sm mb-4 group hover:bg-black hover:text-white hover:shadow-xl cursor-pointer
                                transition-all duration-500 ease-out
                                ${visibleCards[index]
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-8'
                                }`}
                        >
                            {/* Decorative heart accent */}
                            <div className={`absolute w-8 h-8 sm:w-10 sm:h-10 pointer-events-none transition-transform duration-300 group-hover:scale-110 -rotate-[15deg] ${step.heartPosition === 'top-left' ? '-top-3 -left-2' : '-top-3 -right-2'
                                }`}>
                                <Image src="/images/center.png" alt="Decorative Accent" fill className="object-contain" />
                            </div>
                            <h3 className="font-['Inter_Tight',sans-serif] text-sm sm:text-base font-bold mb-1.5 text-center">
                                {step.phaseTitle}
                            </h3>
                            <p className="font-['Inter_Tight',sans-serif] text-[11px] sm:text-xs text-gray-500 text-center leading-relaxed group-hover:text-gray-300 transition-colors">
                                {step.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            {/* ─── DESKTOP: Horizontal Timeline Layout (hidden below lg) ─── */}
            <div className="hidden lg:block relative w-full max-w-[1280px] mt-44 mb-44 z-10">

                {/* Central Track — slides in from bottom as a whole */}
                <div
                    className={`w-full h-[70px] rounded-[64px] flex items-start p-0 overflow-hidden shadow-sm relative z-5
                        transition-all duration-700 ease-out
                        ${visibleCards[0] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                >
                    {/* Step 1 */}
                    <div className="flex-1 h-full flex flex-col justify-between items-center py-[25px] px-[20px] bg-[#4F4F4F] border-r border-white/30 backdrop-blur-[25px]">
                        <span className="font-['Inter_Tight',sans-serif] font-bold text-[18px] leading-[26px] text-center capitalize text-white">Step 1</span>
                    </div>
                    {/* Step 2 */}
                    <div className="flex-1 h-full flex flex-col justify-between items-center py-[25px] px-[20px] bg-[#393939] border-r border-white/30 backdrop-blur-[25px]">
                        <span className="font-['Inter_Tight',sans-serif] font-bold text-[18px] leading-[26px] text-center capitalize text-white">Step 2</span>
                    </div>
                    {/* Step 3 */}
                    <div className="flex-1 h-full flex flex-col justify-between items-center py-[25px] px-[20px] bg-[#262626] border-r border-white/30 backdrop-blur-[25px]">
                        <span className="font-['Inter_Tight',sans-serif] font-bold text-[18px] leading-[26px] text-center capitalize text-white">Step 3</span>
                    </div>
                    {/* Step 4 */}
                    <div className="flex-1 h-full flex flex-col justify-between items-center py-[25px] px-[20px] bg-black backdrop-blur-[25px]">
                        <span className="font-['Inter_Tight',sans-serif] font-bold text-[18px] leading-[26px] text-center capitalize text-white">Step 4</span>
                    </div>
                </div>

                {/* Floating Cards — Absolute Positioned with staggered reveal */}
                {steps.map((step) => {
                    const isTop = step.position === 'top';

                    const leftOffset =
                        step.stepNumber === 1 ? 'left-[12.5%]' :
                            step.stepNumber === 2 ? 'left-[37.5%]' :
                                step.stepNumber === 3 ? 'left-[62.5%]' : 'left-[87.5%]';

                    const cardIndex = step.stepNumber - 1;
                    const isVisible = visibleCards[cardIndex];

                    // Top cards slide down into position; bottom cards slide up
                    const translateClass = isVisible
                        ? 'opacity-100 translate-y-0'
                        : isTop
                            ? 'opacity-0 -translate-y-8'
                            : 'opacity-0 translate-y-8';

                    return (
                        <div
                            key={step.id}
                            className={`absolute w-[280px] z-10! -translate-x-1/2 flex flex-col items-center ${leftOffset} ${isTop ? 'bottom-full mb-0' : 'top-full mt-0'}
                                transition-all duration-500 ease-out ${translateClass}`}
                        >
                            {isTop ? (
                                <>
                                    {/* Card */}
                                    <div className="relative w-full bg-[#fdfdfd]/80 text-black p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:bg-black hover:text-white hover:shadow-xl group cursor-pointer">
                                        <div className={`absolute w-10 h-10 -z-1 pointer-events-none transition-transform duration-300 group-hover:scale-110 -rotate-[15deg] ${step.heartPosition === 'top-left' ? '-top-4 -left-2' :
                                            step.heartPosition === 'top-right' ? '-top-4 -right-2' : '-bottom-4 -right-2'
                                            }`}>
                                            <Image src="/images/center.png" alt="Decorative Accent" fill className="object-contain" />
                                        </div>
                                        <h3 className="font-['Inter_Tight',sans-serif] text-base font-bold mb-2 text-center">{step.phaseTitle}</h3>
                                        <p className="font-['Inter_Tight',sans-serif] text-[11px] md:text-xs text-gray-500 text-center leading-relaxed group-hover:text-gray-300 transition-colors">{step.description}</p>
                                    </div>

                                    {/* Connector Pin */}
                                    <div className="relative flex -left-28 flex-col items-center h-16 w-full">
                                        <div className="w-[24px] h-[98px]">
                                            <Image src="/images/lines.png" alt="" className='w-[20px] h-[80px]' width={10} height={98} />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* Connector Pin */}
                                    <div className="relative -left-28 flex flex-col items-center h-16 w-full">
                                        <div className="relative flex flex-col items-center h-16 w-full">
                                            <div className="w-[24px] h-[98px]">
                                                <Image src="/images/lines.png" alt="" className='w-[18px] h-[60px]' width={10} height={98} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div className="relative w-full bg-[#fdfdfd] text-black p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:bg-black hover:text-white hover:shadow-xl group cursor-pointer">
                                        <div className={`absolute w-10 h-10 pointer-events-none transition-transform duration-300 group-hover:scale-110 -rotate-[15deg] ${step.heartPosition === 'top-left' ? '-top-4 -left-2' :
                                            step.heartPosition === 'top-right' ? '-top-4 -right-2' : '-bottom-4 -right-2'
                                            }`}>
                                            <Image src="/images/center.png" alt="Decorative Accent" fill className="object-contain" />
                                        </div>
                                        <h3 className="font-['Inter_Tight',sans-serif] text-base font-bold mb-2 text-center">{step.phaseTitle}</h3>
                                        <p className="font-['Inter_Tight',sans-serif] text-[11px] md:text-xs text-gray-500 text-center leading-relaxed group-hover:text-gray-300 transition-colors">{step.description}</p>
                                    </div>
                                </>
                            )}
                        </div>
                    );
                })}
            </div>
        </section>
    );
}