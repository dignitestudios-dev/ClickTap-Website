import { Metadata } from "next";
import Hero from "../components/MVP/Hero";
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
import { MVP_CONTENT } from "../constants/content";

export const metadata: Metadata = {
    title: MVP_CONTENT.meta.title,
    description: MVP_CONTENT.meta.description,
};

export default function MVPDevelopment() {
    return (
        <div className="flex flex-col min-h-screen  overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
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

