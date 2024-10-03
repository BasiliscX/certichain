import { motion } from "framer-motion";
import ProductSVG from "@/components/svg/ProductSVG";
import { Position } from "@/app/home/hero/IPosition";

interface ProductProps {
  initialPosition: Position;
  targetPosition: Position;
  showTooltip: boolean;
  setShowTooltip: (value: boolean) => void;
}

const Product: React.FC<ProductProps> = ({
  initialPosition,
  targetPosition,
  showTooltip,
  setShowTooltip,
}) => {
  const defaultMessage = "Hi Guille, I'd like to contact you for..."; // Mensaje por defecto

  const handleClick = () => {
    if (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER) {
      const whatsappUrl = `https://wa.me/${
        process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
      }?text=${encodeURIComponent(defaultMessage)}`;
      window.open(whatsappUrl, "_blank"); // Abre WhatsApp en una nueva pestaña
    } else {
      console.error("WhatsApp number not provided");
    }
  };

  return (
    <>
      <motion.div
        id="product"
        className="absolute cursor-pointer"
        initial={{ top: initialPosition.y, left: initialPosition.x }}
        animate={{ top: targetPosition.y, left: targetPosition.x }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onClick={handleClick} // Abre WhatsApp al hacer clic
      >
        <ProductSVG />

        {showTooltip && (
          <div
            className="absolute bg-gray-700 text-white text-center p-2 rounded-lg"
            style={{
              bottom: "80%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            Contact me via WhatsApp!
          </div>
        )}
      </motion.div>
    </>
  );
};

export default Product;
