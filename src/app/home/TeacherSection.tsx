import Image from "next/image";
import teacherIllustration from "../assets/illustrations/teacher.png";

export default function TeacherSection() {
  return (
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
  );
}
