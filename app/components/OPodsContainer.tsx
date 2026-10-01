"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function OPodsContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isHovered = useHoverStore((state) => state.isHovered);
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    if (!videoRef || !videoRef.current) return;

    if (videoRef.current) {
      if (isHovered === "opods") {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isHovered]);

  return (
    <motion.div className="w-full lg:w-[50%] relative border-2 border-foreground overflow-hidden" onMouseEnter={() => setIsHovered("opods")} onMouseLeave={() => setIsHovered("none")}>
      <Link target="_blank" href="https://inteview-prep-ai.vercel.app/" className="block relative w-full h-full aspect-video">
        <video
          ref={videoRef}
          className={`w-full h-full object-cover select-none transition-all duration-300 ${
            isHovered === "opods" ? "saturate-100" : "saturate-0"
          }`}
          src="/videos/interview-prepai.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-label="A video showcasing InterviewPrep AI"
        />
        <div className="h-full flex flex-row-reverse justify-between absolute inset-0 z-30 pointer-events-none">
          <div className="w-fit h-fit sm:mt-12 m-1 sm:m-4 p-1 sm:p-2 relative bg-white border-2 border-foreground cursor-pointer pointer-events-auto">
            <p className="w-[7rem] sm:w-[9rem] text-xs sm:text-base text-center">Let&apos;s me show you some of my works...</p>
          </div>
          <div className="w-fit h-fit mt-auto sm:mt-auto sm:mb-[10%] m-1 sm:m-4 p-1 sm:p-2 relative bg-white border-2 border-foreground cursor-pointer pointer-events-auto">
            <p className="w-[7rem] xxs:w-[10rem] sm:w-[13rem] text-xs sm:text-base text-center">
              <span className="font-semibold">InterviewPrep AI</span> is an AI-powered mock interview platform to help candidates practice and prepare for interviews.
            </p>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
