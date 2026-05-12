import Image from "next/image";

export default function VisionBehind() {
    return (
        <section className="py-10 px-20 grid grid-cols-2 items-center gap-10">
            <div>
                <h2 className="text-[36px]  font-normal capitalize text-[#00161D]" >The <span className="font-bold">vision</span> behind <br /> chubb’s army</h2>
                <p className="text-[#00161D] text-[15px] font-normal leading-relaxed mt-5">
                    The vision behind Chubb’s Army was to create a digital platform that truly connects pet lovers, service providers, and event organizers in a meaningful way. The goal was to go beyond traditional social media and build a space where people can easily share moments, find trusted pet services, and discover local events—all within a vibrant, gamified community.
                </p>
                <p className="text-[#00161D] text-[15px] font-normal leading-relaxed mt-5">
                    The vision behind Chubb’s Army was to create a digital platform that truly connects pet lovers, service providers, and event organizers in a meaningful way. The goal was to go beyond traditional social media and build a space where people can easily share moments, find trusted pet services, and discover local events—all within a vibrant, gamified community.
                </p>
            </div>
            <div>
                <Image src="/images/behind-vision.webp" width={640} height={631} alt="Chubbs Army Vision" />
            </div>
        </section>
    )
}