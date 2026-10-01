"use client";

import { motion, cancelFrame, frame } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function AnimatedCursor() {
  const lenisRef = useRef<LenisRef>(null);
  const isHovered = useHoverStore((state) => state.isHovered);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function update(data: { timestamp: number }) {
      const time = data.timestamp;
      lenisRef.current?.lenis?.raf(time);
    }
    frame.update(update, true);

    return () => cancelFrame(update);
  }, []);

  useEffect(() => {
    const calculateViewport = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", calculateViewport);
    return () => {
      window.removeEventListener("mousemove", calculateViewport);
    };
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false, lerp: 0.08, wheelMultiplier: 1 }} ref={lenisRef}></ReactLenis>
      <motion.div
        className="fixed z-50 invisible md:visible hidden md:flex items-end pointer-events-none"
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: isHovered !== "none" ? 1 : 0,
          scale: isHovered !== "none" ? 1 : 0,
          left: cursorPosition.x,
          top: cursorPosition.y - 110,
          transition: { duration: 0.2, ease: [0, 0, 0.58, 1] },
        }}
      >
        <motion.img className="w-24 scale-[0.8]" src="/images/companion.png" width={500} height={500} alt="Message bubble" />
        <div className="w-36 h-[12.5rem] flex items-center">
          <motion.img
            className="w-36 scale-110 absolute"
            initial={{ x: "-5rem", scale: 0, opacity: 0 }}
            animate={{ x: isHovered !== "none" ? 0 : "-5rem", scale: isHovered !== "none" ? 1.1 : 0, opacity: isHovered !== "none" ? 1 : 0 }}
            transition={{ delay: 0.1 }}
            src="/images/bubble-end.png"
            width={500}
            height={500}
            alt="Message bubble"
          />
          <motion.p
            className="w-36 mx-auto text-center relative"
            initial={{ x: "-5rem", scale: 0, opacity: 0 }}
            animate={{ x: isHovered !== "none" ? 0 : "-5rem", scale: isHovered !== "none" ? 1 : 0, opacity: isHovered !== "none" ? 1 : 0 }}
            transition={{ delay: 0.1 }}
          >
            {isHovered === "email" ? "Let's talk! Shoot me an email." : "Let's visit it to have a better look!"}
          </motion.p>
        </div>
      </motion.div>
    </>
  );
}
