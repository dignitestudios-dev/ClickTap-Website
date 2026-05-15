import React from 'react';
import { LOVE_STORED_CONTENT } from '@/app/constants/content';


interface ResearchItem {
    id: number;
    text: string;
}

export default function DiscoveryResearch() {
    return (
        <section className="bg-white py-16 px-4 max-w-6xl mx-auto font-sans">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0a192f] mb-12">
                {LOVE_STORED_CONTENT.research.title}
            </h2>

            {/* Cards Container */}
            <div className="grid md:grid-cols-2 items-stretch">

                {/* Market Research Card */}
                <div className="bg-black text-white p-4 cursor-pointer md:p-7 rounded-[16px] border border-dashed border-[#B8822D] transition-all duration-300 ">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        Market Research
                    </h3>
                    <ul className="space-y-4">
                        {LOVE_STORED_CONTENT.research.marketResearch.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm md:text-base opacity-90">
                                <div className="flex-shrink-0  relative mt-1">
                                    {/* Heart Image Placeholder */}
                                    <img
                                        src="/images/Isolation_Mode.png"
                                        alt="Heart icon"
                                        width={25}
                                        height={23}
                                        className="object-contain"
                                    />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* User Research Card (With Hover Effect) */}
                <div className="bg-white p-4 cursor-pointer md:p-7 rounded-[16px] border border-dashed border-[#B8822D] transition-all duration-300">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        User Research
                    </h3>
                    <ul className="space-y-4">
                        {LOVE_STORED_CONTENT.research.userResearch.map((item, index) => (
                            <li key={index} className="flex items-start gap-2 text-sm md:text-base text-gray-800  opacity-90 transition-colors duration-300">
                                <div className="flex-shrink-0  relative mt-1">
                                    {/* Heart Image Placeholder */}
                                    <img
                                        src="/images/Isolation_Mode.png"
                                        alt="Heart icon"
                                        width={25}
                                        height={23}
                                        className="object-contain"
                                    />
                                </div>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
