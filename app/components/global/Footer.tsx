import Image from "next/image";
import Link from "next/link";

const serviceLinks = [
  { name: "Mobile App Development", href: "/services/mobile-app-development" },
  { name: "iOS App Development", href: "/services/ios-app-development" },
  { name: "Android App Development", href: "/services/andriod-app-development" },
  { name: "PWA Development", href: "/services/progressive-web-app" },
  { name: "Web App Development", href: "/services/web-app-development" },
  { name: "Custom Software Development", href: "/services/custom-software-development" },
  { name: "AI App Development", href: "/services/ai-app-development" },
  { name: "MVP Development", href: "/services/mvp-development-services" },
  { name: "UI/UX Design", href: "/services/ui-ux" },
  { name: "Mobile App Consulting", href: "/services/mobile-app-consulting-services" },
];

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
  { name: "Teams & Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

const socialLinks = [
  { name: "Twitter", icon: "/images/tiwiter.png", link: "https://x.com/ClickTapS" },
  { name: "Facebook", icon: "/images/fb.png", link: "https://www.facebook.com/ClickTapSolutions" },
  { name: "Instagram", icon: "/images/insta.png", link: "https://www.instagram.com/clicktapsolutions" },
  { name: "LinkedIn", icon: "/images/linkedin.png", link: "https://www.linkedin.com/company/clicktap-solutions/" },
];

export default function Footer() {
  return (
    // bg-[#051114] background color lagaya hai taake safe layout rahe
    <footer className="w-full relative  px-6 md:px-16 lg:px-24 overflow-hidden ">

      <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
        <Image
          src="/images/union.png"
          fill
          alt="Footer Background"
          // object-fill har screen size par cuts ko left aur right me sahi barabar bithaega
          className="object-cover w-full h-full"
          priority
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 py-10 flex flex-col md:flex-row justify-between gap-12 md:gap-6 pb-12 border-b border-white/10">

        {/* Left Column: Logo + Text + Socials */}
        <div className="flex flex-col gap-6 max-w-sm">
          <Image
            src="/images/logo.png"
            width={175}
            height={50}
            className="w-[175px] h-auto object-contain"
            alt="Clicktap Solutions Logo"
          />
          <p className="font-bold text-[21px] leading-relaxed text-white/70">
            Have an idea worth building?
            Let’s turn it into something exceptional.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-2">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                href={social.link}
                target="_blank"
                aria-label={social.name}
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src={social.icon}
                  alt={social.name}
                  width={40}
                  height={40}
                  className="w-12 h-12 object-contain"
                />
              </Link>
            ))}
          </div>
        </div>

        <div className="flex gap-16 sm:gap-24 lg:gap-32 flex-wrap md:flex-nowrap">
          {/* Services Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-medium text-[16px] md:text-[18px]">Location</h3>
            <p className="text-white font-medium text-[14px]">3 Sugar Creek Center Blvd #100, Sugar Land,<br /> TX 77478</p>
            <iframe className="w-[300px] h-[150px] rounded-[16px]" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d401291.52539922635!2d-96.10343240424484!3d29.737503243118855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640e7bc6ea6e0d9%3A0x4d5d015dceec04a3!2sClickTap%20Solutions!5e1!3m2!1sen!2s!4v1779096883929!5m2!1sen!2s" loading="lazy" ></iframe>
          </div>
        </div>


        {/* Right Columns: Links Container */}
        <div className="flex gap-16 sm:gap-24 lg:gap-32 flex-wrap md:flex-nowrap">
          {/* Services Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-medium text-[16px] md:text-[18px]">Services</h3>
            <div className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 font-normal text-[14px] hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="text-white font-medium text-[16px] md:text-[18px]">Quick Links</h3>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 font-normal text-[14px] hover:text-white transition-colors whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Copyright Text */}
      <div className="max-w-7xl mx-auto relative z-10 h-[60px] py-6 text-center">
        <span className="text-white/40 text-[14px]">
          Copyright © 2026 Clicktap. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
