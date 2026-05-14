import dynamic from "next/dynamic";
import { Metadata } from "next";
import Navbar from "../../components/global/Navbar";
import { CHUBBS_ARMY_CONTENT } from "../../constants/content";

// Dynamic imports
const SuccessStory = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/SuccessStory"), { ssr: true });
const ProductOutComes = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/ProductOutComes"), { ssr: true });
const TechStack = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/TechStack"), { ssr: true });
const SolutionsSection = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/SolutionSection"), { ssr: true });
const BrandIdentity = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/BrandIdentity"), { ssr: true });
const Wireframes = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/WireFraming"), { ssr: true });
const CoreChallenges = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/CoreChallenges"), { ssr: true });
const DiscoverResearch = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/DiscoverResearch"), { ssr: true });
const VisionBehind = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/VisionBehind"), { ssr: true });
const WorkFlow = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/WorkFlow"), { ssr: true });
const Hero = dynamic(() => import("@/app/components/case-studies-components/ChubsArmy/Hero"), { ssr: true });
const Footer = dynamic(() => import("../../components/global/Footer"), { ssr: true });

export const metadata: Metadata = {
    title: CHUBBS_ARMY_CONTENT.meta.title,
    description: CHUBBS_ARMY_CONTENT.meta.description,
};

export default function AiAppDevelopment() {
    const wireframes = [
        { id: 12 },
        { id: 13 },
        { id: 14 },
        { id: 8 },
        { id: 9 },
        { id: 10 },
        { id: 11 },
        { id: 12 },
        { id: 13 },
        { id: 14 },
    ];

    return (
        <div className="flex flex-col min-h-screen overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="flex flex-col gap-16">
                    {/* Hero Section */}
                    <Hero
                        tagline={CHUBBS_ARMY_CONTENT.hero.tagline}
                        title={CHUBBS_ARMY_CONTENT.hero.title}
                        cta={CHUBBS_ARMY_CONTENT.hero.cta}
                        description={CHUBBS_ARMY_CONTENT.hero.description}
                        details={CHUBBS_ARMY_CONTENT.hero.details}
                    />

                    {/* Vision Behind */}
                    <VisionBehind
                        title={CHUBBS_ARMY_CONTENT.vision.title}
                        description={CHUBBS_ARMY_CONTENT.vision.description}
                    />

                    {/* Discover Research */}
                    <DiscoverResearch
                        title={CHUBBS_ARMY_CONTENT.research.title}
                        description={CHUBBS_ARMY_CONTENT.research.description}
                        marketResearch={CHUBBS_ARMY_CONTENT.research.marketResearch}
                        userResearch={CHUBBS_ARMY_CONTENT.research.userResearch}
                        keyInsight={CHUBBS_ARMY_CONTENT.research.keyInsight}
                    />

                    <CoreChallenges
                        title={CHUBBS_ARMY_CONTENT.challenges.title}
                        items={CHUBBS_ARMY_CONTENT.challenges.items}
                    />

                    <SolutionsSection
                        title={CHUBBS_ARMY_CONTENT.solutions.title}
                        items={CHUBBS_ARMY_CONTENT.solutions.items}
                    />

                    <WorkFlow
                        title={CHUBBS_ARMY_CONTENT.workflow.title}
                        description={CHUBBS_ARMY_CONTENT.workflow.description}
                        items={CHUBBS_ARMY_CONTENT.workflow.items}
                    />

                    <Wireframes
                        title={CHUBBS_ARMY_CONTENT.wireframes.title}
                        description={CHUBBS_ARMY_CONTENT.wireframes.description}
                    />

                    <BrandIdentity
                        title={CHUBBS_ARMY_CONTENT.branding.title}
                        description={CHUBBS_ARMY_CONTENT.branding.description}
                    />

                    <TechStack
                        title={CHUBBS_ARMY_CONTENT.techStack.title}
                        description={CHUBBS_ARMY_CONTENT.techStack.description}
                    />

                    <ProductOutComes
                        title={CHUBBS_ARMY_CONTENT.outcomes.title}
                        description={CHUBBS_ARMY_CONTENT.outcomes.description}
                        stats={CHUBBS_ARMY_CONTENT.outcomes.stats}
                        wireframes={wireframes}                      
                    />

                    <div className="px-4 md:px-20 py-10">
                        <SuccessStory
                            title={CHUBBS_ARMY_CONTENT.successStory.title}
                            description={CHUBBS_ARMY_CONTENT.successStory.description}
                            cta={""}
                            deviceImageSrc="/images/success-story-device.png"
                            bgPatternSrc="/images/bg-pattern-ecclapse.png"
                        />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

