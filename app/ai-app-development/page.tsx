import { Metadata } from "next";
import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import Contact from "../components/home/Contact";
import FAQs from "../components/home/FAQs";
import Industry from "../components/home/Industry";
import Portfolio from "../components/home/Portfolio";
import Process from "../components/home/Process";
import TechStack from "../components/home/TechStack";
import TestimonialPage from "../components/home/Testimonials";
import WhyChooseUs from "../components/home/why-choose-us";
import AboutSection from "../components/mobile-app-development/AboutSection";
import BenefitsSection from "../components/mobile-app-development/BenefitsSection";
import FeaturesSection from "../components/mobile-app-development/FeaturesSection";
import QuoteSection from "../components/mobile-app-development/QuoteSection";
import ServicesSection from "../components/mobile-app-development/ServiceSection";
import { AI_APP_CONTENT } from "../constants/content";
import Hero from "../components/ai-app-development/Hero";

export const metadata: Metadata = {
    title: AI_APP_CONTENT.meta.title,
    description: AI_APP_CONTENT.meta.description,
};

export default function AiAppDevelopment() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="flex flex-col gap-16">
                    {/* Hero Section */}
                    <Hero
                        tagline={AI_APP_CONTENT.hero.tagline}
                        title={AI_APP_CONTENT.hero.title}
                        cta={AI_APP_CONTENT.hero.cta}
                        description={AI_APP_CONTENT.hero.description}
                    />

                    {/* About Section */}
                    <AboutSection
                        tagline="About clicktap solution"
                        heading={AI_APP_CONTENT.about.heading}
                        paragraphs={[
                            AI_APP_CONTENT.about.description,
                            AI_APP_CONTENT.about.content
                        ]}
                        ctaText={AI_APP_CONTENT.about.cta}
                        stats={[
                            { value: "300+", label: "Projects Delivered", color: 'blue', image: "/images/about-2.png" },
                            { value: "10+", label: "Years Experience", color: 'light', image: "/images/about-3.png" },
                            { value: "95%", label: "Client Retention", color: 'white', image: "/images/about-1.png" },
                        ]}
                    />

                    {/* Services Section */}
                    <ServicesSection
                        heading={AI_APP_CONTENT.services.heading}
                        description={AI_APP_CONTENT.services.description}
                        services={AI_APP_CONTENT.services.items}
                        ctaText={AI_APP_CONTENT.services.cta}
                    />

                    {/* Why Choose Us Section */}
                    <WhyChooseUs
                        heading={AI_APP_CONTENT.whyChooseUs.heading}
                        para={AI_APP_CONTENT.whyChooseUs.description}
                        items={AI_APP_CONTENT.whyChooseUs.items}
                    />

                    {/* Tech Stack Section */}
                    <TechStack
                        heading={AI_APP_CONTENT.techStack.heading}
                        description={AI_APP_CONTENT.techStack.description}
                    />

                    {/* Industry */}
                    <Industry
                        heading={AI_APP_CONTENT.industry.heading}
                        description={AI_APP_CONTENT.industry.description}
                        cards={AI_APP_CONTENT.industry.items}
                    />

                    {/* Process Section */}
                    <Process
                        heading={AI_APP_CONTENT.process.heading}
                        description={AI_APP_CONTENT.process.description}
                        steps={AI_APP_CONTENT.process.items}
                    />

                    {/* Benefits Section */}
                    <BenefitsSection
                        heading={AI_APP_CONTENT.advantages.heading}
                        description={AI_APP_CONTENT.advantages.description}
                        cards={AI_APP_CONTENT.advantages.items.map((item, idx) => ({
                            id: idx + 1,
                            title: item.title,
                            description: item.description,
                            icon: `/images/benefit-${idx + 1}.png`
                        }))}
                    />

                    {/* Features Section */}
                    <FeaturesSection
                        heading={AI_APP_CONTENT.features.heading}
                        features={AI_APP_CONTENT.features.items.map((title, idx) => ({
                            title,
                            icon: `/images/feature-${idx + 1}.png`
                        }))}
                    />

                    {/* Portfolio Section */}
                    <Portfolio
                        heading={AI_APP_CONTENT.portfolio.heading}
                        description={AI_APP_CONTENT.portfolio.description}
                        projects={AI_APP_CONTENT.portfolio.items}
                    />

                    {/* Quote Section */}
                    <QuoteSection
                        heading={AI_APP_CONTENT.portfolio.ctaTitle}
                        description={AI_APP_CONTENT.portfolio.ctaDescription}
                        ctaText={AI_APP_CONTENT.portfolio.ctaButton}
                    />

                    {/* Testimonials */}
                    <TestimonialPage
                        heading={AI_APP_CONTENT.testimonials.heading}
                        description={AI_APP_CONTENT.testimonials.description}
                        testimonials={AI_APP_CONTENT.testimonials.items.map((item, idx) => ({
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
                        heading={AI_APP_CONTENT.faqs.heading}
                        description="Here are some answers to common questions to help you get started."
                        faqs={AI_APP_CONTENT.faqs.items}
                    />

                    {/* Contact Section */}
                    <Contact
                        heading={AI_APP_CONTENT.contact.heading}
                        description={AI_APP_CONTENT.contact.description}
                        ctaText={AI_APP_CONTENT.contact.cta}
                        fieldLabel="App Idea"
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

