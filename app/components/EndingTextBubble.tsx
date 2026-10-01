"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function EndingTextBubble() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-28 sm:w-36 h-[7rem] sm:h-[10rem] items-center flex mt-8 mb-auto xl:mb-0 relative -translate-y-5">
      <motion.img
        className="w-36 scale-[1.5] absolute"
        initial={{ x: "-5rem", scale: 0, opacity: 0 }}
        animate={isInView && { x: 0, scale: 1.25, opacity: 1 }}
        transition={{ delay: 0.7 }}
        src="/images/bubble-end.png"
        width={500}
        height={500}
        alt="Message bubble"
      />
      <motion.p
        className="w-36 mx-auto text-xs sm:text-base text-center relative"
        initial={{ x: "-5rem", scale: 0, opacity: 0 }}
        animate={isInView && { x: 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        This is it then. Hope to see you soon.
      </motion.p>
    </div>
  );
}
