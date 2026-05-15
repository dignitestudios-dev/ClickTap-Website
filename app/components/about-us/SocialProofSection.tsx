import React from 'react';

type SocialProofSectionProps = {
    title: string;
    description: string;
};

export default function SocialProofSection({ title, description }: SocialProofSectionProps) {
    return (
        <section className=" w-full py-16 px-6 md:px-12 lg:px-20 flex justify-center">
            <div className="max-w-[1200px] w-full flex flex-col gap-16">

                {/* Top Content Row */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-16">
                    {/* Left Heading */}
                    <div className="w-full lg:w-[30%]">
                        <h2 className="text-[32px] font-bold text-[#111c24] leading-[1.2] tracking-tight whitespace-pre-line">
                            {title}
                        </h2>
                    </div>

                    {/* Right Paragraph */}
                    <div className="w-full lg:w-[70%]">
                        <p className="text-[14px] text-[#4a5560] leading-[1.7] text-justify font-normal whitespace-pre-line">
                            {description}
                        </p>
                    </div>
                </div>

                {/* Bottom Logos Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 items-center">
                    {/* TopDevelopers */}
                    <div className="">
                        <img
                            src="/images/marque-about-1.png"
                            alt="TopDevelopers"
                            className="max-h-[60px] md:max-h-[80px] w-auto object-contain mx-auto"
                        />
                    </div>

                    {/* techreviewer */}
                   <div className="">
                        <img
                            src="/images/marque-about-2.png"
                            alt="techreviewer"
                            className="max-h-[60px] md:max-h-[80px] w-auto object-contain mx-auto"
                        />
                    </div>

                    {/* GoodFirms */}
                 <div className="">
                        <img
                            src="/images/marque-about-3.png"
                            alt="GoodFirms"
                            className="max-h-[60px] md:max-h-[80px] w-auto object-contain mx-auto"
                        />
                    </div>

                    {/* Trustpilot */}
                    <div className="">
                        <img
                            src="/images/marque-about-4.png"
                            alt="Trustpilot"
                            className="max-h-[60px] md:max-h-[80px] w-auto object-contain mx-auto"
                        />
                    </div>

                    {/* SEMfirms */}
                    <div className="">
                        <img
                            src="/images/marque-about-5.png"
                            alt="SEMfirms"
                            className="max-h-[60px] md:max-h-[80px] w-auto object-contain mx-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

