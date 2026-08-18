"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import mascotImg from "@/public/images/1.png";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);

  // Mascot Static Attributes: Scale, X-axis, Y-axis
  const mascotScale = 1.10;
  const mascotX = 0; // in px
  const mascotY = -10; // in px

  const scrollToExplore = () => {
    const element = document.getElementById("overview");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative min-h-[85vh] sm:min-h-[90vh] bg-white flex flex-col justify-center px-6 sm:px-10 md:px-16 lg:px-20 xl:px-24 pt-6 pb-16 w-full overflow-hidden"
    >
      {/* 3D Mascot Builder Image with Scale, X-axis, and Y-axis Attributes */}
      <div
        style={{
          transform: `translate(${mascotX}px, ${mascotY}px) scale(${mascotScale})`,
          transformOrigin: "center center",
        }}
        className="absolute right-4 sm:right-8 md:right-14 lg:right-20 xl:right-28 top-8 sm:top-12 md:top-16 lg:top-10 z-20 pointer-events-none select-none"
      >
        <div className="w-32 sm:w-48 md:w-60 lg:w-[300px] xl:w-[380px]">
          <Image
            src={mascotImg}
            alt="OUANTUM ORIGINS 2026 Builder Mascot"
            priority
            sizes="(max-width: 640px) 128px, (max-width: 768px) 192px, (max-width: 1024px) 240px, 380px"
            quality={90}
            className="w-full h-auto object-contain will-change-transform"
          />
        </div>
      </div>

      {/* Hero Central Architectural Typography */}
      <div className="py-6 sm:py-12 md:py-16 space-y-8 sm:space-y-12 relative z-10">
        {/* Main Title Typography */}
        <div className="select-none origin-left max-w-[70vw] lg:max-w-[65vw]">
          <h1 className="text-6xl sm:text-8xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.85] sm:leading-[0.82] font-geist-thin tracking-[-0.05em] sm:tracking-[-0.07em] text-black uppercase break-words">
            ORIGINS
          </h1>
          <h1 className="text-6xl sm:text-8xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.85] sm:leading-[0.82] font-geist-thin tracking-[-0.05em] sm:tracking-[-0.07em] text-black break-words">
            2026
          </h1>
        </div>

        {/* Subtitle & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-6">
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
              BUILD WHAT<br />SHOULD EXIST.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light leading-relaxed max-w-2xl">
              A 24-hour applied innovation sprint by{" "}
              <a
                href="https://www.ouantum.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 text-black hover:opacity-75 font-medium inline-block"
              >
                OUANTUM
              </a>{" "}
              (<span className="font-mono text-xs sm:text-sm text-neutral-500">www.ouantum.com</span>) for ideas that solve real problems, improve lives, and create meaningful systemic impact.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
              <Link
                href="/register"
                className="px-8 sm:px-10 py-3.5 sm:py-4 bg-black text-white text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-800 active:scale-[0.98] transition-all cursor-pointer text-center inline-block"
              >
                REGISTER NOW
              </Link>

              <button
                onClick={scrollToExplore}
                className="px-8 sm:px-10 py-3.5 sm:py-4 bg-neutral-100 text-black text-xs uppercase tracking-widest font-inter rounded-full hover:bg-neutral-200 active:scale-[0.98] transition-all cursor-pointer text-center"
              >
                EXPLORE ORIGINS ↓
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
