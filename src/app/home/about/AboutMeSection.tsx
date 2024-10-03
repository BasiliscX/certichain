"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroItems from "./aboutMeItems.json";
import BackgroundHeroTrianglesSVG from "@/components/svg/backgroundHeroTrianglesSVG";

const items = heroItems;

const AboutMeSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);

  return (
    <>
      <motion.div
        id="about-me-section"
        className="relative bg-amber-500"
        initial={{ y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="h-[250vh] relative" ref={ref}>
          <div className="sticky top-0 flex h-screen gap-4 items-center justify-center overflow-hidden z-10">
            <motion.div style={{ x }} className="flex">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="w-screen h-screen flex flex-col justify-center items-center px-14"
                >
                  <div className="highlight-box pb-10">
                    <h1 className="font-bold text-center text-6xl mt-14 md:text-8xl md:px-32 text-black">
                      {item.title}
                    </h1>
                    <p className="text-center text-xl mt-4 mx-4 md:text-center md:text-4xl md:px-44 text-black">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <motion.div className="absolute inset-0 z-0">
          <BackgroundHeroTrianglesSVG showAdditionalTriangles={true} />
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutMeSection;
