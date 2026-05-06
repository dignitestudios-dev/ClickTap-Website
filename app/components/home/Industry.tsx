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

const industryCards: IndustryCard[] = [
    {
        id: 1,
        title: "Healthcare",
        description:
            "We have built products for healthcare businesses and understand the need for reliable digital systems. We develop products that simplify appointments and access to care.",
        faded: true,
        icon: "/images/healthcare.png",
    },
    {
        id: 2,
        title: "Social Media",
        description:
            "Social platforms rely on engagement and smooth interaction. The team designs scalable social media apps that help people connect and share content in communities.",
        icon: "/images/social.png",
    },
    {
        id: 3,
        title: "Dating and Matchmaking",
        description:
            "For dating platforms, user trust is necessary. We build apps that make it easy for people to discover matches and interact through comfortable and structured experiences.",
        icon: "/images/healthcare.png",
        isTall: true,
    },
    {
        id: 4,
        title: "Travel and Hospitality",
        description:
            "Travel experiences involve multiple steps from discovery to booking. We create digital products that simplify this process while managing trips through smooth interfaces.",
        icon: "/images/travel.png",
    },
    {
        id: 5,
        title: "E commerce",
        description:
            "Online shopping works best when it feels quick. Our team builds ecommerce platforms that help businesses show products clearly with a reliable buying experience.",
        faded: true,
        icon: "/images/health.png",
    },
    {
        id: 6,
        title: "Real Estate",
        description:
            "Finding the right property can be complex. The team develops real estate platforms that make the journey easier and clearer for users.",
        icon: "/images/healthcare.png",
    },
];

export default function Industry() {
    return (
        <section className="flex min-h-screen w-full items-center justify-center bg-[#F1FCFF] px-5 md:px-20 py-20">
            <div className="flex w-full max-w-7xl flex-col items-center gap-[60px]">
                <div className="flex flex-col items-center gap-6 text-center">
                    <h2 className="text-[50px] md:text-[66px] leading-tight text-[#00161D] capitalize">
                        <span className="font-bold"> Niches</span> We Serve
                    </h2>
                    <p className="max-w-[600px] text-[15px] md:text-[18px] leading-relaxed text-[#00161D] opacity-80">
                        The development team’s experience with multiple industries makes it easy to adjust our approach for each project. The focus stays on building products that are simple and useful.
                    </p>
                </div>

                <div className="w-full relative px-4">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={20}
                        slidesPerView={'auto'}
                        centeredSlides={true}
                        initialSlide={0}
                        loop={true}
                        navigation={{
                            nextEl: '.industry-next',
                            prevEl: '.industry-prev',
                        }}
                        className="industry-swiper"
                    >
                        {industryCards.map((card) => (
                            <SwiperSlide key={card.id} className="!w-[300px]">
                                <article className="industry-card">
                                    <div className="h-20 w-20 flex items-center justify-center">
                                        <img src={card.icon} alt={card.title} className="w-16 h-16 object-contain" />
                                    </div>

                                    <div className="flex flex-col gap-4 mt-8">
                                        <h3 className="text-[28px] font-bold text-[#00161D] leading-tight">
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