import React from 'react';
import { FaReact, FaVuejs, FaAngular } from 'react-icons/fa';
import { SiFlutter, SiNextdotjs } from 'react-icons/si';

const techData = [
    { name: 'REACT', icon: <FaReact /> },
    { name: 'VUE.JS', icon: <FaVuejs /> },
    { name: 'ANGULAR', icon: <FaAngular /> },
    { name: 'FLUTTER', icon: <SiFlutter /> },
    { name: 'REACT NATIVE', icon: <FaReact /> },
    { name: 'NEXT.JS', icon: <SiNextdotjs /> },
];

type TechStackProps = {
    title: React.ReactNode;
    description: string;
};

export default function TechStack({ title, description }: TechStackProps) {
    return (
        <section className="bg-white py-20 px-4 md:px-20 font-sans">
            <div className="text-center">
                {/* Header Section */}
                <h2 className="text-[clamp(2rem,5vw,3rem)] font-bold text-[#1a2b3b] mb-6">{title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto mb-16 leading-relaxed">
                    {description}
                </p>

                {/* Grid Section */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
                    {techData.map((tech, index) => (
                        <div
                            key={index}
                            className={`flex flex-col w-full h-[200px] bg-[#FFFDF9]  rounded-[16px] items-center justify-center p-8 transition-all
                                ${index === 4 ? 'md:col-start-2' : ''}
                            `}
                        >
                            <div className="w-20 h-20 bg-[#6d4c41] rounded-full flex items-center justify-center text-white text-4xl mb-4 shadow-sm">
                                {tech.icon}
                            </div>
                            <span className="text-sm font-bold tracking-widest text-[#1a2b3b]">
                                {tech.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}