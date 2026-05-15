"use client";

import React, { useState } from "react";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import Image from "next/image";

const services = [
    "Mobile App Development",
    "iOS App Development",
    "Android App Development",
    "PWA Development",
    "Web App Development",
    "Custom Software Development",
    "AI App Development",
    "MVP Development",
    "UI/UX Design",
    "Mobile App Consulting",
];

export default function ContactSection() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        consent: false,
    });
    const [serviceOpen, setServiceOpen] = useState(false);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = e.target;
        setForm((prev) => ({
            ...prev,
            [name]:
                type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
        }));
    };

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        console.log("Form submitted:", form);
    };

    return (
        <section
            className="relative w-full min-h-screen bg-white flex flex-col items-center justify-center overflow-hidden"
            style={{ fontFamily: "'Inter Tight', Inter, sans-serif" }}
        >

            <Navbar />
            <div className="absolute  top-0 h-full w-[1200px]  pointer-events-none z-0">
                <Image
                    src="/images/contact-bg.png"
                    alt="About Us CTA Glow Background"
                    width={1100}
                    height={800}
                    priority
                    className=""
                />
            </div>
            {/* Content */}
            <div
                className="relative mt-5 z-10 flex flex-col items-center w-full"
                style={{ padding: "0 200px 136px", gap: 50, maxWidth: 1440 }}
            >
                {/* Heading block */}
                <div className="flex flex-col items-center" style={{ gap: 8 }}>
                    {/* Join the journey */}
                    {/* <p
                        className="text-center"
                        style={{
                            fontSize: 16,
                            lineHeight: "19px",
                            fontWeight: 400,
                            color: "#00161D",
                        }}
                    >
                        Join the journey
                    </p> */}

                    {/* Title + subtitle */}
                    <div className="flex flex-col items-center" style={{ gap: 16 }}>
                        <h1
                            className="text-center"
                            style={{
                                fontSize: 64,
                                lineHeight: "77px",
                                fontWeight: 600,
                                color: "#00161D",
                            }}
                        >
                            Contact us
                        </h1>
                        <p
                            className="text-center"
                            style={{
                                fontSize: 18,
                                lineHeight: "22px",
                                fontWeight: 400,
                                color: "#00161D",
                                maxWidth: 600,
                            }}
                        >
                            Share your ideas with our team. As your trusted tech partner,
                            we&apos;ll guide you clearly, confidently, and collaboratively
                            from the strategy to success
                        </p>
                    </div>
                </div>

                {/* Form card */}
                <div
                    className="w-full bg-white"
                    style={{
                        border: "1px solid #F1F1F1",
                        borderRadius: 24,
                        padding: 60,
                        maxWidth: 1040,
                    }}
                >
                    <div className="flex flex-col" style={{ gap: 24 }}>
                        {/* Fields group */}
                        <div className="flex flex-col" style={{ gap: 24 }}>
                            {/* Name */}
                            <div className="flex flex-col" style={{ gap: 10 }}>
                                <label
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "#00161D",
                                        lineHeight: "19px",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Jonnie Dawson"
                                    className="w-full outline-none"
                                    style={{
                                        border: "1px solid #F1F1F1",
                                        borderRadius: 12,
                                        padding: "13px 16px",
                                        fontSize: 18,
                                        lineHeight: "22px",
                                        fontWeight: 400,
                                        color: "#00161D",
                                        fontFamily: "inherit",
                                    }}
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col" style={{ gap: 10 }}>
                                <label
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "#00161D",
                                        lineHeight: "19px",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="hello@clicktap.com"
                                    className="w-full outline-none"
                                    style={{
                                        border: "1px solid #F1F1F1",
                                        borderRadius: 12,
                                        padding: "13px 16px",
                                        fontSize: 18,
                                        lineHeight: "22px",
                                        fontWeight: 400,
                                        color: "#00161D",
                                        fontFamily: "inherit",
                                    }}
                                />
                            </div>

                            {/* Number */}
                            <div className="flex flex-col" style={{ gap: 10 }}>
                                <label
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "#00161D",
                                        lineHeight: "19px",
                                    }}
                                >
                                    Number
                                </label>
                                <div
                                    className="flex flex-row items-center w-full"
                                    style={{
                                        border: "1px solid #F1F1F1",
                                        borderRadius: 14,
                                        padding: "14px 12px 14px 16px",
                                        gap: 8,
                                    }}
                                >
                                    {/* Flag + code */}
                                    <div
                                        className="flex relative flex-row items-center flex-shrink-0"
                                        style={{
                                            gap: 8,
                                            paddingRight: 10,
                                            borderRight: "1px solid #E3E3E3",
                                        }}
                                    >
                                        {/* US Flag SVG */}
                                        <Image src="/images/us-flag.png" alt="" width={20} height={20} />
                                        <span
                                            style={{
                                                fontSize: 16,
                                                fontWeight: 400,
                                                color: "#00161D",
                                                lineHeight: "19px",
                                                fontFamily: "inherit",
                                            }}
                                        >
                                            +1
                                        </span>
                                    </div>

                                    <input
                                        type="tel"
                                        name="phone"
                                        value={form.phone}
                                        onChange={handleChange}
                                        placeholder="Number here"
                                        className="flex-1 outline-none"
                                        style={{
                                            fontSize: 16,
                                            fontWeight: 400,
                                            color: "#00161D",
                                            opacity: 0.6,
                                            fontFamily: "inherit",
                                            background: "transparent",
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Service */}
                            <div className="flex flex-col" style={{ gap: 10 }}>
                                <label
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "#00161D",
                                        lineHeight: "19px",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Service
                                </label>
                                <div className="relative w-full">
                                    <button
                                        type="button"
                                        onClick={() => setServiceOpen((o) => !o)}
                                        className="w-full flex flex-row justify-between items-center"
                                        style={{
                                            border: "1px solid #F1F1F1",
                                            borderRadius: 12,
                                            padding: "13px 16px",
                                            fontSize: 18,
                                            lineHeight: "22px",
                                            fontWeight: 400,
                                            color: form.service ? "#00161D" : "#00161D",
                                            opacity: form.service ? 1 : 1,
                                            fontFamily: "inherit",
                                            background: "white",
                                            cursor: "pointer",
                                        }}
                                    >
                                        <span style={{ opacity: form.service ? 1 : 0.5 }}>
                                            {form.service || "Select an option"}
                                        </span>
                                        {/* Arrow down */}
                                        <svg
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M6 9L12 15L18 9"
                                                stroke="#00161D"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </button>

                                    {serviceOpen && (
                                        <div
                                            className="absolute w-full bg-white z-20"
                                            style={{
                                                top: "calc(100% + 4px)",
                                                border: "1px solid #F1F1F1",
                                                borderRadius: 12,
                                                boxShadow: "0 4px 24px rgba(0,22,29,0.08)",
                                                overflow: "hidden",
                                            }}
                                        >
                                            {services.map((s) => (
                                                <button
                                                    key={s}
                                                    type="button"
                                                    onClick={() => {
                                                        setForm((p) => ({ ...p, service: s }));
                                                        setServiceOpen(false);
                                                    }}
                                                    className="w-full text-left"
                                                    style={{
                                                        padding: "12px 16px",
                                                        fontSize: 16,
                                                        color: "#00161D",
                                                        fontFamily: "inherit",
                                                        background:
                                                            form.service === s ? "#F1F1F1" : "white",
                                                        cursor: "pointer",
                                                        borderBottom: "1px solid #F1F1F1",
                                                    }}
                                                    onMouseEnter={(e) =>
                                                    ((e.target as HTMLElement).style.background =
                                                        "#F8F8F8")
                                                    }
                                                    onMouseLeave={(e) =>
                                                    ((e.target as HTMLElement).style.background =
                                                        form.service === s ? "#F1F1F1" : "white")
                                                    }
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Message */}
                            <div className="flex flex-col" style={{ gap: 10 }}>
                                <label
                                    style={{
                                        fontSize: 16,
                                        fontWeight: 500,
                                        color: "#00161D",
                                        lineHeight: "19px",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    message
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Your message here.."
                                    rows={6}
                                    className="w-full outline-none resize-none"
                                    style={{
                                        border: "1px solid #F1F1F1",
                                        borderRadius: 12,
                                        padding: "12px 16px",
                                        fontSize: 18,
                                        lineHeight: "22px",
                                        fontWeight: 400,
                                        color: "#00161D",
                                        fontFamily: "inherit",
                                        height: 177,
                                    }}
                                />
                            </div>
                        </div>

                        {/* Consent checkbox */}
                        <div className="flex flex-row items-start" style={{ gap: 24 }}>
                            <button
                                type="button"
                                onClick={() =>
                                    setForm((p) => ({ ...p, consent: !p.consent }))
                                }
                                className="flex-shrink-0 flex items-center justify-center"
                                style={{
                                    width: 30,
                                    height: 30,
                                    background: "#F1F1F1",
                                    borderRadius: 8,
                                    border: "none",
                                    cursor: "pointer",
                                    marginTop: 2,
                                }}
                            >
                                {form.consent && (
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M3 8L6.5 11.5L13 5"
                                            stroke="#01C2FE"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                )}
                            </button>
                            <p
                                style={{
                                    fontSize: 14,
                                    lineHeight: "20px",
                                    fontWeight: 300,
                                    color: "#00161D",
                                    flex: 1,
                                }}
                            >
                                By checking this box, I consent to receive SMS messages from
                                Dignite Studios at the phone number I provided. Message and data
                                rates may apply. Message frequency may vary. For assistance,
                                reply HELP or email us at{" "}
                                <a
                                    href="mailto:support@dignitestudios.com"
                                    style={{ color: "#01C2FE", textDecoration: "none" }}
                                >
                                    support@dignitestudios.com
                                </a>
                                . You may opt out at any time by replying STOP. See our{" "}
                                <a href="#" style={{ color: "#00161D" }}>
                                    Terms &amp; Conditions
                                </a>{" "}
                                and{" "}
                                <a href="#" style={{ color: "#00161D" }}>
                                    Privacy Policy
                                </a>{" "}
                                for more details.
                            </p>
                        </div>

                        {/* Submit button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            className="w-full flex items-center justify-center"
                            style={{
                                background: "#00161D",
                                borderRadius: 16,
                                padding: "12px 24px",
                                height: 48,
                                fontSize: 18,
                                lineHeight: "22px",
                                fontWeight: 600,
                                color: "#FFFFFF",
                                fontFamily: "inherit",
                                border: "none",
                                cursor: "pointer",
                                transition: "opacity 0.15s",
                            }}
                            onMouseEnter={(e) =>
                                ((e.currentTarget as HTMLElement).style.opacity = "0.85")
                            }
                            onMouseLeave={(e) =>
                                ((e.currentTarget as HTMLElement).style.opacity = "1")
                            }
                        >
                            Submit now
                        </button>
                    </div>
                </div>
            </div>

            <Footer />

        </section>
    );
}