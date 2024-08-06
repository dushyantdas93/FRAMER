import React from "react";
import styles from "./bubble.module.css";

const BubbleText = () => {
  return (
    <div className="grid h-screen place-content-center bg-black">
      <BubbleText1 />
    </div>
  );
};

const BubbleText1 = () => {
  return (
    <h2 className="text-center text-5xl font-thin text-indigo-300">
      {"Dushyant Manikpuri".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;
