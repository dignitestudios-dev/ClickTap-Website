"use client";
import { useState } from "react";
import classNames from "classnames";
import { persons } from "@/app/utils/Person";

export default function Portfolio() {
  const [activeItem, setActiveItem] = useState(0); // Start with the first item active

  return (
    <div className="flex h-full w-full items-center justify-center py-24  bg-white">
      <div className="  w-full flex flex-col gap-12">

        {/* Optional Title Section matching your previous design */}
        <div className="text-center flex flex-col items-center gap-4">
          <h2 className="text-[#00161D] font-bold text-5xl md:text-[72px] leading-tight tracking-tight">
            The Projects <span className="font-normal text-[#00161D]"> We’ve Worked on</span>
          </h2>
          <p className="text-[#00161D] text-[18px] leading-[28px] opacity-80 max-w-[850px] mt-4">
            As an experienced development partner, we have worked with startups and growing businesses. Check out the case studies to see how ClickTap Solutions created functional apps just from ideas. Every project that we share here shows the challenges our clients had to deal with and the solutions we provided. Also, the outcomes we have achieved as a team.
          </p>
        </div>
        <div className="relative">
          <img src="/images/portfolio.png" alt="portfolio-bg-circle.png" className="absolute w-[300px] h-[300px]  left-0 bottom-0 z-10" />
        </div>
        <ul className="flex px-6 md:px-10  flex-col md:flex-row w-full gap-4 md:h-[640px]">
          {persons.map((person, index) => {
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
                  src={person.img}
                  alt={person.name}
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
                    {person.name}
                  </p>
                  <p className="text-sm md:text-[16px] font-medium text-white/80 leading-relaxed max-w-[80%]">
                    {person.title}
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
