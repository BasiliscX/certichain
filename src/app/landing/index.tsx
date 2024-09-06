import Image from "next/image";
import teacherIllustration from "../assets/illustrations/teacher.png";
import courseCertificate from "../assets/illustrations/course_certificate.png";
import MoreInfoSection from "./MoreInfoSection"; // Importing the MoreInfoSection

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 pt-16">
      <section className="text-center max-w-2xl space-y-4 mt-12">
        <h2 className="text-4xl font-semibold mb-6 text-blue-900">
          Welcome to CertiChain
        </h2>
        <p className="text-xl text-gray-600">
          Revolutionizing student credential validation using Soulbound Tokens
          (SBTs).
        </p>
      </section>
      <section className="flex flex-row justify-center items-center space-x-4 my-12 max-w-4xl px-4">
        <div className="flex-shrink-0">
          <Image
            src={teacherIllustration}
            alt="Teacher Illustration"
            width={150}
            height={150}
          />
        </div>
        <div className="pl-4">
          <h3 className="text-xl font-semibold text-blue-900">For Teachers</h3>
          <p className="text-gray-600">
            Easily issue credentials for your students using SBTs.
          </p>
        </div>
      </section>
      <section className="flex flex-row justify-center items-center space-x-4 my-12 max-w-4xl px-4">
        <div className="pr-4">
          <h3 className="text-xl font-semibold text-blue-900">
            What is Web3 and Soulbound Tokens?
          </h3>
          <p className="text-gray-600">
            Web3 allows for decentralized, trustless systems. Soulbound Tokens
            (SBTs) are non-transferable tokens used to represent credentials,
            achievements, or personal identity that cannot be traded.
          </p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src={courseCertificate}
            alt="Course Certificate Illustration"
            width={150}
            height={150}
          />
        </div>
      </section>

      {/* Add the MoreInfoSection here */}
      <MoreInfoSection />
    </div>
  );
}
