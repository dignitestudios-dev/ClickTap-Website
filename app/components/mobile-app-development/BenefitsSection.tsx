"use client";

import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import '../home/industry.css';

type BenefitsCard = {
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
    cards: BenefitsCard[];
}

export default function BenefitsSection({ heading, description, cards }: Props) {
    return (
        <section className="flex min-h-screen w-full items-center justify-center bg-[#F1FCFF]  py-20">
            <div className="flex w-full  flex-col items-center gap-[60px]">
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-[50px] md:text-[66px] leading-tight text-[#00161D] capitalize">
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
                        slidesPerView={4}
                        spaceBetween={24}

                        navigation={{
                            nextEl: ".industry-next",
                            prevEl: ".industry-prev",
                        }}

                        breakpoints={{
                            0: {
                                slidesPerView: 2.2,
                            },

                            768: {
                                slidesPerView: 2,
                            },

                            1200: {
                                slidesPerView: 3,
                            },
                        }}

                        className="industry-swiper"
                    >
                        {cards.map((card) => (
                            <SwiperSlide key={card.id}>
                                <article className="industry-card" style={{ background: `url(/images/benefit-card-bg.png)`, backgroundSize: "cover", backgroundPosition: "center" }}>
                                    <h3 className="text-[28px] font-bold leading-tight text-white">
                                        {card.title}
                                    </h3>
                                    <div className="mt-8 flex flex-col gap-4">


                                        <p className="text-[14px] leading-relaxed text-white opacity-70">
                                            {card.description}
                                        </p>
                                    </div>
                                </article>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Custom Navigation */}
                <div className="flex items-center gap-2 rounded-2xl bg-[#DBF7FF] p-1">
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