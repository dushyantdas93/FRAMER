import React, { useState } from "react";
import { motion } from "framer-motion";

const AddToCartButton = () => {
  const [isAdded, setIsAdded] = useState(false);

  const handleClick = () => {
    if (!isAdded) {
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000); // Reset after 2 seconds
    }
  };

  return (
    <div className="relative">
      <motion.button
        className={`bg-blue-500 text-white py-2 px-4 rounded flex items-center justify-center transition-transform ${
          isAdded ? "translate-x-16" : "translate-x-0"
        }`}
        initial={{ x: 0 }}
        animate={{ x: isAdded ? 100 : 0 }}
        transition={{ duration: 0.5 }}
        onClick={handleClick}
      >
        {isAdded ? (
          <span className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Done
          </span>
        ) : (
          "Add to Cart"
        )}
      </motion.button>
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: isAdded ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <svg
          className="w-6 h-6 text-green-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 13l4 4L19 7"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default AddToCartButton;
