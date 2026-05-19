import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../../components/global/Navbar";
import Hero from "../../components/services-components/andriod-app-development/Hero";
import { ANDROID_APP_CONTENT } from "../../constants/content";

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
    title: ANDROID_APP_CONTENT.meta.title,
    description: ANDROID_APP_CONTENT.meta.description,
};

export default function AndriodAppDevelopment() {
    return (
        <div className="flex flex-col min-h-screen  overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 main-body-section w-full">
                <div className="flex flex-col gap-36">
                    {/* Hero Section */}
                    <Hero
                        tagline={ANDROID_APP_CONTENT.hero.tagline}
                        title={ANDROID_APP_CONTENT.hero.title}
                        cta={ANDROID_APP_CONTENT.hero.cta}
                        description={ANDROID_APP_CONTENT.hero.description}
                    />

                    {/* About Section */}
                    <AboutSection
                        tagline="About clicktap solution"
                        heading={ANDROID_APP_CONTENT.about.heading}
                        paragraphs={[
                            ANDROID_APP_CONTENT.about.description,
                            ANDROID_APP_CONTENT.about.content
                        ]}
                        ctaText={ANDROID_APP_CONTENT.about.cta}
                        stats={[
                            { value: "300+", label: "Projects Delivered", color: 'blue', image: "/images/about-2.png" },
                            { value: "10+", label: "Years Experience", color: 'light', image: "/images/about-3.png" },
                            { value: "95%", label: "Client Retention", color: 'white', image: "/images/about-1.png" },
                        ]}
                    />

                    {/* Services Section */}
                    <ServicesSection
                        heading={ANDROID_APP_CONTENT.services.heading}
                        description={ANDROID_APP_CONTENT.services.description}
                        services={ANDROID_APP_CONTENT.services.items}
                        ctaText={ANDROID_APP_CONTENT.services.cta}
                    />

                    {/* Why Choose Us Section */}
                    <WhyChooseUs
                        heading={ANDROID_APP_CONTENT.whyChooseUs.heading}
                        para={ANDROID_APP_CONTENT.whyChooseUs.description}
                        items={ANDROID_APP_CONTENT.whyChooseUs.items}
                    />

                    {/* Tech Stack Section */}
                    <TechStack
                        heading={ANDROID_APP_CONTENT.techStack.heading}
                        description={ANDROID_APP_CONTENT.techStack.description}
                    />

                    {/* Industry */}
                    <Industry
                        heading={ANDROID_APP_CONTENT.industry.heading}
                        description={ANDROID_APP_CONTENT.industry.description}
                        cards={ANDROID_APP_CONTENT.industry.items}
                    />

                    {/* Process Section */}
                    <Process
                        heading={ANDROID_APP_CONTENT.process.heading}
                        description={ANDROID_APP_CONTENT.process.description}
                        steps={ANDROID_APP_CONTENT.process.items}
                    />

                    {/* Benefits Section */}
                    <BenefitsSection
                        heading={ANDROID_APP_CONTENT.advantages.heading}
                        description={ANDROID_APP_CONTENT.advantages.description}
                        cards={ANDROID_APP_CONTENT.advantages.items.map((item, idx) => ({
                            id: idx + 1,
                            title: item.title,
                            description: item.description,
                            icon: `/images/benefit-${(idx % 6) + 1}.png`
                        }))}
                    />

                    {/* Features Section */}
                    <FeaturesSection
                        heading={ANDROID_APP_CONTENT.features.heading}
                        description={ANDROID_APP_CONTENT.features.description}
                        features={ANDROID_APP_CONTENT.features.items.map((title, idx) => ({
                            title,
                            icon: `/images/feature-${(idx % 10) + 1}.png`
                        }))}
                    />

                    {/* Portfolio Section */}
                    <Portfolio
                        heading={ANDROID_APP_CONTENT.portfolio.heading}
                        description={ANDROID_APP_CONTENT.portfolio.description}
                        projects={ANDROID_APP_CONTENT.portfolio.items}
                    />

                    {/* Quote Section */}
                    <QuoteSection
                        heading={ANDROID_APP_CONTENT.portfolio.ctaTitle}
                        description={ANDROID_APP_CONTENT.portfolio.ctaDescription}
                        ctaText={ANDROID_APP_CONTENT.portfolio.ctaButton}
                    />

                    {/* Testimonials */}
                    <TestimonialPage
                        heading={ANDROID_APP_CONTENT.testimonials.heading}
                        description={ANDROID_APP_CONTENT.testimonials.description}
                        testimonials={ANDROID_APP_CONTENT.testimonials.items.map((item, idx) => ({
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
                        heading={ANDROID_APP_CONTENT.faqs.heading}
                        description="Here are some answers to common questions to help you get started."
                        faqs={ANDROID_APP_CONTENT.faqs.items}
                    />

                    {/* Contact Section */}
                    <Contact
                        heading={ANDROID_APP_CONTENT.contact.heading}
                        description={ANDROID_APP_CONTENT.contact.description}
                        ctaText={ANDROID_APP_CONTENT.contact.cta}
                        fieldLabel="App Idea"
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
