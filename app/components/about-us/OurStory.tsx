import { ArrowUpRight } from 'lucide-react';

type OurStoryProps = {
    title: string;
    paragraphs: string[];
    cta: string;
};

const OurStory = ({ title, paragraphs, cta }: OurStoryProps) => {
    return (
        <section className="w-full bg-white px-6 md:px-12 flex justify-center">
            <div className="max-w-[1200px] w-full flex flex-col items-center text-center gap-12">

                {/* Heading */}
                <div className="w-full flex justify-center">
                    <h2 className="text-[40px] lg:text-[60px] font-bold text-[#0F172A] tracking-tight leading-tight">
                        Our Story
                    </h2>
                </div>

                {/* Content */}
                <div className="w-full  flex flex-col items-center gap-6">
                    <p className="text-[16px] md:text-[18px] text-[#4A5568] leading-[1.8] font-normal">
                        ClickTap Solution started with a simple goal to help businesses bring their digital ideas to life with confidence and clarity. Over many years we have worked with startups, growing companies, and enterprises across different industries. Our team believes every business deserves solutions that are practical, scalable, and easy to use.

                        We focus on understanding business goals before creating any strategy or digital solution. This approach helps us build long-term partnerships based on communication and real results. Our team works directly with customers at every level, from mobile platforms to personalised digital experiences, to guarantee smooth cooperation and improved results.

                        With a skilled staff passionate about creativity, innovation, and problem-solving, ClickTap Solution continues to grow today. We are dedicated to helping companies adapt to evolving technological trends while maintaining quality user experiences and business growth at the core of everything we do.
                    </p>

                    {/* Button */}
                    <div className="mt-5 relative z-10 flex justify-center">
                        <button className="group/cta flex items-center gap-6 rounded-[8px] border border-[#00161D] bg-white py-2 cursor-pointer pl-6 pr-4 shadow-sm transition-all active:scale-95">
                            <span className="text-[16px] font-semibold text-[#00161D]">
                                Learn More
                            </span>

                            <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#01C2FE] text-white transition-transform group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1">
                                <ArrowUpRight size={18} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
