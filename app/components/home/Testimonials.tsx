"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

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
    description?: string;
    testimonials: Testimonial[];
};

function RatingStars({ rating }: { rating: number }) {
    return (
        <div className="flex items-center gap-1 sm:gap-[6px]">
            {Array.from({ length: 5 }).map((_, index) => {
                const fill = Math.max(0, Math.min(1, rating - index));
                return (
                    <div key={index} className="relative h-5 w-5 sm:h-6 sm:w-6">
                        <Star className="absolute inset-0 h-5 w-5 sm:h-6 sm:w-6 fill-[#DCDCDC] text-[#DCDCDC]" />
                        {fill > 0 && (
                            <div
                                className="absolute inset-0 overflow-hidden"
                                style={{ width: `${fill * 100}%` }}
                            >
                                <Star className="h-5 w-5 sm:h-6 sm:w-6 fill-[#FAD171] text-[#FAD171]" />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

function TestimonialCard({ item }: { item: Testimonial }) {
    return (
        <article className="flex flex-col w-full max-w-[582px] rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-7 md:p-10 mx-auto">
            {/* ── Header: avatar + name/role + stars ── */}
            <div className="flex md:flex-row gap-3 sm:gap-4 items-start xs:items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0 relative h-12 w-12 sm:h-16 sm:w-16 rounded-full bg-[#E1E1E1] overflow-hidden">
                        <Image
                            src={item.avatar || "/images/person.png"}
                            alt={item.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    {/* Name & role */}
                    <div className="flex flex-col gap-1 sm:gap-2">
                        <p className="text-[15px] sm:text-[18px] leading-snug font-medium text-[#00161D]">
                            {item.name}
                        </p>
                        <p className="text-[13px] sm:text-[16px] leading-snug font-normal text-[#00161D]/70">
                            {item.role}
                        </p>
                    </div>
                </div>

                {/* Stars — stays beside name on xs+ */}
                <div className="sm:ml-[60px] xs:ml-0">
                    <RatingStars rating={item.rating} />
                </div>
            </div>

            {/* ── Divider ── */}
            <div className="mt-5 sm:mt-6 border-t border-[#DCDCDC]" />

            {/* ── Title & message ── */}
            <div className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4 text-left">
                <h3
                    className="text-[15px] sm:text-[18px] leading-snug font-bold text-[#00161D]"
                    style={{ fontFamily: "'Inter Tight', var(--font-sans)" }}
                >
                    {item.title}
                </h3>
                <p
                    className="text-[14px] sm:text-[18px] leading-relaxed font-light text-[#00161D]"
                    style={{ fontFamily: "'Inter Tight', var(--font-sans)" }}
                >
                    {item.message}
                </p>
            </div>

            {/* ── Footer ── */}
            <div className="mt-4 sm:mt-6 border-t border-[#DCDCDC]" />
            <div className="mt-4 sm:mt-6 flex items-center justify-between">
                <div className="h-8 w-8 sm:h-10 sm:w-10 relative">
                    <Image
                        src="/images/testimonial.png"
                        alt="testimonial"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </article>
    );
}

export default function TestimonialPage({ heading, description, testimonials }: Props) {
    const swiperRef = useRef<any>(null);

    return (
        <section className="relative flex min-h-[600px] md:min-h-screen w-full justify-center overflow-hidden bg-[#F1FCFF] px-4 sm:px-8 md:px-16 lg:px-20 pb-0 py-12 sm:py-16 md:py-20">
            {/* ── Decorative squares (hidden on very small screens) ── */}
            <div className="pointer-events-none absolute left-0 top-[68px] h-[242px] w-[413px] hidden sm:block">
                <div className="absolute left-[343px] top-0 h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-[273px] top-0 h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-[165px] top-[122px] h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-0 top-[102px] h-[70px] w-[70px] bg-[#DBF7FF]" />
                <div className="absolute left-0 top-[172px] h-[70px] w-[70px] bg-[#DBF7FF]" />
            </div>

            <div className="relative z-10 flex w-full max-w-[1440px] flex-col items-center justify-center gap-10 sm:gap-[60px]">
                {/* ── Heading + description ── */}
                <div className="flex w-full flex-col items-center gap-8 sm:gap-[40px]">
                    <div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4">
                        <h1
                            className="text-center text-[32px] sm:text-[44px] md:text-[56px] lg:text-[66px] leading-tight font-normal text-[#00161D]"
                            style={{ fontFamily: "'Inter Tight', var(--font-sans)" }}
                        >
                            {heading}
                        </h1>
                        {description && (
                            <p className="max-w-[900px] text-center text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-relaxed text-[#00161D] opacity-80">
                                {description}
                            </p>
                        )}
                    </div>

                    {/* ── Swiper ── */}
                    <div className="w-full overflow-visible">
                        <Swiper
                            modules={[Navigation, Autoplay]}
                            centeredSlides={true}
                            loop={true}
                            speed={800}
                            autoplay={{ delay: 4000, disableOnInteraction: false }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                    spaceBetween: 16,
                                },
                                480: {
                                    slidesPerView: 1.1,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 1.3,
                                    spaceBetween: 24,
                                },
                                1024: {
                                    slidesPerView: 1.6,
                                    spaceBetween: 30,
                                },
                                1200: {
                                    slidesPerView: 2,
                                    spaceBetween: 32,
                                },
                                1400: {
                                    slidesPerView: 2.2,
                                    spaceBetween: 40,
                                },
                            }}
                            onSwiper={(swiper) => { swiperRef.current = swiper; }}
                            className="testimonial-swiper w-full !overflow-visible"
                        >
                            {testimonials.map((item) => (
                                <SwiperSlide key={item.id} className="flex justify-center !h-auto">
                                    <TestimonialCard item={item} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* ── Nav buttons ── */}
                <div className="flex h-12 sm:h-14 w-[96px] sm:w-[109px] items-center gap-[3px] rounded-2xl bg-[#DBF7FF] p-[3px]">
                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="flex h-[42px] w-[42px] sm:h-[50px] sm:w-[50px] rotate-180 items-center justify-center rounded-xl sm:rounded-2xl border border-white/50 bg-white/80 backdrop-blur-[10px] transition-all hover:scale-105 active:scale-95"
                        aria-label="Previous testimonial"
                    >
                        <ArrowLeft className="h-4 w-4 sm:h-5 sm:w-5 rotate-180 text-[#01C2FE]" />
                    </button>
                    <button
                        type="button"
                        onClick={() => swiperRef.current?.slideNext()}
                        className="flex h-[42px] w-[42px] sm:h-[50px] sm:w-[50px] items-center justify-center rounded-xl sm:rounded-2xl border border-white/50 bg-white/80 backdrop-blur-[10px] transition-all hover:scale-105 active:scale-95"
                        aria-label="Next testimonial"
                    >
                        <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 text-[#01C2FE]" />
                    </button>
                </div>
            </div>
        </section>
    );
}