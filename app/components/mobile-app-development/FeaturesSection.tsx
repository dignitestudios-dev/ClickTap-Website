"use client";

import React from 'react';
import FeatureCard from './FeatureCard';
import { motion } from 'framer-motion';

type Feature = {
    icon: string;
    title: string;
};

type Props = {
    heading: React.ReactNode;
    features: Feature[];
}

const FeaturesSection = ({ heading, features }: Props) => {
    return (
        <section className="relative py-24 px-20  overflow-hidden">
            <div>
                <img src="/images/feature-bg.png" className='absolute left-0 top-4 h-[900px]' alt="feature-bg.png" />
            </div>
            <div className="mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-[42px] md:text-[64px] font-normal leading-tight text-[#00161D]">
                        {heading}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <FeatureCard icon={feature.icon} title={feature.title} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;
