import Image from "next/image";

export default function DiscoverResearch() {
    return (
        <section className="py-10 px-20">
            <div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4">
                <h2 className="text-[66px] font-normal text-center capitalize text-[#00161D]" >Discovery &  <span className="font-bold">Research</span></h2>
                <p className="text-[#00161D] text-[15px] max-w-4xl  text-center font-normal leading-relaxed">
                    We began by speaking directly with the people who would rely on Chubbs Army the most—parents and caregivers. We wanted to understand their daily routines, their biggest concerns, and what was missing from the support systems currently available to them.
                    The research revealed a strong need for simple, reliable tools that could offer immediate help and reduce stress. Our goal was to design a support system that was easy to use but also flexible enough to adapt to different situations.
                </p>
            </div>
            <div className="flex items-center justify-center gap-3 mt-10">
                <article className="p-5  w-[635px] h-[450px]! rounded-[16px] relative overflow-hidden">
                    <Image
                        src="/images/discovery-bg.webp"
                        alt="discovery-bg"
                        fill
                        className="object-cover rounded-[16px] -z-10"
                    />
                    <div className="flex flex-col justify-between h-full">
                        <h3 className="text-[24px] font-medium leading-tight text-white relative z-10">
                            Market Research:
                        </h3>
                        <div className="mt-8 flex flex-col gap-4 relative z-10">

                            <p className="text-[14px] flex items-center gap-2 leading-relaxed text-white opacity-70">
                                <Image src={"/images/dog-foot.png"} alt="search" width={16} height={16} />
                                Analyzed pet content trends across existing social media platforms
                            </p>
                            <p className="text-[14px] flex items-center gap-2 leading-relaxed text-white opacity-70">
                                <Image src={"/images/dog-foot.png"} alt="search" width={16} height={16} />
                                Identified lack of monetization in niche community-driven ecosystems
                            </p>
                        </div>
                    </div>
                </article>
                <article className="p-5  w-[635px] h-[450px]! rounded-[16px] relative overflow-hidden">
                    <Image
                        src="/images/discovery-bg.webp"
                        alt="discovery-bg"
                        fill
                        className="object-cover rounded-[16px] -z-10"
                    />
                    <div className="flex flex-col justify-between h-full">
                        <h3 className="text-[24px] font-medium leading-tight text-white relative z-10">
                            Market Research:
                        </h3>
                        <div className="mt-8 flex flex-col gap-4 relative z-10">

                            <p className="text-[14px] flex items-center gap-2 leading-relaxed text-white opacity-70">
                                <Image src={"/images/dog-foot.png"} alt="search" width={16} height={16} />
                                Analyzed pet content trends across existing social media platforms
                            </p>
                            <p className="text-[14px] flex items-center gap-2 leading-relaxed text-white opacity-70">
                                <Image src={"/images/dog-foot.png"} alt="search" width={16} height={16} />
                                Identified lack of monetization in niche community-driven ecosystems
                            </p>
                        </div>
                    </div>
                </article>
            </div>
        </section>
    )
}