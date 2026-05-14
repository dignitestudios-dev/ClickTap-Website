import React from 'react';
import Image from 'next/image';

interface ResearchItem {
    id: number;
    text: string;
}

export default function DiscoveryResearch() {
    // Dummy data for list items
    const dummyPoints: ResearchItem[] = [
        { id: 1, text: "Analyzed behavior patterns across modern dating and social networking platforms" },
        { id: 2, text: "Analyzed behavior patterns across modern dating and social networking platforms" },
        { id: 3, text: "Analyzed behavior patterns across modern dating and social networking platforms" },
        { id: 4, text: "Analyzed behavior patterns across modern dating and social networking platforms" },
    ];

    return (
        <section className="bg-white py-16 px-4 max-w-6xl mx-auto font-sans">
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0a192f] mb-12">
                Discovery & Research
            </h2>

            {/* Cards Container */}
            <div className="grid md:grid-cols-2 items-stretch">

                {/* Market Research Card */}
                <div className="bg-black text-white p-4 cursor-pointer md:p-7 rounded-[16px] border border-dashed border-[#B8822D] transition-all duration-300 ">
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">
                        Market Research
                    </h3>
                    <ul className="space-y-4">
                        {dummyPoints.map((item) => (
                            <li key={item.id} className="flex items-start gap-2 text-sm md:text-base opacity-90">
                                <div className="flex-shrink-0  relative mt-1">
                                    {/* Heart Image Placeholder */}
                                    <Image
                                        src="/images/Isolation_Mode.png"
                                        alt="Heart icon"
                                        width={25}
                                        height={23}
                                        className="object-contain"
                                    />
                                </div>
                                <span>{item.text}</span>
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
                        {dummyPoints.map((item) => (
                            <li key={item.id} className="flex items-start gap-2 text-sm md:text-base text-gray-800  opacity-90 transition-colors duration-300">
                                <div className="flex-shrink-0  relative mt-1">
                                    {/* Heart Image Placeholder */}
                                    <Image
                                        src="/images/Isolation_Mode.png"
                                        alt="Heart icon"
                                        width={25}
                                        height={23}
                                        className="object-contain"
                                    />
                                </div>
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </section>
    );
}
