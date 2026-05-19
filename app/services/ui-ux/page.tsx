import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../../components/global/Navbar";
import Hero from "../../components/services-components/UIUX/Hero";
import { UIUX_CONTENT } from "../../constants/content";

// Dynamic imports
const Footer = dynamic(() => import("../../components/global/Footer"), { ssr: true });
const Contact = dynamic(() => import("../../components/home/Contact"), { ssr: true });
const FAQs = dynamic(() => import("../../components/home/FAQs"), { ssr: true });
const Industry = dynamic(() => import("../../components/home/Industry"), { ssr: true });
const Portfolio = dynamic(() => import("../../components/home/Portfolio"), { ssr: true });
const Process = dynamic(() => import("../../components/home/Process"), { ssr: true });
const TechStack = dynamic(() => import("../../components/home/TechStack"), { ssr: true });
const TestimonialPage = dynamic(() => import("../../components/home/Testimonials"), { ssr: true });
const WhyChooseUs = dynamic(() => import("../../components/home/why-choose-us"), { ssr: true });
const AboutSection = dynamic(() => import("../../components/services-components/mobile-app-development/AboutSection"), { ssr: true });
const BenefitsSection = dynamic(() => import("../../components/services-components/mobile-app-development/BenefitsSection"), { ssr: true });
const FeaturesSection = dynamic(() => import("../../components/services-components/mobile-app-development/FeaturesSection"), { ssr: true });
const QuoteSection = dynamic(() => import("../../components/services-components/mobile-app-development/QuoteSection"), { ssr: true });
const ServicesSection = dynamic(() => import("../../components/services-components/mobile-app-development/ServiceSection"), { ssr: true });

export const metadata: Metadata = {
    title: UIUX_CONTENT.meta.title,
    description: UIUX_CONTENT.meta.description,
};

export default function UIUXDevelopment() {
    return (
        <div className="flex flex-col min-h-screen main-body-section  overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="flex flex-col gap-36">
                    {/* Hero Section */}
                    <Hero
                        tagline={UIUX_CONTENT.hero.tagline}
                        title={UIUX_CONTENT.hero.title}
                        cta={UIUX_CONTENT.hero.cta}
                        description={UIUX_CONTENT.hero.description}
                    />

                    {/* About Section */}
                    <AboutSection
                        tagline=""
                        heading={UIUX_CONTENT.about.heading}
                        paragraphs={[
                            UIUX_CONTENT.about.description,
                            UIUX_CONTENT.about.content
                        ]}
                        ctaText={UIUX_CONTENT.about.cta}
                        stats={[
                            { value: "300+", label: "Projects Delivered", color: 'blue', image: "/images/about-2.png" },
                            { value: "10+", label: "Years Experience", color: 'light', image: "/images/about-3.png" },
                            { value: "95%", label: "Client Retention", color: 'white', image: "/images/about-1.png" },
                        ]}
                    />

                    {/* Services Section */}
                    <ServicesSection
                        heading={UIUX_CONTENT.services.heading}
                        description={UIUX_CONTENT.services.description}
                        services={UIUX_CONTENT.services.items}
                        ctaText={UIUX_CONTENT.services.cta}
                    />

                    {/* Why Choose Us Section */}
                    <WhyChooseUs
                        heading={UIUX_CONTENT.whyChooseUs.heading}
                        para={UIUX_CONTENT.whyChooseUs.description}
                        items={UIUX_CONTENT.whyChooseUs.items}
                        ctaText={UIUX_CONTENT.whyChooseUs.cta}
                    />

                    {/* Tech Stack Section */}
                    <TechStack
                        heading={UIUX_CONTENT.techStack.heading}
                        description={UIUX_CONTENT.techStack.description}
                    />

                    {/* Industry */}
                    <Industry
                        heading={UIUX_CONTENT.industry.heading}
                        description={UIUX_CONTENT.industry.description}
                        cards={UIUX_CONTENT.industry.items}
                        ctaText={UIUX_CONTENT.industry.cta}
                    />

                    {/* Process Section */}
                    <Process
                        heading={UIUX_CONTENT.process.heading}
                        description={UIUX_CONTENT.process.description}
                        steps={UIUX_CONTENT.process.items}
                    />

                    {/* Benefits Section */}
                    <BenefitsSection
                        heading={UIUX_CONTENT.advantages.heading}
                        description={UIUX_CONTENT.advantages.description}
                        cards={UIUX_CONTENT.advantages.items.map((item, idx) => ({
                            id: idx + 1,
                            title: item.title,
                            description: item.description,
                            icon: `/images/benefit-${(idx % 6) + 1}.png`
                        }))}
                        ctaText={UIUX_CONTENT.advantages.cta}
                    />

                    {/* Features Section */}
                    <FeaturesSection
                        heading={UIUX_CONTENT.features.heading}
                        description={UIUX_CONTENT.features.description}
                        features={UIUX_CONTENT.features.items.map((title, idx) => ({
                            title,
                            icon: `/images/feature-${(idx % 10) + 1}.png`
                        }))}
                        ctaText={UIUX_CONTENT.features.cta}
                    />

                    {/* Portfolio Section */}
                    <Portfolio
                        heading={UIUX_CONTENT.portfolio.heading}
                        description={UIUX_CONTENT.portfolio.description}
                        projects={UIUX_CONTENT.portfolio.items}
                    />

                    {/* Quote Section */}
                    <QuoteSection
                        heading={UIUX_CONTENT.portfolio.ctaTitle}
                        description={UIUX_CONTENT.portfolio.ctaDescription}
                        ctaText={UIUX_CONTENT.portfolio.ctaButton}
                    />

                    {/* Testimonials */}
                    <TestimonialPage
                        heading={UIUX_CONTENT.testimonials.heading}
                        description={UIUX_CONTENT.testimonials.description}
                        testimonials={UIUX_CONTENT.testimonials.items.map((item, idx) => ({
                            id: idx + 1,
                            name: item.author,
                            role: item.role,
                            title: "Amazing Work",
                            message: item.quote,
                            date: "2024",
                            rating: 5,
                            avatar: "/images/person.png"
                        }))}
                        ctaText={UIUX_CONTENT.testimonials.cta}
                    />

                    {/* FAQs */}
                    <FAQs
                        heading={UIUX_CONTENT.faqs.heading}
                        description=""
                        faqs={UIUX_CONTENT.faqs.items}
                    />

                    {/* Contact Section */}
                    <Contact
                        heading={UIUX_CONTENT.contact.heading}
                        description={UIUX_CONTENT.contact.description}
                        ctaText={UIUX_CONTENT.contact.cta}
                        fieldLabel="App Idea"
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

