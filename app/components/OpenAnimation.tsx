"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function OpenAnimation() {
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const [dimensions, setDimensions] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    function resize() {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    resize();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const initialPath = `
        M0 0
        L${dimensions.width} 0
        L${dimensions.width} ${dimensions.height + 300}
        Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height + 300}
        L0 0
    `;

  const finalPath = `
        M0 0
        L${dimensions.width} 0
        L${dimensions.width} ${dimensions.height}
        Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height}
        L0 0
    `;

  return (
    isVisible && (
      <motion.div
        className="fixed z-[999] flex h-svh w-screen bg-zinc-950"
        initial={dimensions.width > 0 && { y: 0 }}
        animate={dimensions.width > 0 && { y: "-100vh" }}
        transition={{ duration: 0.5, ease: [0.42, 0, 0.47, 1] }}
      >
        <svg className="absolute top-0 w-full" style={{ height: "calc(100% + 300px)" }}>
          <motion.path
            className="fill-zinc-950"
            d={`M0 0
        L${dimensions.width} 0
        L${dimensions.width} ${dimensions.height + 300}
        Q${dimensions.width / 2} ${dimensions.height} 0 ${dimensions.height + 300}
        L0 0`}
            initial={dimensions.width > 0 && { d: initialPath }}
            animate={dimensions.width > 0 && { d: finalPath }}
            transition={{ duration: 0.75, ease: [0.42, 0, 0.47, 1], delay: 0.25 }}
            onAnimationComplete={() => setIsVisible(false)}
          ></motion.path>
        </svg>
      </motion.div>
    )
  );
}
