import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { WhyPayo } from "@/components/landing/WhyPayo";
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
        <WhyPayo />
        <Features />
        <VideoSection />
        <JoinSection />
        <Footer />
      </main>
    </>
  );
}
