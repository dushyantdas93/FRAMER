import { motion } from "framer-motion";

const AnimatedButton = () => {
  return (
    <motion.button
      className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none"
      initial={{ scale: 1, opacity: 0.8 }}
      whileHover={{ scale: 1.1, opacity: 1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}
    >
      Click Me
    </motion.button>
  );
};

export default AnimatedButton;
