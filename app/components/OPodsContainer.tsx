"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { useHoverStore } from "../providers/counter-store-provider";

export default function OPodsContainer() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const isHovered = useHoverStore((state) => state.isHovered);
  const setIsHovered = useHoverStore((state) => state.setIsHovered);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovered === "opods") {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn("InterviewPrep AI video play error:", err);
        });
      }
    } else {
      video.pause();
      setIsPlaying(false);
    }
  }, [isHovered]);

  return (
    <motion.div className="w-full lg:w-[50%] relative border-2 border-foreground overflow-hidden" onMouseEnter={() => setIsHovered("opods")} onMouseLeave={() => setIsHovered("none")}>
      <Link target="_blank" href="https://inteview-prep-ai.vercel.app/" className="block relative w-full h-full">
        <Image
          className={`w-full select-none relative z-20 transition-all duration-300 ${
            isHovered === "opods" && isPlaying ? "opacity-0" : "opacity-100"
          } ${isHovered === "opods" ? "saturate-100" : "saturate-0"}`}
          src="/images/interview-prepai.png"
          width={1280}
          height={720}
          alt="InterviewPrep AI - AI-powered Mock Interview Platform"
        />
        <video
          ref={videoRef}
          className="absolute inset-0 z-10 w-full h-full object-cover select-none"
          src="/videos/interview-prepai.mp4"
          loop
          muted
          playsInline
          preload="auto"
          onPlaying={() => setIsPlaying(true)}
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
