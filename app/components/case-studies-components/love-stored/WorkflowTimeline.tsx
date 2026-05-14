import React from 'react';
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
    const steps: WorkflowStep[] = [
        {
            id: 1,
            stepNumber: 1,
            phaseTitle: "Discovery Phase",
            description: "Analyzed behavior patterns across modern dating and social networking platforms",
            position: 'top',
            heartPosition: 'top-left'
        },
        {
            id: 2,
            stepNumber: 2,
            phaseTitle: "Discovery Phase",
            description: "Analyzed behavior patterns across modern dating and social networking platforms",
            position: 'bottom',
            heartPosition: 'top-right'
        },
        {
            id: 3,
            stepNumber: 3,
            phaseTitle: "Discovery Phase",
            description: "Analyzed behavior patterns across modern dating and social networking platforms",
            position: 'top',
            heartPosition: 'top-left'
        },
        {
            id: 4,
            stepNumber: 4,
            phaseTitle: "Discovery Phase",
            description: "Analyzed behavior patterns across modern dating and social networking platforms",
            position: 'bottom',
            heartPosition: 'top-right'
        }
    ];

    return (
        <section className="bg-white py-[100px] px-4 md:px-[80px] w-full max-w-[1440px] min-h-[850px] mx-auto relative flex flex-col items-center gap-[50px] isolation-isolate overflow-hidden select-none">

            {/* Figma Sub Title Configuration */}
            <h2 className="w-full max-w-[800px] font-['Inter_Tight',sans-serif] font-bold text-[44px] md:text-[66px] leading-[65px] text-center capitalize text-[#00161D] tracking-tight z-0">
                Workflow
            </h2>

            {/* Timeline Core Track & Absolute Frame */}
            <div className="relative w-full max-w-[1280px] mt-44 mb-44 z-10">

                {/* Central Track Layout Based on Figma Frames (2147228941, 42, 43) */}
                <div className="w-full h-[70px] rounded-[64px] flex items-start p-0 overflow-hidden shadow-sm relative z-5">

                    {/* Step 1: Frame 2147228941 */}
                    <div className="flex-1 h-full flex flex-col justify-between items-center py-[25px] px-[20px] bg-[#4F4F4F] border-r border-white/30 backdrop-blur-[25px]">
                        <span className="font-['Inter_Tight',sans-serif] font-bold text-[18px] leading-[26px] text-center capitalize text-white">Step 1</span>
                    </div>

                    {/* Step 2: Frame 2147228942 */}
                    <div className="flex-1 h-full flex flex-col justify-between items-center py-[25px] px-[20px] bg-[#393939] border-r border-white/30 backdrop-blur-[25px]">
                        <span className="font-['Inter_Tight',sans-serif] font-bold text-[18px] leading-[26px] text-center capitalize text-white">Step 2</span>
                    </div>

                    {/* Step 3: Frame 2147228943 */}
                    <div className="flex-1 h-full flex flex-col justify-between items-center py-[25px] px-[20px] bg-[#262626] border-r border-white/30 backdrop-blur-[25px]">
                        <span className="font-['Inter_Tight',sans-serif] font-bold text-[18px] leading-[26px] text-center capitalize text-white">Step 3</span>
                    </div>

                    {/* Step 4: Final Black Segment */}
                    <div className="flex-1 h-full flex flex-col justify-between items-center py-[25px] px-[20px] bg-black backdrop-blur-[25px]">
                        <span className="font-['Inter_Tight',sans-serif] font-bold text-[18px] leading-[26px] text-center capitalize text-white">Step 4</span>
                    </div>

                </div>

                {/* Dynamic Positional Cards Mapping */}
                {steps.map((step) => {
                    const isTop = step.position === 'top';

                    // Har block ke central horizontal start ko find karne ke liye left positioning (Step center logic)
                    const leftOffset =
                        step.stepNumber === 1 ? 'left-[12.5%]' :
                            step.stepNumber === 2 ? 'left-[37.5%]' :
                                step.stepNumber === 3 ? 'left-[62.5%]' : 'left-[87.5%]';

                    return (
                        <div
                            key={step.id}
                            className={`absolute w-[280px] z-10!  -translate-x-1/2 flex flex-col items-center ${leftOffset} ${isTop ? 'bottom-full mb-0' : 'top-full mt-0'
                                }`}
                        >
                            {/* Top position structural content order */}
                            {isTop ? (
                                <>
                                    {/* 1. Main Card Stack */}
                                    <div className="relative w-full bg-[#fdfdfd] text-black p-6 rounded-2xl border border-gray-100 shadow-sm transition-all duration-300 hover:bg-black hover:text-white hover:shadow-xl group cursor-pointer">
                                        <div className={`absolute w-10 h-10 pointer-events-none transition-transform duration-300 group-hover:scale-110 -rotate-[15deg] ${step.heartPosition === 'top-left' ? '-top-4 -left-2' :
                                            step.heartPosition === 'top-right' ? '-top-4 -right-2' : '-bottom-4 -right-2'
                                            }`}>
                                            <Image src="/images/center.png" alt="Decorative Accent" fill className="object-contain" />
                                        </div>
                                        <h3 className="font-['Inter_Tight',sans-serif] text-base font-bold mb-2 text-center">{step.phaseTitle}</h3>
                                        <p className="font-['Inter_Tight',sans-serif] text-[11px] md:text-xs text-gray-500 text-center leading-relaxed group-hover:text-gray-300 transition-colors">{step.description}</p>
                                    </div>

                                    {/* 2. Pixel-Aligned Pin Connector Components */}
                                    <div className="relative flex -left-28 flex-col items-center h-16 w-full">
                                        <div className="w-[24px] h-[98px] "><Image src="/images/lines.png" alt="" className='w-[20px]  h-[80px]' width={10} height={98} /></div>

                                    </div>
                                </>
                            ) : (
                                <>
                                    {/* 2. Pixel-Aligned Pin Connector Components */}
                                    <div className="relative -left-28 flex flex-col items-center h-16 w-full">
                                        {/* 2. Pixel-Aligned Pin Connector Components */}
                                        <div className="relative flex  flex-col items-center h-16 w-full">
                                            <div className="w-[24px] h-[98px] "><Image src="/images/lines.png" alt="" className='w-[18px]  h-[60px]' width={10} height={98} /></div>

                                        </div>
                                    </div>

                                    {/* 1. Main Card Stack */}
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
