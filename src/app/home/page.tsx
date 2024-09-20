import HeroSection from "./hero/HeroSection";
import AboutSection from "./about/AboutSection";
import InfoSection from "./info/InfoSection";

export default function HomePage() {
  return (
    <div className="bg-gray-50 pt-16">
      <HeroSection />
      <AboutSection />
      <InfoSection />
    </div>
  );
}
