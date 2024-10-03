import { motion } from "framer-motion";
import CodeSVG from "@/components/svg/CodeSVG";
import { handleDrag } from "@/utils/handleDrag";
import { Position } from "@/app/home/hero/IPosition"; // Asegúrate de importar tu interfaz Position
import { MutableRefObject } from "react"; // Para tipar heroRef

interface CodeProps {
  handleShowProduct: (cloudPosition: Position, codePosition: Position) => void;
  heroRef: MutableRefObject<null>; // Tipamos heroRef
}

const Code: React.FC<CodeProps> = ({ handleShowProduct, heroRef }) => {
  const onDrag = (
    event: MouseEvent | TouchEvent, // Tipamos el evento de arrastre
    info: { point: Position } // Tipamos la información del arrastre
  ) => {
    const codePosition = info.point;
    handleDrag("cloud", codePosition, handleShowProduct);
  };

  return (
    <motion.div
      id="code"
      className="absolute w-48 h-48 cursor-pointer"
      style={{ top: "0px", right: "0px" }}
      drag
      dragConstraints={heroRef}
      dragElastic={0.5}
      onDrag={onDrag} // Pasamos la función de arrastre
      whileTap={{ scale: 1.1 }} // Efecto al arrastrar
    >
      <CodeSVG />
    </motion.div>
  );
};

export default Code;
