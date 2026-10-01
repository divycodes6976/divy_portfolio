"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useAnimate, useInView, motion } from "motion/react";
import { stagger } from "motion";
import { useHoverStore } from "../providers/counter-store-provider";

export default function Email() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    if (isInView) animate([["span", { transform: "translateY(0)" }, { duration: 0.4, ease: [0.33, 1, 0.68, 1], delay: stagger(0.02, { startDelay: 0.4 }) }]]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <div
      ref={scope}
      className="w-full h-full lg:h-auto mt-4 xs:mt-0 flex justify-center items-center text-[5vw] xs:text-[3.14vw] 2xl:text-5xl 2xl:leading-[1.1] text-center lg:inline-block leading-[1.1] overflow-hidden"
    >
      <Link onMouseEnter={() => setIsHovered("email")} onMouseLeave={() => setIsHovered("none")} className="relative z-10" target="_blank" href="mailto:alamjamir15@gmail.com">
        {"divyprakashpandey6@gmail.com".split("").map((char, i) => (
          <motion.span key={i} className="inline-block" initial={{ y: "100%" }}>
            {char}
          </motion.span>
        ))}
      </Link>
    </div>
  );
}
