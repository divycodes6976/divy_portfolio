"use client";

import { useEffect, useState } from "react";

export default function Time() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const getISTTime = () => {
      const now = new Date();
      return now.toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour12: true,
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    };

    setCurrentTime(getISTTime());
    const interval = setInterval(() => {
      setCurrentTime(getISTTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <span className={`font-ubuntu uppercase`}>{currentTime}</span>;
}
