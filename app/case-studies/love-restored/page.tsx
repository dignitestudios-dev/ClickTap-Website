import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../../components/global/Navbar";
import { CONSULTANT_US_CONTENT } from "../../constants/content";
import ProductOutcomes from "@/app/components/case-studies-components/ChubsArmy/ProductOutComes";
// Dynamic imports
const Footer = dynamic(() => import("../../components/global/Footer"), { ssr: true });
const Hero = dynamic(() => import("@/app/components/case-studies-components/love-stored/Hero"), { ssr: true });
const VisionBehind = dynamic(() => import("@/app/components/case-studies-components/love-stored/vision-behind"), { ssr: true });
const DiscoverResearch = dynamic(() => import("@/app/components/case-studies-components/love-stored/DiscoveryResearch"), { ssr: true });
const KeyChallenges = dynamic(() => import("@/app/components/case-studies-components/love-stored/KeyChallenges"), { ssr: true });
const TheSolution = dynamic(() => import("@/app/components/case-studies-components/love-stored/TheSolution"), { ssr: true });
const WorkflowTimeline = dynamic(() => import("@/app/components/case-studies-components/love-stored/WorkflowTimeline"), { ssr: true });
const UxWireframingSection = dynamic(() => import("@/app/components/case-studies-components/consultant-us/UxWireframingSection"), { ssr: true });
const BrandIdentity = dynamic(() => import("@/app/components/case-studies-components/consultant-us/BrandIdentity"), { ssr: true });
const TechStackMarquee = dynamic(() => import("@/app/components/case-studies-components/consultant-us/TechStackMarquee"), { ssr: true });
const SuccessSection = dynamic(() => import("@/app/components/case-studies-components/consultant-us/SuccessSection"), { ssr: true });
const projectDetails = CONSULTANT_US_CONTENT.hero.details.map((detail, index) => ({
    ...detail,
    imageSrc: `/images/consultant-hero${index + 1}.png`
}));
export const metadata: Metadata = {
    title: CONSULTANT_US_CONTENT.meta.title,
    description: CONSULTANT_US_CONTENT.meta.description,
};

export default function LoveRestoredPage() {
    const wireframes = [
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },
        { id: 15 },
        { id: 16 },
        { id: 17 },
        { id: 18 },
        { id: 19 },

    ];

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="flex flex-col gap-10 md:gap-0">
                    {/* Hero Section */}
                    <Hero
                        title={CONSULTANT_US_CONTENT.hero.title}
                        description={CONSULTANT_US_CONTENT.hero.description}
                        details={projectDetails}
                    />
                    <VisionBehind
                        title={CONSULTANT_US_CONTENT.research.title}
                        description={CONSULTANT_US_CONTENT.research.description}
                        marketResearch={CONSULTANT_US_CONTENT.research.marketResearch}
                        userResearch={CONSULTANT_US_CONTENT.research.userResearch}
                        keyInsight={CONSULTANT_US_CONTENT.research.keyInsight}

                    />
                    <DiscoverResearch />
                    <KeyChallenges />
                    <TheSolution />
                    <WorkflowTimeline />
                    <UxWireframingSection />
                    <BrandIdentity />
                    <TechStackMarquee />
                    <ProductOutcomes
                        title={CONSULTANT_US_CONTENT.outcomes.title}
                        description={CONSULTANT_US_CONTENT.outcomes.description}
                        stats={CONSULTANT_US_CONTENT.outcomes.stats}
                        wireframes={wireframes}
                    />
                    <SuccessSection />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

