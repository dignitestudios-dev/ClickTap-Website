import React from 'react';

type OurStoryProps = {
    title: string;
    paragraphs: string[];
    cta: string;
};

const OurStory = ({ title, paragraphs, cta }: OurStoryProps) => {
    return (
        <section className="w-full bg-white py-16 px-6 md:py-24 md:px-12 flex justify-center">
            <div className="max-w-[1200px] w-full flex flex-col lg:flex-row gap-12 items-start">
                <div className="w-full lg:w-1/3">
                    <h2 className="text-[36px] sm:text-[44px] md:text-[52px] font-bold text-[#0F172A] tracking-tight leading-tight">
                        {title}
                    </h2>
                </div>
                <div className="w-full lg:w-2/3 flex flex-col gap-6">
                    {paragraphs.map((para, index) => (
                        <p key={index} className="text-[16px] md:text-[18px] text-[#4A5568] leading-[1.6] font-normal">
                            {para}
                        </p>
                    ))}
                    <button className="mt-4 px-8 py-4 bg-[#0F172A] text-white rounded-xl font-semibold text-[16px] w-fit transition-all duration-300 hover:bg-[#1e2a3b]">
                        {cta}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
