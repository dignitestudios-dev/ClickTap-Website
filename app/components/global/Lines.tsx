"use client";

import { motion } from "framer-motion";


export default function Lines() {
    const width = 670;
    const height = 200;
    const count = 6;

    return (
        <svg
            width="100%"
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <mask id="curveMask">
                    {Array.from({ length: count }).map((_, i) => {
                        const x = i * (width / (count - 1));
                        return (
                            <path
                                key={i}
                                d={`M${x},0 C${x},150 ${width / 2},75 ${width / 2},200`}
                                stroke="#F1F1F1"
                                strokeWidth="1.5"
                                fill="none"
                            />
                        );
                    })}
                </mask>
                <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <motion.stop
                        stopColor="#F1F1F1"
                        animate={{ offset: ["-150%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.stop
                        stopColor="#A9C921"
                        animate={{ offset: ["-20%", "100%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.stop
                        stopColor="#A9C921"
                        animate={{ offset: ["-12%", "108%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.stop
                        stopColor="#F1F1F1"
                        animate={{ offset: ["-8%", "112%"] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    />
                </linearGradient>
            </defs>
            <g mask="url(#curveMask)">
                <rect x="0" y="0" width={width} height={height} fill="#333" />
                <rect x="0" y="0" width={width} height={height} fill="url(#gradient)" />
            </g>
        </svg>
    );
}
