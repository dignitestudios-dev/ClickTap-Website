"use client";

import React from 'react';
import Image from "next/image";
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

type Feature = {
    icon: string;
    title: string;
};

type Props = {
    heading: React.ReactNode;
    description?: string;
    features: Feature[];
    ctaText?: string;
}

const FeaturesSection = ({ heading, description, features, ctaText }: Props) => {
    return (
        <section className="relative px-6 sm:px-10 md:px-20 overflow-hidden">
            {/* <div className='absolute  left-0 top-4 h-[500px] md:h-[400px] '>
                <Image src="/images/feature-bg.png" fill className='object-contain opacity-30 md:opacity-100' alt="feature-bg" />
            </div> */}
            <div className="mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20 flex flex-col items-center justify-center gap-4"
                >
                    <h2 className="text-[40px] lg:text-[60px] font-normal leading-tight text-[#00161D]">
                        {heading}
                    </h2>
                    {description && (
                        <p className="max-w-[900px] text-center text-[15px] md:text-[18px] font-normal leading-relaxed text-[#00161D] opacity-80">
                            {description}
                        </p>
                    )}
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <FeatureCard icon={feature.icon} title={feature.title} />
                        </motion.div>
                    ))}
                </div>
                {ctaText && (
                    <div className="flex mt-10 justify-center">
                        <button className="group/cta flex items-center gap-6 rounded-[8px] border border-[#00161D] bg-white py-2 cursor-pointer pl-6 pr-4 shadow-sm transition-all active:scale-95">
                            <span className="text-[16px] font-semibold text-[#00161D]">
                                {ctaText}
                            </span>

                            <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#01C2FE] text-white transition-transform group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1">
                                <ArrowUpRight size={18} />
                            </div>
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default FeaturesSection;
