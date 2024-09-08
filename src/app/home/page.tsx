import HeroSection from "./hero/HeroSection";
import TeacherSection from "./TeacherSection";
import Web3SBTSection from "./Web3SBTSection";
import MoreInfoSection from "./MoreInfoSection";
import StudentSection from "./StudentSection";

export default function HomePage() {
  return (
    <div className="bg-gray-50 pt-16">
      <HeroSection />
      <div className="flex flex-col justify-center items-center">
        <TeacherSection />
        <StudentSection />
        <Web3SBTSection />
        <MoreInfoSection />
      </div>
    </div>
  );
}
