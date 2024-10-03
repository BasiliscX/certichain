import { motion } from "framer-motion";

interface BackgroundGalleryCoverSVGProps {
  xLeft: number;
  xRight: number;
}

const BackgroundGalleryCoverSVG: React.FC<BackgroundGalleryCoverSVGProps> = ({
  xLeft,
  xRight,
}) => {
  return (
    <>
      {/* Square 1: Moving left */}
      <motion.div
        style={{
          x: `${xLeft}%`,
        }}
        className="absolute z-30 inset-0 bg-blue-800 w-full h-full"
      />
      {/* Square 2: Moving right */}
      <motion.div
        style={{
          x: `${xRight}%`,
        }}
        className="absolute z-30 inset-0 bg-blue-600 w-full h-full right-0"
      />
    </>
  );
};

export default BackgroundGalleryCoverSVG;
