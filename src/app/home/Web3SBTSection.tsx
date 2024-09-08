"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import courseCertificate from "../assets/illustrations/course_certificate.png";
import { motion } from "framer-motion";

export default function Web3SBTSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("web3-sbt-section");
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
      id="web3-sbt-section"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 1 }}
      className="flex flex-row justify-center items-center space-x-4 my-12 max-w-4xl px-4"
    >
      <div className="flex-shrink-0">
        <Image
          src={courseCertificate}
          alt="Course Certificate Illustration"
          width={150}
          height={150}
        />
      </div>{" "}
      <div className="pl-4">
        <h3 className="text-xl font-semibold text-blue-900">
          What is Web3 and Soulbound Tokens?
        </h3>
        <p className="text-gray-600">
          Web3 allows for decentralized, trustless systems. Soulbound Tokens
          (SBTs) are non-transferable tokens used to represent credentials,
          achievements, or personal identity that cannot be traded.
        </p>
      </div>
    </motion.section>
  );
}
