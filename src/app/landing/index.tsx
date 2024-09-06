import Image from "next/image";
import teacherIllustration from "../assets/illustrations/teacher.png";
import courseCertificate from "../assets/illustrations/course_certificate.png"; // Assuming this is the image file path

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

      {/* Section with Image on the Left and Text on the Right */}
      <section className="flex flex-col md:flex-row justify-center items-center md:items-start md:space-x-6 my-12 max-w-4xl">
        {/* Image on the Left */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <Image
            src={teacherIllustration}
            alt="Teacher Illustration"
            width={150}
            height={150}
          />
        </div>

        {/* Text on the Right */}
        <div className="w-full md:w-1/2">
          <h3 className="mt-4 text-xl font-semibold">For Teachers</h3>
          <p className="text-gray-600">
            Easily issue credentials for your students using SBTs.
          </p>
        </div>
      </section>

      {/* Section with Text on the Left and Image on the Right */}
      <section className="flex flex-col md:flex-row justify-center items-center md:space-x-6 my-12 max-w-4xl">
        {/* Text on the Left */}
        <div className="w-full md:w-1/2">
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
        <div className="w-full md:w-1/2 text-center md:text-right">
          <Image
            src={courseCertificate}
            alt="Course Certificate Illustration"
            width={200}
            height={200}
          />
        </div>
      </section>
    </div>
  );
}
