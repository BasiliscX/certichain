import { MutableRefObject, useState } from "react";
import { motion } from "framer-motion";
import CloudSVG from "@/components/svg/CloudSVG";
import { handleDrag } from "@/utils/handleDrag";
import { Position } from "./IPosition";

interface CloudProps {
  handleShowProduct: (cloudPosition: Position, codePosition: Position) => void;
  heroRef: MutableRefObject<null>;
}

const Cloud: React.FC<CloudProps> = ({ handleShowProduct, heroRef }) => {
  const [showTooltip, setShowTooltip] = useState(true); // Estado para mostrar el tooltip una vez

  const onDrag = (
    event: MouseEvent | TouchEvent,
    info: { point: Position }
  ) => {
    const cloudPosition = info.point;
    handleDrag("code", cloudPosition, handleShowProduct);
  };

  const handleClick = () => {
    // Mostrar el mensaje solo si el tooltip está visible
    if (showTooltip) {
      alert("What if you combine an idea with programming?");
      // Ocultar el tooltip para que no se vuelva a mostrar hasta la recarga de la página
      setShowTooltip(false);
    }
  };

  return (
    <motion.div
      id="cloud"
      className="absolute w-48 h-48 cursor-pointer"
      style={{ bottom: "50px", left: 0 }}
      drag
      dragConstraints={heroRef}
      dragElastic={0.5}
      onDrag={onDrag}
      onClick={handleClick}
      whileTap={{ scale: 1.1 }}
    >
      <CloudSVG />

      {/* Mostrar tooltip solo si aún no ha sido clicado */}
      {showTooltip && (
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-white text-black rounded-lg px-2 py-1 shadow-lg">
          <span className="font-bold text-lg">!</span>
        </div>
      )}
    </motion.div>
  );
};

export default Cloud;
