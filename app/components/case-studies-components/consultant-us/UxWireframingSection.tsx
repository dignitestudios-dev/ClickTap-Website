"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CONSULTANT_US_CONTENT } from '@/app/constants/content';

type ScreenCategory = 'all' | 'auth' | 'onboarding' | 'dashboard';

interface WireframeScreen {
    id: number;
    category: ScreenCategory;
    imageSrc: string; // Figma se exported image ka absolute public path
    altText: string;
}

export default function UxWireframingSection() {
    // Apni images ke file paths aur names yahan handle karein
    const screens: WireframeScreen[] = [
        { id: 1, category: 'auth', imageSrc: '/images/wire-framing-1.png', altText: 'Welcome Screen' },
        { id: 2, category: 'auth', imageSrc: '/images/wire-framing-2.png', altText: 'Login Screen' },
        { id: 3, category: 'auth', imageSrc: '/images/wire-framing-3.png', altText: 'Verification Code Screen' },
        { id: 4, category: 'auth', imageSrc: '/images/wire-framing-4.png', altText: 'Forgot Password Screen' },
        { id: 5, category: 'auth', imageSrc: '/images/wire-framing-5.png', altText: 'Privacy Policy Screen' },
        { id: 6, category: 'onboarding', imageSrc: '/images/wire-framing-6.png', altText: 'Setup Profile Screen' },
        { id: 7, category: 'onboarding', imageSrc: '/images/wire-framing-7.png', altText: 'Licenses Upload Screen' },
        { id: 8, category: 'dashboard', imageSrc: '/images/wire-framing-8.png', altText: 'Home Feed Screen' },
        { id: 9, category: 'onboarding', imageSrc: '/images/wire-framing-9.png', altText: 'Phone Verification Screen' },
        { id: 10, category: 'onboarding', imageSrc: '/images/wire-framing-10.png', altText: 'Add Documents Screen' },
    ];



    return (
        <section className="flex w-full flex-col items-center bg-[#FFFFFF] px-6 py-20 md:py-32 md:px-12 lg:px-20 self-stretch select-none">

            {/* Figma Text Block Header */}
            <div className="flex flex-col items-center text-center w-full max-w-[850px] mb-12 md:mb-16">
                <h2 className="font-['Inter_Tight'] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[66px] font-extrabold text-[#00161D] leading-tight mb-6 tracking-tight">
                    {CONSULTANT_US_CONTENT.wireframes.title}
                </h2>
                <p className="font-['Inter_Tight'] text-sm md:text-base lg:text-[17px] font-normal text-[#00161D]/70 leading-relaxed max-w-[760px] px-4">
                    {CONSULTANT_US_CONTENT.wireframes.description}
                </p>
            </div>


            {/* Screen Showcases Layout */}
            <div className="w-full ">
                {/* Desktop Screen Grid Layout */}
                <motion.div
                    layout
                    className="hidden lg:grid grid-cols-5  justify-center items-center px-2"
                >
                    <AnimatePresence mode="popLayout">
                        {screens.map((screen) => (
                            <motion.div
                                layout
                                key={screen.id}
                                initial={{ opacity: 0, scale: 0.93 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.93 }}
                                transition={{ duration: 0.35, ease: 'easeInOut' }}
                                whileHover={{ y: -6, scale: 1.02 }}
                                className="mx-auto w-[248px] h-[413px] bg-white rounded-[32px] p-2  overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-[0_25px_50px_rgba(0,0,0,0.12)]"
                            >
                                <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#FAFAFA]">
                                    <img
                                        src={screen.imageSrc}
                                        alt={screen.altText}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Mobile Viewport Touch Swiper Flow */}
                <div className="block lg:hidden w-full overflow-x-auto pb-6 scrollbar-none snap-x snap-mandatory">
                    <div className="flex gap-5 px-4 w-max">
                        {screens.map((screen) => (
                            <div
                                key={screen.id}
                                className="w-[230px] h-[460px] bg-white rounded-[32px] p-2 shadow-md snap-center flex-shrink-0"
                            >
                                <div className="w-full h-full rounded-[20px] overflow-hidden bg-[#FAFAFA]  relative">
                                    <img
                                        src={screen.imageSrc}
                                        alt={screen.altText}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
}
