import Marquee from 'react-fast-marquee';
import { SiAngular, SiFlutter, SiReact, SiNextdotjs, SiVuedotjs } from 'react-icons/si';

import { CONSULTANT_US_CONTENT } from '@/app/constants/content';

interface TechItem {
    id: number;
    name: string;
    Icon: any;
}

export default function TechStackMarquee() {
    const techStack: TechItem[] = [
        { id: 1, name: 'VUE.JS', Icon: SiVuedotjs },
        { id: 2, name: 'ANGULAR', Icon: SiAngular },
        { id: 3, name: 'FLUTTER', Icon: SiFlutter },
        { id: 4, name: 'REACT NATIVE', Icon: SiReact },
        { id: 5, name: 'NEXT.JS', Icon: SiNextdotjs },
    ];

    return (
        <section className="w-full bg-white flex flex-col items-center justify-start px-6 gap-12 md:gap-16 font-['Inter_Tight',sans-serif] text-[#00161D] overflow-hidden select-none">

            {/* Title & Headline Header Wrapper */}
            <div className="flex flex-col justify-end items-center gap-4 text-center max-w-[900px]">
                <h2 className="font-bold text-[40px] lg:text-[60px] leading-tight capitalize tracking-tight">
                    {CONSULTANT_US_CONTENT.techStack.title}
                </h2>

                <p className="max-w-[800px] w-full mt-2 font-normal text-sm md:text-base lg:text-[17px] leading-relaxed text-[#00161D]/80">
                    {CONSULTANT_US_CONTENT.techStack.description}
                </p>
            </div>

            {/* Marquee Row Component Wrapper */}
            <div className="w-full flex items-center justify-center">
                <Marquee
                    speed={50}
                    pauseOnHover={true}
                    gradient={false}
                    direction="left"
                >
                    {[...techStack, ...techStack].map(({ name, Icon }, index) => (
                        <div
                            key={index}
                            className="w-[220px] md:w-[305px] h-[160px] md:h-[200px] cursor-pointer bg-[#F6F6F6] rounded-[24px] flex flex-col justify-between items-center py-8 md:py-10 px-6 gap-4 mx-4 shrink-0 hover:bg-[#101D2D] hover:text-white transition-all duration-300 group shadow-sm"
                        >
                            {/* Gold Icon Base Backdrop Circle */}
                            <div className="w-14 h-14 md:w-20 md:h-20 bg-[#101D2D] group-hover:bg-[#C19A4D] rounded-full flex flex-col justify-center items-center p-3 transition-colors duration-300">
                                <Icon className="text-[#C19A4D] group-hover:text-[#101D2D] text-2xl md:text-[40px] transition-colors duration-300" />
                            </div>

                            {/* Stack Framework Identifier Label Text */}
                            <span className="font-bold text-sm md:text-base uppercase tracking-wider">
                                {name}
                            </span>
                        </div>
                    ))}
                </Marquee>
            </div>

        </section>
    );
}
