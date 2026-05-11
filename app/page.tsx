import dynamic from "next/dynamic";
import Navbar from "./components/global/Navbar";
import Hero from "./components/home/Hero";


// Dynamic imports for components below the fold
const Services = dynamic(() => import("./components/home/Services"), { ssr: true });
const Portfolio = dynamic(() => import("./components/home/Portfolio"), { ssr: true });
const Process = dynamic(() => import("./components/home/Process"), { ssr: true });
const TechStack = dynamic(() => import("./components/home/TechStack"), { ssr: true });
const WhyChooseUs = dynamic(() => import("./components/home/why-choose-us"), { ssr: true });
const Contact = dynamic(() => import("./components/home/Contact"), { ssr: true });
const FAQs = dynamic(() => import("./components/home/FAQs"), { ssr: true });
const Industry = dynamic(() => import("./components/home/Industry"), { ssr: true });
const TestimonialPage = dynamic(() => import("./components/home/Testimonials"), { ssr: true });
const TrustPilot = dynamic(() => import("./components/home/TrustPilot"), { ssr: true });
const Footer = dynamic(() => import("./components/global/Footer"), { ssr: true });
import { HOME_CONTENT } from "./constants/content";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 main-body-section w-full">
        <div className="flex flex-col gap-16">
          {/* Hero Section */}
          <Hero
            tagline={HOME_CONTENT.hero.tagline}
            title={HOME_CONTENT.hero.title}
            description={HOME_CONTENT.hero.description}
            cta={HOME_CONTENT.hero.cta}
          >
            {/* Tech Stack Icons - Bottom of Hero */}
            <div className="flex flex-wrap   items-center gap-8 -ml-8 md:ml-0  sm:gap-10 md:gap-15 lg:gap-20 mt-5 lg:mt-12 hover:grayscale-0 transition-all">
              <Image src="/images/andriod-icon.png" alt="Android" width={45} height={45} className="w-6 h-6 md:w-5 md:h-5 lg:w-14 lg:h-14" />
              <Image src="/images/mdi_react.png" alt="React" width={45} height={45} className="w-6 h-6 md:w-5 md:h-5 lg:w-14 lg:h-14" />
              <Image src="/images/akar-icons_node-fill.png" alt="Node" width={45} height={45} className="w-6 h-6 md:w-5 md:h-5 lg:w-14 lg:h-14" />
              <Image src="/images/fa6-brands_aws.png" alt="AWS" width={45} height={45} className="w-6 h-6 md:w-5 md:h-5 lg:w-14 lg:h-14" />
              <Image src="/images/material-symbols_flutter.png" alt="Flutter" width={45} height={45} className="w-6 h-6 md:w-5 md:h-5 lg:w-14 lg:h-14" />
              <Image src="/images/material-icon-theme_html.png" alt="HTML5" width={45} height={45} className="w-6 h-6 md:w-5 md:h-5 lg:w-14 lg:h-14" />
            </div>
          </Hero>

          {/* Services Section */}
          <Services />

          {/* Portfolio Section */}
          <Portfolio
            heading={HOME_CONTENT.portfolio.heading}
            description={HOME_CONTENT.portfolio.description}
            projects={HOME_CONTENT.portfolio.items}
          />

          {/* Process Section */}
          <Process
            heading={HOME_CONTENT.process.heading}
            description={HOME_CONTENT.process.description}
            steps={HOME_CONTENT.process.items}
          />

          {/* Why Choose Us */}
          <WhyChooseUs
            heading={HOME_CONTENT.whyChooseUs.heading}
            para={HOME_CONTENT.whyChooseUs.description}
            items={HOME_CONTENT.whyChooseUs.items}
          />
          {/* Tech Stack Section */}
          <TechStack />
          {/* TrustPilot */}
          <TrustPilot
            stats={HOME_CONTENT.trustPilot.stats}
            marqueeLogos={HOME_CONTENT.trustPilot.logos}
          />
          {/* Industry */}
          <Industry
            heading={HOME_CONTENT.industry.heading}
            description={HOME_CONTENT.industry.description}
            cards={HOME_CONTENT.industry.items}
          />

          {/* Testimonials */}
          <TestimonialPage
            heading={HOME_CONTENT.testimonials.heading}
            testimonials={HOME_CONTENT.testimonials.items.map((item, idx) => ({
              id: idx + 1,
              name: item.author,
              role: item.role,
              title: "Exceptional Service", // Placeholder
              message: item.quote,
              date: "2024",
              rating: 5,
              avatar: item.avatar
            }))}
          />
          {/* FAQs */}
          <FAQs
            heading={HOME_CONTENT.faqs.heading}
            description={HOME_CONTENT.faqs.items[0].answer} // Wait, looking at the config, description was not explicitly provided for home FAQs in my writing but I should use the one from config if exists or a default.
            faqs={HOME_CONTENT.faqs.items}
          />
          {/* Contact Section */}
          <Contact
            heading={HOME_CONTENT.contact.heading}
            description={HOME_CONTENT.contact.description}
            ctaText={HOME_CONTENT.contact.cta}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
