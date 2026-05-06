"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

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

const cards: MetricCard[] = [
    {
        id: 1,
        title: "Product Experience",
        description: "The team has worked with growing businesses to design and build digital products across different industries. This experience helps us understand what works in real situations.",
        icon: "/images/why-1.png",
    },
    {
        id: 2,
        title: "Clear Process",
        description: "The team at ClickTap Solutions keeps the process straightforward so you always know what is happening and progress stays smooth.",
        icon: "/images/why-2.png",
    },
    {
        id: 3,
        title: "Easy Communication",
        description: "We stay close and easy to reach throughout the project with clear conversations that keep everyone aligned and moving in the same direction.",
        icon: "/images/why-3.png",
    },
    {
        id: 4,
        title: "Built to Scale",
        description: "We build products with growth in mind, so they do not just work for today but can handle more users and demand over time.",
        icon: "/images/why-1.png",
    },
    {
        id: 5,
        title: "Ongoing Support",
        description: "We do not just build and leave. You will find us still with you after launch to help with updates and keep your product running smoothly.",
        icon: "/images/why-2.png",
    },
    {
        id: 6,
        title: "Skilled Team",
        description: "Our team brings together designers and developers who care about building things properly, and every project gets focused attention.",
        icon: "/images/why-3.png",
    },
];

export default function WhyChooseUs() {
    return (
        <section className="relative isolate mx-auto h-auto min-h-[905px] w-full max-w-[1440px] overflow-hidden rounded-[24px] bg-[#F1FCFF] px-4 md:px-[40px] py-[100px]">
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[1114px] w-full -translate-x-1/2 -translate-y-[calc(50%+19.5px)] rounded-[12px] border-4 border-white bg-image " />

            <div className="relative z-[2] mx-auto flex w-full max-w-[950px] flex-col items-center justify-end gap-[10px]">
                <h2 className="text-center text-[40px] md:text-[66px] font-normal leading-tight capitalize text-[#00161D]">
                    How We Prove to be the Best <span className="font-bold">Development Partner</span>
                </h2>
                <p className="max-w-[700px] text-center text-[15px] md:text-[18px] font-normal leading-relaxed text-[#00161D] opacity-80">
                    We are a hands on team that helps startups and businesses turn ideas into actual digital products, the way they envisioned. We keep things simple while working closely with you and focus on building solutions that feel natural.
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
                    coverflowEffect={{
                        rotate: 30,     /* Subtle tilt for side cards */
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: false, /* Clean modern UI without harsh shadows */
                    }}
                    pagination={{
                        clickable: true,
                        el: '.why-pagination',
                    }}
                    navigation={{
                        nextEl: '.why-next',
                        prevEl: '.why-prev',
                    }}
                    modules={[EffectCoverflow, Pagination, Navigation]}
                    className="why-swiper"
                >
                    {cards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <article className="flex flex-col justify-between h-full">
                                <div className="flex h-[50px] w-[50px] items-center justify-center">
                                    <Image src={card.icon} alt={card.title} height={28} width={28} />
                                </div>

                                <div className="flex w-full flex-col gap-[10px]">
                                    <h3 className="text-[32px] md:text-[44px] font-normal leading-tight text-[#00161D]">
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
                    <button className="why-prev why-nav-btn" aria-label="Previous slide">
                        <ChevronLeft size={24} />
                    </button>
                    <button className="why-next why-nav-btn" aria-label="Next slide">
                        <ChevronRight size={24} />
                    </button>
                </div>

                {/* Custom Pagination Container */}
                <div className="why-pagination mt-16 flex justify-center gap-2"></div>
            </div>
        </section>
    );
}
