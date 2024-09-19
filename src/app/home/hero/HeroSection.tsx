"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import heroItems from "./heroItems.json";

const items = heroItems;

const HeroSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);

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
      <div className="h-[250vh] relative" ref={ref}>
        <div
          className="sticky top-0 flex h-screen gap-4 items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url("/hero-image.webp")',
            backgroundAttachment: "fixed",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <motion.div style={{ x }} className="flex">
            {items.map((item) => (
              <div
                key={item.id}
                className="w-screen h-screen flex flex-col justify-center items-center px-12"
              >
                <h1 className="text-6xl md:text-8xl font-bold text-black">
                  {item.title}
                </h1>
                <p className="text-xl md:text-4xl mt-4 text-black">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HeroSection;
