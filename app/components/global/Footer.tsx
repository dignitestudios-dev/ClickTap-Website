import Image from "next/image";

const exploreLinks = [
  "What We Offer", "Case Studies", "Blog & Insights", "Resources", "FAQs",
];
const companyLinks = ["Home", "About", "Service", "Testimonials", "Pricing"];
const legalLinks = ["Privacy Policy", "Cookie Policy", "Disclaimer", "Copyright"];

const socialLinks = [
  { name: "Twitter", icon: "/images/tiwiter.png" },
  { name: "Facebook", icon: "/images/fb.png" },
  { name: "Instagram", icon: "/images/insta.png" },
  { name: "LinkedIn", icon: "/images/linkedin.png" },
];

export default function Footer() {
  return (
    <footer className="w-full  relative overflow-hidden">
      {/* Top curved shape */}

      <div className="absolute bottom-0 left-0 right-0 h-48 bg-[#F1FCFF] rounded-t-[60px] opacity-5" />

      <div className="relative z-10 mx-auto ">
        {/* Main content row */}
        <div className="flex flex-col rounded-b-[40px] md:rounded-b-[60px] bg-[#00161D] h-auto md:h-[200px] w-full md:flex-row gap-10 md:gap-16 justify-between p-8 md:p-5 md:px-20">
          {/* Left: logo + social + newsletter */}
          <div className="flex flex-col justify-end  gap-10 w-full md:w-[369px]">
            {/* Social icons */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <button
                  key={social.name}
                  aria-label={social.name}
                >
                  <Image src={social.icon} alt={social.name} width={40} height={40} className="w-8 h-8 md:w-10 md:h-10 object-contain" />
                </button>
              ))}
            </div>

            {/* Newsletter */}
            <div className="flex flex-col gap-4">
              <span className="text-white font-medium text-[16px]">
                Join the newsletter
              </span>

            </div>
          </div>

          {/* Right: links columns */}
          <div className="flex gap-10 md:gap-16 lg:gap-[120px] flex-wrap md:flex-nowrap">
            {/* Explore */}
            <div className="flex flex-col gap-4 mt-10 w-[107px]">
              <span className="text-white font-medium text-[16px]">Explore</span>
              <div className="flex flex-col ">
                {exploreLinks.map((link) => (
                  <a key={link} href="#" className="text-white/80 font-normal text-[16px] hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-4 mt-10 w-[107px]">
              <span className="text-white font-medium text-[16px]">Company</span>
              <div className="flex flex-col ">
                {companyLinks.map((link) => (
                  <a key={link} href="#" className="text-white/80 font-normal text-[16px] hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-4 mt-10 w-[107px]">
              <span className="text-white font-medium text-[16px]">Legal Links</span>
              <div className="flex flex-col ">
                {legalLinks.map((link) => (
                  <a key={link} href="#" className="text-white/80 font-normal text-[16px] hover:text-white transition-colors">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>


        {/* Bottom bar */}
        <div className="relative rounded-t-[40px] md:rounded-t-[60px] bg-[#00161D] h-auto md:h-[200px] gap-8 px-6 sm:px-10 md:px-20 py-12 md:py-0 flex flex-col md:block">

          <div className="flex items-center w-full md:w-[370px] justify-between bg-white/10 rounded-full px-4 py-1.5 md:mb-0">
            <span className="text-white/80 text-[16px]">Email Address</span>
            <button className="bg-white text-black font-medium text-[16px] rounded-full px-5 py-2">
              Show Now!
            </button>
          </div>
          <div className="relative flex items-center">
            <div className="flex-grow absolute w-full top-10 border-t border-gray-400"></div>
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center h-full py-10 md:py-5 gap-8 lg:gap-0" >

            <div className="flex items-center">
              <Image src="/images/logo.png" width={120} height={40} className="w-30 h-30 object-contain" alt="Logo" />
            </div>

            <span className="text-white/80 text-[16px] text-center">
              Copyright © 2026 Clicktap. All Rights Reserved.
            </span>

            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              <a href="#" className="text-white/80 text-[16px] hover:text-white transition-colors">
                Terms & Conditions
              </a>
              <a href="#" className="text-white/80 text-[16px] hover:text-white transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
