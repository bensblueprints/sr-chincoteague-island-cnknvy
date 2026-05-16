"use client";

import { useEffect, useRef } from "react";

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.play().catch(() => {
      // Autoplay blocked — poster image is already showing
    });
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/assets/images/image-0.webp"
      className="w-full h-full object-cover"
    >
      <source src="/assets/hero-video.mp4" type="video/mp4" />
    </video>
  );
}
