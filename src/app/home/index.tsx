import HeroSection from "./HeroSection";
import TeacherSection from "./TeacherSection";
import Web3SBTSection from "./Web3SBTSection";
import MoreInfoSection from "./MoreInfoSection";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 pt-16">
      <HeroSection />
      <TeacherSection />
      <Web3SBTSection />
      <MoreInfoSection />
    </div>
  );
}
