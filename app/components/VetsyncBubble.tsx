"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion } from "motion/react";

export default function VetsyncBubble() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const calculateViewport = () => {
      setViewportWidth(window.innerWidth);
    };
    calculateViewport();
    window.addEventListener("resize", calculateViewport);
    return () => {
      window.removeEventListener("resize", calculateViewport);
    };
  }, []);

  return (
    <div ref={ref} className="mb-20 xs:mb-24 xl:mb-32 2xl:mb-40 mt-4 lg:mt-auto relative flex justify-center">
      <motion.img
        className="w-[68vw] sm:w-[54vw] lg:w-[33vw] 2xl:w-[34.5rem] max-w-[34.5rem] scale-100 absolute"
        initial={{ x: "10rem", scale: 1, opacity: 0 }}
        animate={isInView && { x: viewportWidth > 1280 ? 0 : 0, scale: 1, opacity: 1 }}
        transition={{ delay: 0.7 }}
        src="/images/bubble-vetsync.png"
        width={500}
        height={500}
        alt="Message bubble"
      />
      <motion.p
        className="w-[61.5vw] xs:w-[59vw] sm:w-[48vw] lg:w-[31vw] 2xl:w-[31rem] max-w-[31rem] mx-[5vw] sm:mx-[1.5vw] text-center relative"
        style={{ fontSize: viewportWidth >= 1536 ? "16px" : viewportWidth >= 1024 ? "0.93vw" : viewportWidth >= 640 ? "1.565vw" : viewportWidth >= 500 ? "1.92vw" : "2vw" }}
        initial={{ x: "10rem", y: 0, scale: 0, opacity: 0 }}
        animate={
          isInView && {
            x: 0,
            y: viewportWidth >= 1280 ? "1rem" : viewportWidth >= 1280 ? "0.7rem" : "0.4rem",
            scale: 1,
            // scale: viewportWidth >= 1563 ? "90%" : viewportWidth > 1280 ? 0.9 : viewportWidth >= 400 ? 0.7 : 0.6,
            opacity: 1,
          }
        }
        transition={{ delay: 0.7 }}
      >
        Let me show you <span className="font-semibold">MediQueue</span>. This is a smart hospital OPD queue management platform Divy built to streamline patient flow, eliminate chaotic waiting rooms, and provide real-time live token tracking for doctors and patients.
        <br />
        Quite impressive, right? MediQueue delivers live queue status, digital OPD displays, and automated notifications to modernize healthcare facilities. Pretty neat stuff, huh?
      </motion.p>
    </div>
  );
}

