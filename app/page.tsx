import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import SectionFive from "@/components/SectionFive";
import SectionFour from "@/components/SectionFour";
import SectionSix from "@/components/SectionSix";
import SectionThree from "@/components/SectionThree";
import SectionTwo from "@/components/SectionTwo";
import SectionEight from "@/components/SectionEight";
import SectionSeven from "@/components/SectionSeven";
import SectionNine from "@/components/SectionNine";
import GlassCard from "@/components/GlassCard";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="header-grid">
          <Navbar />
          <HeroSection />
          <SectionTwo />
        </div>
      </div>
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <SectionSeven />
      <SectionEight />
      <GlassCard className="border-none overflow-hidden">
        <SectionNine />
        <Footer />
      </GlassCard>
    </div>
  );
}
