"use client";

import React from "react";
import dynamic from "next/dynamic";

const Dither = dynamic(() => import("./Dither"), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-transparent" />,
});

interface DitherBgProps {
  opacity?: number;
  className?: string;
  waveColor?: string;
}

export default function DitherBg({
  opacity = 0.22,
  className = "",
  waveColor = "0.3254901960784314,0.3176470588235294,0.3176470588235294",
}: DitherBgProps) {
  return (
    <div
      className={`absolute inset-0 z-0 overflow-hidden pointer-events-none rounded-[inherit] ${className}`}
      style={{ opacity }}
    >
      <Dither
        waveColor={waveColor}
        disableAnimation={false}
        enableMouseInteraction={true}
        mouseRadius={0.3}
        colorNum={4}
        waveAmplitude={0.3}
        waveFrequency={3}
        waveSpeed={0.05}
      />
    </div>
  );
}
