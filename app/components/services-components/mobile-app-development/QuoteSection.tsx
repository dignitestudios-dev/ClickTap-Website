"use client";

import React from 'react';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

type Props = {
    heading: React.ReactNode;
    description: string;
    ctaText: string;
}

const QuoteSection = ({ heading, description, ctaText }: Props) => {
    return (
        <section className="px-6 md:px-20 py-10">
            <div className="relative w-full max-w-[1440px] mx-auto h-auto min-h-[400px] rounded-[40px] md:rounded-[60px] overflow-hidden bg-[#01C2FE80] flex flex-col lg:flex-row items-center">

                {/* Gradient Overlay for the blue effect */}
                <div className="absolute inset-0 bottom-0 z-0 w-full bg-cover! bg-no-repeat! " style={{ background: `url("/images/bg-start.png") ` }} />

                {/* Background Shape - Ripple effect */}
                <div className="absolute hidden md:flex md:-right-20 md:-right-5 w-full md:w-[750px] -bottom-10 md:bottom-0  z-10 opacity-40 md:opacity-60">
                    <img
                        src="/images/bg-shape.png"
                        alt="Background Shape"
                        width={700}
                        height={300}
                        className="w-full h-[250px] md:h-[350px] object-contain"
                    />
                </div>

                {/* Left Content */}
                <div className="relative z-20 w-full lg:w-[55%] p-8 sm:p-12 md:p-20 flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-white text-3xl sm:text-[36px] font-bold leading-tight mb-4">
                            {heading}
                        </h2>
                        <p className="text-white/90 text-[15px] md:text-[15px] max-w-[550px] leading-relaxed mb-8">
                            {description}
                        </p>

                        <div className="inline-block">
                            <button className="bg-white cursor-pointer hover:shadow-xl transition-all duration-300 rounded-[8px] p-2 pr-2 pl-8 flex items-center gap-6 group">
                                <span className="text-[#00161D] font-semibold text-[15px] md:text-[15px]">
                                    {ctaText}
                                </span>
                                <div className="bg-[#00C2FE] w-[24px] h-[24px] md:w-[32px] md:h-[32px] rounded-[12px] flex items-center justify-center text-white transition-transform duration-300 group-hover:rotate-12">
                                    <ArrowUpRight color='black' size={18} />
                                </div>
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Image */}
                <div className="relative z-20 w-full  lg:w-[45%] h-full hidden md:flex justify-center lg:justify-end items-end self-end">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-[280px] sm:w-[320px] md:w-[500px] h-[300px] md:h-[550px] -mb-1"
                    >
                        <img
                            src="/images/hand-image.png"
                            alt="Hand holding phone"
                            className="object-contain md:-ml-18 object-bottom w-full h-full"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
