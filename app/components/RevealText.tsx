"use client";

import { useEffect } from "react";
import { useAnimate, useInView, motion } from "motion/react";
import { stagger } from "motion";

export default function RevealText({ text }: { text: string }) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) animate([["span", { transform: "translateY(0)" }, { duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: stagger(0.02, { startDelay: 0.4 }) }]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div ref={scope} className="inline-block overflow-hidden">
      {text.split("").map((char, i) => (
        <motion.span key={i} className="inline-block" initial={{ y: "100%" }}>
          {char}
        </motion.span>
      ))}
    </div>
  );
}
