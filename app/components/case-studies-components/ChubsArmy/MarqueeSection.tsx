"use client";

import { motion, useMotionValue, useAnimationFrame, useVelocity, useSpring } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useRef, useEffect, useState, useCallback } from "react";

function useMarquee({ speed = 45, dragSensitivity = 0.08, scrollContainer }: { speed?: number, dragSensitivity?: number, scrollContainer?: React.RefObject<HTMLElement | null> } = {}) {
    const trackRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const [trackW, setTrackW] = useState(0);

    useEffect(() => {
        const measure = () => {
            if (trackRef.current) setTrackW(trackRef.current.scrollWidth / 2);
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const scrollY = useMotionValue(0);
    const rawScrollVel = useVelocity(scrollY);
    const smoothScrollVel = useSpring(rawScrollVel, { damping: 50, stiffness: 400 });

    useEffect(() => {
        const el = scrollContainer?.current;
        if (!el) return;
        const onScroll = () => scrollY.set(el.scrollTop);
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, [scrollContainer, scrollY]);

    const isDragging = useRef(false);
    const pointerStartX = useRef(0);
    const motionStartX = useRef(0);

    const onPointerDown = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        isDragging.current = true;
        pointerStartX.current = e.clientX;
        motionStartX.current = x.get();
        e.currentTarget.setPointerCapture(e.pointerId);
    }, [x]);

    const onPointerMove = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
        if (!isDragging.current) return;
        const delta = (e.clientX - pointerStartX.current) / dragSensitivity / 10;
        x.set(motionStartX.current + delta);
    }, [x, dragSensitivity]);

    const onPointerUp = useCallback(() => { isDragging.current = false; }, []);

    useAnimationFrame((_, delta) => {
        if (!trackW || isDragging.current) return;
        const scrollBoost = Math.abs(smoothScrollVel.get()) * 0.03;
        let next = x.get() - (speed + scrollBoost) * (delta / 1000);
        if (next <= -trackW) next += trackW;
        x.set(next);
    });

    const nudge = useCallback((amount: number) => { x.set(x.get() + amount); }, [x]);

    return { trackRef, x, onPointerDown, onPointerMove, onPointerUp, nudge };
}

interface MarqueeSectionProps {
    images: string[];
    speed?: number;
    dragSensitivity?: number;
}

export const MarqueeSection = ({ images, speed = 45, dragSensitivity = 0.08 }: MarqueeSectionProps) => {
    const { trackRef, x, onPointerDown, onPointerMove, onPointerUp, nudge } = useMarquee({ speed, dragSensitivity });

    const scrollLeft = () => nudge(120);
    const scrollRight = () => nudge(-120);

    return (
        <div>
            {/* Marquee */}
            <div
                className="group relative w-full overflow-hidden cursor-grab active:cursor-grabbing"
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={onPointerUp}
                onPointerLeave={onPointerUp}
            >
                <motion.div
                    ref={trackRef}
                    style={{ x, display: "flex", willChange: "transform", userSelect: "none" }}
                    className="py-8"
                >
                    {[...images, ...images].map((src, index) => (
                        <div
                            key={index}
                            className="mx-1 shrink-0 cursor-pointer transition-transform duration-300 hover:scale-105"
                        >
                            <img
                                src={src}
                                alt="marquee item"
                                draggable={false}
                                className="h-[346px] w-[160px]"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Controls */}
            <div className="mt-8 bg-[#D5B482] w-[130px] rounded-[16px] h-[65px] mx-auto flex items-center justify-center gap-1">
                <button
                    onClick={scrollLeft}
                    className="flex h-[56px] cursor-pointer w-[56px] rounded-[16px] items-center justify-center border-2 border-[#FFFFFFCC]  transition-all duration-300 bg-[#FFFFFFCC] text-[#5E2F08]"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={scrollRight}
                    className="flex h-[56px] cursor-pointer w-[56px] rounded-[16px] items-center justify-center  border-y-2 border-r-2 border-[#FFFFFFCC] transition-all duration-300 bg-[#FFFFFFCC] text-[#5E2F08]"
                >
                    <ChevronRight size={24} />
                </button>
            </div>
        </div>
    );
};
export default MarqueeSection;
