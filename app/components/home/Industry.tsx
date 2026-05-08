"use client";

import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import './industry.css';

type IndustryCard = {
    id: number;
    title: string;
    description: string;
    faded?: boolean;
    icon: string;
    isTall?: boolean;
};

type Props = {
    heading: React.ReactNode;
    description: string;
    cards: IndustryCard[];
}

export default function Industry({ heading, description, cards }: Props) {
    return (
        <section className="flex min-h-screen w-full items-center justify-center bg-[#F1FCFF]  py-10">
            <div className="flex w-full  flex-col items-center gap-[35px]">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-[50px] md:text-[66px] leading-tight text-[#00161D]">
                        {heading}
                    </h2>
                    <p className="max-w-[600px] text-[15px] md:text-[18px] leading-relaxed text-[#00161D] opacity-80">
                        {description}
                    </p>
                </div>

                <div className="w-full relative">
                    <Swiper
                        modules={[Navigation]}
                        centeredSlides={true}
                        loop={true}
                        speed={800}
                        slidesPerView={5}
                        spaceBetween={20}

                        navigation={{
                            nextEl: ".industry-next",
                            prevEl: ".industry-prev",
                        }}

                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                            },

                            768: {
                                slidesPerView: 3,
                            },

                            1200: {
                                slidesPerView: 5,
                            },
                        }}

                        className="industry-swiper"
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <article className="industry-card">
                                    <div className="flex h-20 w-20 items-center justify-center">
                                        <img
                                            src={card.icon}
                                            alt={card.title}
                                            className="h-16 w-16 object-contain"
                                        />
                                    </div>

                                    <div className="mt-8 flex flex-col gap-4">
                                        <h3 className="text-[20px] font-medium leading-tight text-[#00161D]">
                                            {card.title}
                                        </h3>

                                        <p className="text-[14px] leading-relaxed text-[#00161D] opacity-70">
                                            {card.description}
                                        </p>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Navigation */}
                <div className="flex  items-center gap-2 rounded-2xl bg-[#DBF7FF] p-1">
                    <button
                        className="industry-prev industry-nav-btn"
                        aria-label="Previous"
                    >
                        <ArrowRight className="h-6 w-6 rotate-180" />
                    </button>
                    <button
                        className="industry-next industry-nav-btn"
                        aria-label="Next"
                    >
                        <ArrowRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}