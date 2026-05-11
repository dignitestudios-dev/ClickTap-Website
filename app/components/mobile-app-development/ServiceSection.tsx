import React from "react";
import Image from "next/image";
import {
    ArrowUpRight,
} from "lucide-react";

type Service = {
    title: string;
    icon: string;
    des: string;
};

type Props = {
    heading: React.ReactNode;
    description: string;
    services: any[];
    ctaText?: string;
}

const ServicesSection = ({ heading, description, services, ctaText }: Props) => {
    return (
        <section className="overflow-hidden bg-[#F3FBFD] px-6 py-16 md:px-10 lg:px-20 lg:py-24">

            <div className="mx-auto max-w-[1280px]">

                {/* HEADING */}
                <div className="mx-auto max-w-[980px] text-center">
                    <h2 className="text-3xl sm:text-4xl md:text-[72px] leading-[1.05] text-[#00161D]">
                        {heading}
                    </h2>

                    <p className="mx-auto mt-6 max-w-[1050px] text-[16px] md:text-[18px] leading-[1.7] text-[#00161D]/70">
                        {description}
                    </p>
                </div>

                {/* SERVICES GRID */}
                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">

                    {services.map((service, index) => {
                        return (
                            <div
                                key={index}
                                className="group relative flex flex-col overflow-hidden rounded-[28px] bg-[#DBF7FF] p-5 transition-all duration-300 hover:-translate-y-1"
                            >

                                {/* BACKGROUND SHAPE */}
                                <div className="absolute -bottom-3 -right-20 h-[220px] w-[220px] " >
                                    <Image src="/images/service-star.png" width={220} height={220} className="absolute right-20 z-10 top-0" alt="icon" />
                                </div>

                                {/* ICON */}
                                <div className="relative z-10 flex h-[50px] w-[50px] items-center justify-center rounded-full border border-[#00161D]/20 bg-white">
                                    <Image src={service.icon} alt="icon" width={24} height={24} />
                                </div>

                                {/* CONTENT */}
                                <div className="relative z-10 mt-10">
                                    <h3 className="text-[18px] font-bold leading-tight text-[#00161D]">
                                        {service.title}
                                    </h3>

                                    <p className="mt-5 font-normal text-[15px] leading-[1.9] text-[#00161D]/75">
                                        {service.description}
                                    </p>
                                </div>
                                <div className="mt-auto">

                                    {/* BUTTON */}
                                    <button className="group/btn cursor-pointer relative z-10 mt-12 flex h-[42px] w-[42px] items-center justify-center rounded-full bg-white transition-all hover:bg-[#01C2FE]">
                                        <ArrowUpRight
                                            size={18}
                                            className="text-[#00161D] transition-colors group-hover/btn:text-white"
                                        />
                                    </button>

                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* CTA BUTTON */}
                {ctaText && (
                    <div className="mt-16 flex justify-center">
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

            </div>
        </section>
    );
};

export default ServicesSection;