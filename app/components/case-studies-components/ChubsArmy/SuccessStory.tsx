"use client";
import Image from 'next/image';
import { motion } from "framer-motion";
interface SuccessStoryProps {
    /** Source path for the primary phone mockup graphic */
    deviceImageSrc: string;
    /** Source path for the background circular concentric pattern */
    bgPatternSrc: string;
    /** Optional click handler function for the primary action button */
    onCtaClick?: () => void;
    title: React.ReactNode;
    description: string;
    cta: string;
}

export default function SuccessStory({
    deviceImageSrc,
    bgPatternSrc,
    onCtaClick,
    title,
    description,
    cta,
}: SuccessStoryProps) {
    return (
        <section className="relative flex flex-col overflow-hidden rounded-[32px] min-h-[400px] items-center justify-between bg-[#7D5B3F] md:flex-row md:gap-16">
            {/* Left Column: Typography Content */}
            <div className="z-10 w-full max-w-xl px-6 md:px-10  text-white">
                <h1 className="mb-6 text-[36px] font-normal leading-tight tracking-tight ">
                    {title}
                </h1>

                <p className="mb-10 text-base leading-relaxed text-white/90 md:text-[15px]">
                    {description}
                </p>

                <button
                    onClick={onCtaClick}
                    className="group inline-flex cursor-pointer items-center gap-4 rounded-xl bg-white py-3 pl-6 pr-4 font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
                >
                    <span>{cta}</span>
                    <Image
                        src="/images/cta-button-chubs.png"
                        alt="Arrow Right"
                        width={32}
                        height={32}
                        className="w-[32px] h-[32px]"
                    />
                </button>
            </div>

            {/* Right Column: Keyed Image Layers */}
            <div className="relative flex w-full ">
                <div className="relative w-full md:right-10 aspect-[4/3]">

                    {/* Layer 1: Background Concentric Pattern */}
                    <div className="absolute inset-0  h-full top-15 z-0 scale-125 opacity-40">
                        <Image
                            src={bgPatternSrc}
                            alt="Decorative background grid system pattern"
                            fill
                            sizes="(max-w-768px) 100vw, 50vw"
                            priority
                            className="object-contain"
                        />
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 120 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative z-10 -bottom-16 left-10  aspect-[4/3]"
                    >
                        <div className="relative h-full w-full scale-90">
                            <Image
                                src={deviceImageSrc}
                                alt="App performance user interface layout mockup"
                                fill
                                priority
                                className="object-contain"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
