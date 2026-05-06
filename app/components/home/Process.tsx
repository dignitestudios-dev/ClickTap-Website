"use client";

import Image from "next/image";

const Step = ({ number, title, description, isGreen = false }: { number: string, title: string, description: string, isGreen?: boolean }) => {
  return (
    <div className="relative w-full max-w-[500px] h-[302px] p-5 bg-white rounded-[2.5rem] flex gap-8 group hover:-translate-y-3 transition-all duration-500 shadow-sm hover:shadow-xl">
      <div className={`absolute bottom-[-20px] right-[-20px] w-64 h-48 blur-[40px] opacity-10 rounded-xl pointer-events-none ${isGreen ? 'bg-primary' : 'bg-secondary'}`}></div>

      <div className="flex-shrink-0 w-[56px] h-full bg-[#F1FCFF] rounded-full flex items-center justify-center border border-[#DBF7FF]">
        <span className="text-[36px] font-bold text-[#00161D]">{number}</span>
      </div>

      <div className="flex flex-col gap-4">
        <h4 className="text-[24px] font-bold text-[#00161D] capitalize tracking-tight">{title}</h4>
        <p className="text-[18px] text-[#00161D] opacity-70 leading-relaxed font-medium">{description}</p>
      </div>
    </div>
  );
};

export default function Process() {
  const processSteps = [
    {
      number: "01",
      title: "Discovery and Planning",
      description:
        "We start by understanding your idea and users. This helps us define what needs to be built and create a simple plan before development begins.",
    },
    {
      number: "02",
      title: "UI and UX Design",
      description:
        "We design how your product will look and feel. The design team focuses on clean layouts and easy user experiences so users can enjoy the product effortlessly.",
      isGreen: true,
    },
    {
      number: "03",
      title: "Development Phase",
      description:
        "The developers bring the designs to life by building your product step by step. This is where everything becomes functional and ready to use.",
    },
    {
      number: "04",
      title: "Testing and QA",
      description:
        "The team carefully tests everything to make sure your product works as expected, including performance and user experience quality.",
      isGreen: true,
    },
    {
      number: "05",
      title: "Sprint Demos",
      description:
        "The team regularly shares progress through demos because transparency matters, so you can see what your product looks like at every stage.",
    },
    {
      number: "06",
      title: "Deployment",
      description:
        "Once everything is ready, the team launches your product to live environments like app stores or web platforms and handles the release end to end.",
      isGreen: true,
    },
    {
      number: "07",
      title: "Support and Scaling",
      description:
        "The team stays involved to help with updates and improvements. As your product grows, we make sure it continues to perform and adapts to new needs.",
    },
  ];

  return (
    <section className="relative w-full bg-[#F1FCFF] py-20 md:py-28 px-38 overflow-hidden">
      {/* Grid background dots (decorative) */}
      <div className="absolute left-[5%] top-[10%] opacity-5 pointer-events-none">
        <Image src="/images/line.png" alt="Grid" width={600} height={600} className="scale-150" />
      </div>

      <div className="w-full mx-auto relative z-10 px-5 md:px-10 lg:px-20">
        <div className="top-0 z-20 pt-12 pb-8">
          <div className="text-center flex flex-col items-center gap-6">
            <h2 className="text-[48px] md:text-[80px] font-normal text-[#00161D] leading-none tracking-tight capitalize">
              Our <span className="font-bold">Development Process</span>
            </h2>
            <p className="max-w-[800px] text-[18px] text-[#00161D] opacity-70 text-center font-medium">
              The workflow our team follows is designed to keep things easy to follow for the client. Every step is structured properly, so you always have visibility and a simple understanding of how your product is being built.
            </p>
          </div>
        </div>

        <div
          className="w-full"
        >
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-20 pt-6">
            {processSteps.map((step, index) => (
              <div key={step.number} className={`flex ${index % 2 === 0 ? "justify-start" : "justify-end lg:mt-16"}`}>
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
        <img src="/images/squire-box.png" alt="Grid" width={100} height={50} className="absolute -bottom-34 left-0 scale-150" />
      </div>
    </section>
  );
}
