"use client";

import { useState, useEffect, useRef } from "react";
import Cloud from "./Cloud";
import Code from "./Code";
import Product from "./Product";
import TextSection from "./TextSection";
import { Position } from "./IPosition";
import BackgroundHeroTrianglesSVG from "@/components/svg/backgroundHeroTrianglesSVG"; // Importa los triángulos como fondo

const Hero = () => {
  const [showProduct, setShowProduct] = useState(false);
  const [productPosition, setProductPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);
  const [showAdditionalTriangles, setShowAdditionalTriangles] = useState(false); // Controla la aparición de los triángulos adicionales
  const [windowDimensions, setWindowDimensions] = useState({
    width: 0,
    height: 0,
  });
  const heroRef = useRef(null);

  const svgSize = 150;

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleShowProduct = (
    cloudPosition: Position,
    codePosition: Position
  ) => {
    setShowProduct(true);
    const productX = (cloudPosition.x + codePosition.x) / 2 - svgSize / 2;
    const productY = (cloudPosition.y + codePosition.y) / 2 - svgSize / 2;
    setProductPosition({ x: productX, y: productY });

    // Esperar a que el producto se coloque en el centro y luego mostrar los triángulos adicionales
    setTimeout(() => {
      setShowAdditionalTriangles(true);
    }, 1500); // Espera 1.5 segundos para la animación de los triángulos restantes
  };

  const moveProductToCenter = {
    x: windowDimensions.width / 2 - svgSize / 2,
    y: windowDimensions.height - svgSize - 100,
  };

  return (
    <section
      ref={heroRef}
      className="hero h-screen flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Fondo SVG con los triángulos */}
      <div className="absolute inset-0 z-0">
        <BackgroundHeroTrianglesSVG
          showAdditionalTriangles={showAdditionalTriangles}
        />
      </div>

      {/* Sección de texto con animaciones */}
      <TextSection />

      {!showProduct && (
        <>
          <Cloud handleShowProduct={handleShowProduct} heroRef={heroRef} />
          <Code handleShowProduct={handleShowProduct} heroRef={heroRef} />
        </>
      )}

      {showProduct && (
        <Product
          initialPosition={productPosition}
          targetPosition={moveProductToCenter}
          showTooltip={showTooltip}
          setShowTooltip={setShowTooltip}
        />
      )}
    </section>
  );
};

export default Hero;
