"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import { Email, Github, Linkedin, Resume } from "./Icons";

export default function SocialsContainer() {
  const [isHovered, setIsHovered] = useState<string>("none");

  return (
    <div className="w-full flex-1 mx-auto my-auto flex flex-row items-center justify-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 lg:gap-4 xl:gap-5 text-2xl xs:text-3xl sm:text-5xl lg:text-5xl xl:text-6xl pt-2 sm:pt-7 pb-1 sm:pb-2 px-1 sm:px-2">
      <Link className="relative z-20" target="_blank" href="mailto:divyprakashpandey6@gmail.com">
        <div className="relative flex flex-col items-center justify-center cursor-pointer">
          <motion.div initial={{ rotate: 10, y: 0 }} whileHover={{ rotate: 0, y: -6 }} onHoverStart={() => setIsHovered("email")} onHoverEnd={() => setIsHovered("none")}>
            <Email className="saturate-0" />
          </motion.div>
          <span className={`absolute bottom-[108%] left-1/2 -translate-x-1/2 bg-white text-foreground border border-foreground px-1.5 py-0.5 text-xs font-semibold rounded shadow-sm whitespace-nowrap pointer-events-none transition-all duration-200 ${isHovered === "email" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
            Email
          </span>
        </div>
      </Link>
      <Link className="relative z-20" target="_blank" href="https://github.com/divycodes6976">
        <div className="relative flex flex-col items-center justify-center cursor-pointer">
          <motion.div initial={{ rotate: -13, y: 0 }} whileHover={{ rotate: 0, y: -6 }} onHoverStart={() => setIsHovered("github")} onHoverEnd={() => setIsHovered("none")}>
            <Github className="saturate-0" />
          </motion.div>
          <span className={`absolute bottom-[108%] left-1/2 -translate-x-1/2 bg-white text-foreground border border-foreground px-1.5 py-0.5 text-xs font-semibold rounded shadow-sm whitespace-nowrap pointer-events-none transition-all duration-200 ${isHovered === "github" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
            Github
          </span>
        </div>
      </Link>
      <Link className="relative z-20" target="_blank" href="https://www.linkedin.com/in/divy-prakash-pandey-504101252/">
        <div className="relative flex flex-col items-center justify-center cursor-pointer">
          <motion.div initial={{ rotate: -5, y: 0 }} whileHover={{ rotate: 0, y: -6 }} onHoverStart={() => setIsHovered("linkedin")} onHoverEnd={() => setIsHovered("none")}>
            <Linkedin className="saturate-0" />
          </motion.div>
          <span className={`absolute bottom-[108%] left-1/2 -translate-x-1/2 bg-white text-foreground border border-foreground px-1.5 py-0.5 text-xs font-semibold rounded shadow-sm whitespace-nowrap pointer-events-none transition-all duration-200 ${isHovered === "linkedin" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
            LinkedIn
          </span>
        </div>
      </Link>
      <Link className="relative z-20" target="_blank" href="/resume.pdf">
        <div className="relative flex flex-col items-center justify-center cursor-pointer">
          <motion.div initial={{ rotate: 8, y: 0 }} whileHover={{ rotate: 0, y: -6 }} onHoverStart={() => setIsHovered("resume")} onHoverEnd={() => setIsHovered("none")}>
            <Resume className="saturate-0" />
          </motion.div>
          <span className={`absolute bottom-[108%] left-1/2 -translate-x-1/2 bg-white text-foreground border border-foreground px-1.5 py-0.5 text-xs font-semibold rounded shadow-sm whitespace-nowrap pointer-events-none transition-all duration-200 ${isHovered === "resume" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1"}`}>
            Resume
          </span>
        </div>
      </Link>
    </div>
  );
}
