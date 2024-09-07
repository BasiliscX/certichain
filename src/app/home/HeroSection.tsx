"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-purple-300 to-purple-500",
    title: "What is CertiChain?",
    desc: "CertiChain is a revolutionary platform for credential validation using blockchain technology.",
  },
];

const PortfolioPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <div className="h-[300vh] relative" ref={ref}>
      {/* Primer ítem estático (Welcome to CertiChain) */}
      <div className="w-screen h-screen flex items-center justify-center bg-blue-500">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-bold">
            Welcome to CertiChain
          </h1>
          <p className="text-xl md:text-2xl mt-4">
            Revolutionizing student credential validation using Soulbound Tokens
            (SBTs).
          </p>
        </div>
      </div>

      {/* Sección con scroll horizontal con solo un ítem */}
      <div className="sticky top-0 flex h-screen gap-4 items-center justify-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {items.map((item) => (
            <div
              key={item.id}
              className={`w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-r ${item.color}`}
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white">
                {item.title}
              </h1>
              <p className="text-xl md:text-2xl mt-4 text-white">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioPage;
