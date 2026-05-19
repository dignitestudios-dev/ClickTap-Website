import Image from "next/image";
import Link from "next/link";

const serviceDescriptions: Record<string, string> = {
  "Mobile App Development":
    "The professionals at Clicktap Solutions design and develop a wide range of mobile applications while taking care of design and development in a collaborative way, so the end result feels smooth.",
  "iOS App Development":
    "The team of professional developers builds applications that are specifically designed for iPad or iPhone users. Applications that are highly functional, look clean and are very simple to use.",
  "Android App Development":
    "The designers and developers work with founders and teams to develop Android applications that are scalable and simple. The team focuses on building apps that feel natural for everyday users.",
  "PWA Development":
    "The team is here to help startups and businesses build Progressive Web Apps that feel like mobile apps but actually run in the browser. The emphasis of the team is on building accessible products.",
  "Web App Development":
    "We build web apps that live right in the browser. It helps startups turn ideas into tools that people can actually use and manage day to day.",
  "Custom Software Development":
    "We design and develop custom software that fits specific needs. It does not matter if you need internal tools or platforms that turn ideas into solutions that feel natural to use.",
  "AI App Development":
    "We design and develop AI applications that make products more capable. The team turns ideas into tools that can respond and improve over time while staying practical and easy to use.",
  "MVP Development":
    "We help founders build simple MVPs that bring ideas into a working version fast. Startups can validate concepts early and figure out what actually matters before scaling.",
  "UI/UX Design":
    "We create UI/UX designs that shape how products feel and function. It makes sure every screen makes sense and the experience feels smooth from start to finish.",
  "Mobile App Consulting":
    "We help startups and businesses make better decisions about their mobile apps. We guide founders by helping them plan to reduce confusion through the early stages.",
};

const ArrowIcon = () => (
  <div className="w-7 h-7 flex items-center justify-center bg-[#01C2FE] text-white rounded-full transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 19L19 5M19 5H9M19 5V15" />
    </svg>
  </div>
);

