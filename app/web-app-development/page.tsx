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
import AboutSection from "../components/mobile-app-development/AboutSection";
import BenefitsSection from "../components/mobile-app-development/BenefitsSection";
import FeaturesSection from "../components/mobile-app-development/FeaturesSection";
import QuoteSection from "../components/mobile-app-development/QuoteSection";
import ServicesSection from "../components/mobile-app-development/ServiceSection";
import { WEB_APP_CONTENT } from "../constants/content";
import Hero from "../components/web-app-development/Hero";
export const metadata: Metadata = {
    title: WEB_APP_CONTENT.meta.title,
    description: WEB_APP_CONTENT.meta.description,
};

export default function WebAppDevelopment() {
    return (
        <div className="flex flex-col min-h-screen  overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="flex flex-col gap-16">
                    {/* Hero Section */}
                    <Hero
                        tagline={WEB_APP_CONTENT.hero.tagline}
                        title={WEB_APP_CONTENT.hero.title}
                        cta={WEB_APP_CONTENT.hero.cta}
                        description={WEB_APP_CONTENT.hero.description}
                    />

                    {/* About Section */}
                    <AboutSection
                        tagline="" 
                        heading={WEB_APP_CONTENT.about.heading}
                        paragraphs={[WEB_APP_CONTENT.about.description, WEB_APP_CONTENT.about.content]}
                        ctaText={WEB_APP_CONTENT.about.cta}
                        stats={[
                            { value: "300+", label: "Projects Completed", color: 'blue', image: "/images/about-2.png" },
                            { value: "10+", label: "Years Experience", color: 'light', image: "/images/about-3.png" },
                            { value: "30+", label: "Industries Served", color: 'white', image: "/images/about-1.png" },
                        ]}
                    />

                    {/* Services Section */}
                    <ServicesSection
                        heading={WEB_APP_CONTENT.services.heading}
                        description={WEB_APP_CONTENT.services.description}
                        services={WEB_APP_CONTENT.services.items}
                    />

                    {/* Tech Stack Section */}
                    <TechStack
                        heading={WEB_APP_CONTENT.techStack.heading}
                        description={WEB_APP_CONTENT.techStack.description}
                    />

                    {/* Industry */}
                    <Industry
                        heading={WEB_APP_CONTENT.industry.heading}
                        description={WEB_APP_CONTENT.industry.description}
                        cards={WEB_APP_CONTENT.industry.items}
                    />

                    {/* Process Section */}
                    <Process
                        heading={WEB_APP_CONTENT.process.heading}
                        description={WEB_APP_CONTENT.process.description}
                        steps={WEB_APP_CONTENT.process.items}
                    />

                    {/* Benefits */}
                    <BenefitsSection
                        heading={WEB_APP_CONTENT.advantages.heading}
                        description={WEB_APP_CONTENT.advantages.description}
                        cards={WEB_APP_CONTENT.advantages.items.map((item, idx) => ({
                            id: idx + 1,
                            title: item.title,
                            description: item.description,
                            icon: `/images/benefit-${(idx % 6) + 1}.png`
                        }))}
                    />

                    {/* Features Section */}
                    <FeaturesSection
                        heading={WEB_APP_CONTENT.features.heading}
                        description={WEB_APP_CONTENT.features.description}
                        features={WEB_APP_CONTENT.features.items.map((title, idx) => ({
                            title,
                            icon: `/images/feature-${(idx % 10) + 1}.png`
                        }))}
                        ctaText={WEB_APP_CONTENT.features.cta}
                    />

                    {/* Portfolio Section */}
                    <Portfolio
                        heading={WEB_APP_CONTENT.portfolio.heading}
                        description={WEB_APP_CONTENT.portfolio.description}
                        projects={WEB_APP_CONTENT.portfolio.items}
                    />

                    {/* Quote Section */}
                    <QuoteSection
                        heading={WEB_APP_CONTENT.portfolio.ctaTitle}
                        description={WEB_APP_CONTENT.portfolio.ctaDescription}
                        ctaText={WEB_APP_CONTENT.portfolio.ctaButton}
                    />

                    {/* Testimonials */}
                    <TestimonialPage
                        heading={WEB_APP_CONTENT.testimonials.heading}
                        description={WEB_APP_CONTENT.testimonials.description}
                        testimonials={WEB_APP_CONTENT.testimonials.items.map((item, idx) => ({
                            id: idx + 1,
                            name: item.author,
                            role: item.role,
                            title: "Reliable Performance",
                            message: item.quote,
                            date: "2024",
                            rating: 5,
                            avatar: "/images/person.png"
                        }))}
                    />

                    {/* FAQs */}
                    <FAQs
                        heading={WEB_APP_CONTENT.faqs.heading}
                        description=""
                        faqs={WEB_APP_CONTENT.faqs.items}
                    />

                    {/* Contact Section */}
                    <Contact
                        heading={WEB_APP_CONTENT.contact.heading}
                        description={WEB_APP_CONTENT.contact.description}
                        ctaText={WEB_APP_CONTENT.contact.cta}
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

