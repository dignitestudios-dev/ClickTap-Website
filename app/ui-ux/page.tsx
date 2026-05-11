import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../components/global/Navbar";
import Hero from "../components/UIUX/Hero";
import { MVP_CONTENT } from "../constants/content";

// Dynamic imports
const Footer = dynamic(() => import("../components/global/Footer"), { ssr: true });
const Contact = dynamic(() => import("../components/home/Contact"), { ssr: true });
const FAQs = dynamic(() => import("../components/home/FAQs"), { ssr: true });
const Industry = dynamic(() => import("../components/home/Industry"), { ssr: true });
const Portfolio = dynamic(() => import("../components/home/Portfolio"), { ssr: true });
const Process = dynamic(() => import("../components/home/Process"), { ssr: true });
const TechStack = dynamic(() => import("../components/home/TechStack"), { ssr: true });
const TestimonialPage = dynamic(() => import("../components/home/Testimonials"), { ssr: true });
const WhyChooseUs = dynamic(() => import("../components/home/why-choose-us"), { ssr: true });
const AboutSection = dynamic(() => import("../components/mobile-app-development/AboutSection"), { ssr: true });
const BenefitsSection = dynamic(() => import("../components/mobile-app-development/BenefitsSection"), { ssr: true });
const FeaturesSection = dynamic(() => import("../components/mobile-app-development/FeaturesSection"), { ssr: true });
const QuoteSection = dynamic(() => import("../components/mobile-app-development/QuoteSection"), { ssr: true });
const ServicesSection = dynamic(() => import("../components/mobile-app-development/ServiceSection"), { ssr: true });

export const metadata: Metadata = {
    title: MVP_CONTENT.meta.title,
    description: MVP_CONTENT.meta.description,
};

export default function UIUXDevelopment() {
    return (
        <div className="flex flex-col min-h-screen main-body-section  overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1  w-full">
                <div className="flex flex-col gap-16">
                    {/* Hero Section */}
                    <Hero
                        tagline={MVP_CONTENT.hero.tagline}
                        title={MVP_CONTENT.hero.title}
                        cta={MVP_CONTENT.hero.cta}
                        description={MVP_CONTENT.hero.description}
                    />

                    {/* About Section */}
                    <AboutSection
                        tagline=""
                        heading={MVP_CONTENT.about.heading}
                        paragraphs={[
                            MVP_CONTENT.about.description,
                            MVP_CONTENT.about.content
                        ]}
                        ctaText={MVP_CONTENT.about.cta}
                        stats={[
                            { value: "300+", label: "Projects Delivered", color: 'blue', image: "/images/about-2.png" },
                            { value: "10+", label: "Years Experience", color: 'light', image: "/images/about-3.png" },
                            { value: "95%", label: "Client Retention", color: 'white', image: "/images/about-1.png" },
                        ]}
                    />

                    {/* Services Section */}
                    <ServicesSection
                        heading={MVP_CONTENT.services.heading}
                        description={MVP_CONTENT.services.description}
                        services={MVP_CONTENT.services.items}
                        ctaText={MVP_CONTENT.services.cta}
                    />

                    {/* Why Choose Us Section */}
                    <WhyChooseUs
                        heading={MVP_CONTENT.whyChooseUs.heading}
                        para={MVP_CONTENT.whyChooseUs.description}
                        items={MVP_CONTENT.whyChooseUs.items}
                    />

                    {/* Tech Stack Section */}
                    <TechStack
                        heading={MVP_CONTENT.techStack.heading}
                        description={MVP_CONTENT.techStack.description}
                    />

                    {/* Industry */}
                    <Industry
                        heading={MVP_CONTENT.industry.heading}
                        description={MVP_CONTENT.industry.description}
                        cards={MVP_CONTENT.industry.items}
                    />

                    {/* Process Section */}
                    <Process
                        heading={MVP_CONTENT.process.heading}
                        description={MVP_CONTENT.process.description}
                        steps={MVP_CONTENT.process.items}
                    />

                    {/* Benefits Section */}
                    <BenefitsSection
                        heading={MVP_CONTENT.advantages.heading}
                        description={MVP_CONTENT.advantages.description}
                        cards={MVP_CONTENT.advantages.items.map((item, idx) => ({
                            id: idx + 1,
                            title: item.title,
                            description: item.description,
                            icon: `/images/benefit-${(idx % 6) + 1}.png`
                        }))}
                    />

                    {/* Features Section */}
                    <FeaturesSection
                        heading={MVP_CONTENT.features.heading}
                        description={MVP_CONTENT.features.description}
                        features={MVP_CONTENT.features.items.map((title, idx) => ({
                            title,
                            icon: `/images/feature-${(idx % 10) + 1}.png`
                        }))}
                    />

                    {/* Portfolio Section */}
                    <Portfolio
                        heading={MVP_CONTENT.portfolio.heading}
                        description={MVP_CONTENT.portfolio.description}
                        projects={MVP_CONTENT.portfolio.items}
                    />

                    {/* Quote Section */}
                    <QuoteSection
                        heading={MVP_CONTENT.portfolio.ctaTitle}
                        description={MVP_CONTENT.portfolio.ctaDescription}
                        ctaText={MVP_CONTENT.portfolio.ctaButton}
                    />

                    {/* Testimonials */}
                    <TestimonialPage
                        heading={MVP_CONTENT.testimonials.heading}
                        description={MVP_CONTENT.testimonials.description}
                        testimonials={MVP_CONTENT.testimonials.items.map((item, idx) => ({
                            id: idx + 1,
                            name: item.author,
                            role: item.role,
                            title: "Amazing Work",
                            message: item.quote,
                            date: "2024",
                            rating: 5,
                            avatar: "/images/person.png"
                        }))}
                    />

                    {/* FAQs */}
                    <FAQs
                        heading={MVP_CONTENT.faqs.heading}
                        description=""
                        faqs={MVP_CONTENT.faqs.items}
                    />

                    {/* Contact Section */}
                    <Contact
                        heading={MVP_CONTENT.contact.heading}
                        description={MVP_CONTENT.contact.description}
                        ctaText={MVP_CONTENT.contact.cta}
                        fieldLabel="App Idea"
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

