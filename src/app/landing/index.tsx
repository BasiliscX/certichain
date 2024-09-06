import Image from "next/image";
import teacherIllustration from "../assets/illustrations/teacher.png"; // Assuming the teacher image file is named teacher.png

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

      {/* Sections with Illustrations */}
      <section className="flex flex-wrap justify-center space-x-6 my-12">
        <div className="flex flex-col items-center">
          <Image
            src={teacherIllustration}
            alt="Teacher Illustration"
            width={150}
            height={150}
          />
          <h3 className="mt-4 text-xl font-semibold">For Teachers</h3>
          <p className="text-gray-600">
            Easily issue credentials for your students using SBTs.
          </p>
        </div>
        {/* Additional Sections for Students, NFTs, etc. */}
        {/* You can repeat similar blocks for Students, NFT, etc., with their respective images */}
      </section>

      <section className="text-center max-w-xl space-y-4">
        <h3 className="text-xl font-semibold">
          What is Web3 and Soulbound Tokens?
        </h3>
        <p className="text-gray-600">
          Web3 allows for decentralized, trustless systems. Soulbound Tokens
          (SBTs) are non-transferable tokens used to represent credentials,
          achievements, or personal identity that cannot be traded.
        </p>
      </section>
    </div>
  );
}
