"use client";
import { FaAngular, FaAppStoreIos, FaAws, FaJava, FaPhp, FaPython, FaReact, FaSwift, FaVuejs, } from "react-icons/fa";
import { FaFlutter, FaGolang, FaNodeJs } from "react-icons/fa6";
import { DiRedis } from "react-icons/di";
import { SiElasticsearch, SiLaravel, SiMysql, SiRubyonrails } from "react-icons/si";
import { useState } from "react";
import { TbBrandKotlin, TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";
import { BsAndroid2 } from "react-icons/bs";
type TechItem = {
  title: string;
  icon: any;
};

type Props = {
  heading?: React.ReactNode;
  description?: string;
}

const techData: Record<string, TechItem[]> = {
  "Frontend": [
    { title: "React", icon: FaReact },
    { title: "Vue.js", icon: FaVuejs },
    { title: "Angular", icon: FaAngular },
    { title: "Flutter", icon: FaFlutter },
    { title: "React Native", icon: FaReact },
    { title: "Next.js", icon: TbBrandNextjs },
  ],
  "Backend": [
    { title: "Node.js", icon: FaNodeJs },
    { title: "Python", icon: FaPython },
    { title: "Go Lang", icon: FaGolang },
    { title: "Java", icon: FaJava },
    { title: "Laravel", icon: SiLaravel },
    { title: "PHP", icon: FaPhp },
  ],
  "Mobile": [
    { title: "iOS", icon: FaAppStoreIos },
    { title: "Android", icon: BsAndroid2 },
    { title: "React Native", icon: FaReact },
    { title: "Flutter", icon: FaFlutter },
    { title: "Swift", icon: FaSwift },
    { title: "Kotlin", icon: TbBrandKotlin },
  ],
  "Database": [
    { title: "AWS", icon: FaAws },
    { title: "MongoDB", icon: BiLogoMongodb },
    { title: "MySQL", icon: SiMysql },
    { title: "Redis", icon: DiRedis },
    { title: "Firebase", icon: IoLogoFirebase },
    { title: "Elasticsearch", icon: SiElasticsearch },
  ]
};

export default function TechStack({ heading, description }: Props) {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section className="w-full bg-[#F1FCFF] py-16 md:py-20 px-6 sm:px-10 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-4xl sm:text-5xl md:text-[66px] font-normal text-[#00161D] leading-tight">
            {heading || <>The <span className="!font-bold"> Technologies </span> We Use</>}
          </h2>
          <p className="max-w-[900px] text-[15px] text-[#00161D] opacity-70 leading-relaxed">
            {description || "The team uses a carefully chosen mix of modern technologies to build reliable products across mobile and web development. The focus is on selecting the right stack for each project, not just following trends."}
          </p>
        </div>

        {/* Tab Selection */}
        <div className="w-full max-w-[1000px] flex border border-[#00161D] rounded-2xl overflow-x-auto no-scrollbar scroll-smooth">
          {Object.keys(techData).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 min-w-[120px] md:min-w-0 py-3 md:py-4 font-semibold text-[14px] md:text-[16px] transition-all flex items-center justify-center gap-2 ${activeTab === tab ? "bg-[#00161D] text-white" : "bg-white text-[#00161D]"
                }`}
            >
              {tab}
              {activeTab === tab && (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="rotate-90">
                  <path d="m9 18 6-6-6-6" />
                </svg>
              )}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {techData[activeTab].map((tech) => (
            <div key={tech.title} className="bg-white p-6 md:p-10 rounded-2xl flex flex-col items-center justify-center gap-4 shadow-sm border border-[#DBF7FF] hover:border-secondary transition-colors group">
              <div className="w-14 h-14 md:w-20 md:h-20 bg-[#01C2FE] rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform shadow-[0_8px_20px_rgba(1,194,254,0.35)]">
                <tech.icon className="w-7 h-7 md:w-10 md:h-10 text-white" strokeWidth={tech.title == "Next.js" || tech.title == "Kotlin" ? 1 : 0} />
              </div>
              <span className="text-[16px] font-medium text-[#00161D] text-center">{tech.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}