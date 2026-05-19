import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../components/global/Navbar";
import { ABOUT_US_CONTENT } from "../constants/content";
import ValuesSection from "../components/about-us/ValuesSection";
import WhyChooseUs from "../components/home/why-choose-us";
import SocialProofSection from "../components/about-us/SocialProofSection";
import PerformanceCTA from "../components/about-us/PerformanceCTA";

// Dynamic imports
const Footer = dynamic(() => import("../components/global/Footer"), { ssr: true });
const Hero = dynamic(() => import("@/app/components/about-us/Hero"), { ssr: true });

export const metadata: Metadata = {
    title: ABOUT_US_CONTENT.meta.title,
    description: ABOUT_US_CONTENT.meta.description,
};

export default function AboutUsPage() {
    return (
        <div className="flex bg-[#F1FCFF] flex-col min-h-screen overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="flex flex-col gap-36">
                    {/* Hero Section */}
                    <Hero
                        title={ABOUT_US_CONTENT.hero.title}
                        description={ABOUT_US_CONTENT.hero.description}
                    />

                    {/* Our Story Section / Values Section */}
                    <ValuesSection
                        title={ABOUT_US_CONTENT.values.title}
                        mission={ABOUT_US_CONTENT.values.mission}
                        objectives={ABOUT_US_CONTENT.values.objectives}
                    />

                    {/* Why Choose Us Section */}
                    <div className="mt-16">
                        <WhyChooseUs
                            heading={ABOUT_US_CONTENT.whyChooseUs.title}
                            para={ABOUT_US_CONTENT.whyChooseUs.description}
                            items={ABOUT_US_CONTENT.whyChooseUs.items}
                        />
                    </div>

                    <SocialProofSection
                        title={ABOUT_US_CONTENT.socialProof.title}
                        description={ABOUT_US_CONTENT.socialProof.description}
                    />

                    <div className="px-6 md:px-20">
                        <PerformanceCTA
                            title={ABOUT_US_CONTENT.cta.title}
                            description={ABOUT_US_CONTENT.cta.description}
                            buttonText={ABOUT_US_CONTENT.cta.buttonText}
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}


