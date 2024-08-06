import React from 'react'
import {motion, useMotionValue, useTransform } from 'framer-motion'


function Foldable() {
  const xDrag = useMotionValue(0)
  const xLeftSection = useTransform(xDrag, [0, 300], ["100%", "0%"]);
  const xRightSection = useTransform(xDrag, [0, 300], ["-100%", "0%"]);
  const centerScale = useTransform(xDrag, [150, 300], [0, 1]);
  const centerBrightness = useTransform(xDrag, [150, 300], [0.2, 1]);

  return (
    <div className="mx-auto grid aspect-video max-h-4[80vh] p-8">
      <div className="grid grid-cols-3 aspect-video h-full w-full [grid-area:1/1]">
        <motion.div
          style={{ x: xLeftSection ,skewY:"-1deg"  }}
          className="map-image translate-x-full -skew-y-1 origin-bottom-right  border-r border-[rgba(255,255,255,.1)] shadow-2xl"
        />
        <motion.div
          style={{ scaleX: centerScale, "--brightness": centerBrightness }}
          className="map-image bg-[50%] brightness-[--brightness]"
        />

        <motion.div
          style={{ x: xRightSection ,skewY:"1deg" }}
          className="map-image bg-[100%] -translate-x-full skew-y-1 origin-bottom-left border-l border-[rgba(255,255,255,.1)] shadow-2xl"
        />
      </div>
      <motion.div
        drag="x"
        _dragX={xDrag}
        dragConstraints={{ left: 0, right: 300 }}
        className=" [grid-area:1/1] border border-black"
      />
    </div>
  );
}

export default Foldable