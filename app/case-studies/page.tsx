import dynamic from "next/dynamic";
import { Metadata } from "next";
import { UIUX_CONTENT } from "../constants/content";

// Dynamic imports
const Navbar = dynamic(() => import("../components/global/Navbar"), { ssr: true });
const Footer = dynamic(() => import("../components/global/Footer"), { ssr: true });
const Contact = dynamic(() => import("../components/home/Contact"), { ssr: true });
const CaseStudiesCard = dynamic(() => import("../components/case-studies-components/CaseStudiesCard"), { ssr: true });

export const metadata: Metadata = {
    title: UIUX_CONTENT.meta.title,
    description: UIUX_CONTENT.meta.description,
};

export default function CaseStudies() {
    return (
        <div className="flex flex-col min-h-screen main-body-section  overflow-x-hidden">
            {/* Navigation */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <div className="flex flex-col gap-36">
                    {/* Hero Section */}
                    <div className=" px-4 sm:px-6 lg:px-20 py-12">
                        <CaseStudiesCard />
                    </div>
                    {/* Contact Section */}
                    <Contact
                        heading={"Enough With the Scrolling, Let’s Create Now !"}
                        description={"Have an idea or a project in mind? It’s time to discuss the plan. We offer a free consultation to understand your goals. Also, to guide you in the right direction."}
                        ctaText={"Let’s Talk About Your Idea"}
                        fieldLabel="App Idea"
                    />
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
}