export default function Services() {
  return (
    <section id="services" className="w-full bg-[#F1FCFF] px-6 sm:px-10 md:px-20 flex flex-col items-center">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 w-full max-w-[800px] mb-16 text-center">
        <h2 className="text-[#00161D] font-bold text-[40px] lg:text-[60px] leading-tight tracking-tight">
          Services <span className="font-normal text-[#00161D]">We Offer</span>
        </h2>
        <p className="text-[#00161D] text-[16px] md:text-[20px] leading-[28px] opacity-80 max-w-[750px]">
          An idea is the beginning of every project and in order to make that project successful, the execution needs to be perfect. So, here are the services we offer to turn your idea into a scalable product.
        </p>
      </div>

      {/* Grid Container */}
      <div className="w-full bg-white p-3 rounded-[16px] grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Column 1 */}
        <div className="flex flex-col gap-6">
          {/* iOS Card */}
          <div className="bg-white p-2.5 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="bg-[#EAF6FB] rounded-[24px] relative overflow-hidden h-[350px] md:h-[420px] p-6 md:p-8 flex flex-col group hover:bg-[#e2f3fa] transition-colors">
              <Image src="/images/line.png" alt="iOS" fill className="object-contain mt-3 h-full" />
              <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-[#00161D] font-bold text-[16px] md:text-[24px] mb-1">iOS App Development</h3>
                <Link href="/services/ios-app-development" className="flex items-center gap-2 text-[#01C2FE] font-bold text-[15px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
              <div className="absolute inset-0 z-20 rounded-[24px] bg-[#00161D]/80 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                <h3 className="text-white font-bold text-[20px] md:text-[24px] mb-3">iOS App Development</h3>
                <p className="text-white/90 text-[15px] leading-[24px]">{serviceDescriptions["iOS App Development"]}</p>
                <Link href="/services/ios-app-development" className="mt-6 flex items-center gap-2 text-white font-bold text-[15px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
              <div className="absolute left-[50%] -translate-x-1/2  bottom-0 w-[280px] h-[220px] pointer-events-none">
                <Image src="/images/services-top.png" alt="iOS" fill className="object-contain" />
              </div>
            </div>
          </div>

          {/* Android Card */}
          <div className="bg-white p-2.5 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="bg-[#EAF6FB] rounded-[24px] relative overflow-hidden h-[350px] md:h-[420px] p-6 md:p-8 flex flex-col group hover:bg-[#e2f3fa] transition-colors">
              <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-[#00161D] font-bold text-[20px] md:text-[24px] mb-1">Android App Development</h3>
                <Link href="/services/andriod-app-development" className="flex items-center gap-2 text-[#01C2FE] font-bold text-[15px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
              <div className="absolute inset-0 z-20 rounded-[24px] bg-[#00161D]/80 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                <h3 className="text-white font-bold text-[24px] mb-3">Android App Development</h3>
                <p className="text-white/90 text-[15px] leading-[24px]">{serviceDescriptions["Android App Development"]}</p>
                <Link href="/services/andriod-app-development" className="mt-6 flex items-center gap-2 text-white font-bold text-[15px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
              <div className="absolute -bottom-10 left-0 w-[200px] h-[300px] pointer-events-none">
                <Image src="/images/services-left-img.png" alt="Android" fill className="object-contain" />
              </div>
              <div className="absolute top-0 right-0 w-[150px] h-full pointer-events-none">
                <Image src="/images/andriod-app-border.png" alt="Android" fill className="" />
              </div>
            </div>
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-6">
          {/* PWA Card */}
          <div className=" rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex-1">
            <div className="bg-[#EAF6FB] rounded-[24px] relative overflow-hidden h-[264px] p-5 flex flex-col justify-end group hover:bg-[#e2f3fa] transition-colors">
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80 scale-125">
                <Image src="/images/pwa.png" alt="PWA Background" width={400} height={400} className="object-contain" />
              </div>
              <h3 className="text-[#00161D] font-bold text-[22px] relative z-10 group-hover:opacity-0 transition-opacity duration-300">PWA Development</h3>
              <div className="absolute inset-0 z-20 rounded-[24px] bg-[#00161D]/80 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                <h3 className="text-white font-bold text-[22px] mb-3">PWA Development</h3>
                <p className="text-white/90 text-[14px] leading-[22px]">{serviceDescriptions["PWA Development"]}</p>
                <Link href="/services/progressive-web-app" className="mt-4 flex items-center gap-2 text-white font-bold text-[14px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* MVP Card */}
          <div className="bg-white p-2.5 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex-1">
            <div className="bg-[#EAF6FB] rounded-[24px] relative overflow-hidden h-[264px] p-8 flex flex-col justify-end group hover:bg-[#e2f3fa] transition-colors">
              <div className="relative inset-0 flex items-center justify-center pointer-events-none">
                <Image src="/images/Frame 2147228755.png" alt="MVP Lightning" height={150} width={300} className="object-contain  absolute bottom-8" />
              </div>
              <h3 className="text-[#00161D] font-bold text-[22px] relative z-10 group-hover:opacity-0 transition-opacity duration-300">MVP Development</h3>
              <div className="absolute inset-0 z-20 rounded-[24px] bg-[#00161D]/80 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                <h3 className="text-white font-bold text-[22px] mb-3">MVP Development</h3>
                <p className="text-white/90 text-[14px] leading-[22px]">{serviceDescriptions["MVP Development"]}</p>
                <Link href="/services/mvp-development-services" className="mt-4 flex items-center gap-2 text-white font-bold text-[14px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>

          {/* Consulting Card */}
          <div className="bg-white p-2.5 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex-1">
            <div className="bg-[#EAF6FB] rounded-[24px] relative overflow-hidden h-[264px]  flex flex-col justify-end group hover:bg-[#e2f3fa] transition-colors">
              <div className="flex items-center p-5 xl:p-0 justify-between">
                <Image src="/images/left-service.png" alt="Consulting" width={100} height={100} className="object-contain hidden xl:block  " />
                <div className="bg-[#01C2FE]  w-full  rounded-[16px] p-3 pr-5 flex items-center gap-3 shadow-[0_10px_30px_rgba(1,194,254,0.4)] z-10 ">
                  <div className="bg-white w-[46px] h-[46px] rounded-full flex items-center justify-center relative shrink-0">
                    {/* Logo SVG */}
                    <Image src="/images/card-logo.png" alt="card-logo" width={24} height={24} className="object-contain" />
                    {/* Green Dot */}
                    <span className="absolute top-0 right-0 w-3 h-3 bg-[#A9C921] rounded-full border-2 border-white translate-x-[10%] -translate-y-[10%]"></span>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-white font-bold text-[16px] leading-tight mb-0.5">CTS</span>
                    <span className="text-white text-[13px] leading-[1.2] max-w-[130px] opacity-90">Hey there how can we help you today?</span>
                  </div>
                </div>
                <Image src="/images/right-service.png" alt="Consulting" width={100} height={100} className="object-contain hidden xl:block" />
              </div>
              <div className="p-8 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-[#00161D] font-bold text-[22px] relative z-10 leading-tight">Mobile App Consulting<br />Services</h3>
              </div>
              <div className="absolute inset-0 z-20 rounded-[24px] bg-[#00161D]/80 p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                <h3 className="text-white font-bold text-[22px] mb-3 leading-tight">Mobile App Consulting Services</h3>
                <p className="text-white/90 text-[14px] leading-[22px]">{serviceDescriptions["Mobile App Consulting"]}</p>
                <Link href="/services/mobile-app-consulting-services" className="mt-4 flex items-center gap-2 text-white font-bold text-[14px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-6">
          {/* AI Card */}
          <div className="bg-white p-2.5 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="bg-[#EAF6FB] rounded-[24px] relative overflow-hidden h-[350px] md:h-[420px] p-6 md:p-8 flex flex-col group hover:bg-[#e2f3fa] transition-colors">
              <div className="relative z-20 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-[#00161D] font-bold text-[24px] mb-1">AI App Development</h3>
                <Link href="/services/ai-app-development" className="flex items-center gap-2 text-[#01C2FE] font-bold text-[15px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
              <div className="absolute inset-0 z-20 rounded-[24px] bg-[#00161D]/80 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                <h3 className="text-white font-bold text-[24px] mb-3">AI App Development</h3>
                <p className="text-white/90 text-[15px] leading-[24px]">{serviceDescriptions["AI App Development"]}</p>
                <Link href="/services/ai-app-development" className="mt-6 flex items-center gap-2 text-white font-bold text-[15px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
              <div className="absolute inset-0 z-0 flex items-end justify-end pointer-events-none overflow-hidden rounded-[24px]">
                <div className="relative w-full h-[35%]  -right-10">
                  <Image src="/images/ai-app-dev.png" alt="AI bg" fill className="" />
                </div>
              </div>
              <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none translate-y-10">
                <Image src="/images/Frame 2147228735.png" alt="Star" width={220} height={220} className="object-contain" />
              </div>
            </div>
          </div>

          {/* Mobile App Card */}
          <div className="bg-white p-2.5 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
            <div className="bg-[#EAF6FB] rounded-[24px] relative overflow-hidden h-[350px] md:h-[420px] p-6 md:p-8 flex flex-col group hover:bg-[#e2f3fa] transition-colors">
              <div className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">
                <h3 className="text-[#00161D] font-bold text-[24px] mb-1">Mobile App Development</h3>
                <Link href="/services/mobile-app-development" className="flex items-center gap-2 text-[#01C2FE] font-bold text-[15px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
              <div className="absolute inset-0 z-20 rounded-[24px] bg-[#00161D]/80 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col">
                <h3 className="text-white font-bold text-[24px] mb-3">Mobile App Development</h3>
                <p className="text-white/90 text-[15px] leading-[24px]">{serviceDescriptions["Mobile App Development"]}</p>
                <Link href="/services/mobile-app-development" className="mt-6 flex items-center gap-2 text-white font-bold text-[15px] group/btn w-fit">
                  Learn More <ArrowIcon />
                </Link>
              </div>
              <div className="absolute bottom-0 right-0 w-full h-[70%] pointer-events-none flex items-end justify-end">
                <Image src="/images/apps-image.png" alt="Logos Grid" fill className="object-contain object-bottom" />
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* View All CTA */}
      <div className="mt-16">
        <a href="#" className="flex items-center gap-2 border-b-2 border-[#A9C921] pb-1 hover:opacity-70 transition-opacity">
          <span className="text-[#A9C921] font-semibold text-[16px]">Learn more about services</span>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#A9C921" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="-rotate-45">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </section>
  );
}
