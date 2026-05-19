"use client"
import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Image from "next/image";

const interTight = Inter_Tight({
    subsets: ["latin"],
    weight: ["400", "700"],
    display: "swap",
});

type WorkFlowProps = {
    title: React.ReactNode;
    description?: string;
    items: {
        title: string;
        description: string;
    }[];
};

const LINE_CLASSES = [
    "min-h-[280px] md:min-h-[337px]",
    "min-h-[120px] md:min-h-[150px]",
    "min-h-[220px] md:min-h-[280px]",
    "min-h-[160px] md:min-h-[200px]",
    "min-h-[260px] md:min-h-[320px]",
];

/** ~1280px row: 4px bars + 3px gap → 182 segments */
const DOT_COUNT = 182;

function StepIcon() {
    return (
        <Image
            src="/images/dog-foot.png"
            alt="step icon"
            width={16}
            height={16}
        />
    );
}

export default function WorkFlow({ title, description, items }: WorkFlowProps) {
    return (
        <main
            className={`${interTight.className} relative isolate min-h-screen w-full overflow-hidden bg-white text-[#00161D]`}
        >
            <style jsx>{`
    @keyframes pulseFill {
        0% {
            opacity: 0.15;
            transform: scaleY(0.7);
        }

        50% {
            opacity: 1;
            transform: scaleY(1);
        }

        100% {
            opacity: 0.15;
            transform: scaleY(0.7);
        }
    }

    /* vertical lines */
    .animated-line {
        position: relative;
        overflow: hidden;
        background: rgba(94, 47, 8, 0.12);
    }

    .animated-line::before {
        content: "";
        position: absolute;
        inset: 0;
        background: linear-gradient(
            to bottom,
            transparent 0%,
            #5e2f08 20%,
            #5e2f08 50%,
            transparent 100%
        );
        animation: verticalMove 2.5s linear infinite;
    }

    /* bottom bars sequential animation */
    .flow-bar {
        background: #5e2f08;
        opacity: 0.15;
        animation: pulseFill 1.4s ease-in-out infinite;
    }
`}</style>

            <section className="mx-auto flex max-w-[1440px] flex-col items-center gap-16 px-6 md:gap-[100px] md:px-20">
                <div className="flex flex-col items-center gap-4">
                    <h1 className="max-w-[800px] text-center text-[clamp(2rem,6vw,4.125rem)] font-bold capitalize leading-[0.98] tracking-tight text-[#00161D]">
                        {title}
                    </h1>
                    {description && (
                        <p className="text-[#00161D] text-[15px] max-w-4xl text-center font-normal leading-relaxed">
                            {description}
                        </p>
                    )}
                </div>

                <div className="relative flex w-full max-w-[1280px] flex-col">
                    <div className="flex flex-1 flex-col gap-12 md:min-h-[547px] md:flex-row md:items-end md:justify-center md:gap-0">
                        {items.map((step, index) => (
                            <div
                                key={step.title}
                                className="flex flex-1 flex-col items-center gap-5 md:max-w-[256px] md:min-w-0"
                            >
                                <div className="flex w-full max-w-[256px] flex-col items-center gap-5 text-center">
                                    <h2 className="text-xl font-bold leading-6 text-[#5E2F08]">
                                        {step.title}
                                    </h2>

                                    <p className="text-sm font-normal leading-[22px] text-[#00161D]">
                                        {step.description}
                                    </p>
                                </div>

                                {/* Animated Vertical Line */}
                                <div
                                    className={`animated-line w-1 shrink-0 rounded ${LINE_CLASSES[index % LINE_CLASSES.length]}`}
                                    aria-hidden
                                />

                                <div className="relative z-10 flex items-center gap-2.5 rounded-xl bg-[rgba(94,47,8,0.1)] px-3 py-3 backdrop-blur-[100px]">
                                    <div className="flex h-[26px] w-[26px] shrink-0 items-center justify-center rounded bg-[#5E2F08] p-1">
                                        <StepIcon />
                                    </div>

                                    <span className="text-lg font-normal capitalize leading-[22px] text-[#5E2F08]">
                                        step {index + 1}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Animated Bottom Progress Bar */}
                    <div className="relative -mt-14 w-full overflow-hidden pb-2 md:pt-6">
                        <div className="flex w-full flex-wrap justify-center gap-[3px]">
                            {Array.from({ length: DOT_COUNT }).map((_, i) => (
                                <div
                                    key={i}
                                    className="flow-bar h-[15px] w-1 shrink-0 rounded-md"
                                    style={{
                                        animationDelay: `${i * 0.06}s`,
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}