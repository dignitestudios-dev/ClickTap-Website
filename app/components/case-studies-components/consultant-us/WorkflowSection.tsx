"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CONSULTANT_US_CONTENT } from '@/app/constants/content';

interface StepData {
    id: number;
    stepLabel: string;
    title: string;
    description: string;
    positionClass: string;
    reverseLayout: boolean;
    imageSrc?: string;
    imageClass?: string;
}

const steps: StepData[] = CONSULTANT_US_CONTENT.workflow.items.map((item, index) => {
    const configs = [
        { positionClass: 'left-0 top-0', reverseLayout: false, imageSrc: '/images/consultant-1.png', imageClass: 'left-[280px] top-[140px] w-[62px] h-[146px]' },
        { positionClass: 'left-[332.5px] top-[134px]', reverseLayout: true, imageSrc: '/images/consultant-2.png', imageClass: 'left-[605px] top-[200px] w-[62px] h-[87px]' },
        { positionClass: 'left-[665px] top-[59px]', reverseLayout: false, imageSrc: '/images/consultant-3.png', imageClass: 'left-[940px] top-[200px] w-[62px] h-[170px]' },
        { positionClass: 'left-[997.5px] top-[217px]', reverseLayout: true }
    ];
    return {
        id: index + 1,
        stepLabel: `STEP ${index + 1}`,
        ...item,
        ...configs[index]
    };
});

export default function WorkflowSection() {
    // Structural layout timing constants 
    const CARD_DURATION = 0.2;
    const LINE_DURATION = 0.4;
    const PAUSE_GAP = 0.1; // Rest gap between independent actions

    // Custom delay calculation to isolate separate object timelines sequentially
    const getCardDelay = (index: number) => {
        // Step 1 starts at 0. All future steps calculate preceding card and connector durations
        if (index === 0) return 0;
        return index * (CARD_DURATION + LINE_DURATION + (PAUSE_GAP * 2));
    };

    const getLineDelay = (index: number) => {
        // Line triggers instantly after its respective index card finishes animating
        return getCardDelay(index) + CARD_DURATION + PAUSE_GAP;
    };

    // Global timeline layout trigger container variants
    const containerVariants: Variants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    // Premium spring reveal mechanics for individual structural nodes
    const getStepVariants = (index: number): Variants => ({
        hidden: {
            opacity: 0,
            y: 35,
            scale: 0.96
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 85,
                damping: 14,
                mass: 0.8,
                delay: getCardDelay(index)
            }
        }
    });

    // Dedicated smooth timeline variants for connector lines
    const getLineVariants = (index: number): Variants => ({
        hidden: {
            opacity: 0,
            y: 15,
            scale: 0.93
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: LINE_DURATION,
                ease: 'easeOut',
                delay: getLineDelay(index)
            }
        }
    });

    return (
        <section className="relative flex w-full flex-col items-center gap-12 md:gap-20 self-stretch bg-[#101D2D] px-6 py-20 md:py-32 min-h-fit lg:min-h-[826px] overflow-hidden isolate select-none">
            {/* Absolute Background Blue Light Leak/Vector */}
            <div className="absolute right-[-96px] top-[-176px] z-0 h-[701px] w-[383px] rounded-[30px] bg-[#01C2FE] opacity-40 blur-[150px] pointer-events-none" />

            {/* Primary Module Header */}
            <h2 className="z-10 font-['Inter_Tight'] text-[32px] sm:text-[44px] md:text-[56px] lg:text-[66px] font-bold capitalize leading-tight text-white tracking-tight text-center w-full max-w-[800px]">
                Workflow
            </h2>

            {/* Interactive Desktop Canvas Area */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="relative z-10 w-full max-w-[1280px] h-auto lg:h-[511px] grid grid-cols-1 sm:grid-cols-2 lg:block gap-6 md:gap-8 mt-5"
            >
                {steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                        {/* Custom individual array index tracking passed to separate line animations */}
                        {step.imageSrc && (
                            <motion.div
                                variants={getLineVariants(index)}
                                className={`hidden lg:block absolute ${step.imageClass} z-50 pointer-events-none`}
                            >
                                <img
                                    src={step.imageSrc}
                                    alt={`Connector line ${step.id}`}
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        )}

                        {/* Individual Card Node running on dedicated isolated keyframe delays */}
                        <motion.div
                            variants={getStepVariants(index)}
                            whileHover={{
                                scale: 1.03,
                                y: -4,
                            }}
                            className={`lg:absolute ${step.positionClass} z-10 flex w-full lg:w-[282.5px] h-auto min-h-[280px] flex-col gap-2 items-start justify-start cursor-pointer transition-shadow duration-300`}
                        >
                            <div className={`w-full h-full flex flex-col gap-2 ${step.reverseLayout ? 'flex-col-reverse' : 'flex-col'}`}>

                                {/* Step Reference Pill Indicator Block */}
                                <div className="flex w-full h-[56px] items-center justify-center bg-[#122134] rounded-2xl p-4 border border-white/10">
                                    <span className="font-['Inter_Tight'] text-xl md:text-2xl font-bold text-[#C19A4D] tracking-wide">
                                        {step.stepLabel}
                                    </span>
                                </div>

                                {/* Substantive Description Body Container Block */}
                                <div className="flex w-full min-h-[220px] flex-col justify-center items-start bg-[#122134] rounded-2xl p-6 border border-white/10">
                                    <h3 className="font-['Inter_Tight'] text-[18px] md:text-[20px] font-bold text-white mb-3 leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="font-['Inter_Tight'] text-sm md:text-base font-normal text-white/70 leading-relaxed tracking-normal">
                                        {step.description}
                                    </p>
                                </div>

                            </div>
                        </motion.div>
                    </React.Fragment>
                ))}
            </motion.div>
        </section>
    );
}
