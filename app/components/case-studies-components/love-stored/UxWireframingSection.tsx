"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LOVE_STORED_CONTENT } from '@/app/constants/content';
import MarqueeSection from './MarqueeSection';

type ScreenCategory = 'all' | 'auth' | 'onboarding' | 'dashboard';

interface WireframeScreen {
    id: number;
    category: ScreenCategory;
    imageSrc: string; // Figma se exported image ka absolute public path
    altText: string;
}

export default function UxWireframingSection() {

    const wireframes = [
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },
        { id: 20 },
        { id: 21 },
        { id: 22 },
        { id: 23 },
        { id: 24 },

    ];


    return (
        <section className="flex w-full flex-col items-center bg-[#FFFFFF] py-20 md:py-32   self-stretch select-none">

            {/* Figma Text Block Header */}
            <div className="flex flex-col items-center text-center w-full max-w-[850px] mb-12 md:mb-16">
                <h2 className="font-['Inter_Tight'] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[66px] font-extrabold text-[#00161D] leading-tight mb-6 tracking-tight">
                    {LOVE_STORED_CONTENT.wireframes.title}
                </h2>
                <p className="font-['Inter_Tight'] text-sm md:text-base lg:text-[17px] font-normal text-[#00161D]/70 leading-relaxed max-w-[760px] px-4">
                    {LOVE_STORED_CONTENT.wireframes.description}
                </p>
            </div>


            {/* Screen Showcases Layout */}
            <div className="w-full ">
                <MarqueeSection images={wireframes} />

            </div>

        </section>
    );
}
