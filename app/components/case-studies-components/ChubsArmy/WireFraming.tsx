"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const Wireframes = () => {
    const wireframes = [
        { id: 1 },
        { id: 2 },
        { id: 3 },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
    ];

    return (
        <section className="overflow-hidden py-16">
            <div className="mx-auto max-w-screen-2xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-12 text-center"
                >
                    <h2 className="mb-4 text-[42px] leading-none sm:text-[52px] lg:text-[66px]">
                        <span className="font-bold">UX</span> & Wireframing
                    </h2>

                    <p className="mx-auto mb-2 max-w-5xl px-4 text-[15px] font-bold leading-relaxed">
                        The UX approach focused on simplicity and usability.
                    </p>

                    <p className="mx-auto max-w-5xl px-4 text-[15px] leading-relaxed">
                        We designed streamlined onboarding for different user
                        roles, created a clear content hierarchy for feeds and
                        reels, and ensured easy navigation.
                    </p>
                </motion.div>

                {/* Slider */}
                <div className="relative">
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        loop={true}
                        speed={2500}
                        slidesPerView={"auto"}
                        spaceBetween={20}
                        allowTouchMove={true}
                        grabCursor={true}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}
                        navigation={{
                            prevEl: ".wireframe-prev",
                            nextEl: ".wireframe-next",
                        }}
                        className="wireframe-swiper !overflow-visible"
                    >
                        {[...wireframes, ...wireframes].map(
                            (frame, index) => (
                                <SwiperSlide
                                    key={index}
                                    className="!w-auto"
                                >
                                    <div className="group">
                                        <img
                                            src={`/images/s${frame.id}.webp`}
                                            alt={`Wireframe ${frame.id}`}
                                            className="h-[320px] w-[150px] object-contain transition-all duration-500 group-hover:scale-105 sm:h-[346px] sm:w-[160px]"
                                        />
                                    </div>
                                </SwiperSlide>
                            )
                        )}
                    </Swiper>

                    {/* Controls */}
                    <div className="mt-10 flex items-center justify-center">
                        <div className="flex overflow-hidden rounded-[22px] border-2 border-[#C8A56A]">
                            <button className="wireframe-prev flex h-[56px] w-[56px] items-center justify-center bg-white text-[#7A4B1D] transition-all duration-300 hover:bg-[#C8A56A] hover:text-white">
                                <ChevronLeft size={24} />
                            </button>

                            <div className="h-[56px] w-[2px] bg-[#C8A56A]" />

                            <button className="wireframe-next flex h-[56px] w-[56px] items-center justify-center bg-white text-[#7A4B1D] transition-all duration-300 hover:bg-[#C8A56A] hover:text-white">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Smooth Infinite Animation Fix */}
            <style jsx global>{`
                .wireframe-swiper .swiper-wrapper {
                    transition-timing-function: linear !important;
                    align-items: center;
                }
            `}</style>
        </section>
    );
};

export default Wireframes;