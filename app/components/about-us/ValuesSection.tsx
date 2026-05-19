import React from 'react';

type ValuesSectionProps = {
    title: string;
    mission: {
        title: string;
        description: string;
    };
    objectives: {
        title: string;
        description: string;
    };
};

const ValuesSection = ({ title, mission, objectives }: ValuesSectionProps) => {
    const cards = [
        {
            title: mission.title,
            description: mission.description,
            bgClass: "bg-[url('/images/values-1.png')]"
        },
        {
            title: objectives.title,
            description: objectives.description,
            bgClass: "bg-[url('/images/values-2.png')]"
        }
    ];

    return (
        <section className="w-full bg-[#F4F9FC] px-6 md:px-12 flex flex-col items-center justify-center">
            {/* Main Title */}
            <h2 className="text-[40px] lg:text-[60px] font-bold text-[#0F172A] tracking-tight mb-12 text-center">
                {title}
            </h2>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`relative min-h-[480px] md:min-h-[520px] rounded-[24px] p-8 md:p-12 flex flex-col justify-end text-left overflow-hidden border border-[#ffffff]/10 shadow-2xl ${card.bgClass} bg-cover bg-center bg-no-repeat`}
                    >


                        {/* Card Content Area */}
                        <div className="relative z-10 max-w-xl">
                            <h3 className="text-[28px] md:text-[34px] font-medium text-white tracking-tight mb-4">
                                {card.title}
                            </h3>
                            <p className="text-[13px] md:text-[14px] font-normal leading-[1.6] text-white/70 tracking-wide font-sans">
                                {card.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ValuesSection;

