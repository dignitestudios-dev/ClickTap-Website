import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../../components/global/Navbar";
import { LOVE_STORED_CONTENT } from "../../constants/content";
// Dynamic imports
const Footer = dynamic(() => import("../../components/global/Footer"), { ssr: true });
const Hero = dynamic(() => import("@/app/components/case-studies-components/love-restored-ai/Hero"), { ssr: true });
const VisionBehind = dynamic(() => import("@/app/components/case-studies-components/love-restored-ai/vision-behind"), { ssr: true });
const DiscoverResearch = dynamic(() => import("@/app/components/case-studies-components/love-restored-ai/DiscoveryResearch"), { ssr: true });
const KeyChallenges = dynamic(() => import("@/app/components/case-studies-components/love-restored-ai/KeyChallenges"), { ssr: true });
const TheSolution = dynamic(() => import("@/app/components/case-studies-components/love-restored-ai/TheSolution"), { ssr: true });
const WorkflowTimeline = dynamic(() => import("@/app/components/case-studies-components/love-restored-ai/WorkflowTimeline"), { ssr: true });
const UxWireframingSection = dynamic(() => import("@/app/components/case-studies-components/love-restored-ai/UxWireframingSection"), { ssr: true });
const TechStack = dynamic(() => import("@/app/components/case-studies-components/love-restored-ai/TechStack"), { ssr: true });
const BrandIdentity = dynamic(() => import("@/app/components/case-studies-components/love-restored-ai/BrandIdentity"), { ssr: true });
const ProductOutcomes = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/ProductOutComes"), { ssr: true });
const SuccessSection = dynamic(() => import("@/app/components/case-studies-components/love-restored-ai/SuccessSection"), { ssr: true });
const projectDetails = LOVE_STORED_CONTENT.hero.details.map((detail, index) => ({
    ...detail,
    imageSrc: `/images/consultant-hero${index + 1}.png`
}));
export const metadata: Metadata = {
    title: LOVE_STORED_CONTENT.meta.title,
    description: LOVE_STORED_CONTENT.meta.description,
};

export default function LoveRestoredPage() {
    const wireframes = [
        { id: 25 },
        { id: 26 },
        { id: 27 },
        { id: 28 },
        { id: 29 },
        { id: 25 },
        { id: 26 },
        { id: 27 },
        { id: 28 },
        { id: 29 },

    ];

    return (
        <div className="flex w= flex-col min-h-screen overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="flex flex-col gap-10 md:gap-0">
                    {/* Hero Section */}
                    <Hero
                        title={LOVE_STORED_CONTENT.hero.title}
                        description={LOVE_STORED_CONTENT.hero.description}
                        details={projectDetails}
                    />
                    <VisionBehind
                        title={LOVE_STORED_CONTENT.research.title}
                        description={LOVE_STORED_CONTENT.research.description}
                        marketResearch={LOVE_STORED_CONTENT.research.marketResearch}
                        userResearch={LOVE_STORED_CONTENT.research.userResearch}
                        keyInsight={LOVE_STORED_CONTENT.research.keyInsight}

                    />
                    <DiscoverResearch />
                    <KeyChallenges />
                    <TheSolution />
                    <WorkflowTimeline />
                    <UxWireframingSection />
                    <BrandIdentity />
                    <TechStack />
                    <ProductOutcomes
                        title={LOVE_STORED_CONTENT.outcomes.title}
                        description={LOVE_STORED_CONTENT.outcomes.description}
                        stats={LOVE_STORED_CONTENT.outcomes.stats}
                        wireframes={wireframes}
                        loveRestored={true}
                    />
                    <SuccessSection />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

