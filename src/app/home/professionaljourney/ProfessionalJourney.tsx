"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProfessionalJourney = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  // Controlar el desplazamiento horizontal de los elementos
  const x = useTransform(scrollYProgress, [0, 1], ["100%", "-33.3%"]);

  return (
    <motion.div
      id="professional-journey-section"
      className="relative bg-gray-200"
      initial={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        backgroundImage: "url('/pjbackground.svg')", // Ruta del SVG
        backgroundSize: "cover", // Ajustar la imagen para que cubra el contenedor
        backgroundPosition: "center", // Centrar el fondo
        backgroundRepeat: "no-repeat", // Evitar que se repita
      }}
    >
      <div className="h-[0vh]" />

      <div className="h-[250vh] relative" ref={ref}>
        <div className="sticky top-0 flex h-screen gap-4 items-center justify-center overflow-hidden z-10">
          <motion.div style={{ x }} className="flex">
            {/* Formación */}
            <div className="w-screen h-screen flex flex-col justify-center items-center px-14">
              <div className="highlight-box-solid">
                <h1 className="font-bold text-center text-6xl mt-14 px-20 md:text-8xl md:px-32 text-black">
                  Education
                </h1>
                <p className="text-center text-xl mt-4 mx-4 px-10 md:text-center md:text-4xl md:px-44 text-black">
                  I&apos;m currently in the final semester of the University
                  Degree in Programming at the National Technological University
                  (equivalent to a Bachelor&apos;s degree).
                </p>
              </div>
            </div>

            {/* Experiencia */}
            <div className="w-screen h-screen flex flex-col justify-center items-center px-14">
              <div className="highlight-box-solid">
                <h1 className="font-bold text-center text-6xl mt-14 md:text-8xl md:px-32 text-black">
                  Professional Experience
                </h1>
                <p className="text-center text-xl mt-4 mx-4 md:text-center md:text-4xl md:px-44 text-black">
                  I work part-time for the National Technological University
                  developing internal-use APIs. Additionally, I offer freelance
                  consulting and services for professionals looking for
                  customized software solutions.
                </p>
              </div>
            </div>

            {/* Stack Tecnológico */}
            <div className="w-screen h-screen flex flex-col justify-center items-center px-14">
              <div className="highlight-box-solid">
                <h1 className="font-bold text-center text-6xl mt-14 md:text-8xl md:px-32 text-black">
                  My Tech Stack
                </h1>
                <p className="text-center text-xl mt-4 mx-4 md:text-center md:text-4xl md:px-44 text-black">
                  My stack is primarily JavaScript-based, using Node.js
                  (Express) for backend and React or Next.js for frontend. I
                  also have experience with desktop applications in Java and C#.
                  Currently, I am learning Solidity, Rust, and blockchain
                  technologies to provide future web3 solutions.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalJourney;
