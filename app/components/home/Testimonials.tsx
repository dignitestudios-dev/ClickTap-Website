"use client";

import { useRef } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

type Testimonial = {
    id: number;
    name: string;
    role: string;
    title: string;
    message: string;
    date: string;
    rating: number;
    avatar?: string;
};

type Props = {
    heading: React.ReactNode;
    testimonials: Testimonial[];
}

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
        <article className="h-[370px] w-full max-w-[582px] rounded-3xl bg-white p-10 mx-auto">
            <div className="flex h-[64px] items-center justify-between">
                <div className="flex items-center gap-6">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E1E1E1] text-[24px] font-semibold text-[#00161D] overflow-hidden">
                        <img src={item.avatar || "/images/person.png"} alt={item.name} className="w-full h-full object-cover" />
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

            <div className="mt-6 flex flex-col gap-4 text-left">
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

export default function TestimonialPage({ heading, testimonials }: Props) {
    const swiperRef = useRef<any>(null);

    return (
        <section className="relative flex min-h-screen w-full justify-center overflow-hidden bg-[#F1FCFF] px-6 md:px-20 py-20">
            <div className="pointer-events-none absolute left-0 top-[68px] h-[242px] w-[413px]">
                <div className="absolute left-[343px] top-0 h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-[273px] top-0 h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-[165px] top-[122px] h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-0 top-[102px] h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-0 top-[172px] h-[70px] w-[70px] bg-[#DBF7FF]" />
            </div>

            <div className="relative z-10 flex w-full max-w-[1440px] flex-col items-center justify-center gap-[60px]">
                <div className="flex w-full flex-col items-center gap-[60px]">
                    <div className="flex w-full items-center justify-center">
                        <h1
                            className=" text-center text-[40px] md:text-[66px] leading-tight font-normal text-[#00161D]"
                            style={{ fontFamily: "'Inter Tight', var(--font-sans)" }}
                        >
                            {heading}
                        </h1>
                    </div>

                    <div className="w-full overflow-visible">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            spaceBetween={40}
                            slidesPerView={1}
                            centeredSlides={true}
                            loop={true}
                            speed={800}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 1.5,
                                },
                                1200: {
                                    slidesPerView: 2,
                                },
                                1400: {
                                    slidesPerView: 2.2,
                                }
                            }}
                            onSwiper={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            className="testimonial-swiper w-full !overflow-visible"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id} className="flex justify-center">
                                    <TestimonialCard item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="flex h-14 w-[109px] items-center gap-[3px] rounded-2xl bg-[#DBF7FF] p-[3px]">
                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="flex h-[50px] w-[50px] rotate-180 items-center justify-center rounded-2xl border border-white/50 bg-white/80 backdrop-blur-[10px] transition-all hover:scale-105 active:scale-95"
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft className="h-5 w-5 rotate-180 text-[#01C2FE]" />
                    </button>
                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="flex h-[50px] w-[50px] items-center justify-center rounded-2xl border border-white/50 bg-white/80 backdrop-blur-[10px] transition-all hover:scale-105 active:scale-95"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight className="h-5 w-5 text-[#01C2FE]" />
                    </button>
                </div>
            </div>
        </section>
    );
}

