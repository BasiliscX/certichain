"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import teacherIllustration from "../assets/illustrations/teacher.png";
import { motion } from "framer-motion";

export default function TeacherSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("teacher-section");
      const rect = section?.getBoundingClientRect();
      if (rect && rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.section
      id="teacher-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 1 }}
      className="flex flex-row justify-center items-center space-x-4 my-12 max-w-4xl px-4"
    >
      <div className="flex-shrink-0">
        <Image
          src={teacherIllustration}
          alt="Teacher Illustration"
          width={150}
          height={150}
        />
      </div>

      <div className="pl-4">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">For Teachers</h3>
        <p className="text-gray-600">
          Easily issue credentials for your students using SBTs.
        </p>
      </div>
    </motion.section>
  );
}
