"use client";
import { useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import Link from "next/link";
import { ArrowUpIcon } from "lucide-react";

type Project = {
  name: string;
  title: string;
  img: string;
  link?: any;
};

type Props = {
  heading: React.ReactNode;
  description: string;
  projects: Project[];
}
const ArrowIcon = () => (
  <div className="w-7 h-7 flex items-center justify-center bg-[#01C2FE] text-white rounded-full transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19L19 5M19 5H9M19 5V15" />
    </svg>
  </div>
);
export default function Portfolio({ heading, description, projects }: Props) {
  const [activeItem, setActiveItem] = useState(0); // Start with the first item active

  return (
    <div className="flex h-full w-full items-center justify-center py-5 md:py-24 bg-[#F1FCFF]">
      <div className="  w-full flex flex-col gap-12">

        {/* Optional Title Section matching your previous design */}
        <div className="text-center relative z-10 flex flex-col items-center gap-4">
          <h2 className="text-[#00161D]  text-4xl sm:text-5xl md:text-[72px] leading-tight tracking-tight">
            {heading}
          </h2>
          <p className="text-[#00161D] text-[15px] md:text-[18px] leading-[28px] opacity-80 max-w-[850px] mt-4 px-6 md:px-0">
            {description}
          </p>
        </div>
        <div className="absolute h-[200px] md:h-[300px] w-full">
          <Image src="/images/portfolio.png" alt="portfolio-bg-circle" width={300} height={300} className="absolute left-0 bottom-0 z-1 w-[200px] h-[200px] md:w-[300px] md:h-[300px]" />
        </div>
        {/* MOBILE + TABLET UI */}
        <div className=" block md:hidden w-full">
          <ul className="flex flex-col w-full gap-4 px-6">

            {/* Active Large Image */}
            <li className="relative overflow-hidden rounded-[32px] h-[300px] sm:h-[400px]">
              <Image
                className="absolute inset-0 h-full w-full object-cover"
                src={projects[activeItem].img}
                alt={projects[activeItem].name}
                fill
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#00161D]/90 via-[#00161D]/20 to-transparent" />

              <div className="absolute bottom-0 left-0 w-full p-5 sm:p-8">
                <p className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {projects[activeItem].name}
                </p>

                <p className="text-xs sm:text-sm text-white/80 leading-relaxed">
                  {projects[activeItem].title}
                </p>

              </div>
            </li>

            {/* Thumbnails */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">
              {projects.map((project, index) => {
                if (index === activeItem) return null;

                return (
                  <li
                    key={index}
                    onClick={() => setActiveItem(index)}
                    className="relative min-w-[140px] h-[110px] rounded-[24px] overflow-hidden cursor-pointer flex-shrink-0"
                  >
                    <Image
                      className="absolute inset-0 h-full w-full object-cover"
                      src={project.img}
                      alt={project.name}
                      fill
                    />

                    <div className="absolute inset-0 bg-black/40" />

                    <div className="absolute bottom-2 left-2">
                      <p className="text-white text-sm font-semibold">
                        {project.name}
                      </p>
                    </div>
                  </li>
                );
              })}
            </div>
          </ul>
        </div>

        {/* DESKTOP UI */}
        <div className="hidden relative z-1 md:block">
          <ul className="flex px-6 md:px-12 lg:px-20 flex-row w-full gap-4 md:h-[500px] lg:h-[640px]">
            {projects.map((project, index) => {
              const isActive = activeItem === index;

              return (
                <li
                  key={index}
                  onClick={() => setActiveItem(index)}
                  className={classNames(
                    "relative cursor-pointer overflow-hidden rounded-[32px] transition-all duration-[800ms] group",
                    "h-[300px] md:h-full",
                    isActive
                      ? "md:flex-[5] flex-[1]"
                      : "md:flex-[1] flex-[1] hover:md:flex-[1.2]"
                  )}
                >
                  <Image
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                    src={project.img}
                    alt={project.name}
                    fill
                  />

                  <div
                    className={classNames(
                      "absolute inset-0 bg-gradient-to-t from-[#00161D]/90 via-[#00161D]/20 to-transparent transition-opacity duration-[800ms]",
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                    )}
                  />

                  <div
                    className={classNames(
                      "absolute bottom-0 left-0 w-full p-8 transition-all duration-[800ms]",
                      isActive
                        ? "translate-y-0 opacity-100 delay-100"
                        : "translate-y-10 opacity-0"
                    )}
                  >
                    <p className="text-xl md:text-2xl lg:text-4xl font-bold text-white mb-2">
                      {project.name}
                    </p>

                    <p className="text-xs md:text-sm lg:text-[16px] text-white/80">
                      {project.title}
                    </p>
                    {
                      project?.link && (

                        <Link href={project?.link} className="flex mt-5 items-center gap-2 text-[#01C2FE] font-bold text-[15px] group/btn w-fit">
                          View More <ArrowIcon />
                        </Link>
                      )
                    }
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
