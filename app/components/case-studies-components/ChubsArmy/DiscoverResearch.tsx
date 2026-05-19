"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type DiscoverResearchProps = {
    title: React.ReactNode;
    description: string;
    marketResearch: string[];
    userResearch: string[];
    keyInsight: string;
};

type CardProps = {
    title: string;
    items: string[];
};

function TiltCard({ title, items }: CardProps) {
    const rotateX = useMotionValue(0);
    const rotateY = useMotionValue(0);

    const smoothRotateX = useSpring(rotateX, {
        stiffness: 200,
        damping: 20,
    });

    const smoothRotateY = useSpring(rotateY, {
        stiffness: 200,
        damping: 20,
    });

    const glareX = useTransform(smoothRotateY, [-15, 15], ["0%", "100%"]);
    const glareY = useTransform(smoothRotateX, [-15, 15], ["0%", "100%"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        rotateX.set(-(yPct * 20));
        rotateY.set(xPct * 20);
    };

    const handleMouseLeave = () => {
        rotateX.set(0);
        rotateY.set(0);
    };

    return (
        <motion.article
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX: smoothRotateX,
                rotateY: smoothRotateY,
                transformStyle: "preserve-3d",
            }}
            className="relative w-full max-w-[635px] h-[400px] md:h-[450px] rounded-[16px] overflow-hidden cursor-pointer"
        >
            {/* Background */}
            <Image
                src="/images/discovery-bg.webp"
                alt="discovery-bg"
                fill
                className="object-cover rounded-[16px]"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/30 z-[1]" />

            {/* Glare Effect */}
            <motion.div
                style={{
                    background: `radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.25), transparent 40%)`,
                }}
                className="absolute inset-0 z-[2]"
            />

            {/* Content */}
            <div
                style={{ transform: "translateZ(60px)" }}
                className="relative z-10 h-full p-5 flex flex-col justify-between"
            >
                <h3 className="text-[24px] font-medium text-white">
                    {title}
                </h3>

                <div className="mt-8 flex flex-col gap-4">
                    {items.map((item, index) => (
                        <p
                            key={index}
                            className="text-[16px] flex items-center gap-2 leading-relaxed text-white/80"
                            style={{ transform: "translateZ(40px)" }}
                        >
                            <Image
                                src="/images/dog-foot.png"
                                alt="search"
                                width={16}
                                height={16}
                            />
                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

export default function DiscoverResearch({
    title,
    description,
    marketResearch,
    userResearch,
}: DiscoverResearchProps) {
    return (
        <section className="px-4 md:px-20 perspective-[2000px]">
            <div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4">
                <h2 className="text-[40px] lg:text-[60px] font-normal text-center capitalize text-[#00161D]">
                    {title}
                </h2>

                <p className="text-[#00161D] text-[15px] max-w-4xl text-center font-normal leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-10">
                <TiltCard
                    title="Market Research:"
                    items={marketResearch}
                />

                <TiltCard
                    title="User Research:"
                    items={userResearch}
                />
            </div>
        </section>
    );
}