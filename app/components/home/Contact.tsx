"use client";
import { useState } from "react";
import Image from "next/image";

type Props = {
    heading: React.ReactNode;
    description: string;
    ctaText: string;
    fieldLabel?: string;
}

export default function Contact({ heading, description, ctaText, fieldLabel = "Project Brief" }: Props) {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        // alert("Message sent! We'll get back to you soon.");
    };

    return (
        <section id="contact" className="w-full bg-[#F1FCFF]  md:pb-0 mb-5 md:-mb-2 relative overflow-hidden isolate">
            <div className="mx-auto flex flex-col lg:flex-row gap-12 items-start relative z-10">
                {/* Left content */}
                <div className="flex  flex-col gap-10 w-full md:w-[579px] flex-shrink-0">
                    <div className="flex px-5 md:px-20 flex-col gap-6">
                        <h2 className="text-[#00161D] text-3xl sm:text-4xl md:text-[55px] font-bold leading-tight">
                            {heading}
                        </h2>
                        <p className="text-[#00161D] text-[18px] leading-[28px] max-w-[500px] opacity-80">
                            {description}
                        </p>
                    </div>

                    {/* Phone mockup placeholder */}
                    <div className="relative w-full h-[420px] left-0  hidden md:flex items-center justify-center">
                        <Image src="/images/hand-contact.webp" alt="hand-contact" width={600} height={420} className="object-contain" />
                    </div>
                </div>

                {/* Right form */}
                <div className="px-6 md:px-12 lg:px-20 w-full lg:w-auto flex-1">
                    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl shadow-[#00161D]/5">
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[#00161D] font-medium text-[22px]">
                                Send Us a Message
                            </h3>

                            <div className="flex flex-col gap-5">
                                {/* Name */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-[#00161D]/60 text-[16px]">
                                        Name
                                    </label>
                                    <div className="flex items-center gap-2 bg-[#F1F1F1] border border-[#F5F5F5] rounded-2xl px-3 py-4">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-60">
                                            <path d="M8 8a3 3 0 100-6 3 3 0 000 6zM2 14s-1 0-1-1 1-4 7-4 7 3 7 4-1 1-1 1H2z" stroke="#000" strokeWidth="1" />
                                        </svg>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            placeholder="Your full name"
                                            className="bg-transparent text-[16px] text-[#00161D]/60 outline-none flex-1 placeholder:text-[#00161D]/60"
                                        />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-[#00161D]/60 text-[16px]">Email</label>
                                    <div className="flex items-center gap-2 bg-[#F1F1F1] rounded-2xl px-3 py-4">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="opacity-60">
                                            <path d="M2 4l6 5 6-5M2 4h12v8H2V4z" stroke="#000" strokeWidth="1" />
                                        </svg>
                                        <input
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            placeholder="yourname@gmail.com"
                                            className="bg-transparent text-[16px] text-[#00161D]/60 outline-none flex-1 placeholder:text-[#00161D]/60"
                                        />
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-[#00161D]/60 text-[16px]">Number</label>
                                    <div className="flex items-center gap-2 bg-[#F1F1F1] border border-[#F5F5F5] rounded-2xl px-4 py-4">
                                        <div>
                                            <Image src="/images/flag.png" alt="flag" width={40} height={20} className="w-14 h-4 " />
                                        </div>
                                        <input
                                            name="phone"
                                            value={form.phone}
                                            onChange={handleChange}
                                            placeholder="Your phone number"
                                            className="bg-transparent text-[16px] text-[#00161D]/60 outline-none flex-1 placeholder:text-[#00161D]/60"
                                        />
                                    </div>
                                </div>

                                {/* Message */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-[#00161D]/60 text-[16px]">{fieldLabel}</label>
                                    <div className="bg-[#F1F1F1] border border-[#F5F5F5] rounded-2xl px-4 py-4">
                                        <textarea
                                            name="message"
                                            value={form.message}
                                            onChange={handleChange}
                                            placeholder="Tell us about your project"
                                            rows={2}
                                            className="bg-transparent text-[16px] text-[#00161D]/60 outline-none w-full resize-none placeholder:text-[#00161D]/60"
                                        />
                                    </div>
                                </div>

                                {/* Submit */}
                                <button
                                    onClick={handleSubmit}
                                    className="w-full bg-[#00161D] text-white font-bold text-lg rounded-full py-4 hover:bg-secondary transition-all"
                                >
                                    {ctaText}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
