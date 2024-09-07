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
          className="sticky top-0 flex h-screen gap-4 items-center justify-center overflow-hidden
            bg-cover bg-center" // General background settings
          style={{
            backgroundImage: 'url("/hero-image.png")', // Default for larger screens
            backgroundAttachment: "fixed", // Fixed background for all
          }}
        >
          {/* Imagen diferente para pantallas pequeñas */}
          <div
            className="sm:bg-[url('/hero-image-mobile.png')] md:bg-[url('/hero-image.png')]"
            style={{
              backgroundSize: "cover", // Ensure the background scales well
              backgroundPosition: "center",
            }}
          >
            <motion.div style={{ x }} className="flex">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="w-screen h-screen flex flex-col justify-center items-center px-6"
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
    </div>
  );
};

export default PortfolioPage;
