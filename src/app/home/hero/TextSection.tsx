import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const TextSection = () => {
  return (
    <motion.div
      className="text-center mb-8"
      initial="hidden"
      animate="visible"
      transition={{ duration: 1 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl lg:text-8xl font-bold"
        variants={textVariant}
        transition={{ delay: 0.2, duration: 1 }}
      >
        Guillermo Navarro
      </motion.h1>
      <motion.h2
        className="text-3xl md:text-5xl lg:text-6xl mt-4"
        variants={textVariant}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Software Developer
      </motion.h2>
      <motion.p
        className="text-xl md:text-2xl lg:text-3xl mt-4 mx-4 italic"
        variants={textVariant}
        transition={{ delay: 0.6, duration: 1 }}
      >
        Transforming Ideas into Efficient, Scalable Software Solutions
      </motion.p>
    </motion.div>
  );
};

export default TextSection;
