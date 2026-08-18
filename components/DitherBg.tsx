"use client";

import React, { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const Dither = dynamic(() => import("./Dither"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

interface DitherBgProps {
  opacity?: number;
  className?: string;
  waveColor?: string;
  waveSpeed?: number;
  waveFrequency?: number;
  waveAmplitude?: number;
}

export default function DitherBg({
  opacity = 0.25,
  className = "",
  waveColor = "0.3254901960784314,0.3176470588235294,0.3176470588235294",
  waveSpeed = 0.22,
  waveFrequency = 3.5,
  waveAmplitude = 0.38,
}: DitherBgProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use IntersectionObserver to only render active WebGL shader when card is in/near viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "300px", // pre-render when within 300px of viewport
        threshold: 0,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-[inherit] ${className}`}
      style={{ opacity }}
    >
      {isVisible ? (
        <Dither
          waveColor={waveColor}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.35}
          colorNum={4}
          pixelSize={2.5}
          waveAmplitude={waveAmplitude}
          waveFrequency={waveFrequency}
          waveSpeed={waveSpeed}
        />
      ) : (
        <div className="w-full h-full bg-transparent" />
      )}
    </div>
  );
}
