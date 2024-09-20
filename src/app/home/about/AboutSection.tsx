"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroItems from "./heroItems.json";

const items = heroItems;

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);

  return (
    <motion.div
      id="hero-section"
      className="relative"
      initial={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="h-[250vh] relative" ref={ref}>
        <div
          className="sticky top-0 flex h-screen gap-4 items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url("/home/about/hero-image.webp")',
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

export default AboutSection;
