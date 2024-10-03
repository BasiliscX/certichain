"use client";

import { useState, useEffect, useRef } from "react";
import BackgroundGalleryCoverSVG from "@/components/svg/BackgroundGalleryCoverSVG"; // Import the SVG
import Image from "next/image";
import galleryProjects from "./GalleryProyects.json";
import { motion } from "framer-motion"; // Para las animaciones

const projects = galleryProjects;

const GallerySection = () => {
  const [scrollProgress, setScrollProgress] = useState(0); // Control scroll progress
  const [showButton, setShowButton] = useState(false); // Control visibility of button
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (section) {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          const visiblePart = windowHeight - rect.top;
          const totalHeight = rect.height + windowHeight;
          const progress = Math.min((visiblePart / totalHeight) * 100, 100);
          setScrollProgress(progress);

          // Mostrar el botón cuando se haya visto al menos el 50% de la sección
          if (progress > 50) {
            setShowButton(true);
          } else {
            setShowButton(false);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="gallery-section"
      className="relative bg-gray-100 py-16 overflow-hidden"
    >
      {/* Background shapes that move based on scroll */}
      <BackgroundGalleryCoverSVG
        xLeft={scrollProgress * -3} // Move left shape to the left
        xRight={scrollProgress * 3} // Move right shape to the right
      />

      <div className="container mx-auto px-4 relative z-20">
        <h2 className="text-4xl font-bold text-center mb-12">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded overflow-hidden shadow-lg cursor-pointer bg-slate-100"
              onClick={() => window.open(project.url, "_blank")}
            >
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-full object-cover"
              />
              <div className="px-2 py-2">
                <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                <p className="text-gray-700 text-sm hidden md:block">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Botón colocado debajo de la última tarjeta */}
        {showButton && (
          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <a
              href="https://github.com/BasiliscX"
              target="_blank"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition"
            >
              See more projects on GitHub
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
