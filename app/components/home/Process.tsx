"use client";

import Image from "next/image";

// const Step = ({ number, title, description, isGreen = false }: { number: string, title: string, description: string, isGreen?: boolean }) => {
//     return (
//         <div className="relative w-full  h-[302px] p-5 bg-white rounded-[2.5rem] flex gap-8 group hover:-translate-y-3 transition-all duration-500 shadow-sm hover:shadow-xl">
//             <div className={`absolute bottom-[-20px] right-[-20px] w-64 h-48 blur-[40px] opacity-10 rounded-xl pointer-events-none ${isGreen ? 'bg-primary' : 'bg-secondary'}`}></div>

//             <div className="flex-shrink-0 w-[56px] h-full bg-[#F1FCFF] rounded-full flex items-center justify-center border border-[#DBF7FF]">
//                 <span className="text-[36px] font-bold text-[#00161D]">{number}</span>
//             </div>

//             <div className="flex flex-col gap-4">
//                 <h4 className="text-[24px] font-bold text-[#00161D] capitalize tracking-tight">{title}</h4>
//                 <p className="text-[18px] text-[#00161D] opacity-70 leading-relaxed font-medium">{description}</p>
//             </div>
//         </div>
//     );
// };

type ProcessStep = {
    number: string;
    title: string;
    description: string;
    isGreen?: boolean;
};

type Props = {
    heading: React.ReactNode;
    description: string;
    steps: ProcessStep[];
}

const Step = ({ number, title, description, isGreen = false }: { number: string, title: string, description: string, isGreen?: boolean }) => {
    return (
        <div className="relative w-full h-auto md:h-[302px] p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] flex flex-col md:flex-row gap-6 md:gap-8 group hover:-translate-y-3 transition-all duration-500 shadow-sm hover:shadow-xl">
            <div className={`absolute bottom-[-20px] right-[-20px] w-64 h-48 blur-[40px] opacity-10 rounded-xl pointer-events-none ${isGreen ? 'bg-primary' : 'bg-secondary'}`}></div>

            <div className="flex-shrink-0 w-[56px] h-[56px] md:h-full bg-[#F1FCFF] rounded-full flex items-center justify-center border border-[#DBF7FF]">
                <span className="text-[36px] font-bold text-[#00161D]">{number}</span>
            </div>

            <div className="flex flex-col gap-4">
                <h4 className="text-[24px] font-bold text-[#00161D] capitalize tracking-tight">{title}</h4>
                <p className="text-[18px] text-[#00161D] opacity-70 leading-relaxed font-medium">{description}</p>
            </div>
        </div>
    );
};

export default function Process({ heading, description, steps }: Props) {
    return (
        <section className="relative w-full bg-[#F1FCFF] py-16 md:py-20 px-6 sm:px-10 md:px-20 overflow-hidden">
            {/* Grid background dots (decorative) */}
            <div className="absolute left-[5%] top-[10%] opacity-5 pointer-events-none">
                <Image src="/images/line.png" alt="Grid" width={600} height={600} className="scale-150" />
            </div>

            <div className="w-full mx-auto relative z-10 ">
                <div className="top-0 z-20 pt-12 pb-8">
                    <div className="text-center flex flex-col items-center gap-6">
                        <h2 className="text-4xl sm:text-5xl md:text-[80px] font-normal text-[#00161D] leading-tight tracking-tight capitalize">
                            {heading}
                        </h2>
                        <p className="max-w-[800px] text-[18px] text-[#00161D] opacity-70 text-center font-medium">
                            {description}
                        </p>
                    </div>
                </div>

                <div
                    className="w-full "
                >
                    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-12 xl:gap-x-40 gap-y-12 md:gap-y-20 pt-10 md:pt-16">
                        {steps.map((step, index) => (
                            <div key={step.number} className={`flex  ${index % 2 === 0 ? "justify-start" : "justify-end lg:mt-16"}`}>
                                <Step
                                    number={step.number}
                                    title={step.title}
                                    description={step.description}
                                    isGreen={step.isGreen}
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div className={`absolute top-38 right-0 w-[30%] h-[600px] blur-[100px] -z-1 opacity-[60%] rounded-full pointer-events-none bg-secondary`}></div>
                <Image src="/images/squire-box.png" alt="Grid" width={100} height={50} className="absolute -bottom-34 left-0 scale-150" />
            </div>
        </section>
    );
}
