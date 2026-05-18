import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../../components/global/Navbar";
import Hero from "../../components/services-components/Consultant/Hero";
import { MOBILE_APP_CONSULTING_CONTENT } from "../../constants/content";

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
    title: MOBILE_APP_CONSULTING_CONTENT.meta.title,
    description: MOBILE_APP_CONSULTING_CONTENT.meta.description,
};

export default function ConsultantPage() {
    return (
        <div className="flex flex-col min-h-screen main-body-section overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1  w-full">
                <div className="flex flex-col gap-10">
                    {/* Hero Section */}
                    <Hero
                        tagline={MOBILE_APP_CONSULTING_CONTENT.hero.tagline}
                        title={MOBILE_APP_CONSULTING_CONTENT.hero.title}
                        cta={MOBILE_APP_CONSULTING_CONTENT.hero.cta}
                        description={MOBILE_APP_CONSULTING_CONTENT.hero.description}
                    />

                    {/* About Section */}
                    <AboutSection
                        tagline=""
                        heading={MOBILE_APP_CONSULTING_CONTENT.about.heading}
                        paragraphs={[
                            MOBILE_APP_CONSULTING_CONTENT.about.description,
                            MOBILE_APP_CONSULTING_CONTENT.about.content
                        ]}
                        ctaText={MOBILE_APP_CONSULTING_CONTENT.about.cta}
                        stats={[
                            { value: "300+", label: "Projects Delivered", color: 'blue', image: "/images/about-2.png" },
                            { value: "10+", label: "Years Experience", color: 'light', image: "/images/about-3.png" },
                            { value: "95%", label: "Client Retention", color: 'white', image: "/images/about-1.png" },
                        ]}
                    />

                    {/* Services Section */}
                    <ServicesSection
                        heading={MOBILE_APP_CONSULTING_CONTENT.services.heading}
                        description={MOBILE_APP_CONSULTING_CONTENT.services.description}
                        services={MOBILE_APP_CONSULTING_CONTENT.services.items}
                        ctaText={MOBILE_APP_CONSULTING_CONTENT.services.cta}
                    />

                    {/* Why Choose Us Section */}
                    <WhyChooseUs
                        heading={MOBILE_APP_CONSULTING_CONTENT.whyChooseUs.heading}
                        para={MOBILE_APP_CONSULTING_CONTENT.whyChooseUs.description}
                        items={MOBILE_APP_CONSULTING_CONTENT.whyChooseUs.items}
                    />

                    {/* Tech Stack Section */}
                    {/* <TechStack
                        heading={MOBILE_APP_CONSULTING_CONTENT.techStack.heading}
                        description={MOBILE_APP_CONSULTING_CONTENT.techStack.description}
                    /> */}

                    {/* Industry */}
                    <Industry
                        heading={MOBILE_APP_CONSULTING_CONTENT.industry.heading}
                        description={MOBILE_APP_CONSULTING_CONTENT.industry.description}
                        cards={MOBILE_APP_CONSULTING_CONTENT.industry.items}
                    />

                    {/* Process Section */}
                    {/* <Process
                        heading={MOBILE_APP_CONSULTING_CONTENT.process.heading}
                        description={MOBILE_APP_CONSULTING_CONTENT.process.description}
                        steps={MOBILE_APP_CONSULTING_CONTENT.process.items}
                    /> */}

                    {/* Benefits Section */}
                    <BenefitsSection
                        heading={MOBILE_APP_CONSULTING_CONTENT.advantages.heading}
                        description={MOBILE_APP_CONSULTING_CONTENT.advantages.description}
                        cards={MOBILE_APP_CONSULTING_CONTENT.advantages.items.map((item, idx) => ({
                            id: idx + 1,
                            title: item.title,
                            description: item.description,
                            icon: `/images/benefit-${(idx % 6) + 1}.png`
                        }))}
                    />

                    {/* Features Section */}
                    <FeaturesSection
                        heading={MOBILE_APP_CONSULTING_CONTENT.features.heading}
                        description={MOBILE_APP_CONSULTING_CONTENT.features.description}
                        features={MOBILE_APP_CONSULTING_CONTENT.features.items.map((title, idx) => ({
                            title,
                            icon: `/images/feature-${(idx % 10) + 1}.png`
                        }))}
                    />

                    {/* Portfolio Section */}
                    <Portfolio
                        heading={MOBILE_APP_CONSULTING_CONTENT.portfolio.heading}
                        description={MOBILE_APP_CONSULTING_CONTENT.portfolio.description}
                        projects={MOBILE_APP_CONSULTING_CONTENT.portfolio.items}
                    />

                    {/* Quote Section */}
                    <QuoteSection
                        heading={MOBILE_APP_CONSULTING_CONTENT.portfolio.ctaTitle}
                        description={MOBILE_APP_CONSULTING_CONTENT.portfolio.ctaDescription}
                        ctaText={MOBILE_APP_CONSULTING_CONTENT.portfolio.ctaButton}
                    />

                    {/* Testimonials */}
                    <TestimonialPage
                        heading={MOBILE_APP_CONSULTING_CONTENT.testimonials.heading}
                        description={MOBILE_APP_CONSULTING_CONTENT.testimonials.description}
                        testimonials={MOBILE_APP_CONSULTING_CONTENT.testimonials.items.map((item, idx) => ({
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
                        heading={MOBILE_APP_CONSULTING_CONTENT.faqs.heading}
                        description=""
                        faqs={MOBILE_APP_CONSULTING_CONTENT.faqs.items}
                    />

                    {/* Contact Section */}
                    <Contact
                        heading={MOBILE_APP_CONSULTING_CONTENT.contact.heading}
                        description={MOBILE_APP_CONSULTING_CONTENT.contact.description}
                        ctaText={MOBILE_APP_CONSULTING_CONTENT.contact.cta}
                        fieldLabel="App Idea"
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

