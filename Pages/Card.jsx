import { motion } from "framer-motion";

const Card = () => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      <img
        className="w-full h-48 object-cover"
        src="https://via.placeholder.com/400x300"
        alt="Card"
      />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Card Title</h2>
        <p className="text-gray-600">
          This is a description of the card. It provides additional information
          about the card content.
        </p>
      </div>
      <div className="p-4 border-t border-gray-200 flex justify-between items-center">
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Action
        </button>
        <span className="text-gray-500 text-sm">5 minutes ago</span>
      </div>
    </motion.div>
  );
};

export default Card;
