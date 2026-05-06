"use client";
import { useState } from "react";

export default function Contact() {
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
        <section id="contact" className="w-full bg-[#F1FCFF]  px-5 md:px-20 -mb-3 relative overflow-hidden isolate">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row gap-12 items-start relative z-10">
                {/* Left content */}
                <div className="flex flex-col gap-10 w-full md:w-[579px] flex-shrink-0">
                    <div className="flex flex-col gap-6">
                        <h2 className="text-[#00161D]  text-[50px] md:text-[66px] leading-tight">
                            Enough With the Scrolling, <span className="font-bold">Let’s Create Now!</span>
                        </h2>
                        <p className="text-[#00161D] text-[18px] leading-[28px] max-w-[500px] opacity-80">
                            Have an idea or a project in mind? It’s time to discuss the plan. We offer a free consultation to understand your goals. Also, to guide you in the right direction.
                        </p>
                    </div>

                    {/* Phone mockup placeholder */}
                    <div className="relative w-full h-[400px] hidden md:flex items-center justify-center">
                        <img src="/images/hand-contact.png" alt="hand-contact.png" />
                    </div>
                </div>

                {/* Right form */}
                <div className="flex-1 bg-white rounded-3xl p-5">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-[#00161D] font-medium text-[22px]">
                            Send Us a Message
                        </h3>

                        <div className="flex flex-col gap-3">
                            {/* Name */}
                            <div className="flex flex-col gap-1">
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
                            <div className="flex flex-col gap-1">
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
                            <div className="flex flex-col gap-1">
                                <label className="text-[#00161D]/60 text-[16px]">Number</label>
                                <div className="flex items-center gap-2 bg-[#F1F1F1] border border-[#F5F5F5] rounded-2xl px-4 py-4">
                                    <div className="flex items-center gap-2 border-r border-[#E3E3E3] pr-2">
                                        <img src="/images/flag.png" alt="flag.png" width={40} height={40} />
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
                            <div className="flex flex-col gap-1">
                                <label className="text-[#00161D]/60 text-[16px]">Project Brief</label>
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
                                Get Your Free Consultation
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
