import dynamic from "next/dynamic";
import Navbar from "../../components/global/Navbar";
import Hero from "../../components/services-components/mobile-app-development/Hero";


// Dynamic imports
const Footer = dynamic(() => import("../../components/global/Footer"), { ssr: true });
const Contact = dynamic(() => import("../../components/home/Contact"), { ssr: true });
const FAQs = dynamic(() => import("../../components/home/FAQs"), { ssr: true });
const Industry = dynamic(() => import("../../components/home/Industry"), { ssr: true });
const Portfolio = dynamic(() => import("../../components/home/Portfolio"), { ssr: true });
const Process = dynamic(() => import("../../components/home/Process"), { ssr: true });
const TechStack = dynamic(() => import("../../components/home/TechStack"), { ssr: true });
const TestimonialPage = dynamic(() => import("../../components/home/Testimonials"), { ssr: true });
const TrustPilot = dynamic(() => import("../../components/home/TrustPilot"), { ssr: true });
const WhyChooseUs = dynamic(() => import("../../components/home/why-choose-us"), { ssr: true });
const AboutSection = dynamic(() => import("../../components/services-components/mobile-app-development/AboutSection"), { ssr: true });
const BenefitsSection = dynamic(() => import("../../components/services-components/mobile-app-development/BenefitsSection"), { ssr: true });
const ServicesSection = dynamic(() => import("../../components/services-components/mobile-app-development/ServiceSection"), { ssr: true });
const FeaturesSection = dynamic(() => import("../../components/services-components/mobile-app-development/FeaturesSection"), { ssr: true });
const QuoteSection = dynamic(() => import("../../components/services-components/mobile-app-development/QuoteSection"), { ssr: true });
import { MOBILE_APP_CONTENT } from "../../constants/content";
import { Metadata } from "next";
export const metadata: Metadata = {
    title: MOBILE_APP_CONTENT.meta.title,
    description: MOBILE_APP_CONTENT.meta.description,
};
export default function MobileAppDevelopment() {
    return (
        <div className="flex flex-col min-h-screen  overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 main-body-section w-full">
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
                    <TechStack
                        heading={<> Our Core <span className="font-bold" >Technologies</span></>}
                        description={"Having a professional team means using multiple modern technologies to build reliable products. Products that work amazingly across mobile and web development. The emphasis stays on selecting the right stack for each project and not on using tools based on trends"}
                    />

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
