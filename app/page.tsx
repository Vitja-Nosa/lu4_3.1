import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyPayyo } from "@/components/landing/WhyPayyo";
import { Features } from "@/components/landing/Features";
import { VideoSection } from "@/components/landing/VideoSection";
import { JoinSection } from "@/components/landing/JoinSection";
import { Footer } from "@/components/landing/Footer";

export default function Home() {
  return (
    <>
      <div className="glow-bg" />
      <main>
        <Nav />
        <Hero />
        <HowItWorks />
        <WhyPayyo />
        <Features />
        <VideoSection />
        <JoinSection />
        <Footer />
      </main>
    </>
  );
}
