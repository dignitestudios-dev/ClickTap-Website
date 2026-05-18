import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../../components/global/Navbar";
import Hero from "../../components/services-components/progressive-web-app/Hero";
import { PWA_CONTENT } from "../../constants/content";

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
    title: PWA_CONTENT.meta.title,
    description: PWA_CONTENT.meta.description,
};

export default function ProgressiveWebAppDevelopment() {
    return (
        <div className="flex flex-col  min-h-screen  overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 main-body-section w-full">
                <div className="flex flex-col gap-10">
                    {/* Hero Section */}
                    <Hero
                        tagline={PWA_CONTENT.hero.tagline}
                        title={PWA_CONTENT.hero.title}
                        cta={PWA_CONTENT.hero.cta}
                        description={PWA_CONTENT.hero.description}
                    />

                    {/* About Section */}
                    <AboutSection
                        tagline="About clicktap solution"
                        heading={PWA_CONTENT.about.heading}
                        paragraphs={[
                            PWA_CONTENT.about.description,
                            PWA_CONTENT.about.content
                        ]}
                        ctaText={PWA_CONTENT.about.cta}
                        stats={[
                            { value: "300+", label: "Projects Delivered", color: 'blue', image: "/images/about-2.png" },
                            { value: "10+", label: "Years Experience", color: 'light', image: "/images/about-3.png" },
                            { value: "95%", label: "Client Retention", color: 'white', image: "/images/about-1.png" },
                        ]}
                    />

                    {/* Services Section */}
                    <ServicesSection
                        heading={PWA_CONTENT.services.heading}
                        description={PWA_CONTENT.services.description}
                        services={PWA_CONTENT.services.items}
                        ctaText={PWA_CONTENT.services.cta}
                    />

                    {/* Why Choose Us Section */}
                    <WhyChooseUs
                        heading={PWA_CONTENT.whyChooseUs.heading}
                        para={PWA_CONTENT.whyChooseUs.description}
                        items={PWA_CONTENT.whyChooseUs.items}
                    />

                    {/* Tech Stack Section */}
                    <TechStack
                        heading={PWA_CONTENT.techStack.heading}
                        description={PWA_CONTENT.techStack.description}
                    />

                    {/* Industry */}
                    <Industry
                        heading={PWA_CONTENT.industry.heading}
                        description={PWA_CONTENT.industry.description}
                        cards={PWA_CONTENT.industry.items}
                    />

                    {/* Process Section */}
                    <Process
                        heading={PWA_CONTENT.process.heading}
                        description={PWA_CONTENT.process.description}
                        steps={PWA_CONTENT.process.items}
                    />

                    {/* Benefits Section */}
                    <BenefitsSection
                        heading={PWA_CONTENT.advantages.heading}
                        description={PWA_CONTENT.advantages.description}
                        cards={PWA_CONTENT.advantages.items.map((item, idx) => ({
                            id: idx + 1,
                            title: item.title,
                            description: item.description,
                            icon: `/images/benefit-${(idx % 6) + 1}.png`
                        }))}
                    />

                    {/* Features Section */}
                    <FeaturesSection
                        heading={PWA_CONTENT.features.heading}
                        features={PWA_CONTENT.features.items.map((title, idx) => ({
                            title,
                            icon: `/images/feature-${(idx % 10) + 1}.png`
                        }))}
                    />

                    {/* Portfolio Section */}
                    <Portfolio
                        heading={PWA_CONTENT.portfolio.heading}
                        description={PWA_CONTENT.portfolio.description}
                        projects={PWA_CONTENT.portfolio.items}
                    />

                    {/* Quote Section */}
                    <QuoteSection
                        heading={PWA_CONTENT.portfolio.ctaTitle}
                        description={PWA_CONTENT.portfolio.ctaDescription}
                        ctaText={PWA_CONTENT.portfolio.ctaButton}
                    />

                    {/* Testimonials */}
                    <TestimonialPage
                        heading={PWA_CONTENT.testimonials.heading}
                        description={PWA_CONTENT.testimonials.description}
                        testimonials={PWA_CONTENT.testimonials.items.map((item, idx) => ({
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
                        heading={PWA_CONTENT.faqs.heading}
                        description="Here are some answers to common questions to help you get started."
                        faqs={PWA_CONTENT.faqs.items}
                    />

                    {/* Contact Section */}
                    <Contact
                        heading={PWA_CONTENT.contact.heading}
                        description={PWA_CONTENT.contact.description}
                        ctaText={PWA_CONTENT.contact.cta}
                        fieldLabel="App Idea"
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

