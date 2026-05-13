"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type VisionBehindProps = {
    title: React.ReactNode;
    description: string;
};

export default function VisionBehind({ title, description }: VisionBehindProps) {
    return (
        <section className="py-10 mt-10 md:mt-15 px-4 md:px-20 grid grid-cols-1 md:grid-cols-2 items-center gap-12 md:gap-30 bg-white relative overflow-hidden">
            {/* Left Content Side */}
            <div>
                <h2 className="text-[36px] font-normal capitalize text-[#00161D]">
                    {title}
                </h2>

                <p className="text-[#00161D] text-[15px] font-normal leading-relaxed mt-5">
                    {description}
                </p>
            </div>

            {/* Perspective Screen Image Container */}
            <div className="relative w-full max-w-[600px] mx-auto min-h-[350px] md:min-h-[550px]">

                {/* Paw */}
                <div className="absolute -top-8 -left-8 z-30 w-16 h-16">
                    <Image
                        src="/images/dark-dog-foot.png"
                        alt="Dog Footprint"
                        width={64}
                        height={64}
                        className="object-contain"
                    />
                </div>
                <div className="relative rounded-[30px] overflow-hidden border-2 border-[#8B5A2B]/40 w-full h-full flex items-center justify-center">
                    <div className="absolute bottom-0 scale-175  z-10">

                        {/* Ellipse Background */}
                        <Image
                            src="/images/ellipse.png"
                            alt="ellipse"
                            width={350}
                            height={400}
                            className="object-contain"
                        />

                    </div>
                    {/* Mobile Image */}
                    <motion.div
                        initial={{ opacity: 0, y: 120 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 1,
                            ease: "easeOut",
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        className="relative z-10"
                    >
                        <div className="rounded-[40px] scale-90">
                            <Image
                                src="/images/behind-vision-device.png"
                                width={418}
                                height={556}
                                alt="Chubbs Army Vision Mockup"
                                className="relative -bottom-8 mx-auto rounded-[40px]"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>

        </section>
    );
}
