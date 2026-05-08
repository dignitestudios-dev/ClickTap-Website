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
import { CUSTOM_SOFTWARE_CONTENT } from "../constants/content";
import Hero from "../components/custom-software-development/Hero";

export const metadata: Metadata = {
    title: CUSTOM_SOFTWARE_CONTENT.meta.title,
    description: CUSTOM_SOFTWARE_CONTENT.meta.description,
};

export default function CustomSoftwareDevelopment() {
    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="flex flex-col gap-16">
                    {/* Hero Section */}
                    <Hero
                        tagline={CUSTOM_SOFTWARE_CONTENT.hero.tagline}
                        title={CUSTOM_SOFTWARE_CONTENT.hero.title}
                        cta={CUSTOM_SOFTWARE_CONTENT.hero.cta}
                        description={CUSTOM_SOFTWARE_CONTENT.hero.description}
                    />

                    {/* About Section */}
                    <AboutSection
                        tagline="About clicktap solution"
                        heading={CUSTOM_SOFTWARE_CONTENT.about.heading}
                        paragraphs={[
                            CUSTOM_SOFTWARE_CONTENT.about.description,
                            CUSTOM_SOFTWARE_CONTENT.about.content
                        ]}
                        ctaText={CUSTOM_SOFTWARE_CONTENT.about.cta}
                        stats={[
                            { value: "300+", label: "Projects Delivered", color: 'blue', image: "/images/about-2.png" },
                            { value: "10+", label: "Years Experience", color: 'light', image: "/images/about-3.png" },
                            { value: "95%", label: "Client Retention", color: 'white', image: "/images/about-1.png" },
                        ]}
                    />

                    {/* Services Section */}
                    <ServicesSection
                        heading={CUSTOM_SOFTWARE_CONTENT.services.heading}
                        description={CUSTOM_SOFTWARE_CONTENT.services.description}
                        services={CUSTOM_SOFTWARE_CONTENT.services.items}
                        ctaText={CUSTOM_SOFTWARE_CONTENT.services.cta}
                    />

                    {/* Why Choose Us Section */}
                    <WhyChooseUs
                        heading={CUSTOM_SOFTWARE_CONTENT.whyChooseUs.heading}
                        para={CUSTOM_SOFTWARE_CONTENT.whyChooseUs.description}
                        items={CUSTOM_SOFTWARE_CONTENT.whyChooseUs.items}
                    />

                    {/* Tech Stack Section */}
                    <TechStack
                        heading={CUSTOM_SOFTWARE_CONTENT.techStack.heading}
                        description={CUSTOM_SOFTWARE_CONTENT.techStack.description}
                    />

                    {/* Industry */}
                    <Industry
                        heading={CUSTOM_SOFTWARE_CONTENT.industry.heading}
                        description={CUSTOM_SOFTWARE_CONTENT.industry.description}
                        cards={CUSTOM_SOFTWARE_CONTENT.industry.items}
                    />

                    {/* Process Section */}
                    <Process
                        heading={CUSTOM_SOFTWARE_CONTENT.process.heading}
                        description={CUSTOM_SOFTWARE_CONTENT.process.description}
                        steps={CUSTOM_SOFTWARE_CONTENT.process.items}
                    />

                    {/* Benefits Section */}
                    <BenefitsSection
                        heading={CUSTOM_SOFTWARE_CONTENT.advantages.heading}
                        description={CUSTOM_SOFTWARE_CONTENT.advantages.description}
                        cards={CUSTOM_SOFTWARE_CONTENT.advantages.items.map((item, idx) => ({
                            id: idx + 1,
                            title: item.title,
                            description: item.description,
                            icon: `/images/benefit-${idx + 1}.png`
                        }))}
                    />

                    {/* Features Section */}
                    <FeaturesSection
                        heading={CUSTOM_SOFTWARE_CONTENT.features.heading}
                        features={CUSTOM_SOFTWARE_CONTENT.features.items.map((title, idx) => ({
                            title,
                            icon: `/images/feature-${idx + 1}.png`
                        }))}
                    />

                    {/* Portfolio Section */}
                    <Portfolio
                        heading={CUSTOM_SOFTWARE_CONTENT.portfolio.heading}
                        description={CUSTOM_SOFTWARE_CONTENT.portfolio.description}
                        projects={CUSTOM_SOFTWARE_CONTENT.portfolio.items}
                    />

                    {/* Quote Section */}
                    <QuoteSection
                        heading={CUSTOM_SOFTWARE_CONTENT.portfolio.ctaTitle}
                        description={CUSTOM_SOFTWARE_CONTENT.portfolio.ctaDescription}
                        ctaText={CUSTOM_SOFTWARE_CONTENT.portfolio.ctaButton}
                    />

                    {/* Testimonials */}
                    <TestimonialPage
                        heading={CUSTOM_SOFTWARE_CONTENT.testimonials.heading}
                        description={CUSTOM_SOFTWARE_CONTENT.testimonials.description}
                        testimonials={CUSTOM_SOFTWARE_CONTENT.testimonials.items.map((item, idx) => ({
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
                        heading={CUSTOM_SOFTWARE_CONTENT.faqs.heading}
                        description="Here are some answers to common questions to help you get started."
                        faqs={CUSTOM_SOFTWARE_CONTENT.faqs.items}
                    />

                    {/* Contact Section */}
                    <Contact
                        heading={CUSTOM_SOFTWARE_CONTENT.contact.heading}
                        description={CUSTOM_SOFTWARE_CONTENT.contact.description}
                        ctaText={CUSTOM_SOFTWARE_CONTENT.contact.cta}
                        fieldLabel="App Idea"
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

