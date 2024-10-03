import { motion } from "framer-motion";

const TriangleSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      width="100%"
      height="100%"
    >
      <motion.polygon
        points="50,100 0,0 100,0" // Triángulo que apunta hacia abajo
        fill="#FF6347" // Color de la figura (puedes ajustarlo)
        initial={{ y: "100%", opacity: 0 }} // Posición fuera de la pantalla
        animate={{ y: "50%", opacity: 1 }} // Desplazarse al centro inferior
        transition={{ duration: 2 }} // Duración de la animación
        exit={{ y: "100%", opacity: 0 }} // Desplazarse fuera de la pantalla
      />
    </svg>
  );
};

export default TriangleSVG;
