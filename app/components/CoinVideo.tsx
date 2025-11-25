"use client";

import { useState, useRef, useEffect } from "react";

export default function CoinVideo() {
  const [isHovering, setIsHovering] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isHovering) {
      video.loop = true;
      video.play();
    } else {
      video.loop = false;
      video.pause();
    }
  }, [isHovering]);

  return (
    <div
      className={`w-full mb-6 rounded overflow-hidden border-4 transition-colors ${
        isHovering ? "border-white" : "border-black"
      }`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        playsInline
        className="w-full h-auto"
      >
        <source src="/img/coin-toss.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

