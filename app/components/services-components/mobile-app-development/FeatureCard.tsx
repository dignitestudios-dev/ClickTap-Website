import React from 'react';
import Image from "next/image";

interface FeatureCardProps {
  icon: string;
  title: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title }) => {
  return (
    <div className="flex flex-col items-center justify-between cursor-pointer p-10 bg-[#DBF7FF] rounded-[32px] hover:shadow-2xl hover:shadow-blue-100/50 hover:-translate-y-2 transition-all duration-500 group h-[240px] text-center border border-white/60">
      <div className="mb-8 text-[#00AEEF] transition-transform duration-500 group-hover:scale-110">
        <Image src={icon} alt={title} width={40} height={40} className="mx-auto" />
      </div>
      <h3 className="text-[#00161D] text-[16px] font-medium leading-tight ">
        {title}
      </h3>
    </div>
  );
};


export default FeatureCard;
