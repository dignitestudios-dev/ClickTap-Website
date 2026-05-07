"use client";

import React from 'react';
import Image from 'next/image';
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
            <div className="relative w-full max-w-[1440px] mx-auto h-[400px] rounded-[40px] md:rounded-[60px] overflow-hidden bg-[#01C2FE80] min-h-[400px] flex flex-col md:flex-row items-center">

                {/* Gradient Overlay for the blue effect */}
                <div className="absolute inset-0 z-0 w-full " style={{ background: `url("/images/bg-start.png") `, backgroundSize: "cover !important", backgroundRepeat: "no-repeat !important", }} />

                {/* Background Shape - Ripple effect */}
                <div className="absolute -right-5  w-[700px] top-16  z-10 opacity-60">
                    <Image
                        src="/images/bg-shape.png"
                        alt="Background Shape"
                        width={700}
                        height={300}
                        className="h-[350px] w-[800px] "
                    />
                </div>

                {/* Left Content */}
                <div className="relative z-20 w-full md:w-[55%] p-10 md:p-20 flex flex-col gap-6">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-white text-[36px] md:text-[36px] leading-[1.1] mb-4">
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
                <div className="relative z-20 w-full md:w-[45%] h-full flex justify-center md:justify-end items-end self-end">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative w-[320px] md:w-[500px] h-[350px] md:h-[550px] -mb-1"
                    >
                        <Image
                            src="/images/hand-image.png"
                            alt="Hand holding phone"
                            fill
                            className="object-contain -ml-24 object-bottom"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default QuoteSection;
