import Image from "next/image";
import teacherIllustration from "../assets/illustrations/teacher.png";
import courseCertificate from "../assets/illustrations/course_certificate.png";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
      <section className="text-center max-w-2xl space-y-4 mt-12">
        <h2 className="text-4xl font-semibold mb-6">Welcome to CertiChain</h2>
        <p className="text-xl text-gray-600">
          Revolutionizing student credential validation using Soulbound Tokens
          (SBTs).
        </p>
      </section>

      {/* Section for Teachers */}
      <section className="flex flex-row justify-center items-center space-x-4 my-12 max-w-4xl px-4">
        {/* Image on the Left */}
        <div className="flex-shrink-0">
          <Image
            src={teacherIllustration}
            alt="Teacher Illustration"
            width={150}
            height={150}
          />
        </div>

        {/* Text on the Right */}
        <div className="pl-4">
          {" "}
          {/* Added padding to the left */}
          <h3 className="text-xl font-semibold">For Teachers</h3>
          <p className="text-gray-600">
            Easily issue credentials for your students using SBTs.
          </p>
        </div>
      </section>

      {/* Section for Web3 and SBT Explanation */}
      <section className="flex flex-row justify-center items-center space-x-4 my-12 max-w-4xl px-4">
        {/* Text on the Left */}
        <div className="pr-4">
          {" "}
          {/* Added padding to the right */}
          <h3 className="text-xl font-semibold">
            What is Web3 and Soulbound Tokens?
          </h3>
          <p className="text-gray-600">
            Web3 allows for decentralized, trustless systems. Soulbound Tokens
            (SBTs) are non-transferable tokens used to represent credentials,
            achievements, or personal identity that cannot be traded.
          </p>
        </div>

        {/* Image on the Right */}
        <div className="flex-shrink-0">
          <Image
            src={courseCertificate}
            alt="Course Certificate Illustration"
            width={150}
            height={150}
          />
        </div>
      </section>
    </div>
  );
}
