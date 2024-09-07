import HeroSection from "./HeroSection";
import TeacherSection from "./TeacherSection";
import Web3SBTSection from "./Web3SBTSection";
import MoreInfoSection from "./MoreInfoSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <HeroSection />
      <TeacherSection />
      <div className=" flex flex-col justify-center items-center">
        <Web3SBTSection />
        <MoreInfoSection />
      </div>
    </div>
  );
}
