"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroItems from "./heroItems.json";

const items = heroItems;

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
        <div
          className="sticky top-0 flex h-screen gap-4 items-center justify-center overflow-hidden"
          style={{
            backgroundImage: 'url("/hero-image.webp")',
            backgroundAttachment: "fixed",
            backgroundSize: "cover", // Cover the entire background area
            backgroundPosition: "center", // Keep the image centered
          }}
        >
          <motion.div style={{ x }} className="flex">
            {items.map((item) => (
              <div
                key={item.id}
                className="w-screen h-screen flex flex-col justify-center items-center px-12"
              >
                <h1
                  className="text-6xl md:text-8xl font-bold text-black"
                  style={{
                    textShadow: `
            0 0 10px rgba(255, 255, 255, 0.8), /* Resplandor blanco */
            0 0 20px rgba(255, 255, 255, 0.6), 
            0 0 30px rgba(0, 0, 0, 0.5), /* Sombra gris más fuerte */
            2px 2px 5px rgba(0, 0, 0, 0.4)`,
                  }}
                >
                  {item.title}
                </h1>
                <p
                  className="text-xl md:text-4xl mt-4 text-black"
                  style={{
                    textShadow: `
            0 0 10px rgba(255, 255, 255, 0.8), /* Resplandor blanco */
            0 0 15px rgba(255, 255, 255, 0.6),
            2px 2px 5px rgba(0, 0, 0, 0.4)`,
                  }}
                >
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
