"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function MediSearch() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHovered = useHoverStore((state) => state.isHovered);
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    if (!videoRef || !videoRef.current) return;

    if (videoRef.current) {
      if (isHovered === "medisearch") {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <motion.div className="w-full lg:w-[50%] relative border-2 border-foreground overflow-hidden" onMouseEnter={() => setIsHovered("medisearch")} onMouseLeave={() => setIsHovered("none")}>
      <Link target="_blank" href="https://typebattle-wheat.vercel.app/practice" className="block relative w-full h-full">
        <Image
          className={`w-full select-none relative z-20 transition-all duration-300 ${
            isHovered === "medisearch" ? "opacity-0 saturate-100" : "opacity-100 saturate-0"
          }`}
          src="/images/typebattle.png"
          width={1280}
          height={720}
          alt="TypeBattle - Real-time Multiplayer Typing Battle"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 z-10 w-full h-full object-cover select-none"
          src="/videos/typebattle.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="A video showcasing TypeBattle"
        />
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div className="w-fit h-fit sm:mt-12 m-1 sm:m-4 p-1 sm:p-2 relative bg-white border-2 border-foreground cursor-pointer pointer-events-auto">
            <p className="w-[7rem] sm:w-[13rem] text-xs sm:text-base text-center">
              A real-time multiplayer typing battle platform <span className="font-semibold">TypeBattle</span>, built for speed racing and typing practice.
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
