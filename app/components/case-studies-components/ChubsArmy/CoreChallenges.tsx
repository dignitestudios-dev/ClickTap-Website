import Image from "next/image";

type CoreChallengesProps = {
    title: React.ReactNode;
    items: {
        title: string;
        description: string;
        icon?: string;
    }[];
};

export default function CoreChallenges({ title, items }: CoreChallengesProps) {
    return (
        <section className="px-4 md:px-20">
            <div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4">
                <h2 className="text-[40px] lg:text-[60px] font-normal text-center capitalize text-[#00161D]" >{title}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mt-10">
                {
                    items.map((item, idx) => (
                        <article key={idx} className="p-5 bg-[#FFFDF9] rounded-[16px] relative overflow-hidden">
                            <div className="flex flex-col gap-4 text-center">
                                <Image src={item.icon || `/images/challenge-${idx + 1}.png`} alt={item.title} width={111} height={111} className="mx-auto" />
                                <h3 className="text-[24px] mt-10 font-medium leading-tight text-[#714927] relative z-10">
                                    {item.title}
                                </h3>
                                <div className=" flex flex-col gap-4 relative z-10">
                                    <p className="text-[14px] flex items-center gap-2 leading-relaxed text-[#714927] opacity-70">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </div>
        </section>
    )
}
