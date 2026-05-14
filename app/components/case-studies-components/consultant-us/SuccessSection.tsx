"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CONSULTANT_US_CONTENT } from '@/app/constants/content';

export default function SuccessSection() {
    return (
        <section className="relative w-full bg-[#0a111e] text-white px-6 md:px-12 lg:px-20 overflow-hidden rounded-[32px] max-w-[1280px] mx-auto my-12 md:my-20 flex flex-col lg:flex-row items-center justify-between gap-12 min-h-fit py-12 lg:py-0">

            {/* Left Content Side */}
            <div className="flex-1 z-10 text-center lg:text-left">
                <h2 className="text-[28px] md:text-[36px] lg:text-[44px] font-bold tracking-tight text-white mb-6 leading-tight">
                    {CONSULTANT_US_CONTENT.successStory.title}
                </h2>

                <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed mb-10 max-w-[600px] mx-auto lg:mx-0">
                    {CONSULTANT_US_CONTENT.successStory.description}
                </p>

                {/* Action Button */}
                <div className="flex justify-center lg:justify-start">
                    <button className="group flex items-center gap-4 bg-white text-black font-bold px-8 py-4 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg active:scale-95">
                        <span className="text-sm md:text-base">Start Your Success Story</span>
                        <div className="w-10 h-10 rounded-xl bg-[#bfa15f] flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                            <svg
                                xmlns="w3.org"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2.5}
                                stroke="currentColor"
                                className="w-5 h-5 rotate-45"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>

            {/* Right Mobile Mockups Side */}
            <div className="flex-1 relative w-full h-[350px] sm:h-[450px] lg:h-[500px] flex items-end justify-center lg:justify-end gap-4 lg:gap-8 self-end pt-10 overflow-visible">

                {/* First Mobile Mockup (Left Behind) */}
                <motion.div
                    initial={{ y: 300, opacity: 0 }}
                    whileInView={{ y: 40, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 15,
                        delay: 0.1
                    }}
                    className="relative w-[180px] left-36 sm:w-[240px] md:w-[300px] h-full rounded-[32px] overflow-visible"
                >
                    <Image 
                        src="/images/success-img-1.png" 
                        fill
                        className="object-contain object-bottom" 
                        alt="success-img-1" 
                    />
                </motion.div>

                {/* Second Mobile Mockup (Right Front) */}
                <motion.div
                    initial={{ y: 350, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 15,
                        delay: 0.4
                    }}
                    className="relative w-[180px] sm:w-[240px] md:w-[230px] h-full rounded-[32px] z-20 overflow-visible"
                >
                    <Image 
                        src="/images/success-img-2.png" 
                        fill
                        className="object-contain object-bottom" 
                        alt="success-img-2" 
                    />
                </motion.div>

            </div>
        </section>
    );
}
