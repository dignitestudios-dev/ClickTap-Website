import Navbar from "./components/global/Navbar";
import Hero from "./components/home/Hero";
import Services from "./components/home/Services";
import Portfolio from "./components/home/Portfolio";
import Process from "./components/home/Process";
import TechStack from "./components/home/TechStack";
import Footer from "./components/global/Footer";
import WhyChooseUs from "./components/home/why-choose-us";
import Contact from "./components/home/Contact";
import FAQs from "./components/home/FAQs";
import Industry from "./components/home/Industry";
import TestimonialPage from "./components/home/Testimonials";
import TrustPilot from "./components/home/TrustPilot";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen  overflow-x-hidden">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 w-full">
        <div className="flex flex-col gap-16">
          {/* Hero Section */}
          <Hero />

          {/* Services Section */}
          <Services />

          {/* Portfolio Section */}
          <Portfolio />

          {/* Process Section */}
          <Process />

          {/* Why Choose Us */}
          <WhyChooseUs />

          {/* Tech Stack Section */}
          <TechStack />
          {/* Industry */}
          <Industry />
          {/* TrustPilot */}
          <TrustPilot />
          {/* Testimonials */}
          <TestimonialPage />
          {/* FAQs */}
          <FAQs />
          {/* Contact Section */}
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
