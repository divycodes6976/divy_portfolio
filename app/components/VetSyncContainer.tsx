"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function VetSyncContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isHovered = useHoverStore((state) => state.isHovered);
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered === "vetsync") {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("MediQueue video play error:", err);
        });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isHovered]);

  return (
    <motion.div className="w-full lg:w-[60%] relative border-2 border-foreground overflow-hidden" onMouseEnter={() => setIsHovered("vetsync")} onMouseLeave={() => setIsHovered("none")}>
      <Link target="_blank" href="https://medi-queue-seven-lime.vercel.app/display" className="block relative w-full h-full">
        <Image
          className={`w-full select-none relative z-20 transition-all duration-300 ${
            isHovered === "vetsync" && isPlaying ? "opacity-0" : "opacity-100"
          } ${isHovered === "vetsync" ? "saturate-100" : "saturate-0"}`}
          src="/images/mediqueue.png"
          width={1024}
          height={499}
          alt="MediQueue — Smart Hospital OPD Queue"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 z-10 w-full h-full object-cover select-none"
          src="/videos/mediqueue.mp4"
          loop
          muted
          playsInline
          preload="auto"
          onPlaying={() => setIsPlaying(true)}
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
