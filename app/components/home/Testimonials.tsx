"use client";

import { useMemo, useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

type Testimonial = {
    id: number;
    name: string;
    role: string;
    title: string;
    message: string;
    date: string;
    rating: number;
};

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "James Tate",
        role: "Founder, Bright-E Labs",
        title: "Fast and reliable delivery",
        message:
            "Their developers turned our idea into a reliable app way faster than we expected. Communicating was always clear and easy with them.",
        date: "2024",
        rating: 5,
    },
    {
        id: 2,
        name: "Sarah David",
        role: "Product Manager, MediC Health",
        title: "Strong product understanding",
        message:
            "Definitely a great team to work with. They understood our vision quickly and delivered a product that our users have loved so far.",
        date: "2024",
        rating: 5,
    },
    {
        id: 3,
        name: "Daniel Carter",
        role: "CTO, UrbanCart",
        title: "Improved user engagement",
        message:
            "We saw improvements in engagement after launch. The app feels very clean and very thoughtfully built.",
        date: "2024",
        rating: 5,
    },
    {
        id: 4,
        name: "Emily Rachel",
        role: "CEO, TravelMate",
        title: "Simple and consistent process",
        message:
            "Their team made the entire process simple. Everything was handled with care and consistency with them.",
        date: "2024",
        rating: 5,
    },
    {
        id: 5,
        name: "Michael Smith",
        role: "Operations Lead, CoreSync Labs",
        title: "Strong business alignment",
        message:
            "The internal system finally works just the way we wanted. The team understood our business needs from day one.",
        date: "2024",
        rating: 5,
    },
    {
        id: 6,
        name: "Olivia Cooper",
        role: "Co-Founder, Linkify",
        title: "Professional and responsive",
        message:
            "They were highly professional and responsive. They delivered exactly what we needed and helped us scale without friction.",
        date: "2024",
        rating: 5,
    },
];

const CARD_WIDTH = 592;
const CARD_GAP = 40;

function RatingStars({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-[6px]">
            {Array.from({ length: 5 }).map((_, index) => {
                const fill = Math.max(0, Math.min(1, rating - index));
                return (
                    <div key={index} className="relative h-6 w-6">
                        <Star className="absolute inset-0 h-6 w-6 fill-[#DCDCDC] text-[#DCDCDC]" />
                        {fill > 0 ? (
                            <div className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                                <Star className="h-6 w-6 fill-[#FAD171] text-[#FAD171]" />
                            </div>
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}

function TestimonialCard({ item }: { item: Testimonial }) {
    return (
        <article className="h-[370px] w-[592px] rounded-3xl bg-white p-10">
            <div className="flex h-[64px] items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E1E1E1] text-[24px] font-semibold text-[#00161D]">
                        <img src="/images/person.png" alt="person.png" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p
                            className="text-[18px] leading-[22px] font-medium text-[#00161D]"
                        >
                            {item.name}
                        </p>
                        <p
                            className="text-[16px] leading-[19px] font-normal text-[#00161D]"
                        >
                            {item.role}
                        </p>
                    </div>
                </div>

                <RatingStars rating={item.rating} />
            </div>

            <div className="mt-6 border-t border-[#DCDCDC]" />

            <div className="mt-6 flex flex-col gap-4">
                <h3
                    className="text-[18px] leading-[22px] font-bold text-[#00161D]"
                    style={{ fontFamily: "'Inter Tight', var(--font-sans)" }}
                >
                    {item.title}
                </h3>
                <p
                    className="text-[18px] leading-[22px] font-light text-[#00161D]"
                    style={{ fontFamily: "'Inter Tight', var(--font-sans)" }}
                >
                    {item.message}
                </p>
            </div>

            <div className="mt-6 border-t border-[#DCDCDC]" />

            <div className="mt-6 flex items-center justify-between">
                <div className="h-10 w-10">
                    <img src="/images/testimonial.png" alt="testimonial.png" className="w-full h-full object-contain" />
                </div>
                <p
                    className="text-[16px] leading-[19px] font-normal text-[#00161D]"
                    style={{ fontFamily: "'Inter Tight', var(--font-sans)" }}
                >
                    {item.date}
                </p>
            </div>
        </article>
    );
}

export default function TestimonialPage() {
    const [activeIndex, setActiveIndex] = useState(0);
    const totalItems = testimonials.length;

    const translateX = useMemo(() => activeIndex * (CARD_WIDTH + CARD_GAP), [activeIndex]);

    return (
        <section className="relative flex min-h-screen w-full justify-center overflow-hidden bg-[#F1FCFF] px-20 ">
            <div className="pointer-events-none absolute left-0 top-[68px] h-[242px] w-[413px]">
                <div className="absolute left-[343px] top-0 h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-[273px] top-0 h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-[165px] top-[122px] h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-0 top-[102px] h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-0 top-[172px] h-[70px] w-[70px] bg-[#DBF7FF]" />
            </div>

            <div className="relative z-10 flex h-[784px] w-full max-w-[1440px] flex-col items-center justify-center gap-[30px]">
                <div className="flex h-[498px] w-[1280px] flex-col items-start gap-[60px]">
                    <div className="flex h-[65px] w-full items-center justify-center">
                        <h1
                            className=" text-center text-[66px] leading-[65px] font-normal text-[#00161D]"
                            style={{ fontFamily: "'Inter Tight', var(--font-sans)" }}
                        >
                            What Our Clients Have to <span className="font-bold">Say About Us</span>
                        </h1>
                    </div>

                    <div className="h-[373px]  overflow-hidden">
                        <div
                            className="flex items-center gap-10 transition-transform duration-500 ease-out"
                            style={{ transform: `translateX(-${translateX}px)` }}
                        >
                            {testimonials.map((item) => (
                                <TestimonialCard key={item.id} item={item} />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="flex h-14 w-[109px] items-center gap-[3px] rounded-2xl bg-[#DBF7FF] p-[3px]">
                    <button
                        type="button"
                        onClick={() => setActiveIndex((prev) => (prev - 1 + totalItems) % totalItems)}
                        className="flex h-[50px] w-[50px] rotate-180 items-center justify-center rounded-2xl border border-white/50 bg-white/80 backdrop-blur-[10px]"
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft className="h-5 w-5 rotate-180 text-[#01C2FE]" />
                    </button>
                    <button
                        type="button"
                        onClick={() => setActiveIndex((prev) => (prev + 1) % totalItems)}
                        className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/50 bg-white/80 backdrop-blur-[10px]"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight className="h-5 w-5 text-[#01C2FE]" />
                    </button>
                </div>
            </div>
        </section>
    );
}
