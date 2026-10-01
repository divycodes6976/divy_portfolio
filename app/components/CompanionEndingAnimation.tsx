"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function CompanionEndingAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-10 sm:w-14 h-14 sm:h-20 mt-auto relative">
      <motion.img
        className="w-24 scale-150 absolute rotate-[20deg] -translate-x-1 translate-y-4"
        initial={{ x: "-5rem", y: "1rem", rotate: "20deg", scale: 1.5, opacity: 0 }}
        animate={isInView && { x: "-0.25rem", y: "1rem", rotate: "20deg", scale: 1.5, opacity: 1 }}
        transition={{ delay: 0.4 }}
        src="/images/companion.png"
        width={500}
        height={500}
        alt="Message bubble"
      />
    </div>
  );
}
