"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function VetSyncContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHovered = useHoverStore((state) => state.isHovered);
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    if (!videoRef || !videoRef.current) return;

    if (videoRef.current) {
      if (isHovered === "vetsync") {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <motion.div className="w-full lg:w-[60%] relative border-2 border-foreground overflow-hidden" onMouseEnter={() => setIsHovered("vetsync")} onMouseLeave={() => setIsHovered("none")}>
      <Link target="_blank" href="https://medi-queue-seven-lime.vercel.app/display" className="block relative w-full h-full aspect-video">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover select-none transition-all duration-300 ${
            isHovered === "vetsync" ? "saturate-100" : "saturate-0"
          }`}
          src="/videos/mediqueue.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="A video showcasing MediQueue"
        />
        <div className="absolute z-30 flex inset-0 pointer-events-none">
          <div className="w-fit h-fit mt-auto sm:mt-8 m-1 sm:m-4 p-1 sm:p-2 relative bg-white border-2 border-foreground cursor-pointer pointer-events-auto">
            <p className="w-[8rem] text-xs sm:text-base text-center">
              Go ahead, take a closer look.
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
