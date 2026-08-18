"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OriginsLoaderProps {
  /**
   * Callback fired when the stroke drawing animation completes
   */
  onComplete?: () => void;
  /**
   * If true, will automatically fade out and dismiss after completing
   */
  autoDismiss?: boolean;
  /**
   * Animation duration in seconds (default: 3.4s)
   */
  duration?: number;
  /**
   * Mode: "fullscreen" for full page cover, "inline" for page embedded
   */
  mode?: "fullscreen" | "inline";
  /**
   * Stroke width for the stroke lines (default: 2.0)
   */
  strokeWidth?: number;
}

// Single continuous geometric stroke paths for "ORIGINS" in thin Geist proportions
// Zero divided lines, zero icons, zero glows
const ORIGINS_GLYPHS = [
  // O: Smooth unbroken geometric oval
  {
    id: "glyph-O",
    strokePath: "M 165,50 C 134,50 110,77 110,110 C 110,143 134,170 165,170 C 196,170 220,143 220,110 C 220,77 196,50 165,50 Z",
  },
  // R: Stem, bowl, and leg
  {
    id: "glyph-R",
    strokePath: "M 250,170 L 250,50 L 305,50 C 330,50 345,63 345,80 C 345,97 330,110 305,110 L 250,110 M 298,110 L 345,170",
  },
  // I: Pure vertical stem
  {
    id: "glyph-I1",
    strokePath: "M 375,50 L 375,170",
  },
  // G: Continuous outer arc and inner crossbar
  {
    id: "glyph-G",
    strokePath: "M 505,78 C 495,60 480,50 460,50 C 429,50 405,77 405,110 C 405,143 429,170 460,170 C 495,170 515,142 515,110 L 460,110",
  },
  // I: Pure vertical stem
  {
    id: "glyph-I2",
    strokePath: "M 545,50 L 545,170",
  },
  // N: Continuous 3-point unbroken single stroke
  {
    id: "glyph-N",
    strokePath: "M 575,170 L 575,50 L 675,170 L 675,50",
  },
  // S: Continuous smooth S-curve
  {
    id: "glyph-S",
    strokePath: "M 795,78 C 786,60 772,50 755,50 C 728,50 710,65 710,80 C 710,100 730,107 758,112 C 786,117 800,126 800,141 C 800,158 782,170 755,170 C 733,170 719,160 712,145",
  },
];

export default function OriginsLoader({
  onComplete,
  autoDismiss = true,
  duration = 3.4,
  mode = "fullscreen",
  strokeWidth = 2.0,
}: OriginsLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Total animation runtime before triggering completion & dismissal
    const finishTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
      if (autoDismiss) {
        setIsVisible(false);
      }
    }, duration * 1000 + 400);

    return () => clearTimeout(finishTimer);
  }, [duration, onComplete, autoDismiss]);

  const containerClasses =
    mode === "fullscreen"
      ? "fixed inset-0 z-[999999] flex flex-col items-center justify-center bg-white text-black select-none px-6 pointer-events-auto"
      : "w-full min-h-[60vh] flex flex-col items-center justify-center bg-white text-black select-none px-6";

  const strokeDuration = duration * 0.75;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="origins-loader-screen"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.75, ease: [0.16, 1, 0.3, 1] },
          }}
          className={containerClasses}
        >
          {/* Main SVG with Continuous Stroke Formation */}
          <div className="w-full max-w-5xl flex flex-col items-center justify-center">
            <svg
              viewBox="0 0 920 220"
              className="w-full h-auto max-h-[280px] overflow-visible"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="ORIGINS"
              role="img"
            >
              {/* Single Set of Pure Thin Geist Glyphs — Zero Duplicates, Zero Icons, Zero Glows */}
              {ORIGINS_GLYPHS.map((glyph, index) => (
                <motion.path
                  key={`stroke-${glyph.id}`}
                  d={glyph.strokePath}
                  fill="none"
                  stroke="#000000"
                  strokeWidth={strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{
                    pathLength: 1,
                    opacity: 1,
                    transition: {
                      pathLength: {
                        duration: strokeDuration,
                        ease: [0.22, 1, 0.36, 1],
                        delay: index * 0.1,
                      },
                      opacity: {
                        duration: 0.3,
                        delay: index * 0.1,
                      },
                    },
                  }}
                />
              ))}
            </svg>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
