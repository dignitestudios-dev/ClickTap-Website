"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LOVE_STORED_CONTENT } from '@/app/constants/content';

export default function SuccessSection() {
    return (
        <section className="relative w-full bg-[#0a111e] text-white px-6 py-5 md:px-12 lg:px-20 overflow-hidden rounded-[32px] max-w-[1280px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 min-h-fit">

            {/* Left Content Side */}
            <div className="flex-1 z-10 text-center lg:text-left">
                <h2 className="text-[40px] lg:text-[60px] font-bold tracking-tight text-white mb-6 leading-tight">
                    {LOVE_STORED_CONTENT.successStory.title}
                </h2>

                <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed mb-10 max-w-[600px] mx-auto lg:mx-0">
                    {LOVE_STORED_CONTENT.successStory.description}
                </p>

                {/* Action Button */}
                <div className="flex justify-center lg:justify-start">
                    <button className="group flex items-center gap-4 bg-white text-black font-bold px-5 py-2 rounded-2xl hover:bg-gray-100 transition-all duration-300 shadow-lg active:scale-95">
                        <span className="text-sm md:text-base">{LOVE_STORED_CONTENT.successStory.cta}</span>
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
            <div className="flex-1 relative w-full h-[350px]  sm:h-[400px] lg:h-[500px]  gap-4 lg:gap-8  pt-10 overflow-visible">

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
                    className="relative w-[180px] sm:w-[240px] md:w-[550px]  h-full rounded-[32px] z-20 overflow-visible"
                >
                    <Image
                        src="/images/love-restored.png"
                        fill
                        className="object-contain ml-10"
                        alt="success-img-2"
                    />
                </motion.div>

            </div>
        </section>
    );
}
