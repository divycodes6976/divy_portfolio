"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export default function PicContainer() {
  const [isHovered, setIsHovered] = useState<boolean>(false);
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
    <motion.div
      id="pic-container"
      className="lg:w-[25%] col-span-2 sm:col-span-1 row-span-3 border-2 border-foreground relative flex flex-row-reverse justify-between"
      onHoverStart={() => setIsHovered(true)}
    >
      <div className="w-fit xs:w-32 sm:w-24 h-fit mt-auto sm:mt-auto 2xl:mt-6 m-1 sm:m-6 p-2 relative bg-white border-2 border-foreground">
        <p className="w-16 xs:w-auto text-xs sm:text-base text-center leading-[1.25]">This is me!</p>
      </div>
      <div className="w-0 md:w-[5.5rem] xl:w-28 mr-4 xl:mr-10 ml-[2%] 2xl:ml-10 m-10 h-fit relative">
        <motion.img
          className="w-full absolute"
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={isHovered && { opacity: 1, scale: 1, x: 0 }}
          src="/images/bubbles.png"
          width={500}
          height={500}
          alt="Message bubble"
        />
        <motion.p
          className="w-20 mx-3 my-[2.1rem] relative text-center leading-[1.25]"
          initial={{ opacity: 0, scale: 0, x: 100, y: 0 }}
          animate={isHovered && { opacity: 1, scale: 1, x: viewportWidth >= 1280 ? 0 : "-10px", y: viewportWidth >= 1280 ? 0 : "-6px" }}
        >
          Working on cool projects!
        </motion.p>
      </div>
    </motion.div>
  );
}
