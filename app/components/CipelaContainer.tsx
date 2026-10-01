"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function CipelaContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isHovered = useHoverStore((state) => state.isHovered);
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered === "cipela") {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("LaunchSignal video play error:", err);
        });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isHovered]);

  return (
    <motion.div className="w-full lg:w-[50%] relative border-2 border-foreground overflow-hidden" onMouseEnter={() => setIsHovered("cipela")} onMouseLeave={() => setIsHovered("none")}>
      <Link target="_blank" href="https://www.launch-signal.tech/">
        <Image
          className={`w-full select-none relative z-20 transition-all duration-300 ${
            isHovered === "cipela" && isPlaying ? "opacity-0" : "opacity-100"
          } ${isHovered === "cipela" ? "saturate-100" : "saturate-0"}`}
          src="/images/launchsignal.png"
          width={1000}
          height={1000}
          alt="LaunchSignal - Startup Discovery & Feedback Platform"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 z-10 w-full h-full object-cover select-none"
          src="/videos/launchsignal.mp4"
          loop
          muted
          playsInline
          preload="auto"
          onPlaying={() => setIsPlaying(true)}
          aria-label="A video showcasing LaunchSignal"
        />
        <div className="absolute z-30 flex inset-0">
          <div className="w-fit h-fit mt-auto sm:mt-16 m-1 sm:m-4 p-1 sm:p-2 relative bg-white border-2 border-foreground cursor-pointer">
            <p className="w-[8rem] text-xs sm:text-base text-center">
              Another portfolio project is <span className="font-semibold">LaunchSignal</span>, which is a startup discovery platform.
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
