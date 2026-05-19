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
    bgImg: string;
    bgWidth?: number;
    bgHeight?: number;
};

function TiltCard({ title, items, bgImg, bgWidth, bgHeight }: CardProps) {
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
            className="relative w-full bg-[#0A0A0A] max-w-[645px] h-[380px] md:h-[450px] rounded-[24px] overflow-hidden cursor-pointer"
        >




            {/* Content */}
            <div
                style={{ transform: "translateZ(60px)" }}
                className="relative h-full"
            >
                {/* Background */}
                <Image
                    src={"/images/heart-group.png"}
                    alt="discovery-bg"
                    fill
                    className="object-contain  relative z-5 rounded-[16px]"
                />
                <div className="p-16" >
                    <Image
                        src={bgImg}
                        alt="card-1"
                        width={bgWidth}
                        height={bgHeight}
                        className="object-contain   mx-auto rounded-[16px]"
                    />
                </div>
                <div className="absolute w-full z-20! px-10 bottom-0 h-[115px]  bg-[#0A0A0A]/5  backdrop-blur-[20px]">
                    {items.map((item, index) => (
                        <p
                            key={index}
                            className="text-sm md:text-[16px] flex items-center gap-3 leading-relaxed text-white/90"
                            style={{ transform: "translateZ(40px)" }}
                        >

                            {item}
                        </p>
                    ))}
                </div>
            </div>
        </motion.article>
    );
}

export default function VisionBehind({
    title,
    description,
    marketResearch,
    userResearch,
}: DiscoverResearchProps) {
    return (
        <section className="px-6 md:px-12 lg:px-20 perspective-[2000px]">
            <div className="flex w-full flex-col items-center justify-center gap-4 sm:gap-6">
                <h2 className="text-[40px] lg:text-[60px] font-bold text-center capitalize text-[#00161D] leading-tight">
                    {title}
                </h2>

                <p className="text-[#00161D]/80 text-sm md:text-base lg:text-[17px] max-w-4xl text-center font-normal leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mt-12 md:mt-16">
                <TiltCard
                    title="Market Research:"
                    bgImg="/images/love-card-1.png"
                    items={marketResearch}
                    bgWidth={219}
                    bgHeight={450}
                />

                <TiltCard
                    title="User Research:"
                    bgImg="/images/love-card-2.png"
                    items={userResearch}
                    bgWidth={406}
                    bgHeight={243}
                />
            </div>
        </section>
    );
}