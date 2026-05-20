"use client";

import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import OurStory from "./OurStory";
import { ABOUT_US_CONTENT } from "@/app/constants/content";

type DetailItem = {
    label: string;
    value: string;
    imageSrc: string;
};

type Props = {
    title: string | React.ReactNode;
    description: string;
    details?: DetailItem[];
};

export default function Hero({ title, description, details }: Props) {
    const detailsData = [
        { label: "Mobile Apps" },
        { label: "Design" },
        { label: "Development" },
        { label: "Marketing" }
    ];

    return (
        <section className="relative w-full flex flex-col items-center  overflow-hidden">

            {/* Upper Content Wrapper */}
            <div className="relative z-10 py-10 w-full flex flex-col items-center text-center">

                {/* Main Title */}
                <h1 className="max-w-[1000px] relative z-40 text-[32px] sm:text-4xl md:text-6xl lg:text-[72px] font-extrabold text-[#0D1B2A] leading-[1.1] tracking-tight mb-6 px-2">
                    {title}
                </h1>

                {/* Subtitle / Description */}
                <p className="max-w-[800px] relative z-40 text-sm sm:text-base md:text-lg text-[#4A5568] leading-[1.6] font-normal px-4">
                    {description}
                </p>


                {/* Central Phone Mockup Showcase */}
                <div className="relative mt-10 w-full  mx-auto  px-2">
                    <Image
                        src="/images/about-us-hero.png"
                        alt="Mobile App Preview"
                        width={700}
                        height={600}
                        className=" w-full block h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.08)]"
                        priority
                    />

                    {detailsData && detailsData.length > 0 && (
                        <div className="w-[1000px] lg:-mt-15 relative z-40 mx-auto border-y border-[#E2F1F8] bg-[#E8F7FE]">
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full divide-y sm:divide-y-0 sm:divide-x divide-[#D0E7F4]">
                                {detailsData.map((detail, index) => (
                                    <div
                                        key={index}
                                        className="pt-24 pb-6 px-6 md:px-8 flex items-end justify-between gap-4 text-left transition-colors duration-300 hover:bg-[#D8EFFC]"
                                    >
                                        {/* Category Title */}
                                        <span className="text-[20px] md:text-[24px] font-semibold tracking-tight text-[#081C24] leading-none">
                                            {detail.label}
                                        </span>

                                        {/* Column Number */}
                                        <span className="text-[12px] md:text-[13px] font-medium text-[#081C24]/70 mb-0.5 font-mono">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    <br /><br />
                    <OurStory
                        title={ABOUT_US_CONTENT.story.title}
                        paragraphs={ABOUT_US_CONTENT.story.paragraphs}
                        cta={ABOUT_US_CONTENT.story.cta}
                    />


                </div>

            </div>
        </section>
    );
}
