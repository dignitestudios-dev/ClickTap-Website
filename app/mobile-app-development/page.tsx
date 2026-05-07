import Footer from "../components/global/Footer";
import Navbar from "../components/global/Navbar";
import Contact from "../components/home/Contact";
import FAQs from "../components/home/FAQs";
import Industry from "../components/home/Industry";
import Portfolio from "../components/home/Portfolio";
import Process from "../components/home/Process";
import TechStack from "../components/home/TechStack";
import TestimonialPage from "../components/home/Testimonials";
import TrustPilot from "../components/home/TrustPilot";
import WhyChooseUs from "../components/home/why-choose-us";
import AboutSection from "../components/mobile-app-development/AboutSection";
import BenefitsSection from "../components/mobile-app-development/BenefitsSection";
import Hero from "../components/mobile-app-development/Hero";
import ServicesSection from "../components/mobile-app-development/ServiceSection";
import FeaturesSection from "../components/mobile-app-development/FeaturesSection";
import QuoteSection from "../components/mobile-app-development/QuoteSection";
import { MOBILE_APP_CONTENT } from "../constants/content";

export default function MobileAppDevelopment() {
    return (
        <div className="flex flex-col min-h-screen  overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="flex flex-col gap-16">
                    {/* Hero Section */}
                    <Hero
                        tagline={MOBILE_APP_CONTENT.hero.tagline}
                        title={MOBILE_APP_CONTENT.hero.title}
                        description={MOBILE_APP_CONTENT.hero.description}
                        ctaText={MOBILE_APP_CONTENT.hero.cta}
                    />

                    {/* About Section */}
                    <AboutSection
                        tagline="About clicktap solution"
                        heading={MOBILE_APP_CONTENT.about.heading}
                        paragraphs={MOBILE_APP_CONTENT.about.content.split('\n\n')}
                        ctaText={MOBILE_APP_CONTENT.about.cta}
                        stats={[
                            { value: "200+", label: "Apps Delivered", color: 'blue', image: "/images/about-2.png" },
                            { value: "10+", label: "Years Experience", color: 'light', image: "/images/about-3.png" },
                            { value: "95%", label: "Client Retention", color: 'white', image: "/images/about-1.png" },
                        ]}
                    />

                    {/* Services Section */}
                    <ServicesSection
                        heading={MOBILE_APP_CONTENT.services.heading}
                        description={MOBILE_APP_CONTENT.services.description}
                        services={MOBILE_APP_CONTENT.services.items}
                        ctaText={MOBILE_APP_CONTENT.services.cta}
                    />
                  
                    {/* Tech Stack Section */}
                    <TechStack />
                  
                    {/* Industry */}
                    <Industry
                        heading={MOBILE_APP_CONTENT.industry.heading}
                        description={MOBILE_APP_CONTENT.industry.description}
                        cards={MOBILE_APP_CONTENT.industry.items}
                    />

                    {/* Process Section */}
                    <Process
                        heading={MOBILE_APP_CONTENT.process.heading}
                        description={MOBILE_APP_CONTENT.process.description}
                        steps={MOBILE_APP_CONTENT.process.items}
                    />

                    {/* Benefits */}
                    <BenefitsSection
                        heading={MOBILE_APP_CONTENT.benefits.heading}
                        description={MOBILE_APP_CONTENT.benefits.description}
                        cards={MOBILE_APP_CONTENT.benefits.items.map((item, idx) => ({
                            id: idx + 1,
                            title: item.title,
                            description: item.description,
                            icon: `/images/benefit-${idx + 1}.png` // Placeholder icon path
                        }))}
                    />

                    {/* Features Section */}
                    <FeaturesSection
                        heading={MOBILE_APP_CONTENT.features.heading}
                        features={MOBILE_APP_CONTENT.features.items.map((title, idx) => ({
                            title,
                            icon: `/images/feature-${idx + 1}.png`
                        }))}
                    />

                    {/* Portfolio Section */}
                    <Portfolio
                        heading={MOBILE_APP_CONTENT.portfolio.heading}
                        description={MOBILE_APP_CONTENT.portfolio.description}
                        projects={MOBILE_APP_CONTENT.portfolio.items}
                    />

                    {/* Quote Section */}
                    <QuoteSection
                        heading={MOBILE_APP_CONTENT.portfolio.ctaTitle}
                        description={MOBILE_APP_CONTENT.portfolio.ctaDescription}
                        ctaText={MOBILE_APP_CONTENT.portfolio.ctaButton}
                    />

                    {/* Testimonials */}
                    <TestimonialPage
                        heading={MOBILE_APP_CONTENT.testimonials.heading}
                        testimonials={MOBILE_APP_CONTENT.testimonials.items.map((item, idx) => ({
                            id: idx + 1,
                            name: item.author,
                            role: item.role,
                            title: "Amazing Work", // Placeholder title
                            message: item.quote,
                            date: "2024",
                            rating: 5,
                            avatar: item.avatar
                        }))}
                    />

                    {/* FAQs */}
                    <FAQs
                        heading={MOBILE_APP_CONTENT.faqs.heading}
                        description="Here are some answers to common questions to help you get started."
                        faqs={MOBILE_APP_CONTENT.faqs.items}
                    />

                    {/* Contact Section */}
                    <Contact
                        heading={MOBILE_APP_CONTENT.contact.heading}
                        description={MOBILE_APP_CONTENT.contact.description}
                        ctaText={MOBILE_APP_CONTENT.contact.cta}
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}
