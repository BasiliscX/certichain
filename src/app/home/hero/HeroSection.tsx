"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  const router = useRouter();

  const [isExiting, setIsExiting] = useState(false);

  const handleGetStarted = () => {
    setIsExiting(true);

    setTimeout(() => {
      router.push("/login");
    }, 500);
  };

  const handleLearnMore = () => {
    router.push("/learn");
  };

  return (
    <motion.div
      id="hero-section"
      className="relative"
      initial={{ y: 0 }}
      animate={{ y: isExiting ? 1000 : 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-screen h-screen flex items-center justify-center">
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        />

        <div className="relative text-center text-white px-4 z-10">
          <h1 className="text-6xl md:text-8xl font-bold">
            Empowering Academic Achievement with Blockchain
          </h1>
          <p className="text-xl md:text-2xl mt-4">
            Seamlessly validate and secure academic credentials with Soulbound
            Tokens (SBTs).
          </p>
          <div className="mt-8">
            <button
              onClick={handleGetStarted}
              className="bg-blue-600 hover:bg-blue-800 text-white py-2 px-4 rounded-full font-semibold mx-2"
            >
              Get Started
            </button>
            <button
              onClick={handleLearnMore}
              className="bg-transparent border border-white hover:bg-white hover:text-black text-white py-2 px-4 rounded-full font-semibold mx-2"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
