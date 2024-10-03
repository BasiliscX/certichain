import { motion } from "framer-motion";

const BackgroundHeroTrianglesSVG = ({
  showAdditionalTriangles,
}: {
  showAdditionalTriangles: boolean;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    >
      {/* Triángulos superiores e inferiores que ya aparecen */}
      <motion.polygon
        points="0,0 50,0 0,50"
        fill="#009688" // Azul oscuro
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ x: "-100%", opacity: 0 }}
      />
      <motion.polygon
        points="100,100 50,100 100,50"
        fill="#004D4D" // Azul oscuro
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.5 }}
        exit={{ x: "100%", opacity: 0 }}
      />

      {/* Triángulos adicionales en las otras esquinas */}
      {showAdditionalTriangles && (
        <>
          <motion.polygon
            points="100,0 50,0 100,50"
            fill="#f59e0b" // Azul claro
            initial={{ x: "100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ x: "100%", opacity: 0 }}
          />
          <motion.polygon
            points="0,100 50,100 0,50"
            fill="#f59e0b" // Azul claro
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.5 }}
            exit={{ x: "-100%", opacity: 0 }}
          />
        </>
      )}
    </svg>
  );
};

export default BackgroundHeroTrianglesSVG;
