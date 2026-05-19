import React from 'react';
import { LOVE_STORED_CONTENT } from '@/app/constants/content';
import Image from 'next/image';

interface SolutionPoint {
    id: number;
    title: string;
    description: string;
}

export default function TheSolution() {
    return (
        <section className="bg-black text-white w-full font-sans select-none overflow-hidden">
            <div className=" mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[600px]">

                {/* Left Column: Title & Mobile Mockup Mock */}
                <div className="flex flex-col py-16 px-6 md:px-12 justify-between h-full  space-y-12 lg:space-y-0">
                    <h2 className="text-[40px] lg:text-[60px] font-bold tracking-tight text-white">
                        {LOVE_STORED_CONTENT.solutions.title}
                    </h2>

                    {/* Mobile Image Container */}
                    <div className="relative w-full  -left-14 top-16 lg:mx-0 flex items-center ">
                        {/* Mobile Image Placement */}
                        <Image
                            src="/images/love-solution.png" // Apni mobile image ka path yahan lagayein
                            alt="Mobile Mockup Application Screenshot"
                            width={720}
                            height={633}
                            className="object-contain transform   transition-transform duration-500"
                            priority
                        />
                    </div>
                </div>

                {/* Right Column: Grid Border Content */}
                <div className="relative flex flex-col  h-full  py-8  border-dashed border border-[#B8822D]  ">
                    <div className="space-y-0">
                        {LOVE_STORED_CONTENT.solutions.items.map((point, index) => (
                            <div
                                key={index}
                                className={`py-8 md:py-14 px-15 flex flex-col justify-center transition-all duration-300 hover:bg-zinc-900/40   group ${index !== LOVE_STORED_CONTENT.solutions.items.length - 1 ? 'border-b border-dashed border-[#B8822D]' : ''
                                    }`}
                            >
                                <h3 className="text-xl md:text-2xl font-semibold mb-3 tracking-wide text-white transition-colors">
                                    {point.title}
                                </h3>
                                <p className="text-xs md:text-sm text-gray-400 leading-relaxed max-w-xl group-hover:text-gray-200 transition-colors">
                                    {point.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
