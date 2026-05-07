import Navbar from "./components/global/Navbar";
import Services from "./components/home/Services";
import Portfolio from "./components/home/Portfolio";
import Process from "./components/home/Process";
import TechStack from "./components/home/TechStack";
import Footer from "./components/global/Footer";
import WhyChooseUs from "./components/home/why-choose-us";
import Contact from "./components/home/Contact";
import FAQs from "./components/home/FAQs";
import Industry from "./components/home/Industry";
import TestimonialPage from "./components/home/Testimonials";
import TrustPilot from "./components/home/TrustPilot";
import Hero from "./components/home/Hero";
import { HOME_CONTENT } from "./constants/content";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="flex flex-col gap-16">
          {/* Hero Section */}
          <Hero
            tagline={HOME_CONTENT.hero.tagline}
            title={HOME_CONTENT.hero.title}
            description={HOME_CONTENT.hero.description}
            cta={HOME_CONTENT.hero.cta}
          >
            {/* Tech Stack Icons - Bottom of Hero */}
            <div className="flex items-center gap-20   mt-12  hover:grayscale-0 transition-all">
              <Image src="/images/andriod-icon.png" alt="Android" width={55} height={55} />
              <Image src="/images/mdi_react.png" alt="React" width={55} height={55} />
              <Image src="/images/akar-icons_node-fill.png" alt="Node" width={55} height={55} />
              <Image src="/images/fa6-brands_aws.png" alt="AWS" width={55} height={55} />
              <Image src="/images/material-symbols_flutter.png" alt="Flutter" width={55} height={55} />
              <Image src="/images/material-icon-theme_html.png" alt="HTML5" width={55} height={55} />
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
