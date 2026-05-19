"use client";
import { CONSULTANT_US_CONTENT } from '@/app/constants/content';

type ChallengeItem = {
    id: string;
    title: string;
    description: string;
};

const challenges: ChallengeItem[] = CONSULTANT_US_CONTENT.challenges.items.map((item, index) => ({
    id: `0${index + 1}`,
    ...item
}));

export default function KeyChallenges() {
    return (
        <section className="w-full px-6 md:px-12 lg:px-20 flex flex-col items-center max-w-[1400px] mx-auto">
            {/* Section Header */}
            <h2 className="text-[40px] lg:text-[60px] font-extrabold text-[#101D2D] tracking-tight text-center mb-12 md:mb-16">
                Key Challenges
            </h2>

            {/* Main Container */}
            <div className="w-full flex flex-col overflow-hidden rounded-[24px] shadow-sm border border-gray-100">
                {challenges.map((challenge, index) => {
                    // Card 1 Layout Styles
                    if (index === 0) {
                        return (
        <div
                                key={challenge.id}
                                className="bg-[#101D2D] w-full min-h-[140px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_0.5fr] items-center gap-6 border-b border-[#1A2E44]"
                            >
                                <div className="flex justify-between items-center md:block">
                                    <h3 className="text-[20px] md:text-[24px] lg:text-[26px] font-bold text-[#C19A4D] leading-tight">
                                        {challenge.title}
                                    </h3>
                                    <span className="text-[36px] md:text-[56px] font-bold text-white/20 md:hidden block">
                                        {challenge.id}
                                    </span>
                                </div>
                                <p className="text-[13px] md:text-[14px] text-[#C19A4D]/90 leading-relaxed max-w-[500px]">
                                    {challenge.description}
                                </p>
                                <span className="text-[56px] font-bold text-white text-right font-sans tracking-tighter opacity-90 md:block hidden">
                                    {challenge.id}
                                </span>
                            </div>
                        );
                    }

                    // Card 2 Layout Styles
                    if (index === 1) {
                        return (
        <div
                                key={challenge.id}
                                className="bg-[#C19A4D] w-full min-h-[140px] px-6 md:px-12 grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_0.5fr] items-center gap-6"
                            >
                                <div className="flex justify-between items-center md:block">
                                    <h3 className="text-[20px] md:text-[24px] lg:text-[26px] font-bold text-[#101D2D] leading-tight">
                                        {challenge.title}
                                    </h3>
                                    <span className="text-[36px] md:text-[56px] font-bold text-white/30 md:hidden block">
                                        {challenge.id}
                                    </span>
                                </div>
                                <p className="text-[13px] md:text-[14px] text-[#101D2D] leading-relaxed max-w-[500px]">
                                    {challenge.description}
                                </p>
                                <span className="text-[56px] font-bold text-white text-right font-sans tracking-tighter md:block hidden">
                                    {challenge.id}
                                </span>
                            </div>
                        );
                    }

                    // Card 3 Layout Styles
                    return (
        <div
                            key={challenge.id}
                            className="w-full min-h-[140px] px-6 md:px-12 bg-white grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_0.5fr] items-center gap-6 border-t border-[#101D2D]/10"
                        >
                            <div className="flex justify-between items-center md:block">
                                <h3 className="text-[20px] md:text-[24px] lg:text-[26px] font-bold text-[#101D2D] leading-tight">
                                    {challenge.title}
                                </h3>
                                <span className="text-[36px] md:text-[56px] font-bold text-[#101D2D]/10 md:hidden block">
                                    {challenge.id}
                                </span>
                            </div>
                            <p className="text-[13px] md:text-[14px] text-[#4A5568] leading-relaxed max-w-[500px]">
                                {challenge.description}
                            </p>
                            <span className="text-[56px] font-bold text-[#101D2D] text-right font-sans tracking-tighter md:block hidden">
                                {challenge.id}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
