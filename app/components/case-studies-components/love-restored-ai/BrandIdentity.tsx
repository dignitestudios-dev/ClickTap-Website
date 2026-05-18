import React from 'react';
import { LOVE_STORED_CONTENT } from '@/app/constants/content';

export default function BrandIdentity() {
    // Color palette data from the image
    const colors = [
        { hex: '#B8832D', label: 'PRIMARY', textColor: 'text-white/80' },
        { hex: '#0A0A0A', label: 'SECONDARY', textColor: 'text-white/60' },
        { hex: '#DC1323', label: 'FLARE', textColor: 'text-white/80' },
    ];

    // Font weights shown in the image
    const fontWeights = [
        { label: 'Extra Light', className: 'font-extralight' },
        { label: 'Light', className: 'font-light' },
        { label: 'Regular', className: 'font-normal' },
        { label: 'Semi Bold', className: 'font-semibold' },
        { label: 'Bold', className: 'font-bold' },
        { label: 'Black', className: 'font-black' },
    ];

    return (
        <div className="w-full mx-auto bg-white p-12 font-['Plus_Jakarta_Sans',sans-serif] text-[#0A0A0A]">
            {/* Header Section */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h1 className="text-5xl  font-bold tracking-tight mb-6">
                    {LOVE_STORED_CONTENT.branding.title}
                </h1>
                <p className="text-[13px] leading-relaxed text-gray-800 font-medium mb-2">
                    {LOVE_STORED_CONTENT.branding.description}
                </p>
            </div>

            {/* Subheaders Grid */}
            <div className="grid grid-cols-2 gap-8 mb-6 px-10">
                <h2 className="text-2xl font-normal text-center text-gray-700">Font</h2>
                <h2 className="text-2xl font-normal text-center text-gray-700 pr-4">Colors</h2>
            </div>

            {/* Main Visual Content Box */}
            <div className="bg-[#EBF7FF] rounded-2xl p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Left Side: Typography */}
                <div className="space-y-10">
                    {/* Font Info & Characters */}
                    <div>
                        <div className="flex justify-between items-baseline mb-6">
                            <h3 className="text-xl font-bold tracking-tight">Plus Jakarta Sans</h3>
                            <span className="text-sm font-medium text-gray-600">!@#$%^&*()</span>
                        </div>

                        <div className="text-lg tracking-wide leading-relaxed font-normal text-gray-900 max-w-md">
                            <p>Aa Bb Cc Dd Ee Ff Gg Hh Ii Jj Kk Ll</p>
                            <p>Mm Nn Oo Pp Qq Rr Ss Tt Uu Vv Ww</p>
                            <p>Xx Yy Zz</p>
                        </div>
                    </div>

                    {/* Large Preview & Weights List */}
                    <div className="flex items-center justify-between gap-12 pt-4">
                        <span className="text-[130px] font-bold leading-none select-none tracking-tighter">
                            Aa
                        </span>
                        <div className="flex flex-col space-y-1.5 pt-2">
                            {fontWeights.map((weight) => (
                                <span
                                    key={weight.label}
                                    className={`text-xl text-gray-900 ${weight.className}`}
                                >
                                    {weight.label}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Color Cards */}
                <div className="flex flex-col gap-4">
                    {colors.map((color) => (
                        <div
                            key={color.hex}
                            className="w-full h-[115px] rounded-xl p-5 flex flex-col justify-center transition-transform hover:scale-[1.01]"
                            style={{ backgroundColor: color.hex }}
                        >
                            <span className="text-xl font-bold text-white tracking-wide uppercase">
                                {color.hex}
                            </span>
                            <span className={`text-[11px] font-bold tracking-widest mt-1 ${color.textColor}`}>
                                {color.label}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}
