import React from 'react';
import { FaReact, FaVuejs, FaAngular } from 'react-icons/fa';
import { SiFlutter, SiNextdotjs } from 'react-icons/si';
import { LOVE_STORED_CONTENT } from '@/app/constants/content';
interface TechItem {
    name: string;
    // Simple custom inner SVG path structure to handle the custom brown/gold logo circles
    iconSvg: React.ReactNode;
}

export default function TechStack() {
    const techData = [
        { name: 'REACT', icon: <FaReact size={25} /> },
        { name: 'VUE.JS', icon: <FaVuejs size={25} /> },
        { name: 'ANGULAR', icon: <FaAngular size={25} /> },
        { name: 'FLUTTER', icon: <SiFlutter size={25} /> },
        { name: 'REACT NATIVE', icon: <FaReact size={25} /> },
        { name: 'NEXT.JS', icon: <SiNextdotjs size={25} /> },
    ];


    return (
        <div className="w-full max-w-[1200px] mx-auto bg-white py-16 px-4 font-['Plus_Jakarta_Sans',sans-serif] text-[#0A0A0A]">
            {/* Headings */}
            <div className="text-center max-w-3xl mx-auto mb-14">
                <h2 className="text-5xl font-bold tracking-tight mb-5">
                    {LOVE_STORED_CONTENT.techStack.title}
                </h2>
                <p className="text-[13px] leading-relaxed text-gray-700 max-w-2xl mx-auto font-medium">
                    {LOVE_STORED_CONTENT.techStack.description}
                </p>
            </div>

            {/* Grid Container */}
            <div className="flex flex-col gap-5 items-center">
                {/* Row 1: 4 Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-full">
                    {techData.slice(0, 4).map((tech, idx) => (
                        <div
                            key={idx}
                            className="bg-[#0A0A0A] rounded-[18px] min-h-[175px] flex flex-col items-center justify-center p-6 transition-transform hover:scale-[1.02]"
                        >
                            {/* Circular Gold Icon Wrapper */}
                            <div className="w-16 h-16 rounded-full text-white bg-[#B8832D] flex items-center justify-center mb-6 shadow-inner">
                                {tech.icon}
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.15em] text-white">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Row 2: 2 Centered Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 w-full max-w-[50%] lg:max-w-[50%]">
                    {techData.slice(4).map((tech, idx) => (
                        <div
                            key={idx}
                            className="bg-[#0A0A0A] rounded-[18px] min-h-[175px] flex flex-col items-center justify-center p-6 transition-transform hover:scale-[1.02]"
                        >
                            <div className="w-16 h-16 text-white rounded-full bg-[#B8832D] flex items-center justify-center mb-6 shadow-inner">
                                {tech.icon}
                            </div>
                            <span className="text-[11px] font-bold tracking-[0.15em] text-white">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
