"use client";

import Counter from "../global/Counter";

type Stat = {
    value: number;
    suffix: string;
    label: string;
};

type Props = {
    stats: Stat[];
    marqueeLogos: string[];
};

function DecorativeBlocks() {
    const blocks = [
        [0, 3],
        [0, 2],
        [1, 2],
        [2, 2],
        [3, 2],
        [4, 2],
        [4, 3],
        [5, 3],
        [3, 1],
        [4, 1],
        [4, 0],
        [2, 3],
        [1, 1],
    ];

    return (
        <div className="pointer-events-none absolute bottom-0 right-0 hidden h-[280px] w-[420px] opacity-80 md:block">
            {blocks.map(([x, y], index) => (
                <span
                    key={`${x}-${y}-${index}`}
                    className="absolute block h-[70px] w-[70px] rounded-[2px] bg-[#001E27]"
                    style={{ left: `${x * 70}px`, top: `${y * 70}px` }}
                />
            ))}
        </div>
    );
}

export default function TrustPilot({ stats, marqueeLogos }: Props) {
    const scrollingLogos = [...marqueeLogos, ...marqueeLogos];
    const reviewBadges = ["/images/trust-card-1.png", "/images/trust-card-2.png", "/images/trust-card-3.png", "/images/trust-card-4.png"];

    return (
        <main className="trust-bg  py-12 text-white ">
            <section className="mx-auto flex w-full  flex-col items-center gap-[60px] overflow-hidden rounded-2xl bg-transparent py-[60px]  md:pb-[100px]">
                <div className="text-center max-w-[900px]">
                    <h2 className="text-[40px] md:text-[56px] font-bold leading-tight">
                        Verified and Trusted by Different Platforms
                    </h2>
                    <p className="mt-4 text-[16px] leading-[28px] text-white/85">
                        Clicktap Solutions is trusted by startups and businesses across industries, with positive feedback on platforms like Clutch and Trustpilot. Our work is built on consistent delivery and transparency through every stage.
                    </p>
                </div>


                <div className="w-full px-20 py-12" >
                <div className="px-20 grid w-full grid-cols-1 overflow-hidden rounded-2xl border border-[#dbf7ff1a] bg-[#ffffff05] backdrop-blur-[10px] sm:grid-cols-2 lg:grid-cols-4">
                    {stats.map((item, index) => (
                        <div
                            key={item.label}
                            className="flex min-h-[180px] flex-col justify-center gap-[30px] px-5 py-[30px]"
                            style={{
                                borderRight:
                                    index < stats.length - 1 ? "1px solid rgba(219, 247, 255, 0.10)" : "none",
                            }}
                        >
                            <p
                                className="text-[46px] font-black leading-[56px] tracking-tight"
                            >
                                <Counter to={item.value} suffix={item.suffix} />
                            </p>
                            <p
                                className="text-[15px] font-normal leading-[18px] text-white/95"
                            >
                                {item.label}
                            </p>
                        </div>
                    ))}
                </div>
                <div className=" text-center py-16">
                    <h3 className="text-[30px] md:text-[40px] font-bold leading-tight">Our Proven Track Record</h3>
                    <p className="mt-3 text-[16px] leading-[26px] text-white/85">
                        Trusted results delivered through years of experience, a skilled team, strong client retention, and successful app launches across startups and growing businesses.
                    </p>
                </div>
                <div className="relative flex w-full items-center justify-center gap-8 overflow-hidden rounded-2xl border-r border-[#dbf7ff1a] bg-[#00161D] px-5 py-[30px] md:h-[312px] md:gap-[70px] md:px-8">
                    {reviewBadges.map((badge) => (
                        <div key={badge} className="z-10 flex items-center gap-3 text-white/95">
                            <img src={badge} alt={badge} className="rounded-lg w-38 h-auto " />
                        </div>
                    ))}
                    <DecorativeBlocks />
                </div>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-[101px] bg-gradient-to-r from-[#00080b] to-transparent" />
                    <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-[101px] bg-gradient-to-l from-[#001a25] to-transparent" />
                    <div className="marquee-track flex w-max items-center gap-6 py-1 will-change-transform md:gap-10">
                        {scrollingLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="flex min-h-[54px] min-w-[190px] items-center gap-3 rounded-xl px-4 py-2 text-white/95"
                            >
                                <img src={logo} alt={logo} className="rounded-lg w-38 h-auto " />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <style jsx>{`
        .marquee-track {
          animation: marquee-scroll 18s linear infinite;
        }
 
        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
        </main>
    );
}