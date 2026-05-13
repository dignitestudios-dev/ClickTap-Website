"use client";

type ChallengeItem = {
    id: string;
    title: string;
    description: string;
};

const challenges: ChallengeItem[] = [
    {
        id: "01",
        title: "Complex Data Structuring",
        description: "Managing detailed professional data such as certifications, availability, shift preferences, and location constraints required a well-structured and scalable data system.",
    },
    {
        id: "02",
        title: "Efficient Talent Filtering",
        description: "Employers needed precise filtering capabilities to quickly identify suitable candidates without going through irrelevant profiles.",
    },
    {
        id: "03",
        title: "Balancing Simplicity & Detail",
        description: "The platform had to present extensive professional information while maintaining a clean and easy-to-use interface.",
    },
];

export default function KeyChallenges() {
    return (
        <section className="w-full py-16 px-20 flex flex-col items-center">
            {/* Section Header */}
            <h2 className="text-[40px] md:text-[52px] font-bold text-[#101D2D] tracking-tight text-center mb-12">
                Key Challenges
            </h2>

            {/* Main Container */}
            <div className="w-full flex flex-col overflow-hidden rounded-[24px] shadow-sm">
                {challenges.map((challenge, index) => {
                    // Card 1 Layout Styles
                    if (index === 0) {
                        return (
                            <div
                                key={challenge.id}
                                className="bg-[#101D2D] w-full min-h-[140px] px-8 md:px-14 py-6 grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_0.5fr] items-center gap-6 border-b border-[#1A2E44]"
                            >
                                <h3 className="text-[22px] md:text-[26px] font-bold text-[#C19A4D] leading-tight">
                                    {challenge.title}
                                </h3>
                                <p className="text-[12px] md:text-[13px] text-[#C19A4D] leading-relaxed max-w-[500px]">
                                    {challenge.description}
                                </p>
                                <span className="text-[44px] md:text-[56px] font-bold text-white text-right font-sans tracking-tighter opacity-90 md:block hidden">
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
                                className="bg-[#C19A4D] w-full min-h-[140px] px-8 md:px-14 py-6 grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_0.5fr] items-center gap-6"
                            >
                                <h3 className="text-[22px] md:text-[26px] font-bold text-[#101D2D] leading-tight">
                                    {challenge.title}
                                </h3>
                                <p className="text-[12px] md:text-[13px] text-[#101D2D] leading-relaxed max-w-[500px]">
                                    {challenge.description}
                                </p>
                                <span className="text-[44px] md:text-[56px] font-bold text-white text-right font-sans tracking-tighter md:block hidden">
                                    {challenge.id}
                                </span>
                            </div>
                        );
                    }

                    // Card 3 Layout Styles
                    return (
                        <div
                            key={challenge.id}
                            className=" w-full min-h-[140px] px-8 rounded-[24px] bg-white -mt-4.5 md:px-14 py-6 grid grid-cols-1 md:grid-cols-[1.2fr_1.8fr_0.5fr] items-center gap-6 border border-[#101D2D]"
                        >
                            <h3 className="text-[22px] md:text-[26px] font-bold text-[#101D2D] leading-tight">
                                {challenge.title}
                            </h3>
                            <p className="text-[12px] md:text-[13px] text-[#4A5568] leading-relaxed max-w-[500px]">
                                {challenge.description}
                            </p>
                            <span className="text-[44px] md:text-[56px] font-bold text-[#101D2D] text-right font-sans tracking-tighter md:block hidden">
                                {challenge.id}
                            </span>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}
