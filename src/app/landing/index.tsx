import Image from "next/image";
import Link from "next/link"; // Import Link component
import teacherIllustration from "../assets/illustrations/teacher.png";
import courseCertificate from "../assets/illustrations/course_certificate.png";

export default function Landing() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 pt-16">
      <section className="text-center max-w-2xl space-y-4 mt-12">
        <h2 className="text-4xl font-semibold mb-6">Welcome to CertiChain</h2>
        <p className="text-xl text-gray-600">
          Revolutionizing student credential validation using Soulbound Tokens
          (SBTs).
        </p>
      </section>
      {/* Section for Teachers */}
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
          <h3 className="text-xl font-semibold">For Teachers</h3>
          <p className="text-gray-600">
            Easily issue credentials for your students using SBTs.
          </p>
        </div>
      </section>
      {/* Section for Web3 and SBT Explanation */}
      <section className="flex flex-row justify-center items-center space-x-4 my-12 max-w-4xl px-4">
        <div className="pr-4">
          <h3 className="text-xl font-semibold">
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
      {/* Know More Section */}
      <section className="max-w-4xl px-4 my-12">
        {" "}
        {/* Match width and padding */}
        <details className="bg-gray-200 p-4 rounded-lg">
          <summary className="cursor-pointer text-blue-500 hover:text-blue-700 font-semibold">
            Want to Know More?
          </summary>
          <div className="mt-4 text-left space-y-4">
            <h3 className="text-xl font-semibold">Why CertiChain?</h3>
            <p className="text-gray-600">
              CertiChain offers a revolutionary approach to credential
              validation. By utilizing the power of Soulbound Tokens (SBTs),
              students and educators can ensure the integrity and authenticity
              of academic records. This decentralized system guarantees the
              security and verification of student achievements, making it an
              essential tool for modern education.
            </p>

            <h3 className="text-xl font-semibold">How SBTs Work</h3>
            <p className="text-gray-600">
              Soulbound Tokens (SBTs) are attached to your digital identity and
              cannot be transferred, ensuring that the credentials or
              achievements they represent remain authentic. This allows students
              to present their accomplishments with confidence across
              institutions and to future employers.{" "}
              <Link href="/more-info">
                <span className="text-blue-500 hover:underline">
                  ...know more
                </span>
              </Link>
            </p>
          </div>
        </details>
      </section>
    </div>
  );
}
