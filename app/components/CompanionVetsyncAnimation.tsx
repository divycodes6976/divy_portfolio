"use client";

import { useRef } from "react";
import { useInView, motion } from "motion/react";

export default function CompanionVetsyncAnimation() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="w-8 sm:w-10 lg:w-14 mt-auto mb-16 xl:mb-24 2xl:mb-32 relative">
      <motion.img
        className="w-24 scale-150 absolute rotate-[-20deg] translate-x-1"
        initial={{ x: "6rem", rotate: "-20deg", scale: 1.5, opacity: 0 }}
        animate={isInView && { x: "0.25rem", rotate: "-20deg", scale: 1.5, opacity: 1 }}
        transition={{ delay: 0.4 }}
        src="/images/companion.png"
        width={500}
        height={500}
        alt="Message bubble"
      />
    </div>
  );
}
