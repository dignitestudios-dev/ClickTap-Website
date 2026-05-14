import React from 'react';
import { Plus_Jakarta_Sans } from "next/font/google";
// 2. Font configuration setup karein (subsets aur weights define karein)
const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ["latin"],
    weight: ["200","300", "400", "500", "600", "700"],
    display: "swap",
});

export default function BrandIdentity() {
    return (
        <section className={`${plusJakartaSans.className} w-full bg-white flex flex-col justify-center items-center py-20 md:py-32 px-6 md:px-12 lg:px-20 gap-16 md:gap-24 font-['Inter_Tight',sans-serif] text-[#00161D]`}>
            {/* Content Wrapper */}
            <div className="w-full max-w-[1280px] flex flex-col justify-center items-center gap-12 md:gap-16 self-stretch">

                {/* Heading Container */}
                <div className="flex flex-col justify-center items-center gap-6 self-stretch text-center max-w-[850px] mx-auto">
                    <h2 className="text-[32px] sm:text-[44px] md:text-[56px] lg:text-[66px] font-bold leading-tight">
                        <span className='font-extrabold'>Brand</span> Identity
                    </h2>
                    <div className="flex flex-col items-center gap-4">
                        <p className="font-semibold text-sm md:text-base lg:text-[17px] leading-relaxed">
                            The team created a brand identity that shows professionalism, clarity and trust. Mainly the qualities that are essential for the oil and petroleum industry.
                        </p>
                        <p className="font-normal text-sm md:text-base lg:text-[17px] leading-relaxed opacity-80">
                            The visual direction was kept clean and minimal. The team used a structured design approach with consistent space and typography. Overall, the entire brand identity was designed to feel purposeful and professional.
                        </p>
                    </div>
                </div>

                {/* Brand Panels Row */}
                <div className="flex flex-col lg:flex-row items-stretch gap-8 md:gap-10 self-stretch">

                    {/* Left Column: Font */}
                    <div className="flex flex-col justify-start items-start gap-3 flex-grow basis-0">
                        {/* Font Label Header */}
                        <div className="w-full bg-[#F6F6F6] rounded-[20px] flex justify-center items-center p-4">
                            <span className="text-xl md:text-2xl lg:text-[30px] font-semibold">
                                Font
                            </span>
                        </div>

                        {/* Font Details Container */}
                        <div className="w-full bg-[#F6F6F6] rounded-[24px] flex flex-col items-start p-6 md:p-10 gap-10 md:gap-12 self-stretch font-['Plus_Jakarta_Sans',sans-serif]">
                            {/* Alphabet Layout */}
                            <div className="flex flex-col items-start gap-6 self-stretch">
                                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 self-stretch">
                                    <span className="font-bold text-xl md:text-2xl">
                                        Plus Jakarta Sans
                                    </span>
                                    <span className="text-lg md:text-xl font-medium tracking-tight opacity-60">
                                        !@#$%^&*()
                                    </span>
                                </div>
                                <p className="font-medium text-2xl md:text-[28px] lg:text-[32px] leading-tight tracking-tight">
                                    Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll Mm<br className="hidden sm:block" />
                                    Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww Xx Yy Zz
                                </p>
                            </div>

                            {/* Character Details & Weights */}
                            <div className="flex flex-col sm:flex-row justify-between items-center gap-8 self-stretch">
                                {/* Big 'Aa' Visual */}
                                <div className="flex items-center justify-center select-none bg-white/50 rounded-2xl p-6 flex-grow sm:flex-grow-0">
                                    <span className="text-[120px] md:text-[160px] lg:text-[200px] font-medium leading-[0.8] tracking-tighter">
                                        Aa
                                    </span>
                                </div>

                                {/* Weights Stack */}
                                <div className="flex flex-col justify-center items-center sm:items-end gap-3 flex-grow">
                                    {[
                                        { label: 'Extra Light', weight: 'font-extralight' },
                                        { label: 'Light', weight: 'font-light' },
                                        { label: 'Regular', weight: 'font-normal' },
                                        { label: 'Semi Bold', weight: 'font-semibold' },
                                        { label: 'Bold', weight: 'font-bold' },
                                        { label: 'Black', weight: 'font-extrabold' }
                                    ].map((w, idx) => (
                                        <span key={idx} className={`${w.weight} text-xl md:text-2xl lg:text-[28px] tracking-tight leading-none`}>
                                            {w.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Colors */}
                    <div className="flex flex-col justify-start items-start gap-3 flex-grow basis-0">
                        {/* Colors Label Header */}
                        <div className="w-full bg-[#F6F6F6] rounded-[20px] flex justify-center items-center p-4">
                            <span className="text-xl md:text-2xl lg:text-[30px] font-semibold">
                                Colors
                            </span>
                        </div>

                        {/* Color Blocks Container */}
                        <div className="w-full bg-[#F6F6F6] rounded-[24px] flex flex-col items-start p-6 md:p-10 gap-6 self-stretch">
                            {/* Primary Color Block */}
                            <div className="w-full aspect-[16/7] bg-[#101D2D] rounded-[20px] flex flex-col text-[#C19A4D] justify-end p-6 md:p-8 hover:scale-[1.02] transition-transform duration-300 shadow-md">
                                <span className="font-bold text-xl md:text-2xl lg:text-3xl tracking-wide mb-1">#101D2D</span>
                                <span className="text-xs md:text-[14px] font-bold uppercase tracking-[0.2em] opacity-60">PRIMARY</span>
                            </div>

                            {/* Secondary Color Block */}
                            <div className="w-full aspect-[16/7] bg-[#C1944D] rounded-[20px] flex flex-col justify-end p-6 md:p-8 text-[#101D2D] hover:scale-[1.02] transition-transform duration-300 shadow-md">
                                <span className="font-bold text-xl md:text-2xl lg:text-3xl tracking-wide mb-1">#C1944D</span>
                                <span className="text-xs md:text-[14px] font-bold uppercase tracking-[0.2em] opacity-60">SECONDARY</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
