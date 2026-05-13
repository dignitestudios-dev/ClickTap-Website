import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../../components/global/Navbar";
import { CHUBBS_ARMY_CONTENT } from "../../constants/content";
import KeyChallenges from "@/app/components/case-studies-components/consultant-us/KeyChallenges";
// Dynamic imports
const Footer = dynamic(() => import("../../components/global/Footer"), { ssr: true });
const Hero = dynamic(() => import("@/app/components/case-studies-components/consultant-us/Hero"), { ssr: true });
const DiscoverResearch = dynamic(() => import("@/app/components/case-studies-components/consultant-us/DiscoverResearch"), { ssr: true });
const projectDetails = [
    {
        label: "Timeline",
        value: "6 Months",
        imageSrc: "/images/consultant-hero1.png"
    },
    {
        label: "Scope",
        value: "Mobile App Development, UI/UX Design, Admin Panel Development",
        imageSrc: "/images/consultant-hero2.png"
    },
    {
        label: "Sector",
        value: "Oil & Gas / Workforce Management Platform",
        imageSrc: "/images/consultant-hero3.png"
    }
];
export const metadata: Metadata = {
    title: CHUBBS_ARMY_CONTENT.meta.title,
    description: CHUBBS_ARMY_CONTENT.meta.description,
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
                        title="Consultants R Us"
                        description="Consultants R US Is A Mobile Application Built For The U.S. Petroleum And Oil Industry, Designed To Streamline The Connection Between Skilled Engineers And Oil Companies."
                        details={projectDetails}
                    />
                    <DiscoverResearch
                        title={CHUBBS_ARMY_CONTENT.research.title}
                        description={CHUBBS_ARMY_CONTENT.research.description}
                        marketResearch={CHUBBS_ARMY_CONTENT.research.marketResearch}
                        userResearch={CHUBBS_ARMY_CONTENT.research.userResearch}
                        keyInsight={CHUBBS_ARMY_CONTENT.research.keyInsight}

                    />
                    <KeyChallenges />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

