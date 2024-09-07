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
  {
    id: 2,
    color: "from-blue-300 to-blue-500",
    title: "How It Works",
    desc: "Soulbound Tokens are non-transferable tokens that verify your academic achievements.",
  },
];

const PortfolioPage = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["25%", "-25%"]);

  return (
    <div className="relative">
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

      {/* Espacio para hacer scroll antes del primer ítem */}
      <div className="h-[0vh]" />

      {/* Sección con scroll horizontal con dos ítems */}
      <div className="h-[250vh] relative" ref={ref}>
        <div className="sticky top-0 flex h-screen gap-4 items-center justify-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {items.map((item) => (
              <div
                key={item.id}
                className={`w-screen h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-r ${item.color}`}
              >
                <h1 className="text-6xl md:text-8xl font-bold text-white">
                  {item.title}
                </h1>
                <p className="text-xl md:text-2xl mt-4 text-white">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
