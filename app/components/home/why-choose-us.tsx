"use client";

import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './why-choose-us.css';

type MetricCard = {
    id: number;
    title: string;
    description: string;
    icon: string;
};
type Props = {
    heading: React.ReactNode;
    para: any;
    items: MetricCard[];
    description?: string;
    ctaText?: any;
}

export default function WhyChooseUs({ heading, para, items, ctaText }: Props) {
    console.log(ctaText, "cta-text")
    return (
        <section className="relative isolate mx-auto h-auto min-h-[700px] md:min-h-[905px] w-full overflow-hidden rounded-[24px] px-6 md:px-0">
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[1114px] w-full -translate-x-1/2 -translate-y-[calc(50%+19.5px)] rounded-[12px]  bg-image " />

            <div className="relative z-[2] mx-auto flex w-full max-w-[950px] flex-col items-center justify-end gap-[10px]">
                <h2 className="text-center text-[40px] mt-6 lg:text-[60px] font-normal leading-tight capitalize text-[#00161D]">
                    {heading}
                </h2>
                <p className="max-w-[700px] text-center text-[15px] md:text-[18px] font-normal leading-relaxed text-[#00161D] opacity-80">
                    {para}
                </p>
            </div>

            <div className="relative z-[3] mt-20">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    initialSlide={1}
                    speed={800}
                    loop={true}
                    spaceBetween={20}

                    autoplay={{
                        delay: 1500, // 5 seconds
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                    }}

                    breakpoints={{
                        0: {
                            spaceBetween: 20,
                            slidesPerView: 1.1,
                        },
                        768: {
                            spaceBetween: 30,
                            slidesPerView: 'auto',
                        },
                        1024: {
                            spaceBetween: 50,
                            slidesPerView: 'auto',
                        }
                    }}

                    coverflowEffect={{
                        rotate: 30,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false,
                    }}

                    pagination={{
                        clickable: true,
                        el: '.why-pagination',
                    }}

                    navigation={{
                        nextEl: '.why-next',
                        prevEl: '.why-prev',
                    }}

                    modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
                    className="why-swiper"
                >
                    {items.map((card) => (
                        <SwiperSlide key={card.id}>
                            <article className="flex flex-col justify-between h-full">
                                <div className="flex h-[50px] w-[50px] items-center justify-center">
                                    <Image src={card.icon} alt={card.title} height={28} width={28} />
                                </div>

                                <div className="flex w-full flex-col gap-[10px]">
                                    <h3 className="text-[28px] md:text-[35px] font-normal leading-tight text-[#00161D]">
                                        {card.title}
                                    </h3>
                                    <p className="text-[16px] font-normal leading-relaxed text-[#00161D] opacity-70">
                                        {card.description}
                                    </p>
                                </div>
                            </article>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* Custom Navigation Buttons */}
                <div className="why-navigation-container">
                    {/* <button className="why-prev why-nav-btn" aria-label="Previous slide">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="why-next why-nav-btn" aria-label="Next slide">
                        <ChevronRight size={24} />
                    </button> */}
                </div>

                {/* Custom Pagination Container */}
                <div className="why-pagination relative z-10 cursor-pointer flex justify-center gap-2"></div>
            </div>
            {/* CTA BUTTON */}
            {ctaText && (
                <div className="mt-8 relative z-10 flex justify-center">
                    <button className="group/cta flex items-center gap-6 rounded-[8px] border border-[#00161D] bg-white py-2 cursor-pointer pl-6 pr-4 shadow-sm transition-all active:scale-95">
                        <span className="text-[16px] font-semibold text-[#00161D]">
                            {ctaText}
                        </span>

                        <div className="flex h-9 w-9 items-center justify-center rounded-[12px] bg-[#01C2FE] text-white transition-transform group-hover/cta:-translate-y-1 group-hover/cta:translate-x-1">
                            <ArrowUpRight size={18} />
                        </div>
                    </button>
                </div>
            )}
        </section>
    );
}
