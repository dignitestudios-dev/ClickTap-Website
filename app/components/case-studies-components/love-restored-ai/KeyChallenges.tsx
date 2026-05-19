import React from 'react';
import { LOVE_STORED_CONTENT } from '@/app/constants/content';
import Image from 'next/image';

interface ChallengeCard {
    id: number;
    title: string;
    description: string;
}

export default function KeyChallenges() {
    return (
        <section className="bg-white relative px-4 max-w-6xl mx-auto font-sans select-none">
            {/* Section Heading */}
            <h2 className="text-[40px] lg:text-[60px] font-bold text-center text-[#0a192f] mb-16">
                {LOVE_STORED_CONTENT.challenges.title}
            </h2>

            {/* Cards Responsive Grid */}
            <Image src="/images/key-challenges.png" alt="key-challenges" fill className='object-contain mt-14 w-full h-full' />
            <div className="grid md:grid-cols-3 gap-6 items-stretch" >

                {LOVE_STORED_CONTENT.challenges.items.map((challenge, index) => (
                    <div
                        key={index}
                        className="relative bg-[#F1F1F180]/50 backdrop-blur-lg text-black p-8 rounded-3xl min-h-[340px] flex flex-col items-center justify-between text-center overflow-hidden border border-gray-100 shadow-sm transition-all duration-300 group"
                    >


                        {/* Red Cross Icon Container */}
                        <div className="w-10 h-10 rounded-full bg-[#ff3333] flex items-center justify-center text-white font-bold text-lg shadow-md z-10">
                            ✕
                        </div>

                        {/* Content Wrapper */}
                        <div className="mt-8 mb-4 flex flex-col items-center justify-center flex-grow z-10">
                            <h3 className="text-lg md:text-xl font-bold mb-4 px-2 leading-snug">
                                {challenge.title}
                            </h3>
                            <p className="text-xs md:text-sm text-gray-600 leading-relaxed max-w-[240px] transition-colors duration-300">
                                {challenge.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
