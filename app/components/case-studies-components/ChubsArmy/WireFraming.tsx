"use client";

import { motion } from "framer-motion";
import { MarqueeSection } from "./MarqueeSection";

const wireframes = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
];

type WireframesProps = {
    title: React.ReactNode;
    description: string;
};

const Wireframes = ({ title, description }: WireframesProps) => {
    const images = wireframes.map(frame => `/images/s${frame.id}.webp`);

    return (
        <div className="py-16 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-[clamp(2rem,8vw,4.125rem)] leading-none px-4">
                        {title}
                    </h2>

                    <p className="mx-auto max-w-5xl text-[15px] leading-relaxed px-4">
                        {description}
                    </p>
                </motion.div>

                <MarqueeSection images={images} />
            </div>
        </div>
    );
};

export default Wireframes;