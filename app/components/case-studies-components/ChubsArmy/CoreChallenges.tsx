import Image from "next/image";

const data = [
    {
        "icon": "/images/challenge-1.png",
        "title": "Market Research",
        "description": "The platform needed to support three distinct user types: pet owners, service providers, event organizers. Each has different permissions and expectations. The core structural challenge was to design interactions across these roles without creating confusion."
    },
    {
        "icon": "/images/challenge-2.png",
        "title": "Market Research",
        "description": "The platform needed to support three distinct user types: pet owners, service providers, event organizers. Each has different permissions and expectations. The core structural challenge was to design interactions across these roles without creating confusion."
    },
    {
        "icon": "/images/challenge-3.png",
        "title": "Market Research",
        "description": "The platform needed to support three distinct user types: pet owners, service providers, event organizers. Each has different permissions and expectations. The core structural challenge was to design interactions across these roles without creating confusion."
    },
    {
        "icon": "/images/challenge-4.png",
        "title": "Market Research",
        "description": "The platform needed to support three distinct user types: pet owners, service providers, event organizers. Each has different permissions and expectations. The core structural challenge was to design interactions across these roles without creating confusion."
    }
];


export default function CoreChallenges() {
    return (
        <section className="py-10 px-20">
            <div className="flex w-full flex-col items-center justify-center gap-3 sm:gap-4">
                <h2 className="text-[66px] font-normal text-center capitalize text-[#00161D]" >The  <span className="font-bold">Core</span> Challenges</h2>
            </div>
            <div className="grid grid-cols-4 gap-10 mt-10">
                {
                    data.map((item, idx) => (
                        <article className="p-5 bg-[#FFFDF9] rounded-[16px] relative overflow-hidden">
                            <div className="flex flex-col gap-4 text-center">
                                <Image src={item.icon} alt={item.title} width={111} height={111} className="mx-auto" />
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