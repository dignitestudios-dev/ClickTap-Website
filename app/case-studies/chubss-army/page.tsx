import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../../components/global/Navbar";
import { AI_APP_CONTENT } from "../../constants/content";

// Dynamic imports
const SolutionsSection = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/SolutionSection"), { ssr: true });
const Wireframes = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/WireFraming"), { ssr: true });
const CoreChallenges = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/CoreChallenges"), { ssr: true });
const DiscoverResearch = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/DiscoverResearch"), { ssr: true });
const VisionBehind = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/VisionBehind"), { ssr: true });
const WorkFlow = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/WorkFlow"), { ssr: true });
const Hero = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/Hero"), { ssr: true });
const Footer = dynamic(() => import("../../components/global/Footer"), { ssr: true });
const Contact = dynamic(() => import("../../components/home/Contact"), { ssr: true });
const FAQs = dynamic(() => import("../../components/home/FAQs"), { ssr: true });
const Industry = dynamic(() => import("../../components/home/Industry"), { ssr: true });
const Portfolio = dynamic(() => import("../../components/home/Portfolio"), { ssr: true });
const Process = dynamic(() => import("../../components/home/Process"), { ssr: true });
const TechStack = dynamic(() => import("../../components/home/TechStack"), { ssr: true });
const TestimonialPage = dynamic(() => import("../../components/home/Testimonials"), { ssr: true });
const WhyChooseUs = dynamic(() => import("../../components/home/why-choose-us"), { ssr: true });
const BenefitsSection = dynamic(() => import("../../components/services-components/mobile-app-development/BenefitsSection"), { ssr: true });
const FeaturesSection = dynamic(() => import("../../components/services-components/mobile-app-development/FeaturesSection"), { ssr: true });
const QuoteSection = dynamic(() => import("../../components/services-components/mobile-app-development/QuoteSection"), { ssr: true });
const ServicesSection = dynamic(() => import("../../components/services-components/mobile-app-development/ServiceSection"), { ssr: true });

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
                        title={"Chubb's Army"}
                        cta={AI_APP_CONTENT.hero.cta}
                        description={"Chubbs Army is a mobile first social platform that’s specifically built for pet lovers. Our team thoughtfully designed this platform to bring pet owners, service providers and event organizers together in one connected digital platform. It is more than just a traditional social media platform. It’s the type of platform that actually makes it possible for users to share moments and enjoy gamified interactions that keep the community active. The vision was to create a space that feels both structured and lively. A place where community connection and genuine pet services exist side by side in a natural way. At Clicktap Solutions, we were proud to take ownership of the full journey. We delivered it successfully over six months. "}
                    />

                    {/* Vision Behind */}
                    <VisionBehind />

                    {/* Discover Research */}
                    <DiscoverResearch />
                    <CoreChallenges />
                    <SolutionsSection />
                    <WorkFlow />
                    <Wireframes />

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

