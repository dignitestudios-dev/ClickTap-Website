"use client";
import { useState } from "react";
import classNames from "classnames";

type Project = {
  name: string;
  title: string;
  img: string;
};

type Props = {
  heading: React.ReactNode;
  description: string;
  projects: Project[];
}

export default function Portfolio({ heading, description, projects }: Props) {
  const [activeItem, setActiveItem] = useState(0); // Start with the first item active

  return (
    <div className="flex h-full w-full items-center justify-center py-24  bg-[#F1FCFF]">
      <div className="  w-full flex flex-col gap-12">

        {/* Optional Title Section matching your previous design */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-[#00161D] relative z-10 text-5xl md:text-[72px] leading-tight tracking-tight">
            {heading}
          </h2>
          <p className="text-[#00161D] text-[15px] md:text-[18px] leading-[28px] opacity-80 max-w-[850px] mt-4">
            {description}
          </p>
        </div>
        <div className="relative">
          <img src="/images/portfolio.png" alt="portfolio-bg-circle.png" className="absolute w-[300px] h-[300px]  left-0 bottom-0 z-1" />
        </div>
        <ul className="flex px-20 md:px-20  flex-col md:flex-row w-full gap-4 md:h-[640px]">
          {projects.map((project, index) => {
            const isActive = activeItem === index;

            return (
              <li
                key={index}
                onClick={() => setActiveItem(index)}
                className={classNames(
                  "relative cursor-pointer overflow-hidden rounded-[32px] transition-all duration-[800ms] cubic-bezier(0.25, 1, 0.5, 1) group",
                  "h-[300px] md:h-full",
                  isActive ? "md:flex-[5] flex-[1]" : "md:flex-[1] flex-[1] hover:md:flex-[1.2]"
                )}
              >
                <img
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-[800ms] group-hover:scale-105"
                  src={project.img}
                  alt={project.name}
                />

                {/* Gradient Overlay for Text Readability */}
                <div
                  className={classNames(
                    "absolute inset-0 bg-gradient-to-t from-[#00161D]/90 via-[#00161D]/20 to-transparent transition-opacity duration-[800ms]",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                  )}
                />

                {/* Text Content */}
                <div
                  className={classNames(
                    "absolute bottom-0 left-0 w-full p-8 transition-all duration-[800ms] transform",
                    isActive
                      ? "translate-y-0 opacity-100 delay-100"
                      : "translate-y-10 opacity-0"
                  )}
                >
                  <p className="text-2xl md:text-4xl font-bold text-white mb-3">
                    {project.name}
                  </p>
                  <p className="text-sm md:text-[16px] font-medium text-white/80 leading-relaxed max-w-[80%]">
                    {project.title}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
