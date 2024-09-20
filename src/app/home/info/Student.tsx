"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Student() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("student-section");
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
      id="student-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 1 }}
      className="flex flex-row justify-center items-center space-x-4 my-12 max-w-4xl px-4"
    >
      <div className="pl-4">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">For Students</h3>
        <p className="text-lg text-gray-600 leading-relaxed mb-4">
          Secure your academic future with Soulbound Tokens (SBTs). Showcase
          your verified achievements to the world and open doors to new
          opportunities.
        </p>
      </div>
      <div className="flex-shrink-0">
        <Image
          src="/home/info/student.png"
          alt="Student Illustration"
          width={150}
          height={150}
        />
      </div>{" "}
    </motion.section>
  );
}
