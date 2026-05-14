import React from 'react';
import Image from 'next/image';

interface ChallengeCard {
    id: number;
    title: string;
    description: string;
}

export default function KeyChallenges() {
    // Dummy data for the three challenge cards
    const challenges: ChallengeCard[] = [
        {
            id: 1,
            title: "Balancing Social & Dating Experiences",
            description: "Analyzed behavior patterns across modern dating and social networking platforms."
        },
        {
            id: 2,
            title: "AI Conversation Relevance",
            description: "The Love Guru chatbot required conversational flows that felt engaging, supportive, and contextually relevant to relationship discussions."
        },
        {
            id: 3,
            title: "User Engagement Retention",
            description: "Creating long-term engagement beyond initial matching was important to prevent user drop-offs common in dating platforms."
        }
    ];

    return (
        <section className="bg-white py-16 relative px-4 max-w-6xl mx-auto font-sans select-none">
            {/* Section Heading */}
            <h2 className="text-4xl md:text-5xl font-bold text-center text-[#0a192f] mb-16">
                Key Challenges
            </h2>

            {/* Cards Responsive Grid */}
            <Image src="/images/key-challenges.png" alt="key-challenges"  fill className='object-contain mt-14 w-full h-full' />
            <div className="grid md:grid-cols-3 gap-6 items-stretch" >

                {challenges.map((challenge) => (
                    <div
                        key={challenge.id}
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
