import Image from "next/image";
import courseCertificate from "../assets/illustrations/course_certificate.png";

export default function Web3SBTSection() {
  return (
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
  );
}
