import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { VideoSection } from "@/components/landing/VideoSection";
import { AboutCTA } from "@/components/landing/AboutCTA";
import { Testimonials } from "@/components/landing/Testimonials";
import { Benefits } from "@/components/landing/Benefits";
import { Pricing } from "@/components/landing/Pricing";
import { Footer } from "@/components/landing/Footer";
import { WhatsappFloat } from "@/components/landing/WhatsappFloat";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <VideoSection />
      <AboutCTA />
      <Testimonials />
      <Benefits />
      <Pricing />
      <Footer />
      <WhatsappFloat />
    </main>
  );
};

export default Index;
