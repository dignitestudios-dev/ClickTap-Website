import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../../components/global/Navbar";
import { IOS_APP_Development } from "../../constants/content";
import Hero from "@/app/components/services-components/ios-app-development/Hero";

// Dynamic imports
const Footer = dynamic(() => import("../../components/global/Footer"), { ssr: true });
const Contact = dynamic(() => import("../../components/home/Contact"), { ssr: true });
const FAQs = dynamic(() => import("../../components/home/FAQs"), { ssr: true });
const Industry = dynamic(() => import("../../components/home/Industry"), { ssr: true });
const Portfolio = dynamic(() => import("../../components/home/Portfolio"), { ssr: true });
const Process = dynamic(() => import("../../components/home/Process"), { ssr: true });
const TechStack = dynamic(() => import("../../components/home/TechStack"), { ssr: true });
const TestimonialPage = dynamic(() => import("../../components/home/Testimonials"), { ssr: true });
const AboutSection = dynamic(() => import("../../components/services-components/mobile-app-development/AboutSection"), { ssr: true });
const BenefitsSection = dynamic(() => import("../../components/services-components/mobile-app-development/BenefitsSection"), { ssr: true });
const FeaturesSection = dynamic(() => import("../../components/services-components/mobile-app-development/FeaturesSection"), { ssr: true });
const QuoteSection = dynamic(() => import("../../components/services-components/mobile-app-development/QuoteSection"), { ssr: true });
const ServicesSection = dynamic(() => import("../../components/services-components/mobile-app-development/ServiceSection"), { ssr: true });
export const metadata: Metadata = {
    title: IOS_APP_Development.meta.title,
    description: IOS_APP_Development.meta.description,
};

export default function IOSAppDevelopment() {
    return (
        <div className="flex flex-col min-h-screen  overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 main-body-section w-full">
                <div className="flex flex-col gap-16">
                    {/* Hero Section */}
                    <Hero
                        tagline={IOS_APP_Development.hero.tagline}
                        title={IOS_APP_Development.hero.title}
                        cta={IOS_APP_Development.hero.cta}
                        description={IOS_APP_Development.hero.description}
                    />

                    {/* About Section */}
                    <AboutSection
                        tagline="About clicktap solution"
                        heading={IOS_APP_Development.about.heading}
                        paragraphs={[IOS_APP_Development.about.description]}
                        ctaText={IOS_APP_Development.about.cta}
                        stats={[
                            { value: "350+", label: "Apps Delivered", color: 'blue', image: "/images/about-2.png" },
                            { value: "10+", label: "Years Experience", color: 'light', image: "/images/about-3.png" },
                            { value: "95%", label: "Client Retention", color: 'white', image: "/images/about-1.png" },
                        ]}
                    />

                    {/* Services Section */}
                    <ServicesSection
                        heading={IOS_APP_Development.services.heading}
                        description={IOS_APP_Development.services.description}
                        services={IOS_APP_Development.services.items}
                        ctaText={IOS_APP_Development.services.cta}
                    />

                    {/* Tech Stack Section */}
                    <TechStack
                        heading={IOS_APP_Development.techStack.heading}
                        description={IOS_APP_Development.techStack.description}
                    />

                    {/* Industry */}
                    <Industry
                        heading={IOS_APP_Development.industry.heading}
                        description={IOS_APP_Development.industry.description}
                        cards={IOS_APP_Development.industry.items}
                    />

                    {/* Process Section */}
                    <Process
                        heading={IOS_APP_Development.process.heading}
                        description={IOS_APP_Development.process.description}
                        steps={IOS_APP_Development.process.items}
                    />

                    {/* Benefits */}
                    <BenefitsSection
                        heading={IOS_APP_Development.advantages.heading}
                        description={IOS_APP_Development.advantages.description}
                        cards={IOS_APP_Development.advantages.items.map((item, idx) => ({
                            id: idx + 1,
                            title: item.title,
                            description: item.description,
                            icon: `/images/benefit-${idx + 1}.png`
                        }))}
                    />

                    {/* Features Section */}
                    <FeaturesSection
                        heading={IOS_APP_Development.features.heading}
                        features={IOS_APP_Development.features.items.map((title, idx) => ({
                            title,
                            icon: `/images/feature-${idx + 1}.png`
                        }))}
                    />

                    {/* Portfolio Section */}
                    <Portfolio
                        heading={IOS_APP_Development.portfolio.heading}
                        description={IOS_APP_Development.portfolio.description}
                        projects={IOS_APP_Development.portfolio.items}
                    />

                    {/* Quote Section */}
                    <QuoteSection
                        heading={IOS_APP_Development.portfolio.ctaTitle}
                        description={IOS_APP_Development.portfolio.ctaDescription}
                        ctaText={IOS_APP_Development.portfolio.ctaButton}
                    />

                    {/* Testimonials */}
                    <TestimonialPage
                        heading={IOS_APP_Development.testimonials.heading}
                        testimonials={IOS_APP_Development.testimonials.items.map((item, idx) => ({
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
                        heading={IOS_APP_Development.faqs.heading}
                        description="Here are some answers to common questions to help you get started."
                        faqs={IOS_APP_Development.faqs.items}
                    />

                    {/* Contact Section */}
                    <Contact
                        heading={IOS_APP_Development.contact.heading}
                        description={IOS_APP_Development.contact.description}
                        ctaText={IOS_APP_Development.contact.cta}
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

