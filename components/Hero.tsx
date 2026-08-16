"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Multi-layered parallax transforms
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "38%"]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.96]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.15]);
  const subtitleY = useTransform(scrollYProgress, [0, 1], ["0%", "-18%"]);

  // Mascot 3D Image parallax & motion attributes
  const imageY = useTransform(scrollYProgress, [0, 1], ["0px", "50px"]);
  const imageX = useTransform(scrollYProgress, [0, 1], ["0px", "-15px"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

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
      {/* Hero Central Architectural Typography & 3D Mascot Image */}
      <div className="py-6 sm:py-12 md:py-16 space-y-8 sm:space-y-12 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 sm:gap-12">
          {/* Main Title Typography */}
          <motion.div
            style={{ y: titleY, scale: titleScale, opacity }}
            className="select-none will-change-transform origin-left"
          >
            <h1 className="text-6xl sm:text-8xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.85] sm:leading-[0.82] font-geist-thin tracking-[-0.05em] sm:tracking-[-0.07em] text-black uppercase break-words">
              ORIGINS
            </h1>
            <h1 className="text-6xl sm:text-8xl md:text-[15vw] lg:text-[180px] xl:text-[230px] leading-[0.85] sm:leading-[0.82] font-geist-thin tracking-[-0.05em] sm:tracking-[-0.07em] text-black break-words">
              2026
            </h1>
          </motion.div>

          {/* 3D Mascot Builder Image with Scale, X, Y Axis Motion Attributes */}
          <motion.div
            style={{ y: imageY, x: imageX, scale: imageScale }}
            initial={{ opacity: 0, scale: 0.85, y: 35, x: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex justify-center lg:justify-end shrink-0 select-none will-change-transform"
          >
            <motion.div
              animate={{ y: [0, -12, 0], rotate: [0, 1, 0, -1, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative w-52 sm:w-72 md:w-80 lg:w-[340px] xl:w-[400px] aspect-[3/4]"
            >
              <Image
                src="/images/1.png"
                alt="OUANTUM ORIGINS 2026 Builder Mascot"
                fill
                priority
                sizes="(max-width: 640px) 208px, (max-width: 768px) 288px, (max-width: 1024px) 320px, 400px"
                className="object-contain drop-shadow-xl"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Subtitle & Actions */}
        <motion.div
          style={{ y: subtitleY }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 pt-2 sm:pt-6 will-change-transform"
        >
          <div className="lg:col-span-6 space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-geist-light tracking-tight leading-[1.05] text-black uppercase">
              BUILD WHAT<br />SHOULD EXIST.
            </h2>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 sm:space-y-8">
            <p className="text-sm sm:text-lg lg:text-xl text-neutral-600 font-inter font-light leading-relaxed max-w-2xl">
              A 24-hour applied innovation sprint by <strong>OUANTUM</strong> for ideas that solve real problems, improve lives, and create meaningful systemic impact.
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
        </motion.div>
      </div>
    </section>
  );
}
