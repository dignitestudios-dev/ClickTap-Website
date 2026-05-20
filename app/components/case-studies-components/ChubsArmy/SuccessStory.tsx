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
    title,
    description,
}: SuccessStoryProps) {
    return (
   <section className="relative overflow-hidden rounded-[32px] bg-[#7D5B3F] min-h-[500px] flex flex-col justify-between md:flex-row items-end">

    {/* Left Content */}
    <div className="relative z-10 w-full max-w-xl px-6 py-14 md:px-10 md:py-16 text-white">
        <h1 className="mb-6 text-[50px] font-normal leading-tight tracking-tight">
            {title}
        </h1>

        <p className="mb-10 text-base leading-relaxed text-white/90 md:text-[15px]">
            {description}
        </p>

        {/* <button
            onClick={onCtaClick}
            className="group inline-flex cursor-pointer items-center gap-4 rounded-xl bg-white py-3 pl-6 pr-4 font-semibold text-black transition-transform duration-200 hover:-translate-y-0.5"
        >
            <span>{}</span>

            <Image
                src="/images/cta-button-chubs.png"
                alt="Arrow Right"
                width={32}
                height={32}
                className="h-[32px] w-[32px]"
            />
        </button> */}
    </div>

    {/* Right Visual Side */}
    <div className="relative w-full md:w-[55%]  flex items-end justify-center">

        {/* Background Shape */}
        <div className="absolute inset-0 flex items-end justify-center z-0">
            <Image
                src={bgPatternSrc}
                alt="Decorative background pattern"
                width={1100}
                height={700}
                priority
                className="
                    w-[120%]
                    max-w-none
                    object-contain
                    object-bottom
                    opacity-40
                    translate-y-8
                "
            />
        </div>

        {/* Device Image */}
        <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
                duration: 1,
                ease: "easeOut",
            }}
            viewport={{ once: true, amount: 0.3 }}
            className="
                relative
                z-10
                w-full
                h-full
                flex
                items-end
                justify-center
            "
        >
            <Image
                src={deviceImageSrc}
                alt="App UI Mockup"
                width={800}
                height={500}
                priority
                className="
                    object-contain
                    object-bottom
                    w-[85%]
                    sm:w-[75%]
                    md:w-[80%]
                    lg:w-[80%]
                    xl:w-[70%]
                    h-
                    ml-16
                "
            />
        </motion.div>
    </div>
</section>
    );
}
